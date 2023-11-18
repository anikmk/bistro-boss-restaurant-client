import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSinUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {name,email,password}
        console.log(userInfo)
        
    }
  return (
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
        <form onSubmit={handleSinUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className="text-center pb-4 text-lg">Already have an account <Link to='/signin' className="text-blue-600">Sign In</Link> </p>
      </div>
    </div>
  </div>
)};

export default SignUp;
