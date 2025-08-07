import React, { useEffect, useRef } from 'react';
import './LoadingAnim.scss';
import { gsap } from 'gsap';

function LoadingAnim() {
  const textAnimationRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Animate the logo and text
    gsap.fromTo(logoRef.current, 
      { 
        scale: 0, 
        opacity: 0,
        rotation: -180
      },
      { 
        scale: 1, 
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)"
      }
    );

    gsap.fromTo(textAnimationRef.current, 
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      }
    );

    // Animate progress bar
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut",
      delay: 0.8
    });

    // Slide out animation
    setTimeout(() => {
      gsap.to(".loading-container", {
        y: "-100%",
        duration: 1,
        ease: "power2.out",
      });
    }, 3000);
  }, []);

  return (
    <section className="loading-container">
      <div className="loading-bg-pattern"></div>
      <div className="loading-bg-overlay"></div>
      
      {/* Animated background shapes */}
      <div className="bg-shape-1"></div>
      <div className="bg-shape-2"></div>
      <div className="bg-shape-3"></div>
      <div className="bg-shape-4"></div>
      <div className="bg-shape-5"></div>
      <div className="bg-shape-6"></div>
      <div className="bg-shape-7"></div>
      <div className="bg-shape-8"></div>
      <div className="bg-shape-9"></div>
      <div className="bg-shape-10"></div>
      
      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      <div className="particle particle-7"></div>
      <div className="particle particle-8"></div>
      
      {/* Grid pattern */}
      <div className="grid-pattern"></div>
      
      {/* Corner accents */}
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>
      
      <main className="loading-content">
        <div className="logo-container" ref={logoRef}>
          <div className="logo-circle">
            <div className="logo-inner">
              <span className="logo-text">PS</span>
            </div>
          </div>
        </div>
        
        <div className="text-container" ref={textAnimationRef}>
          <h1 className="loading-title main-font">
            Prefex <span className="accent">Solution</span>
          </h1>
          <p className="loading-subtitle para-font">
            Professional Financial Advisors
          </p>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" ref={progressRef}></div>
          </div>
          <p className="loading-text para-font">Loading...</p>
        </div>
      </main>
    </section>
  );
}

export default LoadingAnim;
