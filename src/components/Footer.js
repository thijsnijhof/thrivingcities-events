import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="icons-container">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
            <div className="copyright-container">
                <p>Copyright Memphis, TN Local Events Website <i className="fas fa-copyright"></i></p>
            </div>
        </div>
    )
};

export default Footer;