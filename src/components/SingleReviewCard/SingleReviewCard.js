import React from 'react';
import './SingleReviewCard.css'

const SingleReviewCard = (props) => {
    const { img, name, review, ratings } = props.review
    return (
        <div className='card-container'>
            <div className='p-3'>
                <img className='img d-flex justify-content-center mx-auto' src={img} alt="" />
                <div className='mt-3'>
                    <h3>{name}</h3>
                    <p>Review : {review}</p>
                    <p>Ratings : {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReviewCard;