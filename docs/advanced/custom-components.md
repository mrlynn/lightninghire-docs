---
sidebar_position: 3
title: Custom Documentation Components
---

# Custom Documentation Components

LightningHire documentation includes several custom components that you can use to enhance your internal documentation.

## Feature Cards

Use the `FeatureCard` component to highlight features or sections:

```jsx
<FeatureCard 
  title="Resume Parsing" 
  description="Our advanced resume parsing technology extracts key information from candidates' resumes." 
  link="/docs/features/candidates" 
/>
```

For multiple cards, use the `CardGrid` component:

```jsx
<CardGrid>
  <FeatureCard 
    title="Job Management" 
    description="Create and manage job listings with detailed requirements." 
    link="/docs/features/jobs" 
  />
  <FeatureCard 
    title="Candidate Management" 
    description="Track candidate information and manage resumes." 
    link="/docs/features/candidates" 
  />
  <FeatureCard 
    title="Evaluations" 
    description="AI-powered candidate-job matching and evaluation." 
    link="/docs/features/evaluations" 
  />
</CardGrid>
```

## Info Boxes

Use the `InfoBox` component for important notes:

```jsx
<InfoBox title="Important Note" type="info">
  This is an informational note that users should be aware of.
</InfoBox>
```

Available types are:
- `info` (default)
- `success`
- `warning`
- `danger`

## API Endpoints

Document API endpoints with the `APIEndpoint` component:

```jsx
<APIEndpoint 
  method="GET" 
  path="/api/jobs" 
  description="Returns a list of all jobs for the current user." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/candidates" 
  description="Creates a new candidate entry." 
  auth={true} 
/>
```

## Steps

Use the `Steps` and `Step` components for numbered instructions:

```jsx
<Steps>
  <Step title="Create a Job Listing">
    First, create a new job listing with all the required details.
  </Step>
  <Step title="Upload Candidate Resumes">
    Next, upload candidate resumes that you want to evaluate.
  </Step>
  <Step title="Run Evaluations">
    Finally, run evaluations to match candidates with the job.
  </Step>
</Steps>
```

## Screenshots

Display application screenshots with captions:

```jsx
<Screenshot 
  src="/img/screenshots/candidate-dashboard.png" 
  alt="Candidate Dashboard" 
  caption="LightningHire Candidate Management Dashboard" 
/>
```

## Admonitions

Docusaurus also provides built-in admonition components:

:::note
This is a note admonition.
:::

:::tip
This is a tip admonition.
:::

:::info
This is an info admonition.
:::

:::warning
This is a warning admonition.
:::

:::danger
This is a danger admonition.
:::