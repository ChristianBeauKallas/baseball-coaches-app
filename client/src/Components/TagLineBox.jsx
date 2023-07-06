import React, { useRef } from 'react';
import './TagLineBox.css';
import PlaceHolder from '../Assets/Photos/ImagePlaceholder.png';
import practicePlanHolder from '../Assets/Photos/practicePlanHolder.png';
import sheetsPractice from '../Assets/Photos/sheetsPlanHolder.png';


function TagLineBox() {
  // Create a reference to the howItWorksContainer div
  const howItWorksRef = useRef(null);

  // Define a function to scroll to the howItWorksContainer
  const onHowItWorksClick = () => {
    howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div>
          <div className='pageTagLine'>
              <h1>Less Time In The Office. <br></br>More Time On The Field.</h1>
              <h2>Our Automated Tools Make Practice & Game Planning Easy</h2>
          </div>
          <div className='mainFeatures'>
              <img src={practicePlanHolder} alt="seuPlan1" />
              <ul>
                  <li>Streamlined Planning</li>
                  <li>Enhanced Performance</li>
                  <li>Collaborative Coaching</li>
                  <li>Time Saving Templates</li>
                  <li>Data Driven Insights</li>
              </ul>
          </div>
          <div className='tagButtonDiv'>
              <button onClick={onHowItWorksClick} className='howItWorksBtn'>How It Works</button>
          </div>
          <div>
            {/* Attach the created reference to the howItWorksContainer div */}
            <div className='howItWorksContainer' ref={howItWorksRef}>
                <h1 className='worksHeading'> Customize With Our Automated Tools.<br></br>Browse Coach Created Content.</h1>
                <h2 className='mostDownloadedHeading'> Most Downloaded This Week </h2>
            </div>
            <div className='mostDownloadedPlans'>
              <div>
                <img src={sheetsPractice} alt="PlaceHolder" />
                <p className="imgCaption">Uploaded By @adinkel3</p>
              </div>
              <div>
                <img src={sheetsPractice} alt="PlaceHolder" />
                <p className="imgCaption">Created By @CoachSheets3</p>
              </div>
              <div>
                <img src={sheetsPractice} alt="PlaceHolder" />
                <p className="imgCaption">Uploaded By @CoachReel17</p>
              </div>
            </div>
        </div>
      </div>
  );
};

export default TagLineBox;
