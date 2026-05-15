import crypto from 'crypto';
import { appendReply } from '../../lib/inbound-replies';

// Resend Inbound posts parsed emails here. Verify via svix signature, then append
// to the replies blob. Raw body required for HMAC, so disable the default JSON parser.
export const config = {
  api: { bodyParser: false },
};

async function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function verifySvixSignature({ secret, id, timestamp, signatureHeader, body }) {
  if (!secret || !id || !timestamp || !signatureHeader) return false;

  const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(ageSeconds) || ageSeconds > 5 * 60) return false;

  const secretBytes = Buffer.from(secret.replace(/^whsec_/, ''), 'base64');
  const signedContent = `${id}.${timestamp}.${body}`;
  const expected = crypto
    .createHmac('sha256', secretBytes)
    .update(signedContent)
    .digest('base64');

  // Header format: "v1,sigA v1,sigB ..." — any match wins.
  return signatureHeader
    .split(' ')
    .map((s) => s.split(',')[1])
    .filter(Boolean)
    .some((sig) => {
      try {
        return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
      } catch {
        return false;
      }
    });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = await readRawBody(req);
  const secret = process.env.RESEND_INBOUND_WEBHOOK_SECRET;

  if (secret) {
    const ok = verifySvixSignature({
      secret,
      id: req.headers['svix-id'],
      timestamp: req.headers['svix-timestamp'],
      signatureHeader: req.headers['svix-signature'],
      body,
    });
    if (!ok) {
      console.error('[inbound-email] signature verification failed');
      return res.status(401).json({ error: 'Invalid signature' });
    }
  } else {
    console.warn('[inbound-email] RESEND_INBOUND_WEBHOOK_SECRET not set — accepting unsigned payload');
  }

  let payload;
  try {
    payload = JSON.parse(body);
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const data = payload.data || payload;

  // Body extraction — try multiple paths because Resend's inbound webhook
  // schema isn't documented as stable. Session 29 (May 15) found 2 delon@
  // replies with empty text+html at top-level — possibly the payload nests
  // them under data.body / data.parsed / data.parts. Walk fallback paths
  // until we find something non-empty.
  const extractBody = (d, kind) => {
    if (!d) return '';
    const candidates = [
      d[kind],
      d.body?.[kind],
      d.parsed?.[kind],
      d.parts?.find?.((p) => (p?.mimeType || p?.type || '').includes(kind === 'text' ? 'plain' : 'html'))?.content,
      d.email?.[kind],
      d.message?.[kind],
      kind === 'text' ? d.plain_text || d.body_plain || d.text_body : d.body_html || d.html_body,
    ];
    for (const c of candidates) {
      if (typeof c === 'string' && c.length > 0) return c;
    }
    return '';
  };

  const text = extractBody(data, 'text');
  const html = extractBody(data, 'html');

  // RFC822 "Name <email>" string parser — Resend inbound sends 'from' as
  // a raw RFC822 string for some payloads (vs object {email,name} for others).
  const parseFromField = (raw) => {
    if (!raw) return { email: null, name: null };
    if (typeof raw === 'object') return { email: raw.email || null, name: raw.name || null };
    const s = String(raw).trim();
    const m = s.match(/^\s*(?:"?([^"<]*?)"?\s*<)?([^<>\s@]+@[^<>\s]+)>?\s*$/);
    if (m) return { name: (m[1] || '').trim() || null, email: m[2] };
    return { email: s, name: null };
  };
  const fromParsed = parseFromField(data.from);

  const reply = {
    received_at: new Date().toISOString(),
    event_type: payload.type || 'email.received',
    email_id: data.id || data.email_id || null,
    from: fromParsed.email,
    from_name: fromParsed.name,
    to: Array.isArray(data.to)
      ? data.to.map((t) => t.email || t).filter(Boolean)
      : data.to
      ? [data.to]
      : [],
    subject: data.subject || '',
    text,
    html,
    in_reply_to: data.in_reply_to || data.headers?.['in-reply-to'] || data.headers?.['In-Reply-To'] || null,
    message_id: data.message_id || data.headers?.['message-id'] || data.headers?.['Message-ID'] || null,
    raw_headers: data.headers || null,
    // Forensic: keep the full payload so any future schema change is recoverable
    // post-hoc. Cost is storage size (~5-50KB per reply); benefit is we never
    // lose body content to a parser mismatch again. Strip nothing — even
    // attachments-as-base64 stay in case they're needed for debugging.
    raw_payload: payload,
    read: false,
  };

  // If both bodies came back empty, log loudly with payload key names so the
  // next session can find where Resend actually put the body in this case.
  if (!text && !html) {
    console.warn(
      '[inbound-email] BODY-CAPTURE EMPTY for',
      reply.from,
      're:',
      reply.subject,
      '— data keys:',
      Object.keys(data || {}),
      '— payload keys:',
      Object.keys(payload || {}),
    );
  }

  const result = await appendReply(reply);
  if (!result.success) {
    console.error('[inbound-email] storage failed:', result.error);
    return res.status(500).json({ error: 'Storage failed', detail: result.error });
  }

  console.log(
    `[inbound-email] stored reply from ${reply.from} re: "${reply.subject}" (count=${result.count}, text=${text.length}b, html=${html.length}b)`,
  );
  return res.status(200).json({ ok: true, count: result.count, healed: result.healed || false });
}
