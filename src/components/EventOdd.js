import React from 'react';
import './EventOdd.css';
import image2 from '../img/event2.jpg';
import SubscribeBtn from './SubscribeBtn'
import Fade from 'react-reveal/Fade';

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
                    <img src={image2} alt="coolevent" className="event-odd-image"/>
                </div>
            </Fade>

        </div>
    )
};

export default EventOdd;