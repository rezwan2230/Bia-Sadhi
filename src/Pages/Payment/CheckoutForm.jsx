import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, seTransactionId] = useState('')
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const totalPrice = 500;

    useEffect(() => {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
    }, [axiosSecure, totalPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        })
        if (confirmError) {
            console.log('confirm Error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transaction Id : ', paymentIntent.id);
                seTransactionId(paymentIntent.id)

                //now save the payment in the database
                // const payment = {
                //     email: user.email,
                //     price: totalPrice,
                //     transactionId: paymentIntent.id,
                //     data: new Date(), //utc date convert. use moment js to convert
                //     cartIds: cart.map(item => item._id),
                //     menuItemIds: cart.map(item => item.menuId),
                //     status: 'pending'
                // }

                // const res = await axiosSecure.post('/payments', payment)
                // console.log("Payment Save", res.data);
                // refetch()
                // if(res.data?.paymentResult?.insertedId){
                //     Swal.fire({
                //         position: "center",
                //         icon: "success",
                //         title: "Thank you for payment",
                //         showConfirmButton: false,
                //         timer: 1500
                //       });
                //     navigate('/dashboard/paymentHistory')
                // }
            }
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="pt-52 w-96 mx-auto h-[50vh]">
                    <h2 className="text-4xl font-semibold text-center mb-10">Payment: 500 TK</h2>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <div className="flex justify-center -mt-32 mb-28">
                    <button className="button btn-primary mx-auto" type="submit"
                    disabled={!stripe || !clientSecret}
                    >
                        Pay
                    </button>
                </div>

                {/* <p className="text-red-500 text-center -mt-24 mb-[75px]">{error}</p>
                {transactionId && <p className="text-green-600">Your transaction id : {transactionId}</p>} */}


            </form>
        </div>
    );
};

export default CheckoutForm;