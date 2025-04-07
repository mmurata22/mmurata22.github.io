import React from 'react';
import { Link } from 'react-router-dom';
import './SSI.css';

const ssi = () => {
  return (
    <div className="portfolio-container">
    <div className="back-link">
        <Link to="/" className="btn-back-main">Back to Main Page</Link>
    </div>
      <section className="project-section">
        <h2>Social Stereotyping Interactions (SSI)</h2>

        <div className="project-card">
            <p>
            Can virtual reality (VR) applications make us more open, empathetic, and understanding of those who are different than ourselves? 
            Can VR motivate us to address systemic biases and oppression for racial and gender groups in particular? SSI aims to tackle these questions
            by creating VR scenarios where users face socially stereotyped scenarios and studying the technology's impact on user's perceptions.
            </p>
            <a href="https://wordpress.lehigh.edu/ssilab/">View the Site</a>
        </div>
      </section>
    </div>
  );
};

export default ssi;