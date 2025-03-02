import React, { useState } from 'react';
import './App.css';
import './Navbar.css';
import gam_nonfocus from './assets/gam_nonfocus.png';
import gam_focus from './assets/gam_focus.png';
import Report from './Report'; 

import './fonts/OpenDyslexic-Regular.woff'
import './fonts/OpenDyslexic-Italic.woff'
import './fonts/OpenDyslexic-Bold.woff'
import './fonts/OpenDyslexic-Bold-Italic.woff'

function App() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState(''); 
  const [showReport, setShowReport] = useState(false); 
  const [submittedUrl, setSubmittedUrl] = useState(''); 
  const [login, setLogin] = useState(true);

  const handleUser = () => {
    if (!login) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

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
    <header>
    <nav className="navbar">
      <ul className='navbar'>
        <li class='navitem left'><a href='/'>Home</a></li>
        <li class='navitem left'><a href='/tutorials'>Tutorials</a></li>
        <li class='navitem left'><a href='/resources'>Resources</a></li>
        {login ? (
          <>
            <li class='navitem right user'><a href="#" onClick={handleUser}>Log Out</a></li>
            <li class='navitem right user'><a href='/Report'>Reports</a></li>
          </>
        ) : (
          <>
            <li class='navitem right sign'><a href='/signUp'>Sign Up</a></li>
            <li class='navitem right login'><a href="#" onClick={handleUser}>Login</a></li>
          </>
        )}
        <li class='navitem right'>Darkmode</li>
      </ul>  
    </nav>
    </header>
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
    </>
  );
}

export default App;