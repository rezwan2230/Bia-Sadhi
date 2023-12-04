import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const bioData = useLoaderData()
    console.log(bioData);

    return (
        <>
            <div>
            </div>

            <div>
                <Elements  stripe={stripePromise}>
                    <CheckoutForm bioData={bioData}></CheckoutForm>
                </Elements>
            </div>



        </>
    );
};

export default Payment;