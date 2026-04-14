// Weekly status check — tracks the 4 key metrics for the May 15 decision
// GET /api/status?key=mt-outreach-2026          → returns JSON
// GET /api/status?key=mt-outreach-2026&notify=true → returns JSON + emails report

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const BLOB_ID = '019d89aa-5d3d-7595-9dcb-edd6b6b5c034';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;
const NOTIFY_EMAIL = 'iam+midas@armando.mx';

function grade(value, bad, ok) {
  if (value >= ok) return '🟢 GOOD';
  if (value >= bad) return '🟡 OK';
  return '🔴 BAD';
}

export default async function handler(req, res) {
  if (req.query.key !== (process.env.OUTREACH_SECRET || 'mt-outreach-2026')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  // 1. Subscriber count
  let subscribers = [];
  try {
    const gistRes = await fetch(BLOB_URL, { headers: { 'Content-Type': 'application/json' } });
    const data = await gistRes.json();
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

  // 3. Counts
  const totalProducts = 21;
  const totalFreeTools = 20;
  const totalSitemapUrls = 125;
  const revenue = 0;

  // 4. Grades
  const subGrade = grade(subscribers.length, 5, 30);
  const revenueGrade = revenue > 0 ? '🟢 REVENUE!' : '🔴 $0';
  const verdict = subscribers.length >= 30 || revenue > 0
    ? '🟢 ON TRACK'
    : daysUntilDecision <= 14 && subscribers.length < 5
      ? '🔴 PIVOT WARNING'
      : '🟡 NEEDS ATTENTION';

  const status = {
    timestamp: now.toISOString(),
    decisionDate: '2026-05-15',
    daysUntilDecision,
    verdict,

    domain: {
      ageDays: domainAgeDays,
      daysSinceSitemap,
      thirtyDayMilestone: domainAgeDays >= 30 ? 'PASSED' : `${30 - domainAgeDays} days away`,
    },

    metrics: {
      subscribers: subscribers.length,
      subscribersGrade: subGrade,
      revenue,
      revenueGrade,
      totalProducts,
      totalFreeTools,
      totalSitemapUrls,
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

  // Send email report if requested
  if (req.query.notify === 'true') {
    const subList = status.recentSubscribers
      .map(s => `• ${s.email} (${s.source}, ${s.daysAgo}d ago)`)
      .join('\n');

    const emailBody = `
      <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;">
        <h1 style="font-size:24px;margin:0 0 8px;">MidasTools Weekly Status</h1>
        <p style="color:#6B7280;margin:0 0 24px;">${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin-bottom:24px;">
          <h2 style="font-size:18px;margin:0 0 16px;">${verdict}</h2>
          <table style="width:100%;font-size:14px;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;"><strong>Days until decision</strong></td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;text-align:right;">${daysUntilDecision}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;"><strong>Subscribers</strong></td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;text-align:right;">${subscribers.length} ${subGrade}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;"><strong>Revenue</strong></td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;text-align:right;">$${revenue} ${revenueGrade}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;"><strong>Domain age</strong></td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;text-align:right;">${domainAgeDays} days</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;"><strong>Days since sitemap</strong></td><td style="padding:8px 0;border-bottom:1px solid #E5E7EB;text-align:right;">${daysSinceSitemap}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Free tools</strong></td><td style="padding:8px 0;text-align:right;">${totalFreeTools}</td></tr>
          </table>
        </div>

        ${subscribers.length > 0 ? `
        <div style="margin-bottom:24px;">
          <h3 style="font-size:16px;margin:0 0 8px;">Recent Subscribers</h3>
          <div style="font-size:13px;color:#6B7280;white-space:pre-line;">${subList}</div>
        </div>
        ` : ''}

        <div style="padding:16px;background:#FEF3C7;border-radius:8px;font-size:13px;color:#92400E;">
          <strong>Thresholds for May 15:</strong><br/>
          Subscribers: &lt;5 = pivot, 10-30 = iterate, 50+ = double down<br/>
          Revenue: $0 = pivot, $1-50 = iterate, recurring = double down
        </div>

        <p style="font-size:12px;color:#9CA3AF;margin-top:24px;text-align:center;">
          Auto-generated by midastools.co/api/status
        </p>
      </div>
    `;

    try {
      await resend.emails.send({
        from: 'MidasTools <hello@midastools.co>',
        to: NOTIFY_EMAIL,
        subject: `MidasTools Status: ${verdict} — ${subscribers.length} subs, $${revenue} rev, ${daysUntilDecision}d left`,
        html: emailBody,
      });
      status.notificationSent = true;
    } catch (err) {
      status.notificationSent = false;
      status.notificationError = err.message;
    }
  }

  return res.status(200).json(status);
}
