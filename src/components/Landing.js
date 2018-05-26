import React from 'react';
import './Landing.css';
// import logo from '../img/TC_Mark_Lightened_RGB.png';
import video from '../img/prevideo.mp4';

const Landing = () => {
    return (
        <div className='landing-container'>
            <div className="landing-block"/>
            <video className="landing-video" width="640" height="480">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="landing-text-container">
                <blockquote className="landing-blockquote">
                    Welcome to Memphis!
                </blockquote>
                <p className="landing-text-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, adipisci, aperiam deleniti deserunt
                    doloremque ducimus eaque eius enim esse eum fuga harum ipsam laudantium molestias odit optio porro
                    quia?
                </p>
            </div>

        </div>
    )
};

export default Landing;