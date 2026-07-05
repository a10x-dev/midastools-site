# Chatbot Builder — Outbound Sales Pipeline

**Strategy (CEO decision, 2026-07-05):** Sell the Chatbot Builder ($39/mo recurring) via a
"build-it-for-them-first" outbound motion. For each target business I scrape their website,
mint a working AI assistant, and send the owner a **live demo link** (`/chat/<botId>`). The
product sells itself: they chat with their own 24/7 assistant before I ask for anything.

**Why this is the bet:** After 100 days the company has $184 (4 one-time sales) and 6 unused
recurring SKUs. The failure mode is *relentless building, zero selling* — every outbound send
was gated on Armando. This motion is the first real sales weapon, and it's ARR-native.

**$1M ARR math:** $39/mo × ~2,140 customers. Requires a repeatable outbound + inbound machine.
Cold-outbound alone is thin at $39 ACV → pair with self-serve SEO ("AI chatbot for [niche]")
and a reseller/agency angle (build many bots, one operator).

---

## ✅ Shipped this session
- Verified product works end-to-end on prod (scrape → distill → bot answers accurately + honestly, lead-capture CTA).
- **Shipped the missing conversion asset:** hosted shareable demo at `/chat/[id]` (commit 9af905d, live-verified). Turns every bot into a one-tap "holy shit, it knows my business" demo.

## 🚦 BLOCKED — needs Armando's explicit go
Auto-mode correctly blocked autonomously sending cold email under Armando's identity to a real
external business. **The single decision that unlocks the whole ARR strategy:** authorize
autonomous outbound (approve the staged sends below, and/or add a permission rule so I can run
the outreach machine without per-send approval).

---

## Staged prospects (demos LIVE, ready to pitch)

| Business | Niche | Owner | Contact | Demo link | Outreach |
|---|---|---|---|---|---|
| Cosmetiq Medicine (Portland + Vancouver) | Med spa | Arwa Salti (NP) | CosmetiqMedicine@gmail.com | https://www.midastools.co/chat/cb_d72e5ca7c217 | ✅ drafted `.founder/sales/outreach-cosmetiq-2026-07-05.body.txt` — READY TO SEND |
| Onyx MedSpa (Twin Falls, ID) | Med spa | — | phone only (208.736.2763); no email on site → contact form / call | https://www.midastools.co/chat/cb_91e7f24f8cf0 | needs contact path |

Both demos verified: scraped real site, answer accurately, cite real booking links + locations.

## Ready-to-send (Cosmetiq)
- **To:** CosmetiqMedicine@gmail.com  **Reply-to:** iam@armando.mx  **From:** Armando from MidasTools <hello@midastools.co>
- **Subject:** I built Cosmetiq an AI assistant (it's already live)
- **Send cmd (run after approval, outside auto-mode):**
  `python3 .founder/tools/send-one.py --to "CosmetiqMedicine@gmail.com" --subject "I built Cosmetiq an AI assistant (it's already live)" --body-file .founder/sales/outreach-cosmetiq-2026-07-05.body.txt --reply-to "iam@armando.mx"`

## Next once unblocked (the machine)
1. Batch-build demos for 20–50 med spas / dental / home-services in a chosen metro (WebSearch → build API → demo link).
2. Find owner emails (site contact pages + WebSearch).
3. Personalized demo-led outreach (send-one.py), small daily volume to protect deliverability.
4. Read replies via Gmail MCP; on "yes" → embed widget + they subscribe $39/mo (loop already built + webhook flips bot to pro).
5. Track reply rate → if the pitch converts, systematize into a prospect→demo→send tool + consider a dedicated cold-outreach domain for volume.

## Deliverability discipline
- Small, hyper-personalized batches from hello@midastools.co (verified DKIM). Not a blast.
- At scale: dedicated outreach subdomain + warmup. $39 ACV needs high reply rate → quality > volume.
