import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {
  ErrorBoundaryError,
  ErrorBoundaryTryAgainButton,
} from '@docusaurus/theme-common';
import Heading from '@theme/Heading';

/**
 * Runtime error boundary content — shown when client-side JS crashes inside a
 * docs route. Per brand voice §10.7 ("Light wit via Bolty on 404 / global
 * error"), Bolty appears here with a concerned face and the app's canonical
 * copy: "Something went wrong. Don't worry, Bolty's on it."
 *
 * Mirrors the app's `src/app/error.tsx` voice so a user who hits an error in
 * either surface sees the same mascot and tone.
 */

interface Props {
  error: Error;
  tryAgain: () => void;
}

function BoltyConcerned({size = 160}: {size?: number}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bolty, concerned"
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

      {/* Worried eyes — wider, slightly downturned */}
      <ellipse cx="22" cy="24.5" rx="3.5" ry="4" fill="#fff" />
      <ellipse cx="22" cy="25" rx="2" ry="2.3" fill="#0F1B4C" />
      <circle cx="22" cy="24.8" r="1" fill="#000" />
      <circle cx="21.5" cy="24.3" r="0.6" fill="#fff" />

      <ellipse cx="34" cy="24.5" rx="3.5" ry="4" fill="#fff" />
      <ellipse cx="34" cy="25" rx="2" ry="2.3" fill="#0F1B4C" />
      <circle cx="34" cy="24.8" r="1" fill="#000" />
      <circle cx="33.5" cy="24.3" r="0.6" fill="#fff" />

      {/* Worried eyebrows — both angled up at outer edges */}
      <path
        d="M18 18.5 Q22 20.5 26 19.5"
        stroke="#0F1B4C"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 19.5 Q34 20.5 38 18.5"
        stroke="#0F1B4C"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Flat concerned mouth (small straight line) */}
      <path
        d="M25 35 L31 35"
        stroke="#0F1B4C"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <ellipse cx="22" cy="45" rx="4" ry="2.5" fill="#FFD60A" />
      <ellipse cx="34" cy="45" rx="4" ry="2.5" fill="#FFD60A" />

      {/* Antenna bolt */}
      <path
        d="M28 14l-2-5h3l-1.5-5 4 5.5h-3l1.5 4.5z"
        fill="#FFD60A"
        stroke="#FFD60A"
        strokeWidth="0.3"
        strokeLinejoin="round"
      />

      {/* Exclamation sweat drop */}
      <ellipse cx="41" cy="20" rx="1.6" ry="2.4" fill="#5BA4E8" opacity="0.85">
        <animate attributeName="cy" values="20;22;20" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.85;0.4;0.85" dur="2s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

export default function ErrorPageContent({error, tryAgain}: Props): ReactNode {
  return (
    <main
      className="container margin-vert--xl"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      <BoltyConcerned size={160} />

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
        <Translate
          id="theme.ErrorPageContent.title"
          description="The title of the fallback page when the page crashed"
        >
          Something went wrong.
        </Translate>
      </Heading>

      <p
        style={{
          marginTop: '0.75rem',
          fontSize: '1.05rem',
          lineHeight: 1.6,
          maxWidth: '48ch',
        }}
      >
        Don&rsquo;t worry, Bolty&rsquo;s on it. Let&rsquo;s try that again.
      </p>

      <div style={{marginTop: '1.5rem'}}>
        <ErrorBoundaryTryAgainButton
          onClick={tryAgain}
          className="button button--primary button--lg"
        />
      </div>

      <details
        style={{
          marginTop: '2.5rem',
          maxWidth: '640px',
          width: '100%',
          textAlign: 'left',
          fontSize: '0.9rem',
        }}
      >
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 0',
            opacity: 0.7,
          }}
        >
          Technical details
        </summary>
        <div
          style={{
            marginTop: '0.75rem',
            padding: '12px 16px',
            background: 'var(--ifm-color-emphasis-100)',
            borderRadius: '8px',
            fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
            fontSize: '0.85rem',
            overflowX: 'auto',
          }}
        >
          <ErrorBoundaryError error={error} />
        </div>
      </details>
    </main>
  );
}
