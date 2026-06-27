// src/pages/Work.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// --- MAIN PROJECT ASSETS ---
import seraLogo from '../assets/SERA LOGO.png'; 
import uniSourceAdmin from '../assets/uniSource Admin Dashboard.png';
import ourionFrontPage from '../assets/Ourion Front Page.png';
import SSILabSim from '../assets/SSILabSim.PNG';
import FukushimaExample from '../assets/Gaussian Fourier.png';
import NHIOutreach from '../assets/NHIOutreach.jpg';
import RIVRTeamMeeting from '../assets/RIVRTeamMeeting.jpg';
import TwoPictos from '../assets/two_pictos.png';
import TypeSpecimenBug from '../assets/DeGuzmanMurata_type-specimen.png';
import Chocolate from '../assets/DeGuzmanMurata_Product_Label_Design.png';
import VerifySources from '../assets/Poster.png';
import KabelSpecimen from '../assets/Kabel_Specimen.png';

// --- GALLERY ASSETS ---
// Import your gallery images here
// import sketch1 from '../assets/sketch1.jpg';
// import bookbinding1 from '../assets/bookbinding1.jpg';
// import uiDesign1 from '../assets/uiDesign1.png';

const Work = () => {
  
  // 1. HEADER STYLE
  const categoryHeaderStyle = {
    fontFamily: "'Mukta', sans-serif",
    fontSize: '1.8rem',
    borderBottom: '2px solid #eee',
    paddingBottom: '0.5rem',
    marginTop: '4rem',
    marginBottom: '2rem',
    color: '#333'
  };

  // 2. PLACEHOLDER STYLE
  const placeholderStyle = {
    width: '100%',
    height: '100%',
    background: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    minHeight: '200px'
  };

  // 3. GALLERY STYLES
  const galleryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '1rem'
  };

  const galleryCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #eaeaea',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  };

  const galleryImgStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover' // 'cover' ensures the image fills the box nicely without stretching
  };

  const galleryCaptionStyle = {
    padding: '12px 15px',
    fontSize: '0.9rem',
    color: '#666',
    margin: 0,
    backgroundColor: '#fafafa',
    borderTop: '1px solid #eaeaea',
    textAlign: 'center',
    fontStyle: 'italic'
  };

  const galleryData = [
    {
      id: 'Garamond-Type-Specimen',
      title: 'Adobe Garamond Type Specimen',
      caption: 'Type specimen poster inspired by entomology.',
      img: TypeSpecimenBug
    },
    {
      id: 'Chocolate-Product-Design',
      title: 'Chcolate Product Design',
      caption: 'Premium chocolate featuring a garden window with unique flora.',
      img: Chocolate
    },
    {
      id: 'Verify-Sources-Poster',
      title: 'Source Verification Poster',
      caption: 'Poster promoting the identification of reliable sources.',
      img: VerifySources
    },
    {
      id: 'Kabel-Specimen',
      title: 'Kabel Type Specimen',
      caption: 'Typographic research and layouts focused on Rudolf Koch’s typefaces.',
      img: KabelSpecimen
    }
  ];

  return (
    <div className="container page-content">
      <div className="section">
        <h1 className="page-title" style={{ marginBottom: '1rem' }}>Selected Work</h1>
        <p>
          A collection of software engineering, academic research, and VR design projects, with some examples of 
          progress and development, case studies, and live work.
        </p>

        {/* 1. INDUSTRY EXPERIENCE */}
        <h2 style={categoryHeaderStyle}>Industry Experience</h2>
        <div className="work-list">
          
          <Link to="/work/sera" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={seraLogo} 
                alt="Sera.io Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>Sera.io</h3>
              <span className="role-tag">Software Engineering Intern</span>
              <p>
                Full-stack development for a B2B SaaS platform. Optimized backend queries 
                and built responsive React front-end components for client management.
              </p>
            </div>
          </Link>

        </div>

        {/* 2. ENGINEERING PROJECTS */}
        <h2 style={categoryHeaderStyle}>Software & Engineering</h2>
        <div className="work-list">

          {/* UniSource */}
          <Link to="/work/unisource" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={uniSourceAdmin} 
                alt="uniSource's Admin Dashboard" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>uniSource</h3>
              <span className="role-tag">Full-Stack Web Platform</span>
              <p>
                A centralized curriculum management system for Lehigh's CS Department. 
                Built with Next.js, PostgreSQL, and a custom API to replace legacy spreadsheets.
              </p>
              <span className="read-more">View Project →</span>
            </div>
          </Link>

          {/* Ourion */}
          <Link to="/work/ourion" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={ourionFrontPage} 
                alt="Ourion's Front Page" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>Ourion</h3>
              <span className="role-tag">Computer Vision Startup</span>
              <p>
                Real-time waste classification system. Uses OpenCV and deep learning models 
                to identify recyclable materials instantly via camera feed.
              </p>
            </div>
          </Link>

        </div>

        {/* 3. ACADEMIC RESEARCH */}
        <h2 style={categoryHeaderStyle}>Research & Labs</h2>
        <div className="work-list">

          {/* SSI */}
          <Link to="/work/ssi" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={SSILabSim} 
                alt="SSI's Dorm Room VR" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>Stereotyping Social Interactions</h3>
              <span className="role-tag">VR Developer (Unity/C#)</span>
              <p>
                Designed a VR social psychology simulation. Focused on non-gamer onboarding 
                UI and collecting gaze/interaction data for research analysis.
              </p>
            </div>
          </Link>

          {/* Fukushima */}
          <Link to="/work/fukushima" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={FukushimaExample} 
                alt="Gaussian Fourier" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>FUKUSHIMA Lab</h3>
              <span className="role-tag">Algorithm Researcher (MATLAB)</span>
              <p>
                Worked in Nagoya, Japan, reproducing novel "Gaussian Fourier Pyramid" 
                algorithms to validate edge-preserving image filters.
              </p>
            </div>
          </Link>

          {/* NHI */}
          <Link to="/work/nhi" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={NHIOutreach} 
                alt="Outreach at NHI" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>NanoHuman Interfaces</h3>
              <span className="role-tag">XR Developer</span>
              <p>
                Developed AR/VR scanning workflows for the HoloLens, optimizing high-poly 
                nano-scale models for real-time rendering.
              </p>
            </div>
          </Link>

          {/* RIVR */}
           <Link to="/work/rivr" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={RIVRTeamMeeting} 
                alt="RIVR Team Meeting" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>RIVR Lab</h3>
              <span className="role-tag">VR Developer</span>
              <p>
                Created educational immersive experiences to introduce students to VR technology 
                using Oculus headsets and Unity.
              </p>
            </div>
          </Link>

        </div>

        {/* 4. DESIGN & CREATIVE */}
        <h2 style={categoryHeaderStyle}>Design & Creative</h2>
        <div className="work-list">
          
          <Link to="/work/sports-icons" className="wide-card">
            <div className="wide-card-image">
              <img 
                src={TwoPictos} 
                alt="Two Iconography Examples of Sports" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  padding: '20px' 
                }} 
              />
            </div>
            <div className="wide-card-content">
              <h3>Sports Iconography Set</h3>
              <span className="role-tag">Adobe Illustrator</span>
              <p>
                A process on creating sports-based iconography, inspired by the Olympics.
              </p>
              <span className="read-more">View Process →</span>
            </div>
          </Link>

        </div>

        {/* 5. VISUAL GALLERY */}
        <h2 style={categoryHeaderStyle}>Additional Design Work</h2>
        <div style={galleryGridStyle}>
          
          {/* Automatically generate a card for every item in your array */}
          {galleryData.map((item) => (
            <Link 
              key={item.id}
              to={`/work/gallery/${item.id}`} 
              state={{ galleryItem: item }} // This passes the data to the new page!
              style={{ textDecoration: 'none' }}
            >
              <div style={galleryCardStyle}>
                {item.img ? (
                   <img src={item.img} alt={item.title} style={galleryImgStyle} />
                ) : (
                   <div style={placeholderStyle}>[Image: {item.title}]</div>
                )}
                <p style={galleryCaptionStyle}>{item.title}</p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Work;