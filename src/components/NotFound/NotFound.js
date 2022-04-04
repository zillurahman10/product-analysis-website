import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-content-center mt-5'>
            <div>
                <h3>This page is not available</h3>
                <h1 className='d-flex justify-content-center'>404</h1>
                <div className='d-flex justify-content-center'>
                    <Link className='btn btn-primary ' to="/">Back ot home page</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;