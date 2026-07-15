# Traffic Forensics — "How did the hackers find us?" (Jul 15 2026)

## TL;DR
Not a hacker breach. It's a **leaked free-download link making the rounds in an Indonesian/SEA "free premium files" Telegram channel.** Someone found our download bypass, and the link got posted into a freebie group. The hole is already **closed** (fixed last session) — they're now clicking a dead link.

## The chain (evidence-backed)

1. **The hole** — `/thank-you?kit=<slug>` served the kit download based only on the URL query param (no proof of purchase), AND all 16 kit ZIPs sat world-readable in `public/` by direct URL (`/ai-prompt-mega-pack.zip`, etc.).

2. **Discovery** — "Kitokira" (the beg-bounty extortionist, emailed you 6:33/6:37am Jul 14) found the bypass, screenshotted all 16 kits downloaded, and put the exact URL in writing: `https://www.midastools.co/thank-you?kit=bundle`. Claimed "I have not yet made this public" — the traffic below proves that was false.

3. **Spread** — that `/thank-you?kit=bundle` link got dropped into a Telegram freebie channel. Our own tracking (`/api/track-events`, 12h window Jul 14 14:07 → Jul 15 02:30 UTC):
   - **Telegram = #1 non-Google source: 35 app-referrals** — `org.telegram.messenger` (22), `ir.ilmili.telegraph` (7, Iranian TG client), `web.telegram.org` (3), `org.telegram.plus` (3). More than Google (30).
   - **Geo:** Indonesia (35) + Malaysia (3). **Device:** 35 identical Android 10 UAs.
   - **Landing pages:** `/thank-you?kit=bundle` (15 — the exact bypass URL), `/bundle` (7), `/soul-generator` (6), `/prompt-generator` (4), `/ai-audit` (3). Then they browse the old prompt-pack pages.

4. **Who they are** — freebie-hunters chasing leaked premium files, NOT attackers of our infra. No account/data/payment compromise. Classic SEA "free paid kits" Telegram sharing.

## Status: hole CLOSED (verified live Jul 15)
- Direct ZIP URLs → **HTTP 404** (moved to `private-kits/`)
- `/api/download` without a valid signed token → **HTTP 404** (locked, `DOWNLOAD_SECRET`)
- `/thank-you?kit=bundle` → 200 but serves **no download link/button** — grepped served HTML, zero `.zip` / `/api/download` references
- → The Telegram crowd is now hitting a dead link. Spike decays on its own as the TG post goes stale.

## Likely original discovery path (unconfirmed)
`submitaitools.org` (an AI-tools directory we submitted to) shows 4 referral hits. Plausible: someone browsing that directory found midastools, poked the funnel, found the bypass. The Telegram *spread* is confirmed; the *original* discovery is inference.

## Follow-up worth deciding
The old prompt-pack pages (`/bundle`, `/soul-generator`, `/prompt-generator`, `/ai-video-prompt-pack`) are **still live and directly reachable** — which is exactly how the TG crowd lands on them, bypassing the stripped nav. Now that we're Chatbot-Builder-first, decide: leave them (harmless, still delink'd), or 410/redirect them to kill the leaked-link destinations entirely.
