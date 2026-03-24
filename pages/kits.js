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
    stripe: 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d',
    badge: 'NEW',
    color: 'var(--card-amber)',
  },
  {
    name: 'OpenClaw Starter Kit',
    price: '$29',
    desc: 'Templates, workflows, and prompts to deploy your first AI entrepreneur agent.',
    href: '/',
    stripe: 'https://buy.stripe.com/cNi28qdgz7mVb0U8VYcMM07',
    color: 'var(--card-blue)',
  },
  {
    name: 'Real Estate AI Kit',
    price: '$49',
    desc: 'Lead follow-up, listing descriptions, CMA summaries, and open house workflows for realtors.',
    href: '/real-estate-kit',
    stripe: 'https://buy.stripe.com/fZueVcb8r6iR5GAfkmcMM08',
    color: 'var(--card-green)',
  },
  {
    name: 'Content Creator Kit',
    price: '$39',
    desc: 'Repurposing templates, headline formulas, and a 30-day content calendar generator.',
    href: '/content-creator-kit',
    stripe: 'https://buy.stripe.com/eVq7sK90j36F4CwdcecMM09',
    color: 'var(--card-purple)',
  },
  {
    name: 'Freelancer Automation Kit',
    price: '$39',
    desc: 'Proposal generators, invoice templates, and automated payment chasing sequences.',
    href: '/freelancer-kit',
    stripe: 'https://buy.stripe.com/7sY3cu7Wfaz71qkfkmcMM0a',
    color: 'var(--card-pink)',
  },
  {
    name: 'Small Business AI Kit',
    price: '$39',
    desc: 'Social media, email marketing, customer service, hiring, and operations templates for any small business.',
    href: '/small-business-kit',
    stripe: 'https://buy.stripe.com/3cIaEW6SbcHfed6egicMM0c',
    color: 'var(--card-cyan)',
  },
  {
    name: 'E-commerce AI Kit',
    price: '$39',
    desc: 'Product descriptions, email sequences, ad copy, and SEO templates for online stores.',
    href: '/ecommerce-kit',
    stripe: 'https://buy.stripe.com/cNi14mfoH0Yxb0Uc8acMM0e',
    badge: 'NEW',
    color: 'var(--card-green)',
  },
  {
    name: 'SaaS Founder AI Kit',
    price: '$39',
    desc: 'Launch playbooks, onboarding sequences, churn prevention, and growth marketing for SaaS builders.',
    href: '/saas-founder-kit',
    stripe: 'https://buy.stripe.com/fZudR8dgz8qZ5GAfkmcMM0f',
    badge: 'NEW',
    color: 'var(--card-blue)',
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
          letter-spacing: -1.5px; margin-bottom: 16px; color: var(--text);
        }
        .kits-hero h1 span { color: var(--accent); }
        .kits-hero p {
          font-size: 18px; color: var(--text-secondary); max-width: 480px; margin: 0 auto; line-height: 1.7;
        }
        .kits-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
          max-width: 860px; margin: 0 auto; padding: 0 40px 64px;
        }
        .kit-card {
          background: var(--bg); border: 1px solid var(--border); border-radius: 16px;
          padding: 32px; display: flex; flex-direction: column; gap: 12px;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .kit-card:hover { border-color: var(--text-tertiary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .kit-color-bar { height: 6px; border-radius: 3px; margin-bottom: 4px; }
        .kit-price {
          font-size: 28px; font-weight: 900; color: var(--text); letter-spacing: -1px;
        }
        .kit-name { font-size: 18px; font-weight: 800; color: var(--text); }
        .kit-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; flex: 1; }
        .kit-badge {
          display: inline-block; background: var(--accent); color: #FFFFFF;
          font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 100px;
          letter-spacing: 0.5px; margin-left: 8px; vertical-align: middle;
        }
        .kit-link {
          color: var(--accent); font-size: 14px; font-weight: 700; text-decoration: none;
          transition: opacity 0.15s ease;
        }
        .kit-link:hover { opacity: 0.8; }
        .bundle-upsell {
          max-width: 860px; margin: 0 auto; padding: 0 40px 80px;
        }
        .bundle-box {
          background: var(--text); color: #FFFFFF;
          border-radius: 20px; padding: 48px; text-align: center;
        }
        .bundle-box h2 {
          font-size: clamp(24px, 3.5vw, 32px); font-weight: 900; letter-spacing: -1px;
          margin-bottom: 8px; color: #FFFFFF;
        }
        .bundle-box h2 span { color: #FFFFFF; opacity: 0.6; }
        .bundle-box p {
          font-size: 16px; color: rgba(255,255,255,0.6); margin-bottom: 28px; line-height: 1.6;
        }
        .bundle-box .btn-primary { background: #FFFFFF; color: var(--text); }
        .bundle-box .btn-primary:hover { box-shadow: 0 4px 24px rgba(255,255,255,0.2); }
        .bundle-box .badge { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: #FFFFFF; }
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
            <div className="kit-color-bar" style={{ background: kit.color }}></div>
            <div className="kit-price">{kit.price}</div>
            <div className="kit-name">
              {kit.name}
              {kit.badge && <span className="kit-badge">{kit.badge}</span>}
            </div>
            <div className="kit-desc">{kit.desc}</div>
            <div style={{display:'flex',alignItems:'center',gap:16,marginTop:4}}>
              <a href={kit.stripe} className="btn-primary" style={{fontSize:14,padding:'10px 20px'}}>Buy Now &rarr;</a>
              <Link href={kit.href} className="kit-link">Details</Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)' }}>
          Not sure which kit is right for you? <Link href="/quiz" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>Take the 60-second quiz</Link> &middot; <Link href="/ai-roi-calculator" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>ROI Calculator &rarr;</Link>
        </p>
      </div>

      <div className="bundle-upsell">
        <div className="bundle-box">
          <div className="badge" style={{ marginBottom: 20 }}>Best Value</div>
          <h2>Get all 8 kits + future kits for $97</h2>
          <p>Prompt Mega Pack + Starter + Real Estate + Content Creator + Freelancer + Small Business + E-commerce + SaaS Founder Kit — plus every kit we release in the future, free.</p>
          <a href={BUNDLE_STRIPE} className="btn-primary">Get the Bundle — $97 &rarr;</a>
        </div>
      </div>
    </Layout>
  );
}
