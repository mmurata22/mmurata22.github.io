import { Routes, Route, Link } from 'react-router-dom'
import Fukushima from './pages/Fukushima'
import NHI from './pages/NHI'
import RIVR from './pages/RIVR'
import SSI from './pages/SSI'
import SocialLinks from './components/SocialLinks';
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <header>
                <h1>Michele D. Murata</h1>
                <p>Computer Science Student @ Lehigh University</p>
              </header>

              <section id="about" className="section section-1">
                <h2>About Me</h2>
                <p>
                  Hi! I'm Michele Murata, currently enrolled at Lehigh University majoring in Computer Science and minoring in Graphic Design. I have a
                  passion for UI/UX, graphics, game development, and all-around anything computer science.
                </p>
              </section>

              <section id="projects" className="section section-2">
                <h2>Experience</h2>
                <Link to="/projects/rivr" className="project-card">
                  <h3>Research in Immersive Virtual Reality</h3>
                  <p>- Worked with Oculus (Quest 1-3) and Unity to create VR experiences for educational outreach regarding environmental studies (C#).</p>
                  <p>- Used PlasticSCM version control to collaboratively work with a team of 7+ to build VR projects.</p>
                  <p>- Managed lab's website using Drupal (PHP).</p>
                </Link>
                <Link to="/projects/nhi" className="project-card">
                  <h3>NanoHuman Interfaces Lab</h3>
                  <p>- Scanned and optimized real life objects into VR compatible models for an art exhibition, utilizing Blender and Unity, to be ported onto HTC ViVE.</p>
                  <p>- Worked on a replica FIB Microscope model for educational purposes, utilizing Unity and C#, to be ported onto HoloLens.</p>
                  <p>- Made AR experiences using Adobe Aero, modeling and necessary assets in Blender. These AR experiences can be seen on any phone.</p>
                  <p>- AR experiences include: Atom Structure Viewer for Ni/Wc/C, Chinese Artifact Viewer, ENGR010 Assignment Viewer</p>
                </Link>
                <Link to="/projects/ssi" className="project-card">
                  <h3>Stereotyping Social Interactions</h3>
                  <p>- Worked with Unity and Occulus Rift VR to create virtual reality environments with interactions between the user and the given social scenario</p>
                  <p>- Conducted research concerning stereotyped interactions within VR and examined how a user would react to a given scenario (e.g., racism, mental health stigma)</p>
                  <p>- Modified and troubleshooted pre-existing environments to aid in the psychology team's research</p>
                  <p>- Worked backend (C#) and front end (UI, UX, modeling and animation)</p>
                </Link>
                <Link to="/projects/fukushima" className="project-card">
                  <h3>FUKUSHIMA Lab</h3>
                  <p>- Worked with a team of Japanese professionals in Nagoya, Japan, exercising a cross-cultural communication.</p>
                  <p>- Used MATLAB to document the efficiency of Gaussian Fourier Pyramids for Local Laplacian Filters.</p>
                  <p>- Studied multiple types of multi-scale image processing methods, such as Gaussian Pyramids, Laplacian Pyramids, Local Laplacian Filters and Fast Local Laplacian Pyramids.</p>
                </Link>
              </section>

              <section id="contact" className="section section-3">
                <h2>Contact</h2>
                <SocialLinks />
              </section>

              <footer>
                <p></p>
              </footer>
            </>
          } />

          <Route path="/projects/fukushima" element={<Fukushima />} />
          <Route path="/projects/nhi" element={<NHI />} />
          <Route path="/projects/rivr" element={<RIVR />} />
          <Route path="/projects/ssi" element={<SSI />} />
        </Routes>
      </div>
    </>
  )
}

export default App
