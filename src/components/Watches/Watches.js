import React from 'react';
import './Watches.css'

const Watches = (props) => {
    console.log(props);
    const { name, image } = props.watch
    return (
        <div>
            <img className='img' src={image} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Watches;