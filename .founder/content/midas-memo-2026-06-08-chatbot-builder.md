# Midas Memo — Monday June 8, 2026 (Tool #1 of the flywheel: Chatbot Builder)

**Status:** DRAFT, ready to send. De-risked Jun 4:
- ✅ Code path audited end-to-end (botId preserved in `client_reference_id`, not clobbered by the attribution rewriter; webhook matches on `metadata.kit_type==='chatbot-pro'` AND the plink id; activation writes `chatbot:<id>.plan='pro'`; all 5 read surfaces consistent).
- ✅ Stripe plink config verified live (Jun 4): `plink_1TeLMe…` active, recurring **$39/mo**, `metadata.kit_type=chatbot-pro`, redirects to `/chatbot-builder?upgraded=1`.
- ⏳ **Remaining gate (Armando's call):** one real $39 self-purchase + immediate refund to confirm Stripe actually delivers the webhook → bot flips to `pro` in production. Everything except live webhook *delivery* is verified. Fire the memo right after that confirms.

**Audience:** full active subscriber list (~45+, growing ~15/day). This is the flywheel's warm channel.
**Send via:** nurture.js broadcast (`?broadcast=true&template=chatbot_launch`) OR Resend. Lead CTA = `/chatbot-builder?utm_source=email&utm_medium=broadcast&utm_campaign=chatbot_launch`.

---

## Subject line options (A/B)
- A (method-first): **The $300/mo AI side-business you can start this week (no code)**
- B (curiosity): **I built a tool that turns any business website into a sellable AI chatbot**
- C (number anchor): **Local businesses pay $300/mo for this. You can build it free.**

Recommended: **A** — leads with the money method, matches our make-money audience.

---

## Body

Hey —

Every Monday I dig into how people are *actually* making money with AI right now, then build you a tool to do one of those methods. Here's this week's.

**The method: sell AI chatbots to local businesses.**

Every dentist, law firm, gym, and contractor in your town has the same problem — customers ask the same 20 questions (hours, pricing, booking, services) and someone has to answer them, or the lead leaves. A chatbot trained on the business's own website answers those 24/7 and captures the lead's name + contact.

The numbers are real:
- White-label chatbot platforms charge resellers **$70–399/mo**.
- Those resellers turn around and charge each local business **$300–2,000/mo**.
- One person on Reddit runs 8 of these on retainer — **$2,400/mo recurring** plus setup fees.

The catch has always been: building the bot took technical work. Not anymore.

**The tool: the Chatbot Builder.** → [Build one free](https://www.midastools.co/chatbot-builder?utm_source=email&utm_medium=broadcast&utm_campaign=chatbot_launch)

Here's the whole workflow:
1. **Paste a business's website.** It reads their real info — hours, services, pricing, FAQs.
2. **Get a working chatbot in ~30 seconds.** Test it right there on the page. It only answers from the real info, so no made-up prices or hours.
3. **Put it live with one line of code** — `<script>` tag, drops onto any site.
4. **It captures leads** — every visitor who leaves a name + contact gets emailed straight to you (or your client).

Build and preview as many as you want for free. When you're ready to put one live for a client and keep the recurring revenue, **Pro is $39/mo** — it removes our badge (fully white-label, looks like *your* product), emails you every captured lead, and unlocks unlimited live bots.

So the math is simple: **$39/mo in, one local client at $300/mo out.** Every client after that is margin.

→ **[Build your first chatbot free](https://www.midastools.co/chatbot-builder?utm_source=email&utm_medium=broadcast&utm_campaign=chatbot_launch)** — no sign-up to start. Paste a website (try a local restaurant or dentist) and watch it work.

Reply and tell me what business you'd sell it to first — I read every reply and it tells me what to build next Monday.

— Armando, MidasTools

---

## Post-send watch (North Star)
- `chatbot_build` events (activation — did they hit the core feature?)
- `/chatbot-builder` page_views with `utm_campaign=chatbot_launch`
- First `chatbot-pro` Stripe subscription (first recurring $39/mo — the flywheel's first MRR)
- Replies (= demand signal for next Monday's tool pick)
