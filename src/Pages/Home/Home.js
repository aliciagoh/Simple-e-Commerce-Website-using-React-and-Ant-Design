// HomePage.js
import React from 'react';
import backgroundImage from '../../assets/Active elderly people-pana.svg'; // Import the background image
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="content">
        <img src={backgroundImage} alt="SilverTix Home" className="background-image" />
        <div className="welcome-text">
          <h1>Welcome to SilverTix.</h1>
          <p>Your one-stop platform to explore new hobbies and connect to like-minded peers.</p>
          <button className="start-now-button">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
