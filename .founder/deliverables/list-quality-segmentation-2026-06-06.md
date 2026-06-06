# Subscriber List Quality Segmentation — 117 subs (Jun 6, 2026)

Built during the flash $29 Image Pack 48h window to make the conversion result **interpretable from the supply side** — the bottleneck note says "conversion result is the truth-source on list quality," but that's demand-only. This is the supply-side half: who is actually on the list.

## Segments (n=117)

| Segment | Count | Read |
|---|---|---|
| **Genuine-hobbyist-likely** (free-provider personal: gmail/yahoo/aol/hotmail/outlook) | **63** | The flash's actual target audience — plausible $29-art-pack buyers |
| One-off business/custom domain (non-role) | 34 | Real B2B individuals (Doug/Hiedeh/Daniel/cbrannan profiled in prior sessions) — **mismatched for a $29 art pack** |
| **Near-certain dead weight** (scraped clusters + junk + role) | **20** | Bot/scraped — drags deliverability + pollutes conversion denominator |

### Dead-weight breakdown (20)
- **16 scraped corporate clusters** — corroborates the S27/S38 bot-fingerprint exactly:
  - `securitydelta.nl` ×6 (tim.schraa, joris.denbruinen, amanda.demiranda, alexandra.hattink, +2)
  - `chameleongroup.co` ×4 (ek@, aserov@, yulubtsova@, +1)
  - `a7gi.ru` ×4 (Russian domain — mkrigina, dgavrilyuk, avoevodin, +1)
  - `7-eleven.com.my` / `7-eleven.com.ph` ×2 (whistleblower@, loyaltysupport@ — role+scraped)
- **3 role addresses** (info@ac-printmedia.de, support@galaxyholidays.co.uk, support@rubimicrocafe.com)
- **1 junk** (SMS-gateway / numeric-local addresses, e.g. `6198676220@txt.att.net`)

## Source breakdown
`homepage` 75 · `site` 37 · generator-funnels 5 (album-cover 2, hug-younger-self 1, fantasy-map 1, kit-page 1). The `site`-sourced 37 are the older/seed cohort (where the audit-prospect + scraped tail concentrate); `homepage` is the live ~15/day engine (mostly hobbyist).

## Implications for the flash test

1. **TRUE conversion denominator ≈ 63**, not 116. So:
   - **1 sale = ~1.6% conversion** on the real target → a respectable result for a coldish list; would validate the hobbyist segment + justify re-pointing day-1 nurture to Image Pack.
   - **0 sales out of ~63 genuine hobbyists** is a *stronger* negative signal than 0/116 — it means the art audience genuinely won't convert on packs → pivot offer.
2. The 34 B2B one-offs are not expected to buy a $29 art pack regardless; don't read their silence as list failure.

## Queued action (POST-flash-window only — do NOT mutate the list mid-test)
**Suppress the 20 dead-weight addresses from future broadcasts.** Sending to 16 scraped-cluster + 3 role + 1 junk address on every blast is a deliverability liability (bounces, spam-trap risk, sender-reputation drag). Do this AFTER the 48h flash window closes — changing the list mid-test corrupts the denominator the flash is measuring.

## Capability gap
Can't measure actual **deliverability** (delivered/bounced/spam) of the 116-send from here — Resend `sent:116, failed:0` only means accepted-at-send, not inboxed. The scraped clusters likely bounced/spam-trapped post-acceptance. A Resend bounce/event pull would quantify this; flagged for when Resend event access is available.
