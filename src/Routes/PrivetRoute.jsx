import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="progress w-56"></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/signin' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;