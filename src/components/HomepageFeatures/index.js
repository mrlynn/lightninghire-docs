import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Candidate Management',
    description: (
      <>
        Create, track, and search candidate profiles with powerful filtering and organization tools.
      </>
    ),
    link: '/docs/features/candidates/index',
  },
  {
    title: 'Job Management',
    description: (
      <>
        Maintain a comprehensive database of job listings with detailed requirements and qualifications.
      </>
    ),
    link: '/docs/features/jobs/index',
  },
  {
    title: 'Evaluations',
    description: (
      <>
        Automatically evaluate candidate fit for specific jobs using AI-powered matching algorithms.
      </>
    ),
    link: '/docs/features/evaluations/index',
  },
  {
    title: 'Bulk Operations',
    description: (
      <>
        Save time by importing and managing multiple jobs or candidates simultaneously.
      </>
    ),
    link: '/docs/bulk-operations/index',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className="padding-horiz--md">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
          <Link
            className="button button--primary button--sm"
            to={link}>
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}