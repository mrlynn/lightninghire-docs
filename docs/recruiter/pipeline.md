---
sidebar_position: 5
title: Pipeline
description: The per-requisition kanban board — managing candidate stages, drag-and-drop movement, and pipeline health.
---

# Pipeline

Every requisition has its own candidate pipeline. The pipeline board is a drag-and-drop kanban view showing each candidate organized by stage. This is where the day-to-day work of a hiring loop happens.

---

## Opening the pipeline board

From any requisition detail page, click **View Pipeline**. You can also reach the pipeline board for all requisitions from [lightninghire.com/candidates](https://lightninghire.com/candidates).

---

## Pipeline stages

Default stages, in order:

1. **Sourced** — candidate identified, not yet contacted
2. **Screen** — initial outreach sent or phone screen completed
3. **Interview** — candidate is in the active interview loop
4. **Offer** — offer letter sent or verbally extended
5. **Hired** — candidate accepted
6. **Rejected** — not moving forward (accessible from any stage)
7. **Withdrawn** — candidate withdrew (accessible from any stage)

:::note Custom stages
Custom pipeline stage configurations are not available in the current release. The default stage set applies to all requisitions. This is a planned Tier 2 feature.
:::

---

## Moving candidates

**Drag and drop** — grab a candidate card and drop it into the target stage column. The stage change saves immediately and is recorded in the activity timeline.

**Inline stage changer** — from the candidate detail page, use the stage selector in the header to change stage without leaving the candidate view.

Every stage change appends a record to the candidate application's stage history: the new stage, the previous stage, and a timestamp.

---

## Candidate cards

Each card on the pipeline board shows:

- Candidate name
- Current title or company
- Days in current stage
- AI fit score badge (if generated)
- Scorecard count

Click a card to open the full candidate detail page.

---

## Filter bar

The pipeline board filter bar narrows the visible candidates without changing their stages.

| Filter | Options |
|---|---|
| Source | Manual, resume upload, bulk import |
| Days in stage | Under 3, 3–7, 7–14, 14+ |
| Name search | Text search on candidate name |

Filters are per-session and do not affect other users viewing the same pipeline.

---

## Per-column candidate count

Each stage column shows a count of candidates currently in that stage. Use these counts to assess pipeline health at a glance:

- A large **Sourced** count with nothing in **Screen** means sourcing is running ahead of outreach.
- A large **Interview** count with nothing moving to **Offer** may indicate a stalled evaluation process.
- A thin top-of-funnel with multiple **Offer** stage candidates may mean you are close to filled — or overextended.

---

## Pipeline health on the dashboard

The recruiter dashboard at [lightninghire.com/dashboard](https://lightninghire.com/dashboard) shows a summary pipeline view across all active requisitions:

- Candidate counts by stage per role
- Stale requisitions flagged (no candidate activity in 14+ days)
- Recent stage changes in the last 7 days

Use the dashboard for a cross-requisition view; use the pipeline board for working within a single role.

---

## Stage history and activity timeline

Every stage change is recorded. On the candidate detail page, the **Activity timeline** shows the full chronological history of that candidate for the requisition:

- Stage changes (from → to, with timestamp)
- Scorecards submitted (interviewer, recommendation, date)
- Notes added

Stage history cannot be edited or deleted. It is the audit trail for the hiring decision.

---

## Comparing candidates at the finalist stage

When multiple candidates are in the **Interview** or **Offer** stage for the same role, the comparison view lets you see their fit scores, scorecard ratings, and recommendations side by side. Access it from the requisition detail page under **Compare Finalists**.

This is most useful when a hiring team disagrees — scorecard data and fit scores together give you something concrete to discuss, rather than relying on the loudest voice in the debrief.

---

## Related pages

- [Candidates](./candidates.md) — adding and managing candidate profiles
- [Fit scores](./fit-scores.md) — AI fit score on the pipeline card
- [Scorecards](./scorecards.md) — interview feedback feeding into pipeline decisions
- [Requisitions](./requisitions.md) — requisition setup and status
