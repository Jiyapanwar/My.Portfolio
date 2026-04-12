import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import "./Hero.css";

const Hero = ({ isPreloaded }) => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      if (isPreloaded) {
        const tl = gsap.timeline();

        tl.fromTo(
          [title1Ref.current, title2Ref.current, subtitleRef.current],
          {
            y: 100,
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2, // slight delay after preloader panels clear
          }
        ).fromTo(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }
    },
    { scope: containerRef, dependencies: [isPreloaded] }
  );

  return (
    <section className="hero-section" ref={containerRef}>
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title" ref={title1Ref}>
            JIYA
          </h1>
          <h1 className="hero-title" ref={title2Ref}>
            PANWAR
          </h1>
        </div>

        <p className="hero-subtitle" ref={subtitleRef}>
          Making the web less ugly &middot; one component at a time.
        </p>

        <div ref={buttonRef} className="hero-button-wrapper">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            View Resume
          </a>
        </div>
      </div>

      {isPreloaded && (
        <div className="scroll-indicator">
          <ArrowDown size={32} />
        </div>
      )}
    </section>
  );
};

export default Hero;
