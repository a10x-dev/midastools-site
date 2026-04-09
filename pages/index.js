import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/cNi28qdgz7mVb0U8VYcMM07';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer' }}
      onClick={() => setOpen(!open)}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 0', gap: 16,
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{q}</div>
        <div style={{
          fontSize: 20, color: 'var(--accent)', flexShrink: 0,
          transition: 'transform 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>+</div>
      </div>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.2s ease',
        opacity: open ? 1 : 0,
      }}>
        <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: 20 }}>{a}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subStatus, setSubStatus] = useState(null);

  async function handleSubscribe(e) {
    e.preventDefault();
    setSubStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (data.success) setSubStatus('done');
      else setSubStatus('error');
    } catch {
      setSubStatus('error');
    }
  }

  return (
    <Layout>
      <Head>
        <title>Midas Tools — AI Automation Kits for Entrepreneurs</title>
        <meta name="description" content="Deploy AI agents that automate your business 24/7. Templates, workflows, and prompts used by entrepreneurs already making $1,000s/week with AI." />
        <meta property="og:title" content="Midas Tools — AI Automation Kits for Entrepreneurs" />
        <meta property="og:description" content="The exact templates and workflows behind the AI agents already making real revenue. Starting at $29." />
        <meta property="og:url" content="https://midastools.co" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Midas Tools — AI Automation Kits" />
        <meta name="twitter:description" content="Deploy AI agents that automate your business 24/7. Templates, workflows, and prompts for real revenue." />
        <meta name="twitter:image" content="https://midastools.co/og-image.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://midastools.co" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Midas Tools — AI Automation Kits for Entrepreneurs",
          "description": "Deploy AI agents that automate your business 24/7. Templates, workflows, and prompts used by entrepreneurs already making $1,000s/week with AI.",
          "url": "https://midastools.co",
          "publisher": { "@id": "https://midastools.co/#organization" },
          "mainEntity": {
            "@type": "ItemList",
            "name": "AI Prompt Kits",
            "numberOfItems": 15,
            "itemListElement": [
              { "@type": "Product", "name": "AI Toolkit Bundle", "url": "https://midastools.co/bundle", "offers": { "@type": "Offer", "price": "97", "priceCurrency": "USD" }},
              { "@type": "Product", "name": "Real Estate AI Kit", "url": "https://midastools.co/real-estate-kit", "offers": { "@type": "Offer", "price": "49", "priceCurrency": "USD" }},
              { "@type": "Product", "name": "Content Creator Kit", "url": "https://midastools.co/content-creator-kit", "offers": { "@type": "Offer", "price": "39", "priceCurrency": "USD" }},
              { "@type": "Product", "name": "Freelancer Automation Kit", "url": "https://midastools.co/freelancer-kit", "offers": { "@type": "Offer", "price": "39", "priceCurrency": "USD" }},
              { "@type": "Product", "name": "Small Business AI Kit", "url": "https://midastools.co/small-business-kit", "offers": { "@type": "Offer", "price": "39", "priceCurrency": "USD" }}
            ]
          }
        })}} />
      </Head>

      <style>{`
        .home-hero { max-width: 860px; margin: 0 auto; padding: 80px 40px 64px; text-align: center; }
        .home-hero h1 { font-size: clamp(36px, 6vw, 64px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; color: var(--text); }
        .home-hero h1 span { color: var(--accent); }
        .hero-sub { font-size: 18px; color: var(--text-secondary); max-width: 560px; margin: 0 auto 40px; line-height: 1.7; }
        .hero-ctas { display: flex; gap: 16px; justify-content: center; align-items: center; flex-wrap: wrap; }
        .price-tag { font-size: 14px; color: var(--text-secondary); margin-top: 20px; }
        .price-tag strong { color: var(--text); }

        /* Stats */
        .stats-bar { display: flex; justify-content: center; gap: 48px; margin-top: 48px; padding-top: 48px; border-top: 1px solid var(--border); }
        .stat-item { text-align: center; }
        .stat-num { font-size: 28px; font-weight: 900; color: var(--accent); letter-spacing: -1px; }
        .stat-label { font-size: 12px; color: var(--text-secondary); font-weight: 500; margin-top: 4px; }

        /* Technology bar */
        .tech-bar { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 20px 40px; text-align: center; }
        .tech-label { font-size: 11px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 12px; }
        .tech-logos { display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap; }
        .tech-logo { font-size: 14px; font-weight: 600; color: var(--text-tertiary); letter-spacing: -0.3px; }

        .proof-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 40px; max-width: 680px; margin: 0 auto 0; text-align: left; position: relative; }
        .proof-quote { font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px; font-style: italic; }
        .proof-author { font-size: 14px; color: var(--text-secondary); font-weight: 600; }
        .proof-author span { color: var(--accent); }

        /* Results cards */
        .results-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
        .result-card { border-radius: 16px; padding: 28px; text-align: center; }
        .result-card:nth-child(1) { background: var(--card-green); }
        .result-card:nth-child(2) { background: var(--card-blue); }
        .result-card:nth-child(3) { background: var(--card-purple); }
        .result-num { font-size: 32px; font-weight: 900; color: var(--text); letter-spacing: -1px; }
        .result-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; font-weight: 500; }
        .result-note { font-size: 12px; color: var(--text-tertiary); margin-top: 8px; }

        section { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        h2 { font-size: clamp(28px, 4vw, 40px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 16px; color: var(--text); }
        .section-sub { font-size: 17px; color: var(--text-secondary); margin-bottom: 48px; line-height: 1.6; }

        .kit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 48px; }
        .kit-card { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 28px; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .kit-card:hover { border-color: var(--text-tertiary); box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .kit-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; font-size: 13px; font-weight: 800; color: var(--text); letter-spacing: -0.5px; }
        .kit-icon svg { width: 20px; height: 20px; }
        .kit-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
        .kit-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        .steps { display: flex; flex-direction: column; }
        .step { display: flex; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--border); }
        .step:last-child { border-bottom: none; }
        .step-num { flex-shrink: 0; width: 40px; height: 40px; background: rgba(59,95,255,0.08); border: 1px solid rgba(59,95,255,0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; color: var(--accent); }
        .step-body h3 { font-size: 17px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
        .step-body p { font-size: 15px; color: var(--text-secondary); line-height: 1.6; }

        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
        .pricing-card { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 12px; transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease; }
        .pricing-card:hover { border-color: var(--text-tertiary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .pricing-card.featured { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 8px 32px rgba(59,95,255,0.1); }

        /* Founder section */
        .founder-section { display: flex; gap: 40px; align-items: center; }
        .founder-info { flex: 1; }
        .founder-avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), #1E3AE0); display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 900; color: #FFFFFF; flex-shrink: 0; }

        .email-box { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 40px; text-align: center; max-width: 860px; margin: 0 auto; }
        .email-box h3 { font-size: 22px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
        .email-box p { color: var(--text-secondary); margin-bottom: 24px; font-size: 15px; }
        .email-form { display: flex; gap: 12px; max-width: 480px; margin: 0 auto; flex-wrap: wrap; justify-content: center; }
        .email-form input { flex: 1; min-width: 180px; padding: 14px 16px; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-size: 15px; font-family: inherit; outline: none; transition: border-color 0.15s; }
        .email-form input:focus { border-color: var(--accent); }
        .email-form button { background: var(--accent); color: #FFFFFF; padding: 14px 24px; border-radius: 10px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; font-family: inherit; white-space: nowrap; }

        .cta-bottom { border: 1px solid var(--border); border-radius: 20px; padding: 80px 40px; text-align: center; max-width: 860px; margin: 0 auto 80px; background: var(--text); color: #FFFFFF; }
        .cta-bottom h2 { margin-bottom: 16px; color: #FFFFFF; }
        .cta-bottom p { color: rgba(255,255,255,0.7); font-size: 17px; margin-bottom: 40px; }
        .cta-bottom .section-label { color: rgba(255,255,255,0.5); }
        .cta-bottom .btn-primary { background: #FFFFFF; color: var(--text); }
        .cta-bottom .btn-primary:hover { box-shadow: 0 4px 24px rgba(255,255,255,0.2); }
        .cta-bottom .btn-outline { border-color: rgba(255,255,255,0.3); color: #FFFFFF; }
        .cta-bottom .btn-outline:hover { background: rgba(255,255,255,0.08); }

        .trust-signals { display: flex; justify-content: center; gap: 32px; margin-top: 24px; flex-wrap: wrap; }
        .trust-signal { font-size: 13px; color: rgba(255,255,255,0.6); font-weight: 500; display: flex; align-items: center; gap: 6px; }

        /* Guarantee box */
        .guarantee { display: flex; gap: 20px; align-items: flex-start; background: rgba(59,95,255,0.04); border: 1px solid rgba(59,95,255,0.12); border-radius: 14px; padding: 28px; margin-top: 48px; }
        .guarantee-icon { flex-shrink: 0; width: 44px; height: 44px; border-radius: 10px; background: rgba(59,95,255,0.08); border: 1px solid rgba(59,95,255,0.15); display: flex; align-items: center; justify-content: center; }
        .guarantee h4 { font-size: 16px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
        .guarantee p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        /* Decorative elements */
        .deco { position: absolute; pointer-events: none; }

        @media(max-width:700px) {
          .home-hero { padding: 48px 20px 48px; }
          section { padding: 60px 20px; }
          .cta-bottom { padding: 60px 24px; margin: 0 20px 60px; }
          .stats-bar { gap: 24px; }
          .stat-num { font-size: 22px; }
          .results-grid { grid-template-columns: 1fr; }
          .tech-logos { gap: 24px; }
          .founder-section { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* Urgency Banner */}
      <div style={{ background: 'linear-gradient(90deg, #3B5FFF, #1E3AE0)', padding: '10px 40px', textAlign: 'center', fontSize: 13, fontWeight: 600 }}>
        <a href="/bundle" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 800, letterSpacing: 0.5 }}>LAUNCH WEEK</span>
          All 15 AI Kits — $535 value for just $97 (82% off)
          <span style={{ fontWeight: 800, marginLeft: 4 }}>&rarr;</span>
        </a>
      </div>

      {/* Hero */}
      <div className="home-hero">
        <div className="badge" style={{ marginBottom: 32 }}>AI Automation Kits for Entrepreneurs</div>
        <h1>Deploy AI That<br /><span>Runs Your Business</span><br />While You Sleep.</h1>
        <p className="hero-sub">
          Battle-tested templates, workflows, and prompts to launch AI agents that manage email, generate revenue, publish content, and operate your business 24/7.
        </p>
        <div className="hero-ctas">
          <a href={STRIPE_URL} className="btn-primary">Get the Starter Kit — $29 &rarr;</a>
          <a href="/bundle" className="btn-outline">See All Kits</a>
        </div>
        <p className="price-tag">
          <strong>Instant download</strong> &middot; 30-day money-back guarantee &middot; No subscription
        </p>
        <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B7280', fontFamily: "'Inter', sans-serif" }}>
          Not ready to buy? <a href="/tools" style={{ color: '#3B5FFF', fontWeight: 600, textDecoration: 'none' }}>Try our free AI tools</a> &middot; <a href="/quiz" style={{ color: '#3B5FFF', fontWeight: 600, textDecoration: 'none' }}>Take the quiz</a> &middot; <a href="/free-prompts" style={{ color: '#3B5FFF', fontWeight: 600, textDecoration: 'none' }}>Get 5 free prompts</a>
        </p>

        <div className="stats-bar">
          {[
            { num: '$300K/mo', label: 'Peak Agent Revenue' },
            { num: '15', label: 'Niche AI Kits Available' },
            { num: '24/7', label: 'Autonomous Operation' },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology bar */}
      <div className="tech-bar">
        <div className="tech-label">Works with</div>
        <div className="tech-logos">
          <span className="tech-logo">ChatGPT</span>
          <span className="tech-logo">Claude</span>
          <span className="tech-logo">Gemini</span>
          <span className="tech-logo">OpenClaw</span>
          <span className="tech-logo">Any LLM</span>
        </div>
      </div>

      {/* Free Tools Section */}
      <section style={{ paddingBottom: 0 }}>
        <div className="section-label">Free AI Tools</div>
        <h2 style={{ marginBottom: 20 }}>Try before you buy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { href: '/prompt-generator', title: 'AI Prompt Generator', desc: 'Generate expert-level prompts for sales, content, images, video & more. 8 categories.', tag: 'Most Popular' },
            { href: '/business-name-generator', title: 'Business Name Generator', desc: 'Get 20 creative, brandable business names instantly. 16 industries, 6 naming styles.', tag: 'New' },
            { href: '/email-subject-line-tester', title: 'Email Subject Line Tester', desc: 'Score your subject lines for open rates, spam risk & engagement before you send.', tag: 'New' },
            { href: '/hashtag-generator', title: 'AI Hashtag Generator', desc: 'Generate optimized hashtags for Instagram, TikTok, Twitter & more. 22 niches.', tag: 'New' },
            { href: '/prompt-scorer', title: 'AI Prompt Scorer', desc: 'Score any prompt 1-100 with specific feedback. Improve your prompts instantly.', tag: 'New' },
            { href: '/prompt-enhancer', title: 'AI Prompt Enhancer', desc: 'Paste any prompt, get 5 enhanced versions — Professional, Creative, Data-Driven, Viral & Expert.', tag: 'New' },
            { href: '/prompt-roaster', title: 'AI Prompt Roaster', desc: 'Get your bad prompts hilariously roasted, then get a fixed expert-level version. 10 "prompt sins" detected.', tag: '🔥 Viral' },
            { href: '/soul-generator', title: 'SOUL.md Generator', desc: 'Build your OpenClaw AI agent config in 60 seconds. 6 industry presets, production-ready output.', tag: '🔥 NEW' },
            { href: '/image-prompt-builder', title: 'AI Image Prompt Builder', desc: 'Build perfect prompts for ChatGPT, Midjourney & DALL·E. 12 viral styles including Ghibli & Cyberpunk.', tag: '🔥 Trending' },
            { href: '/ai-income-blueprint', title: 'AI Income Blueprint', desc: 'Answer 3 questions, discover your AI founder archetype & estimated monthly income. Shareable results.', tag: '🔥 NEW' },
            { href: '/ai-job-risk', title: 'Will AI Replace My Job?', desc: 'Check your job\'s AI replacement risk score. 40+ jobs analyzed with real 2026 data, timelines & safe skills.', tag: '🔥 VIRAL' },
          ].map(tool => (
            <a key={tool.href} href={tool.href} style={{
              display: 'block', background: 'linear-gradient(135deg, #EEF2FF, #F0F5FF)', border: '2px solid rgba(59,95,255,0.15)',
              borderRadius: 20, padding: '28px 32px', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,95,255,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 1, textTransform: 'uppercase' }}>Free Tool</span>
                    <span style={{ fontSize: 10, fontWeight: 700, background: 'var(--accent)', color: '#fff', padding: '2px 8px', borderRadius: 100 }}>{tool.tag}</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>{tool.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{tool.desc}</div>
                </div>
                <div style={{ background: 'var(--accent)', color: '#fff', padding: '10px 20px', borderRadius: 100, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', flexShrink: 0, marginTop: 12 }}>
                  Try free &rarr;
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Prompt Templates Section */}
      <section style={{ paddingBottom: 0 }}>
        <div className="section-label">Free Prompt Templates</div>
        <h2 style={{ marginBottom: 8 }}>160+ copy-paste prompts — free, no signup</h2>
        <p className="section-sub" style={{ marginBottom: 24 }}>Tested with ChatGPT, Claude, and Gemini. Grab a prompt, paste it, get results.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { href: '/prompts/chatgpt-coding-prompts', label: 'Coding & Programming' },
            { href: '/prompts/chatgpt-email-subject-lines', label: 'Email Subject Lines' },
            { href: '/prompts/chatgpt-social-media-captions', label: 'Social Media Captions' },
            { href: '/prompts/chatgpt-cold-email', label: 'Cold Emails' },
            { href: '/prompts/chatgpt-youtube-video-scripts', label: 'YouTube Scripts' },
            { href: '/prompts/chatgpt-seo-content', label: 'SEO Content' },
            { href: '/prompts/chatgpt-resume-cover-letter', label: 'Resumes & Cover Letters' },
            { href: '/prompts/chatgpt-business-plan', label: 'Business Plans' },
          ].map(t => (
            <a key={t.href} href={t.href} style={{
              display: 'block', background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '16px 20px', textDecoration: 'none',
              fontSize: 14, fontWeight: 600, color: 'var(--text)', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {t.label} &rarr;
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href="/prompts" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            Browse all 16 categories &rarr;
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section>
        <div className="section-label">Real Results</div>
        <h2>This isn't theory — it's already working</h2>
        <p className="section-sub">Felix Craft started as a proof-of-concept AI agent on OpenClaw. $14,718 in 3 weeks → now <strong>$300,000+/month in revenue</strong> across multiple autonomous businesses. Verified via Stripe + on-chain ETH.</p>

        <div className="proof-card">
          <p className="proof-quote">"In those two and a half weeks, he's earned $14,718. Making nearly $15,000 in under three weeks for a new entrepreneur is impressive on its own, but what makes it more impressive is that Felix isn't a real person. He's an OpenClaw, running on a Mac Mini, who has full control over his websites, email, Stripe, and bank account."</p>
          <p className="proof-author">&mdash; <span>Nat Eliason</span>, Entrepreneur &amp; Author</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#6B7280', fontStyle: 'italic' }}>Update (April 2026): Felix now generates $300K+/month across Clawcommerce, ClawMart, and other ventures. <a href="/blog/ai-agent-10k-day" style={{ color: '#3B5FFF' }}>Read the full story →</a></p>
        </div>

        <div className="results-grid">
          <div className="result-card">
            <div className="result-num">$300K/mo</div>
            <div className="result-label">Total Revenue</div>
            <div className="result-note">From $14K in 3 weeks</div>
          </div>
          <div className="result-card">
            <div className="result-num">0 hrs</div>
            <div className="result-label">Human Work Required</div>
            <div className="result-note">Fully autonomous</div>
          </div>
          <div className="result-card">
            <div className="result-num">~$50/mo</div>
            <div className="result-label">Operating Cost</div>
            <div className="result-note">Compute + API costs</div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section id="kit" style={{ paddingTop: 0 }}>
        <div className="section-label">What's Inside</div>
        <h2>Everything you need to deploy your agent and start earning</h2>
        <p className="section-sub">Skip the weeks of trial and error. Get the exact files that make an AI entrepreneur actually work.</p>
        <div className="kit-grid">
          {[
            { abbr: 'SM', title: '5 SOUL.md Templates', desc: 'Pre-built identity files for entrepreneur, content creator, SaaS builder, community manager, and service business.', bg: 'var(--card-blue)' },
            { abbr: 'HB', title: 'Heartbeat Workflow System', desc: 'Makes your agent proactively check emails, monitor revenue, track tasks — and alert you when something needs attention.', bg: 'var(--card-green)' },
            { abbr: 'DR', title: 'Daily Review Template', desc: 'The exact morning report structure: revenue stats, open blockers, and the top 5 priorities — ready every morning.', bg: 'var(--card-purple)' },
            { abbr: 'PL', title: 'Product Launch Prompts', desc: 'Word-for-word prompts to tell your agent to create and launch a digital product overnight — the same approach Felix used.', bg: 'var(--card-amber)' },
            { abbr: 'RO', title: 'Revenue Ops Playbook', desc: 'How to give your agent access to Stripe, email, and hosting safely. The minimal permission set for running a real business.', bg: 'var(--card-pink)' },
            { abbr: 'SG', title: 'Complete Setup Guide', desc: 'Step-by-step: zero to a deployed, revenue-focused OpenClaw agent with exact tools, accounts, and configurations.', bg: 'var(--card-cyan)' },
          ].map((item) => (
            <div className="kit-card" key={item.title}>
              <div className="kit-icon" style={{ background: item.bg }}>
                <span>{item.abbr}</span>
              </div>
              <div className="kit-title">{item.title}</div>
              <div className="kit-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">How It Works</div>
        <h2>From zero to deployed in one day</h2>
        <p className="section-sub">No coding required. Install OpenClaw, drop in the templates, and point your agent at a mission.</p>
        <div className="steps">
          {[
            { n: '1', h: 'Install OpenClaw', p: 'Download and install OpenClaw on any Mac. Takes about 10 minutes, no programming knowledge needed.' },
            { n: '2', h: 'Drop in the templates', p: 'Copy the SOUL.md and HEARTBEAT.md files into your workspace. Fill in your name and mission. That\'s it.' },
            { n: '3', h: 'Give it a mission', p: 'Use the Product Launch Prompts. Go to sleep. Wake up to a deployed product with a payment link.' },
            { n: '4', h: 'Review and iterate', p: 'Your agent sends you a daily report. You spend 10 minutes reviewing. The rest is handled autonomously.' },
          ].map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-body"><h3>{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="guarantee">
          <div className="guarantee-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.5 4H17V8.5L20 11L17 13.5V18H12.5L10 21L7.5 18H3V13.5L0 11L3 8.5V4H7.5L10 1Z" fill="rgba(59,95,255,0.12)" stroke="#3B5FFF" strokeWidth="1.2"/><path d="M7 11l2 2 4-4" stroke="#3B5FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <h4>30-Day Money-Back Guarantee</h4>
            <p>Try everything risk-free. If the kit doesn't help you deploy a working AI agent, email iam@armando.mx and get a full refund — no questions asked, same day.</p>
          </div>
        </div>
      </section>

      {/* Browse All Kits */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">AI Kits for Every Role</div>
        <h2>Find the kit built for your industry</h2>
        <p className="section-sub">Each kit includes ready-to-use prompts, templates, and workflows — or grab them all with the bundle.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          {[
            { name: 'Video Prompt Pack', price: '$29', desc: 'Sora, Runway, Pika prompts', href: '/ai-video-prompt-pack', bg: 'var(--card-cyan)' },
            { name: 'Image Prompt Pack', price: '$29', desc: 'ChatGPT, Midjourney, DALL-E', href: '/ai-image-prompt-pack', bg: 'var(--card-pink)' },
            { name: 'Prompt Mega Pack', price: '$29', desc: '200+ prompts for any business', href: '/ai-prompt-mega-pack', bg: 'var(--card-amber)' },
            { name: 'Notion Templates Kit', price: '$39', desc: '150+ Notion templates & systems', href: '/notion-templates-kit', bg: 'var(--card-purple)' },
            { name: 'Social Media Kit', price: '$39', desc: 'Calendars, captions, viral content', href: '/social-media-kit', bg: 'var(--card-cyan)' },
            { name: 'Email Marketing Kit', price: '$29', desc: 'Sequences, newsletters, outreach', href: '/email-marketing-kit', bg: 'var(--card-amber)' },
            { name: 'Content Creator Kit', price: '$39', desc: 'Repurpose, schedule, grow', href: '/content-creator-kit', bg: 'var(--card-green)' },
            { name: 'Freelancer Kit', price: '$39', desc: 'Proposals, invoicing, client mgmt', href: '/freelancer-kit', bg: 'var(--card-blue)' },
            { name: 'Small Business Kit', price: '$39', desc: 'Operations, hiring, marketing', href: '/small-business-kit', bg: 'var(--card-green)' },
            { name: 'E-commerce Kit', price: '$39', desc: 'Listings, ads, customer retention', href: '/ecommerce-kit', bg: 'var(--card-pink)' },
            { name: 'SaaS Founder Kit', price: '$39', desc: 'Launch, onboard, reduce churn', href: '/saas-founder-kit', bg: 'var(--card-cyan)' },
            { name: 'Real Estate Kit', price: '$49', desc: 'Leads, listings, follow-ups', href: '/real-estate-kit', bg: 'var(--card-purple)' },
            { name: 'Presentation Kit', price: '$29', desc: 'Pitch decks, sales decks, talks', href: '/presentation-kit', bg: 'var(--card-amber)' },
            { name: 'Resume & Career Kit', price: '$29', desc: 'Resumes, LinkedIn, interviews', href: '/resume-career-kit', bg: 'var(--card-green)' },
            { name: 'Starter Kit', price: '$29', desc: 'Deploy your AI entrepreneur', href: '/', bg: 'var(--card-blue)' },
          ].map(k => (
            <a key={k.name} href={k.href} style={{ display: 'block', background: k.bg, borderRadius: 12, padding: '20px 20px', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{k.name}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--accent)' }}>{k.price}</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{k.desc}</div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a href="/bundle" style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            Or get all 15 kits for $97 (save 82%) &rarr;
          </a>
        </div>
      </section>

      {/* Product Ladder */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">Choose Your Path</div>
        <h2>One goal. Two ways to get there.</h2>
        <p className="section-sub">Start with the kit. Upgrade when you're ready.</p>
        <div className="pricing-grid">
          {[
            { label: 'Start Here', price: '$29', term: 'one-time', name: 'Starter Kit', desc: 'Templates, workflows, and prompts to deploy your first AI agent yourself.', href: STRIPE_URL, cta: 'Get the Kit \u2192', featured: false },
            { label: 'Best Value', price: '$97', term: 'one-time', name: 'All Kits Bundle', desc: '15 AI kits + all future kits free. Save 82% vs buying separately.', href: 'https://buy.stripe.com/aEUbJ01xR0YxgligkocMM0g', cta: 'Get the Bundle \u2192', featured: true },
          ].map(p => (
            <div key={p.name} className={`pricing-card${p.featured ? ' featured' : ''}`}>
              <span className="badge" style={{ fontSize: 11, padding: '4px 10px', letterSpacing: 1 }}>{p.label}</span>
              <div>
                <span style={{ fontSize: 32, fontWeight: 900, letterSpacing: -1, color: 'var(--text)' }}>{p.price}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: 14, marginLeft: 8 }}>{p.term}</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: 17, color: 'var(--text)' }}>{p.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, flex: 1 }}>{p.desc}</div>
              <a href={p.href} style={{ display: 'block', textAlign: 'center', background: p.featured ? 'var(--accent)' : 'transparent', color: p.featured ? '#FFFFFF' : 'var(--text)', border: p.featured ? 'none' : '1.5px solid var(--border)', padding: '12px 20px', borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">Who Built This</div>
        <div className="founder-section">
          <div className="founder-avatar">A</div>
          <div className="founder-info">
            <h2 style={{ fontSize: 24, marginBottom: 12 }}>Built by Armando</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
              I'm an engineer and entrepreneur who's been building AI automation tools since before it was cool. Midas Tools exists because I needed these exact workflows for my own businesses — and realized thousands of other entrepreneurs need them too.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
              Every template in these kits comes from real usage — not theory. They've been tested, refined, and proven to work with actual AI agents generating real revenue.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
              <a href="mailto:iam@armando.mx" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>iam@armando.mx</a>
              <a href="https://cal.com/manduks/midastools" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Book a call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section style={{ paddingTop: 0 }}>
        <div className="email-box">
          <h3>Get free templates + weekly AI insights</h3>
          <p>Join entrepreneurs getting weekly workflows, prompts, and revenue strategies. No spam — unsubscribe anytime.</p>
          {subStatus === 'done' ? (
            <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 16 }}>You're in — check your inbox!</p>
          ) : (
            <form className="email-form" onSubmit={handleSubscribe}>
              <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" disabled={subStatus === 'loading'}>{subStatus === 'loading' ? 'Joining...' : 'Subscribe free \u2192'}</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">FAQ</div>
        <h2>Common questions</h2>
        <div style={{ marginTop: 32 }}>
          {[
            { q: 'Do I need to know how to code?', a: 'No. The templates are text files. Your agent handles all the coding. If you can copy and paste, you can use these kits.' },
            { q: 'Is this just for Mac?', a: 'OpenClaw currently runs on macOS. A Mac Mini (~$599) is ideal for 24/7 operation, but any Mac works to start.' },
            { q: 'What will my agent actually build?', a: 'Depends on what you tell it. The kit gives you proven prompts for digital products, software tools, and service businesses. Felix Craft now generates $300K+/month using similar templates — starting with $14,718 in just the first 3 weeks.' },
            { q: 'How is this different from just using ChatGPT?', a: 'ChatGPT responds to messages. OpenClaw agents run 24/7, maintain memory, execute code, deploy websites, and work toward long-term goals — completely without you being there.' },
            { q: 'Can this replace my virtual assistant?', a: 'For about 75% of typical VA work — yes. Email triage, research, content scheduling, and daily reporting all run autonomously. High-stakes decisions stay with you. Total cost: under $50/month vs. $3,000-$8,000/month for a human VA.' },
            { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx and you\'ll get your money back the same day.' },
          ].map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Final CTA — Dark section for contrast */}
      <div className="cta-bottom" id="buy">
        <div className="section-label" style={{ marginBottom: 16 }}>Get Started Today</div>
        <h2>Your AI entrepreneur is<br />one download away.</h2>
        <p>Join entrepreneurs using AI to generate real revenue — starting at $29.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={STRIPE_URL} className="btn-primary">Get the Starter Kit — $29 &rarr;</a>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" className="btn-outline">All Kits — $97</a>
        </div>
        <div className="trust-signals">
          {['Secure Stripe Checkout', 'Instant Download', '30-Day Refund', 'No Subscription'].map(t => (
            <span key={t} className="trust-signal">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.15)" /><path d="M4 7l2 2 4-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t}
            </span>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 14, opacity: 0.7 }}>Secure checkout via Stripe · Instant download · 30-day guarantee</p>
      </div>
    </Layout>
  );
}
