import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
      <div className="my-5 bg-dark text-white w-50 mx-auto p-4 rounded-3">
        <h1>404</h1>
        <h3>This site can’t be reached</h3>
        <p>DNS_PROBE_FINISHED_NXDOMAIN</p>
        <Link to='/'>
          <button className='btn btn-danger'>Go Back To Home</button>
        </Link>
      </div>
    );
};

export default NotFound;