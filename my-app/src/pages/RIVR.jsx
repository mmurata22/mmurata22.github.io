import React from 'react';
import { Link } from 'react-router-dom';
import './RIVR.css';
import LGSScreenshot from '../assets/LGS-Screenshot.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
    <div className="back-link">
        <Link to="/" className="btn-back-main">Back to Main Page</Link>
    </div>
      <section className="project-section">
        <h2>Research in Virtual Reality (RiVR)</h2>

        <div className="project-card">
            <p>This project is designing, developing, testing, and implementing an immersive virtual reality (iVR) project for STEM 
                education to promote engagement and learning about spatial watershed features and environmental issues in the Lehigh 
                River watershed. This project seeks to advance a novel approach using iVR learning with game design principles to 
                broaden access to STEM learning experiences for adolescents and adults with a collaboration of informal STEM centers 
                in the Lehigh Valley.
            </p>
          <a href="https://eli.lehigh.edu">View the Site</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
