// src/pages/SSI.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// --- IMPORT YOUR ASSETS HERE ---
// Images
import grayWhiteUI from '../assets/GrayWhiteUI.png';
import grayWhiteUIBlue from '../assets/GrayWhiteUI Blue.png';
import greenUI from '../assets/GreenUI.png';
import finalUI from '../assets/BlackWhiteTransparentUI.png';
import clickSketch from '../assets/Click.png';

// Videos
import animation1 from '../assets/Knock_UI.mov';
import animation2 from '../assets/Walk-UI.mov';

const SSI = () => {
  return (
    <div className="container page-content">
      
      {/* --- 0. DISCLAIMER --- */}
      <div className="disclaimer-banner" style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', borderLeft: '4px solid #666' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
          <strong>Note:</strong> This project is part of ongoing academic research. Due to confidentiality protocols, 
          a significant portion of the work (backend logic, research data, and complex environments) has been excluded. 
          The case study below focuses specifically on the <strong>Onboarding UI System</strong>.
        </p>
      </div>

      {/* --- 1. HEADER --- */}
      <header className="case-study-hero">
        <span className="client-name">Lehigh University & Rutgers University / SSI Lab</span>
        <h1 className="page-title">Stereotyping Social Interactions (VR)</h1>
        <p className="lead-text">
          A VR simulation designed to study social psychology. While my role covered full-stack VR development,
          this case study focuses on the <strong>Instructional UI System</strong> designed to guide non-gamers through the experience.
        </p>
      </header>

      {/* --- 2. SPECS GRID (ADDED) --- */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>VR Developer & UI Designer</p>
        </div>
        <div className="spec-item">
          <h4>Tools</h4>
          <p>Unity (C#), Oculus Rift, Illustrator</p>
        </div>
        <div className="spec-item">
          <h4>Context</h4>
          <p>Undergraduate Research (Transitional)</p>
        </div>
      </div>

      {/* --- 3. FULL SCOPE SECTION (ADDED) --- */}
      <div className="scope-section" style={{ marginBottom: '4rem', padding: '2rem', background: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h3 style={{ marginTop: 0, fontFamily: 'Mukta, sans-serif' }}>Full Scope of Responsibilities</h3>
        <p style={{ marginBottom: '1.5rem' }}>
            While the visuals below highlight the UI design, my contributions to the SSI Lab extended to the full technical implementation of the research environment:
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: '1.2rem' }}>
            <li><strong>Backend Logic (C#):</strong> Programmed the event triggers, data logging, and interaction systems within Unity.</li>
            <li><strong>Environment Troubleshooting:</strong> Debugged pre-existing VR environments to ensure stable frame rates and interaction physics.</li>
            <li><strong>Research Protocol:</strong> Collaborated with the psychology team to translate experimental requirements into technical features.</li>
        </ul>
      </div>

      <div className="case-study-body">
        
        {/* --- 4. THE CHALLENGE --- */}
        <section className="cs-section">
          <h2>Feature Focus: The Onboarding UI</h2>
          <p>
            The core challenge was <strong>onboarding non-gamers</strong>. In a psychology study, if a participant struggles 
            to figure out which button to press, they get frustrated, and that frustration skews the data.
          </p>
          <p>
            I needed to propose a system that was high-contrast enough to be seen in a dark virtual environment, 
            but neutral enough not to bias the user's emotional state.
          </p>
        </section>

        {/* --- 5. PHASE 1: CONCEPTS --- */}
        <section className="cs-section">
          <h2>Phase 1: Proposed Concepts</h2>
          <p>
            I explored multiple color-coding systems and layout styles to find the best balance between visibility and neutrality.
            We needed to determine if color (Green/Blue) would imply "safety" too strongly compared to a neutral Monochrome.
          </p>
          
          <div className="image-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            
            {/* Option A */}
            <div className="img-container">
              <div style={{minHeight: '200px', display: 'flex', alignItems: 'center'}}>
                <img src={grayWhiteUI} alt="Gray White UI Option" style={{ width: '100%', borderRadius: '8px' }} />
              </div>
              <p className="caption">Option A: Gray/White base with orange highlights (Rounded)</p>
            </div>

            {/* Option B */}
            <div className="img-container">
               <div style={{minHeight: '200px', display: 'flex', alignItems: 'center'}}>
                 <img src={grayWhiteUIBlue} alt="Blue UI Option" style={{ width: '100%', borderRadius: '8px' }} />
               </div>
              <p className="caption">Option B: Gray/White base with blue highlights (Borderless)</p>
            </div>

            {/* Option C */}
            <div className="img-container">
               <div style={{minHeight: '200px', display: 'flex', alignItems: 'center'}}>
                 <img src={greenUI} alt="Green UI Option" style={{ width: '100%', borderRadius: '8px' }} />
               </div>
              <p className="caption">Option C: High Visibility Green Emphasis</p>
            </div>

          </div>
        </section>

        {/* --- 6. THE FINAL DESIGN --- */}
        <section className="cs-section">
          <h2>The Final Design</h2>
          <p>
            We selected the <strong>Monochrome System</strong> to minimize emotional bias. 
            This design uses clean line-art that mirrors the physical controller, strictly mapping the 
            digital prompt to the user's real-world hand position.
          </p>
          
          <div className="image-full">
             <img src={finalUI} alt="Final UI Implementation" style={{ width: '100%', borderRadius: '8px' }} />
             <p className="caption">Final Implementation: Clear, Neutral, and Instruction-Focused.</p>
          </div>
        </section>

        {/* --- 7. MOTION PROTOTYPING --- */}
        <section className="cs-section">
          <h2>Motion Prototyping</h2>
          <p>
            Before creating UI animations, I sketched out the mechanics to visualize exactly how the 
            digital overlay would map to the user's physical hand movements. 
          </p>
          <p>
            This sketch helped the team agree on the "trigger squeeze" animation speed before I spent time implementing it in Unity.
          </p>

          <div className="image-full" style={{ maxWidth: '400px', margin: '2rem auto' }}>
             <img src={clickSketch} alt="Animation sketch for controller trigger" style={{ width: '100%', borderRadius: '8px', border: '1px solid #eee' }} />
             <p className="caption">Early sketch proposing the "Active State" animation for the trigger button.</p>
          </div>
        </section>

        {/* --- 8. ANIMATIONS --- */}
        <section className="cs-section">
          <h2>Interaction Animations</h2>
          <p>
            Static images don't tell the full story. These are two samples of finalized animations to demonstrate 
            how the UI fades in and reacts to user gaze.
          </p>

          <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
            
            <div className="video-container">
              <video controls width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <source src={animation1} type="video/quicktime" />
                <p>Your browser does not support the video tag. Please try Safari or convert to MP4.</p>
              </video>
              <p className="caption">Animation 01: Knock UI Trigger</p>
            </div>

            <div className="video-container">
              <video controls width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <source src={animation2} type="video/quicktime" />
                <p>Your browser does not support the video tag. Please try Safari or convert to MP4.</p>
              </video>
              <p className="caption">Animation 02: Walk UI Interaction</p>
            </div>

          </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default SSI;