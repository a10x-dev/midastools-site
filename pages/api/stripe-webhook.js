import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { decodeAttributionFromClientRef } from '../../lib/stripe-attribution';
import { readKV, writeKV } from '../../lib/kv-store';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Map Stripe checkout URLs to kit info
// Each Stripe Payment Link has a unique ID embedded in the URL
const KIT_MAP = {
  // $9 Tripwire — web-delivered, not a zip
  'starter-pack': {
    name: 'Best 20 AI Prompts — Starter Pack',
    file: null,
    deliveryUrl: 'https://www.midastools.co/starter-pack-delivery',
    subject: 'Your 20 AI Prompts are ready',
    items: [
      'Cold Outreach (4 reply-magnet prompts)',
      'Landing Page Copy (3 conversion-tuned prompts)',
      'Social Content (4 calendar + hook prompts)',
      'AI Image Gen (3 production-ready prompts)',
      'Sales & Offers (3 irresistible-offer prompts)',
      'Productivity (3 decision/focus prompts)',
      'Works with ChatGPT, Claude, Gemini',
    ],
  },
  // Default / fallback
  'default': {
    name: 'OpenClaw Starter Kit',
    file: 'openclaw-starter-kit.zip',
    subject: 'Your OpenClaw Starter Kit is ready',
    items: [
      '5 SOUL.md identity templates',
      'Heartbeat workflow system',
      'Daily review template',
      '5 product launch prompts',
      'Revenue ops playbook',
      'Complete setup guide',
    ],
  },
  'real-estate': {
    name: 'Real Estate AI Kit',
    file: 'real-estate-kit.zip',
    subject: 'Your Real Estate AI Kit is ready',
    items: [
      'Instant lead response templates (5 scenarios)',
      'Listing description generator (MLS + social)',
      '30-day follow-up sequences (buyer + seller)',
      'Market analysis & CMA prompts',
      'Client communication scripts',
      'Open house & showing workflows',
      'Complete setup guide',
    ],
  },
  'content-creator': {
    name: 'Content Creator AI Kit',
    file: 'content-creator-kit.zip',
    subject: 'Your Content Creator AI Kit is ready',
    items: [
      'Content repurposing engine (1 piece → 10)',
      'Twitter/X thread generator (3 styles)',
      'YouTube script builder (shorts + long-form)',
      'Newsletter writer templates',
      '30-day content calendar generator',
      '50+ headline & hook formulas',
      'Complete setup guide',
    ],
  },
  'freelancer': {
    name: 'Freelancer AI Kit',
    file: 'freelancer-kit.zip',
    subject: 'Your Freelancer AI Kit is ready',
    items: [
      'Client proposal generator',
      'Invoice & payment chaser (7/14/30 day)',
      'Client onboarding system',
      'Scope protector templates',
      'Rate calculator & negotiation scripts',
      'Weekly client update templates',
      'Complete setup guide',
    ],
  },
  'small-business': {
    name: 'Small Business AI Kit',
    file: 'small-business-kit.zip',
    subject: 'Your Small Business AI Kit is ready',
    items: [
      'Social media content engine (all platforms)',
      'Email marketing templates (welcome + promo + re-engage)',
      'Customer service response scripts',
      'Hiring & HR template library',
      'Business operations prompts (SOPs, reports)',
      'Sales & lead follow-up sequences',
      'Complete setup guide',
    ],
  },
  'prompt-mega-pack': {
    name: 'AI Prompt Mega Pack',
    file: 'ai-prompt-mega-pack.zip',
    subject: 'Your AI Prompt Mega Pack is ready',
    items: [
      '35+ Copywriting & Sales prompts (headlines, sales pages, email sequences, ads)',
      '35+ Social Media prompts (threads, carousels, TikTok scripts, content calendars)',
      '35+ Content Creation prompts (blogs, YouTube scripts, newsletters, SEO)',
      '35+ Business Operations prompts (emails, SOPs, hiring, customer service)',
      '35+ Personal Branding prompts (LinkedIn, resumes, thought leadership, pitches)',
      '35+ Productivity prompts (decision frameworks, automation, goal tracking)',
      'Pro tips & best practices for each category',
    ],
  },
  'ecommerce': {
    name: 'E-commerce AI Kit',
    file: 'ecommerce-kit.zip',
    subject: 'Your E-commerce AI Kit is ready',
    items: [
      'Product description generator (30+ prompts for every format)',
      'Email marketing sequences (welcome, abandoned cart, win-back)',
      'Ad copy templates (Facebook, Google, TikTok, Pinterest)',
      'Social media for e-commerce (product posts, UGC, stories)',
      'Customer communication scripts (orders, returns, reviews)',
      'SEO content strategy (collection pages, buying guides, meta tags)',
      'Complete setup guide',
    ],
  },
  'saas-founder': {
    name: 'SaaS Founder AI Kit',
    file: 'saas-founder-kit.zip',
    subject: 'Your SaaS Founder AI Kit is ready',
    items: [
      'Launch playbook & Product Hunt copy (25+ prompts)',
      'Onboarding & activation email sequences (25+ templates)',
      'Churn prevention campaigns (20+ sequences)',
      'Growth marketing frameworks (25+ prompts)',
      'Customer success scripts (20+ templates)',
      'Pricing & positioning copy (20+ prompts)',
      'Complete setup guide',
    ],
  },
  'social-media-kit': {
    name: 'AI Social Media Manager Kit',
    file: 'social-media-kit.zip',
    subject: 'Your AI Social Media Manager Kit is ready',
    items: [
      'Content calendar system (25+ prompts)',
      'Caption hooks & templates (30+ templates)',
      'Viral content formulas (25+ prompts)',
      'Analytics & growth frameworks (25+ prompts)',
      'Community management scripts (20+ templates)',
      'Paid social ad templates (25+ prompts)',
      'Complete setup guide',
    ],
  },
  'email-marketing-kit': {
    name: 'AI Email Marketing Kit',
    file: 'email-marketing-kit.zip',
    subject: 'Your AI Email Marketing Kit is ready',
    items: [
      'Welcome & onboarding sequences (25+ prompts)',
      'Sales & promotional emails (25+ prompts)',
      'Newsletter content templates (20+ prompts)',
      'Cold outreach & follow-ups (20+ prompts)',
      'Retention & re-engagement campaigns (20+ prompts)',
      'Subject lines & copywriting frameworks (20+ prompts)',
      'Complete setup guide',
    ],
  },
  'presentation-kit': {
    name: 'AI Presentation & Pitch Deck Kit',
    file: 'presentation-kit.zip',
    subject: 'Your AI Presentation & Pitch Deck Kit is ready',
    items: [
      'Pitch deck prompts (25+ prompts)',
      'Sales presentation templates (25+ prompts)',
      'Conference talk outlines (20+ prompts)',
      'Business report frameworks (20+ prompts)',
      'Training & workshop decks (20+ prompts)',
      'Slide design & storytelling (20+ prompts)',
      'Complete setup guide',
    ],
  },
  'notion-templates': {
    name: 'Notion AI Templates Kit',
    file: 'notion-templates-kit.zip',
    subject: 'Your Notion AI Templates Kit is ready',
    items: [
      'Project management templates (25+ Notion pages)',
      'Content calendar & planning (25+ templates)',
      'CRM & sales pipeline (25+ templates)',
      'Personal productivity system (25+ templates)',
      'Business operations SOPs (25+ templates)',
      'Freelancer & agency templates (25+ templates)',
      'Complete setup guide',
    ],
  },
  'video-prompt-pack': {
    name: 'AI Video Prompt Pack',
    file: 'ai-video-prompt-pack.zip',
    subject: 'Your AI Video Prompt Pack is ready',
    items: [
      '25+ Social media video prompts (TikTok, Reels, Shorts)',
      '25+ Product & marketing video prompts',
      '25+ Educational & tutorial video prompts',
      '25+ Cinematic & storytelling prompts',
      '25+ Business & corporate video prompts',
      '25+ Viral & trending style prompts',
      'Pro tips & best practices for each category',
    ],
  },
  'image-prompt-pack': {
    name: 'AI Image Prompt Pack',
    file: 'ai-image-prompt-pack.zip',
    subject: 'Your AI Image Prompt Pack is ready',
    items: [
      '25+ Social media content image prompts',
      '25+ Brand & marketing image prompts',
      '25+ E-commerce product image prompts',
      '25+ Content & blog visual prompts',
      '25+ Professional headshot & portrait prompts',
      '25+ Viral aesthetic style prompts',
      'Compatible with ChatGPT, Midjourney, DALL-E, Stable Diffusion, Leonardo AI',
    ],
  },
  'muse-spark': {
    name: 'Meta Muse Spark Prompt Kit',
    file: null,
    manual: true,
    subject: 'Your Meta Muse Spark Prompt Kit — delivery within 24 hours',
    items: [
      '100+ Muse Spark prompts (8 categories)',
      'Visual Coding prompts',
      'Multimodal Reasoning prompts',
      'Contemplating Mode prompts',
      'Multi-Agent Orchestration patterns',
      'Mode Selection Guide + Cheatsheet',
    ],
  },
  'claude-code': {
    name: 'Claude Code Mastery Kit',
    file: null,
    manual: true,
    subject: 'Your Claude Code Mastery Kit — delivery within 24 hours',
    items: [
      'Claude Code workflow templates',
      'Multi-file refactor prompts',
      'Codebase onboarding sequences',
      'Test-generation patterns',
      'Repo-aware debugging prompts',
      'CLI productivity setup guide',
    ],
  },
  'reddit-lead-kit': {
    name: 'Reddit Lead Generation Kit',
    file: null,
    manual: true,
    subject: 'Your Reddit Lead Generation Kit — delivery within 24 hours',
    items: [
      'Subreddit research prompts',
      'Comment-engagement templates',
      'DM outreach sequences',
      'Value-first posting frameworks',
      'Compliance + ToS playbook',
      'Lead-tracking spreadsheet templates',
    ],
  },
  'team-adoption': {
    name: 'AI Team Adoption Kit',
    file: 'team-adoption-kit.zip',
    subject: 'Your AI Team Adoption Kit is ready',
    items: [
      '8 department playbooks — 48 paste-and-run prompts (Engineering, Sales, Marketing, Support, Product, Finance, HR, Legal)',
      'AI Proficiency Assessment — L0-L3 rubric + self + manager scorecards',
      'Weekly AI Usage Leaderboard — Notion + Google Sheets templates',
      'Internal AI Skills Marketplace — peer-learning + contribution-tracking framework',
      'ROI Calculator + Quarterly Adoption Report template',
      'Day 1 Setup Guide, AI Office Hours playbook, Skill Discovery Guide, Best Practices Wiki, 90-Day Rollout Roadmap',
    ],
  },
  'cowork-mastery': {
    name: 'Claude Cowork Mastery Kit',
    file: null,
    manual: true,
    subject: 'Your Claude Cowork Mastery Kit — delivery within 24 hours',
    items: [
      'Cowork session frameworks',
      'Pair-with-Claude workflow templates',
      'Context-handoff prompts',
      'Multi-session continuity patterns',
      'Project-state SOUL.md templates',
      'Setup wizard + best-practices guide',
    ],
  },
  'champion-monthly': {
    name: 'MidasTools Champion Monthly',
    file: null,
    subscription: true,
    subject: 'Welcome to MidasTools Champion — first drop in 7 days',
    items: [
      'Weekly AI tip calibrated to your role + company context',
      'Monthly prompt drop targeting your next team pain',
      'Prompt validator — paste any prompt, get critique + rewrite',
      'Personalized AI search tool seeded with your context',
      'Idea validator — paste an idea, get pushback + alternatives',
      'Monthly 1-page competitive AI brief for your industry',
    ],
  },
  'pro-pass': {
    name: 'MidasTools Pro Pass',
    file: null,
    proPass: true,
    subject: 'Your MidasTools Pro Pass — unlock code inside',
    items: [
      'Unlimited AI generations (our best model)',
      'Saved & reusable campaigns',
      'Bulk mode — paste 10 prospects, get 10 tailored messages',
      'Every MidasTools money-tool, unlocked',
      'Lifetime access — one payment, no subscription',
    ],
  },
  'bundle': {
    name: 'All Kits Bundle',
    file: null, // Multiple files
    subject: 'Your Complete AI Toolkit Bundle is ready',
    items: [
      'AI Video Prompt Pack (150+ video generation prompts)',
      'AI Image Prompt Pack (150+ image generation prompts)',
      'AI Prompt Mega Pack (145+ text prompts)',
      'Notion AI Templates Kit (150+ Notion templates)',
      'OpenClaw Starter Kit (5 identity templates + workflows)',
      'Real Estate AI Kit (lead response + listings + follow-ups)',
      'Content Creator AI Kit (repurposing + scripts + calendar)',
      'Freelancer AI Kit (proposals + invoicing + onboarding)',
      'Small Business AI Kit (social + email + operations)',
      'E-commerce AI Kit (product descriptions + email + ads)',
      'SaaS Founder AI Kit (launch + onboarding + churn prevention)',
      'AI Social Media Manager Kit (65+ social media prompts)',
      'AI Email Marketing Kit (125+ email marketing prompts)',
      'AI Presentation & Pitch Deck Kit (125+ presentation prompts)',
      'All future kits — free, forever',
    ],
    files: [
      { name: 'AI Video Prompt Pack', file: 'ai-video-prompt-pack.zip' },
      { name: 'AI Image Prompt Pack', file: 'ai-image-prompt-pack.zip' },
      { name: 'AI Prompt Mega Pack', file: 'ai-prompt-mega-pack.zip' },
      { name: 'Notion AI Templates Kit', file: 'notion-templates-kit.zip' },
      { name: 'OpenClaw Starter Kit', file: 'openclaw-starter-kit.zip' },
      { name: 'Real Estate AI Kit', file: 'real-estate-kit.zip' },
      { name: 'Content Creator AI Kit', file: 'content-creator-kit.zip' },
      { name: 'Freelancer AI Kit', file: 'freelancer-kit.zip' },
      { name: 'Small Business AI Kit', file: 'small-business-kit.zip' },
      { name: 'E-commerce AI Kit', file: 'ecommerce-kit.zip' },
      { name: 'SaaS Founder AI Kit', file: 'saas-founder-kit.zip' },
      { name: 'AI Social Media Manager Kit', file: 'social-media-kit.zip' },
      { name: 'AI Email Marketing Kit', file: 'email-marketing-kit.zip' },
      { name: 'AI Presentation & Pitch Deck Kit', file: 'presentation-kit.zip' },
    ],
  },
};

// Detect kit type from Stripe session metadata or product name
function detectKit(session) {
  // Check metadata first (most reliable)
  const kitType = session.metadata?.kit_type;
  if (kitType && KIT_MAP[kitType]) return KIT_MAP[kitType];

  // Check payment link ID
  const paymentLink = session.payment_link;
  // Map known payment links to kits
  const PAYMENT_LINK_MAP = {
    // Starter Kit
    'plink_1R...': 'default',
    // $9 Tripwire — 20 Best Prompts Starter Pack
    'plink_1TNBCeAdkDx8xZMks2c0wz2y': 'starter-pack',
    // Real Estate Kit
    'plink_fZueVcb8r6iR5GAfkmcMM08': 'real-estate',
    // Content Creator Kit
    'plink_eVq7sK90j36F4CwdcecMM09': 'content-creator',
    // Freelancer Kit
    'plink_7sY3cu7Wfaz71qkfkmcMM0a': 'freelancer',
    // Small Business Kit
    'plink_3cIaEW6SbcHfed6egicMM0c': 'small-business',
    // Bundle
    'plink_bJe7sK0tNdLjgle0pscMM0b': 'bundle',
    // Manual-fulfillment SKUs (no ZIP yet — pending content build per Path A/B/C decision).
    // Without these mappings, sales fall through to KIT_MAP['default'] (OpenClaw Starter)
    // which conflicts with /thank-you's "delivery within 24h" message.
    'plink_1TKgapAdkDx8xZMkxH6994A5': 'muse-spark',
    'plink_1TKdTKAdkDx8xZMkd1Zjye59': 'claude-code',
    'plink_1TKVLDAdkDx8xZMkJzKwgrfQ': 'reddit-lead-kit',
    'plink_1TKNnAAdkDx8xZMkWZMpr8gW': 'team-adoption',
    'plink_1TKL1LAdkDx8xZMkep0Q0e4e': 'cowork-mastery',
    // MidasTools Champion Monthly — $199/mo recurring subscription (created Session 28, May 20)
    'plink_1TZGT5AdkDx8xZMkUrG20eAO': 'champion-monthly',
    // MidasTools Pro Pass — $39 one-time lifetime unlock (created 2026-05-28)
    'plink_1TcGuyAdkDx8xZMk0Z7mTOwC': 'pro-pass',
    // Chatbot Builder — Live + Leads — $39/mo recurring (created 2026-06-03)
    'plink_1TeLMeAdkDx8xZMk6MyHUoAx': 'chatbot-pro',
  };
  if (paymentLink && PAYMENT_LINK_MAP[paymentLink]) {
    return KIT_MAP[PAYMENT_LINK_MAP[paymentLink]];
  }

  // Check product/line item name as fallback
  const productName = (session.metadata?.product_name || '').toLowerCase();
  if (productName.includes('starter pack') || productName.includes('best 20')) return KIT_MAP['starter-pack'];
  if (productName.includes('video')) return KIT_MAP['video-prompt-pack'];
  if (productName.includes('image')) return KIT_MAP['image-prompt-pack'];
  if (productName.includes('mega pack') || productName.includes('prompt mega') || productName.includes('prompt pack')) return KIT_MAP['prompt-mega-pack'];
  if (productName.includes('real estate')) return KIT_MAP['real-estate'];
  if (productName.includes('content creator') || productName.includes('creator')) return KIT_MAP['content-creator'];
  if (productName.includes('freelancer')) return KIT_MAP['freelancer'];
  if (productName.includes('small business')) return KIT_MAP['small-business'];
  if (productName.includes('e-commerce') || productName.includes('ecommerce')) return KIT_MAP['ecommerce'];
  if (productName.includes('saas') || productName.includes('founder kit')) return KIT_MAP['saas-founder'];
  if (productName.includes('social media')) return KIT_MAP['social-media-kit'];
  if (productName.includes('email marketing')) return KIT_MAP['email-marketing-kit'];
  if (productName.includes('presentation') || productName.includes('pitch deck')) return KIT_MAP['presentation-kit'];
  if (productName.includes('bundle') || productName.includes('all kits')) return KIT_MAP['bundle'];

  // Check amount as last resort
  const amount = session.amount_total;
  if (amount === 900) return KIT_MAP['starter-pack'];
  if (amount === 9700) return KIT_MAP['bundle'];
  if (amount === 4900) return KIT_MAP['real-estate'];
  if (amount === 3900) {
    // Multiple $39 products — check URL or default
    return KIT_MAP['default'];
  }
  if (amount === 2900) return KIT_MAP['default'];

  return KIT_MAP['default'];
}

function buildBundleDownloadLinks(kit) {
  return kit.files.map(f =>
    `<a href="https://www.midastools.co/${f.file}" style="display:block;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:8px;padding:14px 20px;margin-bottom:8px;color:#3B5FFF;font-weight:700;font-size:15px;text-decoration:none;">
      ⬇ ${f.name}
    </a>`
  ).join('');
}

async function sendDownloadEmail(customerEmail, customerName, kit, opts = {}) {
  const baseUrl = 'https://www.midastools.co';
  const isBundle = kit.file === null && Array.isArray(kit.files);
  const isWebDelivery = kit.file === null && kit.deliveryUrl;
  const isManual = kit.file === null && kit.manual === true;
  const isSubscription = kit.file === null && kit.subscription === true;
  const isProPass = kit.proPass === true;

  let downloadSection;
  if (isProPass) {
    downloadSection = `<div style="background:#EFF6FF;border:1px solid #3B5FFF;border-radius:12px;padding:24px;margin-bottom:32px;text-align:center;">
        <p style="color:#1E3A8A;font-size:14px;font-weight:700;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Your Pro unlock code</p>
        <p style="color:#3B5FFF;font-size:30px;font-weight:900;letter-spacing:2px;margin:0 0 16px;font-family:monospace;">${opts.unlockCode || 'CONTACT-SUPPORT'}</p>
        <a href="${baseUrl}/outreach-machine#pro" style="display:inline-block;background:#3B5FFF;color:#FFFFFF;padding:14px 28px;border-radius:100px;font-weight:800;font-size:15px;text-decoration:none;">→ Activate Pro</a>
        <p style="color:#6B7280;font-size:13px;margin:16px 0 0;line-height:1.5;">Open any MidasTools money-tool, click "Already Pro? Enter code", and paste the code above. It unlocks unlimited AI generations on this device. Keep this email — it's your receipt + key.</p>
      </div>`;
  } else if (isSubscription) {
    downloadSection = `<div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:12px;padding:20px;margin-bottom:32px;">
        <p style="color:#92400E;font-size:15px;font-weight:700;margin:0 0 8px;">Subscription active</p>
        <p style="color:#78350F;font-size:14px;margin:0 0 8px;line-height:1.5;">Your first weekly tip lands within 7 days. Monthly drop within 30 days. Both are calibrated to your survey answers.</p>
        <p style="color:#78350F;font-size:13px;margin:0;line-height:1.5;">Haven't filled out your survey yet, or want to update it? Reply to this email and we'll send your personalized link.</p>
      </div>`;
  } else if (isManual) {
    downloadSection = `<div style="background:#FFF7ED;border:1px solid #FDBA74;border-radius:12px;padding:20px;margin-bottom:32px;">
        <p style="color:#9A3412;font-size:15px;font-weight:700;margin:0 0 8px;">Your kit is being personalized</p>
        <p style="color:#7C2D12;font-size:14px;margin:0;line-height:1.5;">We'll deliver your kit by reply email within 24 hours. Reply to this email if you have any questions or special requests.</p>
      </div>`;
  } else if (isWebDelivery) {
    downloadSection = `<a href="${kit.deliveryUrl}" style="display:inline-block;background:#D97706;color:#FFFFFF;padding:16px 32px;border-radius:10px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:32px;">
        → Open Your Prompt Pack
      </a>
      <p style="color:#6B7280;font-size:13px;margin-top:-20px;margin-bottom:32px;">Bookmark this link — your 20 prompts live here. Copy-paste into ChatGPT, Claude, or Gemini.</p>`;
  } else if (isBundle) {
    downloadSection = `<p style="color:#ccc;font-size:15px;margin-bottom:16px;">Download each kit below:</p>${buildBundleDownloadLinks(kit)}`;
  } else {
    downloadSection = `<a href="${baseUrl}/${kit.file}" style="display:inline-block;background:#3B5FFF;color:#FFFFFF;padding:16px 32px;border-radius:10px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:32px;">
        ⬇ Download Your Kit
      </a>`;
  }

  await transporter.sendMail({
    from: `"Midas Tools" <${process.env.GMAIL_ADDRESS}>`,
    to: customerEmail,
    subject: `👑 ${kit.subject}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #FFFFFF; color: #111827; padding: 40px; border-radius: 16px; border: 1px solid #E5E7EB;">
        <h1 style="font-size: 28px; font-weight: 900; color: #3B5FFF; margin-bottom: 8px;">You're in!</h1>
        <p style="color: #6B7280; font-size: 16px; margin-bottom: 32px;">Thanks${customerName ? `, ${customerName}` : ''} — your ${kit.name} is ready to download.</p>

        ${downloadSection}

        <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 24px; margin: 24px 0;">
          <p style="color: #6B7280; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">What's inside:</p>
          <ul style="color: #374151; font-size: 15px; padding-left: 20px; line-height: 1.8;">
            ${kit.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <p style="color: #9CA3AF; font-size: 13px;">
          Questions? Just reply to this email — we respond within 24 hours.<br/>
          30-day money-back guarantee, no questions asked.
        </p>
      </div>
    `,
  });
}

// Chatbot Builder Pro ($39/mo): flip the purchased bot to 'pro' (white-label +
// lead-emails + higher limits), map the subscription -> bot for cancellation, and
// confirm to the subscriber + notify the founder.
async function handleChatbotProActivation(session, email, name) {
  const botId = String(session.client_reference_id || '').trim();
  let botName = '';
  if (/^cb_[a-f0-9]{12}$/.test(botId)) {
    try {
      const bot = await readKV(`chatbot:${botId}`);
      if (bot) {
        bot.plan = 'pro';
        bot.sub_email = email || bot.owner_email;
        bot.updated = new Date().toISOString();
        await writeKV(`chatbot:${botId}`, bot);
        botName = bot.name || '';
      }
      if (session.subscription) {
        await writeKV(`chatbot-sub:${session.subscription}`, { botId, email, ts: new Date().toISOString() });
      }
      console.log(`[chatbot-pro] activated bot ${botId} for ${email}`);
    } catch (err) {
      console.error('[chatbot-pro] activation KV error:', err.message);
    }
  } else {
    console.error('[chatbot-pro] missing/invalid bot id in client_reference_id:', session.client_reference_id);
  }

  if (email) {
    try {
      await transporter.sendMail({
        from: `"Midas Tools" <${process.env.GMAIL_ADDRESS}>`,
        to: email,
        subject: '👑 Your chatbot is live — leads now come straight to your inbox',
        html: `<div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;background:#fff;color:#111827;padding:40px;border-radius:16px;border:1px solid #E5E7EB;">
          <h1 style="font-size:26px;font-weight:900;color:#2563EB;margin-bottom:8px;">You're live! 🎉</h1>
          <p style="color:#374151;font-size:16px;margin-bottom:24px;">Thanks${name ? `, ${name}` : ''} — your ${botName ? `<strong>${botName}</strong> ` : ''}chatbot is now on the Pro plan.</p>
          <div style="background:#EFF6FF;border:1px solid #93C5FD;border-radius:12px;padding:20px;margin-bottom:24px;">
            <ul style="color:#374151;font-size:15px;padding-left:18px;line-height:1.8;margin:0;">
              <li>Your embed stays live on any site</li>
              <li><strong>Captured leads are emailed to you instantly</strong></li>
              <li>The "Powered by MidasTools" badge is removed (white-label)</li>
              <li>Build &amp; run unlimited bots — resell to local businesses</li>
            </ul>
          </div>
          <p style="color:#6B7280;font-size:14px;">Need the embed code again or want to tweak the bot? Reply to this email anytime. $39/mo, cancel whenever.</p>
        </div>`,
      });
    } catch (err) { console.error('[chatbot-pro] confirmation email failed:', err.message); }

    try {
      await transporter.sendMail({
        from: process.env.GMAIL_ADDRESS,
        to: process.env.GMAIL_ADDRESS,
        subject: `🔁 RECURRING SALE: Chatbot Builder Pro — ${email}`,
        html: `<h2>New $39/mo subscriber</h2><p><strong>Email:</strong> ${email}</p><p><strong>Bot:</strong> ${botId} ${botName ? `(${botName})` : ''}</p><p><strong>Subscription:</strong> ${session.subscription || 'n/a'}</p>`,
      });
    } catch (err) { console.error('[chatbot-pro] founder notify failed:', err.message); }
  }
}

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  const chunks = [];

  await new Promise((resolve, reject) => {
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', resolve);
    req.on('error', reject);
  });

  const rawBody = Buffer.concat(chunks);
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Subscription cancelled → downgrade the mapped chatbot back to free.
  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    try {
      const map = await readKV(`chatbot-sub:${sub.id}`);
      if (map && map.botId) {
        const bot = await readKV(`chatbot:${map.botId}`);
        if (bot) {
          bot.plan = 'free';
          bot.updated = new Date().toISOString();
          await writeKV(`chatbot:${map.botId}`, bot);
          console.log(`[chatbot-pro] downgraded bot ${map.botId} (sub ${sub.id} cancelled)`);
        }
      }
    } catch (err) { console.error('[chatbot-pro] downgrade error:', err.message); }
    return res.status(200).json({ received: true });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name;

    // Chatbot Builder Pro $39/mo — handle separately (not a kit download).
    if (session.metadata?.kit_type === 'chatbot-pro' || session.payment_link === 'plink_1TeLMeAdkDx8xZMk6MyHUoAx') {
      await handleChatbotProActivation(session, email, name);
      return res.status(200).json({ received: true });
    }

    const kit = detectKit(session);

    // Decode client-side attribution that the front-end packed into client_reference_id
    const attribution = decodeAttributionFromClientRef(session.client_reference_id);
    if (attribution) {
      console.log(`[attribution] sale for ${email}:`, JSON.stringify(attribution));
    } else {
      console.log(`[attribution] sale for ${email}: NO ATTRIBUTION (client_reference_id="${session.client_reference_id || ''}")`);
    }

    console.log(`Purchase detected: ${kit.name} for ${email}`);

    // Pro Pass: mint a lifetime unlock code, store it in KV for /api/verify-pro,
    // and deliver it in the receipt email.
    let unlockCode = null;
    if (kit.proPass && email) {
      unlockCode = 'MIDAS-' + crypto.randomBytes(4).toString('hex').toUpperCase();
      try {
        await writeKV(`pro-code:${unlockCode}`, { email, ts: new Date().toISOString(), session: session.id });
        console.log(`[pro-pass] minted unlock code for ${email}`);
      } catch (err) {
        console.error('[pro-pass] KV write failed:', err.message);
      }
    }

    if (email) {
      try {
        await sendDownloadEmail(email, name, kit, { unlockCode });
        console.log(`Download email sent to ${email} for ${kit.name}`);
      } catch (err) {
        console.error('Failed to send email:', err);
      }

      // Notify founder with attribution data alongside the sale
      try {
        const attrLine = attribution
          ? Object.entries(attribution).map(([k, v]) => `<strong>${k}:</strong> ${v}`).join('<br/>')
          : '<em>No attribution data — visitor likely arrived without UTM-tagged URL or before the upgraded capture shipped.</em>';
        await transporter.sendMail({
          from: process.env.GMAIL_ADDRESS,
          to: process.env.GMAIL_ADDRESS,
          subject: `💰 SALE: ${kit.name} — ${email}`,
          html: `
            <h2>New paying customer</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Product:</strong> ${kit.name}</p>
            <p><strong>Amount:</strong> $${(session.amount_total || 0) / 100}</p>
            <h3>Attribution</h3>
            <p>${attrLine}</p>
            <h3>Stripe</h3>
            <p><strong>Session ID:</strong> ${session.id}</p>
            <p><strong>Payment Link:</strong> ${session.payment_link || 'n/a'}</p>
            <p><strong>client_reference_id:</strong> ${session.client_reference_id || '(empty)'}</p>
          `,
        });
      } catch (err) {
        console.error('Founder notification failed:', err);
      }
    }
  }

  res.status(200).json({ received: true });
}
