import React from 'react';
import { Link } from 'react-router-dom';

// --- STYLING ---
import './SSI.css'; // Uses the standard Case Study styling

// --- ASSETS ---
// import archScanRaw from '../assets/Arch-Scan-Raw.png';
// import pedestalModel from '../assets/Pedestal-Blender.png';
import archVideo from '../assets/aero_recording (16).mp4';
import pedastal from '../assets/pedastal Rotation Crop.gif'
import arch from '../assets/Chinese Arc Gif Crop.gif'

// --- COMPONENT DEFINITION ---
const NHIProject1 = () => {
  return (
    <div className="container page-content">

      {/* HERO HEADER */}
      <header className="case-study-hero">
        <span className="client-name">Lehigh University / NanoHuman Interfaces Lab</span>
        <h1 className="page-title">Digital Heritage: The Bronze Chinese Arch</h1>
        <p className="lead-text">
          A cross-departmental initiative to digitize historical artifacts. 
          I participated in 3D scanning, optimization, modeling, and AR deployment.
        </p>
      </header>

      {/* SPECS GRID */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Technical Artist, Main Developer</p>
        </div>
        <div className="spec-item">
          <h4>Collaborators</h4>
          <p>Material Science Dept, Zoellner Arts Center</p>
        </div>
        <div className="spec-item">
          <h4>Status</h4>
          <p>Archived (Aero) / Porting to New Platform</p>
        </div>
      </div>

      {/* PLATFORM NOTICE */}
      <div className="disclaimer-banner" style={{ background: '#fff3cd', color: '#856404', padding: '1rem', borderRadius: '8px', marginBottom: '3rem', border: '1px solid #ffeeba' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          <strong>Platform Status:</strong> This project was originally deployed on <strong>Adobe Aero</strong>, which has since been discontinued. 
          The video below documents the functional AR prototype. We are currently developing a replacement application to restore public access.
        </p>
      </div>

      <div className="case-study-body">
        
        {/* PHASE 1: STAKEHOLDER MANAGEMENT */}
        <section className="cs-section">
          <h2>Phase 1: Coordination & Capture</h2>
          <p>
           The project began with a preservation challenge: This intricate bronze artifact is too delicate for students to handle, yet its details are too small to appreciate from behind a museum glass case.
          </p>
          <p>
           I participated in coordinated meetings between the Material Science Department and the Zoellner Arts Center. We established a 
           timeline to access the collection and performed a precision scan to capture the minute details of the aged casting.
          </p>
        </section>

        {/* PHASE 2: PRODUCTION PIPELINE */}
        <section className="cs-section">
          <h2>Phase 2: Optimization & Material fidelity</h2>
          <p>
            The age of the artifact presented a specific technical challenge. The surface had developed a dark, complex patina over decades. Dark surfaces tend to
             absorb scanner light rather than reflecting it, leading to 'noise' and loss of detail in the raw data.
          </p>
          <ul style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
            <li><strong>Tezture Restoration:</strong> I carefully balanced the texture maps to ensure the digital model looked like aged bronze, not generic plastic.</li>
            <li><strong>Retopology:</strong> I reduced the polygon count while baking the high-res casting details (scratches, weathering, and engravings) into Normal Maps.</li>
            <li><strong>Contextual Modeling:</strong> To give the artifact a proper digital presentation, I modeled a custom <strong>museum-style pedestal</strong> in Blender to ground the object in AR space.</li>
          </ul>

          <div className="image-grid-2">
             {/* LEFT IMAGE: THE ARC */}
             <div className="img-container">
               <img 
                 src={arch} 
                 alt="The Bronze Arc Scan" 
                 style={{ height: '250px', width: '100%', objectFit: 'contain' }} 
               />
               <p className="caption">The Bronze Arc</p>
             </div>

             {/* RIGHT IMAGE: THE PEDESTAL */}
             <div className="img-container">
               <img 
                 src={pedastal} 
                 alt="Custom Pedestal Model" 
                 style={{ height: '250px', width: '100%', objectFit: 'contain' }} 
               />
               <p className="caption">Custom Pedestal Modeled in Blender</p>
             </div>
         </div>
        </section>

        {/* PHASE 3: AERO INTEGRATION & VIDEO */}
        <section className="cs-section">
          <h2>Phase 3: The AR Implementation</h2>
          <p>
            I imported both the optimized Arch and the custom Pedestal into Adobe Aero. 
            Instead of a static model, I added interactive behaviors:
          </p>
          <p>
            Users could move their phone inches away from the virtual object to inspect the bronze texture, which is something they couldn't do in the museum. 
            I also added buttons that allowed the user to rotate the model, two to increase, and decreased the size of the model, and a link to more information about the project.
          </p>

          {/* THE VIDEO CONTAINER */}
          <div className="video-container" style={{ maxWidth: '800px', margin: '3rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
            <video controls width="100%" style={{ display: 'block' }}>
               <source src={archVideo} type="video/mp4" />
               Your browser does not support the video tag.
            </video> 
            <div style={{ padding: '1rem', background: '#f8f9fa', borderTop: '1px solid #eee' }}>
               <p className="caption" style={{margin: 0}}>Inspecting the Bronze Arch in AR on an iPad (Adobe Aero).
               </p>
            </div>
          </div>
        </section>

        {/* FUTURE WORK */}
        <section className="cs-section">
          <h2>Current Status: The Migration</h2>
          <p>
            Following Adobe's discontinuation of Aero, our lab is currently engaging in effort to port these assets into a custom 
            GitHub app.
          </p>
        </section>

      </div>

      <div className="case-study-footer">
        <Link to="/work/nhi" className="back-link">← Back to NHI Overview</Link>
      </div>

    </div>
  );
};

export default NHIProject1;