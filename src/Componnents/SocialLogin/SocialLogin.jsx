import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const signInWithGoogle = () => {
        googleSignIn()
        .then(result=>{
            console.log(result)
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