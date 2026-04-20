# LightningHire Docs

Source for [docs.lightninghire.com](https://docs.lightninghire.com) — built with [Docusaurus 3](https://docusaurus.io/).

## What's here

Documentation for LightningHire, the interview & job-search copilot. The site is audience-split:

- **For job seekers** — Mock interviews, STAR stories, pipeline, salary negotiation, Chrome extension, resume tailoring.
- **For recruiters** — Requisitions, candidate pipeline, scorecards, fit scores, bulk import.
- **Reference** — API, plan & entitlement limits, privacy, changelog, and MDX components available to docs authors.

Content source of truth is the LightningHire app repo (`src/content/help/`, marketing pages, `docs/engineering-overview.md`).

## Running locally

Requires Node.js 18+ and npm 9+.

```bash
npm install
npm start          # dev server on port 3001
npm run build      # production build to ./build
npm run serve      # serve the built site locally
```

## Project structure

```
docs/
├── seeker/         Job-seeker pages (15)
├── recruiter/      Recruiter pages (10)
└── reference/      API, entitlements, privacy, changelog, components (5)

src/
├── components/     Shared components (AuthNav, AuthProvider, MDXComponents)
├── css/custom.css  Theme — navy + yellow brand palette
├── pages/          Homepage and custom pages
└── theme/          Docusaurus swizzled components (Layout, NavbarItem)

docusaurus.config.js   Site config (title, navbar, footer, preset)
sidebars.js            Three sidebars: seekerSidebar, recruiterSidebar, referenceSidebar
```

## Brand

Navy `#0F1B4C` + yellow `#FFD60A`. Theme variables live in `src/css/custom.css`.

Voice guidelines are in the app repo at `.claude/brand-voice-guidelines.md` — match its tone when writing new pages (confident, specific, anti-hype, second person, sentence-case headings).

## Writing new pages

1. Create a Markdown file under `docs/seeker/`, `docs/recruiter/`, or `docs/reference/`.
2. Add frontmatter:
   ```md
   ---
   sidebar_position: N
   title: Page title (sentence case)
   description: One-sentence SEO description
   ---
   ```
3. Add the page's doc ID (e.g. `seeker/my-new-page`) to the appropriate sidebar in `sidebars.js`.
4. Use Docusaurus admonitions (`:::tip`, `:::note`, `:::warning`, `:::info`) for callouts.
5. Cross-link related pages with relative links: `[mock interviews](./mock-interviews)`.
6. Deep-link the app at `https://lightninghire.com/...` — never `localhost`.

Available MDX components are documented at `/docs/reference/custom-components`.

## Deployment

The site is statically generated via `npm run build` and deployed to [docs.lightninghire.com](https://docs.lightninghire.com). CI/CD is configured to build and deploy on push to `main`.

## Contact

- Product support: [support@lightninghire.com](mailto:support@lightninghire.com)
- App: [lightninghire.com](https://lightninghire.com)
