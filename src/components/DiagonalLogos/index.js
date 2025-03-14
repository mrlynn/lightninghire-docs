import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function DiagonalLogos({ opacity = 0.15, count = 7 }) {
  // Create array of logos with different properties
  const logos = [];
  
  for (let i = 0; i < count; i++) {
    // Create unique properties for each logo
    const size = 70 + Math.floor(Math.random() * 80); // 70-150px size
    const startDelay = Math.floor(Math.random() * 15); // 0-15s delay
    const duration = 15 + Math.floor(Math.random() * 20); // 15-35s animation duration
    const topPosition = Math.floor(Math.random() * 100); // 0-100% top position
    const opacityVariation = (opacity * 0.7) + (Math.random() * opacity * 0.6); // Varied opacity
    const direction = i % 2 === 0 ? 'left-to-right' : 'right-to-left'; // Alternate directions
    
    logos.push(
      <div 
        key={i}
        className={`${styles.logoWrapper} ${styles[direction]}`}
        style={{
          top: `${topPosition}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${startDelay}s`,
        }}
      >
        <img 
          src={useBaseUrl('/img/logo-circle-on-black.png')}
          alt=""
          className={styles.logo}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacityVariation,
          }}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className={styles.logoContainer}>
      {logos}
    </div>
  );
}