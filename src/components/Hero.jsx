import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 60, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    },
  };

  return (
    <section className="hero-section">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1 className="hero-title" variants={textVariants}>
          JIYA PANWAR
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={textVariants}>
          Full Stack Developer &middot; 3rd Year CS Student
        </motion.p>
        
        <motion.div variants={textVariants}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-button">
            View Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
