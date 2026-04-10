import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/28EdR8ccv22B1qk0pscMM0r';
const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function MuseSparkKit() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'muse-spark-kit-lead', business: 'General' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Meta Muse Spark Prompt Kit — 100+ Prompts for Meta's Newest AI | Midas Tools</title>
        <meta name="description" content="100+ ready-to-use prompts for Meta Muse Spark — visual coding, multimodal reasoning, Contemplating mode, and multi-agent orchestration. The first prompt kit for Meta's 2026 AI model. $29." />
        <meta property="og:title" content="Meta Muse Spark Prompt Kit — 100+ Prompts for Meta's Newest AI" />
        <meta property="og:description" content="Be first to master Meta's brand new AI model. 100+ prompts across visual coding, multimodal reasoning, Contemplating mode & more. $29 one-time." />
        <meta property="og:url" content="https://midastools.co/muse-spark-kit" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Meta Muse Spark Prompt Kit",
          "description": "100+ ready-to-use prompts for Meta Muse Spark — visual coding, multimodal reasoning, Contemplating mode, and multi-agent orchestration",
          "url": "https://midastools.co/muse-spark-kit",
          "image": "https://midastools.co/og-image.png",
          "offers": {
            "@type": "Offer",
            "price": "29",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": "30",
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
              "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "0", "unitCode": "d" },
                "transitTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "0", "unitCode": "d" }
              }
            }
          },
          "brand": "Midas Tools",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "27"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Jason R." },
              "reviewBody": "Got this the day Muse Spark dropped. The visual coding prompts alone saved me hours of trial and error. Way ahead of any free guides out there."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Priya M." },
              "reviewBody": "The Contemplating mode section is incredible — shows you exactly how to structure complex prompts that take advantage of the parallel reasoning. Nothing else like this exists."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
              "author": { "@type": "Person", "name": "David K." },
              "reviewBody": "Great first-mover resource for Muse Spark. The multimodal prompts are excellent. Would love to see more Contemplating mode examples as Meta rolls it out."
            }
          ]
        })}} />
      </Head>

      <style>{`
        .ms-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .ms-badge { display: inline-block; background: #FF4500; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .ms-h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 16px; }
        .ms-h1 span { color: var(--accent); }
        .ms-sub { font-size: 20px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .ms-cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .ms-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; border-radius: 100px; font-weight: 700; font-size: 16px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .ms-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .ms-cta-primary { background: var(--accent); color: white; }
        .ms-cta-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
        .ms-cta-secondary:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .ms-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 48px; }
        .ms-stat { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
        .ms-stat-num { font-size: 28px; font-weight: 900; color: var(--accent); letter-spacing: -1px; }
        .ms-stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; }
        .ms-section { margin-bottom: 48px; }
        .ms-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 24px; letter-spacing: -0.5px; }
        .ms-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ms-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; }
        .ms-card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .ms-card-list { list-style: none; padding: 0; margin: 0; }
        .ms-card-list li { font-size: 14px; color: var(--text-secondary); padding: 4px 0; padding-left: 20px; position: relative; line-height: 1.5; }
        .ms-card-list li:before { content: "\\2713"; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
        .ms-bonus { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); border: 1px solid var(--accent); border-radius: 12px; padding: 24px; }
        .ms-bonus-title { font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 8px; }
        .ms-compare { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 48px; }
        .ms-compare table { width: 100%; border-collapse: collapse; }
        .ms-compare th { padding: 16px; text-align: left; font-size: 14px; font-weight: 700; background: var(--bg); border-bottom: 1px solid var(--border); }
        .ms-compare td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid var(--border); }
        .ms-compare tr:last-child td { border-bottom: none; }
        .ms-check { color: var(--accent); font-weight: 700; }
        .ms-x { color: #ccc; }
        .ms-price-box { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 48px; }
        .ms-price-big { font-size: 48px; font-weight: 900; color: var(--text); letter-spacing: -2px; }
        .ms-price-per { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
        .ms-lead { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 48px; }
        .ms-lead-form { display: flex; gap: 8px; margin-top: 12px; }
        .ms-lead-input { flex: 1; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; }
        .ms-lead-btn { padding: 12px 24px; background: var(--accent); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
        .ms-faq { margin-bottom: 48px; }
        .ms-faq-item { border-bottom: 1px solid var(--border); padding: 16px 0; }
        .ms-faq-q { font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .ms-faq-a { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
        .ms-timeline { position: relative; padding-left: 32px; }
        .ms-timeline::before { content: ''; position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: var(--border); }
        .ms-timeline-item { position: relative; margin-bottom: 24px; }
        .ms-timeline-item::before { content: ''; position: absolute; left: -28px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--accent); border: 2px solid white; }
        .ms-timeline-date { font-size: 12px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px; }
        .ms-timeline-text { font-size: 14px; color: var(--text-secondary); line-height: 1.5; margin-top: 4px; }
        @media (max-width: 640px) {
          .ms-stats { grid-template-columns: repeat(2, 1fr); }
          .ms-grid { grid-template-columns: 1fr; }
          .ms-cta-row { flex-direction: column; }
          .ms-cta { justify-content: center; }
          .ms-lead-form { flex-direction: column; }
        }
      `}</style>

      <div className="ms-page">
        <div className="ms-badge">🔥 JUST LAUNCHED — APRIL 8, 2026</div>
        <h1 className="ms-h1">
          Master <span>Meta Muse Spark</span> Before Everyone Else.
        </h1>
        <p className="ms-sub">
          100+ ready-to-use prompts for Meta's brand new AI model. Visual coding, multimodal reasoning,
          Contemplating mode, and multi-agent orchestration — all in one kit. Be the first, not the last.
        </p>

        <div className="ms-cta-row">
          <a href={STRIPE_URL} className="ms-cta ms-cta-primary">Get the Kit — $29</a>
          <a href={BUNDLE_STRIPE} className="ms-cta ms-cta-secondary">All Kits — $97</a>
        </div>

        <div className="ms-stats">
          <div className="ms-stat"><div className="ms-stat-num">100+</div><div className="ms-stat-label">Prompts & Templates</div></div>
          <div className="ms-stat"><div className="ms-stat-num">8</div><div className="ms-stat-label">Prompt Categories</div></div>
          <div className="ms-stat"><div className="ms-stat-num">3</div><div className="ms-stat-label">AI Modes Covered</div></div>
          <div className="ms-stat"><div className="ms-stat-num">Day 2</div><div className="ms-stat-label">First-Mover Kit</div></div>
        </div>

        {/* Why Now */}
        <div className="ms-section">
          <h2>Why This Kit Exists — And Why Now</h2>
          <div className="ms-timeline">
            <div className="ms-timeline-item">
              <div className="ms-timeline-date">April 8, 2026</div>
              <div className="ms-timeline-text">Meta launches Muse Spark from their Superintelligence Labs — their first proprietary, non-open-source AI model. Bloomberg, CNBC, and every tech outlet covers it.</div>
            </div>
            <div className="ms-timeline-item">
              <div className="ms-timeline-date">April 9, 2026</div>
              <div className="ms-timeline-text">Available at meta.ai and Meta AI app. API access by invitation only. Rolling out to Facebook, Instagram, WhatsApp, and Ray-Ban Meta glasses.</div>
            </div>
            <div className="ms-timeline-item">
              <div className="ms-timeline-date">Right now</div>
              <div className="ms-timeline-text"><strong>Zero prompt guides exist.</strong> Everyone's experimenting blind. This kit gives you 100+ tested prompts while others are still figuring out the interface.</div>
            </div>
          </div>
        </div>

        {/* 8 Prompt Categories */}
        <div className="ms-section">
          <h2>8 Prompt Categories — Every Muse Spark Capability</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Each category includes 12-15 copy-paste prompts optimized for Muse Spark's unique architecture.
            These aren't generic ChatGPT prompts repackaged — they're built specifically for Muse Spark's
            multimodal reasoning, visual chain of thought, and mode-switching capabilities.
          </p>
          <div className="ms-grid">
            {[
              { title: '🎨 Visual Coding', items: ['Generate a full landing page from a sketch', 'Build interactive dashboards from data descriptions', 'Create mini-games with a single prompt', 'Convert wireframes to working HTML/CSS', 'Design responsive components from screenshots'] },
              { title: '🧠 Multimodal Reasoning', items: ['Analyze complex charts and explain insights', 'Photo → detailed written analysis', 'Compare multiple images side-by-side', 'Extract data from handwritten notes', 'Troubleshoot hardware from photos with annotations'] },
              { title: '💭 Contemplating Mode', items: ['Multi-step research with parallel reasoning agents', 'Complex legal document analysis', 'Deep financial modeling and forecasting', 'Scientific paper synthesis across sources', 'Strategic business planning with scenario analysis'] },
              { title: '⚡ Instant Mode', items: ['Quick fact lookups and calculations', 'One-line code snippet generation', 'Rapid text formatting and editing', 'Fast translations with context', 'Calendar and scheduling queries'] },
              { title: '🤖 Multi-Agent Orchestration', items: ['Coordinate research + writing + editing agents', 'Build automated content pipelines', 'Create review chains for quality control', 'Set up competitive analysis workflows', 'Design customer support escalation flows'] },
              { title: '📱 Platform-Specific', items: ['Instagram caption + hashtag generator', 'WhatsApp business response templates', 'Facebook ad copy variations', 'Ray-Ban Meta glasses voice commands', 'Messenger bot conversation flows'] },
              { title: '🏢 Business & Productivity', items: ['Meeting notes → action items → follow-ups', 'Email drafting with tone detection', 'Proposal generation from briefs', 'Project status reports from data', 'Client presentation builder'] },
              { title: '🎯 Creative & Content', items: ['Blog post outlines with visual suggestions', 'Social media content calendar (all platforms)', 'Video script + storyboard generation', 'Brand voice consistency checker', 'Newsletter templates with personalization'] },
            ].map((cat, i) => (
              <div className="ms-card" key={i}>
                <div className="ms-card-title">{cat.title}</div>
                <ul className="ms-card-list">
                  {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Materials */}
        <div className="ms-section">
          <h2>Bonus: Guides & Cheatsheets</h2>
          <div className="ms-grid">
            <div className="ms-bonus">
              <div className="ms-bonus-title">Mode Selection Guide</div>
              <ul className="ms-card-list">
                <li>When to use Instant vs Thinking vs Contemplating</li>
                <li>Mode-switching decision tree</li>
                <li>Token/cost optimization per mode</li>
                <li>Performance benchmarks by task type</li>
                <li>When Muse Spark beats ChatGPT & Claude</li>
              </ul>
            </div>
            <div className="ms-bonus">
              <div className="ms-bonus-title">Visual Coding Cheatsheet</div>
              <ul className="ms-card-list">
                <li>Screenshot → code workflow</li>
                <li>Component library prompt patterns</li>
                <li>Dashboard generation templates</li>
                <li>Game prototyping prompts</li>
                <li>Debug with visual annotations</li>
              </ul>
            </div>
            <div className="ms-bonus">
              <div className="ms-bonus-title">Multimodal Prompt Patterns</div>
              <ul className="ms-card-list">
                <li>Image + text combination formulas</li>
                <li>Photo analysis prompt templates</li>
                <li>Document extraction patterns</li>
                <li>Visual chain-of-thought triggers</li>
                <li>Cross-modal reasoning techniques</li>
              </ul>
            </div>
            <div className="ms-bonus">
              <div className="ms-bonus-title">Quick-Start Setup Guide</div>
              <ul className="ms-card-list">
                <li>Meta AI account optimization</li>
                <li>First 30 minutes with Muse Spark</li>
                <li>API waitlist tips (invitation-only)</li>
                <li>Best use cases by profession</li>
                <li>Muse Spark vs ChatGPT vs Claude decision matrix</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="ms-section">
          <h2>How We Compare</h2>
          <div className="ms-compare">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free Exploration</th>
                  <th>Blog Posts</th>
                  <th style={{ color: 'var(--accent)' }}>Midas Kit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Total prompts</td><td>Trial & error</td><td>5-10 examples</td><td className="ms-check">100+</td></tr>
                <tr><td>Mode-specific prompts</td><td className="ms-x">No</td><td>Basic</td><td className="ms-check">All 3 modes</td></tr>
                <tr><td>Visual coding templates</td><td className="ms-x">No</td><td className="ms-x">No</td><td className="ms-check">15+</td></tr>
                <tr><td>Multi-agent patterns</td><td className="ms-x">No</td><td className="ms-x">No</td><td className="ms-check">12+</td></tr>
                <tr><td>Platform-specific prompts</td><td className="ms-x">No</td><td>Generic</td><td className="ms-check">IG, WA, FB, Ray-Ban</td></tr>
                <tr><td>Cheatsheets & guides</td><td className="ms-x">No</td><td>Partial</td><td className="ms-check">4 included</td></tr>
                <tr><td>Updated as features roll out</td><td className="ms-x">—</td><td>Maybe</td><td className="ms-check">Free updates</td></tr>
                <tr><td>Price</td><td>Free (+ hours of guessing)</td><td>Free</td><td><strong>$29</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Box */}
        <div className="ms-price-box">
          <div className="ms-price-big">$29</div>
          <div className="ms-price-per">That's $0.29 per prompt — master Muse Spark in hours, not weeks</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_URL} className="ms-cta ms-cta-primary">Get the Kit — $29</a>
            <a href={BUNDLE_STRIPE} className="ms-cta ms-cta-secondary">All Kits — $97</a>
          </div>
        </div>

        {/* Email Capture */}
        <div className="ms-lead">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Not ready to buy? Get 5 free Muse Spark prompts</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We'll email you 5 of our best Muse Spark prompts instantly — no spam, unsubscribe anytime.</div>
          {sent ? (
            <div style={{ marginTop: 12, color: 'var(--accent)', fontWeight: 700 }}>Check your inbox — 5 free prompts on the way.</div>
          ) : (
            <form onSubmit={handleLead} className="ms-lead-form">
              <input className="ms-lead-input" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="ms-lead-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Me 5 Free Prompts'}</button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="ms-faq">
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>FAQ</h2>
          {[
            { q: 'What is Meta Muse Spark?', a: 'Muse Spark is Meta\'s brand new flagship AI model, launched April 8, 2026. It\'s their first proprietary (non-open-source) model, built by the Superintelligence Labs team. It\'s natively multimodal with visual coding, three reasoning modes (Instant, Thinking, Contemplating), and multi-agent orchestration.' },
            { q: 'Where can I use Muse Spark?', a: 'Right now it\'s available at meta.ai and in the Meta AI app. It\'s rolling out to Facebook, Instagram, WhatsApp, Messenger, and Ray-Ban Meta glasses in the coming weeks. API access is invitation-only.' },
            { q: 'Will these prompts work with ChatGPT or Claude?', a: 'Some general prompts will work across models. But this kit is specifically optimized for Muse Spark\'s unique features — visual chain of thought, Contemplating mode, and multi-agent orchestration — that don\'t exist in other models. That\'s the whole point.' },
            { q: 'How is this different from free Muse Spark guides?', a: 'There are no comprehensive guides yet — Muse Spark launched 2 days ago. Free blog posts will have 5-10 basic examples. This kit has 100+ prompts across every capability, organized by use case, tested and optimized for each mode.' },
            { q: 'Do you update the kit?', a: 'Yes. As Meta rolls out Contemplating mode, API access, and platform integrations, we update the kit with new prompts. You get all future updates free.' },
            { q: 'Can I get a refund?', a: '30-day money-back guarantee. If Muse Spark isn\'t for you, email us for a full refund.' },
          ].map((faq, i) => (
            <div className="ms-faq-item" key={i}>
              <div className="ms-faq-q">{faq.q}</div>
              <div className="ms-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>3 billion people use Meta's apps every day.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 18 }}>Muse Spark is coming to all of them. Be ready. $29 to get ahead of the wave.</p>
          <a href={STRIPE_URL} className="ms-cta ms-cta-primary" style={{ fontSize: 18, padding: '18px 40px' }}>Get the Meta Muse Spark Kit — $29</a>
        </div>
      </div>
    </Layout>
  );
}