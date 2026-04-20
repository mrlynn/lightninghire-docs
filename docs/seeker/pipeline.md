---
sidebar_position: 8
title: Your pipeline
description: Track every job application from saved to offer in one Kanban-style board, with deadlines, reminders, and AI prep linked to each role.
---

# Your pipeline

Twenty applications scattered across LinkedIn tabs, email threads, and company portals. You're losing track of deadlines. You forgot to follow up on the one you actually care about. That's the problem the pipeline solves.

The LightningHire pipeline is a Kanban board that holds every opportunity you care about, from the role you bookmarked last night to the offer you need to respond to by Friday. One place. Every stage. Every interview, every contact, every piece of AI-generated prep — attached to the application it belongs to.

:::tip Open your pipeline
Jump straight to [lightninghire.com/pipeline](https://lightninghire.com/pipeline) to see the board. If you're new, the [Getting started guide](/docs/seeker/getting-started) walks you through the first application.
:::

## The eight stages

Every application lives in one of eight columns. Drag a card between columns or use the status dropdown on the detail page to move it.

### 1. Saved

Roles you've bookmarked but haven't applied to yet. Save early, decide later — it costs nothing and keeps interesting opportunities from disappearing into browser-history purgatory.

### 2. Applied

You've submitted the application. The card in this column is your proof you did the work, and the timestamp tells you when to start expecting a reply.

### 3. Screening

Recruiter screen scheduled, happening, or done. This is the stage where most applications silently die — keep the card current so the pipeline funnel analytics can tell you honestly how you're converting.

### 4. Interviewing

Active interview loop. Phone screens, technical rounds, onsites, panels — all live here until you have an outcome. The detail page holds the interview schedule, interviewer contacts, and prep materials.

### 5. Offer

You got the offer. The salary negotiation coach is one click away from the card.

### 6. Accepted

You took it. Congrats. Move the card here so the analytics funnel reflects reality.

### 7. Rejected

They passed, or they ghosted past the reasonable follow-up window. Moving the card here closes the loop — and gives the post-mortem feature enough signal to surface patterns across rejections.

### 8. Withdrawn

You pulled out. Role wasn't right, compensation didn't clear, timing changed — whatever. Log it. The analytics page treats Rejected and Withdrawn differently for a reason.

:::note Statuses power everything downstream
Pipeline funnel conversion, mock-interview recommendations, and reminder logic all read from the current stage. Keeping statuses current is the smallest habit with the biggest payoff.
:::

## Adding an application

Three ways to add a role:

1. **Chrome extension** — on a LinkedIn job page, click the LightningHire button. One click sends the job to the pipeline with title, company, location, seniority, and description already captured. See the [Chrome extension guide](/docs/seeker/extension).
2. **Job Search** — from **Apply > Job Search** inside the app, hit Save on any result. The job lands in the Saved column automatically with the full description attached.
3. **Add Application button** — manual entry. Company name and role are required; job URL and description are optional but strongly recommended.

:::warning Always paste the full job description
Many of the best features — resume match scoring, mock-interview question generation, company intel, cover letter drafts — need the full description text. Without it, the AI is guessing.
:::

## Inside an application

Click any card to open its detail page. Everything you need for that specific opportunity is here:

### Status and timeline

- **Status dropdown** — move between stages without dragging.
- **Timeline** — a chronological feed of every event, status change, interview, and note. Not a dashboard. A record.

### Contacts

Track recruiters, hiring managers, interviewers, and referrers attached to this role. Email, LinkedIn, phone, notes. Link a contact from your [network](/docs/seeker/networking) to an application and the relationship history travels with it.

### Interviews

Add interview dates, times, and interviewer names. Every scheduled interview can export an ICS calendar invite so the date shows up in your actual calendar, not just the pipeline.

### Deadlines and reminders

- **Apply-by dates** on Saved roles so you don't let a posting expire.
- **Follow-up reminders** after applying or after a screen.
- **Offer-response deadlines** surfaced automatically when a card moves to Offer.

Reminders appear on the Dashboard and in the weekly digest email. You don't have to remember to check — if something needs your attention today, LightningHire tells you.

### Resume match score

Once the application has a job description and you've uploaded a resume, the page shows the AI-calculated match score. Use it to decide: submit the master resume, or invest the ten minutes to tailor a version? Learn more in the [Resume guide](/docs/seeker/resume).

### Company intel

Click **Generate Company Intel** on any application and the AI builds a research brief: open roles, culture signals, recent news, tech stack, and interview notes. Pre-populated if the company has been researched before. Full guide: [Company intel](/docs/seeker/company-intel).

### Cover letter

AI drafts a tailored cover letter from your resume plus the job description. Not a template with `[Company Name]` placeholders — a first draft with your actual background grounded in the role's actual requirements.

### Salary negotiation

From an application in the Offer stage, click the negotiation button to launch the [Salary Negotiation Coach](/docs/seeker/salary-negotiation) with the company, role, and offer details pre-filled.

### Next actions

AI-suggested next steps based on the current stage. After applying: when to follow up, who to find on LinkedIn. After an interview: who to thank, what to ask next round. After an offer: negotiate, don't just accept.

## Linking mocks and STAR stories

Mock interviews and STAR stories aren't separate silos — they belong to the job search. When you launch a mock interview from inside an application, the generated questions use the real job description. The scoring comes back attached to the application's timeline.

The same goes for STAR stories: tag a story with an application, and it surfaces automatically the next time you run a mock for that role or open the prep sidebar.

:::tip One role at a time
Set an application as your **Active Opportunity** from the detail page. The Dashboard, the mock interview defaults, and next-action recommendations all focus on that role until you change it. Best used for the interview you care about most this week.
:::

## Filtering and search

The top of the pipeline page has:

- **Search** — by company name or role title.
- **Status filter** — show only one or two columns when you want to focus.
- **Date filter** — narrow by last-activity date when you need to audit what's stale.

If a card hasn't moved in three weeks and it's still in Applied, that's a follow-up prompt. The filter makes those cards easy to find.

## Bulk actions

Select multiple cards to update status, tag for a saved view, or archive. Archiving keeps a card searchable but hides it from the default board — useful when a search wraps up and you want a clean pipeline for the next one.

## Pipeline tips that compound

- **Add applications in the Saved column even when you're not sure.** The cost is zero. The benefit is a record you can come back to.
- **Update status within a day of every event.** Accurate stages turn analytics from "interesting charts" into "actual decisions."
- **Always paste the job description.** This is the single highest-leverage habit for getting value out of LightningHire.
- **Link interviews to applications, not to the calendar alone.** The interview is a stage of a process, not a standalone event.
- **Review Rejected cards monthly.** The post-mortem feature surfaces patterns — "you stall at screening for series-B product roles" is a learnable signal.

## Keyboard shortcuts

| Action | Shortcut |
|---|---|
| Open pipeline | `g` then `p` |
| New application | `n` |
| Search | `/` |
| Close detail panel | `Esc` |

## Related

- [Chrome extension](/docs/seeker/extension) — one-click import from LinkedIn
- [Resume management](/docs/seeker/resume) — tailor a resume for any role
- [Company intel](/docs/seeker/company-intel) — auto-generated research briefs
- [Analytics](/docs/seeker/analytics) — pipeline funnel and conversion rates
- [Salary negotiation](/docs/seeker/salary-negotiation) — turn an offer into a better offer
