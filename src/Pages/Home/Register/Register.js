import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const {
    singInWithGoogle,
    singInWithGithub,
    handalEmailChange,
    handelPasswordChange,
    SingInWithEmailPassword,
    handelName,
    name,
    error
  } = useAuth();
  console.log(name);
  return (
    <div>
      <div className="login-container w-50 mx-auto bg-white">
        <div className="bg-color p-3 rounded">
          <h2 className="fw-bold text-white">Please Register</h2>
        </div>
        <div className="p-5">
          <div className="form-floating mb-3">
            <input
              onChange={handelName}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
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
          <div className="form-floating mb-3">
            <input
              onChange={handelPasswordChange}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={handelPasswordChange}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Confirm password</label>
          </div>
          <div className="text-start my-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                I accept terms and conditions and general policy
              </label>
            </div>
          </div>
          <p>{error}</p>
          <div>
            <button
              onClick={SingInWithEmailPassword}
              className="btn btn-success w-100 rounded-pill py-3"
              type="submit"
            >
              Register Now
            </button>
          </div>
          <div>
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <div className="">
            <button
              onClick={singInWithGoogle}
              className="btn bg-danger text-white login-btn rounded-pill py-3"
            >
              <i className="fa fa-google fs-4 me-2" aria-hidden="true"></i>
              SignUp with Google
            </button>
            <button
              onClick={singInWithGithub}
              className="btn btn-dark login-btn rounded-pill py-3"
            >
              <i className="fa fa-github fs-4 me-2" aria-hidden="true"></i>
              SignUp with GitHub
            </button>
          </div>
          <p className="mt-4">
            Already have an account?<Link to="/login">Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
