import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DiagonalLogos from '@site/src/components/DiagonalLogos';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <DiagonalLogos opacity={0.04} count={10} />

      <div className="container">
        <img src="/img/logo-circle-on-black.png" alt="Logo" className={styles.logo} style={{ width: '250px', height: '250px' }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for LightningHire - An AI-powered resume evaluation system">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className={styles.sectionTitle}>Welcome to LightningHire Documentation</h2>
                <p>
                  This comprehensive guide will help you understand how to use the system effectively
                  to manage your recruiting workflow, from job listings to candidate evaluations.
                </p>
                <h3>Key Features</h3>
                <ul>
                  <li>Manage job listings with detailed requirements</li>
                  <li>Track candidate information and resumes</li>
                  <li>Evaluate candidates against job requirements</li>
                  <li>Perform bulk operations for efficiency</li>
                  <li>Generate insights for better hiring decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className={styles.sectionTitle}>Getting Started</h2>
                <p>
                  If you're new to LightningHire, we recommend starting with the following guides:
                </p>
                <ol>
                  <li>
                    <Link to="/docs/getting-started/introduction">Introduction</Link> - Learn about the core concepts
                  </li>
                  <li>
                    <Link to="/docs/getting-started/installation">Installation</Link> - Set up your LightningHire account
                  </li>
                  <li>
                    <Link to="/docs/getting-started/configuration">Configuration</Link> - Configure the system to your needs
                  </li>
                </ol>
                <div className={styles.ctaBox}>
                  <h3>Need Help?</h3>
                  <p>If you need additional assistance beyond what's covered in our documentation:</p>
                  <ul>
                    <li><strong>Support Email</strong>: support@lightninghire.com</li>
                    <li><strong>Live Chat</strong>: Available in the app during business hours</li>
                    <li><strong>Training Sessions</strong>: Schedule a training session with our team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}