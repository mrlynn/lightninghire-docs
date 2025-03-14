/**
 * Custom Layout to apply Inter font globally
 */
import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';

export default function LayoutWrapper(props) {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              font-weight: 700;
            }
            
            h1 {
              font-weight: 700;
            }
            h2 {
              font-weight: 700;
            }
            h3 {
              font-weight: 600;
            }
            
            .button {
              text-transform: none;
              font-weight: 600;
            }
          `}
        </style>
      </Head>
      <Layout {...props} />
    </>
  );
}