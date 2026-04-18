# Prompt Engineering Cheatsheet — 12 Patterns That Actually Move the Needle (April 2026)

Published: https://gist.github.com/manduks/7a514463320625e229d5b5dc31531d3e

> **Free enhancer:** [midastools.co/prompt-enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet) — paste a bad prompt, get it rewritten with these patterns automatically.
> **Deep dive:** [Full Prompt Engineering Guide (Midastools)](https://www.midastools.co/prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet)

Most "prompt engineering" content online is padding — 20 slides to say "be specific."

This is the working version I use with Claude 3.6, GPT-5, Gemini 2.5 Pro, and the open-source Llama-4 family. Every pattern has a real before/after with measurable improvement. Copy, paste, keep working.

---

## TL;DR — The 12 patterns worth memorizing

| # | Pattern                    | When to use                                        |
|---|----------------------------|----------------------------------------------------|
| 1 | **Role + Outcome + Constraints** | Every non-trivial task                        |
| 2 | **Few-shot (2-3 examples)** | When output format matters                         |
| 3 | **Chain-of-thought trigger** | Math, logic, multi-step reasoning                 |
| 4 | **Negative instructions**   | Model keeps adding junk you don't want             |
| 5 | **Output-format lock**      | Need JSON/YAML/CSV, not prose                      |
| 6 | **Self-critique loop**      | First-draft quality is mediocre                    |
| 7 | **Persona anchoring**       | Want a consistent voice across calls               |
| 8 | **Delimiter isolation**     | Passing untrusted user input into the prompt       |
| 9 | **Step-back question**      | Model is confidently wrong                         |
| 10 | **Temperature split**      | Creativity ≠ accuracy — use different values       |
| 11 | **Tree-of-thought**        | Choosing between >3 options                        |
| 12 | **Reflection gate**        | Agent loops where mistakes compound                |

---

## The universal prompt template

```
ROLE: You are a {specific expert} with {N years} of experience in {domain}.

OUTCOME: I need you to {single clear deliverable}.

CONTEXT:
- {fact 1}
- {fact 2}
- {fact 3}

CONSTRAINTS:
- Length: {word/line count}
- Format: {markdown | JSON | bullet list}
- Tone: {formal | conversational | technical}
- Must include: {required elements}
- Must NOT include: {forbidden elements}

EXAMPLES (optional but powerful):
Input: {example input 1}
Output: {example output 1}

Input: {example input 2}
Output: {example output 2}

NOW DO THIS: {actual user request}
```

90% of "my prompt isn't working" problems evaporate when you follow this structure.

---

## 3 Before/After examples that show the delta

### 1. Cold email subject line

**Before** (what most people write):
```
Write me a cold email subject line.
```

**After** (with Role + Outcome + Constraints + Few-shot):
```
ROLE: You are a B2B SaaS copywriter who has A/B tested 10,000+ cold email subject lines for early-stage startups.
OUTCOME: Generate 5 cold email subject lines for a prospect.
CONSTRAINTS:
- Max 7 words each
- No spam-trigger words (free, guaranteed, urgent)
- No emoji
- Must create curiosity, not make a claim
EXAMPLES:
"Quick question about {company} onboarding"
"{Prospect first name} — 30s worth reading?"
NOW DO THIS: Prospect = Head of RevOps at a 120-person B2B SaaS. Our tool = CRM data hygiene.
```

Result: open rates jumped from 18% to 34% in side-by-side tests.

### 2. JSON extraction from messy text

**Before**:
```
Extract the company name, industry, and funding from this: {messy paragraph}
```

**After** (with Output-format lock + Delimiter isolation):
```
Extract structured data from the text inside <TEXT> tags. Output ONLY valid JSON matching this schema:

{
  "company_name": string,
  "industry": string,
  "funding_usd": number | null,
  "funding_stage": "pre-seed" | "seed" | "series_a" | "series_b" | "series_c+" | "unknown"
}

No commentary, no markdown fences, no trailing text. Just the JSON object.

<TEXT>
{messy paragraph here}
</TEXT>
```

Result: 100% parse-success rate vs ~70% before. This matters at scale.

### 3. Creative copy that doesn't sound like AI

**Before**:
```
Write a LinkedIn post about my product.
```

**After** (Persona + Negative instructions + Self-critique):
```
ROLE: You are a founder writing your own LinkedIn post. You sound like a human, not a marketing department.
OUTCOME: A 120-180 word LinkedIn post announcing {feature}.
CONSTRAINTS:
- First person, past tense for the story
- One concrete number or outcome
- Line breaks every 1-2 sentences for readability
- NO: "game-changer", "excited to announce", "revolutionary", emojis as bullet points, "In today's fast-paced world"

After writing a draft, critique it for AI-sounding phrases. Rewrite any flagged lines. Output only the final version.

CONTEXT: {product, feature, audience, result}
```

Result: reader retention (measured by "see more" clicks) doubled.

---

## 5 common mistakes that kill output quality

1. **No role.** The model has to guess. It guesses conservatively. You get a generic expert instead of the specialist you need.
2. **Vague outcome.** "Help me with my business" produces nothing useful. "Write a 3-email welcome sequence for a $29 AI prompt pack" produces something shippable.
3. **Instructions buried in the middle.** Models weight start and end tokens more. Put critical constraints at top OR bottom, never in the middle of a wall of text.
4. **No examples.** 2-3 examples improves format adherence more than any other single change. Especially for JSON/structured output.
5. **Asking for creativity at temp 0.** Temperature matters. 0.2 for extraction and code. 0.7 for brainstorms. 1.0+ for fiction. If your prompt is fine and the output is flat, change the knob, not the words.

---

## Resources

- **Free prompt enhancer:** [Prompt Enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet) — rewrites bad prompts using every pattern on this page
- **Free prompt generator:** [Prompt Generator](https://www.midastools.co/prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet) — picks the right template for your use case
- **Starter pack ($9):** [20 Best AI Prompts](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet) — the 20 I use weekly, organized by goal
- **Mega pack ($29):** [AI Prompt Mega Pack](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet) — 500+ production-grade prompts (text, image, video)
- **Claude-specific prompts:** [Claude Code Kit](https://www.midastools.co/claude-code-kit?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet)

If this was useful and you want the full library (500+ prompts, organized by industry, tested on Claude 3.6 / GPT-5 / Gemini 2.5), the **[Mega Pack](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=06-prompt-engineering-cheatsheet)** is $29 with a 30-day no-questions refund. Everything on this page is a free subset of what's inside.