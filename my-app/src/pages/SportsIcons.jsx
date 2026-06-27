import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Re-using the same CSS from SSI case study for consistency
import './SSI.css'; 

// --- ASSETS ---
import processImg1 from '../assets/pictograph_play-1.png';
import processImg2 from '../assets/pictograph_play-2.png';
import processImg3 from '../assets/pictograph_play-3.png';
import processImg4 from '../assets/pictograph_play-4.png';
import processImg5 from '../assets/DeGuzmanMurata_pictograph_drafts.png';

const SportsIcons = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-content">
      
      {/* 1. HERO HEADER */}
      <header className="case-study-hero">
        <span className="client-name">Graphic Design & Iconography</span>
        <h1 className="page-title">Sports Iconography Set</h1>
        <p className="lead-text">
          An exploration in creating simple iconograph that conveys a readable message. This project focuses on displaying 
          human motion in sports, while also retaining an air of uniqueness, deviating from the curvy flow of action and
          pushing onto the idea of blockiness.
        </p>
      </header>

      {/* 2. SPECS GRID */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Tools</h4>
          <p>Adobe Illustrator</p>
        </div>
        <div className="spec-item">
          <h4>Focus</h4>
          <p>Vector Illustration, Grid Systems</p>
        </div>
      </div>

      {/* 3. THE CHALLENGE */}
      <section className="cs-section">
        <h2>The Challenge</h2>
        <p>
          Designing iconography's biggest challenge is creating an image that is universally understood. Instead of relying on type
          or context from other imagery, the icon alone must stand on it's own to convey the message. This project focused on
          going beyond language and relying on a shared fundamental way of communicating with each other - imagery!
        </p>
      </section>

      {/* 4. PROCESS & EXPLORATION */}
      <section className="cs-section">
        <h2>Iterative Process & Form Building</h2>
        <p>
          Inspired by Japanese iconography, the process began with breaking down the subjects into their most basic geometric primitives. 
          By experimenting with heavy block forms and intersecting lines, I explored how much detail could be stripped away before the subject lost its meaning.
          It was important to look at different ways weightlifting can be viewed, such as from different angles, full body, or just the upper body.
        </p>
        
        <div className="image-full" style={{ marginBottom: '2rem' }}>
          <img 
            src={processImg2} 
            alt="Initial form building and negative space exploration for weightlifting equipment." 
            style={{ border: '1px solid #eee', borderRadius: '4px' }} 
          />
          <p className="caption">Early explorations of weight bench forms, focusing on heavy contrast and negative space.</p>
        </div>

        <div className="image-full">
          <img 
            src={processImg4} 
            alt="Grid alignments and block structure iterations." 
            style={{ border: '1px solid #eee', borderRadius: '4px' }} 
          />
          <p className="caption">Iterating on different colorations, spacings, floor patterns, etc.</p>
        </div>
      </section>

      {/* 5. REFINEMENT & ACTION */}
      <section className="cs-section">
        <h2>Action & Context</h2>
        <p>
          Beyond weightlifting, another set of sports icons consisted of swimming. Swimming, being fluid and motionful, is 
          completely different from the blocky and rigid forms of weightlifting. However, the idea behind these sports
          icons was to be blocky and geometric. Utilizing the unique form of diving, I explored different ways to convey
          diving, and ended up with this complex, tangled forms of limbs that was unique and abstract, yet still readable as a diver.
        </p>

        <div className="image-full" style={{ marginBottom: '2rem' }}>
           <img 
             src={processImg1} 
             alt="Iterations of a hand using a spray bottle." 
             style={{ border: '1px solid #eee', borderRadius: '4px' }} 
           />
           <p className="caption">Developing the swim iconography, alongside the weightlifting icons.</p>
        </div>

        <div className="image-full">
           <img 
             src={processImg3} 
             alt="Refinement of lines and abstract geometric combinations." 
             style={{ border: '1px solid #eee', borderRadius: '4px' }} 
           />
           <p className="caption">Refining icons, exploring line weights, different focuses, and icon borders.</p>
        </div>

        <div className="image-full">
           <img 
             src={processImg5} 
             alt="Final iconogrpahy." 
             style={{ border: '1px solid #eee', borderRadius: '4px' }} 
           />
           <p className="caption">Final iconography.</p>
        </div>
      </section>

      {/* 6. REFLECTION */}
      <section className="cs-section">
        <h2>Key Takeaways</h2>
        <p>
          This exercise in vector illustration reinforced the importance of constraints in graphic design. 
          By limiting myself to strictly black and white forms and relying heavily on geometric grids, 
          focusing on the fundamentals helped me learn how to communicate simply, and effectively, without relying
          on superficial details that allude to professionalism.
        </p>
      </section>

      {/* --- FOOTER --- */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default SportsIcons;