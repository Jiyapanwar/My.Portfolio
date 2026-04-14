import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Cta from './components/Cta';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const containerRef = useRef(null);
  const ctaRef = useRef(null);
  
  useGSAP(() => {
    // Wait for elements to be fully mounted
    if (!ctaRef.current) return;

    // Removing the buggy pin on ctaRef that causes scrollbar jittering and height miscalculations.
    // The yPercent mask parallax below achieves the perfect peel natively.

    // Footer parallax animation removed natively.
    
  }, { scope: containerRef, dependencies: [isPreloaded] });

  // Handle case where scrolltrigger might need to refresh on window resize or load
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timeout);
  }, [isPreloaded]);

  return (
    <main ref={containerRef}>
      {!isPreloaded && <Preloader onComplete={() => setIsPreloaded(true)} />}
      <Navbar show={isPreloaded} />
      
      <Hero isPreloaded={isPreloaded} />
      
      <Marquee />
      <Experience />
      <Projects />
      
      <div ref={ctaRef} style={{ zIndex: 10, position: 'relative', width: '100%' }}>
        <Cta />
      </div>
      
    </main>
  );
}

export default App;
