import React from 'react';
import backgroundImage from '../Images/pearlll.jpg';

function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
    );
}

export default Hero;
