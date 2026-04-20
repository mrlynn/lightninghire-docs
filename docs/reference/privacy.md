---
sidebar_position: 4
title: Privacy
description: What LightningHire stores, what it doesn't, how AI providers see your data, and how to delete your account. Plain-language privacy reference.
---

# Privacy

LightningHire is built for high-stakes moments — interviews, offers, negotiations. We take the data that flows through those moments seriously. This page explains what we store, what we don't, and the mechanics behind the privacy promises on the product surface.

The canonical legal policy lives at [lightninghire.com/privacy](https://lightninghire.com/privacy). This page is the engineering-level companion — it explains *how* the policy is enforced.

## What we collect

We collect what you give us, plus the minimum technical data needed to run the service.

### From you

- **Account details** — email, name, hashed password (or OAuth identity), plan and billing state.
- **Content you enter** — resumes, job descriptions, pipeline entries, STAR stories, interview transcripts, notes, messages, contacts, and anything else you type or paste into the app.
- **Uploaded files** — resumes, offer letters, documents you attach to pipeline entries.
- **Integration data** — when you connect Gmail or Google Calendar, we access only the scopes you grant at the consent screen. You can revoke access any time from Google's security settings or from our **Settings → Integrations** page.

### Operational signals

- Device and browser type, general log data, and security-related signals (failed-login patterns, abuse detection).
- Per-feature usage counters — the numbers that drive [entitlement](/docs/reference/entitlements) checks.

## What we don't collect

- **No background data collection.** The Chrome extension only reads the page you're actively on. It doesn't run on tabs you haven't interacted with.
- **No selling of personal information.** We never sell data to advertisers, data brokers, or any third party.
- **No training on your content.** Your resumes, transcripts, and messages are not used to train general-purpose models. They're processed to deliver the feature you asked for and no more.

## Resume and document storage

Resumes, offer letters, and other uploaded files are stored in MongoDB Atlas (database name `convopilot`). Access is scoped to your user ID — route handlers check ownership before returning any document.

- Files are encrypted at rest by the storage provider.
- Files are encrypted in transit (TLS) end-to-end.
- Deletion is immediate — when you delete a resume or application, the underlying document is removed, not soft-deleted.

## AI provider flow

LightningHire uses third-party model providers (OpenAI, Anthropic, and optionally Ollama for self-hosted setups) to power AI features. Here's the flow:

1. You trigger an AI action (mock interview, resume tailoring, negotiation draft, etc.).
2. The relevant context — your resume, a job description, a transcript — is sent to the model provider through `src/lib/ai/ai-client.ts`.
3. The provider returns a response. We persist the inputs and outputs you'd expect (your mock interview transcript and score, your tailored resume) and nothing more.
4. Provider-side retention follows the provider's zero-retention or standard-retention terms depending on the endpoint. OpenAI and Anthropic both offer zero-retention for API traffic under their standard terms.

:::tip BYOK — your keys, your traffic
Bring-your-own-key users add their own OpenAI/Anthropic keys in **Settings**. AI calls go directly through those keys under your provider account. LightningHire never proxies BYOK traffic through our infrastructure in a way that exposes it to us.
:::

## Chrome extension privacy

The LightningHire Chrome extension requests minimal permissions.

- **`storage`** — to persist your auth token and preferences locally in the browser.
- **`activeTab`** — to read the job posting on the tab you're currently looking at, only when you click the extension button.

That's it. Specifically:

- **No background data collection.** The extension doesn't run on tabs you haven't interacted with.
- **Token stored locally, never shared.** Your auth token lives in `chrome.storage` on your machine.
- **No third-party analytics in the extension.** Analytics fire only inside the web app, not inside the extension popup.

Uninstalling the extension removes all local storage. Revoking your session from the web app invalidates the token the extension holds.

## Cookies

The web app sets the following cookie categories:

| Cookie | Purpose | Required |
|--------|---------|----------|
| Session (NextAuth) | Keeps you signed in. Httponly, secure, same-site. | Yes |
| CSRF | Cross-site-request-forgery protection. | Yes |
| Preferences | Theme, layout, and similar UI state. | No — cleared on sign-out. |
| Analytics | Aggregate product analytics. Respects Do-Not-Track. | No — opt-out in Settings. |

We don't use third-party ad cookies.

## Who we share data with

Service providers who run parts of the product under appropriate agreements:

- **Hosting** — Vercel (application) and MongoDB Atlas (database).
- **Authentication** — NextAuth with credential and OAuth providers.
- **AI inference** — OpenAI and Anthropic for hosted Pro users; the user's own provider for BYOK.
- **Payments** — Stripe, for subscriptions and credit purchases. Stripe never shares card numbers with us.
- **Email** — transactional email sending.
- **Search** — Typesense, for in-app search indexes.

We share with law enforcement only when legally required, and we'll tell you when we can.

## Retention

- **Active accounts** — we keep your data as long as your account is active.
- **Inactive accounts** — accounts that go 24 months without a sign-in receive a reactivation notice; if ignored, the account and its content are scheduled for deletion.
- **Billing records** — we retain invoices as long as required by tax law (typically 7 years).
- **Backups** — routine backups roll off on a 30-day cycle. Deleted data is removed from primary storage immediately and expires from backups inside the backup retention window.

## Deleting your account

You own your data and can delete it any time.

1. Sign in and go to **Settings → Account**.
2. Click **Delete account**.
3. Confirm with your password.

Deletion is permanent. Your resumes, pipeline, transcripts, stories, messages, and contacts are removed. Billing records are retained only as required by tax law. We'll email a confirmation when the deletion completes.

Need help? The [contact form](https://lightninghire.com/contact) routes to a human.

## Your rights

Depending on where you live (GDPR, CCPA, and similar), you may have rights to access, correct, port, or delete your personal data. To exercise any of these, use the contact form above — we respond within 30 days.

## Changes to this page

When we change behaviour that affects privacy, we update this page and the legal policy at [lightninghire.com/privacy](https://lightninghire.com/privacy). Material changes are announced in the [changelog](/docs/reference/changelog) and — when they affect you directly — by email.

## See also

- Legal policy: [lightninghire.com/privacy](https://lightninghire.com/privacy)
- Terms: [lightninghire.com/terms](https://lightninghire.com/terms)
- [Changelog](/docs/reference/changelog) for behaviour changes.
