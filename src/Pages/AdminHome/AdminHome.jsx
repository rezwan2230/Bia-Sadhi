import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaMale, FaUsers } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const { data: biodatas = [], refetch } = useQuery({
        queryKey: ['biodatas'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    console.log(biodatas);


    return (
        <div>
            <h2 className="text-3xl font-semibold text-center pt-20">Admin Home</h2>
            <div>
                <section className="px-4 py-12 mx-auto max-w-7xl">
                    <div className="flex">
                        <div className="flex-row items-center p-5 card w-52  mr-5">
                            <div className="flex items-center justify-center w-10 h-10 text-pink-700 bg-pink-100 rounded">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg> */}
                                <FaUsers className="text-2xl"></FaUsers>
                            </div>
                            <div className="ml-3">
                                <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate text-center">{biodatas.totalBioData}</h2>
                                <p className="text-sm leading-none text-gray-600 text-center">Total BioData</p>
                            </div>
                        </div>
                        <div className="flex-row items-center p-5 card w-52 mr-5">
                            <div className="flex items-center justify-center w-10 h-10 text-green-700 bg-green-100 rounded">
                                <FaMale className="text-2xl" />
                            </div>
                            <div className="ml-3">
                                <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate text-center">{biodatas.maleBioData}</h2>
                                <p className="text-sm leading-none text-gray-600 text-center">Male BioData</p>
                            </div>
                        </div>
                        <div className="flex-row items-center p-5 card w-52 mr-5">
                            <div className="flex items-center justify-center w-10 h-10 text-red-700 bg-red-100 rounded">
                                <FaFemale  className="text-2xl"/>
                            </div>
                            <div className="ml-3">
                                <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate text-center">{biodatas.femaleBioData}</h2>
                                <p className="text-sm leading-none text-gray-600 text-center">Female BioData</p>
                            </div>
                        </div>
                        <div className="flex-row items-center p-5 card w-52">
                            <div className="flex items-center justify-center w-10 h-10 text-yellow-700 bg-yellow-100 rounded">
                                <LuCircleDollarSign className="text-2xl" />
                            </div>
                            <div className="ml-3">
                                <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate text-center">{biodatas.totalPayment}</h2>
                                <p className="text-sm leading-none text-gray-600 text-center">Total Revenue</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default AdminHome;