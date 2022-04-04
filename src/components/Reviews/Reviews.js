import React from 'react';
import './Reviews.css'
import useWatches from '../../hooks/useWatches';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard'

const Reviews = () => {

    const [watches, setWatches] = useWatches()

    const { image, name } = watches

    return (
        <div className='review d-flex justify-content-center flex-wrap'>
            {
                watches.map(review => <SingleReviewCard review={review} key={review.id}></SingleReviewCard>)
            }
        </div>
    );
};

export default Reviews;