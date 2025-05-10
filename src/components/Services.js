import React from 'react';
import '../styles/Services.css';
import bgImage from '../Images/bg1.jpg';

const Services = () => {
  return (
    <section 
      id="services" 
      className="services-section"
      style={{ backgroundImage: `url(${bgImage})`}} 
    >
      <div className="services-content">
        <h2 className="section-heading">Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3 className="card-heading">Design</h3>
            <p>Elegant and refined designs to meet your expectations. We provide custom designs that resonate with your brand and captivate your audience.</p>
          </div>
          <div className="service-card">
            <h3 className="card-heading">Consulting</h3>
            <p>Professional advice to help you shine in your industry. Our experts offer strategic guidance to drive your business forward.</p>
          </div>
          <div className="service-card">
            <h3 className="card-heading">Development</h3>
            <p>Building modern solutions that are as timeless as pearls. From web development to mobile apps, we create solutions tailored to your needs.</p>
          </div>
        </div>

        <div className="pricing">
          <h2 className="section-heading">Our Pricing</h2>
          <div className="pricing-plan">
            <h3 className="plan-heading">Basic Plan</h3>
            <p>Includes essential features and support.</p>
            <p>Price: $500</p>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-heading">Pro Plan</h3>
            <p>Includes advanced features and priority support.</p>
            <p>Price: $1000</p>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-heading">Enterprise Plan</h3>
            <p>Custom solutions and dedicated support for large enterprises.</p>
            <p>Price: Contact Us</p>
          </div>
        </div>

        <div className="cta">
          <h2 className="section-heading">Ready to Start?</h2>
          <p>Contact us today to discuss how we can help you achieve your goals.</p>
          <a href="#contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Services;

