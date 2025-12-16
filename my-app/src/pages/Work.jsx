// src/pages/Work.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import seraLogo from '../assets/SERA LOGO.png'; 

const Work = () => {
  
  // 1. HEADER STYLE
  const categoryHeaderStyle = {
    fontFamily: "'Mukta', sans-serif",
    fontSize: '1.8rem',
    borderBottom: '2px solid #eee',
    paddingBottom: '0.5rem',
    marginTop: '4rem',
    marginBottom: '2rem',
    color: '#333'
  };

  // 2. PLACEHOLDER STYLE
  const placeholderStyle = {
    width: '100%',
    height: '100%',
    background: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    minHeight: '200px'
  };

  return (
    <div className="container page-content">
      <div className="section">
        <h1 className="page-title" style={{ marginBottom: '1rem' }}>Selected Work</h1>
        <p className="lead-text" style={{ maxWidth: '600px', marginBottom: '3rem' }}>
          A collection of software engineering, academic research, and VR design projects, with some examples of 
          progress and development, case studies, and live work.
        </p>

        {/* --- 1. INDUSTRY EXPERIENCE --- */}
        <h2 style={categoryHeaderStyle}>Industry Experience</h2>
        <div className="work-list">
          
          <Link to="/projects/sera" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={seraLogo} 
                alt="Sera.io Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>Sera.io</h3>
              <span className="role-tag">Software Engineering Intern</span>
              <p>
                Full-stack development for a B2B SaaS platform. Optimized backend queries 
                and built responsive React front-end components for client management.
              </p>
              <span className="read-more">View Case Study →</span>
            </div>
          </Link>

        </div>

        {/* --- 2. ENGINEERING PROJECTS --- */}
        <h2 style={categoryHeaderStyle}>Software & Engineering</h2>
        <div className="work-list">

          {/* UniSource */}
          <Link to="/projects/unisource" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: uniSource Interface]</div>
            </div>
            <div className="wide-card-content">
              <h3>uniSource</h3>
              <span className="role-tag">Full-Stack Web Platform</span>
              <p>
                A centralized curriculum management system for Lehigh's CS Department. 
                Built with Next.js, PostgreSQL, and a custom API to replace legacy spreadsheets.
              </p>
              <span className="read-more">View Project →</span>
            </div>
          </Link>

          {/* Ourion */}
          <Link to="/projects/ourion" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: Ourion CV Demo]</div>
            </div>
            <div className="wide-card-content">
              <h3>Ourion (Recycle Vision)</h3>
              <span className="role-tag">Computer Vision Startup</span>
              <p>
                Real-time waste classification system. Uses OpenCV and deep learning models 
                to identify recyclable materials instantly via camera feed.
              </p>
              <span className="read-more">View Project →</span>
            </div>
          </Link>

        </div>

        {/* --- 3. ACADEMIC RESEARCH --- */}
        <h2 style={categoryHeaderStyle}>Research & Labs</h2>
        <div className="work-list">

          {/* SSI */}
          <Link to="/projects/ssi" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: SSI VR Sim]</div>
            </div>
            <div className="wide-card-content">
              <h3>Stereotyping Social Interactions</h3>
              <span className="role-tag">VR Developer (Unity/C#)</span>
              <p>
                Designed a VR social psychology simulation. Focused on non-gamer onboarding 
                UI and collecting gaze/interaction data for research analysis.
              </p>
              <span className="read-more">View Case Study →</span>
            </div>
          </Link>

          {/* Fukushima */}
          <Link to="/projects/fukushima" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: Fukushima Lab Diagrams]</div>
            </div>
            <div className="wide-card-content">
              <h3>FUKUSHIMA Lab</h3>
              <span className="role-tag">Algorithm Researcher (MATLAB)</span>
              <p>
                Worked in Nagoya, Japan, reproducing novel "Gaussian Fourier Pyramid" 
                algorithms to validate edge-preserving image filters.
              </p>
              <span className="read-more">View Case Study →</span>
            </div>
          </Link>

          {/* NHI */}
          <Link to="/projects/nhi" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: NHI HoloLens Scan]</div>
            </div>
            <div className="wide-card-content">
              <h3>NanoHuman Interfaces</h3>
              <span className="role-tag">XR Developer</span>
              <p>
                Developed AR/VR scanning workflows for the HoloLens, optimizing high-poly 
                nano-scale models for real-time rendering.
              </p>
              <span className="read-more">View Case Study →</span>
            </div>
          </Link>

          {/* RIVR */}
           <Link to="/projects/rivr" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: RIVR Lab Event]</div>
            </div>
            <div className="wide-card-content">
              <h3>RIVR Lab</h3>
              <span className="role-tag">VR Outreach Lead</span>
              <p>
                Created educational immersive experiences to introduce students to VR technology 
                using Oculus headsets and Unity.
              </p>
              <span className="read-more">View Case Study →</span>
            </div>
          </Link>

        </div>

        {/* --- 4. DESIGN --- */}
        <h2 style={categoryHeaderStyle}>Design & Creative</h2>
        <div className="work-list">
          
          <Link to="/projects/design" className="wide-card">
            <div className="wide-card-image">
               <div style={placeholderStyle}>[Image: 3D Art/Scans]</div>
            </div>
            <div className="wide-card-content">
              <h3>3D Modeling & Digital Art</h3>
              <span className="role-tag">Blender / Photogrammetry</span>
              <p>
                A gallery of 3D assets, photogrammetry scans (The Bronze Arc), 
                and UI/UX design explorations.
              </p>
              <span className="read-more">View Gallery →</span>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Work;