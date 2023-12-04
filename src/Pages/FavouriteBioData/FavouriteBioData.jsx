import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const FavouriteBioData = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: favourites = [], refetch } = useQuery({
        queryKey: ['favourites'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/addtofavourite/${user.email}`)
            return res.data
        }
    })

    console.log(favourites);

    const handleDeleteFavourite = (user) => {
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
                axiosPublic.delete(`/addtofavourite/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name} has been deleted`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (

        <>
            <Helmet>
                <title>Sweetiny | Favourites</title>
            </Helmet>


            <div>
                {
                    favourites.length > 0 ? <> <div className="h-[90vh]">
                        <div>
                            <div>
                                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                                    <h2 className="mb-4 text-2xl font-semibold leadi text-center underline">Favourites Biodata</h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-10">
                                            <thead className="w-full mb-20 ">
                                                <tr className="text-xl text-center">
                                                    {/* <th className="pr-1"></th> */}
                                                    <th className="text-left">Name</th>
                                                    <th className="">BiodataId</th>
                                                    <th className="">Permanent Address</th>
                                                    <th className="">Occupation</th>
                                                    <th className="">Delete</th>
                                                </tr>
                                            </thead>

                                            <tbody className=" dark:bg-gray-900 dark:border-gray-700">

                                                {
                                                    favourites.map((user) => <tr className=" mt-10" key={user._id}>
                                                        <td className=" text-lg ">{user.name}</td>

                                                        <td className="text-lg text-center">
                                                            {user.biodataID}
                                                        </td>
                                                        <td className="text-lg text-center">
                                                            {user.permanentDivision}
                                                        </td>

                                                        <td className="text-lg text-center">
                                                            {user.Occupation}
                                                        </td>
                                                        <td className="py-2 text-center">
                                                            <button
                                                                onClick={() => handleDeleteFavourite(user)}
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
                                <h3 className="text-4xl -mt-20">You haven't added anything yet</h3>
                            </div>
                        </>
                }
            </div>

        </>

    );
};

export default FavouriteBioData;



