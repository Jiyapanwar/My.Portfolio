import React from 'react';
import './Marquee.css';

const keywordsRow1 = [
  "FULL STACK", "REACT", "NODE.JS", "PROBLEM SOLVER", "MONGODB", "EXPRESS", "OPEN TO WORK"
];

const keywordsRow2 = [
  "UI/UX AWARE", "JAVASCRIPT", "FRAMER MOTION", "CREATIVE DEVELOPER", "API DESIGN", "TAILWIND", "MYSQL"
];

const MarqueeRow = ({ items, reverse }) => {
  // Duplicate items to ensure smooth infinite loop without gaps
  const doubledItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className={`marquee-row ${reverse ? 'reverse' : ''}`}>
      <div className="marquee-content">
        {doubledItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span className="dot">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <MarqueeRow items={keywordsRow1} />
        <MarqueeRow items={keywordsRow2} reverse={true} />
      </div>
    </section>
  );
};

export default Marquee;
