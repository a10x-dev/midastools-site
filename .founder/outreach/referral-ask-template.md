# Referral-Ask Template — for positive customer replies (2026-05-05)

**Trigger:** A paying customer (Shantae or Arnaud) replies to the D+1 thank-you email with substantive feedback (positive or even neutral). They've engaged. The 30-min response window is your chance to (1) reply genuinely to their feedback AND (2) ask for 1-3 named introductions.

**Why this is the highest-leverage move:** Per `.founder/deliverables/customer-icp-research-2026-05-05.md` Tier 1 #3: "Build a 'Send-to-3-Friends' referral CTA on every paid kit delivery email — Shantae knows other Black women in corporate IT, ... cheapest acquisition channel = customer referrals; we've never asked."

**Send mechanics:** Same as primary outreach — `Armando from MidasTools <hello@midastools.co>` with `reply_to=replies@midastools.co`.

---

## Template — Referral ask (after substantive reply)

**Subject:** `Re: Thanks for the {Product}, {Name} — quick question?` (preserve thread)

**Body (after acknowledging their actual feedback):**

```
{Three or four sentences directly addressing the specific feedback they
gave. Specific. Not generic. If they said the cold-outreach kit was
useful — name the prompt that's working. If they said the resume kit
was confusing — apologize and offer a fix.}

That answer actually unlocks something for me — thank you.

If you'd be open to it, I'd ask a small favor:

Do you know 1-2 people in {their world — IT/operations/finance/etc.}
who'd benefit from the {Product}? If you forward this email or DM them
the site, I'll give them the same {price tier} they wouldn't otherwise
get + a free upgrade to the {next tier} kit on me. No pitch from me,
no follow-up — just thanking you for the trust.

Either way, your reply made my week.

— Armando
```

**Variables:**
- `{Three or four sentences...}` — required, custom per reply
- `{Product}` — "All Kits Bundle" or "Mega Pack"
- `{their world}` — e.g., "corporate IT" for Shantae, "Paris finance/AI" for Arnaud
- `{price tier}` — what they paid (so they're "leveling the field" for friends)
- `{next tier}` — for $97 buyer offer = $39 Claude Code Kit free; for $29 buyer offer = $97 All Kits Bundle at $49 with their referral

---

## Specific Shantae version (if she replies positive)

If Shantae replies that, say, the cold-outreach kit is being used by her IT team for vendor responses:

```
That's exactly the use case I had in mind for that kit — knowing it's
landing on a real corporate IT desk made my day. The "vendor-evaluation
RFP-response" prompt was the one I struggled most to get right; if there
are any tweaks that would make it more useful for IT at scale, even a
fragment of feedback is gold.

If you'd be open to it, I'd ask a small favor:

Do you know 1-2 IT or Operations leaders in your network — Kogod alums,
former 2U colleagues, NJ-area corporate IT folks — who'd benefit from
the All Kits Bundle? If you forward this email or DM them the site, I'll
give them the same $97 they'd otherwise pay + a free Claude Code Kit
($39 value) on me. No pitch from me, no follow-up.

Either way, your reply made my week.

— Armando
```

**Risk check:** Mentioning "Kogod alums" / "former 2U colleagues" is intel from public LinkedIn. Use carefully — feels intimate but if she finds it stalker-y it backfires. Safer fallback: say "1-2 IT or Operations leaders in your network" and let her pick.

---

## Specific Arnaud version (if he replies positive)

```
That's super useful context — knowing someone in {his role} actually
opens these and uses them helps me prioritize the next round.

If you'd be open to it, I'd ask a small favor:

Do you know 1-2 people in your network — French finance/AI folks,
fintech operators, ex-colleagues — who might find the Mega Pack useful?
If you forward this email or DM them the site, I'll send them the
$97 All Kits Bundle (vs the $29 Mega Pack you got) at the $29 price,
and add a free Claude Code Kit on top. Just my way of thanking you.

No follow-up either way.

— Armando
```

---

## What "substantive reply" means (for fire decision)

✅ FIRE referral ask if:
- Reply is ≥2 sentences
- Mentions a specific prompt, kit, or use case
- Gives feedback (positive OR negative — both = engaged)
- Asks a question

❌ DO NOT fire referral ask if:
- One-word reply ("thanks")
- Out-of-office auto-reply
- Hostile tone or unsubscribe request
- They explicitly say "no time"

---

## Tracking

When fired, log row in `.founder/crm/customers.md`:

```
| 2026-05-XX | D+X referral ask post-reply | {resend_id} | sent | "{their feedback gist}" |
```

Watch the next 7-14 days for any new sale where the customer email matches a forwarded recipient. Stripe doesn't tag referrals; we'll need to ask new buyers "how did you hear about us?" in the delivery email.
