import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                name : result.user.displayName,
                email : result.user.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(error=>{console.log(error.message)})
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-sm">
                    <FcGoogle className="text-3xl"></FcGoogle>
                </button>
            </div>
        </div>
    );
};
export default SocialLogin;