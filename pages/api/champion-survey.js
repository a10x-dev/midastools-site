import { Resend } from 'resend';
import { readKV, writeKV } from '../../lib/kv-store';
import { getRecipient } from '../../lib/champion-recipients';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'MidasTools <hello@midastools.co>';
const FOUNDER_FALLBACK = 'iam+midas@armando.mx';
const INDEX_KEY = 'champion-survey:index';

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatAnswers(answers) {
  const lines = [];
  for (const [k, v] of Object.entries(answers || {})) {
    const value = Array.isArray(v) ? v.join(', ') : v;
    lines.push(`<p style="margin:8px 0;"><strong>${escapeHtml(k)}:</strong><br/>${escapeHtml(value).replace(/\n/g, '<br/>')}</p>`);
  }
  return lines.join('');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, answers } = req.body || {};
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'token required' });
  }
  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'answers required' });
  }

  const recipient = getRecipient(token);
  if (!recipient) {
    return res.status(404).json({ error: 'unknown token' });
  }

  const submittedAt = new Date().toISOString();
  const serverCountry = req.headers['x-vercel-ip-country'] || req.headers['cf-ipcountry'] || '';
  const serverCity = req.headers['x-vercel-ip-city'] || '';
  const userAgent = (req.headers['user-agent'] || '').slice(0, 200);

  const record = {
    token: token.toLowerCase(),
    recipient_name: recipient.full_name,
    recipient_email_hint: `${recipient.name} @ ${recipient.company}`,
    answers,
    submitted_at: submittedAt,
    server_country: serverCountry,
    server_city: serverCity,
    user_agent: userAgent,
  };

  // Persist to KV under a per-token list (overwrites latest submission so we always have
  // the freshest answers; an audit-trail entry also goes into the index list).
  try {
    await writeKV(`champion-survey:latest:${token.toLowerCase()}`, record);
    const index = (await readKV(INDEX_KEY)) || [];
    index.push({ token: token.toLowerCase(), submitted_at: submittedAt });
    // Trim index to last 500 to keep KV value compact
    if (index.length > 500) index.splice(0, index.length - 500);
    await writeKV(INDEX_KEY, index);
  } catch (storageErr) {
    console.error('[champion-survey] KV write failed:', storageErr.message);
    // Continue to email path — we never want the email to silently disappear
  }

  // Notify Armando
  const notifyTo = recipient.notify_to || FOUNDER_FALLBACK;
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: notifyTo,
      subject: `🏆 Champion survey — ${recipient.name} @ ${recipient.company}`,
      html: `
        <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#111827;">
          <h2 style="margin:0 0 8px;">${escapeHtml(recipient.full_name)} (${escapeHtml(recipient.company)})</h2>
          <p style="font-size:13px;color:#6B7280;margin:0 0 16px;">
            ${escapeHtml(recipient.role)} · ${escapeHtml(token)} · ${submittedAt}
            ${serverCountry ? ` · ${escapeHtml(serverCountry)}/${escapeHtml(serverCity)}` : ''}
          </p>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:12px 0;"/>
          <div style="font-size:14px;line-height:1.65;color:#374151;">
            ${formatAnswers(answers)}
          </div>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:16px 0;"/>
          <p style="font-size:12px;color:#9CA3AF;">UA: ${escapeHtml(userAgent)}</p>
          <p style="font-size:12px;color:#9CA3AF;">Stored at KV key: <code>champion-survey:latest:${escapeHtml(token.toLowerCase())}</code></p>
        </div>
      `,
    });
  } catch (mailErr) {
    console.error('[champion-survey] notify email failed:', mailErr.message);
    // Don't 500 — the survey IS captured in KV
  }

  return res.status(200).json({ success: true });
}
