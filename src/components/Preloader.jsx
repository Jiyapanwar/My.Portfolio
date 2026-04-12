import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Animate Counter
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: function() {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(this.targets()[0].val);
        }
      }
    })
    // Fade out counter
    .to(counterRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut"
    })
    // Split panels apart
    .to(panelTopRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut"
    }, "split")
    .to(panelBottomRef.current, {
      yPercent: 100,
      duration: 1,
      ease: "power4.inOut"
    }, "split")
    // Hide container
    .set(containerRef.current, { display: 'none' });

  }, { scope: containerRef });

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="preloader-panel panel-top" ref={panelTopRef}></div>
      <div className="preloader-panel panel-bottom" ref={panelBottomRef}></div>
      <div className="preloader-counter" ref={counterRef}>
        0
      </div>
    </div>
  );
};

export default Preloader;
