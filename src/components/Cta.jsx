import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Cta.css';

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
      </motion.div>
    </section>
  );
};

export default Cta;
