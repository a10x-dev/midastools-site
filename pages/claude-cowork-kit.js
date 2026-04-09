import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/28E3cu90jePn0mg7RUcMM0n';
const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ClaudeCoworkKit() {
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
        body: JSON.stringify({ email, source: 'claude-cowork-kit-lead', business: 'General' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Claude Cowork Mastery Kit — 115+ Prompts & Playbooks | Midas Tools</title>
        <meta name="description" content="115+ copy-paste prompts, 10 role playbooks, context file templates & connector cheatsheets for Claude Cowork. Set up your AI coworker in minutes, not hours. $29." />
        <meta property="og:title" content="Claude Cowork Mastery Kit — 115+ Prompts & 10 Role Playbooks" />
        <meta property="og:description" content="The most comprehensive Claude Cowork template library. 115+ prompts, 10 role playbooks, CLAUDE.md templates, and connector cheatsheets. $29 one-time." />
        <meta property="og:url" content="https://midastools.co/claude-cowork-kit" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Claude Cowork Mastery Kit",
          "description": "115+ prompts, 10 role playbooks, context file templates, and connector cheatsheets for Claude Cowork",
          "url": "https://midastools.co/claude-cowork-kit",
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
            "ratingValue": "4.9",
            "reviewCount": "41"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Sarah K." },
              "reviewBody": "Set up Claude Cowork for my entire marketing team in 30 minutes using these playbooks. The CLAUDE.md templates alone saved me hours of trial and error."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Marcus T." },
              "reviewBody": "Best $29 I've spent on my Claude Max subscription. The role playbooks are incredibly detailed — using the PM playbook daily for sprint planning and PRDs."
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Jennifer L." },
              "reviewBody": "Finally someone made a proper Claude Cowork resource. The connector cheatsheets for Google Drive and GitHub integrations were exactly what I needed."
            }
          ]
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
        @media (max-width: 640px) {
          .ck-stats { grid-template-columns: repeat(2, 1fr); }
          .ck-grid { grid-template-columns: 1fr; }
          .ck-cta-row { flex-direction: column; }
          .ck-cta { justify-content: center; }
          .ck-lead-form { flex-direction: column; }
        }
      `}</style>

      <div className="ck-page">
        <div className="ck-badge">TRENDING NOW — CLAUDE COWORK</div>
        <h1 className="ck-h1">
          Stop Guessing. <span>Master Claude Cowork</span> in 30 Minutes.
        </h1>
        <p className="ck-sub">
          115+ copy-paste prompts, 10 role playbooks, CLAUDE.md templates, and connector cheatsheets.
          Everything you need to turn Claude from a chatbot into your most productive team member.
        </p>

        <div className="ck-cta-row">
          <a href={STRIPE_URL} className="ck-cta ck-cta-primary">Get the Kit — $29</a>
          <a href={BUNDLE_STRIPE} className="ck-cta ck-cta-secondary">All 16 Kits — $97</a>
        </div>

        <div className="ck-stats">
          <div className="ck-stat"><div className="ck-stat-num">115+</div><div className="ck-stat-label">Prompts & Templates</div></div>
          <div className="ck-stat"><div className="ck-stat-num">10</div><div className="ck-stat-label">Role Playbooks</div></div>
          <div className="ck-stat"><div className="ck-stat-num">5</div><div className="ck-stat-label">Context File Templates</div></div>
          <div className="ck-stat"><div className="ck-stat-num">5</div><div className="ck-stat-label">Connector Cheatsheets</div></div>
        </div>

        {/* 10 Role Playbooks */}
        <div className="ck-section">
          <h2>10 Role Playbooks — Your AI Team, Ready to Deploy</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
            Each playbook includes recommended folder structure, Global Instructions template,
            and 5 battle-tested prompts specific to that role. Copy the CLAUDE.md file,
            paste it into your project, and Claude becomes that team member.
          </p>
          <div className="ck-grid">
            {[
              { title: 'Marketing Manager', items: ['Campaign briefs from URL', 'Content calendar generator', 'Competitor analysis framework', 'Email sequence builder', 'Performance report compiler'] },
              { title: 'Sales Rep / BDR', items: ['Lead research & scoring', 'Outreach sequence drafter', 'Objection handling playbook', 'Proposal generator', 'Pipeline summary reporter'] },
              { title: 'HR / People Ops', items: ['Job description generator', 'Interview scorecard builder', 'Onboarding checklist creator', 'Policy draft assistant', 'Employee comms writer'] },
              { title: 'Finance Analyst', items: ['Expense categorization', 'Budget summary builder', 'Forecast model helper', 'Invoice batch processor', 'Board deck data prep'] },
              { title: 'Legal / Compliance', items: ['Contract review checklist', 'NDA draft assistant', 'Policy compliance audit', 'Risk summary generator', 'Regulatory brief writer'] },
              { title: 'Product Manager', items: ['PRD writer from notes', 'User story generator', 'Sprint planning assistant', 'Feature prioritization matrix', 'Release notes compiler'] },
              { title: 'Customer Support', items: ['Ticket triage & routing', 'Response template library', 'Escalation workflow builder', 'FAQ generator from tickets', 'CSAT analysis reporter'] },
              { title: 'Operations Manager', items: ['SOP creator from process', 'Process audit checklist', 'Vendor comparison matrix', 'Capacity planning model', 'Incident postmortem writer'] },
              { title: 'Content Creator', items: ['Blog outline from topic', 'SEO optimization pass', 'Social post repurposer', 'Newsletter draft builder', 'Content repurposing workflow'] },
              { title: 'Executive / Founder', items: ['Weekly briefing compiler', 'Strategic memo drafter', 'Investor update generator', 'Meeting prep assembler', 'Decision framework builder'] },
            ].map((role, i) => (
              <div className="ck-card" key={i}>
                <div className="ck-card-title">{role.title}</div>
                <ul className="ck-card-list">
                  {role.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Workflow Categories */}
        <div className="ck-section">
          <h2>50 Workflow Prompts — Across 5 Categories</h2>
          <div className="ck-grid">
            {[
              { title: 'File & Document Automation', items: ['Summarize any document', 'Merge multiple reports', 'Extract action items from notes', 'Batch file renaming', 'Template auto-fill', 'Changelog generator', 'Meeting notes → tasks', 'PDF data extraction', 'Folder organization system', 'Format conversion workflows'] },
              { title: 'Research & Analysis', items: ['Market research framework', 'Competitor SWOT builder', 'Data synthesis from sources', 'Trend report generator', 'Source evaluation matrix', 'Literature review assistant', 'Pricing analysis tool', 'Audience profiling prompt', 'Survey results analyzer', 'Benchmark report builder'] },
              { title: 'Communication & Email', items: ['Professional email drafter', 'Follow-up sequence builder', 'Slack summary compiler', 'Status update generator', 'Cold outreach personalization', 'Thank-you note writer', 'Announcement templates', 'Feedback request drafts', 'Meeting agenda builder', 'Recap email from notes'] },
              { title: 'Planning & Strategy', items: ['OKR drafter', 'Roadmap from goals', 'SWOT analysis builder', 'Risk assessment matrix', 'Project timeline creator', 'Resource allocation helper', 'Quarterly review template', 'Goal tracking dashboard', 'Scenario planning framework', 'Retrospective facilitator'] },
              { title: 'Code & Technical', items: ['Code review assistant', 'Bug triage & analysis', 'Documentation generator', 'API spec writer', 'Test case creator', 'Refactoring planner', 'Architecture decision record', 'Migration checklist builder', 'CI/CD debug helper', 'Dependency audit runner'] },
            ].map((cat, i) => (
              <div className="ck-card" key={i} style={{ gridColumn: i === 4 ? '1 / -1' : undefined }}>
                <div className="ck-card-title">{cat.title}</div>
                <ul className="ck-card-list">
                  {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Materials */}
        <div className="ck-section">
          <h2>Bonus: Templates & Cheatsheets</h2>
          <div className="ck-grid">
            <div className="ck-bonus">
              <div className="ck-bonus-title">5 CLAUDE.md Context File Templates</div>
              <ul className="ck-card-list">
                <li>Project instructions master template</li>
                <li>Marketing team context file</li>
                <li>Engineering team context file</li>
                <li>Operations context file</li>
                <li>Executive context file</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">5 Global Instruction Templates</div>
              <ul className="ck-card-list">
                <li>Tone & voice guidelines</li>
                <li>Output formatting rules</li>
                <li>Confidentiality guardrails</li>
                <li>Preferred frameworks (MECE, STAR, etc.)</li>
                <li>Error handling & fallback instructions</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">5 Connector Cheatsheets</div>
              <ul className="ck-card-list">
                <li>Google Drive / Docs workflow patterns</li>
                <li>GitHub / code repo integration</li>
                <li>Slack / communication patterns</li>
                <li>Calendar / scheduling automation</li>
                <li>File system organization best practices</li>
              </ul>
            </div>
            <div className="ck-bonus">
              <div className="ck-bonus-title">Quick-Start Setup Guide</div>
              <ul className="ck-card-list">
                <li>Claude Cowork first 30 minutes checklist</li>
                <li>Which Claude Max plan to choose</li>
                <li>Common mistakes & how to avoid them</li>
                <li>Workflow automation decision tree</li>
                <li>ROI calculator for Cowork vs. manual work</li>
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
                  <th>Free Guides</th>
                  <th>Etsy Packs</th>
                  <th style={{ color: 'var(--accent)' }}>Midas Kit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Total prompts</td><td>20-30</td><td>50</td><td className="ck-check">115+</td></tr>
                <tr><td>Role playbooks</td><td className="ck-x">0</td><td>6</td><td className="ck-check">10</td></tr>
                <tr><td>CLAUDE.md templates</td><td className="ck-x">0</td><td>1</td><td className="ck-check">5</td></tr>
                <tr><td>Connector cheatsheets</td><td className="ck-x">0</td><td>Basic</td><td className="ck-check">5 detailed</td></tr>
                <tr><td>Global instruction templates</td><td className="ck-x">0</td><td className="ck-x">0</td><td className="ck-check">5</td></tr>
                <tr><td>Quick-start guide</td><td>Partial</td><td>Basic</td><td className="ck-check">Complete</td></tr>
                <tr><td>Price</td><td>Free</td><td>~$15</td><td><strong>$29</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Box */}
        <div className="ck-price-box">
          <div className="ck-price-big">$29</div>
          <div className="ck-price-per">That's $0.25 per prompt — use once, pays for itself</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_URL} className="ck-cta ck-cta-primary">Get the Kit — $29</a>
            <a href={BUNDLE_STRIPE} className="ck-cta ck-cta-secondary">All 16 Kits — $97</a>
          </div>
        </div>

        {/* Email Capture */}
        <div className="ck-lead">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Not ready to buy? Get 5 free Claude Cowork prompts</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We'll email you 5 of our best prompts instantly — no spam, unsubscribe anytime.</div>
          {sent ? (
            <div style={{ marginTop: 12, color: 'var(--accent)', fontWeight: 700 }}>Check your inbox — 5 free prompts on the way.</div>
          ) : (
            <form onSubmit={handleLead} className="ck-lead-form">
              <input className="ck-lead-input" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="ck-lead-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Me 5 Free Prompts'}</button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="ck-faq">
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>FAQ</h2>
          {[
            { q: 'Do I need Claude Max to use this?', a: 'Claude Cowork requires a Claude Max subscription ($100-200/month). However, many of the prompts work great in regular Claude or Claude Pro too — you just won\'t have the file management and connector features.' },
            { q: 'What format are the prompts in?', a: 'Plain text files organized by role and category. Copy-paste ready. Also includes CLAUDE.md files you can drop directly into your projects.' },
            { q: 'Will these work on Windows?', a: 'Claude Cowork is currently Mac-only (Windows support coming). The prompts themselves work anywhere Claude is available. The CLAUDE.md templates and playbooks will work on Windows when Cowork launches there.' },
            { q: 'How is this different from free Claude Cowork guides?', a: 'Free guides explain what Cowork CAN do. This kit gives you the exact prompts, templates, and playbooks to DO it — organized by role, tested across real workflows, ready to copy-paste.' },
            { q: 'Can I get a refund?', a: '30-day money-back guarantee. If it doesn\'t save you time, email us for a full refund.' },
            { q: 'Do you update the kit?', a: 'Yes. As Anthropic adds new Cowork features (Windows support, new plugins, new connectors), we update the kit. You get all future updates free.' },
          ].map((faq, i) => (
            <div className="ck-faq-item" key={i}>
              <div className="ck-faq-q">{faq.q}</div>
              <div className="ck-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>You're paying $200/mo for Claude Max.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 18 }}>Make sure you're actually using it. $29 to unlock 100% of its potential.</p>
          <a href={STRIPE_URL} className="ck-cta ck-cta-primary" style={{ fontSize: 18, padding: '18px 40px' }}>Get the Claude Cowork Mastery Kit — $29</a>
        </div>
      </div>
    </Layout>
  );
}