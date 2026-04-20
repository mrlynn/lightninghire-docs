---
sidebar_position: 8
title: Bulk import
description: Import multiple candidates from a CSV spreadsheet or a batch of resume files into a LightningHire requisition.
---

# Bulk import

Adding candidates one at a time works for a small pipeline. When you are starting a new requisition with an existing candidate set — a LinkedIn Recruiter export, an agency spreadsheet, or a folder of resumes — bulk import gets you to a running pipeline in one operation.

---

## Two import modes

LightningHire supports two bulk import workflows:

| Mode | Input | Best for |
|---|---|---|
| **Spreadsheet** | CSV or Excel file (.csv, .xlsx) | Structured lists with name, email, title, source |
| **Resume batch** | Multiple PDF files | Uploading a folder of resumes directly |

Both modes route through the same 4-step wizard: Upload → Map & Review → Configure → Results.

---

## Spreadsheet import

### Supported formats

- CSV (UTF-8 encoding recommended)
- Excel (.xlsx)

### Required columns

At minimum, a spreadsheet row needs a name to create a candidate record. All other fields are optional but improve profile completeness.

| Field | Required | Notes |
|---|---|---|
| `name` | Yes | Full name or first + last in separate columns |
| `email` | No | Used for deduplication |
| `title` | No | Current job title |
| `company` | No | Current or most recent employer |
| `linkedin` | No | LinkedIn profile URL |
| `phone` | No | Contact phone number |
| `source` | No | Source label (e.g., "LinkedIn", "Referral") |
| `notes` | No | Imported as a note on the candidate profile |

### Column mapping

LightningHire reads your spreadsheet headers and suggests column mappings automatically. In the Map & Review step, review the suggestions and correct any that are wrong. Unmapped columns are ignored — they are not imported.

### Deduplication

Before import, LightningHire checks for existing Person records with a matching email address. Duplicate rows are flagged in the preview table. You can choose to skip duplicates (default) or import and merge.

### Preview and selection

After mapping, a preview table shows every row that will be imported. You can deselect individual rows before confirming. The preview shows the parsed values that will be written — review it before proceeding.

---

## Resume batch import

Upload multiple PDF resumes at once. LightningHire parses each file and creates a candidate profile from the extracted content.

### How it works

1. Click **Import Candidates** from the candidates list or requisition pipeline.
2. Select **Resume batch** mode.
3. Drag and drop PDFs, or click to select files. Multiple files can be selected at once.
4. LightningHire parses each resume and shows a preview card per candidate.
5. Review the parsed results. Files that could not be parsed are listed with the error.
6. Confirm to create candidate profiles.

### Parse quality

Resume parsing extracts name, current title and company, detected skills, work history, and contact information where present. Parse quality varies by resume format — heavily graphical or scanned PDFs parse less reliably than text-based PDFs.

Files that fail to parse are reported in the Results step with a per-file error message. They are not imported. You can add those candidates manually.

---

## Configuring the import

Before confirming, the Configure step lets you:

**Assign to a requisition** — select an existing active requisition to assign all imported candidates to, or type a new role name to create a requisition on the fly.

**Auto-evaluate** — if enabled, LightningHire will automatically generate AI fit scores for imported candidates after the import completes. Each fit score uses one AI action from your daily pool. With 10 AI actions per day on the free tier, auto-evaluate is most useful when you are importing a small batch.

If you disable auto-evaluate, you can generate fit scores individually from each candidate's detail page at your own pace.

---

## Import quotas

Free tier: 25 candidates per requisition.

The import wizard shows your remaining quota for the selected requisition before you confirm. If the import would exceed the limit, you will be prompted to reduce the selection or choose a different requisition.

Candidates imported against one requisition do not count against another requisition's quota.

---

## Import results

After confirmation, the Results step shows:

- **Created** — new candidate profiles created
- **Skipped** — rows skipped due to duplicates or missing required fields
- **Duplicates found / skipped** — existing records detected by email match
- **Errors** — rows that could not be processed, with per-row error messages

Download the results summary from this screen if you need to track which rows failed.

---

## After import

Imported candidates land in the **Sourced** stage of the assigned requisition. From there, use the pipeline board to move them through stages, generate fit scores, and add scorecards as interviews proceed.

---

## Related pages

- [Candidates](./candidates.md) — adding candidates manually and single-file resume upload
- [Pipeline](./pipeline.md) — pipeline board and stage management
- [Fit scores](./fit-scores.md) — AI scoring after import
- [Requisitions](./requisitions.md) — setting up the target requisition before import
