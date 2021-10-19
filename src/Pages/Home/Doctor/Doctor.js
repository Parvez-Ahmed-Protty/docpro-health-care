import React from "react";
import { useHistory } from "react-router-dom";
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, image, education, expert, address, phone, id } = doctor;
    const history = useHistory();
    const viewDoctorDetails = () => {
      history.push(`/doctorDetails/${id}`);
    };
  return (
    <div className="col-md-12 mb-4">
      <div className="card border-0 box-shadow">
        <div className="row justify-content-center align-items-center">
          <div className="rounded col-12 col-md-6">
            <img
              src={image}
              className="card-img-top img-fluid h-50"
              alt="..."
            />
          </div>
          <div className="card-body col-12 col-md-6">
            <h3 className="card-title text-color fw-bold">{name}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-check2-circle text-success"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p>{education}</p>
            <i className="fa fa-star text-warning ms-1" aria-hidden="true"></i>
            <i className="fa fa-star text-warning ms-1" aria-hidden="true"></i>
            <i className="fa fa-star text-warning ms-1" aria-hidden="true"></i>
            <i className="fa fa-star text-warning ms-1" aria-hidden="true"></i>
            <i className="fa fa-star text-warning ms-1" aria-hidden="true"></i>
            <p className="card-text">{expert}</p>
            <p>
              <i
                className="fa fa-map-marker me-2 fs-5 text-success"
                aria-hidden="true"
              ></i>
              {address}
            </p>
            <p>
              <i
                className="fa fa-phone me-2 fs-5 text-success"
                aria-hidden="true"
              ></i>
              {phone}
            </p>
              <button
                onClick={viewDoctorDetails}
                className="btn btn-outline-success px-4 rounded-pill"
              >
                Details
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
