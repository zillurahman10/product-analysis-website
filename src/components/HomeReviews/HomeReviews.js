import React from 'react';
import './HomeReviews.css'
const Watches = (props) => {
    console.log(props);
    const { name, img, review, ratings } = props.review
    return (
        <div className='card-container'>
            <img className='img d-flex justify-content-center mx-auto mt-3' src={img} alt="" />
            <div className='p-3 '>
                <h4 className='d-flex justify-content-center flex-wrap'>{name}</h4>
                <p>Review : {review}</p>
                <p>Ratings : {ratings}</p>
            </div>
        </div>
    );
};

export default Watches;