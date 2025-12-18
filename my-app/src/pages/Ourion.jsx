import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SSI.css'; // Reusing your standard case study CSS

// --- ASSETS ---
// Save your Figma screenshots or App screenshots to assets folder
import ourionHero from '../assets/Ourion Front Page.png';
import figmaDesign from '../assets/Ourion Figma.png'; 

const Ourion = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-content">
      
      {/* --- 1. HERO HEADER --- */}
      <header className="case-study-hero">
        <span className="client-name">Independent Startup Project</span>
        <h1 className="page-title">Ourion: AI-Powered Waste Sorting</h1>
        <p className="lead-text">
          A computer vision software suite designed to automate the identification and categorization 
          of recyclable materials to streamline waste management processes.
        </p>
      </header>

      {/* --- 2. SPECS GRID --- */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Full Stack Engineer & ML Researcher</p>
        </div>
        <div className="spec-item">
          <h4>Stack</h4>
          <p>React, Python (Flask), OpenCV, Docker</p>
        </div>
        <div className="spec-item">
          <h4>Context</h4>
          <p>Computer Vision Startup</p>
        </div>
      </div>

      {/* --- 2.5 GITHUB LINKS --- */}
      <div className="link-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <a 
          href="https://github.com/mmurata22/ourion" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="live-site-btn"
          style={{ marginRight: '1rem' }}
        >
          Frontend Repo ↗
        </a>
        <a 
          href="https://github.com/mmurata22/ourion-api" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="live-site-btn"
          style={{  }}
        >
          Backend Repo ↗
        </a>
      </div>

      <div className="case-study-body">

        {/* --- 3. THE CHALLENGE --- */}
        <section className="cs-section">
          <h2>The Challenge: Recycling Inefficiency</h2>
          <p>
            Recycling rates are often bottlenecked by human error and sorting inefficiency. 
            Facilities struggle to quickly differentiate between similar-looking materials (e.g., Clear PET plastic vs. Glass), 
            leading to contaminated batches and increased landfill waste.
          </p>
          <p>
            The goal was to create a scalable, camera-based system that could "see" materials and sort them in real-time, 
            bridging the gap between physical sorting machinery and digital intelligence.
          </p>
        </section>

        {/* --- 4. SOLUTION OVERVIEW --- */}
        <section className="cs-section">
          <h2>The Solution</h2>
          <p>
            Ourion is a split-stack application. The Backend utilizes OpenCV and Deep Learning models (TensorFlow/PyTorch) 
            to process video feeds. The Frontend provides a React-based monitoring dashboard 
            for facility administrators to track error rates and material categorization.
          </p>
          
          <div className="image-full">
            {ourionHero ? (
              <img src={ourionHero} alt="Ourion Main Dashboard" />
            ) : (
              <div className="placeholder-box">Main Dashboard Screenshot</div>
            )}
            <p className="caption">The React-based Dashboard for real-time monitoring.</p>
          </div>
        </section>

        {/* --- 5. UI/UX DESIGN (Figma) --- */}
        <section className="cs-section">
          <h2>Design & Prototyping</h2>
          <p>
            Before writing any code, I developed a comprehensive design system in Figma. 
            The interface needed to be high-contrast and readable at a glance for operators working in fast-paced industrial environments.
          </p>
          <p>
            I focused on clear data visualization for the "Sorting Performance" analytics and intuitive controls for adjusting recognition parameters.
          </p>
          
          <div className="image-full">
             {figmaDesign ? (
               <img src={figmaDesign} alt="Figma High Fidelity Mockups" />
             ) : (
               <div className="placeholder-box" style={{ background: '#2c2c2c', color: '#fff' }}>
                 [Figma Design System Screenshot]
               </div>
             )}
             <p className="caption">High-fidelity prototypes designed in Figma prior to React implementation.</p>
          </div>
        </section>

        {/* --- 6. TECHNICAL ARCHITECTURE --- */}
        <section className="cs-section">
          <h2>Technical Architecture</h2>
          <p>
            The system relies on a decoupled architecture to ensure the heavy machine learning processing doesn't lag the user interface.
          </p>

          <div className="image-grid-2">
            <div>
              <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Frontend (React)</h4>
              <p style={{ fontSize: '0.95rem' }}>
                A responsive SPA built with React and Node.js. It communicates with the backend via RESTful endpoints. 
                I set up the development environment using WSL (Ubuntu) and NVM to ensure consistent node versions across development machines.
              </p>
            </div>
            <div>
              <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Backend (Flask & OpenCV)</h4>
              <p style={{ fontSize: '0.95rem' }}>
                A Python Flask API that runs <code>opencv-python-headless</code> for server-optimized image processing. 
                The application is containerized using Docker to handle dependencies like Gunicorn and system-level CV libraries without conflicts.
              </p>
            </div>
          </div>
        </section>

        {/* --- 7. DEVELOPMENT ENVIRONMENT --- */}
        <section className="cs-section">
           <h2>DevOps & Workflow</h2>
           <p>
             To maintain code quality across the full stack, I established a strict development workflow:
           </p>
           <ul style={{ lineHeight: '1.6', color: '#444' }}>
              <li><strong>Containerization:</strong> Used Docker Desktop with WSL 2 backend to ensure the Python environment matched production Linux servers.</li>
              <li><strong>Version Control:</strong> Maintained separate repositories for Frontend and Backend with SSH-key authentication for secure access.</li>
              <li><strong>Deployment:</strong> Configured for deployment on platforms like Render, using environment variables to dynamically link the React frontend to the live Flask API.</li>
           </ul>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default Ourion;