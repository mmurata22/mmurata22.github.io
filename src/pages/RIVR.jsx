import React from 'react';
import { Link } from 'react-router-dom';
import './RIVR.css';
import LGSScreenshot from '../assets/LGS-Screenshot.png';
import teamMeetingImg from '../assets/RiVR-team-meeting.jpg';
import morningCall from '../assets/rivr-morning-call.jpg'

const rivr = () => {
  return (
    <div className="portfolio-container">
    <div className="back-link">
        <Link to="/" className="btn-back-main">Back to Main Page</Link>
    </div>
      <section className="project-section">
        <h2>Research in Virtual Reality (RiVR)</h2>

        <div className="project-card">
            <p>This project is designing, developing, testing, and implementing an immersive virtual reality (iVR) project for STEM 
                education to promote engagement and learning about spatial watershed features and environmental issues in the Lehigh 
                River watershed. This project seeks to advance a novel approach using iVR learning with game design principles to 
                broaden access to STEM learning experiences for adolescents and adults with a collaboration of informal STEM centers 
                in the Lehigh Valley.
            </p>
          <a href="https://eli.lehigh.edu">View the Site</a>
        </div>

        <div className="project-card">
          <p>
            <p className="subtitle">Tech-stack Used:</p>
            <ul className="tech-list">
              <li>Unity (C#, XR Interaction Toolkit)</li>
              <li>Oculus Quest 2 + 3</li>
              <li>Plastic SCM, GitHub</li>
              <li>REDCap</li>
              <li>Drupal</li>
            </ul>
          </p>
        </div>

        <div className="project-card special">
          <p className="subtitle">🏅 Award-Winning Research</p>
          <p>
            The Lehigh Valley Social Impact Fellowship project team “RiVR” (Research in Immersive Virtual Reality)’s paper,  "Designing 
            for Headset VR from a Longer Desktop VR Learning Experience: Watershed Explorers: Industrial History," won the Innovation in 
            Non-Formal Education award at the 10th International Conference of the Immersive Learning Research Network (iLRN).
          </p>
          <a href="https://www.immersivelrn.org/ilrn2024/awards/">View iLRN2024's Conference Award Winners</a>
        </div>

        <div className="project-card">
          <p style={{fontStyle: 'italic'}} className="subtitle">
            Read more about our lab's work in Lehigh University's article:
            <img src={teamMeetingImg} alt="RiVR Team Meeting" className="project-image" />
          </p>
          <a href="https://news.lehigh.edu/revolutionizing-learning-through-immersive-virtual-reality">View the Article</a>
        </div>

        <div className="project-card">
          <p style={{fontStyle: 'italic'}} className="subtitle">
            Read more about our lab's work in The Morning Call's newspaper article:
            <img src={morningCall} alt="RiVR Morning Call" className="project-image" />
          </p>
          <a href="https://www.mcall.com/2025/06/10/virtual-reality-games-from-lehigh-university-reveal-watershed-history/">View the Article</a>
        </div>
      </section>
    </div>
  );
};

export default rivr;
