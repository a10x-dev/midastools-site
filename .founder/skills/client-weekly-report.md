---
name: client-weekly-report
description: Produce a client-forwardable weekly status report — a status update the operator can send to their CLIENT unedited. Fires when the operator asks for "a client report", "weekly report for <client>", "status update for <client>", "what do I send <client>", or types "/client-report". This is the sibling of the walkthrough skill: walkthrough proves work to the operator; this proves work to the person who pays the operator.
metadata:
  type: reference
---

# Client Weekly Report — a status update the operator can forward unedited

**The problem this solves.** The operator (an AI-native solo consultant) runs 2–5 client projects at once. Every week each client wants to know "what did I get for my money this week?" — and every week the operator burns an hour writing that email per client. The report you produce is the money artifact: the operator forwards it to the client **as-is**, with their name on it, and it reads like they wrote it. If it needs editing, it failed.

This is different from the walkthrough. A **walkthrough** proves work to the *operator* — internal, technical evidence allowed. A **client report** proves work to the *client* — the person paying the operator. The client must never see internal jargon, must never know an agent wrote it, and must be able to trust every claim.

## When to produce one

Write a client report when the operator asks for a client-ready status. Trigger phrases:
- "client report" / "/client-report"
- "weekly report for <client>" / "status update for <client>"
- "what do I send <client>" / "write <client>'s update"

Pick the client from the operator's phrasing. If it's ambiguous which client, ask one short question ("Which client — Kelly/BridgeDoc or Oswaldo/Dynamicore?") — do not guess and produce the wrong report.

## Audience discipline (the hardest part)

You are writing **in the operator's voice, to the operator's client.** Before writing, load the operator's voice and firm identity:
- Read `.founder/user.md` for `voice_preferences`, operator name, and red_flags.
- Read `.founder/company-profile` (or the company profile in app settings) for the **firm name** and any client-specific context. If no firm name is set, use the operator's name as the sender and note in chat that setting a firm name will brand future reports.

Then hold these rules:
- **The reader is the CLIENT**, not the operator. Zero internal jargon. No file paths, no commit SHAs, no tool names, no "the agent", no "session", no ".founder/". Translate every technical fact into an outcome the client cares about.
- **Never mention AI or agents** unless the operator's own established voice already does. The client believes their consultant did this work — because the consultant *directed* it. Preserve that.
- **No AI-slop.** No "leverage", "unlock", "seamless", "10x", "revolutionary", "streamline", "robust", "excited to share". No emojis. Match the operator's terse, concrete voice from `user.md`.
- Write like a competent professional emailing a client on Friday: plain, specific, no filler.

## Structure

An HTML deliverable (follow the `html-deliverable-default` skill — anchor to `.founder/deliverables/_design-system.html`, monochrome unless the firm has an accent color) written to:

`.founder/deliverables/YYYY-MM-DD-client-report-<client-slug>.html`

`<client-slug>` is the client name lowercased and hyphenated (e.g. `bridgedoc`, `dynamicore`). The `client-report-` prefix makes it findable and marks it as forwardable, not internal.

Sections, in this order:

1. **Header** — firm name (or operator name), client name, and the week-of date ("Week of Mon DD, YYYY"). Clean, print-ready. This is what a client sees first.
2. **What moved this week** — 3–6 bullets, each an **outcome the client cares about**, each grounded in real evidence from THIS week's work. Pull the evidence from this week's session history, deliverables produced, files/commits touched, and closed tasks — then translate it. "Signed off the patient-intake redesign; it's live for your front-desk staff" — NOT "merged PR #212, edited intake.tsx." Every bullet must trace to something that actually happened this week. If you can't point to real work behind a bullet, cut the bullet.
3. **Open items & risks** — 1–3 honest items. What's not done, what's blocked, what needs a decision or input from the client. This is where trust is earned: a client report that hides a slip is worse than none. Be plain, not alarming.
4. **Next week** — specific, committed items for the coming week. Concrete deliverables, not aspirations. The client should be able to hold you to this.
5. **Sign-off** — one line in the operator's voice, then the operator's name / firm. No hype, no "reach out with any questions!!" filler unless that's genuinely the operator's style.

## The forwardability bar

The single test: **can the operator forward this to the client without changing a word?**

- **Every claim is evidence-linked or omitted.** Before you write "we shipped X", confirm X actually happened this week in the session/deliverable history. No aspirational claims, no rounding up. If it didn't happen, it doesn't go in.
- **A thin week reports thin — honestly.** If little moved this week, say so plainly: fewer bullets, or a one-line note that this was a research/waiting week and here's what's teed up. A short honest report beats a padded one, and padding is the fastest way to lose a client's trust. Do NOT invent bullets to fill space.
- **No internal residue.** Re-read the final HTML as if you were the client. If you spot a file path, a tool name, a SHA, "the agent", or anything that reveals the machinery, rewrite it or cut it.
- **Print/PDF clean.** The operator may PDF this and attach it. Keep it single-column, monochrome (or firm accent), no interactive cruft — it must look right on paper.

## Firm branding convention

Keep branding simple and monochrome by default:
- **Firm name** in the header, taken from `.founder/company-profile` / app company profile; fall back to the operator's name.
- **Optional accent color**: if the company profile or `user.md` specifies a brand/accent color, use it sparingly (header rule, section markers) over the design-system's neutral base. If none is specified, stay fully monochrome — never invent a brand color.
- No logos unless one is provided; a wordmark of the firm name is enough.

## After you write it

Write the file, then point the operator at it in one line (e.g. "Client report for BridgeDoc — `.founder/deliverables/2026-07-02-client-report-bridgedoc.html`. Forward as-is or tell me what to adjust."). It surfaces automatically in the session file rail and Deliverables tab. Do NOT paste the whole report into chat. Offer once to adjust tone/length before they send.
