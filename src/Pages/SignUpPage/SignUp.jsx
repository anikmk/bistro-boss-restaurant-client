import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
  const {register,handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit= (data) => {
    createUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        // create user entry in the database
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user added ',res.data)
            reset();
            Swal.fire({
              title: "Good job!",
              text: "User Created Successfully",
              icon: "success"
            });
            navigate('/');
          }
        })
       
    })
    .catch(error=>{
      console.log(error.message)
    })
  })
}

  // console.log(watch("example")) 
  return (
   <>
   <Helmet>
    <title>
      Bistro Boss | SignUp
    </title>
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
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name",{ required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("photoURL",{ required: true })}
              placeholder="photo URL"
              className="input input-bordered"
            />
            {errors.name && <span>photo URL is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email")}
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
              {...register("password")}
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value='Sign Up' />
          </div>
        </form>
        <p className="text-center pb-4 text-lg">Already have an account <Link to='/signin' className="text-blue-600">Sign In</Link> </p>
      </div>
    </div>
    </div>
   </>
)};

export default SignUp;
