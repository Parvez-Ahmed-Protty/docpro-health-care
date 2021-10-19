import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(()=>{
    fetch("/data.json")
    .then(res => res.json())
    .then(data => setDoctors(data))
  },[])
    return (
      <div className="container">
        <div className="doctors-container">
          <h1 className="text-color">FIND YOUR DOCTOR OR CLINIC</h1>
          <p className="w-50 mx-auto my-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of psum is that it has a more or less normal distribution of letters
            as opposed to using Content here making it look like.
          </p>
        </div>
        <div className="row">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    );
};

export default Doctors;