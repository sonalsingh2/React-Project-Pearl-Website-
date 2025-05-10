import React from 'react';
import '../styles/Contact.css';
import contactBackground from '../Images/bgg.jpg'; // Adjust path as necessary

const Contact = () => {
  return (
    <section id="contact" className="contact-section" style={{ backgroundImage: `url(${contactBackground})` }}>
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
