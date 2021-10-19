import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import banner3 from "../../../images/banner-3.png";
import "./DoctorDetails.css";

const DoctorDetails = () => {
  const {id} = useParams();
  const [data ,setData] = useState([]);
  useEffect(()=>{
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.find((details) => parseInt(details.id) === +id)));
  },[])
  return (
    <>
      <div className="default-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <h1 className="text-color fw-bold">Doctors One</h1>
            </div>
            <div className="col-md-6">
              <img className="img-fluid banner-img" src={banner3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="">
              <img className="img-fluid rounded" src={data.image} alt="" />
            </div>
          </div>
          <div className="col-md-6 text-start">
            <h2 className="text-color fw-bold">{data.name}</h2>
            <p>{data.expert}</p>
            <p>
              <i
                className="fa fa-star ms-2 text-warning"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-star ms-2 text-warning"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-star ms-2 text-warning"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-star ms-2 text-warning"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-star ms-2 text-warning"
                aria-hidden="true"
              ></i>
              4.6 (150)
            </p>
            <p>Qualification :{data.education} </p>
            <p>
              <i
                className="fa fa-map-marker me-2 fs-4 text-success"
                aria-hidden="true"
              ></i>
              {data.address}
            </p>
            <p>
              <i
                class="fa fa-phone me-2 fs-4 text-success"
                aria-hidden="true"
              ></i>
              {data.phone}
            </p>
            <p>Awards : National Specialist Register in Dental</p>
            <h5>780+ Patients</h5>
            <p>docpro Hospital, Rtx LND</p>
            <i className="fa fa-facebook me-3 text-info" aria-hidden="true"></i>
            <i className="fa fa-twitter me-3 text-info" aria-hidden="true"></i>
            <i
              className="fa fa-instagram me-3 text-info"
              aria-hidden="true"
            ></i>
            <i className="fa fa-linkedin me-3 text-info" aria-hidden="true"></i>
            <div className="text-start mt-3">
              <p>{data.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
