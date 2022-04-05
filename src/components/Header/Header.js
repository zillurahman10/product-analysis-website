import React from 'react';
import './Header.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const Header = () => {

    const review = [
        {
            id: 1,
            name: 'Imansyah Muhamad Putera',
            img: 'https://images.unsplash.com/profile-1516987589805-e1475ffee5d4?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
            review: 'I got my product just in 3 days. Very fast delivery',
            ratings: '4.5/5'
        },
        {
            id: 2,
            name: 'Areana Grandy',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Original product and product condition was good',
            ratings: '5/5'
        },
        {
            id: 3,
            name: 'Jony Thomb',
            img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Delivery man behavior was excellent',
            ratings: '4/5'
        },
        {
            id: 4,
            name: 'Grombo lamd',
            img: 'https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            review: 'Call center client behavior was good',
            ratings: '4/5'
        },
        {
            id: 5,
            name: 'Ginger Mongu',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wtfivpueUMDkzW1pYeR5gpialmzmJeGhRg&usqp=CAU',
            review: 'I ordered a black watch but got a white watch. It disappointed me',
            ratings: '1/5'
        },
        {
            id: 6,
            name: 'Kopmu Chaplin',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbZaTqLkl-u7hp5ARGM-TbjEmn0PQDfkQwA&usqp=CAU',
            review: 'Very good response and delivary was fine',
            ratings: '4/5'
        },
        {
            id: 7,
            name: 'Craon Shinchan',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0J3UmFWmkCK1dScxjgh-2UXHB25ZLHkX9Lg&usqp=CAU',
            review: 'Good job. One of my satisfied order in my life',
            ratings: '5/5'
        },
        {
            id: 8,
            name: 'Jonny',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKu1rhh09Vk6WW3ZVfEEMwIxTUizJVbLRag&usqp=CAU',
            review: 'What a beautiful watch. Thanks smart series',
            ratings: '4/5'
        },
        {
            id: 9,
            name: 'Izusek',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzofaVPQgIFLErKW0a1lZrhbEj2MXT1yHE1g&usqp=CAU',
            review: 'I appreciate you for good job',
            ratings: '4.5/5'
        },
        {
            id: 10,
            name: 'fameli golbo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZb9EX9gpPT6Jcza3gwG5QCYh7On8fAgh1w&usqp=CAU',
            review: 'Not good as well. I do not like any product of smart series',
            ratings: '2/5'
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