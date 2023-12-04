import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useContactRequest = () => {
    const axiosSecure = useAxiosSecure()

    const { data: contactRequest = [] , refetch} = useQuery({
        queryKey: ['contactRequest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allpayment')
            return res.data;
        }
    })
    return [contactRequest, refetch]
};

export default useContactRequest;