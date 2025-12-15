import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

// 1. Import BOTH logos
import myLogo from '../assets/MyLogo.png';         // The white/color one for Home
import myLogoBlack from '../assets/MyLogoBlack.png'; // The black one for other pages

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`stripe-nav ${isHome ? '' : 'nav-solid'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            {/* 2. Switch the src based on the page */}
            <img 
              src={isHome ? myLogo : myLogoBlack} 
              alt="Michele Murata" 
              className="logo-image" 
            />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><Link to="/contact" className="contact-btn">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;