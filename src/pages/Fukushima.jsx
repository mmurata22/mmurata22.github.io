import React from 'react';
import { Link } from 'react-router-dom';
import './Fukushima.css';

const Fukushima = () => {
  return (
    <div className="portfolio-container">
    <div className="back-link">
        <Link to="/" className="btn-back-main">Back to Main Page</Link>
    </div>
      <section className="project-section">
        <h2>FUKUSHIMA Lab</h2>

        <div className="project-card">
            <p>
              Image processing laboratory.
            </p>
          <a href="https://fukushima.web.nitech.ac.jp/en/">View the Site</a>
        </div>
      </section>
    </div>
  );
};

export default Fukushima;
