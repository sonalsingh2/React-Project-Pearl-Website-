import React from 'react';
import '../styles/Collections.css'; 
import necklaceImage from '../Images/necklace.jpg';
import earningsImage from '../Images/earnings.jpg';
import ringsImage from '../Images/ringss.jpg';
import braceletImage from '../Images/bracelet.jpg';


const Collections = () => {
  return (
    <section className="collections">
      {/* <h1> <b> <center> Our Collections </center> </b></h1> */}
      
      {/* Earrings Section */}
      <div className="collection-item">
        <h3>Earings</h3>
        <p>Explore our wide range of elegant and timeless pearl earrings.</p>
        <img src={earningsImage} alt="Pearl Earings" />
      </div>
      
      {/* Necklace Section */}
      <div className="collection-item">
        <h3>Rings</h3>
        <p>Discover beautifully crafted pearl necklaces for every occasion.</p>
        <img src={ringsImage} alt="Pearl Rings" />
      </div>

      {/* Rings Section */}
      <div className="collection-item">
        <h3>Necklaces</h3>
        <p>Discover beautifully crafted pearl necklaces for every occasion.</p>
        <img src={necklaceImage} alt="Pearl Necklace" />
      </div>
      

      {/* Bracelet Section */}
      <div className="collection-item">
        <h3>Bracelets</h3>
        <p>Check out our exclusive collection of pearl rings.</p>
        <img src={braceletImage} alt="Pearl Bracelet" />
      </div>
    </section>
  );
};

export default Collections;
