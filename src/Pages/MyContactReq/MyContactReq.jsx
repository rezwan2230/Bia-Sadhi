import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyContactReq = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: contactRequest = [], refetch } = useQuery({
        queryKey: ['contactRequest', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    const handleDeleteContact = (contactPartner) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/contact/${contactPartner._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${contactPartner.name} has been deleted`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            {
                contactRequest.length > 0 ? <> <div className="h-[90vh]">
                    <div>
                        <div>
                            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                                <h2 className="mb-4 text-2xl font-semibold leadi text-center underline">My Contact Request</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-10">
                                        <thead className="w-full mb-20 ">
                                            <tr className="text-xl text-center">
                                                {/* <th className="pr-1"></th> */}
                                                <th className="text-left">Name</th>
                                                <th className="">BiodataId</th>
                                                <th className="">Status</th>
                                                <th className="">Mobile No.</th>
                                                <th className="">Email</th>
                                                <th className="">Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody className=" dark:bg-gray-900 dark:border-gray-700">

                                            {
                                                contactRequest.map((contactPartner) => <tr className=" mt-10" key={contactPartner._id}>
                                                    <td className=" text-lg ">{contactPartner.partnerName}</td>

                                                    <td className="text-lg text-center">
                                                        {contactPartner.biodataId}
                                                    </td>
                                                    <td className="text-lg text-center">
                                                        {contactPartner.status}
                                                    </td>

                                                    <td className="text-lg text-center">
                                                        {contactPartner.status === 'pending' ? '-' : <div>{contactPartner.partnerMobileNo}</div>}
                                                    </td>
                                                    <td className="text-lg text-center">
                                                    {contactPartner.status === 'pending' ? '-' : <div>{contactPartner.partnerEmail}</div>}
                                                    </td>
                                                    <td className="py-2 text-center">
                                                        <button
                                                            onClick={() => handleDeleteContact(contactPartner)}
                                                            className=" bg-red-600 hover:bg-red-800 p-2 rounded-lg text-center">
                                                            <RiDeleteBin2Line className="text-white text-2xl"></RiDeleteBin2Line>
                                                        </button>
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
                            <h3 className="text-4xl -mt-20">You haven't added anyone yet</h3>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyContactReq;