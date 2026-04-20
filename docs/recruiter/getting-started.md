---
sidebar_position: 1
title: Getting started
description: How to sign up, create your first requisition, add candidates, and run a scorecard — all on day one.
---

# Getting started

Juggling requisitions without dedicated ops is real work. LightningHire is designed to get a solo recruiter or small hiring team from zero to a running pipeline without a lengthy setup or a sales call. This guide walks you through every step.

## Before you begin

LightningHire Recruit is designed for solo recruiters and small hiring teams. The free tier gives you 3 active requisitions, 25 candidates per requisition, and 10 AI actions per day. No credit card required to start.

If you already have a job-seeker account, you will need a separate recruiter account. Sign up at [lightninghire.com/recruit](https://lightninghire.com/recruit) and choose **I'm hiring** on the account type screen.

---

## Step 1 — Create your account

1. Go to [lightninghire.com/recruit](https://lightninghire.com/recruit) and click **Create Free Account**.
2. On the account type screen, select **I'm hiring**.
3. Verify your email. You will land on the recruiter dashboard.

:::note Free tier limits
Free accounts include 3 active requisitions, 25 candidates per requisition, and 10 AI actions per day. AI actions are a shared daily pool used by fit scoring and outreach generation. The counter resets at midnight UTC.
:::

---

## Step 2 — Create your first requisition

A requisition is the record for a single open role. It holds the job description, enriched metadata, hiring team information, and the candidate pipeline.

1. Go to [lightninghire.com/roles](https://lightninghire.com/roles) or click **Roles** in the sidebar.
2. Click **New Role**.
3. Fill in the role title, department, location, and employment type.
4. Paste the full job description into the **Job Description** field.
5. Click **Create**.

LightningHire will automatically enrich the requisition — extracting seniority level, required tech stack, benefits signals, and estimated salary range from the job description text. Enrichment runs in the background; the enriched fields appear within a few seconds.

:::tip Paste the full JD
Enrichment quality improves with more text. Paste the complete job description, not just the title and bullet points.
:::

---

## Step 3 — Add your first candidate

With a requisition open, you can add candidates manually or upload a resume file.

**Manual add:**
1. From the requisition detail page, click **Add Candidate**.
2. Enter the candidate's name, email, and current title.
3. Optionally upload a resume PDF.
4. Click **Save**.

**Resume upload:**
Upload a PDF resume from the candidate detail page. LightningHire will parse the resume and populate the candidate's profile with work history, skills, and contact information.

**Bulk import:**
If you have a spreadsheet of candidates, see [Bulk import](./bulk-import.md) for the CSV format and column mapping workflow.

---

## Step 4 — Run a fit score

The AI fit score compares a candidate's resume against the requisition and returns a 1–100 score with specific strengths, gaps, and a summary paragraph.

1. Open a candidate's detail page.
2. Find the **AI Fit Score** panel on the right side.
3. Click **Generate Fit Score**.
4. The score streams in within a few seconds.

Each fit score generation uses one AI action from your daily pool. Scores are cached — re-generating replaces the cached score and uses another action.

:::note What the score considers
The fit score compares the candidate's resume content against the role description and enriched metadata. See [Fit scores](./fit-scores.md) for a full explanation of what is and is not factored in.
:::

---

## Step 5 — Submit a scorecard

After an interview, document your assessment with a scorecard.

1. Open the candidate's detail page.
2. Scroll to the **Scorecards** section and click **Add Scorecard**.
3. Set an overall rating (1–5 stars), a recommendation (Strong Yes / Yes / No / Strong No), and rate individual competencies.
4. Add interview notes in the text field.
5. Click **Submit Scorecard**.

Scorecards are stored on the candidate application and visible to anyone with access to the pipeline. See [Scorecards](./scorecards.md) for details on competency configuration.

---

## Step 6 — Move candidates through the pipeline

The pipeline board shows every candidate for a requisition organized by stage. Drag a candidate card to move them between stages. Each stage change is logged to the activity timeline.

Default stages: **Sourced → Screen → Interview → Offer → Hired** (plus **Rejected** and **Withdrawn**).

Open the pipeline board from the requisition detail page or from [lightninghire.com/candidates](https://lightninghire.com/candidates).

---

## What's next

- [How it's different](./how-its-different.md) — scope-honest overview of what LightningHire does and doesn't do
- [Requisitions](./requisitions.md) — full lifecycle: create, edit, status management
- [Candidates](./candidates.md) — sourcing, enrichment, resume parsing, notes
- [Fit scores](./fit-scores.md) — how AI scoring works and its limitations
- [Scorecards](./scorecards.md) — structured interview feedback

Ship from day one. That is the bar.
