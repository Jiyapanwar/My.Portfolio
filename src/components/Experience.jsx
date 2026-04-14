import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Research Intern – AI-Driven Fraud Detection in FinTech",
    company: "Bennett University",
    duration: "June 2024 – July 2024",
    description:
      "Analyzed financial transaction datasets to validate fraud detection models using structured metrics. Contributed to research documentation and presented findings at ICCCNet-2024, resulting in a Springer publication.",
  },
  {
    role: "Freelance Creative / Web Developer",
    company: "Self-Employed",
    duration: "Present",
    description:
      "Specialized in creative web development. Delivered customized digital solutions tailored to client needs, emphasizing high performance, aesthetics, and engaging user experiences.",
  },
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
                <div className="experience-description-wrapper">
                  <div className="experience-description">
                    {exp.description}
                  </div>
                </div>
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
