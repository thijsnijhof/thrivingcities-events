import React from 'react';
import './MoreEvents.css';
import Fade from 'react-reveal/Fade';

import image3 from '../img/event3.jpg';
import image4 from '../img/event4.jpg';
import image5 from '../img/event5.jpg';
import image6 from '../img/event6.jpg';
import image7 from '../img/event7.jpg';
import image8 from '../img/event8.jpg';
import image9 from '../img/event9.jpg';
import image10 from '../img/event10.jpg';
import image11 from '../img/event11.jpg';


const MoreEvents = () => {
    return (
        <div>
            <div>
                <h1 className="events-gallery-title">More Events</h1>
                <hr className="event-break"/>
            </div>
            <div className="events-gallery">
                <div className="image-wrapper">
                    <img src={image3}/>
                </div>

                <div className="image-wrapper">
                    <img src={image4}/>
                </div>

                <div className="image-wrapper">
                    <img src={image5}/>
                </div>

                <div className="image-wrapper">
                    <img src={image6}/>
                </div>

                <div className="image-wrapper">
                    <img src={image7}/>
                </div>

                <div className="image-wrapper">
                    <img src={image8}/>
                </div>

                <div className="image-wrapper">
                    <img src={image9}/>
                </div>

                <div className="image-wrapper">
                    <img src={image10}/>
                </div>

                <div className="image-wrapper">
                    <img src={image11}/>
                </div>
            </div>
        </div>

    )
};

export default MoreEvents;