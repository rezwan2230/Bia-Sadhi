// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { BsQuestionDiamond } from "react-icons/bs";
import useContactRequest from "../../hooks/useContactRequest";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ContactRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const [contactRequest, refetch] = useContactRequest()

    const handleContactApprove = (requestedPerson) => {
        axiosSecure.patch(`users/admin/approveRequest/${requestedPerson._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Approve Successfull',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }



    return (
        <>
         <Helmet>
                <title>Sweetiny | Contact Request</title>
            </Helmet>
            <div>
                {
                    contactRequest.length > 0 ? <> <div className="h-[90vh]">
                        <div>
                            <div>
                                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                                    <h2 className="mb-4 text-2xl font-semibold leadi text-center underline">All Contact Request</h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-10">
                                            <thead className="w-full mb-20 ">
                                                <tr className="text-xl text-center">
                                                    {/* <th className="pr-1"></th> */}
                                                    <th className="text-left">Name</th>
                                                    <th className="">Email</th>
                                                    <th className="">Partner Name</th>
                                                    <th className="">BiodataId</th>
                                                    <th className="">Approve</th>
                                                </tr>
                                            </thead>

                                            <tbody className=" dark:bg-gray-900 dark:border-gray-700">

                                                {
                                                    contactRequest.map((requestedPerson) => <tr className=" mt-10" key={requestedPerson._id}>
                                                        <td className=" text-lg ">{requestedPerson.userName}</td>

                                                        <td className="text-lg text-center">
                                                            {requestedPerson.email}
                                                        </td>
                                                        <td className="text-lg text-center">
                                                            {requestedPerson.partnerName}
                                                        </td>
                                                        <td className="text-lg text-center">
                                                            {requestedPerson.biodataId}
                                                        </td>

                                                        <td className="py-2 text-center">
                                                            {
                                                                requestedPerson.status === 'approve' ? <div className="text-base font-semibold text-green-600   ">Approve</div>
                                                                    :
                                                                    <button
                                                                        onClick={() => handleContactApprove(requestedPerson)}
                                                                        className="p-2 rounded-lg mx-auto bg-yellow-400 hover:bg-green-800 ">
                                                                        <BsQuestionDiamond className="text-2xl  text-black hover:text-white"></BsQuestionDiamond>
                                                                    </button>
                                                            }
                                                        </td>
                                                    </tr>)
                                                }

                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></>

                        : <>
                            <div className="flex justify-center items-center h-[90vh]">
                                <h3 className="text-4xl -mt-20">You haven't added anything yet</h3>
                            </div>
                        </>
                }
            </div>
        </>

    );
};

export default ContactRequest;