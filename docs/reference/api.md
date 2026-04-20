---
sidebar_position: 1
title: API reference
description: LightningHire HTTP API — authentication, domain structure, rate limits, and example requests for the route handlers under src/app/api.
---

# API reference

LightningHire exposes a REST-style HTTP API powered by Next.js 16 route handlers under `src/app/api/`. Most endpoints back the first-party web app, but the same routes are usable programmatically with an API key. This page documents the auth model, the high-level domains, and enough example requests to get you oriented.

This is a reference, not an exhaustive endpoint list. Endpoints evolve frequently — treat your installed source under `src/app/api/` as the source of truth.

## Authentication

LightningHire supports three auth modes. Each route declares what it accepts via the `apiHandler` wrapper in `@/lib/api/api-handler`.

### 1. Session auth (first-party web app)

Browser requests from the logged-in app carry a NextAuth v5 session cookie. Server-side, route handlers resolve the user via `verifySession()` or `requireUserId()` from `@/lib/session`. You do not need to do anything extra in the browser — the cookie is set at sign-in.

### 2. BYOK API keys (programmatic access)

Bring-your-own-key users and Pro accounts can mint API keys from **Settings → API keys**. Pass the key as a bearer token:

```bash
curl https://lightninghire.com/api/me \
  -H "Authorization: Bearer lh_live_..."
```

Keys are scoped to the issuing user. Revoke a key from the same settings page — revocation is immediate.

### 3. Cron secret (scheduled jobs)

Routes under `/api/cron/*` and a handful of admin endpoints require a shared secret passed as a bearer token. This is set by Vercel Cron via the `CRON_SECRET` env var.

```bash
curl https://lightninghire.com/api/cron/lifecycle-emails \
  -H "Authorization: Bearer $CRON_SECRET"
```

Requests without a valid `CRON_SECRET` receive `401`. See `vercel.json` for the live cron schedule.

:::warning Never expose `CRON_SECRET` to the browser
The secret is server-side only. Rotating it requires redeploying with the new value set in Vercel env vars.
:::

## Response shape

Successful responses are wrapped via `successResponse()` from `@/lib/utils`:

```json
{
  "ok": true,
  "data": { "...": "..." }
}
```

Errors are thrown as typed `AppError` instances from `@/lib/api/errors` and returned as:

```json
{
  "ok": false,
  "error": {
    "message": "Too many requests. Please try again later.",
    "code": "RATE_LIMIT"
  }
}
```

Status codes follow HTTP semantics: `400` validation, `401` unauthenticated, `402` entitlement/paywall, `403` forbidden, `404` missing, `409` conflict, `429` rate-limited, `5xx` server.

## Rate limits

Public endpoints (`/api/leads`, `/api/contact`) apply per-IP in-memory rate limits — for example `/api/leads` caps at 10 submissions per 15-minute window per IP. Authenticated endpoints are gated by [entitlements](/docs/reference/entitlements) rather than a raw rate limit: free-tier users hit feature caps (e.g. 10 AI actions/day), Pro users are uncapped.

## Domains

Endpoints are grouped by domain under `src/app/api/`. The domains below are the ones you'll touch most often.

### Interview & preparation

| Domain | Purpose |
|--------|---------|
| `mock-interview` | AI-scored practice sessions — create, score, list, retrieve. |
| `sessions` / `conversations` / `transcript` | Live interview sessions and their transcripts. |
| `stories` | STAR story CRUD plus `stories/generate` and `stories/build` AI helpers. |
| `questions` / `question-groups` | Interview question bank browsing and search. |
| `interviews` | Scheduled interview events and reminders. |
| `mentorship` | Mentor-matching and session bookings. |

### Job search & tracking

| Domain | Purpose |
|--------|---------|
| `applications` | Job pipeline — candidate's own applications. |
| `jobs` | Job search, job-match scoring, and job details. |
| `companies` / `company-requests` | Company intel, follow-worthy companies, intel requests. |
| `roles` | Recruiter requisitions (job postings being hired for). |
| `candidates` | Recruiter-side candidates attached to requisitions. |
| `resume` / `resumes` / `builder-resumes` | Resume CRUD, tailoring, and the structured builder. |

### AI tooling

| Domain | Purpose |
|--------|---------|
| `analyze` | Deep evaluation of a candidate/job match (A–F scoring). |
| `chat` | RAG-backed chat over the user's data. |
| `context` | Aggregated user context for prompts. |
| `tools` | Point-in-time tools — salary negotiation, offer comparison, etc. |
| `negotiate-feedback` | Feedback loop for negotiation drafts. |

### Outreach & communication

| Domain | Purpose |
|--------|---------|
| `contacts` | Network CRM — contact CRUD. |
| `outreach` / `messages` / `email` | Drafted outreach messages, template rendering, delivery. |
| `templates` | User and system message templates. |
| `notifications` | In-app notification inbox. |

### Account, billing, admin

| Domain | Purpose |
|--------|---------|
| `auth` | NextAuth callbacks and session endpoints. |
| `me` / `user` / `users` / `account` | Current-user profile, preferences, API keys. |
| `billing` / `stripe` / `credits` | Subscription state, Stripe webhook, credit balance. |
| `entitlements` | Bulk feature-access payload for the client. |
| `usage` / `stats` | Per-feature usage counters. |
| `settings` | User settings CRUD. |
| `admin` | Admin-only surfaces (super-admin role required). |

### Lead magnets & marketing

| Domain | Purpose |
|--------|---------|
| `leads` | Lead magnet capture — rate-limited, sends email. |
| `contact` | Contact form submissions. |
| `support` / `feedback` | Support ticket intake and product feedback. |
| `blog` / `courses` / `help` / `public` | Content APIs for marketing surfaces. |
| `unsubscribe` | Email unsubscribe handler. |

### Background & scheduled

| Domain | Purpose |
|--------|---------|
| `cron/*` | Vercel-cron-triggered jobs — lifecycle emails, streak nudges, win-back, abandoned-signup, lead drip, job recommendations. All require `CRON_SECRET`. |
| `job-digest` | Daily digest generator for saved searches. |
| `telemetry` | Client-side telemetry ingest. |

## Examples

### Capture a lead

Public endpoint, IP rate-limited, no auth required.

```bash
curl -X POST https://lightninghire.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "source": "interview-prep-guide",
    "marketingOptIn": true,
    "utm": { "source": "twitter", "medium": "social" }
  }'
```

On success, the user receives an email with the download link and the endpoint returns:

```json
{ "ok": true, "downloadUrl": "https://lightninghire.com/downloads/..." }
```

### Start a mock interview

Authenticated — requires a valid session or API key.

```bash
curl -X POST https://lightninghire.com/api/mock-interview \
  -H "Authorization: Bearer lh_live_..." \
  -H "Content-Type: application/json" \
  -d '{
    "company": "Stripe",
    "role": "Staff Engineer",
    "interviewType": "behavioral",
    "focusAreas": ["leadership", "conflict"]
  }'
```

Free-tier users are capped at **3 mock interviews per 7-day window**. Exceeding the cap returns `402` with an `upgradeHint` string suitable for display.

### Fetch current entitlements

The client uses this to render paywalls. The response includes per-feature usage and remaining counts.

```bash
curl https://lightninghire.com/api/entitlements \
  -H "Authorization: Bearer lh_live_..."
```

See the [entitlements reference](/docs/reference/entitlements) for the full payload shape.

### Trigger a cron job manually

Useful for debugging locally.

```bash
curl https://lightninghire.com/api/cron/lifecycle-emails \
  -H "Authorization: Bearer $CRON_SECRET"
```

## Conventions

- **Route handlers use the `apiHandler` wrapper.** It applies auth, entitlement checks, and error normalization. New routes should not hand-roll these.
- **Validation is Zod-first.** Every request body is parsed with a Zod schema before the handler touches it.
- **Database calls are Mongoose.** Call `connectToDatabase()` from `@/lib/db/connection` before any model operation.
- **AI calls go through `src/lib/ai/ai-client.ts`.** Don't import OpenAI/Anthropic SDKs directly in routes.

## See also

- [Entitlements & tier limits](/docs/reference/entitlements) — free vs. Pro caps by feature.
- [Privacy](/docs/reference/privacy) — what the API stores and what it doesn't.
