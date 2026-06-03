// Chatbot Builder — the answer endpoint the embedded widget calls on every visitor
// message. Loads the bot's knowledge sheet, answers ONLY from it (no hallucinated
// prices/hours), and — the money feature — captures the visitor's contact when they
// show intent, storing it as a lead for the business owner.
//
// Cost control: per-bot daily message cap so an embedded free bot can never bleed
// money. Pro bots (active subscription) get a much higher cap.

import { readKV, writeKV } from '../../../lib/kv-store';

const MODEL = 'claude-haiku-4-5-20251001';
const FREE_DAILY_MSG_CAP = 40;   // per bot per day on free
const PRO_DAILY_MSG_CAP = 1000;  // per bot per day on pro
const MAX_TURNS = 12;            // trailing conversation turns sent to the model

function clamp(s, n = 1200) {
  return String(s || '').trim().replace(/\s+/g, ' ').slice(0, n);
}

function corsHeaders(res) {
  // The widget is embedded on third-party sites, so the answer endpoint must be CORS-open.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function buildSystem(bot) {
  return [
    `You are the friendly customer-service assistant for the business "${bot.name}", embedded on their website. You speak to their website visitors (potential customers).`,
    'Answer questions accurately and concisely using ONLY the BUSINESS KNOWLEDGE below. Keep replies short (1-4 sentences) and warm, like a sharp front-desk person.',
    'NEVER invent prices, hours, phone numbers, availability, or policies. If the knowledge does not cover something, say so honestly and offer to have the team follow up.',
    '',
    'LEAD CAPTURE (important): When a visitor shows real interest — asks about booking, pricing for their specific job, availability, getting a quote, or anything needing a human follow-up — naturally offer to have the team reach out and ask for their name and best contact (email or phone). Do not be pushy; ask once it is helpful.',
    'When you have collected BOTH a name AND a contact (email or phone) from the visitor, append EXACTLY this on its very last line and nothing after it:',
    '<<LEAD {"name":"...","contact":"...","note":"what they want"}>>',
    'Never mention the <<LEAD>> tag to the visitor. If you have not collected a full contact, do not output the tag.',
    '',
    `BUSINESS KNOWLEDGE for ${bot.name}:`,
    bot.knowledge || '(no knowledge provided)',
  ].join('\n');
}

function extractLead(text) {
  const m = String(text || '').match(/<<LEAD\s*(\{[\s\S]*?\})\s*>>/);
  if (!m) return { clean: text, lead: null };
  let lead = null;
  try { lead = JSON.parse(m[1]); } catch {}
  const clean = String(text).replace(m[0], '').trim();
  return { clean, lead };
}

export default async function handler(req, res) {
  corsHeaders(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const id = clamp(req.body?.id, 40);
  if (!/^cb_[a-f0-9]{12}$/.test(id)) return res.status(400).json({ error: 'Unknown bot.' });

  const bot = await readKV(`chatbot:${id}`);
  if (!bot) return res.status(404).json({ error: 'This chatbot was not found. It may have been removed.' });

  const incoming = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const messages = incoming
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    .slice(-MAX_TURNS)
    .map(m => ({ role: m.role, content: clamp(m.content, 1200) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Send a message.' });
  }

  // Per-bot daily message cap (cost control).
  const pro = bot.plan === 'pro';
  const cap = pro ? PRO_DAILY_MSG_CAP : FREE_DAILY_MSG_CAP;
  const day = new Date().toISOString().slice(0, 10);
  const rlKey = `cb-msg-rl:${id}:${day}`;
  let used = 0;
  try { const rl = await readKV(rlKey); used = (rl && rl.count) || 0; } catch {}
  if (used >= cap) {
    return res.status(200).json({
      reply: "Thanks for your message! Our team will follow up shortly — please reach out directly and we'll be happy to help.",
      capped: true,
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ reply: bot.greeting || 'Thanks for your message — our team will follow up shortly!' });
  }

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: MODEL, max_tokens: 600, system: buildSystem(bot), messages }),
      signal: AbortSignal.timeout(30000),
    });
    if (!resp.ok) {
      return res.status(200).json({ reply: "I'm having a little trouble right now — please leave your email and the team will get right back to you." });
    }
    const data = await resp.json();
    const raw = data?.content?.[0]?.type === 'text' ? data.content[0].text : '';
    const { clean, lead } = extractLead(raw);

    try { await writeKV(rlKey, { count: used + 1 }); } catch {}

    // Store a captured lead for the business owner (owner-email notification wired next pass).
    if (lead && (lead.contact || lead.name)) {
      try {
        const leadsKey = `chatbot-leads:${id}`;
        const store = (await readKV(leadsKey)) || { leads: [] };
        store.leads = [
          ...(store.leads || []),
          { name: clamp(lead.name, 120), contact: clamp(lead.contact, 160), note: clamp(lead.note, 400), at: new Date().toISOString() },
        ].slice(-200);
        await writeKV(leadsKey, store);
      } catch (e) { console.error('[chatbot/respond] lead store failed:', e.message); }
    }

    return res.status(200).json({ reply: clean || "Thanks! How else can I help?", lead_captured: Boolean(lead) });
  } catch (err) {
    console.error('[chatbot/respond] error:', err.message);
    return res.status(200).json({ reply: "Sorry — something glitched. Please leave your email and we'll follow up!" });
  }
}
