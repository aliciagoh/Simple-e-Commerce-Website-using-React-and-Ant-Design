// WhatWeOfferPage.js
import React from 'react';
import './WhatWeOffer.css'; // Import the CSS file

const WhatWeOfferPage = () => {
  return (
    <div className="whatWeOffer-container">
      <h1>What We Offer</h1>
      <div className="offer-section">
        <img src="image1.jpg" alt="Offer 1" className="offer-image" />
        <p className="offer-description">Offer 1 Description</p>
      </div>
      <div className="offer-section">
        <img src="image2.jpg" alt="Offer 2" className="offer-image" />
        <p className="offer-description">Offer 2 Description</p>
      </div>
      <div className="offer-section">
        <img src="image3.jpg" alt="Offer 3" className="offer-image" />
        <p className="offer-description">Offer 3 Description</p>
      </div>
    </div>
  );
};

export default WhatWeOfferPage;
