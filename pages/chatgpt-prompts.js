import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const BUNDLE_URL = 'https://buy.stripe.com/4gw5mf0Zl1U5aVW5kp';

const categories = [
  { emoji: '\uD83C\uDF93', name: 'For Students', desc: '30 prompts for essays, studying, exam prep', count: 30, href: '/blog/chatgpt-prompts-students-2026' },
  { emoji: '\uD83D\uDCBC', name: 'For Business', desc: '50 prompts making people money', count: 50, href: '/blog/best-ai-prompts-business-2026' },
  { emoji: '\uD83C\uDFA8', name: 'Image Generation', desc: '50 viral image prompts', count: 50, href: '/blog/chatgpt-image-prompts-2026' },
  { emoji: '\uD83E\uDDD1\u200D\uD83C\uDFA4', name: 'Action Figures', desc: '15+ prompts for the viral trend', count: 15, href: '/blog/chatgpt-action-figure-prompt-2026' },
  { emoji: '\uD83D\uDCB0', name: 'Side Hustles', desc: '7 money-making prompt sets', count: 7, href: '/blog/chatgpt-side-hustle-2026' },
  { emoji: '\u26A1', name: 'Tips & Tricks', desc: '25 advanced techniques', count: 25, href: '/blog/chatgpt-tips-tricks-2026' },
  { emoji: '\u2709\uFE0F', name: 'Email Templates', desc: '21 ready-to-send templates', count: 21, href: '/blog/ai-email-templates-2026' },
  { emoji: '\uD83D\uDCBB', name: 'For Freelancers', desc: '7 automation prompts', count: 7, href: '/blog/ai-freelancer-automation-2026' },
  { emoji: '\uD83C\uDFE0', name: 'For Real Estate', desc: 'Agent-specific prompts', count: 20, href: '/blog/ai-tools-real-estate-agents-2026' },
  { emoji: '\uD83D\uDED2', name: 'For E-commerce', desc: 'Product description prompts', count: 30, href: '/blog/ai-ecommerce-product-descriptions-2026' },
  { emoji: '\uD83D\uDD01', name: 'Content Repurposing', desc: '1-to-10 content workflow', count: 10, href: '/blog/ai-content-repurposing-2026' },
  { emoji: '\uD83D\uDCB5', name: 'Making Money with AI', desc: '12 proven income methods', count: 12, href: '/blog/how-to-make-money-with-ai-2026' },
];

const faqs = [
  {
    q: 'What are the best ChatGPT prompts?',
    a: 'The best ChatGPT prompts are specific, give context, and tell the AI exactly what role to play. Our top-performing prompts include business strategy generators, viral image prompts, and student study guides. Browse the categories above to find prompts for your exact use case.',
  },
  {
    q: 'Are these prompts free?',
    a: 'We publish free prompts in every blog post linked on this page. For our full collections (200+ business prompts, 150+ image prompts), we offer premium packs starting at $29. You can also grab 5 free prompts to try before you buy.',
  },
  {
    q: 'Do these prompts work with GPT-4o and GPT-5?',
    a: 'Yes. All prompts on this page are tested with the latest ChatGPT models including GPT-4o and GPT-5. They also work with Claude, Gemini, and other major AI tools. We update our prompts regularly as models improve.',
  },
  {
    q: 'How do I get better results from ChatGPT?',
    a: 'Three keys: (1) Be specific about what you want, (2) Give ChatGPT a role to play (e.g., "Act as a senior marketing strategist"), and (3) Provide context and constraints. Our Tips & Tricks guide covers 25 advanced techniques for getting dramatically better outputs.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ChatGPT Prompts: The Complete Collection (500+ Prompts for 2026)',
  description: 'The ultimate collection of ChatGPT prompts for 2026. 500+ prompts for business, students, side hustles, image generation, and every profession.',
  author: { '@type': 'Organization', name: 'Midas Tools' },
  publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
  url: 'https://midastools.co/chatgpt-prompts',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
};

export default function ChatGPTPrompts() {
  return (
    <Layout>
      <Head>
        <title>ChatGPT Prompts: The Complete Collection (500+ Prompts for 2026) — Midas Tools</title>
        <link rel="canonical" href="https://midastools.co/chatgpt-prompts" />
        <meta name="description" content="The ultimate collection of ChatGPT prompts for 2026. 500+ prompts for business, students, side hustles, image generation, and every profession. Free prompts included." />
        <meta name="keywords" content="ChatGPT prompts, best ChatGPT prompts 2026, ChatGPT prompt list" />
        <meta property="og:title" content="ChatGPT Prompts: The Complete Collection (500+ Prompts for 2026)" />
        <meta property="og:description" content="500+ tested ChatGPT prompts for business, students, side hustles, image generation, and every profession." />
        <meta property="og:url" content="https://midastools.co/chatgpt-prompts" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </Head>

      <style>{`
        .hub-hero {
          max-width: 860px; margin: 0 auto; padding: 80px 40px 48px; text-align: center;
        }
        .hub-hero h1 {
          font-size: clamp(32px, 5vw, 52px); font-weight: 900; line-height: 1.1;
          letter-spacing: -1.5px; margin-bottom: 16px; color: var(--text);
        }
        .hub-hero h1 span { color: #3B5FFF; }
        .hub-hero .subtitle {
          font-size: 20px; color: var(--text-secondary); max-width: 560px;
          margin: 0 auto 20px; line-height: 1.6; font-weight: 500;
        }
        .hub-hero .intro {
          font-size: 16px; color: var(--text-secondary); max-width: 640px;
          margin: 0 auto; line-height: 1.7;
        }

        .cat-section {
          max-width: 860px; margin: 0 auto; padding: 0 40px 64px;
        }
        .cat-section h2 {
          font-size: 28px; font-weight: 900; letter-spacing: -1px;
          margin-bottom: 24px; color: var(--text); text-align: center;
        }
        .cat-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
        }
        .cat-card {
          border: 1px solid #E5E7EB; border-radius: 14px; padding: 24px;
          text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 6px;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          background: var(--bg);
        }
        .cat-card:hover {
          border-color: #3B5FFF; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 95, 255, 0.08);
        }
        .cat-emoji { font-size: 28px; margin-bottom: 4px; }
        .cat-name { font-size: 17px; font-weight: 800; color: var(--text); }
        .cat-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        .cat-count {
          display: inline-block; font-size: 12px; font-weight: 700; color: #3B5FFF;
          background: rgba(59, 95, 255, 0.08); padding: 3px 10px; border-radius: 100px;
          margin-top: 4px; width: fit-content;
        }

        .free-section {
          max-width: 860px; margin: 0 auto; padding: 0 40px 64px; text-align: center;
        }
        .free-box {
          background: rgba(59, 95, 255, 0.04); border: 1px solid rgba(59, 95, 255, 0.15);
          border-radius: 16px; padding: 40px;
        }
        .free-box h2 {
          font-size: 24px; font-weight: 900; letter-spacing: -0.5px;
          margin-bottom: 10px; color: var(--text);
        }
        .free-box p {
          font-size: 16px; color: var(--text-secondary); margin-bottom: 24px; line-height: 1.6;
        }

        .cta-section {
          max-width: 860px; margin: 0 auto; padding: 0 40px 80px;
        }
        .cta-box {
          background: #111827; border-radius: 20px; padding: 48px; text-align: center;
        }
        .cta-box h2 {
          font-size: clamp(24px, 3.5vw, 32px); font-weight: 900; letter-spacing: -1px;
          margin-bottom: 12px; color: #FFFFFF;
        }
        .cta-box .cta-sub {
          font-size: 16px; color: rgba(255,255,255,0.6); margin-bottom: 32px; line-height: 1.6;
        }
        .cta-products {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px;
        }
        .cta-product {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px; padding: 24px; text-align: left;
        }
        .cta-product-name {
          font-size: 16px; font-weight: 800; color: #FFFFFF; margin-bottom: 4px;
        }
        .cta-product-price {
          font-size: 24px; font-weight: 900; color: #3B5FFF; margin-bottom: 8px;
        }
        .cta-product-desc {
          font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.5; margin-bottom: 16px;
        }
        .cta-product-link {
          display: inline-block; font-size: 14px; font-weight: 700; color: #3B5FFF;
          text-decoration: none; transition: opacity 0.15s ease;
        }
        .cta-product-link:hover { opacity: 0.8; }
        .cta-divider {
          font-size: 14px; color: rgba(255,255,255,0.3); margin-bottom: 24px;
        }
        .btn-bundle {
          display: inline-block; background: #FFFFFF; color: #111827;
          font-size: 16px; font-weight: 800; padding: 14px 36px; border-radius: 100px;
          text-decoration: none; transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .btn-bundle:hover {
          box-shadow: 0 4px 24px rgba(255,255,255,0.2); transform: translateY(-1px);
        }

        .faq-section {
          max-width: 860px; margin: 0 auto; padding: 0 40px 80px;
        }
        .faq-section h2 {
          font-size: 28px; font-weight: 900; letter-spacing: -1px;
          margin-bottom: 24px; color: var(--text); text-align: center;
        }
        .faq-item {
          border-bottom: 1px solid #E5E7EB; padding: 20px 0;
        }
        .faq-q {
          font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 8px;
        }
        .faq-a {
          font-size: 15px; color: var(--text-secondary); line-height: 1.7;
        }

        .btn-blue {
          display: inline-block; background: #3B5FFF; color: #FFFFFF;
          font-size: 15px; font-weight: 700; padding: 12px 28px; border-radius: 100px;
          text-decoration: none; transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .btn-blue:hover { opacity: 0.9; transform: translateY(-1px); }

        @media(max-width: 700px) {
          .hub-hero { padding: 48px 20px 32px; }
          .cat-section { padding: 0 20px 48px; }
          .cat-grid { grid-template-columns: 1fr; }
          .free-section { padding: 0 20px 48px; }
          .free-box { padding: 28px 20px; }
          .cta-section { padding: 0 20px 60px; }
          .cta-box { padding: 32px 20px; }
          .cta-products { grid-template-columns: 1fr; }
          .faq-section { padding: 0 20px 60px; }
        }
      `}</style>

      {/* Hero */}
      <div className="hub-hero">
        <div className="badge" style={{ marginBottom: 24 }}>500+ Prompts</div>
        <h1><span>ChatGPT Prompts</span> for Every Use Case</h1>
        <p className="subtitle">The most comprehensive collection of tested ChatGPT prompts on the internet.</p>
        <p className="intro">
          We have compiled and tested 500+ ChatGPT prompts across business, education, creative, and professional use cases.
          Every prompt below has been refined through real-world usage and organized into categories so you can find exactly what you need.
        </p>
      </div>

      {/* Category Grid */}
      <div className="cat-section">
        <h2>Browse by Category</h2>
        <div className="cat-grid">
          {categories.map((cat) => (
            <Link href={cat.href} key={cat.name} className="cat-card">
              <div className="cat-emoji">{cat.emoji}</div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-desc">{cat.desc}</div>
              <div className="cat-count">{cat.count}+ prompts</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Free Prompts Teaser */}
      <div className="free-section">
        <div className="free-box">
          <h2>Want to try before you browse?</h2>
          <p>Grab 5 of our best-performing prompts for free. No signup required.</p>
          <Link href="/free-prompts" className="btn-blue">Get 5 Free Prompts &rarr;</Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-box">
          <h2>Get All 500+ Prompts</h2>
          <p className="cta-sub">Stop searching. Start prompting. Our premium packs give you tested, copy-paste-ready prompts for every use case.</p>
          <div className="cta-products">
            <div className="cta-product">
              <div className="cta-product-price">$29</div>
              <div className="cta-product-name">AI Prompt Mega Pack</div>
              <div className="cta-product-desc">200+ business &amp; productivity prompts for marketing, sales, operations, and growth.</div>
              <Link href="/ai-prompt-mega-pack" className="cta-product-link">View Pack &rarr;</Link>
            </div>
            <div className="cta-product">
              <div className="cta-product-price">$29</div>
              <div className="cta-product-name">AI Image Prompt Pack</div>
              <div className="cta-product-desc">150+ image generation prompts for social media, brands, products, and viral styles.</div>
              <Link href="/ai-image-prompt-pack" className="cta-product-link">View Pack &rarr;</Link>
            </div>
            <div className="cta-product">
              <div className="cta-product-price">$97</div>
              <div className="cta-product-name">All 9 Kits Bundle</div>
              <div className="cta-product-desc">Every prompt pack + profession kits. One purchase, lifetime access.</div>
              <a href={BUNDLE_URL} className="cta-product-link">Buy Now &rarr;</a>
            </div>
          </div>
          <div className="cta-divider">or get everything at once</div>
          <a href={BUNDLE_URL} className="btn-bundle">Get the Bundle — $97 &rarr;</a>
        </div>
      </div>

      {/* Prompt Templates */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px 48px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, textAlign: 'center' }}>Free Copy-Paste Prompt Templates</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 24, fontSize: 15 }}>
          160+ ready-to-use prompts organized by use case. No signup needed.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          {[
            { href: '/prompts/chatgpt-coding-prompts', label: 'Coding & Programming' },
            { href: '/prompts/chatgpt-email-subject-lines', label: 'Email Subject Lines' },
            { href: '/prompts/chatgpt-cold-email', label: 'Cold Emails' },
            { href: '/prompts/chatgpt-resume-cover-letter', label: 'Resumes & Cover Letters' },
            { href: '/prompts/chatgpt-youtube-video-scripts', label: 'YouTube Scripts' },
            { href: '/prompts/chatgpt-daily-planning-productivity', label: 'Daily Planning' },
          ].map(t => (
            <Link key={t.href} href={t.href} style={{
              display: 'block', background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '14px 20px', textDecoration: 'none',
              fontSize: 14, fontWeight: 600, color: 'var(--text)', transition: 'border-color 0.2s',
            }}>
              {t.label} &rarr;
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Link href="/prompts" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            Browse all 16 categories &rarr;
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.q}>
            <div className="faq-q">{faq.q}</div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
