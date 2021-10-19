import React from "react";
import banner1 from "../../../images/banner-1.png";
import vector from "../../../images/vector.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="default-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <h1 className="text-color fw-bold">About Us</h1>
            </div>
            <div className="col-md-6">
              <img className="img-fluid banner-img" src={banner1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src={vector} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h1 className="text-color">
                Have Certified and High Quality Doctor For You
              </h1>
              <p>
                Our medical clinic provides quality care for the entire family
                while aintaining a personable atmosphere best services.
              </p>
            </div>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src="https://i.ibb.co/9H2N0KK/doctor5.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://i.ibb.co/QNQ0YSc/doctor3.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/8d48YYf/doctor2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
