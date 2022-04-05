import React from 'react';
import './Reviews.css'
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard'
import useReviews from '../../hooks/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews()

    return (
        <div className='review d-flex justify-content-center flex-wrap'>
            <h1 className='mt-5'>What our customer say!</h1>
            <div className='review d-flex justify-content-center flex-wrap'>
                {
                    reviews.map(review => <SingleReviewCard review={review} key={review.id}></SingleReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;