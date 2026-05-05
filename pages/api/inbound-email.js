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
  const reply = {
    received_at: new Date().toISOString(),
    event_type: payload.type || 'email.received',
    email_id: data.id || data.email_id || null,
    from: data.from?.email || data.from || null,
    from_name: data.from?.name || null,
    to: Array.isArray(data.to)
      ? data.to.map((t) => t.email || t).filter(Boolean)
      : data.to
      ? [data.to]
      : [],
    subject: data.subject || '',
    text: data.text || '',
    html: data.html || '',
    in_reply_to: data.in_reply_to || data.headers?.['in-reply-to'] || null,
    message_id: data.message_id || data.headers?.['message-id'] || null,
    raw_headers: data.headers || null,
    read: false,
  };

  const result = await appendReply(reply);
  if (!result.success) {
    console.error('[inbound-email] storage failed:', result.error);
    return res.status(500).json({ error: 'Storage failed', detail: result.error });
  }

  console.log(`[inbound-email] stored reply from ${reply.from} re: "${reply.subject}" (count=${result.count})`);
  return res.status(200).json({ ok: true, count: result.count, healed: result.healed || false });
}
