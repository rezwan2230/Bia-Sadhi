import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useUserBiodata = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: biodatas = [], refetch } = useQuery({
        queryKey: ['biodats', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/biodata/${user.email}`)
            return res.data;
        },
    })
    return [biodatas, refetch]
};

export default useUserBiodata;