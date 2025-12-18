
import React from 'react';
import { Link } from 'react-router-dom';

import labDiagram from '../assets/Gaussian Fourier.png'; 

const Fukushima = () => {
  return (
    <div className="container page-content">
      
      {/* 1. HEADER */}
      <header className="case-study-hero">
        <span className="client-name">Nagoya Institute of Technology / Fukushima Lab</span>
        <h1 className="page-title">Gaussian Fourier Pyramid Implementation</h1>
        <p className="lead-text">
          A computational photography research project. My role was to bridge the gap between 
          theoretical research and practical execution by reproducing novel edge-preserving 
          filter algorithms in MATLAB.
        </p>
      </header>

      {/* 2. SPECS GRID */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Research Intern</p>
        </div>
        <div className="spec-item">
          <h4>Tools</h4>
          <p>MATLAB, Computer Vision</p>
        </div>
        <div className="spec-item">
          <h4>Context</h4>
          <p>International Research (Japan)</p>
        </div>
      </div>

      {/* 3. FULL SCOPE SECTION */}
      <div className="scope-section" style={{ marginBottom: '4rem', padding: '2rem', background: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h3 style={{ marginTop: 0, fontFamily: 'Mukta, sans-serif' }}>Full Scope of Responsibilities</h3>
        <p style={{ marginBottom: '1.5rem' }}>
            While the visuals below highlight the results, my contributions extended to the full mathematical validation of the research:
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: '1.2rem' }}>
            <li><strong>Algorithm Implementation:</strong> Wrote the MATLAB code from scratch to replicate the lab's novel "Gaussian Fourier Pyramid" method.</li>
            <li><strong>Comparative Analysis:</strong> Benchmarked the new method against standard Local Laplacian Filters to prove efficiency gains.</li>
            <li><strong>Cross-Cultural Communication:</strong> Navigated technical discussions within a primarily Japanese-speaking research team.</li>
        </ul>
      </div>

      <div className="case-study-body">
        
        {/* 4. THE CHALLENGE */}
        <section className="cs-section">
          <h2>The Research Goal</h2>
          <p>
            The core challenge in computational photography is Edge Preservation. 
            How do you smooth out the noise/texture in an image (like skin or sky) without blurring the sharp edges (like eyes or buildings)?
          </p>
          <p>
            The Fukushima Lab developed a new approach called the Gaussian Fourier Pyramid (GFP). 
            My task was to prove that this new method was faster and more accurate than existing industry standards.
          </p>
        </section>

        {/* 5. VISUALIZATION */}
        <section className="cs-section">
          <h2>Visualizing the Mathematics</h2>
          <p>
            To understand the complex mathematics behind the lab's method, I studied their diagrams and then implemented the corresponding algorithms in MATLAB.
          </p>

          <div className="image-full" style={{ marginTop: '2rem', textAlign: 'center' }}>
             <img 
               src={labDiagram} 
               alt="Gaussian Fourier Pyramid Algorithm Diagram" 
               style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #eee' }} 
             />
             <p className="caption">
               Algorithm Flow Diagram provided by the Fukushima Lab, illustrating the Gaussian Fourier Pyramid process.
             </p>
          </div>
        </section>

        {/* 6. REFLECTION */}
        <section className="cs-section">
          <h2>Technical & Cultural Growth</h2>
          <p>
            This internship was my first deep dive into reading academic papers and translating them into code. 
            It taught me that programming is not just about syntax, but about logic and verification.
          </p>
          <p>
             Additionally, working in Nagoya required me to be adaptable. I learned to use diagrams 
             like the one above and mathematical models as a "universal language" to bridge the language gap with my Japanese colleagues.
          </p>
        </section>

      </div>

      {/* FOOTER */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default Fukushima;