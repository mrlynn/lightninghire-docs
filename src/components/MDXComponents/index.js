import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * Feature Card component for highlighting key features
 */
export function FeatureCard({ title, description, link }) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link
          className="button button--primary button--sm"
          to={link}>
          Learn more
        </Link>
      )}
    </div>
  );
}

/**
 * Card Grid component for displaying multiple cards in a responsive grid
 */
export function CardGrid({ children }) {
  return (
    <div className={styles.cardGrid}>
      {children}
    </div>
  );
}

/**
 * Info Box component for highlighting important information
 */
export function InfoBox({ title, children, type = 'info' }) {
  return (
    <div className={`${styles.infoBox} ${styles[`infoBox_${type}`]}`}>
      {title && <div className={styles.infoBoxTitle}>{title}</div>}
      <div className={styles.infoBoxContent}>
        {children}
      </div>
    </div>
  );
}

/**
 * API Endpoint component for documenting API endpoints
 */
export function APIEndpoint({ method, path, description, auth = false }) {
  return (
    <div className={styles.apiEndpoint}>
      <div className={`${styles.apiMethod} ${styles[`apiMethod_${method.toLowerCase()}`]}`}>
        {method}
      </div>
      <div className={styles.apiPath}>
        {path}
      </div>
      <div className={styles.apiDescription}>
        {description}
        {auth && <span className={styles.apiAuth}>Requires Authentication</span>}
      </div>
    </div>
  );
}

/**
 * Steps component for numbered instructions
 */
export function Steps({ children }) {
  // Expects Step components as children
  return (
    <div className={styles.steps}>
      {children}
    </div>
  );
}

export function Step({ title, children }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepContent}>
        <h4 className={styles.stepTitle}>{title}</h4>
        <div>{children}</div>
      </div>
    </div>
  );
}

/**
 * Screenshot component for displaying application screenshots
 */
export function Screenshot({ src, alt, caption }) {
  return (
    <figure className={styles.screenshot}>
      <img src={src} alt={alt || caption} className={styles.screenshotImage} />
      {caption && (
        <figcaption className={styles.screenshotCaption}>{caption}</figcaption>
      )}
    </figure>
  );
}

/**
 * Tabs component for showing tabbed content (uses Docusaurus Tabs under the hood)
 */
export { Tabs, TabItem } from '@theme/Tabs';