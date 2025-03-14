import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {
  FeatureCard,
  CardGrid,
  InfoBox,
  APIEndpoint,
  Steps,
  Step,
  Screenshot,
} from '@site/src/components/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map custom components
  FeatureCard,
  CardGrid,
  InfoBox,
  APIEndpoint,
  Steps,
  Step,
  Screenshot,
};