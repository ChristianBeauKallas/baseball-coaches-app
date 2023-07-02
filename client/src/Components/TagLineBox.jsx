import React from 'react';
import './TagLineBox.css';
import PlaceHolder from '../Assets/Photos/TagLinePicPlaceHolder.png';

const TagLineBox = () => {
  return (
    <div>
      <div className='pageTagLine'>
        <h1>Less Time In The Office. More Time On The Field</h1>
        <h2>Our Automated Tools Make Practice & Game Planning Easy</h2>
      </div>
      <div className='mainFeatures'>
        <img src={PlaceHolder} alt="PlaceHolder" />
        <ul>
          <li>Streamlined Planning</li>
          <li>Enhanced Performance</li>
          <li>Collaborative Coaching</li>
          <li>Time Saving Templates</li>
          <li>Data Driven Insights</li>
        </ul>
      </div>
      <div className='buttonDiv'>
        <button className='getStarted'> Get Started For Free </button>
      </div>
    </div>
  );
};

export default TagLineBox;
