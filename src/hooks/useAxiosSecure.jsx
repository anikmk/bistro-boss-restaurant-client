import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stped by intercepters',token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },function (error){
        return Promise.reject(error);
    })
    // intercepter 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async(error)=>{
        const status = error.response.status
        // console.log('status code in the interceptor',status);
        if(status === 401 || status === 403){
            await signOutUser();
            navigate('/signin')
        }

        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;