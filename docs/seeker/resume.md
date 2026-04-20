---
sidebar_position: 9
title: Resume management
description: Upload a master resume once, tailor it to any job description with AI, and use match scores to decide where to invest your time.
---

# Resume management

The generic resume you mailed to twelve companies last week got filtered out by eleven ATSes before a human saw it. That's the problem. Recruiters spend six seconds on a first pass. Applicant tracking systems are less generous. The resume that lands an interview doesn't look like a brochure — it looks like the job description reflected back.

LightningHire solves this in two steps: you upload your complete career history once as a **master resume**, then generate a **tailored version** for every serious application. The AI mirrors keywords, reorders emphasis, and flags gaps. It never invents skills you don't have.

:::tip Open your resume library
[lightninghire.com/resumes](https://lightninghire.com/resumes) — upload, tailor, and score in one place.
:::

## Master resume vs tailored resume

There are exactly two kinds of resume in LightningHire, and the distinction matters.

### Master resume

Your complete, comprehensive career record. Every role, every meaningful accomplishment, every technology you've actually used. This is the source document. It's probably too long to send to a recruiter — that's fine. It's not meant to be sent. It's meant to be the truth the AI draws from.

Keep the master resume updated quarterly, not just when you start a search. The shipping deal you closed in March is easier to remember in April than in November.

### Tailored resume

A version optimized for a specific role. The AI takes your master resume plus a job description and produces a resume where:

- Keywords from the JD appear in your experience bullets (when they're accurate).
- Relevant roles come first; less-relevant ones shrink.
- Summary and headline match the role's language.
- Skills you have that match the JD get surfaced; skills you don't have are not fabricated.

You can generate as many tailored versions as you want from a single master. They stack under the master in the Tree view.

:::warning The AI never invents skills
If "Kubernetes" isn't in your master resume and the JD demands it, the tailored version will not add it. You'll see a gap flag instead. LightningHire is a copilot, not a fiction writer — fabrications get you rejected in the first technical round, which is worse than not getting the interview.
:::

## Uploading your master resume

1. Go to **Prepare > Resumes** in the sidebar.
2. Click **Upload Resume**.
3. Select a PDF or DOCX.
4. The parser extracts content, roles, dates, and skills into a structured format.

Multiple master resumes are fine if you run parallel tracks — one for engineering roles, another for management, a third for a career pivot. Give them clear names.

:::note What the parser sees
PDFs exported from Word, Google Docs, or Pages all work. Scanned-image PDFs and heavily designed one-pagers with multi-column layouts can trip parsing — if that happens, the UI shows you which sections didn't parse cleanly and lets you paste the raw text.
:::

## Tailoring for a specific role

Two ways in:

1. **From an application** — open the pipeline card, click **Tailor resume**. The JD is pre-filled.
2. **From the Resumes page** — click **Tailor**, pick the master, paste the JD.

Then:

1. Review the AI's proposed edits. Each change is explained — "moved payments experience to top because JD lists it as core requirement."
2. Accept, reject, or adjust individual changes. You know your experience; the AI doesn't know your nuance.
3. Download as PDF or DOCX.

## Match scoring

Every resume paired with a job description gets a match score from 0 to 100. The score appears:

- On the resume card in the library.
- On the pipeline application detail page.
- During tailoring, updating as you accept or reject edits.

### How to read the score

| Score | What it means | What to do |
|---|---|---|
| 90+ | Strong alignment, minimal tailoring needed | Submit the master or a light tailor |
| 70–89 | Solid baseline, specific gaps | Tailor, review gap flags |
| 50–69 | Real gaps in keyword coverage | Tailor carefully, decide if the role fits |
| < 50 | Material mismatch | Reconsider applying, or invest in honest resume updates |

:::tip Match score is a tool, not a verdict
An 85 doesn't guarantee an interview, and a 65 doesn't guarantee a rejection. Treat it as a signal about keyword alignment — hiring decisions involve judgment, timing, referrals, and a dozen factors the score can't see.
:::

## Organizing your resumes

The Resumes page offers three views:

- **Grid** — visual cards, one per resume. Good for a quick scan.
- **List** — compact table. Good when you have twenty tailored versions and want to sort by date or score.
- **Tree** — groups tailored versions under their parent master. Good for understanding which versions came from which base.

You can also:

- Search by file name or company.
- Sort by date, score, or status.
- Tag for saved views (e.g., "product-role track", "remote only").

## Resume habits that compound

- **Update the master quarterly.** Not monthly (overkill), not annually (you forget things). Add new accomplishments as they happen.
- **Tailor for every serious application.** Generic resumes get filtered. A tailored version that mirrors the JD's language measurably improves ATS pass-through.
- **Keep bullets quantified.** "Led migration" is weaker than "Led migration of 12-service monorepo, cutting build time from 14 to 3 minutes." Numbers survive six-second scans.
- **Review AI edits critically.** Accept what's accurate. Push back on phrasing that doesn't sound like you. Your voice is part of the signal.
- **Don't chase the score.** A 92 with fabricated keywords is worse than an 82 that's honest.

## Common questions

**Can I edit tailored resumes after generating?** Yes. The editor is inline — adjust any bullet, summary, or header.

**What about cover letters?** Cover letters are drafted separately from the pipeline application detail page, using the same master resume plus JD combination. See the [pipeline guide](/docs/seeker/pipeline).

**Does LightningHire store my resume?** Yes, in your account. You control it — delete anytime. It's used by you and by the AI features you trigger; it's not shared with third parties or sold.

## Related

- [Pipeline](/docs/seeker/pipeline) — where resumes attach to applications
- [Company intel](/docs/seeker/company-intel) — research the company before you tailor
- [Getting started](/docs/seeker/getting-started) — if you're new, start here
