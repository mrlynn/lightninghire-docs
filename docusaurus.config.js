// @ts-check
// LightningHire docs — Docusaurus 3 config.

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const HEAD_TAGS = [
  {
    tagName: 'link',
    attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
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
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LightningHire Docs',
  tagline: 'Stop guessing. Start winning interviews.',
  favicon: 'img/favicon.svg',
  headTags: HEAD_TAGS,

  url: 'https://docs.lightninghire.com',
  baseUrl: '/',

  organizationName: 'mrlynn',
  projectName: 'lightning-hire-docs',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          // editUrl: 'https://github.com/mrlynn/lightning-hire-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themes: [
    // Local full-text search. No external service required; index is built
    // at `npm run build` and shipped as a static JSON alongside the site.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/lightning-hire-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'LightningHire',
        logo: {
          alt: 'LightningHire',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'seekerSidebar',
            position: 'left',
            label: 'For job seekers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'recruiterSidebar',
            position: 'left',
            label: 'For recruiters',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: 'Reference',
          },
          {
            type: 'custom-auth-nav',
            position: 'right',
          },
          {
            href: 'https://lightninghire.com',
            label: 'Open app',
            position: 'right',
            className: 'button button--primary button--sm',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'LightningHire',
          src: 'img/logo-wordmark.svg',
          href: 'https://lightninghire.com',
          width: 200,
        },
        links: [
          {
            title: 'Job seekers',
            items: [
              {label: 'Getting started', to: '/docs/seeker/getting-started'},
              {label: 'Mock interviews', to: '/docs/seeker/mock-interviews'},
              {label: 'STAR stories', to: '/docs/seeker/star-stories'},
              {label: 'Salary negotiation', to: '/docs/seeker/salary-negotiation'},
            ],
          },
          {
            title: 'Recruiters',
            items: [
              {label: 'Getting started', to: '/docs/recruiter/getting-started'},
              {label: 'Requisitions', to: '/docs/recruiter/requisitions'},
              {label: 'Scorecards', to: '/docs/recruiter/scorecards'},
              {label: 'Pipeline', to: '/docs/recruiter/pipeline'},
            ],
          },
          {
            title: 'Reference',
            items: [
              {label: 'API', to: '/docs/reference/api'},
              {label: 'Plans & entitlements', to: '/docs/reference/entitlements'},
              {label: 'Privacy', to: '/docs/reference/privacy'},
              {label: 'Changelog', to: '/docs/reference/changelog'},
            ],
          },
          {
            title: 'Company',
            items: [
              {label: 'lightninghire.com', href: 'https://lightninghire.com'},
              {label: 'Pricing', href: 'https://lightninghire.com/pricing'},
              {label: 'Support', href: 'mailto:support@lightninghire.com'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} LightningHire. Mock interviews, application tracking, and offer prep — built for people who want signal, not noise.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
