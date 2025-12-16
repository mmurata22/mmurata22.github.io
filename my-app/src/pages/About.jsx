// src/pages/About.jsx
import React from 'react';
import profilePic from '../assets/michele.jpg'; 

const About = () => {
  return (
    <div className="container page-content">
      
      {/* --- 1. HERO SECTION (Animation Delay: 0.1s) --- */}
      <div 
        className="image-grid-2 section section-1" 
        style={{ alignItems: 'center', marginBottom: '4rem' }}
      >
        
        {/* Left Col: Text */}
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

        {/* Right Col: Photo & Caption */}
        <div className="img-container">
          <img 
            src={profilePic} 
            alt="Michele featured on the NASDAQ Tower" 
            style={{ 
              width: '100%', 
              borderRadius: '12px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)', 
              objectFit: 'cover' 
            }} 
          />
          {/* The Caption */}
          <p style={{ 
            textAlign: 'center', 
            fontSize: '0.9rem', 
            color: '#777', 
            marginTop: '10px', 
            fontStyle: 'italic',
            fontFamily: 'Hepta Slab, serif'
          }}>
            Featured on the NASDAQ Tower in Times Square during my internship at Sera.
          </p>
        </div>
      </div>

      {/* --- 2. SPECS (Animation Delay: 0.3s) --- */}
      <div 
        className="project-specs section section-2" 
        style={{ borderTop: '1px solid #eee', paddingTop: '2rem' }}
      >
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
            <a href="mailto:your.email@lehigh.edu" style={{ color: '#3a60ff', fontWeight: 'bold' }}>Email Me</a>
          </p>
        </div>
      </div>

      {/* --- 3. SKILLS (Animation Delay: 0.5s) --- */}
      <section className="cs-section section section-3">
        <h2>Technical Toolkit</h2>
        <p>
          My work spans the gap between creative design and hard engineering. Here are the tools I use to bridge that divide:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
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

          <div>
            <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Design & 3D</h4>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: '#555' }}>
              <li>Blender (Modeling & Anim)</li>
              <li>Adobe Illustrator / PS</li>
              <li>Figma</li>
              <li>Oculus/Meta Quest Dev</li>
            </ul>
          </div>

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

      {/* --- 4. FUN SECTION (Animation Delay: 0.7s) --- */}
      {/* Manually added style for delay since .section-4 might not exist in CSS */}
      <section 
        className="cs-section section" 
        style={{ animationDelay: '0.7s' }}
      >
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