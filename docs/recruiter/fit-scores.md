---
sidebar_position: 7
title: Fit scores
description: How LightningHire's AI fit score works, what it considers, how to read it, and its limitations.
---

# Fit scores

Your pipeline, scored by AI, not spreadsheets.

The AI fit score is a 1–100 numerical assessment comparing a candidate's resume against the job description and enriched metadata for a specific requisition. It is designed to help you prioritize review order when a pipeline has more candidates than hours — not to replace the interview.

---

## What a fit score includes

Each generated fit score returns four outputs:

| Output | Description |
|---|---|
| **Score (1–100)** | Overall fit rating for this candidate against this requisition |
| **Strengths** | Top 3 resume signals that match the role requirements |
| **Gaps** | Top 3 areas where the candidate's background does not clearly match the role |
| **Summary** | One paragraph plain-English explanation of the score |

Score labels:

| Range | Label |
|---|---|
| 85–100 | Exceptional |
| 70–84 | Strong |
| 55–69 | Moderate |
| 40–54 | Weak |
| 0–39 | Poor |

---

## What the score considers

The fit score is generated from:

1. **Resume content** — parsed work history, extracted skills, detected technologies, education
2. **Job description text** — requirements, responsibilities, preferred qualifications
3. **Enrichment metadata** — seniority level, required tech stack, and other signals extracted from the JD during requisition enrichment

The model compares these three inputs and surfaces where the candidate's background demonstrably matches or demonstrably misses the role requirements.

---

## What the score does not consider

Being explicit about this matters.

- **Cultural fit signals not in the resume.** How a candidate communicates, whether they align with the team's working style, and interpersonal factors are not assessable from resume text.
- **Soft skills not evidenced in writing.** If the JD requires "excellent communication skills" and the resume does not have explicit evidence, the model cannot confirm or deny this.
- **Recency and context.** A skill listed on a resume may be from 10 years ago or from last month. The model does not reliably distinguish.
- **Portfolio or work sample quality.** GitHub links are detected and surfaced but not evaluated.
- **Candidate motivation.** Whether someone actually wants this job is not inferable from resume text.

A high fit score means the resume matches the role description well. It does not mean the candidate will perform well, be a good team member, or accept an offer.

---

## Generating a fit score

1. Open the candidate detail page.
2. Find the **AI Fit Score** panel.
3. Click **Generate Fit Score**.
4. The score streams in via SSE — the panel updates in real time as each section is returned.

Each generation uses one AI action from your daily pool. The free tier includes 10 AI actions per day across all AI features (fit scoring, enrichment, outreach generation). The counter resets at midnight UTC.

:::note Cached scores
Generated scores are cached on the candidate application. You will not be re-charged an AI action just to view a previously generated score. Re-generating (after a resume update or JD change) uses a new action.
:::

---

## When to regenerate

Regenerate a fit score when:

- The candidate uploads an updated resume
- You substantially revise the job description
- The enrichment pass completed after the original score was generated

The fit score panel shows the date of the last scoring run. If the JD or resume has changed since that date, consider regenerating.

---

## Reading the score in context

Fit scores are most useful as a **relative ranking tool within a single requisition** — not as an absolute threshold. A 72 for one requisition is not comparable to a 72 for a different role.

Practical use:

- Sort a large pipeline by fit score to decide which candidates to screen first.
- Use strengths and gaps to focus early screen questions — the gaps section tells you exactly what to probe.
- Use the summary paragraph as pre-read before a screen call, not as a replacement for reading the resume.

A fit score is not a hiring recommendation. It is one data point. The interview, the scorecard, and the human judgment of the hiring team are what actually decide.

---

## AI action limits and the free tier

Free tier: 10 AI actions per day.

AI actions are a shared pool across:
- Fit score generation
- Requisition enrichment (on JD update)
- Outreach generation (where available)

If you hit the daily limit, the Generate Fit Score button will indicate the limit has been reached. Actions reset at midnight UTC.

Pro tier removes the daily cap. Contact us to discuss Pro pricing.

---

## Related pages

- [Candidates](./candidates.md) — the candidate detail page where fit scores live
- [Scorecards](./scorecards.md) — human evaluation alongside AI scoring
- [Requisitions](./requisitions.md) — enrichment metadata that feeds the score
- [How it's different](./how-its-different.md) — scope and limitations overview
