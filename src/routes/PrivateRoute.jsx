import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-sm"></span>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoute; 