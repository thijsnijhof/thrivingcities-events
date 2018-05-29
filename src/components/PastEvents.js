import React from 'react';
import './PastEvents.css';
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
        <div className="past-events-wrapper">

            <Fade left>
                <div>
                    <h1 className="events-gallery-title">Past Events</h1>
                    <hr className="event-break"/>
                </div>
            </Fade>

                <div className="events-gallery">

                    <div className="image-wrapper">
                        <img src={image3} alt="super cool"/>
                        <span>More Info</span>
                    </div>

                    <div className="image-wrapper">
                        <img src={image4} alt="another one"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image5} alt="nice event"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image6} alt="special event"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image7} alt="local event"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image8} alt="pretty event"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image9} alt="awesome stuff"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image10} alt="beautiful event"/>
                        <span>More Info</span>

                    </div>

                    <div className="image-wrapper">
                        <img src={image11} alt="this is not a banana"/>
                        <span>More Info</span>
                    </div>
                </div>
        </div>

    )
};

export default MoreEvents;