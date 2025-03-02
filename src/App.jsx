import React, { useState, useEffect } from 'react';
import './App.css';
import gam_nonfocus from './assets/gam_nonfocus.png';
import gam_focus from './assets/gam_focus.png';
import gam_moving from './assets/spwalk.gif'
import gam_spin from './assets/gamspin.gif'
import gam_cry from './assets/spcry.gif'
import Report from './Report';
import NavBar from './NavBar'; 
import { motion, useScroll } from "framer-motion";

import './font/OpenDyslexic-Regular.woff'
import './font/OpenDyslexic-Italic.woff'
import './font/OpenDyslexic-Bold.woff'
import './font/OpenDyslexic-Bold-Italic.woff'

function App() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(''); 
  const [showReport, setShowReport] = useState(false); 
  const [submittedUrl, setSubmittedUrl] = useState(''); 

  const { scrollYProgress } = useScroll();
  const [gifPosition, setGifPosition] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      setGifPosition(progress * 90); 
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a URL!'); 
      return;
    }

    setSubmittedUrl(inputValue); 
    setShowReport(true); 

    setTimeout(() => {
      const reportElement = document.getElementById('report');
      if (reportElement) {
        reportElement.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 1000);
  };

  return (
    <>
    <NavBar />
    <div className="container">
      <div className='info-container'>
        <h1>Accessibility Checker</h1>
        <p className='info'>
          Not sure if your website is accessible enough? Put the link to your website below and we'll check for you!
        </p>
        <p className='info'>
          Our website aims to educate web developers on web accessibility and guide you towards making the most accessible website possible.
        </p>
      </div>
      <div className='search-container'>
        <img
          src={isInputFocused ? gam_focus : gam_nonfocus}
          alt="gamgam"
          className="big-gam"
        />
      <input
        name="url-input"
        placeholder="Paste your URL here"
        className="url-input"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      </div>
    
      {showReport && <Report url={submittedUrl} />}

      <motion.img
          src={gam_cry}
          alt="gamgam"
          className="gam-everywhere" id="gam1"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{
            position: 'absolute',
            top: '450px',
            right: '1100px',
            width: '100px'
          }}
        />
      <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          src={gam_spin}
          alt="gamgam"
          style={{
            position: 'absolute',
            top: '465px',
            right: '220px',
            width: '100px',
          }}
          className="gam-everywhere" id="gam2"
        />
    </div>
  
    <motion.img
        src={gam_moving}
        alt="Moving GIF"
        className="moving-gif"
        style={{
          position: "fixed",
          bottom: "10px",
          left: `${gifPosition}%`,
          width: "100px",
          height: "auto",
        }}
      />
    </>
  );
}

export default App;