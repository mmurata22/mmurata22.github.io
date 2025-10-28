import React from 'react';
import { Link } from 'react-router-dom';
import './Fukushima.css';
import LLPF from '../assets/LLPF.png'

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
              The Fukushima Lab at NITech studies image processing. Specifically, there is a concentration on image signal processing, 3D image
              processing, and parallel image processing.
            </p>
          <a href="https://fukushima.web.nitech.ac.jp/en/">View the Site</a>
        </div>

        <div className="project-card">
          <p>
            <span className="subtitle">Tech-stack Used:</span>
            <ul className="tech-list">
              <li>MATLAB</li>
              <li>C++</li>
            </ul>
          </p>
        </div>

        <div className="project-card">
          <p className="subtitle">Contributions:</p>
          <p>Made a copy of Gaussian Fourier Pyramid for Local Laplacian Pyramid from C++ to MATLAB.</p>
          <a href="https://norishigefukushima.github.io/GaussianFourierPyramid/">View the Project</a>
        </div>
      </section>
    </div>
  );
};

export default Fukushima;
