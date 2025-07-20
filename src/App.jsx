import { Routes, Route, Link } from 'react-router-dom'
import Fukushima from './pages/Fukushima'
import NHI from './pages/NHI'
import RIVR from './pages/RIVR'
import SSI from './pages/SSI'
import Sera from './pages/Sera'
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
                <h2>Technical Experience</h2>
                <Link to="/projects/sera" className="project-card">
                  <h3>Sera.io</h3>
                  <p>- Developed and maintained responsive front-end features using React, TypeScript, Tailwind CSS, and Node.js, contributing to a smart budgeting platform that analyzes financial history to automate debt reduction.</p>
                  <p>- Implemented mobile-first UI components and integrated third-party libraries (Recharts, Sonner) to support interactive tours, data visualization (e.g. pie charts), and real-time toast notifications.</p>
                  <p>- Delivered key product features including onboarding flows, influencer analytics dashboards, and landing page redesigns, while resolving UI/UX bugs to improve application performance and usability.</p>
                </Link>
                <Link to="/projects/rivr" className="project-card">
                  <h3>Research in Immersive Virtual Reality</h3>
                  <p>- Worked with Oculus (Quest 1-3) and Unity to create VR experiences for educational outreach regarding environmental studies (C#).</p>
                  <p>- Used PlasticSCM version control to collaboratively work with a team of 7+ to build VR projects.</p>
                  <p>- Managed lab's website using Drupal (PHP).</p>
                </Link>
                <Link to="/projects/nhi" className="project-card">
                  <h3>Nano | Human Interfaces Lab</h3>
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

              <section id="personal-projects" className="section section-3">
                <h2>Personal Projects</h2>
                <div className="project-card">
                  <h3>Real-Time Face Detection</h3>
                  <p>- Created a Python-based face detection app using OpenCV and Haar Cascades to detect and draw bounding boxes around faces in real time via webcam.</p>
                  <a href="https://github.com/mmurata22/face_detection" className="text-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                <div className="project-card">
                  <h3>Portfolio Website</h3>
                  <p>- Built and deployed this portfolio site using React, React Router, and custom CSS to showcase my work and experiences in a clean, responsive layout.</p>
                  <p>- Integrated project-specific routes and made the design mobile-friendly using semantic HTML and Tailwind-inspired layout patterns.</p>
                  <a href="https://mmurata22.github.io/" className="text-link" target="_blank" rel="noopener noreferrer">View Live</a>
                </div>
            </section>

              <section id="contact" className="section section-4">
                <h2>Contact</h2>
                <SocialLinks />
              </section>

              {/*<footer>
                <p><a href="https://mmurata22.github.io/portfolio-desktop/">pssst. click me. </a></p>
              </footer>*/}
            </>
          } />

          <Route path="/projects/sera" element={<Sera />} />
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
