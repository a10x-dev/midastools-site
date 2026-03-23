import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const kits = [
  {
    name: 'AI Prompt Mega Pack',
    price: '$29',
    desc: '200+ battle-tested AI prompts for copywriting, social media, content, operations, branding & productivity. Works with any LLM.',
    href: '/ai-prompt-mega-pack',
    stripe: 'https://buy.stripe.com/PLACEHOLDER_PROMPT_MEGA_PACK',
    badge: 'NEW',
  },
  {
    name: 'OpenClaw Starter Kit',
    price: '$29',
    desc: 'Templates, workflows, and prompts to deploy your first AI entrepreneur agent.',
    href: '/',
    stripe: 'https://buy.stripe.com/cNi28qdgz7mVb0U8VYcMM07',
  },
  {
    name: 'Real Estate AI Kit',
    price: '$49',
    desc: 'Lead follow-up, listing descriptions, CMA summaries, and open house workflows for realtors.',
    href: '/real-estate-kit',
    stripe: 'https://buy.stripe.com/fZueVcb8r6iR5GAfkmcMM08',
  },
  {
    name: 'Content Creator Kit',
    price: '$39',
    desc: 'Repurposing templates, headline formulas, and a 30-day content calendar generator.',
    href: '/content-creator-kit',
    stripe: 'https://buy.stripe.com/eVq7sK90j36F4CwdcecMM09',
  },
  {
    name: 'Freelancer Automation Kit',
    price: '$39',
    desc: 'Proposal generators, invoice templates, and automated payment chasing sequences.',
    href: '/freelancer-kit',
    stripe: 'https://buy.stripe.com/7sY3cu7Wfaz71qkfkmcMM0a',
  },
  {
    name: 'Small Business AI Kit',
    price: '$39',
    desc: 'Social media, email marketing, customer service, hiring, and operations templates for any small business.',
    href: '/small-business-kit',
    stripe: 'https://buy.stripe.com/3cIaEW6SbcHfed6egicMM0c',
  },
  {
    name: 'E-commerce AI Kit',
    price: '$39',
    desc: 'Product descriptions, email sequences, ad copy, and SEO templates for online stores.',
    href: '/ecommerce-kit',
    stripe: 'https://buy.stripe.com/PLACEHOLDER_ECOMMERCE_KIT',
    badge: 'NEW',
  },
  {
    name: 'SaaS Founder AI Kit',
    price: '$39',
    desc: 'Launch playbooks, onboarding sequences, churn prevention, and growth marketing for SaaS builders.',
    href: '/saas-founder-kit',
    stripe: 'https://buy.stripe.com/PLACEHOLDER_SAAS_FOUNDER_KIT',
    badge: 'NEW',
  },
];

export default function Kits() {
  return (
    <Layout>
      <Head>
        <title>AI Automation Kits — Midas Tools</title>
        <meta name="description" content="Browse every AI automation kit from Midas Tools. Pick your niche or grab them all in one bundle." />
        <meta property="og:title" content="AI Automation Kits — Midas Tools" />
        <meta property="og:description" content="Every kit we make. Pick your niche or grab them all." />
        <meta property="og:url" content="https://www.midastools.co/kits" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .kits-hero {
          max-width: 860px; margin: 0 auto; padding: 80px 40px 48px; text-align: center;
        }
        .kits-hero h1 {
          font-size: clamp(32px, 5vw, 52px); font-weight: 900; line-height: 1.1;
          letter-spacing: -1.5px; margin-bottom: 16px;
        }
        .kits-hero h1 span { color: var(--gold); }
        .kits-hero p {
          font-size: 18px; color: var(--gray-400); max-width: 480px; margin: 0 auto; line-height: 1.7;
        }
        .kits-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
          max-width: 860px; margin: 0 auto; padding: 0 40px 64px;
        }
        .kit-card {
          background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px;
          padding: 32px; display: flex; flex-direction: column; gap: 12px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .kit-card:hover { border-color: var(--gray-700); transform: translateY(-2px); }
        .kit-price {
          font-size: 28px; font-weight: 900; color: var(--gold); letter-spacing: -1px;
        }
        .kit-name { font-size: 18px; font-weight: 800; }
        .kit-desc { font-size: 14px; color: var(--gray-400); line-height: 1.6; flex: 1; }
        .kit-link {
          color: var(--gold); font-size: 14px; font-weight: 700; text-decoration: none;
          transition: opacity 0.15s ease;
        }
        .kit-link:hover { opacity: 0.8; }
        .bundle-upsell {
          max-width: 860px; margin: 0 auto; padding: 0 40px 80px;
        }
        .bundle-box {
          background: var(--gray-900); border: 1px solid rgba(245,200,66,0.3);
          border-radius: 20px; padding: 48px; text-align: center;
          box-shadow: 0 0 60px rgba(245,200,66,0.04);
        }
        .bundle-box h2 {
          font-size: clamp(24px, 3.5vw, 32px); font-weight: 900; letter-spacing: -1px;
          margin-bottom: 8px;
        }
        .bundle-box h2 span { color: var(--gold); }
        .bundle-box p {
          font-size: 16px; color: var(--gray-400); margin-bottom: 28px; line-height: 1.6;
        }
        @media(max-width: 700px) {
          .kits-hero { padding: 48px 20px 32px; }
          .kits-grid { grid-template-columns: 1fr; padding: 0 20px 48px; }
          .bundle-upsell { padding: 0 20px 60px; }
          .bundle-box { padding: 32px 24px; }
        }
      `}</style>

      <div className="kits-hero">
        <div className="badge" style={{ marginBottom: 24 }}>Product Catalog</div>
        <h1><span>AI Automation</span> Kits</h1>
        <p>Every kit we make. Pick your niche or grab them all.</p>
      </div>

      <div className="kits-grid">
        {kits.map((kit) => (
          <div className="kit-card" key={kit.name}>
            <div className="kit-price">{kit.price}</div>
            <div className="kit-name">{kit.name}</div>
            <div className="kit-desc">{kit.desc}</div>
            <div style={{display:'flex',alignItems:'center',gap:16,marginTop:4}}>
              <a href={kit.stripe} className="btn-primary" style={{fontSize:14,padding:'10px 20px'}}>Buy Now &rarr;</a>
              <Link href={kit.href} className="kit-link">Details</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bundle-upsell">
        <div className="bundle-box">
          <div className="badge" style={{ marginBottom: 20 }}>Best Value</div>
          <h2>Get all 8 kits + future kits for <span>$97</span></h2>
          <p>Prompt Mega Pack + Starter + Real Estate + Content Creator + Freelancer + Small Business + E-commerce + SaaS Founder Kit — plus every kit we release in the future, free.</p>
          <a href={BUNDLE_STRIPE} className="btn-primary">Get the Bundle — $97 &rarr;</a>
        </div>
      </div>
    </Layout>
  );
}
