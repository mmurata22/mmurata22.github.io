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

        <div className="project-card">
          <p>
            <span className="subtitle">Tech-stack Used:</span>
            <ul className="tech-list">
              <li>Unity</li>
              <li>Blender</li>
              <li>Git, GitHub</li>
              <li>Adobe Suite (Illustrator, Animate, Photoshop)</li>
              <li>Reallusion's Character Creator</li>
              <li>HTC ViVE</li>
              <li>Quest 2</li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <p className="subtitle">
            Contributions:
          </p>
          <ul className='tech-list'>
            <li>VR Dorm Room</li>
            <li>VR Coffee Shop</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ssi;