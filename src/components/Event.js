import React from 'react';
import './Event.css';
import image1 from '../img/event1.jpg';
import SubscribeBtn from './SubscribeBtn'
import Fade from 'react-reveal/Fade';
// Use react-reveal library to slide in the text and images
// Use by wrapping them in the corresponding components

const Event = ({title, description}) => {
    return (
        <div className='event-container'>
            <div className="event-image-container">
                <Fade right>
                    <img src={image1} alt="coolevent" className="event-image"/>
                </Fade>
            </div>

            <div className="event-text-container">
                <Fade right>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <SubscribeBtn/>
                </Fade>
            </div>

        </div>
    )
};

export default Event;