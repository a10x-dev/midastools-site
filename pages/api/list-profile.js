// Key-gated, privacy-preserving list profiler.
// Reads the full subscriber list server-side and returns ONLY aggregate
// counts — no raw emails ever leave the server. Built to understand the
// composition of the warm list (free-consumer vs business, source mix,
// growth cadence) so we can decide how to grow + monetize it.
import { readSubscribers } from '../../lib/subscribers';

const FREE_PROVIDERS = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com',
  'icloud.com', 'proton.me', 'protonmail.com', 'live.com', 'msn.com',
  'ymail.com', 'gmx.com', 'mail.com', 'me.com', 'comcast.net',
  'yahoo.co.uk', 'hotmail.co.uk', 'yahoo.fr', 'orange.fr', 'web.de',
]);

// Bot / scraper clusters seen repeatedly in the signup logs.
const BOT_SUBSTRINGS = ['securitydelta.nl', 'chameleongroup.co', 'a7gi.ru', '7-eleven', 'korper.nl'];
const ROLE_PREFIXES = ['admin@', 'info@', 'support@', 'sales@', 'contact@', 'hello@', 'noreply@', 'webmaster@', 'postmaster@'];

export default async function handler(req, res) {
  const key = req.query.key;
  if (key !== (process.env.OUTREACH_KEY || 'mt-outreach-2026')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  let subs = [];
  try {
    subs = await readSubscribers();
  } catch (e) {
    return res.status(500).json({ error: 'read failed', detail: String(e) });
  }

  const now = Date.now();
  const DAY = 86400000;
  const out = {
    total: subs.length,
    category: { free_consumer: 0, business_custom: 0, role_address: 0, bot_suspect: 0 },
    sources: {},
    growth: { last_7d: 0, last_30d: 0, undated: 0 },
    top_business_domains: {},
    tld_mix: {},
  };

  for (const s of subs) {
    const email = (s.email || '').toLowerCase().trim();
    const domain = email.split('@')[1] || '';
    const tld = domain.split('.').slice(-1)[0] || '?';

    // category
    if (BOT_SUBSTRINGS.some((b) => email.includes(b))) out.category.bot_suspect++;
    else if (ROLE_PREFIXES.some((p) => email.startsWith(p))) out.category.role_address++;
    else if (FREE_PROVIDERS.has(domain)) out.category.free_consumer++;
    else if (domain) {
      out.category.business_custom++;
      out.top_business_domains[domain] = (out.top_business_domains[domain] || 0) + 1;
    }

    // source
    const src = s.source || 'unknown';
    out.sources[src] = (out.sources[src] || 0) + 1;

    // tld
    out.tld_mix[tld] = (out.tld_mix[tld] || 0) + 1;

    // growth
    const t = s.date ? new Date(s.date).getTime() : null;
    if (!t || isNaN(t)) out.growth.undated++;
    else {
      if (now - t <= 7 * DAY) out.growth.last_7d++;
      if (now - t <= 30 * DAY) out.growth.last_30d++;
    }
  }

  // sort helpers — top entries only
  const topN = (obj, n) =>
    Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, n)
      .reduce((acc, [k, v]) => { acc[k] = v; return acc; }, {});

  out.sources = topN(out.sources, 25);
  out.top_business_domains = topN(out.top_business_domains, 30);
  out.tld_mix = topN(out.tld_mix, 15);

  return res.status(200).json(out);
}
