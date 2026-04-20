import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

/**
 * Branded 404 content — replaces the default "Page Not Found" with a Bolty
 * illustration and recovery links, per brand voice §10.7 ("Light wit via
 * Bolty on 404 / global error").
 *
 * Swizzled at the Content level (not the NotFound shell) so it renders on
 * both static 404.html hits and SPA-level client-side 404s.
 */

function Bolty({size = 180}: {size?: number}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bolty, confused"
      style={{filter: 'drop-shadow(0 6px 20px rgba(255, 214, 10, 0.35))'}}
    >
      {/* Outer pulse glow */}
      <circle cx="28" cy="28" r="26" fill="rgba(255, 214, 10, 0.08)">
        <animate attributeName="r" values="24;27;24" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
      </circle>

      <rect x="14" y="14" width="28" height="30" rx="14" fill="#FFD60A" />
      <ellipse cx="28" cy="30" rx="9" ry="10" fill="#fff" opacity="0.15" />
      <path d="M29 33l-4 6h3l-1 4 4-6h-3l1-4z" fill="#0F1B4C" opacity="0.85" />

      {/* Confused asymmetric eyes */}
      <ellipse cx="22" cy="24" rx="4" ry="4.5" fill="#fff" />
      <ellipse cx="22.8" cy="24.2" rx="2.2" ry="2.5" fill="#0F1B4C" />
      <circle cx="23.2" cy="23.6" r="1.1" fill="#000" />
      <circle cx="23.8" cy="22.8" r="0.6" fill="#fff" />

      <ellipse cx="34" cy="24.5" rx="3" ry="3.2" fill="#fff" />
      <ellipse cx="33.2" cy="24.2" rx="1.5" ry="1.8" fill="#0F1B4C" />
      <circle cx="33.6" cy="23.8" r="0.8" fill="#000" />

      {/* Questioning brow (left raised, right flat) */}
      <path d="M18 19 Q22 16.5 26 19" stroke="#0F1B4C" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M30.5 20 L37 20" stroke="#0F1B4C" strokeWidth="1.4" strokeLinecap="round" />

      {/* Slight frown */}
      <path d="M25 35 Q28 33.5 31 35" stroke="#0F1B4C" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      <ellipse cx="22" cy="45" rx="4" ry="2.5" fill="#FFD60A" />
      <ellipse cx="34" cy="45" rx="4" ry="2.5" fill="#FFD60A" />

      <path
        d="M28 14l-2-5h3l-1.5-5 4 5.5h-3l1.5 4.5z"
        fill="#FFD60A"
        stroke="#FFD60A"
        strokeWidth="0.3"
        strokeLinejoin="round"
      />

      {/* Floating question marks */}
      <text x="42" y="14" fontSize="10" fill="#FFD60A" opacity="0.7" fontFamily="system-ui, sans-serif" fontWeight="800">
        ?
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="47" y="8" fontSize="7" fill="#FFD60A" opacity="0.5" fontFamily="system-ui, sans-serif" fontWeight="800">
        ?
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
      </text>
    </svg>
  );
}

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main
      className={clsx('container margin-vert--xl', className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      <Bolty size={180} />

      <Heading
        as="h1"
        style={{
          marginTop: '2rem',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          maxWidth: '32ch',
          lineHeight: 1.1,
        }}
      >
        <Translate id="theme.NotFound.title" description="The title of the 404 page">
          Bolty looked everywhere. This page isn’t here.
        </Translate>
      </Heading>

      <p
        style={{
          marginTop: '1rem',
          fontSize: '1.05rem',
          lineHeight: 1.6,
          maxWidth: '54ch',
        }}
      >
        <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
          It may have been moved, renamed, or never existed. Try the sidebar, jump to a section below, or head back home.
        </Translate>
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '2rem',
          justifyContent: 'center',
        }}
      >
        <Link className="button button--primary button--lg" to="/">
          Back to home
        </Link>
        <Link className="button button--secondary" to="/docs/seeker/getting-started">
          Job-seeker docs
        </Link>
        <Link className="button button--secondary" to="/docs/recruiter/getting-started">
          Recruiter docs
        </Link>
        <Link className="button button--secondary" to="/docs/reference/api">
          Reference
        </Link>
      </div>
    </main>
  );
}
