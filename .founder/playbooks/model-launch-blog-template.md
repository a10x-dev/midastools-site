# Model-Launch Blog Post Template

**Use when**: a tier-1 AI model launches (per `model-launch-response-playbook.md`). Fill in the bracketed slots, save as `pages/blog/{MODEL-SLUG}-prompts-{YEAR}.js`, ship in <60 minutes.

Reference post that worked: `pages/blog/claude-opus-4-7-prompts-guide-2026.js` (Apr 22, 2026 — same week as our $97 Shantae sale).

---

## Slot map (replace ALL caps with real values)

| Slot | Example | Notes |
|---|---|---|
| `MODEL_NAME` | "Claude Opus 4.7" | Exact official name — match how the launch announcement spells it |
| `MODEL_SLUG` | "claude-opus-4-7" | URL-safe lowercase |
| `LAUNCH_DATE` | "2026-04-16" | ISO date |
| `MODEL_VENDOR` | "Anthropic" | |
| `COMPETITORS` | "GPT-5.4", "Gemini 3.1", "DeepSeek V3.1" | 2-3 named alternatives |
| `KEY_CAPABILITY_1` | "deep reasoning" | New/improved thing in this model |
| `KEY_CAPABILITY_2` | "150k+ context" | |
| `KEY_CAPABILITY_3` | "tool use with verification" | |
| `JOB_1` | "code review of multi-file diffs" | Specific use case |
| `JOB_2` | "legal-clause analysis" | |
| `JOB_3` | "multi-source SWOT" | |

---

## File header (always exactly this shape)

```javascript
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

// CRITICAL: $97 Bundle + $29 Mega Pack. Do NOT change.
const STRIPE_BUNDLE_97 = 'https://buy.stripe.com/cNi28qdgz7mVb0U8VYcMM07';
const STRIPE_MEGA_29 = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const STARTER_PACK_9 = '/starter-pack';

export default function MODEL_SLUG_CAMEL_CASE() {
  const title = '{MODEL_NAME} Prompts: 12 Templates That Use The New {KEY_CAPABILITY_1} ({YEAR})';
  const description = '{MODEL_VENDOR} shipped {MODEL_NAME} on {LAUNCH_DATE_HUMAN}. 12 copy-paste prompts that take advantage of {KEY_CAPABILITY_1}, {KEY_CAPABILITY_2}, and {KEY_CAPABILITY_3} — for {JOB_1}, {JOB_2}, {JOB_3}, and more.';
  const url = 'https://www.midastools.co/blog/{MODEL_SLUG}-prompts-{YEAR}';
```

---

## Structured-data block (FAQ + Article)

```javascript
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '{LAUNCH_DATE}',
    dateModified: '{LAUNCH_DATE}',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      // EXACTLY 5 questions. Each answer 100-200 words. Honest, specific, no marketing fluff.
      // Slot 1: When should I use {MODEL_NAME} instead of {COMPETITOR}? — model selection
      // Slot 2: What changed vs the previous version? — upgrade narrative
      // Slot 3: What is the best prompt structure for {MODEL_NAME}? — prescriptive
      // Slot 4: How do I reduce cost? — practical
      // Slot 5: Can {MODEL_NAME} do {JOB_1}? — capability honesty
    ]
  }
];
```

---

## Body sections (in order — DO NOT reorder)

### 1. Hero
- `<h1>{MODEL_NAME} Prompts: 12 Templates That Actually Use The New {KEY_CAPABILITY_1}</h1>`
- One-paragraph subtitle (2-3 sentences). What launched, when, what's new.
- **One-sentence value prop**: "Below: 12 copy-paste prompts you can run in {MODEL_NAME} right now."

### 2. Model selection table
A clean HTML/Tailwind table:

| Job | Best model | Why |
|---|---|---|
| {JOB_1} | {MODEL_NAME} | {reason} |
| Short outputs (<800 words) | {Cheaper competitor} | {reason} |
| Voice / multimodal | {GPT-5.4 or alternative} | {reason} |
| Native browsing / fresh data | {Gemini-class} | {reason} |
| Cost-sensitive batch jobs | {DeepSeek/Open-source} | {reason} |

This is **the most-shared section** because it answers "which model do I use?" — high copy-paste value.

### 3. The 12 prompts (the meat)

Each prompt block has:
- `Prompt #N — {1-line job name}`
- `When to use:` 1 sentence
- A code block with the actual prompt
- `Tips:` 1-2 sentences on customization

**Prompt format must include**:
- ROLE slot ("You are a {senior research analyst, senior engineer, etc.}")
- CONTEXT slot
- INPUTS slot (clearly labeled)
- TASK slot (deliverable shape)
- VERIFICATION slot (how to check own work) — **this is what makes the prompt feel premium**

### 4. Common mistakes section (5 bullets)
Each mistake is 1 sentence. Examples:
- "Asking {MODEL_NAME} to do work that Sonnet/Haiku/GPT-mini handles fine — you're overpaying."
- "Not using the VERIFICATION slot — you'll iterate 3x instead of 1x."
- "Pasting in 100 pages of context when the model only needs 5."

### 5. CTA hierarchy (the load-bearing part)

**Primary CTA** (one big card, mid-page after prompts 4-5):
```jsx
<div className="cta-card">
  <h3>Want 250+ prompts like this for every tool?</h3>
  <p>The AI Prompt Mega Pack: $29 lifetime, 250+ expert prompts across ChatGPT, Claude, Midjourney. Used by 23+ subscribers.</p>
  <a href={STRIPE_MEGA_29} className="btn-primary">Get Mega Pack — $29 →</a>
</div>
```

**Secondary CTA** (bottom of post):
```jsx
<div className="cta-card">
  <h3>Want it all?</h3>
  <p>The MidasTools All Kits Bundle: $97 one-time, 21 lifetime kits + 250+ prompts + every future kit.</p>
  <a href={STRIPE_BUNDLE_97} className="btn-primary">Get Bundle — $97 →</a>
</div>
```

**Tripwire CTA** (sidebar or post-FAQ):
```jsx
<a href={STARTER_PACK_9}>Just want to try? 20 prompts for $9 →</a>
```

### 6. FAQ (mirrors the schema, exactly 5 Qs)

Render the same 5 Qs from the JSON-LD as a visible accordion. Schema requires it to be on the page for Google rich-snippet eligibility.

### 7. Resources section
3-5 links:
- Official {MODEL_VENDOR} announcement
- Our companion gist on gist.github.com
- 1-2 sister blog posts on midastools.co (cross-link the latest 2 prompt-pack posts)

---

## Ship checklist (do all 7 in order)

1. [ ] Save as `pages/blog/{MODEL_SLUG}-prompts-{YEAR}.js`
2. [ ] Run `npx next build` locally — clean exit
3. [ ] Add slug to `pages/blog/index.js` manual list (if there is one)
4. [ ] Add to `public/sitemap.xml` with `<priority>0.9</priority>`
5. [ ] `git add . && git commit -m "blog: {MODEL_NAME} prompts post + sitemap"` then `git push`
6. [ ] After Vercel deploys, ping IndexNow: `curl "https://api.indexnow.org/IndexNow?url=https://www.midastools.co/blog/{MODEL_SLUG}-prompts-{YEAR}&key=..."`
7. [ ] Ship companion gist + Dev.to per playbook (separate 30-min slot)

---

## After-ship (T+24h)

- Pull a `referrer_host` count from `/api/track` — anyone arriving from `news.ycombinator.com`, `chatgpt.com`, or major search engines is the launch wave converting.
- Pull `metrics-snapshot.py` — any Stripe sale within T+72h with no clear inbound source is likely this post (the "Stripe Link one-click cold buy" pattern from Shantae/Arnaud).
- Log result in `.founder/STATE.md` so the next launch has data.

---

## Honesty caveat

The Apr 29 → May 2 sales had **0 attribution** (Stripe Link one-click, no UTM passthrough). This template assumes future launches will produce similar one-click conversions if the funnel is right. The track-blob session_id instrumentation shipped May 9 (commit `e3c0ae6`) should give us cleaner attribution next time — but expect the next data point to still be partial.
