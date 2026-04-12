import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Skills />
      <Projects />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
