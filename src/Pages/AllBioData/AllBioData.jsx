import { useState } from "react";
import AllBioCart from "../../components/SocialLogin/AllBioCart/AllBioCart";
import { useLoaderData } from "react-router-dom";
import '../../Pages/AllBioData/AllBioData.css'

const AllBioData = () => {

    const { result, allCount, menCount, femaleCount } = useLoaderData()
    const [bioDatas, setBioDatas] = useState(result)
    console.log(result, allCount, menCount, femaleCount);


    console.log(bioDatas);



    return (
        <div>
            <div className="">
                <h2 className="text-center font-semibold text-3xl py-10 font-serif pt-28"></h2>

                <div className="grid grid-cols-1  gap-6 px-10 pb-10">

                    <div className="flex justify-center gap-8 items-center mx-auto">

                        <div>
                            <button className="buttonn mt-8 font-semibold">All : {allCount}</button>
                        </div>
                        <div>
                            <button className="buttonn mt-8 font-semibold">Male : {menCount}</button>

                        </div>
                        <div>
                            <button className="buttonn mt-8 font-semibold">Female : {femaleCount}</button>

                        </div>

                        <div>
                            <label className=" ">Name</label>
                            <input type="text"
                                // onChange={() => setCurrentFood(event.target.value)} 
                                name="foodName" placeholder="Search by Name" className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div >
                            <label className=" ">Search by devision</label>
                            <select name="status" id=""
                                // onChange={() => setSort(event.target.value)} 
                                className="block w-52 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>

                                <option className='text-sm font-semibold' value="dhaka">Dhaka</option>
                                <option className='text-sm font-semibold' value="chattagram">Chattagram</option>
                                <option className='text-sm font-semibold' value="rangpur">Rangpur</option>
                                <option className='text-sm font-semibold' value="rajshahi">Rajshahi</option>
                                <option className='text-sm font-semibold' value="khulna">Khunla</option>
                                <option className='text-sm font-semibold' value="barishal">Barishal</option>
                                <option className='text-sm font-semibold' value="sylhet">Sylhet</option>
                                <option className='text-sm font-semibold' value="maymansgingh">Maymanshingh</option>
                            </select>
                        </div>

                        <div>
                            <select name="status" id=""
                                // onChange={() => setSort(event.target.value)} 
                                className="block w-52 px-4 py-2 mt-8 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                                <option className='text-sm font-semibold' value="male">Male</option>
                                <option className='text-sm font-semibold' value="female">Female</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        bioDatas.map((biodata) => <AllBioCart key={biodata._id} biodata={biodata}></AllBioCart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllBioData;