import React from 'react';
import './EventEven.css';
import image11 from '../img/event11.jpg';
import SubscribeBtn from './SubscribeBtn'
import Fade from 'react-reveal/Fade';
// Use react-reveal library to slide in the text and images
// Use by wrapping them in the corresponding components

const EventOdd = () => {
    return (

        <div className='event-odd-container'>

            <div className="event-odd-text-container">
                <Fade left>
                    <h2>Open Art Gallery</h2>
                    <p>Show of your art or come to buy some for your collection.
                        All artists are welcome both amateur and professional!</p>
                    <SubscribeBtn/>
                </Fade>

            </div>

            <Fade left>
                <div className="event-odd-image-container">
                    <img src={image11} alt="coolevent" className="event-odd-image"/>
                </div>
            </Fade>

        </div>
    )
};

export default EventOdd;