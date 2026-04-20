---
sidebar_position: 4
title: Candidates
description: Adding, sourcing, enriching, and managing candidate profiles in LightningHire.
---

# Candidates

Candidates in LightningHire are stored as Person records — a single profile that can be attached to multiple requisitions. Contact information, resume, LinkedIn and GitHub links, notes, and activity history live on the Person record. The evaluation data — stage, scorecards, fit score — lives on the candidate application (the link between a Person and a specific requisition).

---

## Adding candidates

### Manual add

1. Go to [lightninghire.com/candidates](https://lightninghire.com/candidates) or open a requisition pipeline.
2. Click **Add Candidate**.
3. Enter name, email, and current title or company.
4. Assign the candidate to a requisition.
5. Set an initial stage (defaults to **Sourced**).
6. Click **Save**.

### Resume upload

From the candidate detail page, click **Upload Resume** to attach a PDF. LightningHire parses the resume and populates:

- Work history (most recent three roles)
- Detected skills and technologies
- Education
- Contact information (if present in the document)

Parsed resume data is stored on the Person record and used as input for AI fit scoring. The original PDF is stored and viewable from the candidate page.

### Bulk import

For larger candidate sets, use the CSV or resume bulk import. See [Bulk import](./bulk-import.md) for the full workflow including column mapping and quota limits.

---

## Candidate profile

The candidate detail page is the primary workspace for a recruiter evaluating a specific person for a role. It includes:

- **Person card** — name, current title and company, contact information, LinkedIn and GitHub links
- **Resume preview** — PDF viewer inline on the page
- **Stage** — current pipeline stage with inline stage changer
- **AI Fit Score panel** — score with strengths, gaps, and summary (see [Fit scores](./fit-scores.md))
- **Scorecards** — list of submitted interview evaluations with an Add Scorecard button (see [Scorecards](./scorecards.md))
- **Activity timeline** — log of stage changes, scorecards added, and notes

---

## Candidate status and stages

Each candidate application has a stage that reflects where the candidate sits in the hiring process for that requisition.

| Stage | Meaning |
|---|---|
| **Sourced** | Identified but not yet contacted |
| **Screen** | Initial phone or video screen scheduled or completed |
| **Interview** | In the interview loop |
| **Offer** | Offer extended |
| **Hired** | Offer accepted |
| **Rejected** | Passed on for this role |
| **Withdrawn** | Candidate withdrew from the process |

Update stage from the candidate detail page or by dragging the card on the pipeline board. Each change is logged to the activity timeline with a timestamp.

---

## Candidate enrichment

When a resume is uploaded, LightningHire runs automatic enrichment to extract structured data. Enrichment populates the candidate's skill list, inferred seniority level, and technology tags. These fields are visible on the candidate profile and are used as inputs to the AI fit score.

Enrichment counts against your daily AI action pool. On the free tier, 10 AI actions per day are shared across fit scoring and enrichment.

---

## Notes

Add free-text notes to a candidate from the detail page. Notes are visible to anyone with access to the pipeline and are included in the activity timeline with a timestamp. Notes do not count against AI actions.

Use notes for:
- Post-screen observations before a formal scorecard
- Scheduling context or logistics notes
- Red flags or positive signals you want to flag for the panel

---

## Searching and filtering candidates

From [lightninghire.com/candidates](https://lightninghire.com/candidates):

- **Search** by name
- **Filter by stage** — narrow to candidates in a specific pipeline stage
- **Filter by source** — manual, resume upload, bulk import

From inside a requisition's pipeline board, the filter bar also supports **days-in-stage** to surface candidates who have been sitting in a stage without movement.

---

## Candidate across multiple requisitions

A Person record can be attached to more than one requisition. Each attachment is a separate candidate application with its own stage, scorecards, and fit score. To add an existing Person to a second requisition, use the **Add to Role** action on the candidate detail page and select the target requisition.

---

## Related pages

- [Pipeline](./pipeline.md) — kanban board and stage management
- [Fit scores](./fit-scores.md) — AI scoring against a requisition
- [Scorecards](./scorecards.md) — structured interview feedback
- [Bulk import](./bulk-import.md) — CSV and resume batch add
