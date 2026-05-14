# Branch 4 — P4a + P4b Ship-Day Checklist

**Authored:** Session 27 (May 13 20:30 local, T-1d to May 14 decide-day) — pre-build per S25 NEXT_CHECKIN plan + `pre-build-while-waiting` principle.

**Purpose:** Compress May 14 Branch 4 fire from a 3-hour scramble (research + draft + ship + spend approval) into a <45-min execute (open this file, run 4 commands, paste 1 ad copy, email 1 receipt confirmation).

**Trigger:** May 14 decide-day decision tree lands on Branch 4 (75% probability per latest synthesis calibration). Both P4a (hero rewrite) AND P4b (buyer-discovery) ship in parallel — see synthesis § 3 Branch 4 rationale for why parallel beats sequential.

---

## Pre-flight (5 min)

1. Confirm Branch 4 picked. Re-run synthesis decision tree (synthesis § 2). If Branch 1/2/3 fired instead, this file is moot.
2. Read S24 buyer-vs-funnel-mismatch context fragment (in evolving-system) to keep the audience-shape framing fresh.
3. Confirm Armando approves $30 Reddit spend. If declined, P4b falls back to free-channel-only (Gumroad + ProductHunt).
4. Verify track blob alive (the May-14-morning blob may have died overnight per current MTBF):
   ```bash
   curl -sI https://www.midastools.co/api/track | head -3
   curl -sS "https://jsonblob.com/api/jsonBlob/$(grep TRACK_BLOB_ID pages/api/track.js | head -1 | cut -d\' -f2)" -o /dev/null -w '%{http_code}\n'
   ```
   If 404, hot-fix per `jsonblob-rotation-hot-fix` playbook before shipping (we need this to measure both P4a + P4b baseline traffic).

---

## P4a — Hero Copy Rewrite (Ship Effort: 30 min)

### Hypothesis
Funnel visitors COULD convert with copy that matches their actual identity (established professional, not AI-native creator). Per Session 155 ICP intel + S24 buyer profile (US/EU desktop knowledge-workers).

### What to change
File: `pages/index.js` lines 228-244 (the `.home-hero` block).

**Current (Session 25 baseline):**
```
Badge: Free AI Tools · Lifetime Kits
H1:    AI tools & prompts that actually work.
Sub:   22+ free AI tools, 250+ expert prompts, and lifetime kits for ChatGPT,
       Claude, Midjourney & more. Used by creators, marketers, founders.
       No subscription, ever.
CTA1:  Try Free AI Tools → (/tools)
CTA2:  Get Mega Pack — $97 (Stripe direct)
Below: Just want 20 starter prompts? Try for $9 → · 30-day refund
```

**Proposed (P4a):**
```
Badge: Lifetime AI prompt kits · Used by IT directors, finance leads, small biz owners
H1:    The AI prompts you'd write yourself —
       if you had the time. <span>Already done.</span>
Sub:   Copy-paste prompt libraries for ChatGPT, Claude, and Gemini.
       Built for working professionals who need AI to do real work today,
       not creators chasing the next viral trend. One-time purchase.
       30-day refund. No subscription, ever.
CTA1:  Get the Mega Pack — $29 (Stripe direct, the $29 SKU that closed)
CTA2:  Try 20 starter prompts — $9 → (/starter-pack)
Below: Browse: 21 lifetime kits · Free prompt library · 22+ free AI tools
```

**Why this changes:**
- **Badge** swaps creator-language for buyer-language matching our 3-of-3 paying-customer ICP.
- **H1** addresses the actual job-to-be-done ("prompts I'd write if I had time") — matches the Stripe-Link impulse-buyer shape.
- **Sub** explicit "working professionals" framing rejects the India-mobile content-funnel demographic without insulting them; their bounce becomes the right-audience signal.
- **CTA reorder**: lead with the $29 SKU that ACTUALLY closed (Arnaud), not the $97 SKU (Shantae was a one-off bundle buyer; the $29 is the modal sale).
- **Footer-row** keeps the free-tools / free-prompts paths intact for SEO + flywheel protection per `feedback_protect_flywheel.md`.

### Ship steps
```bash
# 1. Edit pages/index.js — swap the .home-hero block (lines 228-244)
#    Use the "Proposed (P4a)" block above. Preserve all data-cta attributes.

# 2. Build verify
export PATH="/opt/homebrew/bin:$PATH" && npx next build 2>&1 | tail -10

# 3. Curl-verify locally (optional)
# 4. Commit + push
git add pages/index.js
git commit -F /tmp/p4a-commit.txt   # see template below
git push origin main

# 5. Verify live within 5 min of push
curl -s https://www.midastools.co | grep -i "working professionals\|prompts you.d write yourself" | head -3
```

### Commit message template (write to /tmp/p4a-commit.txt)
```
P4a hero rewrite — buyer-shape copy targeting working professionals

Per May 14 strategic synthesis Branch 4 P4a decision. Replaces the
creator/marketer-framed hero with copy targeting the actual ICP from
3 paying customers (Shantae IT director / Arnaud Paris finance / George
Vegas plumber).

Per S24 buyer-vs-funnel-mismatch + Session 155 ICP intel: our content
funnel visitors are India/mobile research-mode browsers; our buyers are
US/EU desktop knowledge-workers who one-click via Stripe Link. The new
copy reframes the badge + H1 + sub + CTA-order around the buyer, not the
content visitor.

Reversible: revert this commit if 14d delta on /api/track shows zero
conversion lift.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

### Kill criteria (re-evaluate May 28 / T+14d)
- Measure: Stripe sales May 14-28 vs May 1-14 baseline (3 sales / $155 LTM today).
- Win: ≥1 NEW Stripe sale attributable to homepage source (utm or referrer).
- Hold: ≥1 NEW reply to a partner or audit funnel that mentions the new framing.
- Kill: 0 sales + 0 replies referencing the framing → P4a hypothesis is wrong (the problem is NOT hero copy; it's channel-shape per S24).

### Rollback
Single `git revert <p4a-commit-sha> && git push` — restores prior hero in <2 min.

---

## P4b — Buyer-Discovery Test (Ship Effort: 60 min, $30 cash if Reddit approved)

### Hypothesis
Real buyers congregate on Reddit / Gumroad / ProductHunt — surfaces our content funnel doesn't reach. Test by directly listing where Stripe-Link-shape impulse buyers shop.

### Channel A — Reddit Promoted Post ($30)

#### Why r/ChatGPTPromptGenius (1.6M+ subscribers, ICP-fit)
Per Session 155 ICP intel: this sub's audience overlaps the "AI-curious working professional" who one-clicks $29 prompt packs. Per S24: the 3 paying customers all bought the $29 Mega Pack or All-Kits Bundle; this sub's promoted-post format puts the SKU directly in front of buyers.

#### Ad copy (paste into Reddit Ads Manager)
```
TITLE:    250+ AI prompts you'd write yourself if you had time — $29 lifetime
BODY:     One-time purchase. ChatGPT, Claude, Gemini-ready. 30-day refund.
          Used by IT directors, finance teams, small business owners.
LINK:     https://www.midastools.co/ai-prompt-mega-pack?utm_source=reddit&utm_medium=promoted&utm_campaign=p4b-buyer-discovery
TARGET:   r/ChatGPTPromptGenius (primary) + r/ChatGPTPro + r/ClaudeAI (secondary if budget allows)
BUDGET:   $30 across 7 days (Reddit minimum is $5/day)
GOAL:     Conversions (Reddit lets you optimize for off-site purchases via pixel)
```

#### Ship steps
```bash
# 1. Log in to https://ads.reddit.com (Armando's account)
# 2. Create campaign:
#    - Objective: Conversions (or Traffic if Conversion pixel not set up — fallback)
#    - Audience: r/ChatGPTPromptGenius + r/ChatGPTPro + r/ClaudeAI
#    - Budget: $30 lifetime, 7-day duration
#    - Bid: Auto
# 3. Use ad copy above
# 4. Submit, wait for approval (typically 24-48h)
# 5. Once live, monitor CTR + click-throughs daily via Reddit Ads dashboard
```

#### Tracking
- UTM-tagged URL above lets us attribute Stripe sales to this campaign.
- /api/track will capture page_view events with utm_source=reddit.
- Stripe webhook captures client_reference_id (per Session 159 attribution work).

### Channel B — Gumroad Listing (Free, 30 min)

#### Why Gumroad
- Stripe-Link-shape impulse buyer concentrate here.
- Discoverable via Gumroad's internal search ("ChatGPT prompts").
- Zero distribution friction — no audience-building required.
- Already proven channel: George Nelson bought OpenClaw Starter Kit via openclaw-starter-kit.vercel.app (per S158 attribution finding) — the impulse-buyer pattern works.

#### Ship steps
```bash
# 1. Log in to gumroad.com (Armando's account or create new midastools account)
# 2. Create new product:
#    - Title: AI Prompt Mega Pack — 250+ Copy-Paste Prompts (ChatGPT, Claude, Gemini)
#    - Price: $29 (mirror our Stripe price exactly so we don't fragment pricing)
#    - Description: paste the /ai-prompt-mega-pack page hero + features section
#    - File: upload public/ai-prompt-mega-pack.zip (already exists per /thank-you delivery)
#    - Category: Education / Productivity
#    - Tags: chatgpt, claude, gemini, prompts, ai, productivity
# 3. Add 3 preview images (steal from existing /ai-prompt-mega-pack page)
# 4. Set Custom Domain to www.midastools.co (Gumroad supports this for SEO equity)
# 5. Publish
```

#### Tracking
- Gumroad dashboard surfaces views, conversions, revenue.
- Compare conversion rate to our /ai-prompt-mega-pack Stripe rate.
- If Gumroad converts at >2x our owned rate → buyer-discovery hypothesis confirmed; pivot resource allocation.

### Channel C — ProductHunt Submission (Free, 30 min)

#### Why ProductHunt
- One-day featured-listing exposure to ~10K-50K impressions.
- Audience overlaps "AI-curious working professional" demographic.
- Cost: time only.
- Risk: if PH bans repeat-launch of same product, this is single-shot.

#### Ship steps
1. Create launch at producthunt.com/posts/new
2. Title: "MidasTools AI Prompt Mega Pack — 250+ ready-to-use AI prompts"
3. Tagline: "Copy-paste prompts for working professionals. One-time purchase."
4. Schedule launch for next Tuesday (best traffic day per PH founder data).
5. Prepare 5 launch-day comments-as-replies for the inevitable "what makes this different from X?" question.

### Kill criteria (re-evaluate May 28 / T+14d)
- Win: ≥1 sale attributable to ANY of A/B/C (UTM or platform-direct).
- Hold: ≥1 outreach lead generated by listing visibility.
- Kill: 0 sales + 0 leads at T+14d → buyer-discovery hypothesis is also wrong (the SKU itself doesn't have demand at $29 in any channel).

### What I will NOT do unilaterally for P4b
- Do NOT post to Reddit organically. Per `feedback_social_media_failed.md` Armando tried and it didn't work.
- Do NOT spend the $30 without Armando's explicit ack on May 14.
- Do NOT list on AppSumo (requires multi-week deal-team approval; not a 14d test).
- Do NOT fragment pricing (Gumroad price MUST equal Stripe price = $29).

---

## Sequencing (the parallel beat)

Hour 0-1 (May 14 morning, post-decision):
- ☐ Confirm Branch 4 picked. Run synthesis § 1 commands. Fill data row.
- ☐ Confirm Armando approves $30 Reddit spend. If no, P4b is Channels B+C only.

Hour 1-1.5:
- ☐ Ship P4a (hero rewrite). Build verify. Commit. Push. Live-verify.

Hour 1.5-2.5:
- ☐ Ship P4b Channel A (Reddit ad — paste copy, set budget, submit for approval).
- ☐ Ship P4b Channel B (Gumroad listing — title, description, ZIP upload, publish).
- ☐ Ship P4b Channel C (ProductHunt submission — schedule for next Tuesday).

Hour 2.5-3:
- ☐ Update `.founder/STATE.md` with all 4 ship confirmations.
- ☐ Telegram Armando a 3-line status (P4a live, P4b A/B/C scheduled, T+14d kill date May 28).
- ☐ Add T+7d (May 21) check-in to SCHEDULE — early signal whether any channel produces engagement before the T+14d kill check.

Total ship effort: ~3 hours. ~$30 cash if all approved.

---

## Calibration on this checklist

**Confidence we'd execute this well:** 80%.
- P4a hero rewrite: 90% — single-file edit, clear copy, build is fast, reversible.
- P4b Channel A (Reddit): 70% — depends on Armando's ad spend approval + Reddit's approval queue (24-48h).
- P4b Channel B (Gumroad): 80% — Armando needs to log in (Gumroad doesn't have an MCP); copy-paste from existing Mega Pack page.
- P4b Channel C (ProductHunt): 65% — first-time PH submission; risk of ranking-day no-show without pre-launch hunter.

**What would prove this checklist wrong:**
- If on May 14 ANY of Branch 1/2/3 fires (≥25% combined probability), this checklist is moot — different branch fires.
- If Armando declines $30 Reddit spend AND we have no Gumroad/PH credentials, P4b becomes 0-channel and we ship only P4a.

**Time saved vs improvising on May 14:** ~2 hours (research + draft + decision-fatigue). Decide-day becomes execute-day.
