---
sidebar_position: 2
title: Entitlements & tier limits
description: Exact per-feature limits for Free, Pro, Recruiter Free, and Recruiter Pro tiers in LightningHire, pulled from the entitlements source of truth.
---

# Entitlements & tier limits

Every feature in LightningHire is gated by an entitlement check. The source of truth is `src/lib/entitlements.ts` — this page documents the exact numbers shipped in that file. When the code changes, this page is the first thing to update.

The free tier is real — not a 14-day trial or a feature-gated demo. Every paid tier includes a **7-day free trial with no credit card**.

## Tier summary

| Tier | Who it's for | Monthly cost |
|------|--------------|--------------|
| **Free** | Job seekers exploring the product | $0 |
| **Pro** | Job seekers in active interview mode | $29 after a 7-day trial |
| **Recruiter Free** | Solo recruiters trying the hiring workflow | $0 |
| **Recruiter Pro** | Solo recruiters and small hiring teams | Paid, see pricing page |
| **BYOK** | Self-hosted users with their own OpenAI key | $0 |
| **Credits** | Pay-as-you-go ($0.01 / credit) | No subscription |

Pro, BYOK, and active-credit-balance users bypass all numeric caps. BYOK unlocks full feature access by having valid keys saved in **Settings**. Credits unlock full access while the balance is above zero.

:::tip 7-day free trial
Pro includes a 7-day free trial. No credit card required to start. Cancel before the trial ends and you're not charged.
:::

## Job seeker limits

Exact values from `TIER_LIMITS` in `src/lib/entitlements.ts`. `window` is the counting window: `total` = lifetime per account, `week` = rolling 7 days, `day` = calendar day (local reset).

| Feature | Free | Pro | Window | Notes |
|---------|-----:|-----|--------|-------|
| Interview sessions | 10 | Unlimited | total | Live-session history. |
| Mock interviews | 3 | Unlimited | week | AI-scored practice. |
| Job applications | 20 | Unlimited | total | Pipeline entries. |
| Resumes | 3 | Unlimited | total | Stored resumes. |
| Resume tailoring | 1 | Unlimited | total | AI tailoring runs. |
| Saved resume versions | 1 | Unlimited | total | Resume-builder drafts. |
| Tailor resume to job | 0 | Unlimited | total | **Hard-gated for free.** |
| Contacts | 15 | Unlimited | total | Networking CRM. |
| STAR stories | 5 | Unlimited | total | Behavioural-answer library. |
| Job searches | 10 | Unlimited | day | Per-day search quota. |
| Analytics | 1 | Unlimited | total | Limited view for free. |
| Company intel | 3 | Unlimited | total | AI briefings per company. |
| Email templates | 3 | Unlimited | total | AI-generated templates. |
| Outreach messages | 2 | Unlimited | total | AI-drafted outreach. |
| Negotiation coach | 1 | Unlimited | total | Negotiation sessions. |
| Cover letters | 2 | Unlimited | total | AI-generated letters. |
| AI actions | 10 | Unlimited | day | Global daily AI budget. |
| Deep evaluation | 1 | Unlimited | total | A–F match scoring. |
| Auto-pipeline | 1 | Unlimited | total | One-click evaluation runs. |
| ATS PDF generation | 1 | Unlimited | total | Keyword-optimized PDFs. |
| Offer comparison | 1 | Unlimited | total | Multi-offer analysis. |
| AI chat | 5 | Unlimited | day | RAG conversations. |
| Company watch | 3 | Unlimited | total | Job-posting watchers. |
| Gmail / Calendar | 0 | Connected | total | **Hard-gated for free.** |
| Job match | 3 | Unlimited | total | Authenticated job-match searches. |
| Mini-courses | Free-tagged only | All | total | Free-marked courses always accessible. |

### What counts as an AI action

Every request that uses the AI engine counts against the daily `ai_actions` budget: mock-interview generation and scoring, resume creation and tailoring, company intel, negotiation drafts, outreach generation, and live-session coaching.

Browsing the app, adding pipeline entries manually, viewing analytics, and reading help do **not** count.

## Recruiter limits

Recruiters get a different shape: higher session caps for interview-heavy workflows, but job-seeker-only features are zeroed out. Overrides live in `RECRUITER_TIER_OVERRIDES`.

| Feature | Recruiter Free | Recruiter Pro | Notes |
|---------|----|---|-------|
| Open roles (requisitions) | 3 | Unlimited | Per-account. |
| Candidates (total) | 75 | Unlimited | Global pool. |
| Candidates per role | 25 | Unlimited | Per-requisition cap (`FREE_CANDIDATES_PER_REQUISITION`). |
| Interview sessions | 20 | Unlimited | Higher than seeker default. |
| AI actions | 10 | Unlimited | Same daily budget. |
| Applications / resumes / stories / job search / negotiate / cover letter / auto-pipeline / offer comparison | 0 | 0 | **Seeker-only features** — not available on recruiter accounts. |

The per-requisition cap is checked in addition to the global candidate cap. Free recruiters who hit 25 candidates on one role must upgrade or move candidates off that role to add more.

## Hard-gated features

A handful of features have `freeMax: 0` — no amount of waiting unlocks them on free. Upgrade (or add BYOK keys, or credits) to access.

- **Tailor resume to job** — the resume-builder's job-targeted tailoring flow.
- **Google integrations** — Gmail inbox triage and Calendar sync.
- **All job-seeker features on recruiter accounts** — applications, resumes, stories, job search, negotiation coach, cover letters, auto-pipeline, offer comparison.

## The entitlement payload

The client fetches `/api/entitlements` to render paywalls. The response shape (from `EntitlementsPayload` in `entitlements.ts`):

```ts
{
  isPro: boolean;
  isSuperAdmin: boolean;
  isByok: boolean;
  hasByokKeys: boolean;
  hasCredits: boolean;
  creditBalance: number;
  isSelfHosted: boolean;
  role: "free" | "pro" | "super_admin";
  userType: "jobseeker" | "recruiter";
  subscriptionStatus: string;
  currentPeriodEnd: string | null;
  features: {
    [featureKey]: {
      allowed: boolean;
      currentUsage: number;
      limit: number | null;   // null = unlimited
      remaining: number;
      label: string;
      upgradeHint: string;
    }
  };
}
```

`limit: null` means unlimited (Pro, super-admin, BYOK, or credits). `allowed: false` with `remaining: 0` means the user has hit the cap and should see a paywall.

## Self-hosted and BYOK

When `STRIPE_SECRET_KEY` is not set, the app is in self-hosted mode. Paywall copy automatically changes from *"Upgrade to Pro…"* to *"Add your own OpenAI API key in Settings to unlock unlimited access."* — BYOK is the upgrade path.

BYOK users get the same effective access as Pro for feature gating. They pay their own model provider directly; LightningHire never routes their traffic.

## Credits

Credits are pay-as-you-go. 1 credit = $0.01. Packs:

| Pack | Credits | Price |
|------|--------:|------:|
| Starter | 100 | $1.99 |
| Job Seeker | 500 | $7.99 |
| Power | 2,000 | $24.99 |

While the credit balance is above zero, the user has full feature access (same as Pro). AI actions deduct credits at call time. Unused credits never expire. Auto-replenish is opt-in under **Settings**.

## Checking access programmatically

Server-side, use `checkFeatureAccess(userId, feature)`:

```ts
import { checkFeatureAccess } from "@/lib/entitlements";

const access = await checkFeatureAccess(userId, "mock_interviews");
if (!access.allowed) {
  throw new AppError(access.upgradeHint, 402);
}
```

Bulk-fetch all features for the client with `getEntitlements(userId)` — this is what `/api/entitlements` returns.

## See also

- [API reference](/docs/reference/api) — how paywalls surface as HTTP responses.
- Source: `src/lib/entitlements.ts`.
