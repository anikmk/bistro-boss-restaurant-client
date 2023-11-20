import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        googleSignIn()
        .then(result=>{
            console.log(result)
            const userInfo = {
                email: result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="text-center pb-4">
                <button onClick={signInWithGoogle} className="btn btn-primary">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;