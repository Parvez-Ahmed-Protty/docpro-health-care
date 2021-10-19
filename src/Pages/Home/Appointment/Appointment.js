import React from "react";
import icon1 from "../../../images/icon-1.png";
import icon2 from "../../../images/icon-2.png";
import icon3 from "../../../images/icon-3.png";

const Appointment = () => {
  return (
    <div className="container my-5">
      <h1 className="text-color">DISCOVER THE ONLINE APPOINTMENT!</h1>
      <p className="w-75 mx-auto my-4">
        Our medical clinic provides quality care for the entire family while
        maintaining a personable atmosphere best services. Our medical clinic
        provides quality. Our medical clinic provides quality care for the
        entire family while maintaining lizam a personable atmosphere best
        services. Our medical clinic provides.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0 box-shadow h-100">
            <img
              src={icon1}
              className="card-img-top w-50 mx-auto p-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-color">FIND A DOCTOR</h5>
              <p className="card-text mt-3">
                Find and book an appointment with the certified specialists as
                per your health problems.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 box-shadow h-100 p-4">
            <img
              src={icon2}
              className="card-img-top w-50 mx-auto p-3"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-color">VIEW PROFILE</h5>
              <p className="card-text mt-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 box-shadow h-100">
            <img
              src={icon3}
              className="card-img-top w-50 mx-auto p-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-color">BOOK A VISIT</h5>
              <p className="card-text mt-3">
                Experience  video consultation with the top doctors as per
                your health problems from all over Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="btn btn-outline-success px-5    rounded-pill py-2">
          Find Doctor
        </button>
      </div>
    </div>
  );
};

export default Appointment;
