import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <span>Jiya Panwar</span>
        </div>
        
        <div className="footer-center">
          <a href="https://github.com/Jiyapanwar" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/jiyapanwar" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="footer-right">
          <span>&copy; 2025 &middot; Designed & Built by Jiya Panwar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
