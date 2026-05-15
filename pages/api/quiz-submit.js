import { scorePersona, getResultsForPersona } from '../../lib/quiz-engine';
import { getPersonalPage } from '../../lib/personal-pages';

const RESEND_URL = 'https://api.resend.com/emails';
const ALL_KITS_BUNDLE_STRIPE = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { answers = {}, prospect_slug = null } = req.body || {};
  if (!answers.email) {
    return res.status(400).json({ error: 'email required' });
  }

  const persona = scorePersona(answers);
  const generic = getResultsForPersona(persona);

  const prospect = prospect_slug ? getPersonalPage(prospect_slug) : null;
  const prompts = prospect ? prospect.pickedPrompts.map((p) => ({ title: p.title, body: p.body })) : generic.prompts;
  const personaTitle = prospect ? `5 prompts I picked for ${prospect.firstName}` : generic.title;
  const blurb = prospect ? prospect.whyThisFits : generic.blurb;

  // Capture email + persona to subscribers blob (best-effort, non-blocking error path)
  try {
    const origin = req.headers['x-forwarded-proto'] && req.headers.host
      ? `${req.headers['x-forwarded-proto']}://${req.headers.host}`
      : 'https://www.midastools.co';
    await fetch(`${origin}/api/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: answers.email,
        source: prospect_slug ? `quiz-q-${prospect_slug}` : `quiz-${persona}`,
        business: persona,
        meta: {
          painpoint: answers.painpoint || null,
          role: answers.role,
          tool: answers.tool,
          workload: answers.workload,
        },
      }),
    });
  } catch (e) {
    console.warn('[quiz-submit] subscriber capture failed:', e?.message);
  }

  // Send result email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const html = renderResultEmail({ personaTitle, blurb, prompts, painpoint: answers.painpoint, prospect });
      await fetch(RESEND_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
          'User-Agent': 'midastools-quiz/1.0',
        },
        body: JSON.stringify({
          from: 'Armando from MidasTools <hello@midastools.co>',
          to: [answers.email],
          reply_to: 'replies@midastools.co',
          subject: prospect
            ? `${prospect.firstName} — your 5 prompts (custom for ${prospect.company})`
            : `Your 5 ${personaTitle} prompts`,
          html,
        }),
      });
    } catch (e) {
      console.warn('[quiz-submit] resend send failed:', e?.message);
    }
  } else {
    console.warn('[quiz-submit] RESEND_API_KEY not set; skipping email send');
  }

  return res.status(200).json({
    ok: true,
    persona,
    personaTitle,
    blurb,
    prompts,
    email: answers.email,
  });
}

function renderResultEmail({ personaTitle, blurb, prompts, painpoint, prospect }) {
  const promptHtml = prompts
    .map(
      (p, i) => `
        <div style="border:1px solid #E5E7EB;border-radius:10px;padding:16px 20px;margin-bottom:14px;background:#FFFFFF;">
          <h3 style="font-size:15px;font-weight:700;margin:0 0 10px 0;color:#111827;">${i + 1}. ${escape(p.title)}</h3>
          <pre style="white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;line-height:1.6;color:#374151;background:#F9FAFB;padding:10px 12px;border-radius:6px;margin:0;">${escape(p.body)}</pre>
        </div>
      `
    )
    .join('');

  const stripeUrl = `${ALL_KITS_BUNDLE_STRIPE}?utm_source=quiz-email&utm_medium=result`;

  const painpointBlock = painpoint
    ? `<p style="font-size:14px;color:#374151;background:#F4F6FB;padding:14px 16px;border-radius:8px;border-left:3px solid #3B5FFF;margin:24px 0;">
        <strong>You said:</strong> "${escape(painpoint)}"<br/><br/>
        Reply to this email with the answer to "what would 'fixing' this look like for you?" and I'll send a 6th custom prompt built for that specifically. I read every reply.
      </p>`
    : '';

  return `<!doctype html>
<html><body style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;padding:32px 24px;color:#111827;line-height:1.6;background:#FFFFFF;">
  <div style="font-size:11px;color:#3B5FFF;letter-spacing:0.08em;text-transform:uppercase;font-weight:700;margin-bottom:8px;">Your 5-prompt match</div>
  <h1 style="font-size:24px;font-weight:800;margin:0 0 12px 0;line-height:1.2;">${escape(personaTitle)}</h1>
  <p style="font-size:15px;color:#6B7280;margin:0 0 24px 0;">${escape(blurb || '')}</p>
  ${painpointBlock}
  ${promptHtml}
  <div style="margin-top:32px;padding:24px;background:#111827;color:#FFFFFF;border-radius:14px;">
    <h2 style="font-size:18px;font-weight:700;margin:0 0 6px 0;color:#FFFFFF;">Want all 145+ prompts across 14 kits?</h2>
    <p style="font-size:14px;color:#9CA3AF;margin:0 0 16px 0;">The All Kits Bundle is $97. 14 niche kits, 30-day refund.</p>
    <a href="${stripeUrl}" style="display:inline-block;background:#3B5FFF;color:#FFFFFF;padding:10px 20px;border-radius:6px;font-weight:700;font-size:14px;text-decoration:none;">Get the Bundle — $97</a>
    ${prospect ? `<p style="font-size:12px;color:#9CA3AF;margin:14px 0 0 0;">Your hand-picked page: <a href="https://www.midastools.co/p/${prospect.slug}" style="color:#3B5FFF;">midastools.co/p/${prospect.slug}</a></p>` : ''}
  </div>
  <p style="font-size:11px;color:#9CA3AF;margin-top:24px;text-align:center;">Reply to this email if anything lands or doesn't — I read every one. — Armando</p>
</body></html>`;
}

function escape(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
