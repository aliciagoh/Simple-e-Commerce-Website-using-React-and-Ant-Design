// WhatWeOfferPage.js
import React from 'react';
import aboutusimage from '../../assets/aboutus.svg';
import './WhatWeOffer.css'; // Import the CSS file

const WhatWeOfferPage = () => {
  return (
    <div className="whatWeOffer-container">
      <div className="left-section">
        <h1>What We Offer</h1>
        <div className="offer-section">
          <div className="text-section">
            <h2>1. Varied and Inclusive Social Gatherings</h2>
            <p>Explore a diverse array of events tailored to the interests of our wise community members. From cultural celebrations to hobby-based gatherings, SilverTix provides a range of inclusive social experiences that bring seniors together, fostering a sense of belonging.</p>
          </div>
        </div>
        <div className="offer-section">
          <div className="text-section">
            <h2>2. Connect and Share Memories with Friends</h2>
            <p>Experience the joy of connecting with old and new friends through our dedicated social platform. Share cherished moments, pictures, and stories in a supportive online environment, creating lasting connections and combating feelings of isolation.</p>
          </div>
        </div>
        <div className="offer-section">
          <div className="text-section">
            <h2>3. Vibrant Community  for Active Aging</h2>
            <p>Join our vibrant community where active aging takes center stage. SilverTix promotes regular engagement through a variety of events and interactions designed to enhance your well-being. Connect with like-minded individuals, participate in stimulating activities, and enjoy the benefits of a supportive community dedicated to your health and happiness.</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        {/* Use the imported variable as the source */}
        <img src={aboutusimage} alt="Come and join us!" className="offer-image" />
      </div>
    </div>
  );
};

export default WhatWeOfferPage;
