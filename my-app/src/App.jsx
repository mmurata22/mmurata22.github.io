// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';

// Import the NEW pages
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// Import Project Details
import Fukushima from './pages/Fukushima';
import NHI from './pages/NHI';
import RIVR from './pages/RIVR';
import SSI from './pages/SSI';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* NEW ROUTES */}
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

        {/* Project Detail Routes */}
        <Route path="/projects/fukushima" element={<Fukushima />} />
        <Route path="/projects/nhi" element={<NHI />} />
        <Route path="/projects/rivr" element={<RIVR />} />
        <Route path="/projects/ssi" element={<SSI />} />
      </Routes>
    </>
  );
}

export default App;