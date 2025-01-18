import React, { useEffect, useRef } from 'react';
import './LoadingAnim.scss';

function LoadingAnim() {
  const textAnimationRef = useRef(null);

  useEffect(() => {
    const textAnimation = textAnimationRef.current;

    const setAnimationName = (element, animationName) => {
      if (element) {
        element.style.animationName = animationName;
      }
    };

  }, []);

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
