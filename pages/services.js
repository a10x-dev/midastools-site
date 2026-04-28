import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

// Stripe payment links (live) — created via /api/setup-dfy, Session 125 (Apr 21)
const DFY_CONTENT_URL = 'https://buy.stripe.com/28EdR84K36iR5GAa02cMM0u';
const DFY_BRAND_URL = 'https://buy.stripe.com/cNi14mccv36F3ys1twcMM0v';
const DFY_LISTING_URL = 'https://buy.stripe.com/8x2fZgfoHbDb1qk3BEcMM0w';
// $997 AI Clarity Assessment — see /ai-audit (canonical landing page)
const ASSESSMENT_URL = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';

const SERVICES = [
  {
    id: 'ai-assessment',
    tag: 'Start Here',
    name: 'AI Clarity Assessment',
    price: 997,
    time: '7 days',
    hook: 'A productized 7-day consulting engagement. Find your highest-leverage AI moves.',
    desc: 'Pre-call research, 60-min discovery interview, custom AI tool stack report (priority matrix + 4-day quick-start + financial impact projection), and 30-min review call. Full refund if we don\'t save you 5+ hrs/week.',
    deliverables: [
      'Pre-call research dossier',
      '60-min structured discovery interview',
      'Priority matrix (high impact + low effort = start here)',
      '4-day quick-start plan with hourly blocks',
      'Financial impact projection (hours saved × your rate)',
      '30-min review call with screen-share walkthrough',
    ],
    href: '/ai-audit',
    featured: true,
    accent: 'rgba(252,211,77,0.10)',
    border: 'rgba(252,211,77,0.45)',
  },
  {
    id: 'content-month',
    tag: 'Most Popular',
    name: 'AI Content Month',
    price: 199,
    time: '48 hours',
    hook: '30 days of social content — written, formatted, ready to post.',
    desc: 'Tell us your brand, audience, and goals. We deliver a full month of content you can copy-paste into any platform.',
    deliverables: [
      '10 LinkedIn posts (hook + body + CTA)',
      '10 Twitter/X posts (threads + singles)',
      '10 Instagram captions + hashtag sets',
      '4 newsletter editions (subject + body)',
      'Content calendar with optimal posting times',
      'Brand voice cheat sheet',
    ],
    href: DFY_CONTENT_URL,
    accent: 'var(--card-blue)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    id: 'brand-pack',
    tag: 'Best Value',
    name: 'AI Brand Starter Pack',
    price: 299,
    time: '72 hours',
    hook: 'Your complete brand identity — built, not templated.',
    desc: 'From brand voice to ad copy. We build the full package so your business looks like it has a marketing team.',
    deliverables: [
      'Brand voice & messaging guide',
      '50 social media posts (multi-platform)',
      '10 email templates (welcome, promo, nurture)',
      '5 ad copy variations (Meta + Google)',
      'Landing page copy (hero to CTA)',
      'Competitor positioning brief',
      'Tagline + elevator pitch options',
    ],
    href: DFY_BRAND_URL,
    featured: true,
    accent: 'rgba(59,95,255,0.06)',
    border: 'rgba(59,95,255,0.25)',
  },
  {
    id: 'listing-optimizer',
    tag: 'Quick Win',
    name: 'AI Listing Optimizer',
    price: 149,
    time: '24 hours',
    hook: 'Your listings, rewritten to actually convert.',
    desc: 'Send us your product pages, property listings, or service descriptions. We rewrite them with AI-optimized copy that sells.',
    deliverables: [
      'Up to 10 listings rewritten',
      'SEO keyword optimization per listing',
      'A/B headline variants for testing',
      'Before/after comparison document',
      'Competitor listing analysis',
    ],
    href: DFY_LISTING_URL,
    accent: 'var(--card-green)',
    border: 'rgba(16,185,129,0.2)',
  },
];

const STEPS = [
  { num: '01', title: 'Send us your brief', desc: 'Fill out a 5-minute form about your business, audience, and goals. That\'s the only work you do.' },
  { num: '02', title: 'We build it with AI', desc: 'Our team uses advanced AI to create professional-grade deliverables tailored specifically to your business.' },
  { num: '03', title: 'Review & publish', desc: 'You receive everything in a ready-to-use format. One round of revisions included. Then go live.' },
];

const FAQS = [
  { q: 'What AI tools do you use?', a: 'We use the best tool for each task — ChatGPT, Claude, Midjourney, and custom workflows. You get the output, not the tools.' },
  { q: 'Can I request revisions?', a: 'Yes. Every service includes one round of revisions at no extra cost. Most clients use their deliverables as-is.' },
  { q: 'How do you deliver the work?', a: 'Via email as a Google Doc, spreadsheet, or organized ZIP file — whatever makes sense for the service. You own everything we create.' },
  { q: 'What if I\'m not happy with the results?', a: '30-day money-back guarantee. If the deliverables don\'t meet your expectations after revisions, you get a full refund.' },
  { q: 'How is this different from your prompt kits?', a: 'Kits give you the tools to do the work yourself. Services mean we do the work for you. Same AI, zero learning curve, guaranteed output.' },
];

export default function Services() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'services-page' }),
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Services for Coaches & Consultants — Done-For-You Content & Branding | Midas Tools</title>
        <meta name="description" content="Done-for-you AI content, branding, and sales pages built for solo coaches and consultants. The AI-native service company YC's S26 RFS #2 was written about. From $149, delivered in 24-72 hours." />
        <meta property="og:title" content="AI Services for Coaches & Consultants — Done For You | Midas Tools" />
        <meta property="og:description" content="Stop writing IG posts at midnight. We deliver finished AI content, branding, and sales pages for coaches. From $149." />
        <meta property="og:url" content="https://www.midastools.co/services" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.midastools.co/services" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Midas Tools AI Services",
          "description": "Done-for-you AI content creation, brand building, and listing optimization services.",
          "url": "https://www.midastools.co/services",
          "provider": {
            "@type": "Organization",
            "name": "Midas Tools",
            "url": "https://www.midastools.co"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Services",
            "itemListElement": SERVICES.map((s) => ({
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": s.name, "description": s.desc },
              "price": s.price,
              "priceCurrency": "USD",
            }))
          }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}} />
      </Head>

      <style>{`
        .svc-wrap { max-width: 900px; margin: 0 auto; padding: 80px 40px; }
        .svc-hero { text-align: center; margin-bottom: 80px; }
        .svc-hero h1 {
          font-size: clamp(36px, 6vw, 62px); font-weight: 900;
          line-height: 1.05; letter-spacing: -2.5px;
          margin-bottom: 24px; color: var(--text);
        }
        .svc-hero h1 em {
          font-style: normal; color: var(--accent);
          background: linear-gradient(135deg, rgba(59,95,255,0.08) 0%, rgba(59,95,255,0.02) 100%);
          padding: 0 8px; border-radius: 8px;
        }
        .svc-sub {
          font-size: 19px; color: var(--text-secondary);
          max-width: 580px; margin: 0 auto 40px; line-height: 1.7;
        }

        .svc-fade { opacity: 0; transform: translateY(20px); transition: all 0.7s cubic-bezier(0.16,1,0.3,1); }
        .svc-fade.in { opacity: 1; transform: translateY(0); }
        .svc-fade.d1 { transition-delay: 0.1s; }
        .svc-fade.d2 { transition-delay: 0.2s; }
        .svc-fade.d3 { transition-delay: 0.3s; }
        .svc-fade.d4 { transition-delay: 0.4s; }

        .svc-problem {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; padding: 48px; text-align: center; margin-bottom: 80px;
        }
        .svc-problem h2 {
          font-size: clamp(22px, 3.5vw, 32px); font-weight: 900;
          letter-spacing: -1px; margin-bottom: 32px; color: var(--text);
        }
        .pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pain-card {
          padding: 24px; border-radius: 14px; text-align: left;
          background: var(--bg); border: 1px solid var(--border);
        }
        .pain-icon { font-size: 28px; margin-bottom: 12px; }
        .pain-card h3 { font-size: 15px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
        .pain-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 80px; }
        .svc-card {
          background: var(--bg); border-radius: 20px; padding: 32px 28px;
          display: flex; flex-direction: column; position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .svc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .svc-card.featured { border-width: 2px; }
        .svc-tag {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--accent); color: #fff; font-size: 11px; font-weight: 800;
          padding: 4px 14px; border-radius: 100px; letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .svc-card h3 { font-size: 20px; font-weight: 900; letter-spacing: -0.5px; margin-bottom: 4px; color: var(--text); }
        .svc-price {
          font-size: 42px; font-weight: 900; letter-spacing: -2px;
          color: var(--accent); margin-bottom: 4px;
        }
        .svc-time { font-size: 13px; color: var(--text-tertiary); margin-bottom: 16px; font-weight: 600; }
        .svc-hook { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; line-height: 1.4; }
        .svc-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; }
        .svc-list { list-style: none; padding: 0; margin: 0 0 24px; flex: 1; }
        .svc-list li {
          font-size: 13px; color: var(--text-secondary); padding: 7px 0;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: flex-start; gap: 8px;
        }
        .svc-list li:last-child { border-bottom: none; }
        .svc-check { color: var(--accent); font-weight: 700; flex-shrink: 0; font-size: 14px; }
        .svc-cta {
          display: block; text-align: center; padding: 14px 24px;
          border-radius: 100px; font-weight: 800; font-size: 15px;
          text-decoration: none; transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .svc-cta:hover { transform: translateY(-1px); }
        .svc-cta-primary {
          background: var(--accent); color: #fff;
          box-shadow: 0 2px 12px rgba(59,95,255,0.2);
        }
        .svc-cta-primary:hover { box-shadow: 0 6px 24px rgba(59,95,255,0.3); }
        .svc-cta-outline {
          background: transparent; color: var(--accent);
          border: 2px solid var(--accent);
        }
        .svc-cta-outline:hover { background: rgba(59,95,255,0.04); }

        .steps-section { margin-bottom: 80px; }
        .steps-header { text-align: center; margin-bottom: 48px; }
        .steps-header h2 {
          font-size: clamp(26px, 4vw, 40px); font-weight: 900;
          letter-spacing: -1px; color: var(--text);
        }
        .steps-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .step-card {
          text-align: center; padding: 32px 24px;
          border-radius: 16px; background: var(--surface);
          border: 1px solid var(--border);
        }
        .step-num {
          font-size: 48px; font-weight: 900; color: var(--accent);
          letter-spacing: -3px; margin-bottom: 16px; opacity: 0.3;
        }
        .step-card h3 { font-size: 17px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
        .step-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        .compare-section { margin-bottom: 80px; }
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .compare-card { padding: 36px; border-radius: 20px; }
        .compare-before { background: #FEF2F2; border: 1px solid #FECACA; }
        .compare-after { background: #ECFDF5; border: 1px solid #A7F3D0; }
        .compare-card h3 { font-size: 18px; font-weight: 900; margin-bottom: 20px; }
        .compare-before h3 { color: #991B1B; }
        .compare-after h3 { color: #065F46; }
        .compare-item {
          font-size: 14px; padding: 8px 0; display: flex; align-items: center; gap: 10px;
        }
        .compare-before .compare-item { color: #7F1D1D; }
        .compare-after .compare-item { color: #064E3B; }
        .compare-icon { font-size: 16px; flex-shrink: 0; }

        .faq-section { margin-bottom: 80px; }
        .faq-section h2 {
          font-size: clamp(26px, 4vw, 36px); font-weight: 900;
          letter-spacing: -1px; text-align: center; margin-bottom: 40px; color: var(--text);
        }
        .faq-item {
          border: 1px solid var(--border); border-radius: 14px;
          margin-bottom: 12px; overflow: hidden; transition: border-color 0.2s;
        }
        .faq-item:hover { border-color: var(--text-tertiary); }
        .faq-q {
          padding: 20px 24px; cursor: pointer; display: flex;
          justify-content: space-between; align-items: center;
          font-size: 15px; font-weight: 700; color: var(--text);
          background: none; border: none; width: 100%;
          text-align: left; font-family: inherit;
        }
        .faq-q:hover { color: var(--accent); }
        .faq-arrow { font-size: 18px; color: var(--text-tertiary); transition: transform 0.2s; }
        .faq-arrow.open { transform: rotate(180deg); }
        .faq-a { padding: 0 24px 20px; font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

        .final-cta {
          text-align: center; padding: 64px 40px;
          background: var(--surface); border-radius: 24px;
          border: 1px solid var(--border); margin-bottom: 80px;
        }
        .final-cta h2 {
          font-size: clamp(26px, 4vw, 40px); font-weight: 900;
          letter-spacing: -1px; margin-bottom: 16px; color: var(--text);
        }
        .final-cta p {
          font-size: 16px; color: var(--text-secondary);
          margin-bottom: 32px; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.7;
        }
        .final-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .final-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 100px;
          font-weight: 700; font-size: 14px; text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          border: 1.5px solid var(--border); color: var(--text); background: var(--bg);
        }
        .final-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); border-color: var(--accent); color: var(--accent); }
        .final-btn-price { color: var(--accent); font-weight: 800; }

        .trust-row {
          display: flex; justify-content: center; gap: 32px;
          flex-wrap: wrap; margin-bottom: 80px;
        }
        .trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; color: var(--text-secondary); font-weight: 500;
        }
        .trust-icon { font-size: 18px; }

        .lead-section {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; padding: 48px; text-align: center;
        }
        .lead-section h3 { font-size: 22px; font-weight: 900; margin-bottom: 8px; color: var(--text); }
        .lead-section p { font-size: 15px; color: var(--text-secondary); margin-bottom: 24px; }
        .lead-form { display: flex; gap: 12px; max-width: 420px; margin: 0 auto; }
        .lead-form input {
          flex: 1; padding: 14px 18px; border-radius: 100px;
          border: 1.5px solid var(--border); font-size: 15px;
          font-family: inherit; outline: none; transition: border-color 0.15s;
        }
        .lead-form input:focus { border-color: var(--accent); }
        .lead-form button {
          padding: 14px 28px; border-radius: 100px; border: none;
          background: var(--accent); color: #fff;
          font-size: 15px; font-weight: 800; cursor: pointer;
          font-family: inherit; white-space: nowrap; transition: transform 0.15s ease;
        }
        .lead-form button:hover { transform: translateY(-1px); }

        @media(max-width:800px) {
          .svc-wrap { padding: 60px 20px; }
          .svc-grid { grid-template-columns: 1fr; max-width: 420px; margin-left: auto; margin-right: auto; }
          .pain-grid { grid-template-columns: 1fr; }
          .steps-row { grid-template-columns: 1fr; }
          .compare-grid { grid-template-columns: 1fr; }
          .lead-form { flex-direction: column; }
          .final-cta { padding: 48px 24px; }
        }
      `}</style>

      <div className="svc-wrap">
        {/* Hero */}
        <div className={`svc-hero svc-fade${visible ? ' in' : ''}`}>
          <div className="badge" style={{ marginBottom: 28 }}>YC S26 RFS #2 — AI-Native Service Companies</div>
          <h1>Done-for-you AI for <em>coaches & consultants</em>.</h1>
          <p className="svc-sub">
            You stop writing posts, fighting brand voice, and tweaking prompts at midnight. We deliver the finished work &mdash; content, branding, sales pages &mdash; so you can get back to coaching.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/ai-audit" className="btn-primary" style={{ fontSize: 15 }}>Start with $997 Assessment &rarr;</Link>
            <a href="#services" className="btn-outline" style={{ fontSize: 15 }}>See All Services &darr;</a>
          </div>
          <p style={{ maxWidth: 580, margin: '32px auto 0', fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.65, fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: 16, textAlign: 'left' }}>
            &ldquo;Total spend on services is many times larger than spend on software. Build companies that deliver services directly through AI.&rdquo;
            <br/><span style={{ fontStyle: 'normal', fontWeight: 700, color: 'var(--text-secondary)' }}>— Garry Tan, YC President · RFS Summer 2026</span>
          </p>
        </div>

        {/* Problem */}
        <div className={`svc-problem svc-fade d1${visible ? ' in' : ''}`}>
          <h2>You bought the tools. Now what?</h2>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">📦</div>
              <h3>Bought prompt packs</h3>
              <p>You paid for prompts but they&rsquo;re sitting in a folder. You don&rsquo;t know which to use, when, or how to adapt them.</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">⏳</div>
              <h3>Hours of experimenting</h3>
              <p>You&rsquo;ve spent more time tweaking AI outputs than doing the actual work. The learning curve is real.</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">🔄</div>
              <h3>Still doing it manually</h3>
              <p>After all that, you&rsquo;re still writing your own posts, emails, and listings. AI was supposed to help.</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="services" className={`svc-fade d2${visible ? ' in' : ''}`} style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">Services</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, letterSpacing: -1, color: 'var(--text)' }}>
              We do the work. You get the output.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 500, margin: '8px auto 0', lineHeight: 1.7 }}>
              Same AI technology. Professional execution. Delivered to your inbox.
            </p>
          </div>

          <div className="svc-grid">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className={`svc-card${s.featured ? ' featured' : ''}`}
                style={{ border: `${s.featured ? '2px' : '1px'} solid ${s.border}`, background: s.featured ? s.accent : 'var(--bg)' }}
              >
                <div className="svc-tag">{s.tag}</div>
                <h3 style={{ marginTop: 8 }}>{s.name}</h3>
                <div className="svc-price">${s.price}</div>
                <div className="svc-time">Delivered in {s.time}</div>
                <div className="svc-hook">{s.hook}</div>
                <p className="svc-desc">{s.desc}</p>
                <ul className="svc-list">
                  {s.deliverables.map((d, i) => (
                    <li key={i}><span className="svc-check">&#10003;</span> {d}</li>
                  ))}
                </ul>
                <a
                  href={s.href}
                  className={`svc-cta ${s.featured ? 'svc-cta-primary' : 'svc-cta-outline'}`}
                >
                  Get {s.name} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className={`steps-section svc-fade d3${visible ? ' in' : ''}`}>
          <div className="steps-header">
            <div className="section-label">How It Works</div>
            <h2>Three steps. Zero learning curve.</h2>
          </div>
          <div className="steps-row">
            {STEPS.map((s) => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Compare */}
        <div className={`compare-section svc-fade d4${visible ? ' in' : ''}`}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label">Why Services Beat Tools</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, letterSpacing: -1, color: 'var(--text)' }}>
              The DIY path vs. the done path
            </h2>
          </div>
          <div className="compare-grid">
            <div className="compare-card compare-before">
              <h3>Doing it yourself</h3>
              <div className="compare-item"><span className="compare-icon">&#10007;</span> Buy prompt pack ($29)</div>
              <div className="compare-item"><span className="compare-icon">&#10007;</span> Learn how to use AI tools ($50/mo)</div>
              <div className="compare-item"><span className="compare-icon">&#10007;</span> Experiment for 20+ hours</div>
              <div className="compare-item"><span className="compare-icon">&#10007;</span> Still not sure if it&rsquo;s good</div>
              <div className="compare-item"><span className="compare-icon">&#10007;</span> Total: $80+ and 20 hours</div>
            </div>
            <div className="compare-card compare-after">
              <h3>We do it for you</h3>
              <div className="compare-item"><span className="compare-icon">&#10003;</span> Pay once ($149&ndash;299)</div>
              <div className="compare-item"><span className="compare-icon">&#10003;</span> Send a 5-minute brief</div>
              <div className="compare-item"><span className="compare-icon">&#10003;</span> Get deliverables in 24&ndash;72h</div>
              <div className="compare-item"><span className="compare-icon">&#10003;</span> Professional quality, guaranteed</div>
              <div className="compare-item"><span className="compare-icon">&#10003;</span> Total: $149&ndash;299 and 5 minutes</div>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="trust-row">
          <div className="trust-item"><span className="trust-icon">🛡️</span> 30-day money-back guarantee</div>
          <div className="trust-item"><span className="trust-icon">🔧</span> Built on 22+ free AI tools</div>
          <div className="trust-item"><span className="trust-icon">⚡</span> 24&ndash;72 hour delivery</div>
          <div className="trust-item"><span className="trust-icon">✏️</span> One revision round included</div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Questions? Answered.</h2>
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item">
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <span className={`faq-arrow${openFaq === i ? ' open' : ''}`}>&#9660;</span>
              </button>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="final-cta">
          <h2>Ready to stop doing everything yourself?</h2>
          <p>Pick a service, send us your brief, and get professional AI-powered deliverables in your inbox.</p>
          <div className="final-btns">
            {SERVICES.map((s) => (
              <a key={s.id} href={s.href} className="final-btn">
                {s.name} &mdash; <span className="final-btn-price">${s.price}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Email capture */}
        <div className="lead-section">
          {sent ? (
            <>
              <h3>You&rsquo;re in.</h3>
              <p>Check your inbox for a welcome email with free AI prompts.</p>
            </>
          ) : (
            <>
              <h3>Not ready to buy? Get a free sample.</h3>
              <p>We&rsquo;ll send you 5 AI-generated deliverables so you can see the quality before committing.</p>
              <form className="lead-form" onSubmit={handleLead}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send samples'}
                </button>
              </form>
            </>
          )}
        </div>

        {/* DIY upsell */}
        <div style={{ textAlign: 'center', padding: '48px 0 0' }}>
          <p style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>
            Prefer to do it yourself? Check out our{' '}
            <Link href="/kits" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>AI Kits</Link> (from $29) or{' '}
            <Link href="/tools" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Free Tools</Link>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
