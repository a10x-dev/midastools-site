import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'MidasTools <hello@midastools.co>';
const FOUNDER_EMAIL = 'iam+midas@armando.mx';
const BLOB_ID = '019d89aa-5d3d-7595-9dcb-edd6b6b5c034';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

async function readSubscribers() {
  const res = await fetch(BLOB_URL, { headers: { 'Content-Type': 'application/json' } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.subscribers || [];
}

async function writeSubscribers(subscribers) {
  await fetch(BLOB_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subscribers }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source, website } = req.body;

  // Honeypot: bots fill the hidden "website" field, real humans don't
  if (website) {
    // Silently accept but don't process — bots think it worked
    return res.status(200).json({ success: true });
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  // Rate limit: reject if email has suspicious dot patterns (e.g. d.g.r.av.e.r)
  const localPart = email.split('@')[0];
  const dotCount = (localPart.match(/\./g) || []).length;
  const letterCount = localPart.replace(/[^a-zA-Z]/g, '').length;
  if (dotCount > 3 && dotCount / letterCount > 0.3) {
    return res.status(200).json({ success: true }); // Silent reject
  }

  try {
    // 1. Add contact to subscriber storage (GitHub Gist — reliable, free)
    try {
      const existing = await readSubscribers();
      if (!existing.find(s => s.email === email)) {
        existing.push({ email, source: source || 'site', date: new Date().toISOString() });
        await writeSubscribers(existing);
      }
    } catch (blobErr) {
      console.error('Gist storage error (non-fatal):', blobErr.message);
    }

    // 2. Send welcome email with 5 free prompts
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Here are your 5 AI prompts (try #1 first)',
      html: `
        <div style="font-family:'Inter',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;">
          <h1 style="font-size:24px;font-weight:700;margin:0 0 16px;">Your 5 Free AI Prompts</h1>
          <p style="font-size:16px;line-height:1.6;color:#374151;">These aren't generic prompts. Each one uses a specific technique that produces dramatically better AI output. Try any of them right now — you'll see the difference immediately.</p>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 4px;font-size:16px;color:#3B5FFF;">Prompt 1: The "Steal My Competitor's Strategy" Analyzer</h3>
            <p style="font-size:12px;color:#6B7280;margin:0 0 12px;">Technique: Forces AI to think like a strategist, not a summarizer</p>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">I want you to reverse-engineer a competitor's business strategy. The competitor is [COMPETITOR NAME/URL]. Analyze their approach across these 5 dimensions and give me specific, actionable takeaways for each:<br/><br/>1. PRICING PSYCHOLOGY — What pricing tricks are they using? (anchoring, decoy pricing, charm pricing, bundling). What does their pricing tell you about who they think their customer is?<br/>2. MESSAGING HIERARCHY — What's the #1 emotion they're targeting on their homepage? What objections are they preemptively handling? Copy the exact phrases that are doing the heavy lifting.<br/>3. CONTENT MOAT — What content are they ranking for? What topics do they own that would be hard to compete with? Where are the gaps they're ignoring?<br/>4. CONVERSION ARCHITECTURE — Map their funnel: how do they take someone from "just browsing" to "credit card out"? Count the steps. Identify the friction points.<br/>5. VULNERABILITY REPORT — Based on all of the above, give me 3 specific ways I could win customers away from them with my product [YOUR PRODUCT/SERVICE].<br/><br/>Be brutally honest. I don't want compliments about my competitor — I want their playbook so I can beat them.</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 4px;font-size:16px;color:#3B5FFF;">Prompt 2: The "Reply-Magnet" Cold Email</h3>
            <p style="font-size:12px;color:#6B7280;margin:0 0 12px;">Technique: Pattern-interrupt opening + micro-commitment CTA</p>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">Write a cold email that gets replies (not just opens). Context:<br/>- I sell: [YOUR PRODUCT/SERVICE]<br/>- Target recipient: [THEIR ROLE, e.g. "VP of Marketing at B2B SaaS companies, 50-200 employees"]<br/>- Their likely biggest frustration right now: [PAIN POINT]<br/><br/>Rules you MUST follow:<br/>- First line must NOT be "I hope this finds you well" or "My name is..." — start with something they've never read before. Use a specific, surprising observation about their company or industry.<br/>- Total length: 4-6 sentences max. Every sentence must earn the next one.<br/>- End with a micro-commitment CTA (not "let's hop on a call" — something easier, like "Worth exploring, or totally off base?")<br/>- Write 3 versions: one that leads with curiosity, one that leads with a number/result, one that leads with a bold claim.<br/>- After the 3 versions, explain which one you'd send first and why.</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 4px;font-size:16px;color:#3B5FFF;">Prompt 3: The "Money Page" Website Copy</h3>
            <p style="font-size:12px;color:#6B7280;margin:0 0 12px;">Technique: Objection-first structure that sells by removing doubt</p>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">Write the sales page copy for [YOUR PRODUCT] at [PRICE]. But here's the constraint — structure the ENTIRE page around objections, not features.<br/><br/>First, list the 7 most common reasons someone would NOT buy this product (price too high, not sure it works, seen similar things, etc.). Then write a sales page where each section demolishes one objection — without ever sounding defensive.<br/><br/>Format:<br/>- Hero section: The boldest promise you can make that's still true. One sentence. Then a subline that immediately answers "but how?"<br/>- Section 1-7: Each one addresses an objection. Lead with the objection as a subheading ("You're thinking: [objection]"), then destroy it in 2-3 sentences with proof, logic, or reframing.<br/>- Final CTA: A "reason to act now" that isn't fake scarcity<br/><br/>Tone: Confident, direct, slightly irreverent. Like talking to a smart friend, not writing corporate copy. Target audience: [YOUR CUSTOMER].</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 4px;font-size:16px;color:#3B5FFF;">Prompt 4: The "30-Day Profit Sprint" Planner</h3>
            <p style="font-size:12px;color:#6B7280;margin:0 0 12px;">Technique: Constraint-based planning (forces AI to prioritize ruthlessly)</p>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">I need a 30-day action plan to increase revenue for my business. But here's the constraint: I can only spend 2 hours per day on this, and I have $0 budget for ads or tools.<br/><br/>My business: [DESCRIBE — what you sell, current revenue, how you get customers now]<br/><br/>Rules:<br/>- Week 1 must focus ONLY on converting existing leads/traffic/contacts (no new acquisition)<br/>- Week 2: one new distribution channel that costs $0<br/>- Week 3: one offer optimization (pricing, bundling, or upsell)<br/>- Week 4: systematize whatever worked in weeks 1-3<br/><br/>For each day, give me: the ONE task (15-word max), why it matters, and the specific deliverable I should have by end of day.<br/><br/>Do NOT suggest "create content" or "post on social media" unless you specify the EXACT type, topic, platform, and format. Vague advice = useless advice. I want a plan I can execute with zero thinking.</p>
          </div>

          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin:24px 0;">
            <h3 style="margin:0 0 4px;font-size:16px;color:#3B5FFF;">Prompt 5: The "Instant Expert" Content System</h3>
            <p style="font-size:12px;color:#6B7280;margin:0 0 12px;">Technique: Chain-of-thought forcing + format lock</p>
            <p style="font-size:14px;line-height:1.6;color:#374151;margin:0;">I need to create 1 piece of content that I can repurpose into 10 pieces across platforms. Here's how:<br/><br/>Topic: [YOUR TOPIC]<br/>My expertise level: [beginner/intermediate/expert]<br/>Target audience: [WHO]<br/><br/>Step 1: Write a 500-word "pillar post" — an opinionated take on this topic that includes at least one contrarian viewpoint, one specific data point or example, and one framework the reader can immediately use.<br/><br/>Step 2: From that post, extract and write:<br/>- 3 Twitter/X threads (5 tweets each, hook + value + CTA)<br/>- 2 LinkedIn posts (one story-format, one list-format)<br/>- 1 email newsletter edition (subject line + 3-paragraph body)<br/>- 2 Instagram carousel scripts (slide 1 = hook, slides 2-7 = points, slide 8 = CTA)<br/>- 1 YouTube Shorts / TikTok / Reel script (30 seconds, pattern-interrupt opening)<br/>- 1 Reddit post (authentic tone, no self-promotion, value-first — specify the subreddit)<br/><br/>Each piece must feel native to its platform — not like a copy-paste job. The LinkedIn post should NOT read like a tweet, and the Reddit post should NOT read like an ad.</p>
          </div>

          <div style="background:#3B5FFF;border-radius:12px;padding:24px;margin:32px 0;text-align:center;">
            <p style="color:#FFF;font-size:18px;font-weight:700;margin:0 0 8px;">These 5 prompts are from our free collection. Want the full arsenal?</p>
            <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:0 0 16px;">500+ prompts with the same level of detail — for sales, marketing, ops, hiring, content, and more.</p>
            <a href="https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d" style="display:inline-block;background:#FFF;color:#3B5FFF;font-weight:700;font-size:16px;padding:12px 32px;border-radius:100px;text-decoration:none;">Get the Mega Pack — $29</a>
          </div>

          <p style="font-size:14px;color:#6B7280;line-height:1.6;">Or grab <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style="color:#3B5FFF;">all 21 kits for $97</a> (save 85%).</p>

          <p style="font-size:14px;color:#6B7280;margin-top:32px;">Build something great,<br/>The MidasTools Team</p>

          <hr style="border:none;border-top:1px solid #E5E7EB;margin:32px 0 16px;"/>
          <p style="font-size:12px;color:#9CA3AF;text-align:center;">MidasTools — AI kits that make you money<br/>
          <a href="https://www.midastools.co" style="color:#9CA3AF;">midastools.co</a></p>
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
