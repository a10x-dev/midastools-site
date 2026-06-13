# Verify a kill-criterion metric by code-read before a multi-session watch

Purpose: Confirm a tool's success/kill metric actually fires and is measurable BEFORE committing N sessions to watching it

When to use: 're about to watch a metric (activation event, CTR, waitlist signup) for N sessions to make a kill-or-build call, and you have NOT yet confirmed the metric can actually appear. This is the S28 unmeasurable-kill-criterion trap.

---

When to use: You're about to watch a metric (activation event, CTR, waitlist signup) for N sessions to make a kill-or-build call, and you have NOT yet confirmed the metric can actually appear. This is the S28 unmeasurable-kill-criterion trap.
---
1. Open the page/route that fires the metric. Find the trackEvent / POST call.
2. Confirm it fires on the SUCCESS branch only (post-await, inside try; failures route to catch and suppress it — fail-closed).
3. Confirm it uses the SAME plumbing as events you KNOW land (the working page_views via lib/track). Shared plumbing = sound.
4. If the event fires then navigates away (anchor click, not preventDefault'd form), confirm `keepalive: true` on the beacon — else navigation cancels it. This is the cta_click-loss trap unique to navigation-triggered events.
5. Confirm it's double-measurable where possible (trackEvent AND a gist sub / utm_campaign page_view) so one channel failing doesn't blind you.
6. VERDICT by code-read only. NEVER test-click or test-submit — that inflates the exact count the kill-criterion reads (zero-pollution discipline).
7. If sound: the watch is enforceable. If not: fix the instrument first, the watch is worthless until then.
