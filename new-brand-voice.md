# LightningHire — Brand Voice Guidelines

> **Source basis:** Synthesized from marketing pages (`src/app/(marketing)/page.tsx`, `extension/page.tsx`, `login/page.tsx`), strategy docs (`docs/GTM-PLAN.md`, `RECRUITER-MVP.md`), and product framing in `docs/engineering-overview.md`. No formal brand document exists yet — these guidelines are **inferred from shipped copy** and should be treated as v1. v1.1 (2026-04-15): resolved all 8 open questions via full codebase audit of errors, emails, recruiter copy, and AI prompts.

---

## 1. Brand Essence

**LightningHire is an AI-powered interview & job-search copilot** — for job seekers who freeze up, get lost in tabs, and don't know what to say about salary; and for recruiters who need to run honest, organized hiring loops without drowning in tools.

**One-line positioning:** *Stop guessing. Start winning interviews.*

**Philosophy:** We are a **copilot, not autopilot**. The product augments humans at anxious, high-stakes moments — it never pretends to replace their judgment. Every feature exists because a real user told us exactly where they were stuck.

**Confidence:** High. ("Copilot" language, problem-first framing, and user-research origin story appear consistently across all high-signal surfaces.)

---

## 2. Voice Pillars

### 2.1 Confident & Outcome-Focused
We lead with what changes for the user. We make promises we can quantify. We prefer imperatives and specifics over hedged, aspirational language.

- ✅ "Know your leverage before the call."
- ✅ "Users who complete 3+ mock interviews are 2.1x more likely to report receiving an offer."
- ❌ "Our platform may help you feel more prepared for interviews."

### 2.2 Empathetic & Problem-First
We name the user's actual frustration in their own words before we pitch. We validate the real barrier, not the surface complaint.

- ✅ "You know your experience. You just can't articulate it under pressure."
- ✅ "I freeze up on behavioral questions." (used as a section header, in quotes, speaking *as* the user)
- ❌ "Interview preparation is important for career success."

### 2.3 Direct & Specific
We avoid vague encouragement, marketing jargon, and hedged claims. If we can give a number, a step count, or an exact phrase, we do.

- ✅ "Four Steps to Interview Success"
- ✅ "One click sends the job straight to your pipeline."
- ❌ "Optimize your career journey with synergistic AI solutions."

### 2.4 Anti-Hype, Evidence-Backed
We undercut our own marketing. "Results, Not Promises" is the ethos. When we claim a benefit, we back it with user data, concrete mechanisms, or a clear demo.

- ✅ "Results, Not Promises"
- ✅ "No sign-up. No credit card. See how good you really are."
- ❌ "Revolutionary AI that transforms your career!"

### 2.5 Privacy-Transparent (for technical features)
When we ship something that touches user data (extension, integrations, AI), we explain what we do and don't do in plain terms. No dark patterns, no buried disclosures.

- ✅ "No background data collection. Token stored locally, never shared."
- ✅ "Minimal permissions: storage + activeTab."
- ❌ "Industry-leading security practices."

---

## 3. We Are / We Are Not

| We Are | We Are Not |
|---|---|
| A **copilot** (augments the user) | An autopilot, agent, or replacement |
| Problem-first (name the pain in the user's words) | Feature-first (leading with capabilities) |
| Evidence-backed (quantify outcomes) | Hype-driven ("revolutionary," "game-changing") |
| Specific (exact phrases, numbers, steps) | Vague ("helps you prepare," "boosts confidence") |
| Direct and imperative (*Stop guessing.*) | Hedged or corporate (*We believe that…*) |
| Empathetic about anxiety (freezing, panic, overwhelm) | Dismissive ("just use the STAR method") |
| Privacy-transparent (explain what we store) | Generically reassuring ("we take security seriously") |
| Fast, low-friction ("one click," "under a minute") | Enterprise-ceremonial (demos, sales calls, trials with CC) |
| Conversational (questions, contractions, second person) | Academic or formal |
| Honest about limits (free tier is real, not bait) | Paywall-gated on core value |

---

## 4. Tone by Context

| Context | Tone | Example |
|---|---|---|
| **Marketing hero** | Confident, imperative, outcome-first | "Stop Guessing. Start Winning Interviews." |
| **Problem framing** | Empathetic, in user's voice, quoted | "I freeze up on behavioral questions." |
| **Feature descriptions** | Specific, mechanism + outcome | "Get a data-backed negotiation script with your specific numbers, counter-offer strategies, and exact phrases to use." |
| **CTAs** | Low friction, benefit-framed | "Add to Chrome — It's Free" / "Try a mock interview" |
| **Trust / privacy copy** | Transparent, technical-but-readable | "Token stored locally, never shared." |
| **In-product UI** | Concise, action-oriented, second person | "Know your leverage before the call." |
| **Error states** | Instructive, blame-free, one sentence | "Failed to save story" / "Microphone access is blocked. Allow permission, then try again." |
| **Email / reminders** | Useful, contextual, low-pressure | "Most candidates practice in their head. The ones who get offers practice out loud." |
| **Recruiter-facing** | More businesslike, still direct; honest about scope | "Honest product" philosophy from RECRUITER-MVP.md |
| **Long-form (blog, guides)** | Field-tested, practical, recent | "hiring managers and recruiters running interview loops in 2026" |

---

## 5. Vocabulary

### 5.1 Preferred terms (use these)

| Term | Use for | Avoid |
|---|---|---|
| **Copilot** | The product's role | "Assistant," "agent," "AI helper" |
| **AI-powered** | Feature prefix when AI is a differentiator | "AI-driven," "intelligent," "smart" (when describing AI) |
| **Tailored** / **specific** | Personalization | "Customized," "personalized" (weaker) |
| **Prep** / **preparation** | Pre-interview readiness (broader than "practice") | "Training," "coaching" alone |
| **Mock interview** | AI-scored practice session | "Simulation," "roleplay" |
| **Pipeline** | Job seeker's application tracker *and* recruiter's candidate board | "Funnel," "dashboard" (too generic) |
| **Company intel** | Auto-generated context about an employer | "Company data," "insights" |
| **Debrief** | Post-interview analysis | "Recap," "review" |
| **Scoring** | Quantified feedback | "Rating," "grading" |
| **Requisition** | Internal recruiter term for an open role | Don't use in job-seeker copy |
| **Enrichment** | Auto-extracted metadata (internal / recruiter) | Don't surface to seekers |
| **AI actions** | Daily allotment unit on free tier | "Credits," "tokens," "uses" |
| **STAR stories** | Behavioral answer structure | "STAR responses," "STAR examples" |

### 5.2 Banned / discouraged terms

- "Revolutionary," "game-changing," "cutting-edge," "next-gen"
- "Synergy," "leverage" (as a verb), "optimize," "streamline"
- "Solution" (as a noun for our product)
- "Platform" (overused; prefer specific: "copilot," "extension," "pipeline")
- "Empower" / "empowering"
- "Unleash," "supercharge" *(note: "supercharge" appears once in `extension/page.tsx:673` — flag for review, may be an exception)*
- Generic STAR method instruction without personalization

### 5.3 Capitalization & formatting

- **Brand name:** LightningHire (one word, camelCase "H"). Never "Lightning Hire," "lightninghire," or "LIGHTNING HIRE" (except in explicit wordmark contexts).
- **Product surfaces:** Capitalize proper nouns ("Chrome extension," "pipeline" is lowercase unless it begins a sentence).
- **Sentence case** for headings and UI buttons (not Title Case), except hero headlines which use Title Case for impact: "Stop Guessing. Start Winning Interviews."

---

## 6. Audience

### 6.1 Primary: Anxious, organized-but-overwhelmed job seekers
- Freeze up on behavioral questions
- Don't know how to talk about salary
- Applications scattered across LinkedIn, email, portals
- Quality-conscious: want *specific* feedback, not cheerleading
- Skeptical of generic career advice ("just use STAR") — has heard it, it doesn't help

**How we speak to them:** Quote their frustration back at them first. Promise a specific mechanism (script, score, reminder). Prove it (social proof, free trial with no CC).

### 6.2 Secondary: Solo recruiters & small hiring teams
- Running interview loops without dedicated ops
- Juggling requisitions, candidates, scorecards
- Want honest product, not bloated ATS

**How we speak to them:** Businesslike but still direct. Emphasize scope-honesty ("we do X well, we don't do Y yet"). Use recruiter vocabulary (requisition, scorecard, fit score).

### 6.3 Not the audience (today)
- Enterprise TA leaders buying a full ATS replacement
- Passive job browsers not in active search
- Career coaches / L&D buyers (future potential, not current voice target)

---

## 7. Signature Patterns

Patterns that recur enough to constitute a voiceprint — use them deliberately:

1. **Two-beat imperative headlines.** "Stop X. Start Y." → "Stop Guessing. Start Winning Interviews." / "Stop copying and pasting. Let the extension handle the busywork."
2. **User-quote section headers.** Put the problem in first-person inside quotes: *"I freeze up on behavioral questions."*
3. **Numbered, specific step counts.** "Four Steps to Interview Success." Not "Easy Steps" or "A Few Steps."
4. **Anti-hype subheaders.** "Results, Not Promises." "Not another generic career tool."
5. **"No X. No Y." trust stacks.** "No sign-up. No credit card." / "No background data collection."
6. **Mechanism + outcome pairs.** Don't just promise the outcome; show the mechanism. "Get a data-backed negotiation script with your specific numbers, counter-offer strategies, and exact phrases to use. **Know your leverage before the call.**"
7. **"One click" / "under a minute" speed claims** — used when literally true; never inflated.

---

## 8. Examples

### 8.1 Good (on-brand)

> **Stop Guessing. Start Winning Interviews.**
> Answer a real interview question right now and get instant AI feedback. No sign-up. No credit card. See how good you really are.

*Why it works: Two-beat imperative headline + specific mechanism ("real interview question," "instant AI feedback") + anti-friction trust stack + direct challenge ("see how good you really are").*

> **"My pipeline is scattered across tabs and spreadsheets."**
> 20 applications across LinkedIn, email, and company portals. You're losing track of deadlines, forgetting to follow up.
> One pipeline. Every application from saved to offer, with AI-powered prep, automatic reminders, and a clear view of what needs attention today.

*Why it works: User-quote header + concrete scenario (no abstractions) + mechanism + specific outcome.*

### 8.2 Off-brand (rewrite these)

> ❌ "LightningHire is a revolutionary AI-powered platform that empowers job seekers to optimize their interview preparation journey."
>
> ✅ "LightningHire is an interview copilot. Practice with AI-scored mocks, get negotiation scripts with your numbers, and keep every application in one pipeline."

> ❌ "Unleash your career potential with our cutting-edge solution."
>
> ✅ "Know your leverage before the call."

> ❌ "Our intelligent assistant helps you feel more confident."
>
> ✅ "Specific feedback on structure, impact, and relevance — not vague encouragement."

---

## 9. Confidence Scores

| Section | Confidence | Basis |
|---|---|---|
| Brand essence / copilot positioning | **High** | Consistent across page.tsx, login.tsx, extension.tsx, engineering-overview.md |
| Voice pillars (confident, empathetic, direct, anti-hype) | **High** | Strong repeated signal in marketing copy |
| We Are / We Are Not | **High** | Derived from explicit contrasts in copy |
| Tone by context (marketing, CTAs, privacy) | **High** | Direct extraction from shipped pages |
| Tone by context (errors, email, notifications) | **High** | Resolved via codebase audit — see Section 10.1–10.2 |
| Vocabulary (preferred terms) | **High** | Repeated usage across ≥3 files |
| Banned terms | **Medium** | Inferred from absence + philosophy, not explicit list |
| Audience profiles | **High** | Explicit persona framing in GTM-PLAN.md + RECRUITER-MVP.md |
| Signature patterns | **High** | Observed ≥2x each in shipped copy |
| Long-form / blog voice | **Medium** | Limited samples (50-questions guide only) |

---

## 10. Resolved Questions

> Previously open gaps, resolved via codebase audit on 2026-04-15. Each item includes the finding, decision, and canonical examples.

### 10.1 Error & empty-state voice — RESOLVED

**Finding:** ~70 empty states and ~130 error toasts already exist in the codebase. The voice is consistent.

**Decision: Errors are instructive, not apologetic. Empty states are inviting, not dead-end.**

**Error voice rules:**
- Lead with what failed, not "sorry." Use "Failed to…" or "Something went wrong" — never "Oops!" or "We apologize."
- If the user can act, tell them what to do: "Check your browser and macOS settings, then try again."
- If we're retrying automatically, say so: "Analysis timed out — retrying on next cycle."
- Keep it to one sentence where possible. Two max.
- No blame: never "you entered an invalid…" — prefer "Base salary is required."

**Empty-state voice rules:**
- Pattern: **"No X yet"** + one sentence explaining what X does or why it matters + a CTA verb phrase.
- The description should motivate, not just describe: "Prepare 5–8 stories covering leadership, teamwork, failure, and technical challenges." — not "Stories will appear here."
- CTA buttons use imperative + possessive: "Start Your First Session," "Create Your First Story," "Track Your First Opportunity."
- Bolty (the mascot) may appear in global error/empty states for personality, but never in inline toasts.

**Canonical examples:**

| Surface | Copy |
|---|---|
| Global error (`error.tsx`) | "Something went wrong" / "Don't worry, Bolty's on it. Let's try that again." |
| 404 (`not-found.tsx`) | "Page not found" / "Bolty looked everywhere but couldn't find this page. It may have been moved or doesn't exist." |
| Auth error | "Login Failed" / "Something went wrong during sign-in. Please try again." |
| Toast (action failed) | "Failed to save story" |
| Toast (timeout) | "Analysis timed out — retrying on next cycle" |
| Toast (permission) | "Microphone access is blocked. Allow microphone permission in your browser and macOS settings, then try again." |
| Empty state (sessions) | "No sessions yet" / "Start a new session to upload job details, get AI-generated interview prep, and use real-time coaching during your interview." / CTA: "Start Your First Session" |
| Empty state (stories) | "No stories yet" / "Prepare 5–8 stories covering leadership, teamwork, failure, and technical challenges. The AI will suggest the right one when the interviewer asks a behavioral question." / CTA: "Create Your First Story" |
| Empty state (search) | "No jobs found for 'product manager'" / "Try broadening your search or adjusting filters." |

### 10.2 Transactional email & reminder tone — RESOLVED

**Finding:** 15+ email templates ship today across lifecycle drip, interview reminders, weekly digest, streak nudge, win-back, abandoned signup, job recommendations, support, mentorship, and lead magnets. The voice is consistent and on-brand.

**Decision: Email voice is useful, contextual, direct, and low-pressure.** It follows the same pillars as marketing copy but at a lower intensity — less imperative, more conversational.

**Email voice rules:**
- Subject lines are specific and benefit-first: "Practice for a real interview in 5 minutes" — not "LightningHire Weekly Update."
- Body copy leads with the insight or value, not the product: "Most candidates practice in their head. The ones who get offers practice out loud."
- Every email has one clear CTA. Secondary links are allowed but visually subordinate.
- Pressure release: lifecycle and upsell emails include a low-pressure closer: "No pressure — your free account is ready whenever you are." / "No pressure — just didn't want you to hit a wall mid-flow."
- Interview reminders close with warmth: "Good luck! You've got this."
- Win-back emails are honest about why we're reaching out: "We'd love to have you back" — not manipulative urgency.

**Canonical examples:**

| Email type | Subject | Key copy |
|---|---|---|
| Welcome (day 0) | "Welcome to LightningHire, {firstName}" | "Here's what you can do right now: Practice a mock interview and get AI scoring…" |
| Nudge (day 1) | "Practice for a real interview in 5 minutes" | "Most candidates practice in their head. The ones who get offers practice out loud." |
| Interview reminder (24h) | "Interview Reminder: Phone Screen at Google tomorrow" | Detail table + Quick Prep section + "Good luck! You've got this." |
| Streak nudge | "Your 12-day streak is at risk" | "You've been active for 12 days straight — don't break the chain!" |
| Win-back | "50% off to come back to LightningHire" | "We hear you on pricing — that's why we're offering 50% off your first month back." |
| Abandoned signup | "You left before the good part" | "You signed up but didn't get to try anything yet." / "No pressure — your free account is ready whenever you are." |

### 10.3 Recruiter-facing voice differentiation — RESOLVED

**Finding:** The `/recruit` landing page, recruiter pricing page, recruiter onboarding flow, and recruiter dashboard are all shipped with substantial copy. The voice consistently follows a "businesslike + scope-honest" pattern.

**Decision: Recruiter voice is the same pillars (confident, direct, anti-hype, evidence-backed) with these adjustments:**

| Dimension | Job seeker voice | Recruiter voice |
|---|---|---|
| Emotional register | Empathetic, names anxiety | Businesslike, names operational pain |
| Problem framing | In user's voice, quoted ("I freeze up…") | Third-person observation ("Juggling requisitions without dedicated ops") |
| Vocabulary | Pipeline, prep, mock interview, STAR stories | Requisition, scorecard, fit score, pipeline health, enrichment |
| Trust signal | "No sign-up. No credit card." | "The free tier is real. No 14-day trial. No feature walls on day one." |
| Scope honesty | Implicit (free tier limits) | Explicit: "designed for solo recruiters and small teams" |
| CTA style | Benefit-framed ("Try a mock interview") | Action-framed ("Start Free," "Create Free Account") |

**Canonical recruiter examples:**
- "Your pipeline, scored by AI, not spreadsheets."
- "A real recruiting tool, not a toy."
- "Six capabilities that make 'AI-powered recruiting' an honest claim."
- "Ship from day one."
- "Solo recruiters, boutique agencies, startup hiring managers. If you move fast and want AI that actually helps, this is for you."

### 10.4 "Supercharge" — OUT

**Decision: Remove.** "Supercharge" is on the banned list and conflicts with the anti-hype pillar. The single instance in `extension/page.tsx:673` ("Ready to Supercharge Your Job Search?") should be rewritten.

**Recommended replacement** (uses the signature two-beat imperative pattern):

> **Stop Copying and Pasting. Let the Extension Handle It.**

This echoes the existing pattern in the guidelines: "Stop copying and pasting. Let the extension handle the busywork." A cleanup PR should update this line.

### 10.5 Mission / values statement — RESOLVED

**Finding:** The About page (`/about/page.tsx`) already contains a near-mission statement: "Our goal is simple: reduce anxiety, improve clarity, and help you present your best self." The brand essence adds: "copilot, not autopilot" and "every feature exists because a real user told us exactly where they were stuck."

**Decision: Adopt the following as the canonical mission statement (synthesized from shipped copy):**

> **Mission:** LightningHire is an interview copilot that reduces anxiety, improves clarity, and helps people present their best selves at high-stakes career moments. We build every feature because a real user told us exactly where they were stuck — and we prove it works with evidence, not promises. We are a copilot, not autopilot: we augment human judgment, we never replace it.

**Values** (derived from consistent patterns across all surfaces):

| Value | Expression |
|---|---|
| **User-research-driven** | "Every feature exists because a real user told us exactly where they were stuck." |
| **Evidence over hype** | "Results, Not Promises." Quantify outcomes; back claims with data or demos. |
| **Privacy-transparent** | Explain what we collect and don't collect in plain language. No dark patterns. |
| **Speed & low friction** | "One click," "under a minute," "no sign-up, no credit card." |
| **Copilot, not autopilot** | Augment human judgment at anxious moments. Never pretend to replace it. |
| **Scope-honest** | Ship what works. Be upfront about what we don't do yet. |

### 10.6 Brand name treatment in logo/wordmark contexts — DEFERRED

**Decision: Defer to design.** Text treatment is already covered in Section 5.3 (camelCase "H," never split). Visual/logo guidance requires a brand book, which is outside the scope of a voice document. When a brand book is created, reference it here.

### 10.7 Humor / playfulness ceiling — RESOLVED

**Finding:** Bolty the mascot already provides a playfulness precedent in error pages and 404: "Don't worry, Bolty's on it." / "Bolty looked everywhere but couldn't find this page." Lifecycle emails use light wit: "You left before the good part." The core product copy (sessions, scoring, negotiation) stays serious.

**Decision: Wit is allowed in low-stakes surfaces. Never in high-stakes output.**

| Surface | Playfulness level | Example |
|---|---|---|
| 404 / global error | Light wit via Bolty | "Bolty looked everywhere but couldn't find this page." |
| Empty states | Warm invitation, not jokes | "No stories yet. Prepare 5–8 stories…" |
| Streak nudges / lifecycle emails | Casual, motivating | "You left before the good part." / "Don't break the chain!" |
| Marketing hero | Confident challenge, not comedy | "See how good you really are." |
| Interview feedback / scoring | **Zero humor.** Constructive and specific. | "Your answer lacked a specific outcome metric." |
| Negotiation scripts | **Zero humor.** Professional and usable. | Do not joke in copy the user sends to an employer. |
| AI coaching (live session) | **Zero humor.** Concise and actionable. | The user glances at this mid-interview. |

**Bolty is the humor vehicle.** If it doesn't make sense coming from a mascot, it doesn't belong.

### 10.8 Voice for AI-generated output — RESOLVED

**Finding:** 30+ system prompts across the codebase contain explicit voice directives. The pattern is consistent: warm, direct, specific, constructive, never fabricating, preserving the user's authentic voice.

**Decision: Codify the existing pattern as the AI voice standard.**

**AI output voice rules:**

1. **Warm but direct** — "like a friend who happens to be a hiring expert." Not sycophantic, not clinical.
2. **Specific and constructive** — every critique includes what to do differently. Never "good job!" without substance.
3. **Preserve the user's voice** — STAR stories and improved answers should "sound like THEM, just polished." Write in first person when generating content the user will claim as their own.
4. **Never fabricate** — if a detail isn't in the resume or context, use a placeholder ("[your most recent relevant project]") rather than inventing specifics. This appears in 5+ prompts and is non-negotiable.
5. **No hyperbole** — "genuine, confident, not sycophantic. No hyperbole ('amazing,' 'incredible')." (from thank-you email prompt)
6. **Calibrate by stakes:**
   - *Low stakes (demo, first interaction):* "concise and encouraging" — the user is trying the product.
   - *Medium stakes (mock interview feedback, resume tailoring):* "constructive and specific" — the user is preparing.
   - *High stakes (live coaching, negotiation scripts):* "concise and actionable" — the user is mid-conversation or sending to an employer.
7. **Role-specific persona in the system prompt** — "You are a senior interviewer at {company}" or "You are an elite salary negotiation coach." The persona sets expertise level; the voice rules above set tone.

**Canonical voice directives** (use these in new prompts):

| Context | Directive |
|---|---|
| Mock interview scoring | "Be specific about patterns. CRITICAL: preserve the candidate's actual story. It should still sound like THEM, just polished." |
| STAR story generation | "Write in FIRST PERSON. Make the story sound authentic and natural, not generic." |
| Rejection post-mortem | "Warm but direct — like a friend who happens to be a hiring expert. Do NOT be performatively sympathetic. Be real." |
| Negotiation scripts | "The counter-offer email should be immediately usable (not a template with [brackets])." |
| Live coaching | "Be concise — the candidate glances at this mid-conversation." |
| Resume tailoring | "Maintaining a professional, clear tone. NEVER invent skills, experiences, or qualifications the candidate doesn't have." |
| Thank-you email | "genuine, confident, not sycophantic. No hyperbole. 100–160 words. Never longer. Hiring managers skim." |
| Cover letters | "Professional warmth — not robotic, not overly casual. Open with a compelling hook, not 'I am writing to apply for…'" |

## 10.9 Remaining Open Items

1. ~~**"Supercharge" cleanup.**~~ Done. Rewritten to "Stop Copying and Pasting. Let the Extension Handle It." in `extension/page.tsx`.
2. **Brand book / visual identity.** Deferred (Section 10.6). Create when the design team is ready.
3. ~~**Recruiter pricing inconsistency.**~~ Done. All three surfaces (`/recruit`, `/recruit/pricing`, `RECRUITER-MVP.md`) now align to MVP-doc limits: 3 requisitions, 25 candidates/req, 10 AI actions/day.
4. **Mission statement review.** The draft in Section 10.5 should be reviewed with the founding team before being added to the About page or marketing surfaces.

---

## 11. How to Use This Document

- **Writing new marketing copy?** Start with Section 7 (Signature Patterns) and Section 2 (Voice Pillars).
- **Writing in-product UI?** Use Section 4 (Tone by Context) + Section 5 (Vocabulary).
- **Applying to content via AI?** Run `/brand-voice:enforce-voice` — it will load this file automatically.
- **Writing AI prompts?** Use Section 10.8 (AI output voice rules) for system prompt directives.
- **Writing error/empty-state copy?** Use Section 10.1 for patterns and canonical examples.
- **Writing emails?** Use Section 10.2 for tone rules and examples.
- **Found a gap or contradiction?** Add to Section 10.9 and flag in a PR.
