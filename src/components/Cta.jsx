import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="cta-title">LET'S BUILD SOMETHING.</h2>
        <p className="cta-subtitle">
          Open to internships, collaborations, and full-time opportunities.
        </p>

        <a href="mailto:jiyapanwar@email.com" className="cta-button">
          Get In Touch <ArrowRight size={24} />
        </a>

        <div className="cta-footer">
          <div className="cta-socials">
            <a
              href="https://github.com/Jiyapanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-link"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jiya-panwar-458b82280/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-link"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="cta-copyright">
            <span>&copy; 2025 &middot; Designed & Built by Jiya Panwar</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;
