import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Research Intern',
    company: '[Company/Lab Name]',
    duration: '[Duration]',
    description: '[Brief description of research work]'
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: '[Duration]',
    description: '[Brief description — e.g., built web apps for clients]'
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">EXPERIENCE</h2>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-row">
              <div className="experience-left">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-description">{exp.description}</p>
              </div>
              <div className="experience-right">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-duration">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
