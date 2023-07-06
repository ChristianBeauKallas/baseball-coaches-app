import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerColumn'>
                <h1>GamePlan</h1>
                <p>Less Time In The Office.<br></br>More Time On The Field</p>
            </div>
            <div className='footerColumn'>
                <h2>Legal</h2>
                <a href="">Address</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
            </div>
            <div className='footerColumn'>
                <h2>Follow Us</h2>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </div>
        </div>
    );
}

export default Footer;
