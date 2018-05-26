import React from 'react';
import './Landing.css';
// import logo from '../img/TC_Mark_Lightened_RGB.png';
import video from '../img/prevideo.mp4';

const Event = () => {
    return (
        <div className='event-container'>
            <div className="event-block" />
            <video className="event-video" width="640" height="480" >
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
};

export default Event;