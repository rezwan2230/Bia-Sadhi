import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import AllBioCart from '../../../../components/SocialLogin/AllBioCart/AllBioCart';

const SixBiodata = () => {

    const axiosPublic = useAxiosPublic()
    const [sort, setSort] = useState('1')
    const sortInt = parseInt(sort)

    var url = `/getsixbioData?sortField=age&sortOrder=1`
    if(sortInt !== 1){
        url = `/getsixbioData?sortField=age&sortOrder=-1`
    }

    console.log(sort);

    const { data: sixData = [] } = useQuery({
        queryKey: ['sixData', sort],
        queryFn: async () => {
            const res = await axiosPublic.get(url)
            return res.data
        }
    })


    return (
        <div>
            <div className='w-64 pt-5 pl-5 pb-7'>
                <select name="status" id="" onChange={() => setSort(event.target.value)} className="block w-full px-4 py-2 mt-8 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                    <option value="1">Sort by Age AESC </option>
                    <option value="-1">Sort by Age DESC</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    sixData.map((biodata) => <AllBioCart key={biodata._id} biodata={biodata}></AllBioCart>)
                }
            </div>
        </div>
    );
};

export default SixBiodata;