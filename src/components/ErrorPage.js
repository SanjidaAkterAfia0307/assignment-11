import React from 'react';
import { Link } from 'react-router-dom';
import error from "../img/404-snow.gif"
const ErrorPage = () => {
    return (
        <div>
            <div>
            <img src={error} className="h-5/6 w-1/2 mx-auto" alt="" />
        </div>
       <div className='flex justify-center'>
       <Link to="/" className='btn hover:bg-indigo-700 border-none bg-indigo-800 '>Go to Home Page</Link>
       </div>
        </div>
    );
};

export default ErrorPage;