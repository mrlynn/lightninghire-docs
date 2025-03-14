import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function FloatingLogo({ opacity = 0.15, count = 5 }) {
  // Create multiple logos with randomized positions and animation delays
  const logos = Array.from({ length: count }, (_, index) => {
    const delay = Math.random() * 10; // Random delay between 0-10s
    const scale = 0.5 + Math.random() * 0.7; // Random scale between 0.5-1.2
    const startPosition = Math.random() * 100; // Random start position 0-100%
    
    return (
      <img 
        key={index}
        src={useBaseUrl('/img/logo-circle-on-black.png')} 
        alt="" 
        className={styles.floatingLogo}
        style={{ 
          opacity: opacity,
          animationDelay: `${delay}s`,
          transform: `scale(${scale})`,
          top: `${startPosition}%`,
          left: '-150px', // Start off-screen to the left
        }}
        aria-hidden="true"
      />
    );
  });

  return (
    <div className={styles.floatingLogoContainer}>
      {logos}
    </div>
  );
}