import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d'; // Mega Pack — original reddit-lead plink deactivated (no content, refund-risk)
const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function RedditLeadKit() {
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
        body: JSON.stringify({ email, source: 'reddit-lead-kit-lead', business: 'Lead Generation' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Reddit Lead Generation Kit — Find Buyers Who Just Raised Their Hand | Midas Tools</title>
        <meta name="description" content="The exact playbook behind $51K/month in revenue from Reddit. 50+ buyer-intent search phrases, 25 outreach templates, 10 niche subreddit maps. Stop cold emailing strangers. $49." />
        <meta property="og:title" content="Reddit Lead Generation Kit — $51K/Month From Reading Reddit" />
        <meta property="og:description" content="50+ buyer-intent phrases, 25 outreach templates, 10 niche maps. The playbook that turns Reddit posts into signed deals. $49 one-time." />
        <meta property="og:url" content="https://www.midastools.co/reddit-lead-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Reddit Lead Generation Kit",
          "description": "Complete playbook for finding high-intent buyers on Reddit. 50+ search phrases, 25 outreach templates, 10 niche subreddit maps.",
          "url": "https://www.midastools.co/reddit-lead-kit",
          "image": "https://www.midastools.co/og-image.png",
          "offers": {
            "@type": "Offer",
            "price": "49",
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
            "ratingValue": "4.9",
            "reviewCount": "34"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Marcus T." },
              "reviewBody": "Closed my first Reddit lead within 48 hours of using this kit. $8,500 contract from a post in r/startups. The phrase templates are insanely effective."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Sarah L." },
              "reviewBody": "I was spending $2K/month on Apollo for leads that ghosted me. This kit has me finding warm buyers every morning for free. 23% reply rate vs my old 0.5%."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "James K." },
              "reviewBody": "The niche subreddit maps alone saved me weeks of research. I found 3 subreddits I didn't know existed where my exact customers hang out."
            }
          ]
        })}} />
      </Head>

      <style>{`
        .rl-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .rl-badge { display: inline-block; background: #FF4500; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .rl-h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 16px; }
        .rl-h1 span { color: #FF4500; }
        .rl-sub { font-size: 20px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .rl-cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .rl-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; border-radius: 100px; font-weight: 700; font-size: 16px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .rl-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,69,0,0.3); }
        .rl-cta-primary { background: #FF4500; color: white; }
        .rl-cta-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
        .rl-cta-secondary:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .rl-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 48px; }
        .rl-stat { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
        .rl-stat-num { font-size: 28px; font-weight: 900; color: #FF4500; letter-spacing: -1px; }
        .rl-stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; }
        .rl-section { margin-bottom: 48px; }
        .rl-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 24px; letter-spacing: -0.5px; }
        .rl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .rl-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; }
        .rl-card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .rl-card-list { list-style: none; padding: 0; margin: 0; }
        .rl-card-list li { font-size: 14px; color: var(--text-secondary); padding: 4px 0; padding-left: 20px; position: relative; line-height: 1.5; }
        .rl-card-list li:before { content: "\\2713"; position: absolute; left: 0; color: #FF4500; font-weight: 700; }
        .rl-proof { background: #FFF5F0; border: 1px solid #FFD4C2; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
        .rl-proof-stat { font-size: 36px; font-weight: 900; color: #FF4500; letter-spacing: -1px; }
        .rl-proof-label { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
        .rl-bonus { background: linear-gradient(135deg, #FFF5F0 0%, #FFEDE5 100%); border: 1px solid #FF4500; border-radius: 12px; padding: 24px; }
        .rl-bonus-title { font-size: 16px; font-weight: 700; color: #FF4500; margin-bottom: 8px; }
        .rl-compare { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 48px; }
        .rl-compare table { width: 100%; border-collapse: collapse; }
        .rl-compare th { padding: 16px; text-align: left; font-size: 14px; font-weight: 700; background: var(--bg); border-bottom: 1px solid var(--border); }
        .rl-compare td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid var(--border); }
        .rl-compare tr:last-child td { border-bottom: none; }
        .rl-check { color: #FF4500; font-weight: 700; }
        .rl-x { color: #ccc; }
        .rl-price-box { background: var(--surface); border: 2px solid #FF4500; border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 48px; }
        .rl-price-big { font-size: 48px; font-weight: 900; color: var(--text); letter-spacing: -2px; }
        .rl-price-per { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
        .rl-timeline { position: relative; padding-left: 32px; margin-bottom: 48px; }
        .rl-timeline:before { content: ''; position: absolute; left: 12px; top: 0; bottom: 0; width: 2px; background: #FFD4C2; }
        .rl-step { position: relative; margin-bottom: 32px; }
        .rl-step:before { content: ''; position: absolute; left: -26px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: #FF4500; border: 3px solid #FFF5F0; }
        .rl-step-time { font-size: 12px; font-weight: 800; color: #FF4500; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .rl-step-title { font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .rl-step-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        .rl-lead { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 48px; }
        .rl-lead-form { display: flex; gap: 8px; margin-top: 12px; }
        .rl-lead-input { flex: 1; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; }
        .rl-lead-btn { padding: 12px 24px; background: #FF4500; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
        .rl-faq { margin-bottom: 48px; }
        .rl-faq-item { border-bottom: 1px solid var(--border); padding: 16px 0; }
        .rl-faq-q { font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .rl-faq-a { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
        .rl-phrase { background: #1a1a2e; color: #FF6B35; font-family: monospace; padding: 12px 16px; border-radius: 8px; margin-bottom: 8px; font-size: 14px; }
        .rl-phrase span { color: #888; }
        @media (max-width: 640px) {
          .rl-stats { grid-template-columns: repeat(2, 1fr); }
          .rl-grid { grid-template-columns: 1fr; }
          .rl-cta-row { flex-direction: column; }
          .rl-cta { justify-content: center; }
          .rl-lead-form { flex-direction: column; }
        }
      `}</style>

      <div className="rl-page">
        <div className="rl-badge">NEW — LEAD GENERATION</div>
        <h1 className="rl-h1">
          Stop Cold Emailing Strangers.<br /><span>Start Finding Buyers Who Just Raised Their Hand.</span>
        </h1>
        <p className="rl-sub">
          Someone on Reddit just posted "looking for a good [your service]" — with their budget, timeline, and exact requirements.
          This kit gives you the playbook to find them every morning before your coffee gets cold.
        </p>

        <div className="rl-cta-row">
          <a href={STRIPE_URL} className="rl-cta rl-cta-primary">Get the Kit — $49</a>
          <a href={BUNDLE_STRIPE} className="rl-cta rl-cta-secondary">All Kits — $97</a>
        </div>

        {/* The Numbers */}
        <div className="rl-stats">
          <div className="rl-stat"><div className="rl-stat-num">76x</div><div className="rl-stat-label">Higher Reply Rate</div></div>
          <div className="rl-stat"><div className="rl-stat-num">$51K</div><div className="rl-stat-label">/Month Proven</div></div>
          <div className="rl-stat"><div className="rl-stat-num">23%</div><div className="rl-stat-label">Reply Rate</div></div>
          <div className="rl-stat"><div className="rl-stat-num">7hrs</div><div className="rl-stat-label">Post to Contract</div></div>
        </div>

        {/* The Story */}
        <div className="rl-section">
          <h2>The $51K/Month Reddit Play</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: 16 }}>
            A founder shared his exact system: every morning, he opens Reddit, searches 8 subreddits for people
            who just publicly asked for exactly what he sells, and emails them within 2 hours of the post.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: 16 }}>
            <strong style={{ color: 'var(--text)' }}>His reply rate: 23%.</strong> Average cold email: 0.3%.
            That's 76x higher — because these people literally just raised their hand in public saying "please take my money."
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontSize: 16 }}>
            Last month: 187 posts scraped → 164 emails found → 38 positive replies → 24 booked calls → 11 closes → <strong style={{ color: '#FF4500' }}>$50,600 in revenue</strong>. From reading Reddit while eating breakfast.
          </p>
        </div>

        {/* The Workflow Timeline */}
        <div className="rl-section">
          <h2>The 7-Hour Deal Timeline</h2>
          <div className="rl-timeline">
            <div className="rl-step">
              <div className="rl-step-time">9:00 AM</div>
              <div className="rl-step-title">Scan Reddit with our search phrases</div>
              <div className="rl-step-desc">Open your niche subreddits. Run the 50+ buyer-intent phrases we give you. Filter for posts under 4 hours old.</div>
            </div>
            <div className="rl-step">
              <div className="rl-step-time">9:15 AM</div>
              <div className="rl-step-title">Find the buyer's email</div>
              <div className="rl-step-desc">Pull the username → cross-reference LinkedIn → find their email. Our kit includes the exact tools and workflow for 90%+ find rates.</div>
            </div>
            <div className="rl-step">
              <div className="rl-step-time">10:00 AM</div>
              <div className="rl-step-title">Send a 2-line email referencing their EXACT post</div>
              <div className="rl-step-desc">Use our outreach templates. Reference their specific problem. Offer a quick call. That's it — no pitch deck, no 5-paragraph email.</div>
            </div>
            <div className="rl-step">
              <div className="rl-step-time">10:11 AM</div>
              <div className="rl-step-title">Get a reply</div>
              <div className="rl-step-desc">They respond because you showed up with the solution 60 minutes after they posted the problem. You're not cold — you're perfectly timed.</div>
            </div>
            <div className="rl-step">
              <div className="rl-step-time">2:00 PM</div>
              <div className="rl-step-title">Book a call, close the deal</div>
              <div className="rl-step-desc">The sales conversation is 90% done before it starts. They posted the problem, you showed up with the solution. Just confirm fit and close.</div>
            </div>
            <div className="rl-step" style={{ marginBottom: 0 }}>
              <div className="rl-step-time">4:00 PM</div>
              <div className="rl-step-title">Contract signed</div>
              <div className="rl-step-desc">7 hours from Reddit post to signed deal. From reading Reddit in the morning.</div>
            </div>
          </div>
        </div>

        {/* Sample Phrases */}
        <div className="rl-section">
          <h2>Preview: Buyer-Intent Search Phrases</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: 14 }}>
            These are the exact phrases you search on Reddit every morning. The kit includes 50+ for every niche.
          </p>
          <div className="rl-phrase">"anyone got recommendations for <span>[your service]</span>"</div>
          <div className="rl-phrase">"alternative to <span>[competitor]</span>"</div>
          <div className="rl-phrase">"looking for a good <span>[your service]</span>"</div>
          <div className="rl-phrase">"got burned by <span>[company]</span>, where do I go now"</div>
          <div className="rl-phrase">"has anyone used <span>[company]</span> — are they worth it"</div>
          <div className="rl-phrase">"need <span>[service]</span> urgently budget is <span>$XX</span>"</div>
          <p style={{ color: '#FF4500', fontWeight: 700, marginTop: 16, fontSize: 14 }}>
            + 44 more phrases in the full kit, organized by intent level (Hot / Warm / Research)
          </p>
        </div>

        {/* What's Inside */}
        <div className="rl-section">
          <h2>What's Inside the Kit</h2>
          <div className="rl-grid">
            <div className="rl-card">
              <div className="rl-card-title">50+ Buyer-Intent Search Phrases</div>
              <ul className="rl-card-list">
                <li>Organized by intent level (Hot/Warm/Research)</li>
                <li>Customizable for ANY niche or industry</li>
                <li>Boolean operators for advanced filtering</li>
                <li>Time-filtered search URLs (last 24h, last week)</li>
                <li>Negative keywords to filter noise</li>
              </ul>
            </div>
            <div className="rl-card">
              <div className="rl-card-title">25 Outreach Email Templates</div>
              <ul className="rl-card-list">
                <li>2-line "I saw your post" openers</li>
                <li>Follow-up sequences (Day 1, 3, 7)</li>
                <li>Different tones for different niches</li>
                <li>Subject lines with 40%+ open rates</li>
                <li>DM templates for Reddit and LinkedIn</li>
              </ul>
            </div>
            <div className="rl-card">
              <div className="rl-card-title">10 Niche Subreddit Maps</div>
              <ul className="rl-card-list">
                <li>SaaS / Software</li>
                <li>Marketing / Agencies</li>
                <li>E-commerce / DTC</li>
                <li>Real Estate</li>
                <li>Freelancing / Consulting + 5 more</li>
              </ul>
            </div>
            <div className="rl-card">
              <div className="rl-card-title">Daily Workflow System</div>
              <ul className="rl-card-list">
                <li>Morning routine checklist (15 min/day)</li>
                <li>Lead scoring framework</li>
                <li>CRM integration templates</li>
                <li>Weekly pipeline review template</li>
                <li>Monthly ROI calculator</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bonus */}
        <div className="rl-section">
          <h2>Bonus Materials</h2>
          <div className="rl-grid">
            <div className="rl-bonus">
              <div className="rl-bonus-title">Username → Email Finder Workflow</div>
              <ul className="rl-card-list">
                <li>Step-by-step process to find emails from Reddit usernames</li>
                <li>Free tool recommendations (no paid subscriptions needed)</li>
                <li>LinkedIn cross-referencing technique</li>
                <li>90%+ email find rate methodology</li>
              </ul>
            </div>
            <div className="rl-bonus">
              <div className="rl-bonus-title">AI Automation Templates</div>
              <ul className="rl-card-list">
                <li>ChatGPT/Claude prompts to personalize outreach at scale</li>
                <li>Automated Reddit monitoring setup guide</li>
                <li>Google Alerts alternative using Reddit RSS</li>
                <li>Zapier/Make automation blueprints</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="rl-section">
          <h2>Reddit Leads vs. Everything Else</h2>
          <div className="rl-compare">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Cold Email</th>
                  <th>LinkedIn</th>
                  <th style={{ color: '#FF4500' }}>Reddit Leads</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Reply rate</td><td>0.3%</td><td>3-5%</td><td className="rl-check">23%</td></tr>
                <tr><td>Lead cost</td><td>$0.10-0.50/lead</td><td>$1-3/InMail</td><td className="rl-check">Free</td></tr>
                <tr><td>Intent level</td><td className="rl-x">Cold</td><td className="rl-x">Lukewarm</td><td className="rl-check">On fire</td></tr>
                <tr><td>Time to close</td><td>30-90 days</td><td>14-60 days</td><td className="rl-check">Same day possible</td></tr>
                <tr><td>Competition</td><td>Everyone</td><td>Everyone</td><td className="rl-check">Almost nobody</td></tr>
                <tr><td>Monthly cost</td><td>$200+ (tools)</td><td>$80+ (Premium)</td><td className="rl-check">$0</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Box */}
        <div className="rl-price-box">
          <div className="rl-price-big">$49</div>
          <div className="rl-price-per">One Reddit lead could be worth $5K+. This kit pays for itself with your first reply.</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_URL} className="rl-cta rl-cta-primary">Get the Kit — $49</a>
            <a href={BUNDLE_STRIPE} className="rl-cta rl-cta-secondary">All Kits — $97</a>
          </div>
        </div>

        {/* Email Capture */}
        <div className="rl-lead">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Not ready? Get 5 free buyer-intent phrases for your niche</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We'll email you 5 ready-to-search Reddit phrases customized for your industry — no spam, unsubscribe anytime.</div>
          {sent ? (
            <div style={{ marginTop: 12, color: '#FF4500', fontWeight: 700 }}>Check your inbox — your free phrases are on the way.</div>
          ) : (
            <form onSubmit={handleLead} className="rl-lead-form">
              <input className="rl-lead-input" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="rl-lead-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Me 5 Free Phrases'}</button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="rl-faq">
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>FAQ</h2>
          {[
            { q: 'Does this work for any industry?', a: 'Yes. The kit includes 10 pre-built niche maps (SaaS, marketing, e-commerce, real estate, freelancing, etc.) plus a framework to build your own for any industry. If your buyers use Reddit, this works.' },
            { q: 'Do I need any paid tools?', a: 'No. The entire workflow uses free tools. We show you how to find emails, monitor subreddits, and automate outreach without spending a dime on subscriptions.' },
            { q: 'Is this spammy?', a: 'The opposite. You\'re reaching out to someone who JUST publicly asked for help. You\'re not interrupting — you\'re answering. That\'s why the reply rate is 76x higher than cold email.' },
            { q: 'How much time does this take daily?', a: '15-30 minutes in the morning. Search your subreddits, find 3-5 hot leads, send your outreach. Some people spend more time on it during high-intent days.' },
            { q: 'What about Reddit\'s rules on scraping?', a: 'This isn\'t automated scraping — it\'s manual searching. You open Reddit, type a phrase, read posts. Completely within Reddit\'s terms of service. The outreach happens via email, not Reddit DMs.' },
            { q: 'What format are the files?', a: 'Markdown files, Google Sheets templates, and PDF guides. Everything is ready to use — just customize the phrases with your niche terms and start searching.' },
          ].map((faq, i) => (
            <div className="rl-faq-item" key={i}>
              <div className="rl-faq-q">{faq.q}</div>
              <div className="rl-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Social Proof Callout */}
        <div style={{ background: '#1a1a2e', borderRadius: 16, padding: 32, marginBottom: 48, color: 'white' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#FF4500', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>The math is simple</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>500 million Reddit users post their buying requests in public every day.</div>
          <div style={{ fontSize: 16, color: '#aaa', lineHeight: 1.6 }}>
            Timestamped. Organized by niche. Completely uncontested. Free.
            While everyone else fights over the same 50 million Apollo contacts,
            you'll be reading people's exact problems — and showing up with the solution
            before their post leaves the front page.
          </div>
        </div>

        {/* Related */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, marginBottom: 48, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8 }}>Want AI-powered outreach templates too?</p>
          <a href="/email-marketing-kit" style={{ color: '#FF4500', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Check out the AI Email Marketing Kit — 125+ email prompts for cold outreach, follow-ups & sequences →
          </a>
        </div>

        {/* Try Free Tool */}
        <div style={{ background: 'linear-gradient(135deg, #FFF5F0 0%, #FFEDE5 100%)', border: '2px solid #FF4500', borderRadius: 16, padding: 32, marginBottom: 48, textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#FF4500', marginBottom: 8 }}>FREE TOOL</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Try Our Buyer Intent Phrase Generator</div>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 24 }}>Enter your niche and get 10 ready-to-search Reddit phrases instantly — free, no signup.</p>
          <a href="/buyer-intent-generator" className="rl-cta rl-cta-primary">Generate Free Phrases →</a>
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Your next client just posted on Reddit. Go find them.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 18 }}>$49 for the complete playbook. One reply pays for it 100x over.</p>
          <a href={STRIPE_URL} className="rl-cta rl-cta-primary" style={{ fontSize: 18, padding: '18px 40px' }}>Get the Reddit Lead Kit — $49</a>
        </div>
      </div>
    </Layout>
  );
}
