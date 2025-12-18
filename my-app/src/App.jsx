import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';

// Import Pages
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// Import pages for Work
import Fukushima from './pages/Fukushima';
import NHI from './pages/NHI';
import NHIProject1 from './pages/NHIProject1';
import RIVR from './pages/RIVR';
import SSI from './pages/SSI';
import UniSource from './pages/uniSource';
import Ourion from './pages/Ourion';
import Sera from './pages/Sera'

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/work/fukushima" element={<Fukushima />} />
        <Route path="/work/rivr" element={<RIVR />} />
        <Route path="/work/ssi" element={<SSI />} />
        <Route path="/work/sera" element={<Sera />} />

        <Route path="/work/nhi" element={<NHI />} />
        <Route path="/work/nhi-project-1" element={<NHIProject1 />} />

        <Route path="/work/unisource" element={<UniSource />} />
        <Route path="/work/ourion" element={<Ourion />} />
      </Routes>
    </>
  );
}

export default App;