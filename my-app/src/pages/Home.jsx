import React, { useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
import { initGradient } from '../js/gradient-animation';

const Home = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    initGradient();

    // Variable to track if a frame is already requested
    let ticking = false;

    const updateTimeline = () => {
      const wrappers = document.querySelectorAll('.timeline-wrapper');

      wrappers.forEach((wrapper) => {
        const blueLine = wrapper.querySelector('.timeline-track-blue');
        const dots = wrapper.querySelectorAll('.timeline-dot');

        if (!blueLine) return;

        const rect = wrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only run calculations if the wrapper is actually on screen
        if (rect.bottom < 0 || rect.top > windowHeight) return;

        const startOffset = windowHeight * 0.55; 
        const distFromTop = startOffset - rect.top;
        const maxHeight = wrapper.offsetHeight;

        const activeHeight = Math.max(0, Math.min(distFromTop, maxHeight));
        
        // OPTIMIZATION: Only write to DOM if the value actually changed
        // (Browser optimizes this automatically, but good to be aware)
        blueLine.style.height = `${activeHeight}px`;

        dots.forEach((dot) => {
          const item = dot.closest('.timeline-item');
          if (item) {
            const itemTop = item.offsetTop - 10;
            const box = item.querySelector('.timeline-box');

            if (activeHeight >= itemTop) {
              // Only add class if it's missing (prevents unnecessary repaints)
              if (!dot.classList.contains('active')) {
                dot.classList.add('active');
                if (box) box.classList.add('active');
              }
            } else {
              if (dot.classList.contains('active')) {
                dot.classList.remove('active');
                if (box) box.classList.remove('active');
              }
            }
          }
        });
      });
      
      // Reset the tick so we can capture the next frame
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTimeline);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    
    // Initial call
    updateTimeline();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          marginBottom: '4rem'
        }}
      >
        <canvas id="fluid-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0, transition: 'opacity 2.0s ease' }}></canvas>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center' }}>
          <h1>Hello, I'm Michele Murata!</h1>
          <p>Building cool experiences, one code block at a time.</p>
        </div>
      </header>

      <div className="container">
        
        <section style={{ maxWidth: '800px', margin: '0 auto 6rem auto', textAlign: 'center' }}>
           <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Mukta, sans-serif' }}>About Me</h2>
           <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
             I'm, currently enrolled at Lehigh University majoring in Computer Science and minoring in Graphic Design. 
             I have a passion for making immersive experiences and finding tangible uses for new tech and emerging tech.
           </p>
        </section>

        <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem', fontFamily: 'Mukta, sans-serif', textTransform: 'uppercase', letterSpacing: '2px', color: '#333' }}>
          Experience
        </h3>

        <div className="timeline-wrapper" style={{ marginBottom: '6rem' }}>
          <div className="timeline-track-gray"></div>
          <div className="timeline-track-blue"></div>

          {/* Sera.io */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>Sera.io</h3>
                  <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>Frontend Web Developer</p>
                  <p>- Developed and maintained responsive front-end features using React, TypeScript, Tailwind CSS, and Node.js, contributing to 
                  a smart budgeting platform that analyzes financial history to automate debt reduction.</p>
                  <p>- Implemented mobile-first UI components and integrated third-party libraries (Recharts, Sonner) to support interactive tours, 
                    data visualization (e.g. pie charts), and real-time toast notifications.</p>
                  <p>- Delivered key product features including onboarding flows, influencer analytics dashboards, and landing page redesigns, 
                    while resolving UI/UX bugs to improve application performance and usability.</p>
                </div>
            </div>
          </div>

          {/* NHI */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>Nano|Human Interfaces Laboratory (NHI) @ Lehigh Univeristy</h3>
                  <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>VR Software Engineer & Co-Lab Manager</p>
                  <p>- Co-managed lab operations, establishing standard operating procedures (SOPs) for version control and asset organization to
                     streamline workflows for a multi-developer team.</p>
                  <p>- Developed a self-guided Mixed Reality (MR) training simulation on Microsoft HoloLens for FIB and TEM microscopes, replacing 
                    manual instruction with interactive spatial lessons to reduce training overhead.</p>
                  <p>- Created AR visualization tools using Adobe Aero to render complex atomic structures (e.g., Ni6W6C) and biological models, 
                    directly supporting successful faculty grant applications.</p>
                  <p>- Executed end-to-end photogrammetry pipelines to digitize artifacts, applying mesh optimization techniques to convert 
                    high-poly scans into performance-ready assets for mobile AR.</p>
                </div>
            </div>
          </div>

          {/* SSI */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>Stereotyping Social Interactions Laboratory (SSI) @ Rutgers University & Lehigh University</h3>
                  <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>VR Software Engineer & Researcher</p>
                  <p>- Served as a software developer during the project's foundational phase, building high-fidelity environments
                     ("VR Coffee Shop," "VR Dorm") in Unity (C#) to facilitate psychological research on several socially stereotyped scenarios.</p>
                  <p>- Engineered immersive mechanics to optimize user comfort, implementing "fade-to-black" transitions to mitigate motion sickness 
                    and designing animated spatial UI for intuitive navigation.</p>
                  <p>- Directed motion capture sessions and utilized Reallusion Character Creator to populate scenes with realistic, diverse avatars 
                    essential for valid racial study data.</p>
                  <p>- Optimized assets for cross-platform performance, successfully deploying builds to both HTC Vive and Meta Quest 2 hardware.</p>
                </div>
            </div>
          </div>

          {/* RiVR */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>Research in Virtual Reality Laboratory (RiVR) @ Lehigh University</h3>
                   <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>VR Educational Simulation Developer</p>
                  <p>- Aided the technical modernization of the "Lehigh Gap Story" simulation, refactoring legacy code to ensure 
                    forward compatibility from Oculus Quest 1 to Quest 3 standards.</p>
                  <p>- Diagnosed and resolved critical errors in the PC-to-VR port of "Watershed Explorers," restoring full 
                    immersive functionality for environmental education tools.</p>
                  <p>- Managed source control workflows via PlasticSCM, establishing data integrity protocols for distributed collaboration.</p>
                  <p>- Maintained the lab’s digital presence via Drupal and assisted in data collection pipelines using REDCap.</p>
                </div>
            </div>
          </div>

          {/* FUKUSHIMA */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>FUKUSHIMA Laboratory @ Nagoya Institute of Technology</h3>
                   <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>International Computer Graphics Researcher</p>
                  <p>- Collaborated with international researchers to validate advanced computer graphics algorithms within a global academic environment.</p>
                  <p>- Utilized MATLAB to verify the mathematical structures of Gaussian Fourier Pyramids and Local Laplacian Pyramids, providing critical 
                    validation for underlying graphics rendering techniques.</p>
                </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem', fontFamily: 'Mukta, sans-serif', textTransform: 'uppercase', letterSpacing: '2px', color: '#333' }}>
          Selected Projects
        </h3>

        <div className="timeline-wrapper" style={{ marginBottom: '6rem' }}>
          <div className="timeline-track-gray"></div>
          <div className="timeline-track-blue"></div>


          {/* Ourion */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>Ourion</h3>
                  <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>Computer Vision Startup</p>
                  <p>- Developed a machine learning software solution designed to automate the identification and categorization of 
                    recyclable materials to improve waste management efficiency.</p>
                  <p>- Built real-time recognition models using Python and OpenCV to accurately identify plastics (PET, HDPE), paper, glass, 
                    and aluminum.</p>
                  <p>- Designed and hosted a frontend web app to allow users to check recycling information for free.</p>
                </div>
            </div>
          </div>

          {/* uniSource */}
          <div className="timeline-item">
            <div className="timeline-marker"><div className="timeline-dot"></div></div>
            <div className="timeline-content">
                <div className="project-card">
                  <h3 style={{ marginBottom: '0.2rem' }}>uniSource</h3>
                  <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem', marginTop: 0 }}>Full Stack Web Platform</p>
                  <p>- Developed a centralized web platform to unify fragmented course and curriculum data for the Computer Science department.</p>
                  <p>- Established a "single source of truth" for all academic program information, to eliminate data inconsistencies across systems.</p>
                  <p>- Engineered features to automatically generate HTML fragments for public-facing web pages, streamlining content updates.</p>
                  <p>- Built logic to detect and report discrepancies between local data and institutional databases.</p>
                  <p>- Implemented secure authentication and role-based authorization for staff and administrators.</p>
                </div>
            </div>
          </div>
        </div>


        {/* Call-To-Action */}
        <div className="container footer-cta-container">
          <div className="cta-card" style={{ background: '#0c56d5ff', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
            <div className="cta-content">
              <h2>Let's Build Something Together.</h2>
              <p>
                I'm currently looking for new opportunities in software engineering and VR. 
                Have a project in mind or just want to say hi? My inbox is open.
              </p>
              <a href="mailto:your-email@example.com" className="cta-button">
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-bottom">
          <div className="container footer-grid">
            <div className="footer-col brand-col">
              <h3>Michele Murata</h3>
              <p className="footer-tagline">
                Crafting immersive web & VR experiences.
              </p>
            </div>
            <div className="footer-col links-col">
              <h4>Explore</h4>
              <nav>
                <a href="/">Home</a>
                <a href="/work">Work</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
            <div className="footer-col social-col">
              <h4>Connect</h4>
              <div className="footer-socials">
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="container copyright-row">
            <p>© {currentYear} Michele Murata. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;