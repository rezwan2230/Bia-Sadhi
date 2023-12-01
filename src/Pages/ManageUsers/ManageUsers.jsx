import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleMakeAdmin = (user) => {
        console.log(user);
        axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }

    const handleMakePremium = (user) => {
        console.log(user);
        axiosSecure.patch(`users/admin/premium/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is now premium Customer`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }


    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (

        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi text-center underline">Manage Users</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-10">
                        <thead className="w-full mb-20 ">
                            <tr className="text-xl">
                                {/* <th className="pr-1"></th> */}
                                <th className="mr-10 ">User Name</th>
                                <th className="pr-10 pl-7">Email</th>
                                <th className="pr-10">Make Admin</th>
                                <th className="pr-10">Make Premium</th>
                                <th className="pr-10">Delete</th>
                            </tr>
                        </thead>

                        <tbody className=" dark:bg-gray-900 dark:border-gray-700">

                            {
                                users.map((user) => <tr className=" mt-10" key={user._id}>
                                    <td className=" text-lg ">{user.name}</td>
                                    <td className="text-lg py-2 pl-7">
                                        {user.email}
                                    </td>
                                    <td className="py-2 text-center">
                                        {
                                            user.role === 'admin' ? <div className="text-base font-semibold">Admin</div>
                                                :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="p-2 rounded-lg mx-auto bg-[#D1A054] hover:bg-[#8c6a37]">
                                                    <FaUsers className="text-2xl"></FaUsers>
                                                </button>
                                        }
                                    </td>
                                    <td className="py-2 text-center">
                                        {
                                            user.customerType === 'premium' ? <div className="text-base font-semibold">Premium</div>
                                                :
                                                <button
                                                    onClick={() => handleMakePremium(user)}
                                                    className="p-2 rounded-lg mx-auto bg-rose-300 hover:bg-rose-400">
                                                    <MdWorkspacePremium className="text-2xl"></MdWorkspacePremium>
                                                </button>
                                        }
                                    </td>
                                    <td className="py-2">
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className=" bg-red-600 hover:bg-red-800 p-2 rounded-lg">
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



    );
};

export default ManageUsers;