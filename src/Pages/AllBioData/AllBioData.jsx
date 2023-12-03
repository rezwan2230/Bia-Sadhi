import { useEffect, useState } from "react";
import AllBioCart from "../../components/SocialLogin/AllBioCart/AllBioCart";
import { useLoaderData } from "react-router-dom";
import '../../Pages/AllBioData/AllBioData.css'

const AllBioData = () => {
    const { result, allCount} = useLoaderData()
    const [bioDatas, setBioDatas] = useState(result)

    const [name, setName] = useState('')
    const [division, setDivision] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const numberOfPages = Math.ceil(allCount / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]

    const [gender, setGender] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/allBioData?page=${currentPage}&size=${itemsPerPage}}`)
            .then(res => res.json())
            .then(data => setBioDatas(data))
    }, [currentPage, itemsPerPage]);


    if (name) {
        var url = `http://localhost:5000/biodataSearch?name=${name}`
    }
    if (division) {
        url = `http://localhost:5000/biodataSearch?permanentDivision=${division}`
    }

    if(gender==='male'){
        url = 'http://localhost:5000/biodataSearch?male=male'
    }
    if(gender==='female'){
        url = 'http://localhost:5000/biodataSearch?female=female'
    }

    
    if (name && division) {
        url = `http://localhost:5000/biodataSearch?name=${name}&permanentDivision=${division}`
    }



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBioDatas(data);
            })  
    }, [url, name, division, gender])


    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value)
        console.log(val);
        setItemsPerPage(val)
        setCurrentPage(0)
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            <div className="">
                <h2 className="text-center font-semibold text-3xl py-10 font-serif pt-28"></h2>

                <div className="grid grid-cols-1  gap-6 px-10 pb-10">

                    <div className="flex justify-center gap-8 items-center mx-auto">

                        <div>
                            <button 
                            onClick={() => setBioDatas(result)} 
                            className="buttonn mt-8 font-semibold">All : {allCount}</button>
                        </div>

                        <div>
                            <label className=" ">Name</label>
                            <input type="text"
                                onChange={() => setName(event.target.value)}
                                name="foodName" placeholder="Search by Name" className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                        </div>

                        <div >
                            <label className=" ">Search by devision</label>
                            <select defaultValue='Division' name="status" id=""
                                onChange={() => setDivision(event.target.value)} 
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
                                onChange={() => setGender(event.target.value)} 
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

            <div className='text-center'>
                <h2>Pagination</h2>
                <h2>Current Page : {currentPage}</h2>
                <button className="button mr-5" onClick={handlePreviousPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={`currentPage === page ? 'selected' : undefined bg-red-400 px-2 mr-2 button`}
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}
                    </button>)
                }
                <button className="button ml-4" onClick={handleNextPage}>Next</button>


                <select value={itemsPerPage} name="" onChange={handleItemsPerPage} id="" className=" ml-5 w-16 px-4 py-2 mt-8 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

            </div>
        </div>
    );
};

export default AllBioData;