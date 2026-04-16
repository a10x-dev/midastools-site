import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const NICHES = {
  'SaaS / Software': {
    subreddits: ['r/SaaS', 'r/startups', 'r/Entrepreneur', 'r/smallbusiness', 'r/webdev'],
    services: ['CRM', 'project management tool', 'email marketing platform', 'analytics tool', 'helpdesk software'],
    competitors: ['HubSpot', 'Salesforce', 'Mailchimp', 'Zendesk', 'Monday.com'],
  },
  'Marketing / Agency': {
    subreddits: ['r/marketing', 'r/digital_marketing', 'r/SEO', 'r/PPC', 'r/socialmedia'],
    services: ['SEO agency', 'social media manager', 'PPC consultant', 'content marketing agency', 'branding agency'],
    competitors: ['Neil Patel', 'Moz', 'Ahrefs', 'SEMrush', 'Hootsuite'],
  },
  'E-commerce / DTC': {
    subreddits: ['r/ecommerce', 'r/shopify', 'r/FulfillmentByAmazon', 'r/dropship', 'r/Etsy'],
    services: ['Shopify developer', 'Amazon FBA consultant', 'product photographer', 'email marketing for ecom', 'conversion rate optimizer'],
    competitors: ['Shopify', 'WooCommerce', 'BigCommerce', 'Oberlo', 'Printful'],
  },
  'Real Estate': {
    subreddits: ['r/RealEstate', 'r/realtors', 'r/CommercialRealEstate', 'r/FirstTimeHomeBuyer', 'r/RealEstateInvesting'],
    services: ['real estate agent', 'property manager', 'home inspector', 'mortgage broker', 'real estate photographer'],
    competitors: ['Zillow', 'Redfin', 'Compass', 'Realtor.com', 'OpenDoor'],
  },
  'Freelancing / Consulting': {
    subreddits: ['r/freelance', 'r/consulting', 'r/graphic_design', 'r/web_design', 'r/copywriting'],
    services: ['freelance developer', 'graphic designer', 'copywriter', 'business consultant', 'virtual assistant'],
    competitors: ['Fiverr', 'Upwork', 'Toptal', '99designs', 'Contra'],
  },
  'AI / Automation': {
    subreddits: ['r/ChatGPT', 'r/artificial', 'r/MachineLearning', 'r/PromptEngineering', 'r/ClaudeAI'],
    services: ['AI consultant', 'automation specialist', 'prompt engineer', 'AI integration developer', 'chatbot builder'],
    competitors: ['OpenAI', 'Jasper', 'Copy.ai', 'Zapier', 'Make.com'],
  },
  'Finance / Accounting': {
    subreddits: ['r/Accounting', 'r/tax', 'r/personalfinance', 'r/smallbusiness', 'r/FinancialPlanning'],
    services: ['accountant', 'tax preparer', 'bookkeeper', 'financial advisor', 'CFO services'],
    competitors: ['QuickBooks', 'FreshBooks', 'Wave', 'TurboTax', 'Bench'],
  },
  'Health / Fitness': {
    subreddits: ['r/fitness', 'r/nutrition', 'r/personaltraining', 'r/gym', 'r/HealthyFood'],
    services: ['personal trainer', 'nutritionist', 'health coach', 'meal prep service', 'fitness app'],
    competitors: ['MyFitnessPal', 'Noom', 'Peloton', 'Beachbody', 'ClassPass'],
  },
  'Legal': {
    subreddits: ['r/legaladvice', 'r/law', 'r/Landlord', 'r/immigration', 'r/smallbusiness'],
    services: ['business lawyer', 'immigration attorney', 'trademark lawyer', 'estate planner', 'contract attorney'],
    competitors: ['LegalZoom', 'Rocket Lawyer', 'Avvo', 'LawDepot', 'Nolo'],
  },
  'Education / Coaching': {
    subreddits: ['r/Entrepreneur', 'r/careerguidance', 'r/learnprogramming', 'r/LifeCoaching', 'r/college'],
    services: ['business coach', 'career coach', 'online course creator', 'tutor', 'executive coach'],
    competitors: ['Coursera', 'Udemy', 'Skillshare', 'Teachable', 'Kajabi'],
  },
};

const PHRASE_TEMPLATES = [
  { level: 'HOT', phrases: [
    '"anyone got recommendations for {service}"',
    '"need {service} urgently"',
    '"looking for a good {service}"',
    '"budget is ${amount} for {service}"',
    '"hiring a {service} this week"',
  ]},
  { level: 'WARM', phrases: [
    '"alternative to {competitor}"',
    '"got burned by {competitor}, where do I go now"',
    '"has anyone used {competitor} — are they worth it"',
    '"switching from {competitor}"',
    '"disappointed with {competitor}"',
  ]},
  { level: 'RESEARCH', phrases: [
    '"what do you use for {service}"',
    '"how do you handle {service}"',
    '"best {service} for small business"',
    '"worth paying for {service}"',
    '"free vs paid {service}"',
  ]},
];

export default function BuyerIntentGenerator() {
  const [niche, setNiche] = useState('');
  const [customService, setCustomService] = useState('');
  const [customCompetitor, setCustomCompetitor] = useState('');
  const [generated, setGenerated] = useState(null);
  const [copied, setCopied] = useState(null);

  const generate = () => {
    const nicheData = NICHES[niche];
    if (!nicheData) return;

    const service = customService || nicheData.services[Math.floor(Math.random() * nicheData.services.length)];
    const competitor = customCompetitor || nicheData.competitors[Math.floor(Math.random() * nicheData.competitors.length)];
    const amounts = ['5K', '10K', '15K', '2K', '3K', '500', '1K', '20K'];
    const amount = amounts[Math.floor(Math.random() * amounts.length)];

    const results = [];
    PHRASE_TEMPLATES.forEach(group => {
      group.phrases.forEach(phrase => {
        results.push({
          level: group.level,
          phrase: phrase
            .replace('{service}', service)
            .replace('{competitor}', competitor)
            .replace('{amount}', amount),
          subreddits: nicheData.subreddits,
        });
      });
    });

    setGenerated({ results, subreddits: nicheData.subreddits, service, competitor });
  };

  const copyPhrase = (phrase, idx) => {
    navigator.clipboard.writeText(phrase.replace(/"/g, ''));
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAll = () => {
    if (!generated) return;
    const text = generated.results.map(r => r.phrase.replace(/"/g, '')).join('\n');
    navigator.clipboard.writeText(text);
    setCopied('all');
    setTimeout(() => setCopied(null), 2000);
  };

  const levelColor = { HOT: '#FF4500', WARM: '#F59E0B', RESEARCH: '#3B82F6' };

  return (
    <Layout>
      <Head>
        <title>Free Buyer Intent Phrase Generator — Find Reddit Leads in Any Niche | Midas Tools</title>
        <meta name="description" content="Generate 15 ready-to-search Reddit phrases for your niche. Find high-intent buyers who just posted their exact needs. Free, no signup required." />
        <meta property="og:title" content="Buyer Intent Phrase Generator — Find Reddit Leads for Free" />
        <meta property="og:description" content="Enter your niche, get 15 buyer-intent search phrases for Reddit. Find people actively looking for your service. Free tool." />
        <meta property="og:url" content="https://www.midastools.co/buyer-intent-generator" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Buyer Intent Phrase Generator",
          "description": "Generate ready-to-search Reddit phrases to find high-intent buyers in any niche",
          "url": "https://www.midastools.co/buyer-intent-generator",
          "applicationCategory": "BusinessApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "operatingSystem": "Any"
        })}} />
      </Head>

      <style>{`
        .bi-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .bi-badge { display: inline-block; background: #10B981; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .bi-h1 { font-size: clamp(28px, 4.5vw, 42px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 16px; }
        .bi-h1 span { color: #FF4500; }
        .bi-sub { font-size: 18px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .bi-form { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 32px; margin-bottom: 48px; }
        .bi-form-row { margin-bottom: 16px; }
        .bi-form-label { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 6px; display: block; }
        .bi-select { width: 100%; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 16px; background: white; appearance: auto; }
        .bi-input { width: 100%; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; box-sizing: border-box; }
        .bi-btn { width: 100%; padding: 16px 32px; background: #FF4500; color: white; border: none; border-radius: 100px; font-weight: 800; font-size: 18px; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
        .bi-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,69,0,0.3); }
        .bi-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .bi-results { margin-bottom: 48px; }
        .bi-results h2 { font-size: 24px; font-weight: 800; margin-bottom: 16px; }
        .bi-phrase-card { background: #1a1a2e; border-radius: 12px; padding: 16px 20px; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .bi-phrase-text { color: #FF6B35; font-family: monospace; font-size: 14px; flex: 1; word-break: break-word; }
        .bi-phrase-level { font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 100px; letter-spacing: 0.5px; flex-shrink: 0; }
        .bi-phrase-copy { background: transparent; border: 1px solid #444; color: #aaa; padding: 6px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; flex-shrink: 0; transition: all 0.2s; }
        .bi-phrase-copy:hover { border-color: #FF4500; color: #FF4500; }
        .bi-subreddits { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 24px; }
        .bi-sub-tag { display: inline-block; background: #FFF5F0; color: #FF4500; padding: 6px 14px; border-radius: 100px; font-size: 13px; font-weight: 600; margin: 4px; }
        .bi-copy-all { display: block; width: 100%; padding: 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; text-align: center; margin-bottom: 32px; transition: all 0.2s; }
        .bi-copy-all:hover { border-color: #FF4500; color: #FF4500; }
        .bi-upsell { background: linear-gradient(135deg, #FFF5F0 0%, #FFEDE5 100%); border: 2px solid #FF4500; border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 48px; }
        .bi-upsell-cta { display: inline-block; padding: 16px 32px; background: #FF4500; color: white; border-radius: 100px; font-weight: 700; font-size: 16px; text-decoration: none; transition: transform 0.2s; }
        .bi-upsell-cta:hover { transform: translateY(-2px); }
        .bi-howto { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 32px; margin-bottom: 48px; }
        .bi-howto h2 { font-size: 24px; font-weight: 800; margin-bottom: 20px; }
        .bi-howto-step { display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start; }
        .bi-howto-num { width: 32px; height: 32px; background: #FF4500; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; flex-shrink: 0; }
        .bi-howto-text { font-size: 15px; color: var(--text-secondary); line-height: 1.6; }
        .bi-howto-text strong { color: var(--text); }
        @media (max-width: 640px) {
          .bi-phrase-card { flex-direction: column; align-items: flex-start; }
          .bi-phrase-copy { align-self: flex-end; }
        }
      `}</style>

      <div className="bi-page">
        <div className="bi-badge">FREE TOOL</div>
        <h1 className="bi-h1">
          Buyer Intent Phrase Generator<br />
          <span>Find Reddit Leads in Any Niche</span>
        </h1>
        <p className="bi-sub">
          Pick your niche, get 15 ready-to-search phrases. Copy them into Reddit search, find people
          who just posted "I need [your service]" — and reach out before anyone else does.
        </p>

        {/* Top Conversion Banner — direct path to paid */}
        <div style={{
          background: 'linear-gradient(135deg, #FF4500 0%, #C2410C 100%)',
          borderRadius: 16,
          padding: '18px 22px',
          margin: '24px 0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          boxShadow: '0 8px 24px rgba(255,69,0,0.2)',
        }}>
          <div style={{ flex: '1 1 260px', color: '#FFF' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: '#FEF08A', marginBottom: 4 }}>⚡ WANT THE COMPLETE SYSTEM?</div>
            <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>Reddit Lead Gen Kit: 500+ phrases, DM templates, tracking spreadsheet &amp; 30+ niches.</div>
          </div>
          <a href="https://buy.stripe.com/bJefZg1xRcHf6KE5JMcMM0p" style={{
            display: 'inline-block',
            background: '#FEF08A',
            color: '#9A3412',
            fontWeight: 800,
            fontSize: 14,
            padding: '12px 22px',
            borderRadius: 99,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(254,240,138,0.35)',
          }}>Get Kit — $49 →</a>
        </div>

        {/* Generator Form */}
        <div className="bi-form">
          <div className="bi-form-row">
            <label className="bi-form-label">1. Select Your Niche</label>
            <select className="bi-select" value={niche} onChange={e => setNiche(e.target.value)}>
              <option value="">— Choose a niche —</option>
              {Object.keys(NICHES).map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          {niche && (
            <>
              <div className="bi-form-row">
                <label className="bi-form-label">2. Your Service (optional — customize the phrases)</label>
                <input
                  className="bi-input"
                  placeholder={`e.g. "${NICHES[niche]?.services[0]}" (leave blank for auto)`}
                  value={customService}
                  onChange={e => setCustomService(e.target.value)}
                />
              </div>
              <div className="bi-form-row">
                <label className="bi-form-label">3. Your Competitor (optional)</label>
                <input
                  className="bi-input"
                  placeholder={`e.g. "${NICHES[niche]?.competitors[0]}" (leave blank for auto)`}
                  value={customCompetitor}
                  onChange={e => setCustomCompetitor(e.target.value)}
                />
              </div>
            </>
          )}

          <button className="bi-btn" onClick={generate} disabled={!niche}>
            Generate 15 Buyer-Intent Phrases
          </button>
        </div>

        {/* Results */}
        {generated && (
          <div className="bi-results">
            <h2>Your Buyer-Intent Phrases</h2>

            <div className="bi-subreddits">
              <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Search these subreddits:</div>
              {generated.subreddits.map((sub, i) => (
                <a key={i} href={`https://reddit.com/${sub}`} target="_blank" rel="noopener noreferrer" className="bi-sub-tag" style={{ textDecoration: 'none' }}>{sub}</a>
              ))}
            </div>

            {generated.results.map((r, i) => (
              <div className="bi-phrase-card" key={i}>
                <span className="bi-phrase-level" style={{ background: levelColor[r.level] + '22', color: levelColor[r.level] }}>{r.level}</span>
                <span className="bi-phrase-text">{r.phrase}</span>
                <button className="bi-phrase-copy" onClick={() => copyPhrase(r.phrase, i)}>
                  {copied === i ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}

            <button className="bi-copy-all" onClick={copyAll}>
              {copied === 'all' ? 'All 15 Phrases Copied!' : 'Copy All 15 Phrases'}
            </button>

            {/* How To Use */}
            <div className="bi-howto">
              <h2>How to Use These Phrases</h2>
              <div className="bi-howto-step">
                <div className="bi-howto-num">1</div>
                <div className="bi-howto-text"><strong>Go to a subreddit above</strong> and paste a phrase into Reddit's search bar. Sort by "New" to find recent posts.</div>
              </div>
              <div className="bi-howto-step">
                <div className="bi-howto-num">2</div>
                <div className="bi-howto-text"><strong>Find posts under 4 hours old</strong> with clear buying intent. Look for budget mentions, urgency words, and specific requirements.</div>
              </div>
              <div className="bi-howto-step">
                <div className="bi-howto-num">3</div>
                <div className="bi-howto-text"><strong>Find the poster's email</strong> via LinkedIn cross-referencing. Check their Reddit profile for social links or a personal website.</div>
              </div>
              <div className="bi-howto-step">
                <div className="bi-howto-num">4</div>
                <div className="bi-howto-text"><strong>Send a 2-line email</strong> referencing their exact post: "Hey [name], saw your post about needing [service]. We do exactly that. Free 15-min call?"</div>
              </div>
              <div className="bi-howto-step" style={{ marginBottom: 0 }}>
                <div className="bi-howto-num">5</div>
                <div className="bi-howto-text"><strong>Reply rate: 23%</strong> vs 0.3% for cold email. Because they literally just asked for what you sell. You're not cold — you're perfectly timed.</div>
              </div>
            </div>

            {/* Upsell */}
            <div className="bi-upsell">
              <div style={{ fontSize: 14, fontWeight: 700, color: '#FF4500', marginBottom: 8 }}>WANT THE FULL PLAYBOOK?</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Reddit Lead Generation Kit — $49</div>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
                50+ phrases (you just saw 15), 25 outreach email templates, 10 niche subreddit maps,
                daily workflow system, username-to-email finder, and AI automation blueprints.
              </p>
              <a href="https://buy.stripe.com/bJefZg1xRcHf6KE5JMcMM0p" className="bi-upsell-cta">Get the Full Kit — $49</a>
            </div>
          </div>
        )}

        {/* Pre-generate content for SEO */}
        {!generated && (
          <>
            <div className="bi-howto">
              <h2>Why Reddit Leads Convert 76x Better</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                Cold email reply rate: 0.3%. Reddit buyer-intent outreach: 23%.
                The difference? <strong style={{ color: 'var(--text)' }}>These people just publicly raised their hand.</strong>
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                Every day, millions of people post on Reddit asking for exactly what you sell.
                "Anyone got recommendations for a [service]?" "Looking for an alternative to [competitor]."
                These are timestamped declarations of buying intent — free, organized by niche, and completely uncontested.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 15 }}>
                One founder built a $51K/month business using this exact system. This free tool generates
                the search phrases you need to find those buyers in your niche.
              </p>
            </div>

            {/* Tools Grid */}
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>More Free AI Tools</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                {[
                  { name: 'AI Prompt Generator', href: '/prompt-generator' },
                  { name: 'Prompt Enhancer', href: '/prompt-enhancer' },
                  { name: 'Business Name Generator', href: '/business-name-generator' },
                  { name: 'AI Income Blueprint', href: '/ai-income-blueprint' },
                  { name: 'Prompt Roaster', href: '/prompt-roaster' },
                  { name: 'AI Job Risk Scanner', href: '/ai-job-risk' },
                ].map((tool, i) => (
                  <a key={i} href={tool.href} style={{
                    display: 'block', padding: '16px 20px', background: 'var(--surface)',
                    border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none',
                    color: 'var(--text)', fontWeight: 600, fontSize: 14, transition: 'border-color 0.2s'
                  }}>{tool.name}</a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
