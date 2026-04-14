import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    name: 'Zinc',
    category: 'Full Stack Dashboard',
    year: '2024',
    description: 'A comprehensive modern dashboard application featuring complex data visualization, role-based access control, and real-time updates.',
    techs: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: 'https://github.com/Jiyapanwar/Zinc'
  },
  {
    id: 2,
    name: 'Food-View',
    category: 'E-Commerce / Delivery',
    year: '2024',
    description: 'A full-stack food delivery application with robust state management, secure payment integration, and real-time order tracking.',
    techs: ['React', 'Express', 'JWT Auth', 'Tailwind'],
    link: 'https://github.com/Jiyapanwar/Food-View'
  },
  {
    id: 3,
    name: 'Route-X',
    category: 'Ride-Hailing Platform',
    year: '2024',
    description: 'A ride-hailing application built with the MERN stack, featuring real-time location tracking, driver-user matching, and secure OTP-validated rides.',
    techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://github.com/karan-6969/Route-X'
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <div className="projects-list">
          {projectsList.map((project) => (
            <ProjectRow 
              key={project.id} 
              project={project} 
              isExpanded={expandedId === project.id} 
              onToggle={() => toggleExpand(project.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectRow = ({ project, isExpanded, onToggle }) => {
  return (
    <motion.div 
      className={`project-row ${isExpanded ? 'expanded' : ''}`}
      layout
      transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.2 } }}
    >
      <motion.div 
        className="project-header" 
        onClick={onToggle}
        layout
      >
        <span className="project-name">{project.name}</span>
        <span className="project-category">{project.category}</span>
        <span className="project-year">{project.year}</span>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="project-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="project-details-inner">
              <h3 className="project-details-title">{project.name}</h3>
              <p className="project-details-description">{project.description}</p>
              
              <div className="project-techs">
                {project.techs.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub <FaGithub size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
