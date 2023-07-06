import React from 'react';
import './LogoTicker.css';
import { Link } from 'react-router-dom';
import ggcBaseball from '../Assets/tickerPhotos/ggcBaseball.png';
import seuBaseball from '../Assets/tickerPhotos/seuBaseball.png';
import uMaryland from '../Assets/tickerPhotos/uMaryland.png';
import iuSoutheast from '../Assets/tickerPhotos/iuSoutheast.png';
import corpusChristi from '../Assets/tickerPhotos/corpusChristi.png';

function LogoTicker() {
    return (
        <div className='logoTickerContainer'>
            <h1 className='trustedBy'> Trusted By </h1>
            <div className='logoTicker'>
                <img src={corpusChristi} alt='corpusChristi' /> 
                <img src={ggcBaseball} alt='ggcBaseball' />
                <img src={uMaryland} alt='seuBaseball' />
                <img src={seuBaseball} alt='seuBaseball' />
                <img src={iuSoutheast} alt='IU Southeast' />
            </div>
            <div className='getStartedButtonDiv'>
                <Link to="/create-account" className='getStartedButton'>Get Started Free</Link>
            </div>
        </div>
    );
}

export default LogoTicker;
