import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import { getAttribution } from '../lib/stripe-attribution';

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
        maxHeight: open ? 240 : 0, overflow: 'hidden',
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
  const [subStatus, setSubStatus] = useState(null);

  async function handleSubscribe(e) {
    e.preventDefault();
    setSubStatus('loading');
    try {
      // Capture UTM params for attribution (enables real ads measurement later)
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const liveUtm = params ? {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
      } : {};
      // First-touch attribution persisted in localStorage (mt_attr_v2, 90 days).
      const attr = typeof window !== 'undefined' ? (getAttribution() || {}) : {};
      const utm = {
        utm_source: liveUtm.utm_source || attr.utm_source || '',
        utm_medium: liveUtm.utm_medium || attr.utm_medium || '',
        utm_campaign: liveUtm.utm_campaign || attr.utm_campaign || '',
      };
      const liveReferrer = typeof document !== 'undefined' ? document.referrer || '' : '';
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'homepage',
          referrer: liveReferrer || attr.referrer_host || '',
          landing_slug: attr.landing_slug || '',
          attribution: attr,
          ...utm,
        }),
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
        <title>Midas Tools — AI Chatbot Builder + Free AI Tools That Make You Money</title>
        <meta name="description" content="Paste any business website and get a working AI support chatbot in ~60 seconds. Embed it free, keep it live for $39/mo, or sell chatbots to local businesses for $300/mo. Plus 22+ free AI tools for founders, creators, and consultants." />
        <meta property="og:title" content="Midas Tools — AI Chatbot Builder + Free AI Tools" />
        <meta property="og:description" content="Build a working AI support chatbot from any website in ~60 seconds. Free to try, $39/mo to keep it live, or resell to local businesses. Plus 22+ free AI tools." />
        <meta property="og:url" content="https://www.midastools.co" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Midas Tools — AI Chatbot Builder + Free AI Tools" />
        <meta name="twitter:description" content="Build a working AI support chatbot from any website in ~60 seconds. Free to try, $39/mo to keep it live." />
        <meta name="twitter:image" content="https://www.midastools.co/og-image.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.midastools.co" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Midas Tools — AI Chatbot Builder + Free AI Tools",
          "description": "Build a working AI support chatbot from any business website in ~60 seconds. Free to try, $39/mo to keep it live, or resell to local businesses. Plus 22+ free AI tools.",
          "url": "https://www.midastools.co",
          "publisher": { "@id": "https://www.midastools.co/#organization" },
          "mainEntity": {
            "@type": "Product",
            "name": "AI Chatbot Builder",
            "description": "Paste any business website and get a working, embeddable AI support chatbot in about 60 seconds. Free to build; $39/mo to keep it live.",
            "url": "https://www.midastools.co/chatbot-builder",
            "offers": { "@type": "Offer", "price": "39", "priceCurrency": "USD", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "39", "priceCurrency": "USD", "billingDuration": "P1M" } }
          }
        })}} />
      </Head>

      <style>{`
        .home-hero { max-width: 860px; margin: 0 auto; padding: 80px 40px 64px; text-align: center; }
        .home-hero h1 { font-size: clamp(36px, 6vw, 64px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; color: var(--text); }
        .home-hero h1 span { color: var(--accent); }
        .hero-sub { font-size: 18px; color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px; line-height: 1.7; }
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

        section { max-width: 860px; margin: 0 auto; padding: 80px 40px; }
        h2 { font-size: clamp(28px, 4vw, 40px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 16px; color: var(--text); }
        .section-sub { font-size: 17px; color: var(--text-secondary); margin-bottom: 48px; line-height: 1.6; }

        .steps { display: flex; flex-direction: column; }
        .step { display: flex; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--border); }
        .step:last-child { border-bottom: none; }
        .step-num { flex-shrink: 0; width: 40px; height: 40px; background: rgba(59,95,255,0.08); border: 1px solid rgba(59,95,255,0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; color: var(--accent); }
        .step-body h3 { font-size: 17px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
        .step-body p { font-size: 15px; color: var(--text-secondary); line-height: 1.6; }

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

        @media(max-width:700px) {
          .home-hero { padding: 48px 20px 48px; }
          section { padding: 60px 20px; }
          .cta-bottom { padding: 60px 24px; margin: 0 20px 60px; }
          .stats-bar { gap: 24px; }
          .stat-num { font-size: 22px; }
          .tech-logos { gap: 24px; }
          .founder-section { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* Hero */}
      <div className="home-hero">
        <div className="badge" style={{ marginBottom: 32 }}>AI Tools &middot; Built to Make You Money</div>
        <h1>AI tools that<br />make you <span>money.</span></h1>
        <p className="hero-sub">
          Start with the <strong>AI Chatbot Builder</strong> — paste any business website and get a working AI support chatbot in about 60 seconds. Embed it free, keep it live for $39/mo, or sell chatbots to local businesses for $300/mo.
        </p>
        <div className="hero-ctas">
          <a href="/chatbot-builder" className="btn-primary" data-cta="hero-chatbot-builder">Build a free chatbot &rarr;</a>
          <a href="/tools" className="btn-outline" data-cta="hero-free-tools">Browse all free tools &rarr;</a>
        </div>
        <p className="price-tag">
          Free to build &middot; <strong>$39/mo</strong> to keep it live &middot; cancel anytime
        </p>

        <div className="stats-bar">
          {[
            { num: '~60s', label: 'To build a working chatbot' },
            { num: '22+', label: 'Free AI tools' },
            { num: '$39/mo', label: 'Keep it live — no lock-in' },
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
          <span className="tech-logo">Any website</span>
        </div>
      </div>

      {/* Flagship — AI Chatbot Builder */}
      <section>
        <div className="section-label">The Product</div>
        <h2>Turn any website into a 24/7 AI support agent</h2>
        <p className="section-sub">Paste a business URL. We read the site, build a grounded chatbot that answers real customer questions and captures leads, and give you a one-line embed. Keep it on your own site, or resell it to local businesses on a monthly retainer.</p>
        <div className="steps">
          {[
            { n: '1', h: 'Paste a website', p: 'Drop in any business URL. The builder reads the pages and learns the services, hours, pricing, and FAQs — no manual setup.' },
            { n: '2', h: 'Get a working bot in ~60 seconds', p: 'You get a live, grounded chatbot you can test right away. It answers from the real site content and honestly says when it does not know.' },
            { n: '3', h: 'Embed it free — or sell it', p: 'Copy one line of code to embed it. Keep it live for $39/mo, or charge local businesses $300/mo and pocket the difference.' },
          ].map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-body"><h3>{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/chatbot-builder" className="btn-primary" data-cta="flagship-chatbot-builder">Build your first chatbot — free &rarr;</a>
        </div>
      </section>

      {/* Free Tools Section */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">Free AI Tools</div>
        <h2 style={{ marginBottom: 20 }}>More free tools to grow your business</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { href: '/chatbot-builder', title: 'AI Chatbot Builder', desc: 'Paste any business website → get a working AI support chatbot in ~60 seconds. Embed it free; keep it live for $39/mo. Or sell it to local businesses for $300/mo.', tag: '💰 Recurring' },
            { href: '/prompt-generator', title: 'AI Prompt Generator', desc: 'Generate expert-level prompts for sales, content, images, video & more. 8 categories.', tag: 'Most Popular' },
            { href: '/business-name-generator', title: 'Business Name Generator', desc: 'Get 20 creative, brandable business names instantly. 16 industries, 6 naming styles.', tag: 'New' },
            { href: '/email-subject-line-tester', title: 'Email Subject Line Tester', desc: 'Score your subject lines for open rates, spam risk & engagement before you send.', tag: 'New' },
            { href: '/hashtag-generator', title: 'AI Hashtag Generator', desc: 'Generate optimized hashtags for Instagram, TikTok, Twitter & more. 22 niches.', tag: 'New' },
            { href: '/prompt-scorer', title: 'AI Prompt Scorer', desc: 'Score any prompt 1-100 with specific feedback. Improve your prompts instantly.', tag: 'New' },
            { href: '/prompt-enhancer', title: 'AI Prompt Enhancer', desc: 'Paste any prompt, get 5 enhanced versions — Professional, Creative, Data-Driven, Viral & Expert.', tag: 'New' },
            { href: '/soul-generator', title: 'SOUL.md Generator', desc: 'Build your OpenClaw AI agent config in 60 seconds. 6 industry presets, production-ready output.', tag: '🔥 NEW' },
            { href: '/image-prompt-builder', title: 'AI Image Prompt Builder', desc: 'Build perfect prompts for ChatGPT, Midjourney & DALL·E. 12 viral styles including Ghibli & Cyberpunk.', tag: '🔥 Trending' },
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
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/tools" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            See all free tools &rarr;
          </Link>
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
              I'm an engineer and entrepreneur building practical AI tools that make money — not demos. Midas Tools exists because I needed these exact workflows for my own businesses, and realized thousands of other founders and operators need them too.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
              Everything here is built from real usage — tested, refined, and proven to work in production.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
              <a href="https://cal.com/manduks/midastools" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Book a call &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section id="subscribe" style={{ paddingTop: 0 }}>
        <div className="email-box">
          <h3>Get free templates + weekly AI insights</h3>
          <p>Join founders and operators getting weekly workflows, tools, and revenue strategies. No spam — unsubscribe anytime.</p>
          {subStatus === 'done' ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>You're in — check your inbox!</p>
              <p style={{ color: '#374151', fontSize: 15, marginBottom: 16 }}>While you're here — the fastest thing you can build right now is a working AI chatbot from any website. Free to try.</p>
              <a href="/chatbot-builder?utm_source=homepage&utm_medium=signup_success&utm_campaign=signup_chatbot" className="btn-primary" data-cta="signup-success-chatbot">Build a free chatbot &rarr;</a>
            </div>
          ) : (
            <form className="email-form" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" disabled={subStatus === 'loading'}>{subStatus === 'loading' ? 'Joining...' : 'Subscribe free →'}</button>
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
            { q: 'What does the AI Chatbot Builder actually do?', a: 'You paste a business website and it builds a working AI support chatbot grounded in that site\'s real content — services, hours, pricing, FAQs. You get a live bot to test and a one-line embed code, in about 60 seconds.' },
            { q: 'Is it really free to try?', a: 'Yes. Building and testing a chatbot is free. To keep a bot live on a real website — with the branding removed and lead capture on — it\'s $39/mo, and you can cancel anytime.' },
            { q: 'How do people make money with this?', a: 'Local businesses (med spas, dental offices, home services, law firms, real estate) pay $300–$2,000/mo for a chatbot that captures leads 24/7. You build it here for $39/mo and keep the difference. It\'s a real recurring side business.' },
            { q: 'Do I need to know how to code?', a: 'No. You paste a URL and copy one line of embed code. That\'s the whole technical requirement.' },
            { q: 'Will the bot make things up?', a: 'It\'s built to stay grounded in the website it read. When it doesn\'t know something, it says so and offers to capture the visitor\'s details instead of inventing an answer.' },
            { q: 'What are the free tools for?', a: 'They\'re genuinely free — prompt generators, a chatbot builder, name and hashtag generators, and more. Use them to run your business; no signup required to start.' },
          ].map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Popular Free Tools — SEO internal linking */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">Popular Free Tools</div>
        <h2 style={{ marginBottom: 8 }}>AI tools you can use right now</h2>
        <p className="section-sub" style={{ marginBottom: 24 }}>No signup required. Build chatbots, generate prompts, and more — all free.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
          {[
            { href: '/chatbot-builder', title: 'AI Chatbot Builder', desc: 'Turn any website into a working AI support chatbot in ~60 seconds.' },
            { href: '/prompt-generator', title: 'AI Prompt Generator', desc: 'Generate expert-level prompts for any use case across 8 categories.' },
            { href: '/prompt-enhancer', title: 'AI Prompt Enhancer', desc: 'Paste any prompt, get 5 enhanced versions instantly.' },
            { href: '/soul-generator', title: 'SOUL.md Generator', desc: 'Build your OpenClaw AI agent config in 60 seconds — 6 industry presets.' },
            { href: '/image-prompt-builder', title: 'Image Prompt Builder', desc: 'Build perfect prompts for Midjourney, DALL-E, and ChatGPT images.' },
            { href: '/business-name-generator', title: 'Business Name Generator', desc: '20 brandable business names instantly — 16 industries, 6 styles.' },
          ].map(tool => (
            <Link key={tool.href} href={tool.href} style={{
              display: 'block', background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: '20px 24px', textDecoration: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(59,95,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{tool.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{tool.desc}</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/tools" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            See all free tools &rarr;
          </Link>
        </div>
      </section>

      {/* Latest from the Blog — SEO internal linking */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">Latest from the Blog</div>
        <h2 style={{ marginBottom: 8 }}>AI guides and strategies</h2>
        <p className="section-sub" style={{ marginBottom: 24 }}>Practical tutorials, chatbot playbooks, and AI business strategies.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
          {[
            { href: '/blog/sell-ai-chatbots-local-business-2026', title: 'How to Sell AI Chatbots to Local Businesses', desc: 'The $300/mo recurring play — build free, charge monthly. The full playbook.' },
            { href: '/blog/ai-chatbot-for-real-estate-agents-2026', title: 'AI Chatbots for Real Estate Agents', desc: 'Capture every listing lead 24/7 with a grounded AI chatbot.' },
            { href: '/blog/claude-code-mastery-guide-2026', title: 'Claude Code Mastery Guide', desc: 'The complete guide to building with Claude Code — setup to advanced workflows.' },
            { href: '/blog/best-free-ai-tools-2026', title: 'Best Free AI Tools of 2026', desc: 'The AI tools worth actually using this year — most of them free.' },
          ].map(post => (
            <Link key={post.href} href={post.href} style={{
              display: 'block', background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: '20px 24px', textDecoration: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(59,95,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{post.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{post.desc}</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
            See all blog posts &rarr;
          </Link>
        </div>
      </section>

      {/* Final CTA — Dark section for contrast */}
      <div className="cta-bottom" id="buy">
        <div className="section-label" style={{ marginBottom: 16 }}>Get Started Today</div>
        <h2>Your first AI chatbot is<br />60 seconds away.</h2>
        <p>Paste a website, get a working AI support agent. Free to build — $39/mo to keep it live.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/chatbot-builder" className="btn-primary" data-cta="bottom-chatbot-builder">Build a free chatbot &rarr;</a>
          <a href="/tools" className="btn-outline">Browse free tools</a>
        </div>
        <div className="trust-signals">
          {['No signup to start', 'Live in ~60 seconds', 'Cancel anytime', 'Resell for $300/mo'].map(t => (
            <span key={t} className="trust-signal">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.15)" /><path d="M4 7l2 2 4-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
}
