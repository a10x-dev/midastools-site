// Authenticated email sending endpoint for outreach
// GET /api/send-email?key=SECRET&to=EMAIL&subject=SUBJECT&body=BODY
// Uses Resend API

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'Armando from MidasTools <hello@midastools.co>';
const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';

export default async function handler(req, res) {
  const { key, to, subject, body, html } = req.query;

  if (key !== SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!to || !subject) {
    return res.status(400).json({ error: 'Missing required params: to, subject' });
  }

  try {
    // Next.js already URL-decodes req.query, so do NOT decodeURIComponent again —
    // it double-decodes and throws "URI malformed" on any literal % sign in the body.
    const emailContent = html
      ? { html }
      : { html: `<div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;line-height:1.6;">${(body || '').replace(/\n/g, '<br/>')}</div>` };

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      ...emailContent,
    });

    return res.status(200).json({ success: true, id: result.data?.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
