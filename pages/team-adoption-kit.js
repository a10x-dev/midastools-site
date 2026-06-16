import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import { submitSubscribe } from '../lib/subscribe';

const STRIPE_URL = 'https://buy.stripe.com/14A8wOdgz0Yx2uo5JMcMM0o';
const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function TeamAdoptionKit() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await submitSubscribe({ email, source: 'team-adoption-kit-lead', business: 'General' });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Team Adoption Kit — 50+ Skills, 8 Department Playbooks | Midas Tools</title>
        <meta name="description" content="50+ ready-made AI skills, 8 department playbooks, 15 tracking templates, and 5 onboarding guides. Roll out AI across your team without the chaos. $49." />
        <meta property="og:title" content="AI Team Adoption Kit — Roll Out AI Across Your Team" />
        <meta property="og:description" content="50+ skills, 8 department playbooks, tracking templates, and onboarding guides. Everything Ramp spent months building — packaged for you. $49 one-time." />
        <meta property="og:url" content="https://www.midastools.co/team-adoption-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Team Adoption Kit",
          "description": "50+ ready-made AI skills, 8 department playbooks, 15 tracking templates, and 5 onboarding guides for rolling out AI across your team",
          "url": "https://www.midastools.co/team-adoption-kit",
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
          "brand": "Midas Tools"
        })}} />
      </Head>

      <style>{`
        .ck-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .ck-badge { display: inline-block; background: #FF4500; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .ck-h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 16px; }
        .ck-h1 span { color: var(--accent); }
        .ck-sub { font-size: 20px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .ck-cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .ck-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; border-radius: 100px; font-weight: 700; font-size: 16px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .ck-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .ck-cta-primary { background: var(--accent); color: white; }
        .ck-cta-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
        .ck-cta-secondary:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .ck-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 48px; }
        .ck-stat { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
        .ck-stat-num { font-size: 28px; font-weight: 900; color: var(--accent); letter-spacing: -1px; }
        .ck-stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; }
        .ck-section { margin-bottom: 48px; }
        .ck-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 24px; letter-spacing: -0.5px; }
        .ck-section h3 { font-size: 20px; font-weight: 700; color: var(--text); margin-bottom: 12px; }
        .ck-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ck-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; }
        .ck-card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .ck-card-list { list-style: none; padding: 0; margin: 0; }
        .ck-card-list li { font-size: 14px; color: var(--text-secondary); padding: 4px 0; padding-left: 20px; position: relative; line-height: 1.5; }
        .ck-card-list li:before { content: "\\2713"; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
        .ck-bonus { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); border: 1px solid var(--accent); border-radius: 12px; padding: 24px; }
        .ck-bonus-title { font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 8px; }
        .ck-compare { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 48px; }
        .ck-compare table { width: 100%; border-collapse: collapse; }
        .ck-compare th { padding: 16px; text-align: left; font-size: 14px; font-weight: 700; background: var(--bg); border-bottom: 1px solid var(--border); }
        .ck-compare td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid var(--border); }
        .ck-compare tr:last-child td { border-bottom: none; }
        .ck-check { color: var(--accent); font-weight: 700; }
        .ck-x { color: #ccc; }
        .ck-price-box { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 48px; }
        .ck-price-big { font-size: 48px; font-weight: 900; color: var(--text); letter-spacing: -2px; }
        .ck-price-per { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
        .ck-lead { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 48px; }
        .ck-lead-form { display: flex; gap: 8px; margin-top: 12px; }
        .ck-lead-input { flex: 1; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; }
        .ck-lead-btn { padding: 12px 24px; background: var(--accent); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
        .ck-faq { margin-bottom: 48px; }
        .ck-faq-item { border-bottom: 1px solid var(--border); padding: 16px 0; }
        .ck-faq-q { font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .ck-faq-a { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
        .ck-related { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 48px; text-align: center; }
        @media (max-width: 640px) {
          .ck-stats { grid-template-columns: repeat(2, 1fr); }
          .ck-grid { grid-template-columns: 1fr; }
          .ck-cta-row { flex-direction: column; }
          .ck-cta { justify-content: center; }
          .ck-lead-form { flex-direction: column; }
        }
      `}</style>

      <div className="ck-page">
        <div className="ck-badge">NEW — AI TEAM ADOPTION</div>
        <h1 className="ck-h1">
          Roll Out AI Across Your Team. <span>Without the Chaos.</span>
        </h1>
        <p className="ck-sub">
          50+ ready-made skills, 8 department playbooks, tracking templates, and onboarding guides.
          Everything Ramp spent months building — packaged for you.
        </p>

        <div className="ck-cta-row">
          <a href={STRIPE_URL} className="ck-cta ck-cta-primary">Get the Kit — $49</a>
          <a href={BUNDLE_STRIPE} className="ck-cta ck-cta-secondary">All 16 Kits — $97</a>
        </div>

        <div className="ck-stats">
          <div className="ck-stat"><div className="ck-stat-num">50+</div><div className="ck-stat-label">Team Skills</div></div>
          <div className="ck-stat"><div className="ck-stat-num">8</div><div className="ck-stat-label">Department Playbooks</div></div>
          <div className="ck-stat"><div className="ck-stat-num">15</div><div className="ck-stat-label">Tracking Templates</div></div>
          <div className="ck-stat"><div className="ck-stat-num">5</div><div className="ck-stat-label">Onboarding Guides</div></div>
        </div>

        {/* 8 Department Playbooks */}
        <div className="ck-section">
          <h2>8 Department Playbooks — AI Skills for Every Team</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Each playbook includes department-specific AI skills, workflow automations,
            and ready-to-use prompts. Hand them to any team lead and they can roll out
            AI in their department by end of day.
          </p>
          <div className="ck-grid">
            {[
              { title: 'Engineering', items: ['Code review skills', 'PR automation', 'CI/CD debugging', 'Architecture docs', 'Sprint planning'] },
              { title: 'Sales', items: ['Gong call analysis', 'CRM enrichment', 'Battlecard drafting', 'Pipeline reporting', 'Outreach sequences'] },
              { title: 'Marketing', items: ['Campaign briefs', 'Content calendar', 'Competitor analysis', 'SEO optimization', 'Social scheduling'] },
              { title: 'Customer Support', items: ['Ticket triage', 'Response templates', 'Escalation workflows', 'FAQ generation', 'CSAT analysis'] },
              { title: 'Product', items: ['PRD writing', 'User story generation', 'Feature prioritization', 'Release notes', 'Roadmap building'] },
              { title: 'Finance', items: ['Expense categorization', 'Budget summaries', 'Forecast models', 'Contract review', 'Board deck prep'] },
              { title: 'HR / People Ops', items: ['Job descriptions', 'Interview scorecards', 'Onboarding checklists', 'Policy drafts', 'Employee comms'] },
              { title: 'Legal / Compliance', items: ['Contract review', 'NDA drafting', 'Policy audits', 'Risk assessment', 'Regulatory briefs'] },
            ].map((dept, i) => (
              <div className="ck-card" key={i}>
                <div className="ck-card-title">{dept.title}</div>
                <ul className="ck-card-list">
                  {dept.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Adoption Framework Templates */}
        <div className="ck-section">
          <h2>Adoption Framework Templates — Measure & Scale AI Usage</h2>
          <div className="ck-grid">
            <div className="ck-bonus">
              <div className="ck-bonus-title">AI Proficiency Assessment</div>
              <ul className="ck-card-list">
                <li>L0-L3 scoring framework for team members</li>
                <li>Self-assessment questionnaire</li>
                <li>Manager evaluation rubric</li>
                <li>Skill gap identification</li>
                <li>Personalized learning paths</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">Weekly AI Usage Leaderboard</div>
              <ul className="ck-card-list">
                <li>Notion template (plug and play)</li>
                <li>Google Sheets version included</li>
                <li>Track usage by department</li>
                <li>Highlight top adopters</li>
                <li>Gamification elements built in</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">AI Skills Marketplace Setup</div>
              <ul className="ck-card-list">
                <li>Internal "Dojo" inspired by Ramp</li>
                <li>Skill sharing templates</li>
                <li>Peer learning framework</li>
                <li>Contribution tracking</li>
                <li>Recognition system</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">ROI Calculator & Reporting</div>
              <ul className="ck-card-list">
                <li>Prove AI investment value to leadership</li>
                <li>Time-saved tracking per department</li>
                <li>Quarterly AI Adoption Report template</li>
                <li>Executive summary format</li>
                <li>Before/after benchmarks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Onboarding & Enablement */}
        <div className="ck-section">
          <h2>Onboarding & Enablement — Get Your Team to "Aha" Fast</h2>
          <div className="ck-grid">
            <div className="ck-bonus">
              <div className="ck-bonus-title">Day 1 AI Setup Guide</div>
              <ul className="ck-card-list">
                <li>Get new hires to their "aha" moment fast</li>
                <li>Step-by-step first prompt walkthrough</li>
                <li>Tool setup checklist</li>
                <li>Quick wins for first day</li>
                <li>Common pitfalls to avoid</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">AI Office Hours & Demos</div>
              <ul className="ck-card-list">
                <li>AI Office Hours agenda template</li>
                <li>All-Hands AI Demo format</li>
                <li>Live demo script with talking points</li>
                <li>Q&A facilitation guide</li>
                <li>Follow-up action items template</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">Skill Discovery Guide</div>
              <ul className="ck-card-list">
                <li>Help team members find their use cases</li>
                <li>Department-specific discovery prompts</li>
                <li>Workflow audit template</li>
                <li>"Time diary" exercise</li>
                <li>Automation opportunity finder</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">Best Practices Wiki Template</div>
              <ul className="ck-card-list">
                <li>Living document your team maintains</li>
                <li>Prompt library structure</li>
                <li>Do's and don'ts per department</li>
                <li>Security & compliance guidelines</li>
                <li>Version control for prompts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="ck-section">
          <h2>How We Compare</h2>
          <div className="ck-compare">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>DIY</th>
                  <th style={{ color: 'var(--accent)' }}>Our Kit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Research time</td><td>40+ hours</td><td className="ck-check">0 hours</td></tr>
                <tr><td>Department playbooks</td><td className="ck-x">Build from scratch</td><td className="ck-check">8 ready-made</td></tr>
                <tr><td>Skills library</td><td className="ck-x">Start empty</td><td className="ck-check">50+ day one</td></tr>
                <tr><td>Tracking system</td><td className="ck-x">Figure it out</td><td className="ck-check">Plug and play</td></tr>
                <tr><td>Onboarding guide</td><td className="ck-x">Wing it</td><td className="ck-check">Step-by-step</td></tr>
                <tr><td>Price</td><td>Your salary x hours</td><td><strong>$49 one-time</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Box */}
        <div className="ck-price-box">
          <div className="ck-price-big">$49</div>
          <div className="ck-price-per">Less than one hour of a manager's time — saves your team hundreds of hours</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_URL} className="ck-cta ck-cta-primary">Get the Kit — $49</a>
            <a href={BUNDLE_STRIPE} className="ck-cta ck-cta-secondary">All 16 Kits — $97</a>
          </div>
        </div>

        {/* Email Capture */}
        <div className="ck-lead">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Not ready to buy? Get a free AI Adoption Checklist</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We'll email you our 10-step AI rollout checklist instantly — no spam, unsubscribe anytime.</div>
          {sent ? (
            <div style={{ marginTop: 12, color: 'var(--accent)', fontWeight: 700 }}>Check your inbox — your free checklist is on the way.</div>
          ) : (
            <form onSubmit={handleLead} className="ck-lead-form">
              <input className="ck-lead-input" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="ck-lead-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Me the Free Checklist'}</button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="ck-faq">
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>FAQ</h2>
          {[
            { q: 'What AI tools does this work with?', a: 'Claude Code, Claude Cowork, ChatGPT, and any LLM. The playbooks and templates are tool-agnostic — they work with whatever AI tools your team uses.' },
            { q: 'How big should my team be?', a: 'Works for 2-person startups to 500+ companies. The framework scales up or down. Small teams can skip the leaderboard and focus on playbooks. Larger orgs will use everything.' },
            { q: 'Is this the same as the Claude Cowork Kit?', a: 'No. The Claude Cowork Kit is for individual power users who want to master Claude Cowork personally. The Team Adoption Kit is for managers and team leads rolling out AI across a team or entire organization.' },
            { q: 'Do I need technical knowledge?', a: 'No. This kit is designed for non-technical team leads and managers. If you can use Google Docs, you can use this kit.' },
            { q: 'What format are the files?', a: 'Markdown, Notion templates, Google Sheets, and PDF. Everything is ready to use — just open, customize with your team\'s details, and deploy.' },
          ].map((faq, i) => (
            <div className="ck-faq-item" key={i}>
              <div className="ck-faq-q">{faq.q}</div>
              <div className="ck-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Related Product */}
        <div className="ck-related">
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8 }}>Looking to master AI individually?</p>
          <a href="/claude-cowork-kit" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Check out the Claude Cowork Mastery Kit — 115+ prompts for individual power users →
          </a>
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Your team is already using AI. Just badly.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 18 }}>Give them the playbooks, skills, and structure to do it right. $49 to transform your entire team.</p>
          <a href={STRIPE_URL} className="ck-cta ck-cta-primary" style={{ fontSize: 18, padding: '18px 40px' }}>Get the AI Team Adoption Kit — $49</a>
        </div>
      </div>
    </Layout>
  );
}
