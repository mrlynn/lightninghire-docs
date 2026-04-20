---
sidebar_position: 5
title: Changelog
description: What's new in LightningHire — product releases, documentation updates, and infrastructure changes.
---

# Changelog

What shipped and when. For the live in-app changelog, see [lightninghire.com/changelog](https://lightninghire.com/changelog). This page tracks release notes that matter for documentation readers — API changes, new reference surfaces, and notable product updates.

Dates are in ISO format (YYYY-MM-DD).

## 2026-04-19 — Documentation relaunched

The docs site is back online under the new LightningHire brand, built on Docusaurus with an audience-split information architecture.

**What's new**

- **Job-seeker and recruiter tracks** split at the top level. Guides, how-tos, and reference pages are scoped to the role you're in — no more sifting through recruiter docs when you're prepping for an interview.
- **Reference section** covering the [API](/docs/reference/api), [entitlements](/docs/reference/entitlements), [custom components](/docs/reference/custom-components), and [privacy](/docs/reference/privacy).
- **Rebrand carried through.** Product, marketing, and docs are all under `lightninghire.com` now. The old `convopilot` and `offerready` references have been retired — if you land on one, it'll redirect.

**For doc authors**

- New custom MDX components are documented at [custom MDX components](/docs/reference/custom-components). `APIEndpoint`, `Steps`, `FeatureCard`, and `InfoBox` are the ones you'll use most.
- Brand voice guidelines apply to documentation. Direct, specific, and technical-but-readable. No hype.

## 2026-04 — Job-match lead magnet & salary negotiation tools

- **Job-match lead magnet.** A public, no-signup tool that scores a candidate's fit against a pasted job description. Captures an email if the user wants the detailed report.
- **Salary negotiation unlock.** Candidates can unlock a data-backed negotiation script with their specific numbers, counter-offer strategies, and ready-to-send email copy.
- **Resources hub.** A new `/resources` section aggregating free tools and guides — salary negotiation, job match, interview prep.

## 2026-03 — Recruiter MVP

- **Recruiter pipeline.** Solo recruiters and small teams can now create requisitions, add candidates, and run AI-scored evaluations. Free tier includes 3 open roles, 25 candidates per role, 75 candidates total.
- **Fit-score panel.** AI-generated fit scores with component breakdowns: experience match, skill coverage, and communication signal.
- **Scorecards.** Structured interview feedback that the whole loop can fill out, with rollups for consensus.

## 2026-02 — AI coach & live-session polish

- **Live session coaching upgrade.** Real-time suggestions during interview calls now draw from your STAR stories, pipeline notes, and company intel automatically.
- **Post-interview debrief.** After every live session, an AI debrief surfaces what went well, what to improve, and specific follow-up suggestions.
- **Mock interview scoring revision.** Scores are now per-answer with an overall rollup, and the rubric is surfaced alongside each score so you can see *why* the AI scored an answer the way it did.

## 2026-01 — Pipeline v2

- **One-click auto-pipeline.** Drop a job URL into the extension and the app pulls the posting, generates a tailored resume suggestion, drafts an outreach message, and adds the role to your pipeline — all in one action.
- **Company intel at the pipeline row.** Every pipeline entry now gets a lightweight AI briefing on the company: culture signals, interview style, recent news.
- **Credits launched.** Pay-as-you-go option for users who don't want a monthly subscription. 1 credit = $0.01. Unused credits never expire.

## 2025-Q4 — Foundation

The original LightningHire (then OfferReady / ConvoPilot) shipped as an AI interview copilot with mock interviews, STAR stories, resume tailoring, and a job-tracking pipeline. The core architecture — Next.js 16, MongoDB Atlas, NextAuth v5, and AI through `ai-client.ts` — was established in this period.

## How to read this page

Entries are grouped by month when multiple releases ship together. Individual dated entries are used for releases that materially change the developer-facing API or documentation.

For marketing-facing release announcements, see the public [changelog on lightninghire.com](https://lightninghire.com/changelog). For API-level changes, watch the [API reference](/docs/reference/api) — breaking changes will be called out here first.
