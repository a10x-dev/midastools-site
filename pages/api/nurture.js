// Nurture email sequence - sends Day 1 and Day 2 follow-up emails
// Called via cron or manual trigger: GET /api/nurture?key=SECRET&day=1&to=email
// Or broadcast mode: GET /api/nurture?key=SECRET&day=1&broadcast=true (sends to all contacts)

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'MidasTools <hello@midastools.co>';
const SECRET_KEY = process.env.OUTREACH_SECRET || 'mt-outreach-2026';
const SUBSCRIBERS_BLOB = 'https://jsonblob.com/api/jsonBlob/019d7730-bd31-79cb-86f4-4b76dac3786b';

const BUNDLE_LINK = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const MEGA_PACK_LINK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';

function wrapEmail(content) {
  return `
    <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;">
      ${content}
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:32px 0 16px;"/>
      <p style="font-size:12px;color:#9CA3AF;text-align:center;">
        MidasTools — AI kits that make you money<br/>
        <a href="https://midastools.co" style="color:#9CA3AF;">midastools.co</a>
      </p>
    </div>
  `;
}

const emails = {
  // Day 1: Value email — teach something, soft CTA
  1: {
    subject: "The #1 mistake people make with AI prompts (and the fix)",
    html: wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Most AI prompts are useless. Here's why.</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Hey — quick follow-up on those 5 prompts I sent yesterday.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Here's what I see 90% of people do wrong with AI:</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>They write prompts like this:</strong><br/>
      <em style="color:#6B7280;">"Write me a sales email"</em></p>
      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>And get garbage back.</strong> Generic, robotic, sounds like every other AI-generated email.</p>
      <p style="font-size:16px;line-height:1.7;color:#374151;">The fix? <strong>The R-C-O framework:</strong></p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <p style="font-size:16px;line-height:1.7;color:#374151;margin:0;">
          <strong style="color:#3B5FFF;">R</strong>ole — Tell the AI WHO to be<br/>
          <strong style="color:#3B5FFF;">C</strong>ontext — Give it YOUR specific situation<br/>
          <strong style="color:#3B5FFF;">O</strong>utput — Define the EXACT format you want
        </p>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>Before (bad):</strong><br/>
      <em style="color:#6B7280;">"Write me a sales email"</em></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>After (R-C-O):</strong><br/>
      <em style="color:#3B5FFF;">"You are a B2B SaaS copywriter who's generated $2M+ in pipeline. I sell project management software to marketing agencies with 10-50 employees. Write a 3-paragraph cold email that leads with their #1 pain (missed deadlines), includes a specific metric, and ends with a soft CTA. Under 150 words."</em></p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">Night and day difference. Every prompt in our kits uses this framework — that's why they actually work.</p>

      <div style="text-align:center;margin:32px 0;">
        <a href="${MEGA_PACK_LINK}" style="display:inline-block;background:#3B5FFF;color:#FFF;font-weight:700;font-size:16px;padding:14px 36px;border-radius:100px;text-decoration:none;">Get 500+ R-C-O Prompts — $29</a>
        <p style="font-size:13px;color:#6B7280;margin-top:8px;">Works with ChatGPT, Claude, Gemini, and any LLM</p>
      </div>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Talk tomorrow,<br/>The MidasTools Team</p>
    `),
  },

  // Day 2: Urgency + bundle CTA — close the sale
  2: {
    subject: "19 AI kits, one price (82% off ends soon)",
    html: wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Quick math on the bundle</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">I'll keep this short because the numbers speak for themselves:</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;color:#374151;">19 individual kits</td>
            <td style="padding:8px 0;text-align:right;color:#374151;"><s>$661</s></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#374151;font-weight:700;">All Kits Bundle</td>
            <td style="padding:8px 0;text-align:right;color:#3B5FFF;font-weight:700;font-size:20px;">$97</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#16A34A;font-weight:600;" colspan="2">You save $564 (85% off)</td>
          </tr>
        </table>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;"><strong>What's inside the bundle:</strong></p>
      <ul style="font-size:15px;line-height:2;color:#374151;">
        <li>500+ copy-paste AI prompts (sales, marketing, content, ops)</li>
        <li>AI kits for real estate, e-commerce, SaaS, freelancing</li>
        <li>Image & video prompt packs (Midjourney, DALL-E, Sora, Runway)</li>
        <li>Claude Cowork mastery prompts & CLAUDE.md templates</li>
        <li>Reddit lead generation playbook ($51K/mo case study)</li>
        <li>Resume, presentation, email marketing templates</li>
        <li>Notion AI workspace templates</li>
      </ul>

      <p style="font-size:16px;line-height:1.7;color:#374151;">That's <strong>$97 for everything we've ever built.</strong> One purchase, lifetime access, instant download.</p>

      <div style="text-align:center;margin:32px 0;">
        <a href="${BUNDLE_LINK}" style="display:inline-block;background:#3B5FFF;color:#FFF;font-weight:700;font-size:18px;padding:16px 40px;border-radius:100px;text-decoration:none;">Get All 19 Kits — $97</a>
        <p style="font-size:13px;color:#6B7280;margin-top:8px;">Instant download • Works with any AI tool • Lifetime access</p>
      </div>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Build something great,<br/>The MidasTools Team</p>
    `),
  },

  // Broadcast: Value + soft sell — for blasting all subscribers
  broadcast: {
    subject: "13 free AI tools you can use right now (no signup)",
    html: wrapEmail(`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">13 Free AI Tools — No Login Required</h1>
      <p style="font-size:16px;line-height:1.7;color:#374151;">Hey — I built 13 free AI tools and put them on our site. No signup, no paywall, just use them:</p>

      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
        <ol style="font-size:15px;line-height:2.2;color:#374151;padding-left:20px;margin:0;">
          <li><a href="https://midastools.co/prompt-generator" style="color:#3B5FFF;text-decoration:none;font-weight:600;">AI Prompt Generator</a> — Generate prompts for any task</li>
          <li><a href="https://midastools.co/business-name-generator" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Business Name Generator</a> — AI-powered naming</li>
          <li><a href="https://midastools.co/image-prompt-builder" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Image Prompt Builder</a> — Midjourney/DALL-E prompts</li>
          <li><a href="https://midastools.co/prompt-enhancer" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Prompt Enhancer</a> — Make any prompt 10x better</li>
          <li><a href="https://midastools.co/prompt-roaster" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Prompt Roaster</a> — Get brutally honest feedback</li>
          <li><a href="https://midastools.co/soul-generator" style="color:#3B5FFF;text-decoration:none;font-weight:600;">SOUL.md Generator</a> — Create AI agent identity files</li>
          <li><a href="https://midastools.co/ai-income-blueprint" style="color:#3B5FFF;text-decoration:none;font-weight:600;">AI Income Blueprint</a> — Personalized money plan</li>
          <li><a href="https://midastools.co/ai-job-risk" style="color:#3B5FFF;text-decoration:none;font-weight:600;">AI Job Risk Calculator</a> — Will AI take your job?</li>
          <li><a href="https://midastools.co/openclaw-cost-calculator" style="color:#3B5FFF;text-decoration:none;font-weight:600;">OpenClaw Cost Calculator</a> — Compare AI model pricing</li>
          <li><a href="https://midastools.co/cowork-setup-wizard" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Claude Cowork Setup Wizard</a> — Configure your AI workspace</li>
          <li><a href="https://midastools.co/buyer-intent-generator" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Buyer Intent Generator</a> — Find Reddit leads</li>
          <li><a href="https://midastools.co/hashtag-generator" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Hashtag Generator</a> — Viral hashtag suggestions</li>
          <li><a href="https://midastools.co/email-subject-tester" style="color:#3B5FFF;text-decoration:none;font-weight:600;">Email Subject Tester</a> — Score your email subjects</li>
        </ol>
      </div>

      <p style="font-size:16px;line-height:1.7;color:#374151;">These are 100% free, run in your browser, and work instantly. Share them with anyone who could use them.</p>

      <p style="font-size:16px;line-height:1.7;color:#374151;">And if you want the full toolkit — <strong>500+ prompts, 19 kits, templates for every business function</strong> — the bundle is the move:</p>

      <div style="text-align:center;margin:32px 0;">
        <a href="${BUNDLE_LINK}" style="display:inline-block;background:#3B5FFF;color:#FFF;font-weight:700;font-size:16px;padding:14px 36px;border-radius:100px;text-decoration:none;">Get All 19 Kits — $97 (85% off)</a>
      </div>

      <p style="font-size:14px;color:#6B7280;line-height:1.6;">Keep building,<br/>The MidasTools Team</p>
    `),
  },
};

export default async function handler(req, res) {
  const { key, day, to, broadcast } = req.query;

  if (key !== SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const emailDay = broadcast === 'true' ? 'broadcast' : day;
  const template = emails[emailDay];

  if (!template) {
    return res.status(400).json({ error: `Invalid day: ${emailDay}. Use 1, 2, or broadcast=true` });
  }

  try {
    // Broadcast mode: send to all contacts in audience
    if (broadcast === 'true') {
      // Read subscribers from jsonblob storage
      const blobRes = await fetch(SUBSCRIBERS_BLOB);
      const blobData = await blobRes.json();
      const activeContacts = (blobData.subscribers || []).filter(s => !s.unsubscribed);

      if (activeContacts.length === 0) {
        return res.status(200).json({ success: true, sent: 0, message: 'No active subscribers' });
      }

      const results = [];
      for (const contact of activeContacts) {
        try {
          await resend.emails.send({
            from: FROM_EMAIL,
            to: contact.email,
            subject: template.subject,
            html: template.html,
          });
          results.push({ email: contact.email, status: 'sent' });
        } catch (err) {
          results.push({ email: contact.email, status: 'failed', error: err.message });
        }
      }

      // Notify founder
      await resend.emails.send({
        from: FROM_EMAIL,
        to: 'iam+midas@armando.mx',
        subject: `Broadcast sent: "${template.subject}" → ${results.filter(r => r.status === 'sent').length} subscribers`,
        html: `<h2>Broadcast Report</h2>
          <p><strong>Subject:</strong> ${template.subject}</p>
          <p><strong>Sent:</strong> ${results.filter(r => r.status === 'sent').length}</p>
          <p><strong>Failed:</strong> ${results.filter(r => r.status === 'failed').length}</p>
          <h3>Details:</h3>
          <ul>${results.map(r => `<li>${r.email} — ${r.status}${r.error ? ` (${r.error})` : ''}</li>`).join('')}</ul>`,
      });

      return res.status(200).json({
        success: true,
        sent: results.filter(r => r.status === 'sent').length,
        failed: results.filter(r => r.status === 'failed').length,
        results,
      });
    }

    // Single send mode
    if (!to) {
      return res.status(400).json({ error: 'Missing "to" param for single send' });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: decodeURIComponent(to),
      subject: template.subject,
      html: template.html,
    });

    return res.status(200).json({ success: true, to, day: emailDay });
  } catch (error) {
    console.error('Nurture error:', error);
    return res.status(500).json({ error: error.message });
  }
}
