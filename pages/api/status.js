// Weekly status check — tracks the 4 key metrics for the May 15 decision
// GET /api/status?key=mt-outreach-2026

const SUBSCRIBERS_BLOB = 'https://jsonblob.com/api/jsonBlob/019d7730-bd31-79cb-86f4-4b76dac3786b';

export default async function handler(req, res) {
  if (req.query.key !== (process.env.OUTREACH_SECRET || 'mt-outreach-2026')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  // 1. Subscriber count
  let subscribers = [];
  try {
    const blob = await fetch(SUBSCRIBERS_BLOB);
    const data = await blob.json();
    subscribers = data.subscribers || [];
  } catch {}

  // 2. Dates
  const now = new Date();
  const domainBirthday = new Date('2026-03-14');
  const domainAgeDays = Math.floor((now - domainBirthday) / 86400000);
  const sitemapSubmitted = new Date('2026-04-09');
  const daysSinceSitemap = Math.floor((now - sitemapSubmitted) / 86400000);
  const decisionDate = new Date('2026-05-15');
  const daysUntilDecision = Math.floor((decisionDate - now) / 86400000);

  // 3. Products and tools count
  const totalProducts = 21;
  const totalFreeTools = 20;
  const totalSitemapUrls = 125;

  // 4. Revenue (we'd need Stripe API for real data, placeholder for now)
  const revenue = 0;

  const status = {
    timestamp: now.toISOString(),
    decisionDate: '2026-05-15',
    daysUntilDecision,

    domain: {
      ageDays: domainAgeDays,
      daysSinceSitemap,
      thirtyDayMilestone: domainAgeDays >= 30 ? 'PASSED' : `${30 - domainAgeDays} days away`,
    },

    metrics: {
      subscribers: subscribers.length,
      subscriberEmails: subscribers.map(s => s.email.substring(0, 10) + '...'),
      subscriberSources: subscribers.map(s => s.source || 'unknown'),
      revenue,
      totalProducts,
      totalFreeTools,
      totalSitemapUrls,
    },

    thresholds: {
      subscribers: { current: subscribers.length, bad: '< 5', ok: '10-30', good: '50+' },
      revenue: { current: revenue, bad: '$0', ok: '$1-50', good: 'any recurring' },
    },

    recentSubscribers: subscribers
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
      .map(s => ({
        email: s.email.substring(0, 15) + '...',
        source: s.source,
        daysAgo: Math.floor((now - new Date(s.date)) / 86400000),
      })),
  };

  return res.status(200).json(status);
}
