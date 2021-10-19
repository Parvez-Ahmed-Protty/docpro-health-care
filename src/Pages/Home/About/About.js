import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../images/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="row about">
          <div className="col-md-6">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
          <div className="col-md-6">
            <div>
              <div className=" mt-5">
                <p>ABOUT DOCPRO</p>
                <h1 className="text-color fw-bold">
                  Bring care to your home with one click
                </h1>
                <p>
                  Docpro Health Care wants to see themselves as one of
                  the best hospital in Dhaka & one of the leading hospital in
                  Bangladesh. We want to set an example by providing world class
                  healthcare services to our patients.
                </p>
              </div>
              <div className="list">
                <li>
                  <i
                    className="fa fa-check-square-o fs-4 me-2 text-success"
                    aria-hidden="true"
                  ></i>
                  Associates Insurance
                </li>
                <li>
                  <i
                    className="fa fa-check-square-o fs-4 me-2 text-success"
                    aria-hidden="true"
                  ></i>
                  Pina & Insurance
                </li>
                <Link to="/aboutUs">
                  <button className="btn btn-success rounded-pill px-5 py-2 my-3">
                    About Us
                    <i
                      className="fa fa-arrow-right ms-3"
                      aria-hidden="true"
                    ></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
