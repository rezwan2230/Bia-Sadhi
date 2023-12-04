import { Link } from 'react-router-dom';
import premium from '../../../assets/medal.png'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import '../../../Pages/Shared/NavBar/NavBar.css'
const AllBioCart = ({ biodata }) => {
    const {user} = useAuth()
    const { _id, name, age, dateofbirth, gender, height, weight, occupation, photoURL, FathersName, mothersName, race, ExpectedAge, ExpectedHeight, ExpectedWeight, presentDivision, permanentDivision, mobileNo, biodataID } = biodata;

    const axiosPublic = useAxiosPublic()

    const handleFavourite = async () => {
        const favouriteProfile = {
            email : user.email,
            name : name,
            biodataID : biodataID,
            permanentDivision : permanentDivision,
            Occupation : occupation
        }
        const res = await axiosPublic.post('/addtofavourite', favouriteProfile)
        if (res.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${name} add to Favourites`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }



    return (
        <div>
            <div className="relative mx-5 lg:w-[360px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
                <img className="rounded-t-lg w-full h-72 z-1" src={photoURL} alt="" />
                <div>
                    <img className='h-12 w-12 absolute top-2 right-1 z-8' src={premium} alt="" />
                </div>
                <div>
                    <p className='font-semibold bg-slate-300 px-1 rounded-full absolute top-3 left-3 z-8 max-w-fit' >0{biodataID}</p>

                </div>

                <div className="p-5 pt-2">
                    <p className="-mt-16 absolute max-w-fit px-3 py-1 text-lg font-semibold tracki bg-white bg-opacity-75 rounded ">{name}</p>
                    <div className='flex items-center justify-between '>
                        <div className="flex items-center mt-2">
                            <div className='mt-2 text-lg font-semibold'>
                                <p>Occupation : {occupation}</p>
                            </div>

                        </div>
                        <div className="flex items-center mt-2">
                            <div className='mt-2 text-lg font-semibold'>
                                <p>Age : {age}</p>
                            </div>
                        </div>

                    </div>


                    <div className='flex justify-between my-2 text-lg font-semibold'>
                        <div >
                            <p>Type : {gender}</p>
                        </div>
                        <div>
                            <p>Address : {permanentDivision}</p>
                        </div>
                    </div>

                    <div className='flex justify-center gap-5 py-2'>
                        <div className='flex'>
                            <button onClick={handleFavourite}
                                className="button inline-flex disabled items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                favourite
                            </button>
                        </div>
                        <div className='flex'>
                            <Link to={`/singleBioData/${_id}`} 
                                className="button inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>

                    </div>


                </div>
            </div>
        </div>


    );
};

export default AllBioCart;

// inline-flex disabled items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800