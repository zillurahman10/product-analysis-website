import React from 'react';
import { Link } from 'react-router-dom';
import useWatches from '../../hooks/useWatches';
import Watches from '../Watches/Watches';
import './Home.css'

const Home = () => {

    const [watches, setWatches] = useWatches()
    console.log(watches);

    return (
        <div>
            <div className='d-flex'>
                <div className='d-flex align-content-center flex-wrap ms-5'>
                    <div className=''>
                        <h1>Your next watch</h1>
                        <h1>Your best watch</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vero officia? At labore nihil aliquid error expedita inventore velit distinctio illo doloremque deserunt quasi molestiae reprehenderit ab odio, iure voluptatibus!</p>
                </div>
                <div className='me-5'>
                    <img className='image' src="https://www.startech.com.bd/image/cache/catalog/smart-watch/apple/apple-watch-nike/black/apple-watch-nike-black-01-500x500.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='d-flex justify-content-center mt-5'>Customer Reviews({watches.slice(0, 3).length})</h1>
                <div className='review-container'>
                    {
                        watches.slice(0, 3).map(watch => <Watches watch={watch}></Watches>)
                    }

                </div>
                <div className='d-flex justify-content-center'>
                    <Link to="/reviews" className='btn btn-primary'>See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;