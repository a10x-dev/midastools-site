import Stripe from 'stripe';
import nodemailer from 'nodemailer';

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
  'bundle': {
    name: 'All Kits Bundle',
    file: null, // Multiple files
    subject: 'Your Complete AI Toolkit Bundle is ready',
    items: [
      'OpenClaw Starter Kit (5 identity templates + workflows)',
      'Real Estate AI Kit (lead response + listings + follow-ups)',
      'Content Creator AI Kit (repurposing + scripts + calendar)',
      'Freelancer AI Kit (proposals + invoicing + onboarding)',
      'Small Business AI Kit (social + email + operations)',
      'All future kits — free, forever',
    ],
    files: [
      { name: 'AI Prompt Mega Pack', file: 'ai-prompt-mega-pack.zip' },
      { name: 'OpenClaw Starter Kit', file: 'openclaw-starter-kit.zip' },
      { name: 'Real Estate AI Kit', file: 'real-estate-kit.zip' },
      { name: 'Content Creator AI Kit', file: 'content-creator-kit.zip' },
      { name: 'Freelancer AI Kit', file: 'freelancer-kit.zip' },
      { name: 'Small Business AI Kit', file: 'small-business-kit.zip' },
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
  };
  if (paymentLink && PAYMENT_LINK_MAP[paymentLink]) {
    return KIT_MAP[PAYMENT_LINK_MAP[paymentLink]];
  }

  // Check product/line item name as fallback
  const productName = (session.metadata?.product_name || '').toLowerCase();
  if (productName.includes('prompt') || productName.includes('mega pack')) return KIT_MAP['prompt-mega-pack'];
  if (productName.includes('real estate')) return KIT_MAP['real-estate'];
  if (productName.includes('content creator') || productName.includes('creator')) return KIT_MAP['content-creator'];
  if (productName.includes('freelancer')) return KIT_MAP['freelancer'];
  if (productName.includes('small business')) return KIT_MAP['small-business'];
  if (productName.includes('bundle') || productName.includes('all kits')) return KIT_MAP['bundle'];

  // Check amount as last resort
  const amount = session.amount_total;
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
    `<a href="https://www.midastools.co/${f.file}" style="display:block;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:14px 20px;margin-bottom:8px;color:#F5C842;font-weight:700;font-size:15px;text-decoration:none;">
      ⬇ ${f.name}
    </a>`
  ).join('');
}

async function sendDownloadEmail(customerEmail, customerName, kit) {
  const baseUrl = 'https://www.midastools.co';
  const isBundle = kit.file === null;

  const downloadSection = isBundle
    ? `<p style="color:#ccc;font-size:15px;margin-bottom:16px;">Download each kit below:</p>${buildBundleDownloadLinks(kit)}`
    : `<a href="${baseUrl}/${kit.file}" style="display:inline-block;background:#F5C842;color:#000;padding:16px 32px;border-radius:10px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:32px;">
        ⬇ Download Your Kit
      </a>`;

  await transporter.sendMail({
    from: `"Midas Tools" <${process.env.GMAIL_ADDRESS}>`,
    to: customerEmail,
    subject: `👑 ${kit.subject}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #0A0A0A; color: #fff; padding: 40px; border-radius: 16px;">
        <h1 style="font-size: 28px; font-weight: 900; color: #F5C842; margin-bottom: 8px;">You're in. 👑</h1>
        <p style="color: #888; font-size: 16px; margin-bottom: 32px;">Thanks${customerName ? `, ${customerName}` : ''} — your ${kit.name} is ready to download.</p>

        ${downloadSection}

        <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 24px; margin: 24px 0;">
          <p style="color: #888; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">What's inside:</p>
          <ul style="color: #ccc; font-size: 15px; padding-left: 20px; line-height: 1.8;">
            ${kit.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <p style="color: #555; font-size: 13px;">
          Questions? Just reply to this email — we respond within 24 hours.<br/>
          30-day money-back guarantee, no questions asked.
        </p>
      </div>
    `,
  });
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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name;
    const kit = detectKit(session);

    console.log(`Purchase detected: ${kit.name} for ${email}`);

    if (email) {
      try {
        await sendDownloadEmail(email, name, kit);
        console.log(`Download email sent to ${email} for ${kit.name}`);
      } catch (err) {
        console.error('Failed to send email:', err);
      }
    }
  }

  res.status(200).json({ received: true });
}
