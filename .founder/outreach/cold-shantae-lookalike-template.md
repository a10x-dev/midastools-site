# Cold-Outreach Templates — Shantae-Lookalike Persona (2026-05-05)

**Persona:** Director-level corporate IT/Operations leader at a Fortune-1000-adjacent non-tech company (publishing, education, healthcare, financial services). 35-50yo, MBA, $150K+ income, $97 personal-spend authority, exploring AI for personal productivity or team rollout.

**Source of persona:** Shantae Clinton (our $97 buyer) — see `.founder/deliverables/customer-icp-research-2026-05-05.md`.

**Send mechanics:**
- FROM: `Armando from MidasTools <hello@midastools.co>`
- REPLY-TO: `replies@midastools.co` (lands in our inbound blob)
- Tool: `python3 .founder/tools/send-one.py --reply-to replies@midastools.co`
- Cadence: 5 sends/day max (Resend reputation hygiene)
- Follow-up: at most ONE follow-up D+5, then dead.

---

## Template A — Cold email (longer, $97 ask)

**Subject lines (rotate, A/B):**
1. `Quick question about AI tools at {Company}`
2. `{First name} — IT/Ops at {Company}, AI tooling question`
3. `One question for the {Company} IT team`

**Body:**

```
Hi {first_name},

I'm Armando — I run MidasTools, a small site that sells curated AI prompt
kits for working professionals. I'm writing because I noticed you lead
{role description} at {Company}.

A Director of IT at a major US content publisher (similar role to yours)
bought our $97 "All Kits Bundle" two weeks ago — 14 niche prompt kits
covering everything from cold outreach to candidate screening to sermon
prep. Each kit is laser-focused on a single workflow, no fluff.

Curious if there's an AI workflow at {Company} that's eating time on
your team or in your day. If yes, the bundle might be a $97 shortcut
worth a look: {STRIPE_LINK}

If not, ignore this email — no drip, no follow-up. I just send this
to a handful of people each week who fit the profile of our existing
buyers.

Either way, thanks for what you do at {Company}.

Armando
midastools.co

P.S. We back every kit with a 30-day no-questions refund. Customers
keep what they buy even on refund — the goal is for the kits to
actually be useful, not for me to win a Stripe dispute.
```

**Variables to fill per send:**
- `{first_name}` — required
- `{role_description}` — e.g., "tech operations", "IT end-user experience", "digital workplace"
- `{Company}` — required
- `{STRIPE_LINK}` — `https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q?prefilled_email={url_encoded_email}` (Claude Code Kit) OR for All Kits Bundle TBD — Armando to confirm correct $97 plink

**⚠️ Verify before sending:** the All Kits Bundle Stripe Link. Memory has plink_1TDwTmAdkDx8xZMkmxB9yn55 → $97 All Kits Bundle. Need to verify the public URL.

**Length check:** ~190 words. Cold-email best practice = under 250 words. Pass.

---

## Template B — LinkedIn DM (shorter, soft ask)

**Use this when Armando can manually DM from his account.** Cold email + LinkedIn DM mix often outperforms either alone. Don't link Stripe in DM (LinkedIn flags as spam) — link the page instead.

```
Hi {first_name} — Armando here, founder of MidasTools.

Quick context: I sell a $97 bundle of 14 AI prompt kits (cold outreach,
candidate screening, content ops, etc.). One of my recent buyers is a
Director of IT at a major US content publisher with a similar role
to yours.

Would the bundle be useful for AI workflows your team or you personally
are thinking about?

Happy to send a 1-page preview before you click anything. If not relevant,
just ignore — no follow-up.

— Armando | midastools.co
```

**Length:** ~80 words. Optimal for LinkedIn DM.

---

## Follow-up template (D+5, ONE-time only)

```
Hi {first_name},

Bumping this in case it landed in spam or got buried. No worries if
the bundle isn't relevant — closing the loop here.

— Armando
```

**Strict rule:** zero follow-ups beyond this single bump. If they don't reply at D+5, they're dead-list. Move on.

---

## Reply-handling per outcome

| Reply type | Response template path |
|---|---|
| "Yes interested" | `.founder/playbooks/reply-handling-playbook.md` § A |
| "Send more info" | Send 1-page preview PDF (TBD: which kit gets sampled? — pick the closest to their domain) |
| "Too expensive" | $29 Mega Pack tripwire offer (`https://buy.stripe.com/...`) |
| "Not now" | Add to long-list nurture; never re-pitch within 90 days |
| "Hostile / unsubscribe" | One-line apology, remove from list |

---

## Pre-send checklist

- [ ] Personalization variables filled for THIS send (no `{first_name}` or `{Company}` left as placeholder)
- [ ] Stripe link is correct + verified live
- [ ] Reply-to set to `replies@midastools.co`
- [ ] Sending no more than 5 cold emails in a single day
- [ ] Logging the send in `.founder/crm/customers.md` "Next inbound cohort tracker"

---

## Tracking

After every send, log a row in `.founder/crm/customers.md` "Next inbound cohort tracker":

```
| {email} | shantae-lookalike-cold | 2026-05-XX | (awaiting) | (awaiting) | {company}, {role} |
```

When a reply lands (caught by `read-replies.py`), update the row + log the response gist. If they buy, port to "Active customers" + start D+1 cadence.
