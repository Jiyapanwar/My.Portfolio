import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projectsList = [
  {
    id: 1,
    name: "Zinc",
    category: "Linux Security Scanner",
    year: "2024",
    description:
      "A comprehensive Custom Linux Security Scanner built with Shell scripting. Automates critical security vulnerability checks including open ports mapping, weak password detection, and malware tracing. Processes active system logs and enforces strict file permissions to maintain server integrity.",
    techs: ["Shell", "Bash", "Nmap", "Hashcat"],
    link: "https://github.com/Jiyapanwar/zinc",
  },
  {
    id: 2,
    name: "Food-View",
    category: "E-Commerce / Delivery",
    year: "2024",
    description:
      "A full-stack food delivery application with robust state management, secure payment integration, and real-time order tracking.",
    techs: ["React", "Express", "JWT Auth", "Tailwind"],
    link: "https://github.com/Jiyapanwar/Food-View",
  },
  {
    id: 3,
    name: "Route-X",
    category: "Ride-Hailing Platform",
    year: "2024",
    description:
      "A ride-hailing application built with the MERN stack, featuring real-time location tracking, driver-user matching, and secure OTP-validated rides.",
    techs: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/Jiyapanwar/RouteX",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

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
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectRow = ({ project, onClick }) => {
  return (
    <motion.div
      className="project-row"
      layoutId={`project-container-${project.id}`}
      onClick={onClick}
    >
      <motion.div
        className="project-header"
        layoutId={`project-header-${project.id}`}
      >
        <div className="project-meta">
          <motion.span
            className="project-year"
            layoutId={`project-year-${project.id}`}
          >
            {project.year}
          </motion.span>
          <motion.span
            className="project-category"
            layoutId={`project-category-${project.id}`}
          >
            {project.category}
          </motion.span>
        </div>
        <motion.span
          className="project-name"
          layoutId={`project-name-${project.id}`}
        >
          {project.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="project-fullscreen-overlay"
      layoutId={`project-container-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="project-fullscreen-content">
        <button className="project-close-btn" onClick={onClose}>
          <ArrowLeft size={20} />
          Go back
        </button>

        <motion.div
          className="project-fullscreen-header"
          layoutId={`project-header-${project.id}`}
        >
          <div className="project-meta">
            <motion.span
              className="project-year"
              layoutId={`project-year-${project.id}`}
            >
              {project.year}
            </motion.span>
            <motion.span
              className="project-category"
              layoutId={`project-category-${project.id}`}
            >
              {project.category}
            </motion.span>
          </div>
          <motion.span
            className="project-name"
            layoutId={`project-name-${project.id}`}
          >
            {project.name}
          </motion.span>
        </motion.div>

        <motion.div
          className="project-fullscreen-body"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="project-fullscreen-overview">
            <div className="project-fullscreen-description">
              <h3>Overview</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-fullscreen-sidebar">
              <h3>Technologies</h3>
              <div className="fullscreen-techs">
                {project.techs.map((tech, idx) => (
                  <span key={idx} className="fullscreen-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="fullscreen-project-link"
              >
                View Repository <FaGithub size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
