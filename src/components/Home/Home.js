import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeReviews from '../HomeReviews/HomeReviews'
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews()

    return (
        <div>
            <div className='d-flex'>
                <div className='d-flex align-content-center flex-wrap ms-5'>
                    <div className=''>
                        <h1>You wil be smart</h1>
                        <h1>When you have a smart watch</h1>
                    </div>
                    <p className='description'>A smartwatch is a wearable computing device that closely resembles
                        <br></br>
                        a wristwatch or other time-keeping device. We have many beautiful smart watches . Go for it!</p>
                </div>
                <div className='me-5'>
                    <img className='image' src="https://www.startech.com.bd/image/cache/catalog/smart-watch/apple/apple-watch-nike/black/apple-watch-nike-black-01-500x500.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='d-flex justify-content-center mt-5'>Customer Reviews({reviews.slice(0, 3).length})</h1>
                <div className='review-container'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReviews review={review} key={review.id}></HomeReviews>)
                    }

                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <Link to="/reviews" className='btn btn-primary'>See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;