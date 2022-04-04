import React from 'react';
import './SingleReviewCard.css'

const SingleReviewCard = (props) => {
    const { image, name } = props.review
    return (
        <div className='card-container'>
            <div className='p-3'>
                <img className='img d-flex justify-content-center' src={image} alt="" />
                <div>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default SingleReviewCard;