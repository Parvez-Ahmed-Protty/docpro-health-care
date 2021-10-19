import React from 'react';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors/>
            <Appointment></Appointment>
            <About></About>
        </div>
    );
};

export default Home;