import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
const { promptTemplates } = require('../../lib/prompt-templates');

const CATEGORIES = {
  email: { label: 'Email', color: '#3B5FFF' },
  ecommerce: { label: 'E-commerce', color: '#10B981' },
  social: { label: 'Social Media', color: '#8B5CF6' },
  content: { label: 'Content', color: '#F59E0B' },
  sales: { label: 'Sales', color: '#EF4444' },
  career: { label: 'Career', color: '#06B6D4' },
  business: { label: 'Business', color: '#EC4899' },
  image: { label: 'AI Images', color: '#6366F1' },
  'real-estate': { label: 'Real Estate', color: '#14B8A6' },
};

export default function PromptsIndex() {
  return (
    <Layout>
      <Head>
        <title>Free AI Prompt Templates — Copy &amp; Paste | Midas Tools</title>
        <link rel="canonical" href="https://www.midastools.co/prompts" />
        <meta name="description" content="100+ free copy-paste AI prompt templates for email marketing, social media, SEO content, product descriptions, cold outreach, resumes, business plans, and more. Works with ChatGPT, Claude, and Gemini." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.midastools.co/prompts" />
        <meta property="og:title" content="Free AI Prompt Templates — Copy & Paste" />
        <meta property="og:description" content="100+ free copy-paste AI prompt templates for email, social media, SEO, sales, and more." />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Free AI Prompt Templates',
              description: '100+ free copy-paste AI prompt templates for business, marketing, and productivity.',
              url: 'https://www.midastools.co/prompts',
              publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: promptTemplates.length,
                itemListElement: promptTemplates.map((t, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: t.title,
                  url: `https://www.midastools.co/prompts/${t.slug}`,
                })),
              },
            }),
          }}
        />
      </Head>
      <style>{`
        .prompts-hub{max-width:900px;margin:0 auto;padding:80px 40px 60px}
        .prompts-hub h1{font-size:clamp(32px,5vw,48px);font-weight:900;letter-spacing:-1.5px;line-height:1.1;margin-bottom:12px;text-align:center}
        .prompts-hub .subtitle{font-size:18px;color:var(--text-secondary);text-align:center;max-width:600px;margin:0 auto 48px;line-height:1.7}
        .prompt-count{text-align:center;margin-bottom:40px}
        .prompt-count span{background:rgba(59,95,255,0.08);color:var(--accent);padding:8px 20px;border-radius:100px;font-size:14px;font-weight:700}
        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}
        .card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:28px;text-decoration:none;color:var(--text);transition:all 0.2s}
        .card:hover{border-color:var(--accent);box-shadow:0 8px 32px rgba(59,95,255,0.08);transform:translateY(-2px)}
        .card .tag{display:inline-block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;padding:4px 10px;border-radius:6px;margin-bottom:12px}
        .card h2{font-size:18px;font-weight:800;margin-bottom:8px;line-height:1.3}
        .card p{font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:12px}
        .card .meta{font-size:13px;color:var(--accent);font-weight:600}
        .bottom-cta{text-align:center;margin:64px 0 0;padding:48px;background:var(--surface);border-radius:20px;border:1px solid var(--border)}
        .bottom-cta h2{font-size:28px;font-weight:900;margin-bottom:12px}
        .bottom-cta p{color:var(--text-secondary);margin-bottom:24px}
        .bottom-cta a{display:inline-block;background:var(--accent);color:#fff;padding:16px 36px;border-radius:100px;font-weight:800;font-size:16px;text-decoration:none}
        @media(max-width:600px){.prompts-hub{padding:48px 20px}.grid{grid-template-columns:1fr}}
      `}</style>

      <div className="prompts-hub">
        <h1>Free AI Prompt Templates</h1>
        <p className="subtitle">Copy-paste prompts that actually work. Tested with ChatGPT, Claude, and Gemini. No signup required.</p>

        <div className="prompt-count">
          <span>{promptTemplates.reduce((acc, t) => acc + t.prompts.length, 0)}+ Free Prompts Across {promptTemplates.length} Categories</span>
        </div>

        <div className="grid">
          {promptTemplates.map(t => {
            const cat = CATEGORIES[t.category] || { label: t.category, color: '#3B5FFF' };
            return (
              <Link href={`/prompts/${t.slug}`} className="card" key={t.slug}>
                <span className="tag" style={{ background: `${cat.color}15`, color: cat.color }}>{cat.label}</span>
                <h2>{t.h1.replace(/^\d+\s/, '')}</h2>
                <p>{t.description.substring(0, 120)}...</p>
                <span className="meta">{t.prompts.length} free prompts &rarr;</span>
              </Link>
            );
          })}
        </div>

        <div className="bottom-cta">
          <h2>Want Even More?</h2>
          <p>Get 3,000+ tested prompts, templates, and workflows in the All Kits Bundle.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b">Get All 16 Kits — $97 (Save 81%) &rarr;</a>
        </div>
      </div>
    </Layout>
  );
}
