# Larissa Conversion Trace Attempt — May 23 2026

**Slot**: Saturday May 23, 15:48 local / 22:48 UTC (S32 continuation)
**Trigger**: User pushed "highest-impact task" after S32 honest-close; +1 real-human homepage signup landed in the 75min gap since S31.
**Goal**: Reconstruct `larissadiogoalv...`'s buyer journey via KV (mirror of S27 Cmyrick25 method).
**Outcome**: Could NOT identify her session. Surfaced a capability gap instead.

## What I tried

1. Grep KV (953 events, 76 from today) for "larissa"/"diogo" → 0 matches (emails not in track payloads).
2. Filter today's events by `server_country` — looked for BR/PT given the Portuguese-sounding name.
   - **Today's country mix (May 23):** IN 19 / SG 12 / CN 12 / US 9 / NL 8 / SE 3 / BD 2 / KZ 2 / SC 2 / VN/SK/FI/IL/TR/YE/PK 1 each
   - **Zero BR / PT / AR / MX / CL events all day.** Name is Portuguese but the geo doesn't appear.
3. Filter to sessions touching `/` (homepage, since source=homepage):
   - 6 homepage-touching sessions today, ranging 1-2 events
   - All 1-2 event sessions, no multi-page exploration like Cmyrick25's 41-event arc
   - Candidates: CN/Windows 07:26 · NL/Windows 09:17 · IN/Android 12:50 (2 ev) · IN/Android 13:17 · SC/Mac 21:19 (submitaitools bot) · PK/Windows 22:39
4. Looked at ALL multi-event sessions today (11 total) — none look like Larissa's likely journey shape (no Portuguese-language hints, no obvious match).

## The structural finding

`_app.js` only fires `trackEvent('page_view', ...)` on route changes + `cta_click` on Stripe-buy anchors. **`/api/subscribe` is NOT instrumented in `/api/track`.** So when a visitor:
- Lands on `/` → page_view fires (visible in KV)
- Submits the email form → POST to `/api/subscribe` (writes to gist) → NO KV event fired
- Bounces → no further KV events

Verification: KV event types across 953 events lifetime: `page_view: 949 | cta_click: 3 | smoke_test: 1`. Zero `subscribe_submit` / `form_submit` / `lead_capture` events.

## Why Cmyrick25 was reconstructible and Larissa is not

| Dimension | Cmyrick25 (May 20) | Larissa (May 23) |
|---|---|---|
| Source | kit-page-capture | homepage |
| Post-signup behavior | 17 min, 41 events, multi-page (5+ repeat visits to /ai-income-blueprint) | none observed (likely bounced) |
| Reconstructible | YES — session_id correlated via 41-event KV trail matched to gist signup timestamp + country + UA | NO — at most a single page_view event, indistinguishable from any other 1-event homepage visit today |

The reconstruction was made possible **by post-signup browsing**, not by the form submit. Most real-human signups are likely fast-convert-and-bounce; only Cmyrick25's research-mode exploration was unusual.

## Strategic implications

1. **Don't generalize from Cmyrick25's pattern.** Her 17-min exploration was visibly engagement-deep; treating it as "the real-human pattern" risks anchoring on a non-representative sample.
2. **Day-1 nurture engagement is the actual signal on Larissa.** Auto-fires Sunday morning. Open/click rate + reply tells us shape regardless of source-attribution gap.
3. **N=2 in 4 days is trajectory data.** Real-human conversion rate ≈ 1 every 2 days at current homepage traffic. NOT a strategy change.
4. **Source-attribution-gap caps our buyer-intel ceiling.** Without subscribe-form events in KV, we can identify maybe 1 in 5 real conversion paths (only the deep-exploration outliers).

## Capability gap (logged)

**`/api/track` instrumentation should fire on /api/subscribe form submission** so every signup has a session_id correlatable to KV events. ~10 lines in either:
- `_app.js` global form-submit capture listener (mirror of the cta_click pattern, fire `subscribe_submit` on `<form action="/api/subscribe">` or on form whose first text input is type=email), OR
- `pages/api/subscribe.js` server-side: include the request-side fingerprint + write a sibling event to KV (also handles AdBlock-extension cases where client-side `/api/track` fires get blocked).

**Server-side is more robust** because AdBlock + privacy extensions block client-side analytics ~5-15% of the time but rarely block first-party form submissions. The /api/subscribe handler already has the IP + UA + geo from the request — adding a 5-line KV write extension wraps the existing fire-and-forget pattern.

**Cost**: ~30 min including smoke-test (fire real signup with fake email → verify event lands in KV with session_id + path). **Reversibility**: full (delete the 5 lines).

**Why deferred to Monday**: touching the highest-volume write-path on Saturday evening with no active recovery flow and no urgent reply window is unjustified timing. The pattern `architectural-debt-during-active-windows` applies in reverse — touch when the surface is at LOWEST traffic + you have a dedicated 30-min slot to smoke-test properly. Monday May 25 09:00 slot before BILL Holdings post is the right window (or post-ship if smoke-test reveals friction).

## What this DOESN'T change

- **Bottleneck diagnosis** unchanged. Subscribe-form tracking gap is a measurement issue, not a market issue.
- **Branch sub-mix** unchanged. Doesn't move Branch 4 sub-percentages.
- **Vittoria branch decision** unchanged. 3400b90c still belongs to Armando.
- **Monday content cadence** unchanged. BILL Holdings ships per plan.

## Honest scope-check

Spent ~30 min on this investigation (acceptable for a "highest-impact task" prompt). Output: 1 deliverable + 1 capability gap + 1 STATE entry. Not a KPI mover. The +1 real-human signup is logged trajectory data; the inability to trace her is a measurement-ceiling reveal.

**Confidence**: 90% on the capability-gap diagnosis (verified by direct file inspection + event-type Counter on 953 KV events). 70% on the "Larissa is one of today's 1-event homepage sessions" — 30% probability she's not in KV at all due to AdBlock / track-blob eviction / race condition. Either way, the fix is the same.
