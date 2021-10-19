import React from "react";
import banner from "../../../images/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="row banner-container d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <h1 className="banner-title">
            Find Nearest <br /> Doctor.
          </h1>
          <p className="w-75 mx-auto">
            Our medical clinic provides quality care for the entire family while
            maintaining a personable atmosphere best services.
          </p>
          <div className="input-group input-group-lg mb-3 w-75 mx-auto">
            <input
              type="text"
              className="form-control fs-6"
              placeholder="Find a Doctor"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
            <button
              className="input-group-text btn btn-success fs-6"
              id="inputGroup-sizing-lg"
            >
              Search
            </button>
          </div>
          {/* <form className="d-flex w-50 mx-auto">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
