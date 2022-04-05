import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-content-center mt-5'>
            <div>
                <h2 className='d-flex justify-content-center'>Page Not Found!!</h2>
                <img className='rounded-3' src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png" alt="" />
                <div className='d-flex justify-content-center'>
                    <Link className='btn btn-primary mt-3' to="/">Back to home page</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;