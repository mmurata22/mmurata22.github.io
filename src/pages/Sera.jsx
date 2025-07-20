import React from 'react';
import { Link } from 'react-router-dom';
import './Sera.css';

const Sera = () => {
  return (
    <div className="portfolio-container">
      <div className="back-link">
        <Link to="/" className="btn-back-main">Back to Main Page</Link>
      </div>

      <section className="project-section">
        <h2>Sera.io</h2>

        <div className="project-card">
          <p>
            Sera.io is a smart budgeting web app that helps users analyze credit and debit card usage over the past year to create an intuitive, adjustable budget aimed at paying off credit card debt without taking on additional work.
          </p>
          <a href="https://getsera.io" target="_blank" rel="noopener noreferrer">Visit Sera.io</a>
        </div>

        <div className="project-card">
            <span className="subtitle">Tech-stack Used:</span>
            <ul className="tech-list">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Golang (backend)</li>
              <li>Third-party libraries (i.e. Recharts, Sonner, Tours)</li>
            </ul>
        </div>
      </section>
    </div>
  );
};

export default Sera;
