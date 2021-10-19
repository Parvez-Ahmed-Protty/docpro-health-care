import React from 'react';
import footerLogo from '../../../images/footer-logo.png';
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer-container mt-5 text-white">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3">
              <img className="img-fluid" src={footerLogo} alt="" />
            </div>
            <div className="col-md-3">
              <h4 className="my-2">About</h4>
              <div className="list">
                <p className="my-2">About Us</p>
                <p className="my-2">Our Services</p>
                <p className="my-2">Contact Us</p>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="my-2">Useful Links</h4>
              <div className="list">
                <p className="my-2">Specialist</p>
                <p className="my-2">Clinic</p>
                <p className="my-2">Hospital</p>
                <p className="my-2">Privacy Policy</p>
              </div>
            </div>
            <div className="col-md-3">
              <p>
                <i
                  className="fa fa-map-marker me-2 fs-4 text-success"
                  aria-hidden="true"
                ></i>
                Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
              </p>
              <p>
                <i
                  className="fa fa-microphone me-2 fs-4 text-success"
                  aria-hidden="true"
                ></i>
                +2(305) 587-3407
              </p>
              <p>
                <i
                  className="fa fa-envelope me-2 fs-4 text-success"
                  aria-hidden="true"
                ></i>
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;