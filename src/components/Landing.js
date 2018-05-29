import React from 'react';
import './Landing.css';
import logo from '../img/TC_Mark_Lightened_RGB.svg';
// Have to import images from here instead of directly in the JSX elements
// Otherwise webpack will not be able to find the source of the images

const Landing = () => {
    return (
        <div className='landing-container'>

            <div className="landing-video-container">
                <div className="placeholder-video">
                    <div className="spinner" />
                    <div className="placeholder-video-text">Placeholder...</div>
                </div>
            </div>

            <div className="landing-text-container">
                <img src={logo} alt="logo" className="landing-logo"/>
                <blockquote className="landing-blockquote">
                    Local events
                </blockquote>
                <h1 className="landing-text-title">Memphis, TN</h1>

                <p className="landing-text-p">
                   On this page you will be able to find information about upcoming events in Memphis, TN.
                    By signing up to the events you will receive all the information.
                    There are loads of awesome events including music, art and barbeques!
                </p>
            </div>

        </div>
    )
};

export default Landing;