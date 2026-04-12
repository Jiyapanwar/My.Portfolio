import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ show }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav 
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="navbar-container">
            <ul className="nav-links">
              <li><a href="#experience" className="nav-link">About</a></li>
              <li><a href="#work" className="nav-link">Work</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
