import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const TOOLS = [
  {
    title: 'AI Prompt Generator',
    desc: 'Generate expert-level prompts for sales emails, social media, product descriptions, blog outlines, cold outreach, AI images, video scripts, and business strategy. Fill in 3 fields, get a customized prompt, copy with one click.',
    href: '/prompt-generator',
    tag: 'Most Popular',
    categories: '8 categories',
    bg: 'var(--card-blue)',
  },
  {
    title: 'AI Business Name Generator',
    desc: 'Get 20 creative, brandable business names instantly. Choose from 16 industries and 6 naming styles — modern, playful, premium, bold, classic, or creative. Save favorites, copy all, generate unlimited.',
    href: '/business-name-generator',
    tag: 'New',
    categories: '16 industries',
    bg: 'var(--card-green)',
  },
  {
    title: 'Email Subject Line Tester',
    desc: 'Score your subject lines before you send. Instant feedback on open rate potential, spam risk, power words, and engagement. Includes 5 proven formula examples.',
    href: '/email-subject-line-tester',
    tag: 'New',
    categories: '6 scoring metrics',
    bg: 'var(--card-amber)',
  },
  {
    title: 'AI Hashtag Generator',
    desc: 'Generate optimized hashtags for Instagram, TikTok, Twitter/X, LinkedIn, and YouTube. 22 niches, 4 styles, platform-specific counts. Copy all with one click.',
    href: '/hashtag-generator',
    tag: 'New',
    categories: '22 niches',
    bg: 'var(--card-cyan)',
  },
  {
    title: 'AI Prompt Scorer',
    desc: 'Paste any AI prompt and get an instant quality score (1-100) with specific feedback. Scores specificity, context, role, format, and constraints — plus a rewritten improved version you can copy.',
    href: '/prompt-scorer',
    tag: 'New',
    categories: '5 scoring criteria',
    bg: 'var(--card-purple)',
  },
];

const COMING_SOON = [
  { title: 'AI Headline Analyzer', desc: 'Analyze blog headlines for SEO, click-through potential, and readability.' },
  { title: 'AI Slogan Generator', desc: 'Generate catchy slogans and taglines for your brand in seconds.' },
];

export default function Tools() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free AI Tools for Entrepreneurs',
    url: 'https://www.midastools.co/tools',
    description: 'Free AI-powered tools for entrepreneurs and small businesses. Generate prompts, business names, and more — no signup required.',
  };

  return (
    <Layout>
      <Head>
        <title>Free AI Tools for Entrepreneurs (2026) | Midas Tools</title>
        <meta name="description" content="Free AI-powered tools for entrepreneurs. AI Prompt Generator, Business Name Generator, and more. No signup required. Generate instantly." />
        <meta property="og:title" content="Free AI Tools for Entrepreneurs | Midas Tools" />
        <meta property="og:description" content="Free AI tools to grow your business. Prompt generator, business name generator, and more coming soon." />
        <meta property="og:url" content="https://www.midastools.co/tools" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/tools" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .tools-page { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        .tools-hero { text-align: center; margin-bottom: 56px; }
        .tools-hero h1 { font-size: clamp(32px, 5.5vw, 52px); font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .tools-hero h1 span { color: var(--accent); }
        .tools-hero p { font-size: 18px; color: var(--text-secondary); max-width: 540px; margin: 0 auto; line-height: 1.7; }

        .tool-card {
          border: 2px solid var(--border); border-radius: 20px; padding: 40px;
          margin-bottom: 20px; transition: border-color 0.2s, box-shadow 0.2s;
          display: flex; justify-content: space-between; align-items: center; gap: 32px;
        }
        .tool-card:hover { border-color: var(--accent); box-shadow: 0 8px 32px rgba(59,95,255,0.08); }
        .tool-info { flex: 1; }
        .tool-tags { display: flex; gap: 8px; margin-bottom: 12px; align-items: center; }
        .tool-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .tool-tag.free { background: #ECFDF5; color: #059669; }
        .tool-tag.popular { background: rgba(59,95,255,0.08); color: var(--accent); }
        .tool-tag.new { background: #FEF3C7; color: #D97706; }
        .tool-title { font-size: 24px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
        .tool-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }
        .tool-meta { font-size: 13px; color: var(--text-tertiary); font-weight: 600; }
        .tool-cta {
          display: inline-block; background: var(--accent); color: #fff; padding: 14px 32px;
          border-radius: 100px; font-weight: 700; font-size: 15px; text-decoration: none;
          white-space: nowrap; flex-shrink: 0; transition: transform 0.15s, box-shadow 0.15s;
        }
        .tool-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(59,95,255,0.25); }

        .coming-section { margin-top: 56px; }
        .coming-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
        .coming-section > p { font-size: 15px; color: var(--text-secondary); margin-bottom: 28px; }
        .coming-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 48px; }
        .coming-card {
          background: var(--surface); border: 1px dashed var(--border); border-radius: 16px; padding: 24px;
          opacity: 0.7; transition: opacity 0.2s;
        }
        .coming-card:hover { opacity: 1; }
        .coming-card h3 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
        .coming-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        .tools-upsell {
          background: var(--text); color: #fff; border-radius: 20px; padding: 48px;
          text-align: center; margin-top: 48px;
        }
        .tools-upsell h2 { font-size: 28px; font-weight: 900; color: #fff; margin-bottom: 12px; }
        .tools-upsell p { color: rgba(255,255,255,0.7); font-size: 16px; margin-bottom: 28px; max-width: 480px; margin-left: auto; margin-right: auto; }
        .tools-upsell a {
          display: inline-block; background: #fff; color: var(--text); padding: 16px 36px;
          border-radius: 100px; font-weight: 800; font-size: 16px; text-decoration: none;
        }

        @media(max-width:700px) {
          .tools-page { padding: 48px 20px; }
          .tool-card { flex-direction: column; padding: 28px; align-items: stretch; }
          .tool-cta { text-align: center; }
        }
      `}</style>

      <div className="tools-page">
        <div className="tools-hero">
          <div className="badge" style={{ marginBottom: 24 }}>100% Free &middot; No Signup</div>
          <h1>Free AI Tools for<br /><span>Entrepreneurs</span></h1>
          <p>Powerful AI tools to help you start and grow your business. Free forever, no account required.</p>
        </div>

        {TOOLS.map(tool => (
          <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none', display: 'block' }}>
            <div className="tool-card">
              <div className="tool-info">
                <div className="tool-tags">
                  <span className="tool-tag free">Free</span>
                  <span className={`tool-tag ${tool.tag === 'New' ? 'new' : 'popular'}`}>{tool.tag}</span>
                </div>
                <div className="tool-title">{tool.title}</div>
                <div className="tool-desc">{tool.desc}</div>
                <div className="tool-meta">{tool.categories} &middot; Instant results &middot; No signup</div>
              </div>
              <span className="tool-cta">Try it free &rarr;</span>
            </div>
          </Link>
        ))}

        <div className="coming-section">
          <h2>Coming Soon</h2>
          <p>More free AI tools launching soon. Want to be notified?</p>
          <div className="coming-grid">
            {COMING_SOON.map(tool => (
              <div key={tool.title} className="coming-card">
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-upsell">
          <h2>Ready for the full toolkit?</h2>
          <p>Our premium AI kits include 1,500+ prompts, templates, and workflows for every business need.</p>
          <a href="/bundle">Get All 15 Kits &mdash; $97 (Save 82%) &rarr;</a>
        </div>
      </div>
    </Layout>
  );
}
