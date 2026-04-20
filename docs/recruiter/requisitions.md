---
sidebar_position: 3
title: Requisitions
description: Create and manage open roles in LightningHire — from job description paste to pipeline launch.
---

# Requisitions

A requisition is the record for a single open role. It is where job description, enrichment data, hiring team, evaluation criteria, and the candidate pipeline live together. Each requisition gets its own pipeline board, its own scorecard history, and its own fit-score pool.

---

## Creating a requisition

1. Go to [lightninghire.com/roles](https://lightninghire.com/roles).
2. Click **New Role**.
3. Fill in the required fields:
   - **Title** — the job title as you would post it externally (e.g., "Senior Backend Engineer")
   - **Department** — engineering, product, design, operations, etc.
   - **Location** — remote, hybrid, or a specific city
   - **Employment type** — full-time, part-time, contract
   - **Work mode** — remote, hybrid, on-site
4. Optionally set a **Compensation range** (used by enrichment for salary comparison).
5. Paste the full job description into the **Job Description** area.
6. Click **Create**.

:::tip Free tier limit
Free accounts support 3 active requisitions. Archived requisitions do not count against this limit. If you hit the cap, archive a closed role to free a slot.
:::

---

## Automatic enrichment

When you create or update a requisition with a job description, LightningHire runs automatic enrichment in the background. Enrichment extracts:

- **Seniority level** — junior, mid, senior, staff, principal, director
- **Required tech stack** — languages, frameworks, platforms mentioned in the JD
- **Benefits signals** — equity, remote policy, health coverage, PTO mentions
- **Estimated salary range** — derived from JD language and compensation signals

Enrichment results appear in the requisition detail view within a few seconds. They are used as additional context when generating AI fit scores.

**Enrichment does not modify the original job description text.** It only populates the metadata fields on the requisition record.

---

## Requisition status lifecycle

| Status | Meaning |
|---|---|
| **Draft** | Created but not yet active. Not included in pipeline health counts. |
| **Active** | Open and sourcing. Counts against your active requisition limit. |
| **On hold** | Temporarily paused. Still counts against the active limit. |
| **Filled** | A candidate has been hired. Does not count against the active limit. |
| **Archived** | Closed and not actively counted. Can be un-archived. |

Change status from the requisition detail page using the **Status** control in the header.

:::note When to archive
Archive a requisition when the role is closed and you are done with it. Archived requisitions remain searchable and their candidate history is preserved. Archiving frees the slot for a new active requisition on the free tier.
:::

---

## Editing a requisition

Open the requisition and click **Edit** in the header. All fields are editable. Saving a new job description triggers a fresh enrichment pass.

If you have existing fit scores for candidates tied to this requisition, changing the job description will mark those scores as stale. Re-generate fit scores after a significant JD update to keep comparisons accurate.

---

## Hiring team

Add hiring team members to a requisition from the detail page under **Hiring Team**. Team members are tracked as Person records — they do not need a LightningHire account to be listed.

:::note Multi-user teams
Full shared access for multiple recruiter accounts is not available in the current release. See [How it's different](./how-its-different.md) for the current scope.
:::

---

## Required skills and evaluation criteria

Under **Evaluation Criteria** on the requisition detail page, you can define:

- **Required skills** — technical and soft skills the role demands
- **Nice-to-have skills** — signals that differentiate strong candidates
- **Competency areas** — behavioral and functional areas you want every interviewer to evaluate

These criteria feed into the question rubric library and the default competency set shown when an interviewer adds a scorecard. See [Question rubrics](./question-rubrics.md) and [Scorecards](./scorecards.md).

---

## Closing a role

When a candidate accepts an offer:

1. Open the candidate's detail page and set their stage to **Hired**.
2. Open the requisition and set status to **Filled**.

Remaining candidates in the pipeline are not automatically changed. Review and set each to **Rejected**, **Withdrawn**, or move them to another open requisition.

---

## Related pages

- [Candidates](./candidates.md) — adding people to a requisition pipeline
- [Pipeline](./pipeline.md) — moving candidates through stages
- [Fit scores](./fit-scores.md) — AI scoring against the requisition
- [Question rubrics](./question-rubrics.md) — structured evaluation criteria
