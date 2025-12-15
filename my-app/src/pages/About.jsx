// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// --- ASSETS ---
// Import the new graduation photo
// Make sure the file 'graduation photo.JPEG' is in your src/assets folder
import profilePic from '../assets/graduation photo.JPG'; 

const About = () => {
  return (
    <div className="container page-content">
      
      {/* --- 1. HERO SECTION (Split Layout) --- */}
      <div className="image-grid-2" style={{ alignItems: 'center', marginBottom: '4rem' }}>
        
        {/* Left Col: The Intro */}
        <div>
          <h1 className="page-title" style={{ marginBottom: '0.5rem' }}>
            Hi, I'm Michele.
          </h1>
          <h3 style={{ fontFamily: 'Mukta, sans-serif', color: '#666', marginTop: 0 }}>
            Developer • Designer • Researcher
          </h3>
          <p className="lead-text" style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
            I am currently an undergraduate at <strong>Lehigh University</strong>, blending Computer Science with an Art & Design minor to build digital experiences that feel human.
          </p>
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            I believe technology works best when it's invisible. Whether I'm building VR environments for empathy research or full-stack web apps, my goal is to solve complex problems with intuitive, user-focused design.
          </p>
        </div>

        {/* Right Col: The Photo */}
        <div className="img-container">
          {/* Since we are now importing the photo, we don't need the placeholder check. */}
          <img 
            src={profilePic} 
            alt="Michele De Guzman Murata - Graduation" 
            // Added objectFit: 'cover' to ensure the image fills the space nicely
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
          />
        </div>
      </div>

      {/* --- 2. THE "SPECS" (Education & Contact) --- */}
      <div className="project-specs" style={{ borderTop: '1px solid #eee', paddingTop: '2rem' }}>
        <div className="spec-item">
          <h4>Education</h4>
          <p>Lehigh University</p>
          <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>B.S. Computer Science</p>
        </div>
        <div className="spec-item">
          <h4>Location</h4>
          <p>Bethlehem, PA</p>
        </div>
        <div className="spec-item">
          <h4>Interests</h4>
          <p>VR/XR, Computer Vision, UI/UX</p>
        </div>
        <div className="spec-item">
          <h4>Connect</h4>
          <p>
            <a href="mailto:your.email@lehigh.edu">Email Me</a>
          </p>
        </div>
      </div>

      {/* --- 3. SKILLS & TOOLS --- */}
      <section className="cs-section">
        <h2>Technical Toolkit</h2>
        <p>
          My work spans the gap between creative design and hard engineering. Here are the tools I use to bridge that divide:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Column 1 */}
          <div>
            <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Development</h4>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: '#555' }}>
              <li>Python / Flask</li>
              <li>React / Next.js</li>
              <li>C# (Unity)</li>
              <li>MATLAB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Design & 3D</h4>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: '#555' }}>
              <li>Blender (Modeling & Anim)</li>
              <li>Adobe Illustrator / PS</li>
              <li>Figma</li>
              <li>Oculus/Meta Quest Dev</li>
            </ul>
          </div>

           {/* Column 3 */}
           <div>
            <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Research</h4>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: '#555' }}>
              <li>Computer Vision (OpenCV)</li>
              <li>Data Visualization</li>
              <li>Academic Writing</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- 4. PERSONAL / FUN SECTION --- */}
      <section className="cs-section">
        <h2>Beyond the Screen</h2>
        <p>
          When I'm not coding, I'm usually exploring the physical side of creativity. 
        </p>
        <p>
           I pursue an <strong>Art & Design minor</strong> because I believe the best engineering comes from understanding aesthetics. 
           Whether it's photogrammetry scanning of bronze sculptures (like "The Bronze Arc") or experimenting with 3D printing, 
           I love turning digital concepts into physical reality.
        </p>
      </section>
    </div>
  );
};

export default About;