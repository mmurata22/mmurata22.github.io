import React, { useEffect, useRef } from 'react';
import SocialLinks from '../components/SocialLinks';
import { initGradient } from '../js/gradient-animation';

const Home = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    initGradient();

    const handleScroll = () => {
      const timeline = timelineRef.current;
      const blueLine = document.getElementById('blue-line');
      
      // Grab all dots to find their associated boxes
      const dots = document.querySelectorAll('.timeline-dot');
      
      if (!timeline || !blueLine) return;

      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when the timeline is roughly in the middle of the screen
      const startOffset = windowHeight * 0.55; 
      const distFromTop = startOffset - timelineRect.top;
      const maxHeight = timeline.offsetHeight;
      const activeHeight = Math.max(0, Math.min(distFromTop, maxHeight));

      // 1. Update Blue Line Height
      blueLine.style.height = `${activeHeight}px`;

      // 2. Update Dots AND Boxes
      dots.forEach((dot) => {
        const item = dot.closest('.timeline-item');
        if (item) {
          // Find the box inside this item
          const box = item.querySelector('.timeline-box');
          const itemTop = item.offsetTop - 10;
          
          if (activeHeight >= itemTop) {
            dot.classList.add('active');
            if (box) box.classList.add('active'); // Trigger the border animation
          } else {
            dot.classList.remove('active');
            if (box) box.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper component to render the 4 borders easily
  const TracingBorder = ({ children }) => (
    <div className="timeline-box">
      <span className="t-border t-border-top"></span>
      <span className="t-border t-border-right"></span>
      <span className="t-border t-border-bottom"></span>
      <span className="t-border t-border-left"></span>
      {children}
    </div>
  );

  return (
    <>
      <header 
        className="hero-header"
        style={{ 
          background: 'linear-gradient(135deg, #00FFFF 0%, #3a60ff 50%, #FF00FF 100%)',
          position: 'relative',
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginBottom: '5rem'
        }}
      >
        <canvas id="fluid-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0, transition: 'opacity 2.0s ease' }}></canvas>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center' }}>
          <h1>Hello, I'm Michele Murata!</h1>
          <p>Building cool experiences, one code block at a time.</p>
        </div>
      </header>

      <div className="container">
        
        {/* TIMELINE */}
        <div className="timeline-wrapper" ref={timelineRef} style={{ marginBottom: '6rem' }}>
          
          <div className="timeline-track-gray"></div>
          <div id="blue-line" className="timeline-track-blue"></div>

          {/* ITEM: ABOUT */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
              {/* Wrapped in TracingBorder */}
              <TracingBorder>
                <h2>About Me</h2>
                <p>
                  Hi! I'm Michele Murata, currently enrolled at Lehigh University majoring in Computer Science and minoring in Graphic Design.
                </p>
              </TracingBorder>
            </div>
          </div>

          {/* ITEM: VR Research */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
              <TracingBorder>
                <div className="project-card">
                  <h3>Research in Immersive Virtual Reality</h3>
                  <p>- Worked with Oculus and Unity to create VR experiences for educational outreach (C#).</p>
                  <p>- Used PlasticSCM for version control with a team of 7+.</p>
                </div>
              </TracingBorder>
            </div>
          </div>

          {/* ITEM: NanoHuman */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
              <TracingBorder>
                <div className="project-card">
                  <h3>NanoHuman Interfaces Lab</h3>
                  <p>- Scanned objects into VR models using Blender and Unity for HTC ViVE.</p>
                  <p>- Built AR experiences using Adobe Aero for student assignments.</p>
                </div>
              </TracingBorder>
            </div>
          </div>

          {/* ITEM: Stereotyping */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
              <TracingBorder>
                <div className="project-card">
                  <h3>Stereotyping Social Interactions</h3>
                  <p>- Developed social psychology simulations in Unity/Oculus Rift.</p>
                  <p>- Programmed backend C# logic for user interaction data collection.</p>
                </div>
              </TracingBorder>
            </div>
          </div>

          {/* ITEM: Fukushima */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
              <TracingBorder>
                <div className="project-card">
                  <h3>FUKUSHIMA Lab</h3>
                  <p>- International research in Nagoya, Japan.</p>
                  <p>- Validated Gaussian Fourier Pyramids algorithms using MATLAB.</p>
                </div>
              </TracingBorder>
            </div>
          </div>

        </div> 
        {/* END TIMELINE */}


        {/* CTA FOOTER */}
        <div className="cta-section-wrapper">
          <div className="cta-card">
            <h2>Let's Build Something Together.</h2>
            <p>
              I'm currently looking for new opportunities in software engineering and VR.
              Whether you have a question or just want to say hi, my inbox is open!
            </p>
            <div className="cta-links-large">
               <SocialLinks />
            </div>
            <p className="copyright">© {new Date().getFullYear()} Michele Murata</p>
            <div className="cta-bg-decoration"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;