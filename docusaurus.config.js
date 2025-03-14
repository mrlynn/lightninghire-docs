// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Import Inter font to match app
const HEAD_TAGS = [
  {
    tagName: 'link',
    attributes: {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LightningHire Documentation',
  tagline: 'AI-Powered Resume Evaluation System',
  favicon: 'img/favicon.ico',
  headTags: HEAD_TAGS,

  // Set the production url of your site here
  url: 'https://docs.lightninghire.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lightning-hire', // Usually your GitHub org/user name.
  projectName: 'lightning-hire-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/lightning-hire/lightning-hire-docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/lightning-hire-social-card.jpg',
      navbar: {
        title: 'LightningHire',
        logo: {
          alt: 'LightningHire Logo',
          src: 'img/logo-circle-on-black.png',
        },
        style: 'primary',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://lightninghire.com',
            label: 'Back to App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'LightningHire Logo',
          src: 'img/logo-circle-on-black.png',
          href: 'https://lightninghire.com',
          width: 160,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'Features',
                to: '/docs/features/candidates',
              },
              {
                label: 'Advanced',
                to: '/docs/advanced/api',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Contact Support',
                href: 'mailto:support@lightninghire.com',
              },
              {
                label: 'Book a Demo',
                href: 'https://lightninghire.com/demo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lightning-hire',
              },
              {
                label: 'Pricing',
                href: 'https://lightninghire.com/pricing',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LightningHire. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // Match the font family from your app
      fonts: {
        fontFamily: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
        headingFont: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
      },
    }),
};

module.exports = config;