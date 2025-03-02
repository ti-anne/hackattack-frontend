import React, { useState, useEffect } from 'react';
import './App.css';
import gam_nonfocus from './assets/gam_nonfocus.png';
import gam_focus from './assets/gam_focus.png';
import gam_moving from './assets/spwalk.gif'
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
    </div>
    <motion.img
        src={gam_moving}
        alt="Moving GIF"
        className="moving-gif"
        style={{
          position: "fixed",
          bottom: "10px",
          left: `${gifPosition}%`, // Moves left to right as you scroll
          width: "100px",
          height: "auto",
        }}
      />
    </>
  );
}

export default App;