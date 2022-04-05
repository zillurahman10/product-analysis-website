import React from 'react';
import './Header.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "crimson" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

const Header = () => {

    return (
        <div className='justify-content-center'>
            <nav className='d-flex navigation-bar mt-3 justify-content-center'>
                <CustomLink className='m-4 fw-bold' to="/">HOME</CustomLink>
                <CustomLink className='m-4 fw-bold' to="/reviews">REVIEWS</CustomLink>
                <CustomLink className='m-4 fw-bold' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='m-4 fw-bold' to="/blogs">BLOGS</CustomLink>
                <CustomLink className='m-4 fw-bold' to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;