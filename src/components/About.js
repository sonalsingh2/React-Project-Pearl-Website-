import React from 'react';
import '../styles/About.css';

// Importing images from src/images
import pearlyImage from '../Images/pearlyyyy.jpg';
import akoyaImage from '../Images/akoya.jpg';
import tahitianImage from '../Images/tahitian.jpg';
import southSeaImage from '../Images/southsea.jpg';
import freshwaterImage from '../Images/freshwater.jpg';
import backgroundImage from '../Images/bgg.jpg';  // Importing the background image

const About = () => {
  return (
    <section 
      id="about" 
      className="about-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }} // Inline style for background
    >
      <div className="about-content">
        <h2>About Pearly</h2>
        <p>
          Welcome to Pearly, your one-stop destination for elegant and sophisticated pearl jewelry. 
          Our website is dedicated to offering you timeless pieces that not only enhance your style 
          but also connect you with the rich history of pearls.
        </p>

        {/* Main About Image */}
        <img 
          src={pearlyImage} 
          alt="Beautiful pearls" 
          className="about-image"
        />

        <h3>Our Mission</h3>
        <p> <b> </b>
          We believe in the natural beauty of pearls and aim to provide high-quality, personalized pearl jewelry. 
          Whether you're looking for a gift or a unique accessory for yourself, Pearly offers something for everyone.
        </p>

        <h3>Types of Pearls</h3>
        <div className="pearl-types">
          <div className="pearl-item">
            <h4>Akoya Pearls</h4>
            <img 
              src={akoyaImage} 
              alt="Akoya pearls" 
              className="pearl-image"
            />
            <p>Akoya pearls are known for their perfect round shape and reflective luster...</p>
          </div>

          <div className="pearl-item">
            <h4>Tahitian Pearls</h4>
            <img 
              src={tahitianImage} 
              alt="Tahitian pearls" 
              className="pearl-image"
            />
            <p>Tahitian pearls are dark and exotic, ranging from black to green...</p>
          </div>

          <div className="pearl-item">
            <h4>South Sea Pearls</h4>
            <img 
              src={southSeaImage} 
              alt="South Sea pearls" 
              className="pearl-image"
            />
            <p>South Sea pearls are the largest and rarest of all pearl types...</p>
          </div>

          <div className="pearl-item">
            <h4>Freshwater Pearls</h4>
            <img 
              src={freshwaterImage} 
              alt="Freshwater pearls" 
              className="pearl-image"
            />
            <p>Freshwater pearls come in a variety of shapes, sizes, and colors...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
