import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'MidasTools <hello@midastools.co>';
const FOUNDER_EMAIL = 'iam+midas@armando.mx';
const SUBSCRIBERS_BLOB = 'https://jsonblob.com/api/jsonBlob/019d7730-bd31-79cb-86f4-4b76dac3786b';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // 1. Add contact to subscriber storage (jsonblob — free, no auth)
    try {
      const blobRes = await fetch(SUBSCRIBERS_BLOB);
      const data = await blobRes.json();
      const existing = data.subscribers || [];
      if (!existing.find(s => s.email === email)) {
        existing.push({ email, source: source || 'site', date: new Date().toISOString() });
        await fetch(SUBSCRIBERS_BLOB, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subscribers: existing }),
        });
      }
    } catch (blobErr) {
      console.error('Blob storage error (non-fatal):', blobErr.message);
    }

    // 2. Send welcome email with 5 free prompts
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Your 5 Free AI Prompts That Make Money',
      html: `
        <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;">
          <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Your 5 Free AI Prompts</h1>
          <p style="font-size:16px;line-height:1.6;color:#374151;">Thanks for joining 1,000+ founders using AI to build faster. Here are your prompts:</p>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 12px;font-size:16px;color:#3B5FFF;">Prompt 1: Instant Sales Email</h3>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">You are a world-class B2B copywriter. Write a 3-paragraph cold email for [YOUR PRODUCT] targeting [YOUR AUDIENCE]. Lead with their biggest pain point, show how you solve it with a specific result, and end with a soft CTA to book a 15-min call. Keep it under 150 words. No fluff.</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 12px;font-size:16px;color:#3B5FFF;">Prompt 2: Social Media Hook Generator</h3>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">Generate 10 scroll-stopping hooks for [YOUR TOPIC] on [PLATFORM]. Each hook should be under 15 words, create curiosity or controversy, and make someone stop scrolling. Format: numbered list. Avoid clickbait — make each one deliverable.</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 12px;font-size:16px;color:#3B5FFF;">Prompt 3: Product Description That Converts</h3>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">Write a product description for [YOUR PRODUCT] at [PRICE]. Include: a benefit-driven headline, 3 bullet points (feature → benefit format), social proof placeholder, and a clear CTA. Tone: confident, concise, zero jargon. Target audience: [YOUR CUSTOMER].</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 12px;font-size:16px;color:#3B5FFF;">Prompt 4: Weekly Content Calendar</h3>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">Create a 7-day content calendar for [YOUR NICHE] on [PLATFORM]. For each day give: content type (carousel, video, text), topic, hook (first line), and CTA. Mix educational (3), entertaining (2), and promotional (2) posts. Include optimal posting times.</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 12px;font-size:16px;color:#3B5FFF;">Prompt 5: Business Strategy Brainstorm</h3>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">Act as a startup advisor. I run [YOUR BUSINESS] making [REVENUE]. My biggest challenge is [CHALLENGE]. Give me 5 actionable strategies to solve this in the next 30 days. For each: the strategy, why it works, first step to implement today, and expected impact. Be specific, not generic.</p>
          </div>

          <div style="background:#3B5FFF;border-radius:12px;padding:24px;margin:32px 0;text-align:center;">
            <p style="color:#FFF;font-size:18px;font-weight:700;margin:0 0 8px;">Want 200+ more prompts like these?</p>
            <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:0 0 16px;">Our AI Prompt Mega Pack has battle-tested prompts for sales, marketing, ops, and more.</p>
            <a href="https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d" style="display:inline-block;background:#FFF;color:#3B5FFF;font-weight:700;font-size:16px;padding:12px 32px;border-radius:100px;text-decoration:none;">Get the Mega Pack — $29</a>
          </div>

          <p style="font-size:14px;color:#6B7280;line-height:1.6;">Or grab <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style="color:#3B5FFF;">all 19 kits for $97</a> (save 85%).</p>

          <p style="font-size:14px;color:#6B7280;margin-top:32px;">Build something great,<br/>The MidasTools Team</p>

          <hr style="border:none;border-top:1px solid #E5E7EB;margin:32px 0 16px;"/>
          <p style="font-size:12px;color:#9CA3AF;text-align:center;">MidasTools — AI kits that make you money<br/>
          <a href="https://midastools.co" style="color:#9CA3AF;">midastools.co</a></p>
        </div>
      `,
    });

    // 3. Notify founder
    await resend.emails.send({
      from: FROM_EMAIL,
      to: FOUNDER_EMAIL,
      subject: `New subscriber: ${email}`,
      html: `
        <h2>New lead from midastools.com</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source || 'site-wide-capture'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' })} Mexico City</p>
        <p>They received the 5 free prompts welcome email automatically.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
