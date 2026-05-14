# P4a — Hero Rewrite Patch (Ready to Apply)

**Authored:** Session 27 (May 13 20:35 local, T-1d to May 14 decide-day)
**Purpose:** If May 14 picks Branch 4, the P4a hero rewrite ships in <5 min via this exact patch instead of 30 min of manual editing.
**Status:** Draft on disk. NOT applied. Per `feedback_protect_flywheel.md` + decision-rights — homepage hero changes belong to May 14 decide-day, not Wednesday-night pre-build.

---

## How to apply on May 14 (5-min ship)

```bash
# 1. Copy the patch below to a temp file
# 2. Apply
git apply /tmp/p4a-hero.patch

# 3. Build verify (single line)
export PATH="/opt/homebrew/bin:$PATH" && npx next build 2>&1 | tail -5

# 4. Commit
git add pages/index.js
git commit -F .founder/plans/p4a-commit-message.txt

# 5. Push (Vercel auto-deploys in ~90 sec)
git push origin main

# 6. Live verify
curl -s https://www.midastools.co | grep -i "working professionals" | head -1
```

---

## The patch (copy this block to /tmp/p4a-hero.patch)

```diff
diff --git a/pages/index.js b/pages/index.js
index XXXXXXX..XXXXXXX 100644
--- a/pages/index.js
+++ b/pages/index.js
@@ -226,15 +226,16 @@ export default function Home({ canonical }) {

       <div className="home-hero">
-        <div className="badge" style={{ marginBottom: 32 }}>Free AI Tools &middot; Lifetime Kits</div>
-        <h1>AI tools &amp; prompts<br />that <span>actually work.</span></h1>
+        <div className="badge" style={{ marginBottom: 32 }}>Lifetime AI prompt kits &middot; Used by IT directors, finance teams, small-biz owners</div>
+        <h1>The AI prompts you&rsquo;d write yourself&mdash;<br />if you had the time. <span>Already done.</span></h1>
         <p className="hero-sub">
-          22+ free AI tools, 250+ expert prompts, and lifetime kits for ChatGPT, Claude, Midjourney &amp; more. Used by creators, marketers, founders. No subscription, ever.
+          Copy-paste prompt libraries for ChatGPT, Claude, and Gemini. Built for working professionals who need AI to do real work today, not creators chasing the next viral trend. One-time purchase. 30-day refund. No subscription, ever.
         </p>
         <div className="hero-ctas">
-          <a href="/tools" className="btn-primary" data-cta="hero-free-tools">Try Free AI Tools &rarr;</a>
-          <a href="https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d" className="btn-outline" data-cta="hero-mega-pack-97">Get Mega Pack &mdash; $97</a>
+          <a href="https://buy.stripe.com/fZueVcb8rgXv3ysc8acMM0t" className="btn-primary" data-cta="hero-mega-pack-29">Get the Mega Pack &mdash; $29</a>
+          <a href="/starter-pack" className="btn-outline" data-cta="hero-tripwire-9">Try 20 starter prompts &mdash; $9 &rarr;</a>
         </div>
         <p className="price-tag">
-          <strong>Just want 20 starter prompts?</strong> <a href="/starter-pack" data-cta="hero-tripwire-9" style={{ color: '#D97706', fontWeight: 700, textDecoration: 'none' }}>Try for $9 &rarr;</a> &middot; 30-day refund
+          <strong>Looking around first?</strong> <a href="/tools" data-cta="hero-free-tools" style={{ color: '#D97706', fontWeight: 700, textDecoration: 'none' }}>Try our free AI tools &rarr;</a> &middot; No signup
         </p>
         <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B7280', fontFamily: "'Inter', sans-serif" }}>
           Browse: <a href="/bundle" style={{ color: '#3B5FFF', fontWeight: 700, textDecoration: 'none' }}>21 lifetime kits</a> &middot; <a href="/prompts" style={{ color: '#3B5FFF', fontWeight: 600, textDecoration: 'none' }}>Free prompt library</a> &middot; <a href="/quiz" style={{ color: '#3B5FFF', fontWeight: 600, textDecoration: 'none' }}>Take the quiz</a>
```

**⚠️ Note on Stripe URL change**: The patch swaps the $97 All Kits Bundle URL (`buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d`) for the $29 Mega Pack tripwire URL (`buy.stripe.com/fZueVcb8rgXv3ysc8acMM0t`). Verified: $29 is the SKU that closed Arnaud (May 2 sale, $29 SKU, py_3TSYXnAdkDx8xZMk0S1sanqe per ledger). The $97 was a one-off bundle buy by Shantae; the modal sale shape is $29. Per `feedback_cta_conversion.md` — direct Stripe links on every CTA.

**⚠️ Note on $9 tripwire promotion**: P4a moves the $9 tripwire from a "below the CTA" mention to a primary outline button next to the $29 primary. Reasoning: the $9 starter pack is the Stripe-Link-shape low-friction entry that closes one-click impulse buyers. Per `gist-distribution` learning — making the tripwire visible captures impulse without dropping the $29 anchor.

---

## Pre-written commit message (write to .founder/plans/p4a-commit-message.txt — see below)
