---
sidebar_position: 11
title: Chrome extension
description: Source candidates from LinkedIn profiles, bulk-import from search results, and attach candidates directly to requisitions — all without leaving the browser.
---

# Source from LinkedIn. Ship to requisitions.

The typical recruiter source-to-pipeline workflow — LinkedIn search, copy name, tab to ATS, find the requisition, create a candidate, paste, repeat — eats hours per week. The LightningHire extension collapses it to one click per candidate. Profiles, jobs, and bulk selections all land in the right place with the right metadata.

Same extension as the job-seeker build. Flip it into **Recruiter mode** and the labels, actions, and flows change to match hiring work.

:::tip Install the extension
[Add LightningHire to Chrome](https://chromewebstore.google.com/detail/lightninghire-%E2%80%94-job-impor/kbodgbnkifmbijkgkkoncpikpecjfopn) — free with your LightningHire Recruiter account.
:::

## Install and enable recruiter mode

1. **Install from the Chrome Web Store.** Pin the extension to your toolbar.
2. **Generate an API token.** In the app, open [Settings → Integrations](https://lightninghire.com/settings/integrations) and copy your token (starts with `lh_`).
3. **Paste the token into the extension.** Click the bolt icon, paste, save.
4. **Switch to recruiter perspective.** If your LightningHire account is set up as a recruiter, the extension auto-detects and flips the UI: "Import to Pipeline" becomes "Add Role," "Add to Network" becomes "Add Candidate," a role picker appears on profile pages.

A subtle banner at the top of the panel — **⚡ Recruiter mode** — confirms you're in the right flow.

## One-click candidate import

Open any LinkedIn profile (`/in/…`). The extension reads the profile and surfaces:

- **Name** and current **headline**
- **Company** and **location**
- Whether this person is already in your candidate pool (with count of active requisitions they're attached to)

Click **Add Candidate** and the profile lands in LightningHire's candidate database, parsed and ready to work with.

**What gets captured:**

- Name and headline
- Current company (extracted from experience or headline)
- Location
- LinkedIn profile URL (canonical form, deduplication-safe)

:::note Re-save updates, doesn't duplicate
If a candidate is already in your pool, the badge shows "In your candidate pool · 2 roles." Clicking save again doesn't create a duplicate — it lets you attach them to an additional requisition.
:::

## The role picker — attach directly to a requisition

On profile pages in recruiter mode, a **role picker** appears alongside the Add Candidate button:

```
Add to role
┌────────────────────────────────────────┐
│ — Pool only (no role) —                │
│ Senior iOS Engineer · Acme Corp        │
│ Staff ML Engineer · Acme Corp          │
│ Principal Product Manager · Acme Corp  │
└────────────────────────────────────────┘
```

Pick a requisition. When you click save, the extension creates a candidate **and** attaches them to that requisition in one request — no context-switching to the pipeline page to link them after the fact.

Choose **Pool only (no role)** for speculative saves: promising people you want to track without committing them to a specific opening yet.

## Bulk selection from LinkedIn search

Browsing LinkedIn search results or a candidate list? The extension injects a selection UI into each profile card. Check as many as you want, then import the entire batch at once — optionally attaching all of them to the same requisition.

**How it works:**

1. Open a LinkedIn search or a list view (e.g. people who commented on a relevant post, LinkedIn Recruiter search results).
2. A small LightningHire checkbox appears on each profile card.
3. Check the candidates you want to import. The extension panel shows a bulk bar: "**3 candidates selected**."
4. Optionally pick a requisition from the role picker.
5. Click **Import selected**. All candidates are created and, if a role is selected, attached to it.

The bulk bar reports a summary when done: "*Imported 3 candidates*" or "*Imported 2 candidates, 1 failed*" — with the failed ones visible in the [offline queue](#offline-import-queue) for manual retry.

## Requisition import from LinkedIn job postings

On a LinkedIn job page in recruiter mode, the import action is labelled **Add Role** instead of "Import to Pipeline." The extension creates a LightningHire requisition from the job data:

- Title, company, location
- Full job description
- Seniority level, employment type, location type
- Source job ID and URL

Useful for:

- Tracking a requisition you're helping a client fill — capture their job posting as the source of truth
- Benchmarking — importing a competitor's listing to reference during calibration
- Quickly creating a requisition when a hiring manager shares a LinkedIn link instead of a proper spec

Existing requisition? The button turns green; click to jump to the requisition detail page in your dashboard.

## Side panel mode

Enable **Use side panel** in Settings. The extension docks to the right edge of Chrome and stays open as you browse, auto-refreshing on tab change and URL navigation. Ideal for sourcing sessions where you're moving through dozens of profiles.

Keyboard shortcut: <kbd>Cmd+Shift+L</kbd> (Mac) or <kbd>Ctrl+Shift+L</kbd> (Windows) toggles the panel from anywhere.

## Session stats and activity feed

The panel tracks your recruiting activity per session:

- **Viewed** — profiles you've opened
- **Imported** — candidates and requisitions you've added
- **Applied** — (seeker concept, hidden in recruiter mode)

The activity feed lists the last 10 actions with timestamps, so you can see at a glance what you've been doing in this sourcing block.

Sessions auto-expire after 4 hours of inactivity, which is what you want when you're switching between different client projects or requisitions throughout the day.

## Offline import queue

If your network or API is unavailable, candidate and requisition imports queue locally. A badge shows how many are pending or failed. Click **Retry now** when connectivity is restored and the queue drains with exponential backoff.

Failed imports stay visible — they don't silently disappear. You can inspect what failed, clear them, or retry individually.

Useful when:

- Doing source work on spotty Wi-Fi at a conference or coffee shop
- Your LightningHire instance is temporarily under maintenance
- An expired token blocks imports — fix the token, retry drains everything cleanly

## Follow-up reminders

After importing a candidate, the extension offers a reminder row: **1 day · 3 days · 1 week · 2 weeks**. Scheduling one creates a browser notification at that interval — helpful for pacing outreach or remembering to check back on a candidate after an initial conversation.

Reminders are tied to the candidate, not the tab, so they survive browser restarts.

## Supported sites

| Site | Job import | Profile / candidate import |
|---|---|---|
| LinkedIn | ✅ | ✅ (full featured) |
| Greenhouse | ✅ | — |
| Indeed | ✅ | — |
| Wellfound | ✅ | — |
| Lever | Coming soon | — |
| Ashby | Coming soon | — |

LinkedIn is the primary sourcing surface. Other sites currently support job (requisition) import for cases where you're importing a job description — not candidate sourcing.

## Privacy: what the extension can and cannot see

Same rules as the job-seeker build — no hidden behavior based on your perspective.

| What the extension does | What it does not do |
|---|---|
| Reads the current LinkedIn page when you click a button or trigger bulk selection | Read any page you haven't actively triggered |
| Stores your API token locally in Chrome | Send your token anywhere except your own LightningHire account |
| Communicates with LightningHire to save candidates, requisitions, and reminders | Collect data in the background or track browsing |
| Uses `alarms` and `notifications` for reminders you opted into | Send any unsolicited notifications |

**Candidate PII is handled to the same standard as the rest of the product** — see [privacy](/docs/reference/privacy) for the full data-handling policy covering where candidate records are stored, how they're deleted, and what is never shared with third parties.

## Related pages

- [Requisitions](./requisitions) — where imported jobs become requisitions
- [Candidates](./candidates) — the candidate record created on profile import
- [Pipeline](./pipeline) — how candidates move through stages once attached to a requisition
- [Bulk import](./bulk-import) — for CSV-based bulk candidate uploads (different flow from the extension's bulk LinkedIn import)
