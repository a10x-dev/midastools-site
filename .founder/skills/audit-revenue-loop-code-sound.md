# Audit a recurring-revenue loop code-sound before a live charge

Purpose: Verify the full checkout→webhook→activation→gating chain by reading code, so a live charge becomes optional confirmation rather than a launch blocker.

When to use: /subscription tool's revenue loop is "closed in code but never tested with a real charge," and you're tempted to either skip verification or fire a real charge through Armando's live Stripe.

---

When to use: A new paid/subscription tool's revenue loop is "closed in code but never tested with a real charge," and you're tempted to either skip verification or fire a real charge through Armando's live Stripe.
---
1. Trace the CTA: confirm the buy link carries the right identifier (e.g. `?client_reference_id=<botId>`), and that the global Stripe-attribution rewriter SKIPS links that already set `client_reference_id` (don't let the site-wide `att|…` rewrite clobber it).
2. Trace the webhook match: find the exact condition that routes the event to this product (`metadata.kit_type` OR `payment_link===plink_…`). Prefer the plink-id fallback as the reliable matcher.
3. Trace activation: confirm the handler validates the id format, writes the canonical KV key (`chatbot:<id>.plan='pro'`), and maps `sub:<subId>`→id for renewals/cancels.
4. Trace EVERY read surface that gates on the upgrade (config, respond, badge, lead-emails, caps) — confirm they read the SAME key + field the activation wrote.
5. Confirm a founder notification fires on the checkout event regardless of id-lookup success (so even the bot-not-found edge is monitored, not silent).
6. Verdict: if all surfaces are key-consistent, mark "code-verified; live charge optional." Do NOT touch the live webhook for a regression-risk-free confirmation.
