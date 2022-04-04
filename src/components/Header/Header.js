import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const review = [
        {
            id: 1,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 2,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Original product and condition was vary good',
            ratings: '4.5/5'
        },
        {
            id: 3,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 4,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 5,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 6,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 7,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 8,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 9,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 10,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Vary fast delivery',
            ratings: '4.5/5'
        },
    ]


    return (
        <div className='d-flex justify-content-center'>
            <nav className='navigation-bar mt-3'>
                <Link className='m-4 text-black fw-bold' to="/">HOME</Link>
                <Link className='m-4 text-black fw-bold' to="/reviews">REVIEWS</Link>
                <Link className='m-4 text-black fw-bold' to="/dashboard">DASHBOARD</Link>
                <Link className='m-4 text-black fw-bold' to="/blogs">BLOGS</Link>
                <Link className='m-4 text-black fw-bold' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;