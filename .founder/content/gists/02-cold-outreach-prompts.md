# 20 Cold Outreach Prompts That Get Replies (AI-Powered, Copy-Paste) — April 2026

Published: https://gist.github.com/manduks/9e63ad23fd1884c3c2293025eb5bbb74

> **Free prompt generator:** [midastools.co/prompt-generator](https://www.midastools.co/prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts) — generates role-specific prompts in one click.
> **Starter pack ($9):** [midastools.co/starter-pack](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts) — our 20 highest-converting prompts across outreach, content, and automation.

I've spent 6 months A/B testing cold email prompts with GPT-5 / Claude 4.5 / Gemini 2.5. Here are the patterns that consistently generate reply rates above industry baseline (~1-3%). Model-agnostic. No plugins required.

---

## The anatomy of a reply-generating prompt

Every winning outreach prompt follows this skeleton:

```
ROLE: You are {domain expert} writing to {specific persona}.

CONTEXT:
- Recipient: {name, title, company, 1 specific detail}
- Sender: {name, company, 1 credibility anchor}
- Goal: {ONE specific outcome — not "build relationship"}

CONSTRAINTS:
- Maximum 75 words
- No superlatives (best, leading, revolutionary)
- No "I hope this email finds you well"
- Include ONE specific observation about their recent work
- Ask a question they can answer with yes or no
- Sign off with first name only

OUTPUT: Plain text email. No subject line. No markdown.
```

Drop this into any SOTA model — you get 10x better output than "write me a cold email."

---

## 3 battle-tested prompts

### 1. Founder → Founder (warm-adjacent intro)
```
You are a startup founder writing to another founder you've never met.

Context:
- Recipient: {{first_name}}, founder of {{their_company}}. They just {{specific_recent_event}}.
- Sender: {{your_name}}, founder of {{your_company}} ({{one_credibility_line}}).
- Goal: get a 15-min call this month to swap notes, not pitch.

Constraints:
- Lead with a specific observation about their recent move (not flattery).
- Explain why you're reaching out in one sentence.
- Propose ONE specific time (e.g., "Thursday 2pm PT").
- Max 60 words.

Tone: Peer-to-peer. No hedging ("would love to", "if possible").
```

### 2. Salesperson → Operator (ICP-tight)
```
You are an enterprise AE at {{your_company}} writing to {{first_name}}, {{their_title}} at {{their_company}}.

Context:
- Recipient pain: {{specific_pain_you_can_verify}}.
- Product wedge: {{one_outcome_metric_with_a_number}}.
- Social proof: {{one_customer_in_their_industry}} achieved {{specific_result}} in {{timeframe}}.

Constraints:
- Open with a question that names their pain.
- One sentence of social proof with a named competitor/peer.
- One CTA: a 15-min call OR a 1-slide memo, their choice.
- No attachments mentioned. No calendar links.
- Max 75 words.
```

### 3. LinkedIn DM (the one that gets opened)
```
You are a peer operator in {{shared_industry}} sending a LinkedIn DM to {{first_name}}.

Context:
- You noticed {{specific_post_or_action}} they did in the last 14 days.
- You have a relevant contrarian take or data point on the same topic.
- Goal: get a reply, not a meeting.

Constraints:
- Reference their specific post/action in the first sentence.
- Share your contrarian take in one sentence.
- End with an open question, NOT a CTA.
- Max 3 short sentences.
- No emojis. No "Hope you're well."
```

---

## 17 more prompts, organized by use case

| Use case | What to plug in | Why it works |
| --- | --- | --- |
| Re-engage cold lead | Last-touch date, new value trigger | Recency + fresh reason |
| Post-webinar follow-up | Specific question they asked | Shows you listened |
| Decision-maker intro | Champion's name + intro context | Social transfer |
| Renewal conversation | Usage data + ROI number | Facts beat persuasion |
| Partnership pitch | Their KPI + your lever | Aligns incentives |
| Podcast guest ask | 2 of their past episodes | Proves research |
| Speaker pitch | Event theme + your 1 data point | Audience fit |
| Investor update | MRR + 1 learning + 1 ask | Consistency compounds |
| Media pitch | Their beat + your data hook | Reporters love numbers |
| Customer interview ask | Incentive + 20-min box | Respects their time |
| Feature-request reply | Their exact request + roadmap | Closes loops |
| Apology email | Specific failure + fix + owner | Accountability over PR |
| Price-increase email | Why + when + grandfather | Transparency wins |
| Win-back email | Why they left + what's new | Self-awareness |
| Upsell email | Usage milestone + next tier value | Earned, not pushed |
| Referral ask | Specific person you want | Makes it easy |
| Thank-you email | Specific thing they did | Non-transactional |

Each of these 17 has a full prompt template in our paid [AI Prompt Mega Pack](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts) ($29, 200+ prompts) or as part of the [$9 starter pack](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts).

---

## 5 common mistakes that tank reply rates

1. **Asking the model to "be creative."** Creativity reads as noise. Give it constraints.
2. **Omitting the recipient's recent action.** This is the #1 differentiator between "AI slop" emails and ones that get replies.
3. **Using "hope" or "just" or "quickly."** These words signal low status. Ban them.
4. **Including a calendar link in the first email.** Conversion killer. Ask first, schedule second.
5. **Letting the model write the subject line.** Subject lines need human judgment. Write it yourself.

---

## Resources

- **Free prompt generator:** [Prompt Generator](https://www.midastools.co/prompt-generator?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts)
- **Free prompt enhancer:** [Prompt Enhancer](https://www.midastools.co/prompt-enhancer?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts) — tightens any prompt in one click
- **$9 starter pack:** [20 best prompts across text/image/video](https://www.midastools.co/starter-pack?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts)
- **$29 Mega Pack:** [500+ prompts across 6 categories](https://www.midastools.co/ai-prompt-mega-pack?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts)
- **Blog:** [How to write AI prompts that convert](https://www.midastools.co/blog?utm_source=gist&utm_medium=github&utm_campaign=02-cold-outreach-prompts)

If you test any of these prompts and want to share results, open an issue on this gist — I reply to every one.