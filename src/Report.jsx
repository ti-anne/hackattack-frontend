import React, { useState } from 'react';
import './Report.css';
import bad_score from './assets/bad_score.png';
import good_score from './assets/good_score.png';
import studious from './assets/studious.png';
import splaptop from './assets/splaptop.gif';

const Report = ({ url }) => {
  const [score, setScore] = useState(-1);
  
  const imageClick = () => {
    if (score === -1) setScore(100);
    else if (score === 100) setScore(0);
    else if (score === 0) setScore(100);
  };

  return (
    <div className="report-container">

      <h1>Report for {url}</h1>
      <div className='overall'>
        <img
          src={score > 50 ? good_score : bad_score}
          alt="gamgam telling how accessible your site is"
          className="gam-reaction"
          onClick={imageClick}
        />
        <div className='comment'>
          <h2>You scored XYZ</h2>
          <p>You passed x tests and failed y tests.</p>
        </div>
      </div>
      <div className='overall'>
        <div className='comment'>
        <h2>Your assigned readings</h2>
        <ul>
          <li><a href='https://www.w3.org/WAI/fundamentals/accessibility-intro/'>Accessibility Fundamentals</a></li>
          <li><a href='https://www.w3.org/WAI/WCAG22/quickref/'>Accessibility Thorough Guide  </a></li>
        </ul>
        </div>
        <img
          src={score > 50 ? studious : splaptop}
          alt="gamgam telling how accessible your site is"
          className="gam-reaction"
          onClick={imageClick}
        />
      </div>
      
      
    </div>
  );
};

export default Report;