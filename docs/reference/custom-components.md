---
sidebar_position: 3
title: Custom MDX components
description: Reference for the custom MDX components shipped with the LightningHire docs site — FeatureCard, CardGrid, InfoBox, APIEndpoint, Steps, Screenshot, and Tabs.
---

# Custom MDX components

The docs site ships a small set of custom components you can drop into any `.md` or `.mdx` page. They're registered globally in `src/components/MDXComponents/index.js` and styled via `styles.module.css`, so no import is needed in the page itself.

Use these components to structure reference and how-to content. For prose, plain Markdown is still the right default.

## FeatureCard

A highlight card for a single feature. Pairs well with `CardGrid` to build a landing section.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | yes | Card heading. |
| `description` | string | yes | Supporting copy — one or two sentences. |
| `link` | string | no | Optional target URL. When set, renders a "Learn more" button. |

### Usage

```jsx
<FeatureCard
  title="Mock interviews"
  description="AI-scored practice sessions tailored to the company, role, and question type."
  link="/docs/guides/mock-interviews"
/>
```

## CardGrid

A responsive grid container for `FeatureCard` (or any children). Collapses to a single column on narrow viewports.

### Usage

```jsx
<CardGrid>
  <FeatureCard
    title="Pipeline"
    description="One place for every application from saved to offer."
    link="/docs/guides/pipeline"
  />
  <FeatureCard
    title="STAR stories"
    description="Build a library of behavioural answers the AI can surface on demand."
    link="/docs/guides/stories"
  />
  <FeatureCard
    title="Negotiation coach"
    description="Data-backed counter-offers with your specific numbers."
    link="/docs/guides/negotiation"
  />
</CardGrid>
```

## InfoBox

A callout for side-channel information. Use sparingly — one or two per page maximum.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | no | Optional heading shown above the content. |
| `type` | `"info"` \| `"warning"` \| `"success"` \| `"danger"` | no | Visual variant. Defaults to `info`. |
| `children` | node | yes | Body content — can be Markdown, JSX, or plain text. |

### Usage

```jsx
<InfoBox title="Free trial" type="success">
  Pro includes a 7-day free trial. No credit card required.
</InfoBox>

<InfoBox title="Heads up" type="warning">
  Revoking an API key takes effect immediately. In-flight requests using the
  revoked key will fail.
</InfoBox>
```

:::tip Docusaurus admonitions
For simple callouts, the built-in `:::note` / `:::tip` / `:::warning` / `:::danger` admonitions are usually easier. Reach for `InfoBox` when you need a titled callout inside custom layouts.
:::

## APIEndpoint

A compact row for documenting a single HTTP endpoint — method, path, one-line description, and an optional auth badge.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `method` | `"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` | yes | HTTP method. Case-insensitive; drives the colour of the method pill. |
| `path` | string | yes | Endpoint path, typically starting with `/api/`. |
| `description` | string | yes | One-line description of what the endpoint does. |
| `auth` | boolean | no | When `true`, appends a "Requires Authentication" badge. |

### Usage

```jsx
<APIEndpoint
  method="POST"
  path="/api/mock-interview"
  description="Start a new AI-scored mock interview."
  auth
/>

<APIEndpoint
  method="GET"
  path="/api/entitlements"
  description="Fetch the current user's per-feature access and remaining quota."
  auth
/>

<APIEndpoint
  method="POST"
  path="/api/leads"
  description="Capture a lead magnet submission. Rate-limited by IP, no auth."
/>
```

Pair an `APIEndpoint` row with a following code block showing the request body and a sample response.

## Steps / Step

Numbered instructions. `Steps` is the container; each numbered step is a `Step` child with a `title`.

### Props — Steps

| Prop | Type | Description |
|------|------|-------------|
| `children` | node | One or more `<Step>` elements. |

### Props — Step

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | yes | Step heading. |
| `children` | node | yes | Step body — Markdown or JSX. |

### Usage

````jsx
<Steps>
  <Step title="Create a new API key">
    Navigate to **Settings → API keys** and click **Create key**. Give the key
    a descriptive name so you can identify it later.
  </Step>
  <Step title="Copy the key immediately">
    Keys are shown only once. Store yours in a password manager or env vault
    before leaving the page.
  </Step>
  <Step title="Use the key as a bearer token">
    ```bash
    curl https://lightninghire.com/api/me \
      -H "Authorization: Bearer lh_live_..."
    ```
  </Step>
</Steps>
````

## Screenshot

A figure with an optional caption. Prefer this over raw `<img>` so captions and styling stay consistent.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | string | yes | Image URL or imported asset path. |
| `alt` | string | no | Alt text. Falls back to `caption` when omitted. |
| `caption` | string | no | Visible caption under the image. |

### Usage

```jsx
<Screenshot
  src="/img/screenshots/pipeline-overview.png"
  alt="LightningHire pipeline board with columns for Saved, Applied, Interviewing, and Offer."
  caption="The pipeline board groups applications by status."
/>
```

:::warning Always include alt text
Every screenshot needs either `alt` or `caption`. Screen readers and search engines both depend on it.
:::

## Tabs / TabItem

Re-exported from Docusaurus's `@theme/Tabs`. Use when the same content has distinct variants — operating systems, runtimes, languages.

### Usage

````jsx
<Tabs>
  <TabItem value="curl" label="curl" default>
    ```bash
    curl https://lightninghire.com/api/me \
      -H "Authorization: Bearer lh_live_..."
    ```
  </TabItem>
  <TabItem value="node" label="Node.js">
    ```ts
    const res = await fetch("https://lightninghire.com/api/me", {
      headers: { Authorization: `Bearer ${process.env.LH_API_KEY}` },
    });
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ```python
    import httpx
    r = httpx.get(
        "https://lightninghire.com/api/me",
        headers={"Authorization": f"Bearer {LH_API_KEY}"},
    )
    ```
  </TabItem>
</Tabs>
````

Set `default` on the tab you want open on first render. `value` must be unique within a `Tabs` block.

## Composition tips

- **One hero component per page.** Don't stack `CardGrid`s back-to-back — the page starts to feel like a landing page instead of docs.
- **`APIEndpoint` + code block is a strong pattern.** Row, then request/response example, then a short paragraph of notes.
- **Keep `InfoBox` short.** If the callout runs to three paragraphs, it belongs inline in the prose.

## See also

- [Docusaurus MDX docs](https://docusaurus.io/docs/markdown-features/react) — base MDX features.
- Source: `src/components/MDXComponents/index.js`, `src/components/MDXComponents/styles.module.css`.
