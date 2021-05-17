import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='py-3 text-center bg-brand'>
            <div className="social-menu">
                <ul>
                    <li><a href="/" target='_blank'><i className="fab fa-facebook"></i></a></li>
                    <li><a href="/" target='_blank'><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="/" target='_blank'><i className="fab fa-github"></i></a></li>
                </ul>
            </div>
            <p>&copy; All Rights Reserved By Md Ashikur Rahman</p>
        </div>
    );
};

export default Footer;