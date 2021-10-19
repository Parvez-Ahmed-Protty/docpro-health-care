import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top">
        <div className="container">
          <div>
            <img src={logo} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                  <i
                    className="fa fa-angle-double-right ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/process">
                  Process
                  <i
                    className="fa fa-angle-double-right ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About Us
                  <i
                    className="fa fa-angle-double-right ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                  <i
                    className="fa fa-angle-double-right ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <div className="d-flex align-items-center me-4 mt-3">
                {user?.email ? <p>{user?.displayName}</p> : <p></p>}
              </div>
              <p>{user?.displayName || ""}</p>
              <Link to="/login">
                {user?.email ? (
                  <button
                    onClick={logOut}
                    className="btn btn-outline-success px-4 rounded-pill"
                    type="submit"
                  >
                    LogOut
                    <i className="fa fa-sign-out ms-2" aria-hidden="true"></i>
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-success px-4 rounded-pill"
                    type="submit"
                  >
                    SignIn
                    <i className="fa fa-sign-in ms-2" aria-hidden="true"></i>
                  </button>
                )}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
