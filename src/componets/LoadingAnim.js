import React, { useEffect, useRef } from 'react';
import './LoadingAnim.scss';
import { gsap } from 'gsap';

function LoadingAnim() {
  const textAnimationRef = useRef(null);

  useEffect(() =>{
    setTimeout(()=>{
        gsap.to(".loading-container", {
            y: "-100%",
            duration: 1,
            ease: "power2.out",
          });
    }, 3000)
  })

  return (
    <section className="loading-container">
      <main className="text-container">
        <svg className="main-font text-stroke" viewBox="-20 0 600 100" width="100%" height="100%">
          <text className="text" x="50" y="75" ref={textAnimationRef}>
                Global Edge
          </text>
        </svg>
      </main>
    </section>
  );
}

export default LoadingAnim;
