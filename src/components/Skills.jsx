import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'React', level: 'Advanced', description: 'Building dynamic UIs with hooks and context.' },
  { name: 'Node.js', level: 'Intermediate', description: 'Backend runtime for scalable applications.' },
  { name: 'Express', level: 'Intermediate', description: 'RESTful API creation and routing.' },
  { name: 'MongoDB', level: 'Intermediate', description: 'NoSQL database modeling and aggregation.' },
  { name: 'MySQL', level: 'Intermediate', description: 'Relational databases and complex schemas.' },
  { name: 'JavaScript', level: 'Advanced', description: 'Core logic, ES6+, async programming.' },
  { name: 'Tailwind CSS', level: 'Advanced', description: 'Rapid utility-first styling frameworks.' },
  { name: 'REST APIs', level: 'Advanced', description: 'Clean architecture and communication.' },
  { name: 'Git', level: 'Advanced', description: 'Version control and team collaboration.' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } },
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">My Tech Stack</h2>
          <p className="skills-subtitle">Hover to reveal more details</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, variants }) => {
  return (
    <motion.div 
      className="skill-card"
      variants={variants}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <div className="skill-card-inner">
        <div className="skill-card-front">
          <h3>{skill.name}</h3>
        </div>
        <div className="skill-card-back">
          <h4>{skill.level}</h4>
          <p>{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
