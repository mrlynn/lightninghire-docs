/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        // Remove these until the files exist
        // 'getting-started/installation',
        // 'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'Candidates',
          items: [
            'features/candidates/index',
            // Remove these until the files exist
            // 'features/candidates/adding',
            // 'features/candidates/managing',
            // 'features/candidates/searching',
          ],
        },
        {
          type: 'category',
          label: 'Evaluations',
          items: [
            'features/evaluations/index',
            // Remove these until the files exist
            // 'features/evaluations/creating',
            // 'features/evaluations/results',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Bulk Operations',
      items: [
        'bulk-operations/index',
        'bulk-operations/importing',
        'bulk-operations/templates',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/api',
        'advanced/custom-components',
        // Remove these until the files exist
        // 'advanced/custom-matching',
      ],
    },
  ],
};

module.exports = sidebars;