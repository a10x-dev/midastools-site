---
name: acquisition-scout
description: Draft-only acquisition work in the operator's own channels. The agent browses the operator's logged-in LinkedIn/X/communities, finds conversations where the ICP is actively asking for what the product does, and drafts replies/DMs in the operator's voice. Every outward send hits the safety gate and PARKS for approval — nothing is ever sent without the operator's explicit tap. NOT scheduled by default: the operator arms it by adding a SCHEDULE.md line (instructions below) or by asking "run an acquisition scout".
allowed-tools: mcp__playwright__*, Read, Write, Glob, Grep
---

# Acquisition Scout — the agent drafts, the human releases

The oldest bottleneck in this company's memory is "no authorized acquisition
channel". This skill is the authorized shape: the agent does the finding and
the writing; the human does exactly one thing — approve or deny each send from
their phone. Drafted-by-agent, released-by-thumb.

## When this fires

- The operator asks: "run an acquisition scout", "find me conversations",
  "draft some outreach".
- A `SCHEDULE.md` entry the OPERATOR added themselves (see "Arming", below).
  Never self-schedule this skill.

## Procedure

1. **Know the ICP before touching the browser.** Read MISSION, STATE, and
   `.founder/customers/` — who pays, what pain, what vocabulary they use.
   If the ICP is genuinely unclear, stop and ask; drafts aimed at nobody are
   worse than no drafts.
2. **Scout logged-in surfaces** with the internal browser: LinkedIn search,
   X search, relevant communities the operator's account can see. Look for
   people ACTIVELY describing the problem the product solves — questions,
   complaints, "anyone know a tool for…". Recency beats reach.
3. **Shortlist at most 5 conversations.** For each: who, where (URL), what they
   said, why they fit the ICP.
4. **Draft the reply or DM in the operator's voice** — read
   `.founder/user.md` for voice rules first. Terse, concrete, no hype
   vocabulary, no AI-slop adjectives, lead with something useful to THEM.
   A good draft would be worth sending even if the product didn't exist.
5. **Attempt the send in the browser.** The safety gate will park it for
   approval — that is the designed path, not an error. Do not look for ways
   around the gate. Ever.
6. **Write the digest** `.founder/deliverables/YYYY-MM-DD-acquisition-scout.html`:
   a table of the parked drafts (person, context, draft text, where it's
   parked) so the operator can review once and tap through approvals.

## Hard rules

- **Never bypass or retry around the safety gate.** Parked is success.
- **≤ 5 drafts per day, total.** Volume is the failure mode: one bad DM in the
  operator's voice costs more than ten good ones earn.
- **No follow-ups** to anyone who hasn't replied. One touch per person, period.
- **No engagement-farming** (no mass likes/follows/comments). Only genuine
  replies to genuine questions.
- Human-paced browsing; if a platform throws a challenge/CAPTCHA, stop and note
  it — the operator can take over from the Browser panel.

## Arming (operator does this, not the agent)

Add one line to `.founder/SCHEDULE.md`, e.g.:

`- 07:00 | Run the acquisition-scout skill (draft-only; everything parks for my approval) | daily | cofounder | true`

Remove the line to disarm. The skill stays draft-only either way.
