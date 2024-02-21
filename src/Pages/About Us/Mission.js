// Mission.js
import React from 'react';
import logo from '/Users/aliciagoh/Y4S2/FYP Silvertix/Website-Base/src/assets/SilverTix Logo.png'; // Replace with the actual path to your logo image
import fullImage from '../../assets/active-elderly-mission-statement.svg'; // Replace with the actual path to your full-sized image
import './Mission.css';

const Mission = () => {
    const subtextStyle = {
        fontSize: '18px', // Adjust the font size as needed
        fontFamily: 'Arial, sans-serif', // Change the font family as needed
        lineHeight: '1.5', // Adjust the line height as needed
      };
    return (
      <div className="mission-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="text-container">
          <h1>Our Mission Statement</h1>
          <p className="subtext" style={subtextStyle}>Silvertix is a dynamic platform designed to foster a sense of community and combat social isolation among the silver generation. <br /><br />We aim to empower the silver generation to forge meaningful connections with like-minded peers through common activities which are catered to their interests. Through this platform, the seniors will also be able to connect with others living in the same vicinity, thereby cultivating a community of their own.</p>
        </div>
        <div className="image-container">
          <img src={fullImage} alt="Full-sized Image" className="full-image" />
        </div>
      </div>
    );
  };
  
  export default Mission;
