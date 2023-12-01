import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-sm"></span>
    }
    if (user?.email && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={location.pathname} replace></Navigate>
};

export default AdminRoute;
