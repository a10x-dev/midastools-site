import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const kits = [
  {
    name: 'AI Video Prompt Pack',
    price: '$29',
    desc: '150+ AI video generation prompts for social media, product demos, tutorials, cinematic content, corporate videos & viral styles. Works with Veo 3.1, Kling 3.0, Runway, Pika.',
    href: '/ai-video-prompt-pack',
    stripe: 'https://buy.stripe.com/cNi6oGgsLfTrfha2xAcMM0g',
    badge: 'NEW',
    color: 'var(--card-cyan)',
  },
  {
    name: 'AI Image Prompt Pack',
    price: '$29',
    desc: '150+ AI image generation prompts for social media, brands, products, headshots & viral styles. Works with ChatGPT, Midjourney, DALL-E.',
    href: '/ai-image-prompt-pack',
    stripe: 'https://buy.stripe.com/8x24gyccv7mVglegoqcMM0i',
    badge: 'NEW',
    color: 'var(--card-pink)',
  },
  {
    name: 'AI Prompt Mega Pack',
    price: '$29',
    desc: '200+ battle-tested AI prompts for copywriting, social media, content, operations, branding & productivity. Works with any LLM.',
    href: '/ai-prompt-mega-pack',
    stripe: 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d',
    gumroad: null,
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
    gumroad: null,
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
    color: 'var(--card-blue)',
  },
  {
    name: 'AI Social Media Manager Kit',
    price: '$39',
    desc: 'Content calendars, caption templates, viral formulas, analytics prompts & paid ad copy for every major platform.',
    href: '/social-media-kit',
    stripe: 'https://buy.stripe.com/6oU5kC6SbdLj4CwegicMM0k',
    badge: 'NEW',
    color: 'var(--card-cyan)',
  },
  {
    name: 'Notion AI Templates Kit',
    price: '$39',
    desc: '150+ ready-made Notion templates with AI prompts for project management, CRM, content planning, productivity, and business ops.',
    href: '/notion-templates-kit',
    stripe: 'https://buy.stripe.com/aFa14mfoH8qZ6KEgoqcMM0h',
    badge: 'NEW',
    color: 'var(--card-purple)',
  },
  {
    name: 'AI Resume & Career Kit',
    price: '$29',
    desc: '125+ prompts for resumes, cover letters, LinkedIn, interviews, job search & salary negotiation',
    href: '/resume-career-kit',
    stripe: 'https://buy.stripe.com/4gM8wO6Sb4aJ4Cw3BEcMM0j',
    badge: 'NEW',
    color: 'var(--card-green)',
  },
  {
    name: 'AI Email Marketing Kit',
    price: '$29',
    desc: '125+ prompts for welcome sequences, sales emails, newsletters, cold outreach, retention campaigns & subject lines.',
    href: '/email-marketing-kit',
    stripe: 'https://buy.stripe.com/6oUcN40tN0Yxgle0pscMM0l',
    badge: 'NEW',
    color: 'var(--card-amber)',
  },
  {
    name: 'AI Presentation Kit',
    price: '$29',
    desc: '125+ prompts for pitch decks, sales presentations, conference talks, business reports, training & slide storytelling.',
    href: '/presentation-kit',
    stripe: 'https://buy.stripe.com/8x228q6Sb36F2uofkmcMM0m',
    badge: 'NEW',
    color: 'var(--card-purple)',
  },
  {
    name: 'Claude Cowork Mastery Kit',
    price: '$29',
    desc: '115+ prompts, 10 role playbooks, CLAUDE.md templates & connector cheatsheets. Master Claude Cowork in 30 minutes.',
    href: '/claude-cowork-kit',
    stripe: 'https://buy.stripe.com/28E3cu90jePn0mg7RUcMM0n',
    badge: 'TRENDING',
    color: 'var(--card-blue)',
  },
  {
    name: 'AI Team Adoption Kit',
    price: '$49',
    desc: '50+ team skills, 8 department playbooks, usage tracking templates & onboarding guides. Roll out AI across your org.',
    href: '/team-adoption-kit',
    stripe: 'https://buy.stripe.com/14A8wOdgz0Yx2uo5JMcMM0o',
    badge: 'NEW',
    color: 'var(--card-green)',
  },
  {
    name: 'Reddit Lead Generation Kit',
    price: '$49',
    desc: 'The $51K/month Reddit playbook. 50+ buyer-intent phrases, 25 outreach templates, 10 niche subreddit maps & daily workflow system.',
    href: '/reddit-lead-kit',
    stripe: 'https://buy.stripe.com/bJefZg1xRcHf6KE5JMcMM0p',
    badge: 'HOT',
    color: 'var(--card-amber)',
  },
  {
    name: 'Meta Muse Spark Prompt Kit',
    price: '$29',
    desc: '100+ prompts for Meta\'s brand new AI model. Visual coding, multimodal reasoning, Contemplating mode & multi-agent orchestration. First-mover kit.',
    href: '/muse-spark-kit',
    stripe: 'https://buy.stripe.com/28EdR8ccv22B1qk0pscMM0r',
    badge: 'TRENDING',
    color: 'var(--card-pink)',
  },
  {
    name: 'Claude Code Mastery Kit',
    price: '$39',
    desc: '80+ CLAUDE.md templates, 10 hook recipes, 8 skill files, subagent patterns & token optimization workflows. Ship 10x faster.',
    href: '/claude-code-kit',
    stripe: 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q',
    badge: 'HOT',
    color: 'var(--card-purple)',
  },
];

export default function Kits() {
  return (
    <Layout>
      <Head>
        <title>AI Automation Kits — Midas Tools</title>
        <link rel="canonical" href="https://www.midastools.co/kits" />
        <meta name="description" content="Browse 15+ AI automation kits with ready-to-use prompts and templates. Real estate, e-commerce, freelancing, content creation & more. From $29." />
        <meta property="og:title" content="AI Automation Kits — Midas Tools" />
        <meta property="og:description" content="Every kit we make. Pick your niche or grab them all." />
        <meta property="og:url" content="https://www.midastools.co/kits" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AI Automation Kits",
          "itemListElement": kits.map((kit, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": kit.name,
            "url": `https://www.midastools.co${kit.href}`
          }))
        }) }} />
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
            <div style={{display:'flex',alignItems:'center',gap:16,marginTop:4,flexWrap:'wrap'}}>
              <a href={kit.stripe} className="btn-primary" style={{fontSize:14,padding:'10px 20px'}}>Buy Now &rarr;</a>
              <Link href={kit.href} className="kit-link">Details</Link>
              {kit.gumroad && <a href={kit.gumroad} target="_blank" rel="noopener noreferrer" style={{fontSize:12,color:'var(--text-tertiary)',textDecoration:'underline',textUnderlineOffset:2}}>Gumroad</a>}
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
          <h2>Get all 21 kits + future kits for $97</h2>
          <p>Video Pack + Image Pack + Notion Templates + Resume &amp; Career + Email Marketing + Presentation Kit + Prompt Mega Pack + Starter + Real Estate + Content Creator + Freelancer + Small Business + E-commerce + SaaS Founder + Social Media Kit — plus every kit we release in the future, free.</p>
          <a href={BUNDLE_STRIPE} className="btn-primary">Get the Bundle — $97 &rarr;</a>
        </div>
      </div>
    </Layout>
  );
}
