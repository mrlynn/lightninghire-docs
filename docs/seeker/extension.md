---
sidebar_position: 11
title: Chrome extension
description: One-click LinkedIn imports, an always-on side panel, resume match scoring, offline queue, and follow-up reminders — all from your browser.
---

# Stop copying and pasting. Let the extension handle it.

You're browsing LinkedIn. You find a role. The old way: new tab, find your spreadsheet, copy the title, copy the company, paste the URL, forget the deadline, lose the link. The new way: one click on the LightningHire button right in LinkedIn. The job lands in your pipeline with title, company, location, seniority, description, and employment type already captured. Resume match score appears. Company intel starts generating. AI interview prep is ready the next time you open the role.

Install time: under 30 seconds. Ongoing effort: one click per job.

:::tip Install the extension
[Add LightningHire to Chrome](https://chromewebstore.google.com/detail/lightninghire-%E2%80%94-job-impor/kbodgbnkifmbijkgkkoncpikpecjfopn) — free with your LightningHire account.
:::

## Install and connect

1. **Install from the Chrome Web Store.** [Add LightningHire](https://chromewebstore.google.com/detail/lightninghire-%E2%80%94-job-impor/kbodgbnkifmbijkgkkoncpikpecjfopn) and pin the extension to your toolbar.
2. **Generate an API token.** In the app, open [Settings → Integrations](https://lightninghire.com/settings/integrations) and copy your token (starts with `lh_`).
3. **Paste the token into the extension.** Click the bolt icon in the toolbar and paste. Save.
4. **Navigate to LinkedIn.** The extension activates automatically on job pages and profile pages.

One-time setup. Your token lives only on your machine — see [privacy](#privacy-what-the-extension-can-and-cannot-see) below.

## One-click job import

The extension injects a LightningHire button into every LinkedIn job listing. Click it. The job lands in your pipeline's **Saved** column in the blink of an eye.

**What gets captured:**

- Job title
- Company name
- Location and location type (Remote / Hybrid / On-site)
- Full job description
- Seniority level (Entry / Mid-senior / Director / etc.)
- Employment type (Full-time / Contract / Internship)
- LinkedIn job ID and source URL

Because the full job description is captured at import time, every downstream AI feature works immediately: [resume match scoring](./resume), [company intel](./company-intel), tailored mock interview questions, and cover letter drafting.

### Smart status detection

Already imported a job? The button turns green with a checkmark. Click it to jump straight to that application in your pipeline — no duplicate entries. The extension checks locally first (instant), then verifies against your account so status stays in sync across devices.

## Save LinkedIn profiles to your network

Open any LinkedIn profile (`/in/…`). The extension recognizes profile pages and swaps the popup into **profile mode**, giving you two actions:

- **Save as Interviewer** — mark this person as an interviewer for an upcoming round. They show up in the prep panel when you start a [live session](./live-sessions) with that company.
- **Add to Network** — save as a general network contact. Useful for recruiters who reached out, referrers, or anyone worth following up with later.

Already saved someone? The extension shows a badge: "In Network" or "Saved as Interviewer." Re-opening gives you the option to upgrade a general contact to an interviewer when you know they'll be interviewing you.

## Resume match score in-page

On any LinkedIn job page, the extension renders a **resume match score** directly in the in-page sidebar. You see how well your current resume aligns with the role before you click Save — no need to open a separate page.

The score updates as you switch jobs in LinkedIn's search pane. If the match is low, you know to tailor your resume before applying. See [resume management](./resume) for how tailoring works.

## Side panel mode (recommended)

By default the extension behaves as a popup — it closes when you click away. Enable **side panel mode** (Settings → "Use side panel") and LightningHire docks to the right edge of your browser, staying open as you browse.

Side panel benefits:

- **Persistent context.** Your session stats and activity feed stay visible.
- **Auto-refresh.** Switch tabs or navigate to a new job and the panel re-parses automatically.
- **Keyboard shortcut.** Press <kbd>Cmd+Shift+L</kbd> (Mac) or <kbd>Ctrl+Shift+L</kbd> (Windows) to toggle from anywhere.

The in-page sidebar (a slimmer strip along the right edge of LinkedIn) shows your session stats — Viewed, Imported, Applied counts — and recent activity. Both the side panel and the in-page sidebar share the same session data.

## Follow-up reminders

After any successful import, the extension offers a reminder row: **1 day · 3 days · 1 week · 2 weeks**. One click schedules a follow-up notification at that interval for this specific application. Useful for:

- Pinging a recruiter a week after applying if you haven't heard back
- Reminding yourself to prepare for an interview after the 3-day waiting period
- A 2-week nudge to move a stalled application forward

Reminders fire as browser notifications and show up in your pipeline timeline.

## Offline import queue

If your API is unreachable — bad Wi-Fi, server issue, token expired — the extension doesn't lose your imports. It queues them locally and shows a counter at the top: "*3 queued*."

Click **Retry now** to drain the queue once you're back online. Failed imports stay visible so you can inspect and re-trigger them individually. Nothing silently disappears.

## Keyboard shortcut

Press <kbd>Cmd+Shift+L</kbd> (Mac) or <kbd>Ctrl+Shift+L</kbd> (Windows/Linux) on any supported page to:

- **On a job page** → one-press import to your pipeline (no popup needed for the fast path).
- **On a profile page** → open the save dialog pre-loaded with the profile data.

You can change the shortcut in `chrome://extensions/shortcuts`.

## Supported sites

| Site | Status |
|---|---|
| LinkedIn | ✅ Available |
| Greenhouse | ✅ Available |
| Indeed | ✅ Available |
| Wellfound | ✅ Available |
| Lever | Coming soon |
| Ashby | Coming soon |
| Workable | Coming soon |

LinkedIn is the primary surface and gets the richest set of features (profile import, resume match overlay, in-page sidebar). Other sites currently support job import only. Multi-site parsers run only on pages you actively visit — the extension doesn't crawl other tabs.

## Privacy: what the extension can and cannot see

No background data collection. No browsing history. No tracking across sites.

| What the extension does | What it does not do |
|---|---|
| Reads the current LinkedIn/Greenhouse/Indeed/Wellfound page when you click the import button or keyboard shortcut | Read any page you haven't actively triggered |
| Stores your API token in Chrome's local extension storage | Send your token anywhere except your own LightningHire account |
| Communicates with your LightningHire host to save jobs, profiles, and reminders | Monitor your browsing or collect data in the background |
| Uses `alarms` and `notifications` to fire follow-up reminders you opted into | Send any notification unless you scheduled one |
| Uses `contextMenus` for optional right-click imports | Modify or interact with any site except the ones you trigger it on |

**Permissions requested:**

- `storage` — save your API token and offline queue locally in the browser
- `activeTab` — read the current job or profile page when you click the button
- `scripting` — inject the parser into the active tab
- `contextMenus` — add right-click menu items for quick import
- `alarms` — schedule follow-up reminders
- `sidePanel` — enable the optional side-panel mode
- `notifications` — fire reminder notifications
- `host_permissions: https://lightninghire.com/*` — talk to your LightningHire account
- `optional_host_permissions: https://*/*` — only granted per-site when you opt into a non-LinkedIn multisite parser

:::note Your token stays in your browser
Your API token is stored in Chrome's local extension storage and is never shared with third parties. It's used exclusively to authenticate requests to your own LightningHire account when you trigger an import. Revoke it any time in [Settings → Integrations](https://lightninghire.com/settings/integrations) and the extension immediately stops working until you paste a new one.
:::

## Self-hosted LightningHire

If you run LightningHire on your own domain, set the **API URL** in the extension's Settings screen (e.g. `https://lh.yourcompany.com`). Chrome will prompt for permission to reach that host the first time you save — grant it once and imports flow to your instance instead of `lightninghire.com`.

## Troubleshooting

**The import button isn't showing up on LinkedIn.**
Confirm the extension is installed and your API token is set. Refresh the LinkedIn page after installing or reconnecting. LinkedIn ships layout changes frequently — if you hit a page where the button doesn't appear, try the keyboard shortcut as a fallback.

**The extension shows "No job detected."**
Navigate to a LinkedIn job URL (`/jobs/view/…`) or use the in-page search that highlights a specific job. The extension re-parses on tab change and URL change, so sometimes reopening is enough.

**"Allow network access to your API URL."**
Chrome is prompting for permission to reach your host. Grant it — the extension can't import without network access to your LightningHire instance.

**Imports are queueing and not succeeding.**
Open Settings and verify your token is correct. If the token is right but imports still fail, check that your LightningHire account isn't at its free-tier pipeline limit ([20 applications on free](./free-vs-pro)).

**The button doesn't work on a Greenhouse / Indeed / Wellfound page.**
Multi-site parsers require you to grant permission for that domain. The extension will prompt the first time. If you dismissed the prompt, open `chrome://extensions/` and enable permissions manually for the site.

## Related pages

- [Managing your pipeline](./pipeline) — where imported jobs land
- [Resume management](./resume) — how the match score is calculated
- [Company intel](./company-intel) — auto-generated on import
- [Live sessions](./live-sessions) — saved interviewers appear in prep panels
