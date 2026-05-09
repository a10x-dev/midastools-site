# Recovery Welcome Email — Source-Aware Variants

**Purpose**: Restore trust and deliver original ask to subscribers whose signup landed in the May 5 GH_GIST_TOKEN bug window. They expected a confirmation + the thing they came for; got radio silence. This email closes that loop.

**Tone rules**
- Honest, not over-apologizing. One sentence on the bug, no engineering details.
- Lead with the deliverable, not the apology.
- No "we value your business" filler. They're free-list subs, not customers.
- Sign as Armando from MidasTools, reply_to iam@armando.mx (matches existing pattern).

**Subject line variants** (use source-matched)
- audit-template / ai-audit  → `Your AI Audit Checklist (delayed delivery)`
- finance-club / boucher / cfo-* → `Your AI Prompt Mega Pack — direct link`
- quiz / q-* → `Your prompt recommendations from MidasTools`
- *-lead (kit-specific lead magnets) → `Your <kit> sample (delayed delivery)`
- prompt-enhancer / prompt-generator → `You're on the list — and one quick note`
- site / fallback → `You're on the MidasTools list — welcome (delayed)`

---

## Body — universal opener (all variants)

```
Hi —

A few days ago you signed up for MidasTools{INTENT_FRAGMENT}. A storage hiccup on our side delayed the confirmation email — sorry about that.

You're properly on the list now. Here's what you came for:

{DELIVERABLE_BLOCK}

{NEXT_FRAGMENT}

If this isn't useful or you didn't mean to sign up, just reply "remove" — no questions, no follow-ups.

— Armando
MidasTools
midastools.co
```

---

## Source → fragment mapping

### `audit-template` / `ai-audit` / `clarity-assessment`

INTENT_FRAGMENT: ` for the AI Audit Checklist`

DELIVERABLE_BLOCK:
```
The 14-Question AI Audit Checklist:
https://www.midastools.co/blog/ai-audit-checklist-coaches-consultants-2026?utm_source=recovery&utm_medium=email&utm_campaign=storage-recovery-2026-05

If you want me to run the checklist on your business directly, the full $997 Clarity Assessment is at:
https://www.midastools.co/ai-audit?utm_source=recovery
```

NEXT_FRAGMENT: `Reply to this email if you want to talk through any of the 14 questions — I read every reply.`

---

### `finance-club` / `boucher-finance-club` / `cfo-accelerator` / `cfo-club` / `cfo-connect` / `partner-cross-promo`

INTENT_FRAGMENT: ` through our finance partner channel`

DELIVERABLE_BLOCK:
```
Your AI Prompt Mega Pack (200+ prompts across 6 categories):
https://www.midastools.co/ai-prompt-mega-pack.zip

Finance-specific samples to start with:
- Board Narrative Builder (Business Operations track)
- Scenario Model 3 Cases (Business Operations track)
- Investor Update — MRR edition (SaaS Founder track)
```

NEXT_FRAGMENT: `If the bundle is useful and you want the full set of 7 specialized kits ($97 → $29/kit avg), it's at midastools.co/all-kits-bundle.`

---

### `quiz` (any source starting with `q-` or matching `^quiz`)

INTENT_FRAGMENT: ` after the prompt-recommendation quiz`

DELIVERABLE_BLOCK:
```
Take the quiz again so I can send the right recommendations:
https://www.midastools.co/quiz?utm_source=recovery

The quiz takes 60 seconds and outputs the 3 prompts (out of 200+) that match your role and use case.
```

NEXT_FRAGMENT: `If you already know what you want, the full Mega Pack is midastools.co/ai-prompt-mega-pack ($29).`

---

### `<kit>-lead` (e.g. `claude-code-kit-lead`, `email-marketing-kit-lead`, etc.)

INTENT_FRAGMENT: ` for the {KIT_DISPLAY_NAME} sample`

DELIVERABLE_BLOCK:
```
Your free {KIT_DISPLAY_NAME} sample:
https://www.midastools.co/{KIT_SLUG}?utm_source=recovery#preview

Inside you'll find 3 ready-to-use prompts from the full kit. Copy-paste into Claude or ChatGPT — they're plug-and-play.

If you want the complete kit ({KIT_PROMPT_COUNT}+ prompts), it's at midastools.co/{KIT_SLUG} ({KIT_PRICE}).
```

NEXT_FRAGMENT: `Reply if any of the 3 samples don't work for your specific use case — I'll send you a custom variant.`

KIT_MAP (display name | slug | prompt count | price):
- claude-code-kit | claude-code-kit | 80 | $39
- email-marketing-kit | email-marketing-kit | 90 | $29
- saas-founder-kit | saas-founder-kit | 100 | $39
- resume-career-kit | resume-career-kit | 125 | $29
- presentation-kit | presentation-kit | 75 | $29
- social-media-kit | social-media-kit | 110 | $29
- (default if unmapped) | <slug> | many | $29

---

### `prompt-enhancer` / `prompt-generator` / any free-tool source

INTENT_FRAGMENT: ` after using one of our free tools`

DELIVERABLE_BLOCK:
```
You're already using the free tools — no asset to deliver.

But here's what you missed in the gap: a curated list of our 22 free tools, sorted by use case.
https://www.midastools.co/tools?utm_source=recovery

Most-used by our existing list:
- Prompt Enhancer (turns rough prompts into precise ones): /prompt-enhancer
- Buyer Intent Generator (B2B sales prompts): /buyer-intent-generator
- Image Prompt Pack preview: /ai-image-prompt-pack
```

NEXT_FRAGMENT: `If you want the paid Mega Pack (200+ prompts, $29), it's at midastools.co/ai-prompt-mega-pack.`

---

### `site` / unknown / fallback

INTENT_FRAGMENT: `` (empty — don't claim to know intent)

DELIVERABLE_BLOCK:
```
Since I'm not sure exactly what you signed up for, here's our most-requested asset:

Free 14-Question AI Audit Checklist:
https://www.midastools.co/blog/ai-audit-checklist-coaches-consultants-2026?utm_source=recovery

And the full 22 free tools list:
https://www.midastools.co/tools?utm_source=recovery

If there's a specific tool or kit you signed up for, reply with its name and I'll send the direct link.
```

NEXT_FRAGMENT: `Replies go straight to my inbox.`

---

## Idempotency rule

Each recovered subscriber gets ONE recovery-welcome email — never two. The fire script logs to `.founder/state/recovery-welcomes-sent.json` (gitignored) and skips emails already in the log on re-runs. If a sub later becomes a paying customer, the standard webhook nurture takes over from there.

## When to send

- Within 4 hours of `recover-storage-failed.py merge --apply` running successfully.
- NOT during the May 14 decide-day window — wait until after if recovery happens to land then (avoid noise on the strategic day).
- Resend at default rate; no batching needed at <50 subs.

## Reply-handling

- "remove" / "unsubscribe" → manual remove from gist within 30 min, no further contact.
- "what was this for?" → reply with shorter version of the recovery + their inferred intent.
- "I want the kit / I want to talk" → fire reply-handling-playbook.md normal flow.
- silence → standard nurture starts on next scheduled cron (no special followup).
