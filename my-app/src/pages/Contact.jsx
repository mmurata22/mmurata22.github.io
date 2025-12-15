import React from 'react';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <div className="container page-content">
      
      {/* Introduction Section */}
      <section className="section" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="page-title">Get in Touch</h1>
        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          I'm currently open to new opportunities in software engineering and VR development. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
      </section>

      {/* The Contact Card */}
      <div className="contact-card section">
        
        {/* Left Column: Direct Info */}
        <div className="contact-info">
          <h3>Let's Chat</h3>
          <p>
            Prefer to shoot me an email directly? No problem.
          </p>
          
          <a href="mailto:your.email@lehigh.edu" className="email-link">
            your.email@lehigh.edu
          </a>

          <div className="social-section">
            <h4>Connect elsewhere</h4>
            <SocialLinks />
          </div>
        </div>

        {/* Right Column: The Form */}
        {/* Note: Connect this to Formspree.io later to make it actually send emails! */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="What's your name?" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Where can I reach you?" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="How can I help you?"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;