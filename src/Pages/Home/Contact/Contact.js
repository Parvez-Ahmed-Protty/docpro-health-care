import React from 'react';
import banner2 from '../../../images/banner-2.png';
import './Contact.css';

const Contact = () => {
    return (
      <>
        <div className="default-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <h1 className="text-color fw-bold">Contact</h1>
              </div>
              <div className="col-md-6">
                <img className="img-fluid banner-img" src={banner2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 rounder p-4">
                <div className="d-flex align-items-center">
                  <div className="ms-4 ">
                    <i
                      className="fa fa-phone-square contact-icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="ms-3 mt-3">
                    <h4>+00 123 654 878</h4>
                    <p>Call Today</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 rounder p-4">
                <div className="d-flex align-items-center">
                  <div className="ms-4">
                    <i
                      className="fa fa-calendar-times-o contact-icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="ms-3 mt-3">
                    <h4>6.0AM to 8.0PM</h4>
                    <p>Open Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 rounder p-4">
                <div className="d-flex align-items-center">
                  <div className="ms-4">
                    <i
                      className="fa fa-address-card contact-icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="ms-3 mt-3">
                    <h4>35 West Medical</h4>
                    <p>Our Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="border-bottom border-info w-25 mx-auto">
            info@example.com
          </p>
          <i className="fa fa-facebook me-3 text-info" aria-hidden="true"></i>
          <i className="fa fa-twitter me-3 text-info" aria-hidden="true"></i>
          <i className="fa fa-instagram me-3 text-info" aria-hidden="true"></i>
          <i className="fa fa-linkedin me-3 text-info" aria-hidden="true"></i>
        </div>
      </>
    );
};

export default Contact;