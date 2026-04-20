import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <span className={styles.eyebrow}>LightningHire Docs</span>
        <h1 className={styles.heroTitle}>
          Stop guessing. <span className={styles.heroTitleAccent}>Start winning interviews.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Docs for the interview &amp; job-search copilot. Mock interviews, STAR stories, pipeline, and
          negotiation scripts — with recruiter tooling on the other side of the same platform.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/seeker/getting-started">
            I&rsquo;m a job seeker
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/recruiter/getting-started">
            I&rsquo;m a recruiter
          </Link>
        </div>
        <p className={styles.trustLine}>
          No sign-up to read. No credit card to try the product.
        </p>
      </div>
    </header>
  );
}

function AudienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.sectionEyebrow}>Pick your side</span>
        <h2 className={styles.sectionTitle}>Two products, one copilot</h2>
        <p className={styles.sectionLead}>
          LightningHire is built for two audiences. The docs are split so you only see what&rsquo;s
          relevant — no scrolling through recruiter tooling if you&rsquo;re prepping for an interview
          tomorrow.
        </p>

        <div className={styles.audienceGrid}>
          <div className={styles.audienceCard}>
            <span className={styles.audienceCardEyebrow}>Job seekers</span>
            <h3 className={styles.audienceCardTitle}>Prep, apply, negotiate</h3>
            <p className={styles.audienceCardLead}>
              Practice with AI-scored mock interviews, turn your experience into reusable STAR stories,
              track every application in one pipeline, and walk into salary conversations with a script.
            </p>
            <ul className={styles.audienceCardList}>
              <li>Mock interviews with specific feedback, not &ldquo;good job&rdquo;</li>
              <li>Live session coach (on-screen, during real calls)</li>
              <li>Pipeline that remembers your deadlines</li>
              <li>Negotiation scripts with your numbers</li>
            </ul>
            <div className={styles.audienceCardCta}>
              <Link className="button button--primary" to="/docs/seeker/getting-started">
                Start here →
              </Link>
            </div>
          </div>

          <div className={styles.audienceCard}>
            <span className={styles.audienceCardEyebrow}>Recruiters</span>
            <h3 className={styles.audienceCardTitle}>Honest hiring loops</h3>
            <p className={styles.audienceCardLead}>
              A real recruiting tool, not a toy. Track requisitions, score candidates with consistent
              rubrics, and run organized interview loops without drowning in tools.
            </p>
            <ul className={styles.audienceCardList}>
              <li>Requisitions with clear scope</li>
              <li>Candidate pipeline scored by AI, not spreadsheets</li>
              <li>Structured scorecards and fit scores</li>
              <li>Designed for solo recruiters and small teams</li>
            </ul>
            <div className={styles.audienceCardCta}>
              <Link className="button button--primary" to="/docs/recruiter/getting-started">
                Start here →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferenceSection() {
  return (
    <section className={styles.section} style={{background: '#F4F6FA'}}>
      <div className="container">
        <span className={styles.sectionEyebrow}>Reference</span>
        <h2 className={styles.sectionTitle}>Looking for something specific?</h2>
        <p className={styles.sectionLead}>
          API endpoints, plan &amp; entitlement limits, privacy &amp; data handling, and the running
          changelog — all in one place.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--secondary" to="/docs/reference/api">
            API reference
          </Link>
          <Link className="button button--secondary" to="/docs/reference/entitlements">
            Plans &amp; entitlements
          </Link>
          <Link className="button button--secondary" to="/docs/reference/privacy">
            Privacy
          </Link>
          <Link className="button button--secondary" to="/docs/reference/changelog">
            Changelog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Docs for LightningHire — the interview and job-search copilot. Mock interviews, STAR stories, pipeline, salary negotiation, and recruiter tooling.">
      <Hero />
      <main>
        <AudienceSection />
        <ReferenceSection />
      </main>
    </Layout>
  );
}
