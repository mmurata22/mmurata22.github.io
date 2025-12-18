import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './SSI.css';  // Global Layout
import './RIVR.css'; // Grid Layout (Re-using the RIVR styles)
import arch from '../assets/Chinese Arc Gif Crop.gif'

// --- ASSETS ---
// Update this to null or your real image variable
const project1Image = arch; 

const NHI = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-content">

      {/* HERO HEADER */}
      <header className="case-study-hero">
        <span className="client-name">Lehigh University / NHI Lab</span>
        <h1 className="page-title">Nano|Human Interfaces Lab</h1>
        <p className="lead-text">
          Lehigh University’s Nano | Human Interfaces Presidential Initiative is an innovative response to a bold challenge 
          embracing a new mindset and establishing cutting-edge capabilities for propelling Lehigh to the world stage as a leading institution.
        </p>
      </header>

      {/* SPECS */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Research Assistant</p>
        </div>
        <div className="spec-item">
          <h4>Focus</h4>
          <p>UI/UX Design & Data Vis</p>
        </div>
        <div className="spec-item">
          <h4>Timeline</h4>
          <p>Spring 2024 - Present</p>
        </div>
      </div>

      <div className="case-study-body">
        
        <section className="cs-section">
          <h2>Research Projects</h2>
          <p>
            Below is an overview of the primary study I contributed to in the lab.
          </p>

          <div className="launchpad-grid">
            
            {/* CARD 1: THE REAL PROJECT (Active Link)*/}
            <div className="launch-card">
              <div className="launch-card-image">
                 {project1Image ? (
                    <img src={project1Image} alt="Project Interface" />
                 ) : (
                    <div className="placeholder-box" style={{height:'100%', border:'none', borderRadius:0}}>
                        [Image: Project Screenshot]
                    </div>
                 )}
              </div>
              
              <div className="launch-card-content">
                <h3>Digital Heritage: The Bronze Chinese Arch</h3>
                <p>
                   <strong>The Goal:</strong> Preserving a fragile ancient artifact for museum viewage, safely.
                </p>
                <p>
                   <strong>My Contribution:</strong> I created an AR experience including this artifact with interactive controls.
                </p>
                
                <Link to="/work/nhi-project-1" className="launch-btn play">
                   View Case Study →
                </Link>
              </div>
            </div>

            {/* CARD 2: THE PLACEHOLDER (Confidential) */}
            <div className="launch-card" style={{ opacity: 0.6 }}>
              <div className="launch-card-image" style={{ background: '#f0f0f0' }}>
                 <div style={{ color: '#aaa', fontWeight: 'bold' }}>Confidential / In Progress</div>
              </div>
              
              <div className="launch-card-content">
                <h3 style={{ color: '#999' }}>Upcoming Study</h3>
                <p style={{ color: '#999' }}>
                   This research is currently ongoing. Details will be added upon publication.
                </p>
                
                <span className="launch-btn visit" 
                      style={{ background:'#ccc', border:'1px solid #ccc', cursor:'not-allowed' }}>
                   Coming Soon
                </span>
              </div>
            </div>

          </div>
        </section>

      </div>

      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default NHI;