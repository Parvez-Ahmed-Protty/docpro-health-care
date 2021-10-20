import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
      const history = useHistory();
      const location = useLocation();
      const redirect_uri = location.state?.from || "/home";
 
    const {singInWithGoogle, singInWithGithub,handalEmailChange,handelPasswordChange,SingInWithEmailPassword, error, setLoading, setError} =useAuth();
     const handleGoogle = () => {
       singInWithGoogle()
         .then((res) => {
           history.push(redirect_uri);
         })
         .catch((error) => {
           setError(error.message);
         })
         .finally(() => {
           setLoading(false);
         });
     };
     const handleGithub = () => {
       singInWithGithub()
         .then((res) => {
           history.push(redirect_uri);
         })
         .catch((error) => {
           setError(error.message);
         })
         .finally(() => {
           setLoading(false);
         });
     };
  return (
    <div className="login-container mx-auto bg-white">
      <div className="bg-color p-3 rounded">
        <h2 className="fw-bold text-white">Please Login</h2>
      </div>
      <div className="p-5">
        <div className="form-floating mb-3">
          <input
            onChange={handalEmailChange}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handelPasswordChange}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="text-start my-3">
          <p className="text-danger">{error}</p>
        </div>
        <div className="text-end my-3">
          <p>Forget Password?</p>
        </div>
        <div>
          <button
            onClick={SingInWithEmailPassword}
            className="btn btn-success w-100 px-3 rounded-pill py-3"
            type="submit"
          >
            Login Now
          </button>
        </div>
        <div>
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <div className="">
          <button
            onClick={handleGoogle}
            className="btn bg-danger text-white login-btn rounded-pill py-2 px-3"
          >
            <i className="fa fa-google fs-4 me-2" aria-hidden="true"></i>
            Login with Google
          </button>
          <button
            onClick={handleGithub}
            className="btn btn-dark login-btn rounded-pill py-2 px-3"
          >
            <i className="fa fa-github fs-4 me-2" aria-hidden="true"></i>
            Login with GitHub
          </button>
        </div>
        <p className="mt-4">
          Don’t have an account?<Link to="/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
