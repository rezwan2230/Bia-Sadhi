
import { Link } from "react-router-dom";
import '../../Pages/Shared/NavBar/NavBar.css'
import useUserBiodata from "../../hooks/useUserBiodata";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const EditBioData = () => {
    const [biodatas, refetch] = useUserBiodata()
    const axiosPublic = useAxiosPublic()

    const handleDelete = (id) => {
        console.log(id);

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
                axiosPublic.delete(`/biodata/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your biodata has been deleted.",
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
                <title>Sweetiny | Edit BioData</title>
            </Helmet>
       
       <div className="h-[100vh]">
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            biodatas.map(biodata => <div key={biodata._id}>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                                        src={biodata.photoURL} alt="Person"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <div className="mb-1 text-lg text-gray-100 flex justify-center items-center gap-7">
                                            <button onClick={() => handleDelete(biodata._id)}
                                                className='p-2 text-black bg-white rounded-full btn-outline hover:bg-red-400'>
                                                <MdDelete className='text-3xl'></MdDelete>
                                            </button>
                                            <Link to={`/dashboard/editSingleBioData/${biodata._id}`}>
                                                <button
                                                    className='p-2 text-black bg-white rounded-full btn-outline hover:bg-red-400'>
                                                    <MdModeEdit className='text-3xl'></MdModeEdit>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link className="button text-center" to='/dashboard/createBioData'>Create Bio-Data</Link>
            </div>
        </div>
       </>
    );
};

export default EditBioData;