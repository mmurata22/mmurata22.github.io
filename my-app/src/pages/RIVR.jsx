import React from 'react';
import { Link } from 'react-router-dom';

// --- ASSETS ---
// Ideally, take a screenshot of "Watershed Explorers" and name it 'Watershed-Screenshot.png'
// For now, I'll reuse your existing variable names or use placeholders.
import lgsScreenshot from '../assets/LGS-Screenshot.png'; 
import drupalImage from '../assets/ELI LAB.jpeg'
import WaterShedImage from '../assets/waterShed.png'
// import watershedScreenshot from '../assets/Watershed-Screenshot.png'; // <--- Uncomment when you have it

const RIVR = () => {
  return (
    <div className="container page-content">

      {/* --- HERO HEADER --- */}
      <header className="case-study-hero">
        <span className="client-name">Lehigh University / RIVR Lab</span>
        <h1 className="page-title">Research in Immersive Virtual Reality</h1>
        <p className="lead-text">
          A dual-platform initiative: Designing immersive VR simulations for STEM education 
          and optimizing them for both WebGL browsers and standalone VR headsets (Meta Quest 2/3).
        </p>
      </header>

      {/* --- SPECS GRID --- */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>VR Developer & Website Maintainence</p>
        </div>
        <div className="spec-item">
          <h4>Tech Stack</h4>
          <p>Unity (C#), Meta Quest SDK</p>
        </div>
        <div className="spec-item">
          <h4>Status</h4>
          <p>Live & Public</p>
        </div>
      </div>

      <div className="case-study-body">
        
        <section className="cs-section">
          <h2>Featured Projects</h2>
          <p>
            My primary focus was bridging the gap between accessible web experiences and high-fidelity VR. 
            I contributed to the technical conversion of these educational tools from standard WebGL builds into 
            fully immersive VR applications.
          </p>

          <div className="launchpad-grid">
            
            {/* PROJECT 1: WATERSHED EXPLORERS */}
            <div className="launch-card">
              <div className="launch-card-image">
                 <img src={WaterShedImage} alt="Watershed Explorers" />
              </div>
              
              <div className="launch-card-content">
                <h3>Watershed Explorers</h3>
                <p>
                   <strong>The Project:</strong> In this exploration game, players are hired by the Delaware & Lehigh National 
                   Historical Corridor National Canal Museum (D&L) to kayak down the Lehigh River to recommend locations for 
                   promoting tourism in the watershed.
                </p>
                <p>
                   <strong>My Contribution:</strong> I helped adapt the 360º photosphere exploration mechanics for VR, troubleshooting
                   pre-existing scenes and wiring smooth user flow between scenes.
                </p>
                <a href="https://eli.lehigh.edu/watershed-explorers" 
                   target="_blank" rel="noopener noreferrer" 
                   className="launch-btn play">
                   View Project →
                </a>
              </div>
            </div>

            {/* PROJECT 2: LEHIGH GAP STORY */}
            <div className="launch-card">
              <div className="launch-card-image">
                <img src={lgsScreenshot} alt="Lehigh Gap Story" />
              </div>
              
              <div className="launch-card-content">
                <h3>The Lehigh Gap Story</h3>
                <p>
                   <strong>The Project:</strong> In Story Mode, avatar bird Brownie guides you through the photospheres.  
                   In each photosphere, there is a task checklist of media artifacts that you must interact with before 
                   moving on to the next photosphere. 
                </p>
                <p>
                   <strong>My Contribution:</strong> I contributed to the WebGL-to-VR conversion.
                   This involved rewriting the input systems (Mouse to VR Motion Tracking) and User Interaction flows.
                </p>
                <a href="https://eli.lehigh.edu/lehigh-gap-story" 
                   target="_blank" rel="noopener noreferrer" 
                   className="launch-btn play">
                   View Project →
                </a>
              </div>
            </div>

            {/* PROJECT 3: ELI LAB WEBSITE (Added) */}
            <div className="launch-card">
              <div className="launch-card-image">
                 <img src={drupalImage} alt="ELI Lab Portal" />
              </div>
              
              <div className="launch-card-content">
                <h3>ELI Lab Website</h3>
                <p>
                   <strong>The Infrastructure:</strong> The central hub for the lab's research. I maintained the Drupal CMS, 
                   ensuring accurate, up-to-date info, file management, and handling the WebGL game embeds.
                </p>
                <p style={{ fontSize: '0.85rem', color: '#888' }}>
                   <em>Key Tech: Drupal (PHP)</em>
                </p>
                <a href="https://eli.lehigh.edu/" 
                   target="_blank" rel="noopener noreferrer" 
                   className="launch-btn visit">
                   Visit Website →
                </a>
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

export default RIVR;