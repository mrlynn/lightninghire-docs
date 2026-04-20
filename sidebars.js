/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  seekerSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: ['seeker/getting-started', 'seeker/free-vs-pro'],
    },
    {
      type: 'category',
      label: 'Interview prep',
      collapsed: false,
      items: [
        'seeker/mock-interviews',
        'seeker/star-stories',
        'seeker/live-sessions',
        'seeker/recording-interviews',
        'seeker/question-bank',
      ],
    },
    {
      type: 'category',
      label: 'Job search',
      collapsed: false,
      items: [
        'seeker/pipeline',
        'seeker/resume',
        'seeker/company-intel',
        'seeker/extension',
      ],
    },
    {
      type: 'category',
      label: 'Offer & negotiation',
      collapsed: false,
      items: ['seeker/salary-negotiation', 'seeker/analytics'],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: ['seeker/courses', 'seeker/networking'],
    },
  ],

  recruiterSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: ['recruiter/getting-started', 'recruiter/how-its-different'],
    },
    {
      type: 'category',
      label: 'Hiring loop',
      collapsed: false,
      items: [
        'recruiter/requisitions',
        'recruiter/candidates',
        'recruiter/pipeline',
        'recruiter/scorecards',
        'recruiter/fit-scores',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'recruiter/extension',
        'recruiter/bulk-import',
        'recruiter/question-rubrics',
        'recruiter/collaboration',
      ],
    },
  ],

  referenceSidebar: [
    'reference/api',
    'reference/entitlements',
    'reference/custom-components',
    'reference/privacy',
    'reference/changelog',
  ],
};

module.exports = sidebars;
