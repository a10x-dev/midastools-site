// Dead-weight subscriber suppression — flags scraped-cluster / role / junk
// addresses as unsubscribed so future broadcasts skip them (nurture.js filters
// `allSubs.filter(s => !s.unsubscribed)`). Reversible flag, NOT deletion.
//
// GET /api/suppress-subs?key=mt-outreach-2026            → DRY RUN (default, no write)
// GET /api/suppress-subs?key=mt-outreach-2026&apply=true → APPLY (writes KV + gist)
//
// Built S40 (2026-06-06) to pre-stage the POST-flash-window suppression
// (task c8402a14) of the 20 dead-weight subs the S25 list-quality segmentation
// identified. Match-by-pattern (not hardcoded emails) so it also catches FUTURE
// signups from the same scraped clusters — the bot-fingerprint recurs (S27/S38/S25).
//
// SAFE TO DEPLOY MID-TEST: defaults to dry-run, isolated endpoint, not called by
// any existing flow. Only fire with apply=true AFTER the 48h flash window closes.

import { readSubscribers, writeSubscribers } from '../../lib/subscribers';

// Bot-fingerprint cluster domains (substring match on the email domain).
// Specific enough that substring matching won't catch legitimate subs.
const SUPPRESS_DOMAIN_SUBSTRINGS = [
  'securitydelta.nl',   // ×6 scraped cluster (S27/S38/S25 fingerprint)
  'chameleongroup.co',  // ×4 scraped cluster
  'a7gi.ru',            // ×4 Russian scraped cluster
  '7-eleven.com',       // ×2 role+scraped (covers .my and .ph TLD variants)
];

// Exact role/shared-inbox addresses (not personal — mismatched for a $29 art pack).
const SUPPRESS_EXACT = new Set([
  'info@ac-printmedia.de',
  'support@galaxyholidays.co.uk',
  'support@rubimicrocafe.com',
]);

// Exact addresses that BOUNCED (9) or were Resend-SUPPRESSED (21) on the Jun-8
// art_launch broadcast — verified directly from the Resend send export
// (2026-06-09). Real deliverability ground-truth: these never reach an inbox,
// so flag them so the nurture drip stops attempting them (repeated bounces
// drag sender reputation) and the active count stays honest.
const SUPPRESS_RESEND_DEAD = new Set([
  // 9 hard bounces
  'abelousova@a7gi.ru', 'anouk@80i.com', 'antonio.tulelli@seastema.it',
  'atredesign83@orange.fr', 'bapslady@yahoo.com', 'jboulanger11@verizon.net',
  'jlawyer@pacificcrest.us', 'kdtyson68@yahoo.com', 'shannon.heenan@lakecountyca.gov',
  // 21 Resend-suppressed (prior bounce / spam complaint)
  'aj_haywood@yahoo.co.uk', 'ann.macon@outlook.com', 'ballweg_nicole@yahoo.com',
  'chad@rivercityrush.com', 'curlylou7@aol.com', 'dyeaegr9440@wowway.com',
  'habuzz@yahoo.com', 'hanygoba@yahoo.com', 'info@sigizmundgrp.com',
  'irma.hernandez@oncor.com', 'joey.wang@shadow-caster.com', 'katvc@yahoo.com',
  'lmartin753@aol.com', 'mo.m13nan.cy@gmail.com', 'pastordoug@valleygrace.net',
  'r.mumm@gmail.com', 'rkmadhu@yahoo.com', 'susan.martyn@vision33.com',
  't.kovach@yahoo.com', 'timo@korper.nl', 'tnicole@adt.co.za',
].map((e) => e.toLowerCase()));

const SUPPRESS_REASON = 'dead-weight-scraped-2026-06';

// Junk: SMS email-gateway addresses + purely-numeric local-parts (e.g.
// 6198676220@txt.att.net) — never a real prompt-pack buyer.
function isJunk(email) {
  const lower = String(email).toLowerCase();
  const [local = '', domain = ''] = lower.split('@');
  if (/\b(txt|vtext|mms|pm|tmomail|messaging)\.[a-z.]+$/.test(domain) && /^\d+$/.test(local)) {
    return true;
  }
  if (domain.endsWith('txt.att.net')) return true;
  return false;
}

function matchesSuppression(email) {
  const lower = String(email || '').toLowerCase().trim();
  if (!lower || !lower.includes('@')) return null;
  if (SUPPRESS_EXACT.has(lower)) return 'role-shared-inbox';
  if (SUPPRESS_RESEND_DEAD.has(lower)) return 'resend-bounced-or-suppressed';
  const domain = lower.split('@')[1] || '';
  for (const sub of SUPPRESS_DOMAIN_SUBSTRINGS) {
    if (domain.includes(sub)) return `scraped-cluster:${sub}`;
  }
  if (isJunk(lower)) return 'junk-sms-gateway';
  return null;
}

export default async function handler(req, res) {
  if (req.query.key !== (process.env.OUTREACH_SECRET || 'mt-outreach-2026')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const apply = req.query.apply === 'true';

  const subs = await readSubscribers();
  const totalBefore = subs.length;
  const alreadySuppressed = subs.filter((s) => s.unsubscribed).length;

  const matches = [];
  const nextSubs = subs.map((s) => {
    const reason = matchesSuppression(s.email);
    if (reason && !s.unsubscribed) {
      matches.push({ email: s.email, source: s.source || null, matched_rule: reason });
      return {
        ...s,
        unsubscribed: true,
        unsubscribed_reason: SUPPRESS_REASON,
        unsubscribed_at: new Date().toISOString(),
      };
    }
    return s;
  });

  const activeAfter = nextSubs.filter((s) => !s.unsubscribed).length;

  // DRY RUN — show what would happen, write nothing.
  if (!apply) {
    return res.status(200).json({
      mode: 'dry-run',
      hint: 'add &apply=true to write — ONLY after the 48h flash window closes',
      total_before: totalBefore,
      already_suppressed: alreadySuppressed,
      would_suppress: matches.length,
      active_after_if_applied: activeAfter,
      matches,
    });
  }

  // APPLY — idempotent; re-running is a no-op once flags are set.
  if (matches.length === 0) {
    return res.status(200).json({
      mode: 'apply',
      total_before: totalBefore,
      already_suppressed: alreadySuppressed,
      suppressed: 0,
      note: 'nothing new to suppress (idempotent no-op)',
      active_after: activeAfter,
    });
  }

  const writeResult = await writeSubscribers(nextSubs);

  return res.status(writeResult.success ? 200 : 500).json({
    mode: 'apply',
    total_before: totalBefore,
    suppressed: matches.length,
    active_after: activeAfter,
    matches: matches.map((m) => m.email),
    write: {
      success: writeResult.success === true,
      kvSuccess: writeResult.kvSuccess ?? null,
      gistSuccess: writeResult.gistSuccess ?? null,
      error: writeResult.error || null,
    },
    timestamp: new Date().toISOString(),
  });
}
