import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext)
          useEffect(()=>{
              loadCaptchaEnginge(6); 
          },[])

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {email,password}
        console.log(userInfo)
        signInUser(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error.message)
        })


    }
   
  return (
    <>
    <Helmet>
      <title>Bistro Boss | Sign In</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="text-center w-[50%] lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-[50%] max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="chaptcha"
                placeholder="type chaptcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value='Sign IN'/>
            </div>
          </form>
          <p className="text-center pb-4 text-lg">do not have an account <Link to='/signup' className="text-blue-600">Sign Up</Link> </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
