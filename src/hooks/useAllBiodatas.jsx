import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllBiodatas = () => {
    const axiosPublic = useAxiosPublic()
    const {data: allBiodatas=[], refetch} = useQuery({
        queryKey : ['allBiodatas'],
        queryFn : async ()=>{
            const res =await axiosPublic.get('/biodatas')
            return res.data;
        }
    })
    return [allBiodatas, refetch]
};

export default useAllBiodatas;
