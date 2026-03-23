import Head from 'next/head';
import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>AI Automation Services — Midas Tools</title>
        <meta name="description" content="We build custom AI agents for your business in 48 hours. AI receptionist, sales agent, and full automation — so you never miss a lead again." />
        <meta property="og:title" content="AI Automation Services — Midas Tools" />
        <meta property="og:description" content="Custom AI agents for your business. Setup in 48 hours. Never miss a lead again." />
        <meta property="og:url" content="https://www.midastools.co/services" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .hero { max-width: 900px; margin: 0 auto; padding: 80px 40px 64px; text-align: center; }
        h1 { font-size: clamp(36px, 6vw, 60px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; }
        h1 span { color: var(--gold); }
        .hero-sub { font-size: 18px; color: var(--gray-400); max-width: 560px; margin: 0 auto 40px; line-height: 1.7; }
        section { max-width: 900px; margin: 0 auto; padding: 80px 40px; }
        h2 { font-size: clamp(28px, 4vw, 40px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 16px; }
        .section-sub { font-size: 17px; color: var(--gray-400); margin-bottom: 48px; line-height: 1.6; }

        .tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 48px; }
        .tier { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; transition: border-color 0.2s; }
        .tier:hover { border-color: var(--gray-700); }
        .tier.featured { border-color: rgba(245,200,66,0.4); }
        .tier-name { font-size: 20px; font-weight: 800; margin-bottom: 8px; }
        .tier-price { margin-bottom: 8px; }
        .tier-price .setup { font-size: 32px; font-weight: 900; letter-spacing: -1px; }
        .tier-price .monthly { font-size: 14px; color: var(--gray-400); }
        .tier-desc { font-size: 14px; color: var(--gray-400); line-height: 1.6; margin-bottom: 24px; flex: 1; }
        .tier-features { list-style: none; margin-bottom: 28px; }
        .tier-features li { font-size: 14px; color: var(--gray-200); padding: 5px 0; padding-left: 22px; position: relative; }
        .tier-features li::before { content: '\u2713'; position: absolute; left: 0; color: var(--gold); font-weight: 700; }
        .tier-cta { display: block; text-align: center; background: var(--gold); color: var(--black); padding: 14px 24px; border-radius: 10px; font-weight: 700; font-size: 15px; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; }
        .tier-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(245,200,66,0.2); }

        .social-proof { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 48px; }
        .social-proof p { font-size: 17px; color: var(--gray-200); line-height: 1.7; }
        .social-proof .hl { color: var(--gold); font-weight: 700; }

        .steps { display: flex; flex-direction: column; }
        .step { display: flex; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--gray-800); }
        .step:last-child { border-bottom: none; }
        .step-num { flex-shrink: 0; width: 44px; height: 44px; background: rgba(245,200,66,0.08); border: 1px solid rgba(245,200,66,0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; color: var(--gold); }
        .step-body h3 { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .step-body p { font-size: 15px; color: var(--gray-400); line-height: 1.6; }

        .faq-list { display: flex; flex-direction: column; gap: 24px; }
        .faq-q { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .faq-a { font-size: 15px; color: var(--gray-400); line-height: 1.7; }

        .cta-bottom { border: 1px solid var(--gray-800); border-radius: 20px; padding: 80px 40px; text-align: center; max-width: 900px; margin: 0 auto 80px; }
        .cta-bottom h2 { margin-bottom: 16px; }
        .cta-bottom p { color: var(--gray-400); font-size: 17px; margin-bottom: 40px; }

        @media(max-width:600px) {
          .hero { padding: 48px 20px 48px; }
          section { padding: 60px 20px; }
          .cta-bottom { padding: 60px 24px; margin: 0 20px 60px; }
          .tiers { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="hero">
        <div className="badge" style={{marginBottom:32}}>AI Automation Services</div>
        <h1>Custom <span>AI Agents</span> for Your Business in 48 Hours</h1>
        <p className="hero-sub">Stop losing leads, wasting time on repetitive tasks, and missing calls. We set up AI that works 24/7 — so you don't have to.</p>
        <a href="https://cal.com/manduks/midastools" className="btn-primary" target="_blank" rel="noopener">Book a Free 15-Min Call &rarr;</a>
        <p style={{ marginTop: 16, fontSize: 14, color: 'var(--gray-400)' }}>No commitment &middot; Free assessment &middot; Custom plan</p>
      </div>

      {/* Social Proof */}
      <section style={{ paddingTop: 0 }}>
        <div className="social-proof">
          <p>Our AI agents run <span className="hl">24 hours a day, 7 days a week</span>, managing real businesses. We don't just build AI — <span className="hl">we run our own business on it</span>. Our autonomous agents write code, publish content, monitor revenue, and run strategy reviews every 6 hours. We know what works because we live it.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ paddingTop: 0 }}>
        <div className="section-label">Services</div>
        <h2>Choose the AI agent your business needs</h2>
        <p className="section-sub">Every package includes setup, training, testing, and 30 days of support.</p>
        <div className="tiers">
          <div className="tier">
            <div style={{fontSize:12,fontWeight:700,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:16}}>Entry</div>
            <div className="tier-name">AI Receptionist</div>
            <div className="tier-price">
              <span className="setup">$499</span> <span className="monthly">setup + $299/mo</span>
            </div>
            <div className="tier-desc">AI answers your phone 24/7. Never miss a call, a lead, or an appointment again. <a href="/receptionist" style={{color:'var(--gold)'}}>Full details &rarr;</a></div>
            <ul className="tier-features">
              <li>24/7 phone answering</li>
              <li>Appointment booking</li>
              <li>Call transcripts via email</li>
              <li>Custom greeting & FAQ</li>
              <li>Transfers to human when needed</li>
              <li>30 days of tuning included</li>
            </ul>
            <a href="https://cal.com/manduks/midastools" className="tier-cta" target="_blank" rel="noopener">Book a Call &rarr;</a>
          </div>

          <div className="tier featured">
            <div className="badge" style={{marginBottom:16,fontSize:11,padding:'4px 12px'}}>Most Popular</div>
            <div className="tier-name">AI Sales Agent</div>
            <div className="tier-price">
              <span className="setup">$3,500</span> <span className="monthly">setup + $399/mo</span>
            </div>
            <div className="tier-desc">AI chat on your website that qualifies leads, answers questions, and books demos — automatically.</div>
            <ul className="tier-features">
              <li>Website chat widget</li>
              <li>Lead qualification</li>
              <li>Automatic demo booking</li>
              <li>CRM integration</li>
              <li>Custom knowledge base</li>
              <li>Lead alerts via email/SMS</li>
              <li>Monthly performance reports</li>
            </ul>
            <a href="https://cal.com/manduks/midastools" className="tier-cta" target="_blank" rel="noopener">Book a Call &rarr;</a>
          </div>

          <div className="tier">
            <div style={{fontSize:12,fontWeight:700,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:16}}>Enterprise</div>
            <div className="tier-name">Full AI Automation</div>
            <div className="tier-price">
              <span className="setup">$5,000</span> <span className="monthly">setup + $499/mo</span>
            </div>
            <div className="tier-desc">Custom AI workflows for your entire business. Email, support, scheduling, lead gen, and reporting — all automated.</div>
            <ul className="tier-features">
              <li>Everything in Sales Agent</li>
              <li>Email triage & auto-response</li>
              <li>Customer support automation</li>
              <li>Calendar management</li>
              <li>Lead generation workflows</li>
              <li>Custom integrations</li>
              <li>Weekly strategy calls</li>
              <li>Dedicated Slack channel</li>
            </ul>
            <a href="https://cal.com/manduks/midastools" className="tier-cta" target="_blank" rel="noopener">Book a Call &rarr;</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="section-label">How It Works</div>
        <h2>From zero to live AI in 48 hours</h2>
        <p className="section-sub">We handle everything. You just tell us what you need.</p>
        <div className="steps">
          {[
            { n: '1', h: 'Tell us your workflow', p: '15-minute call. Describe how your business works — what calls you get, what questions customers ask, what tasks eat your time.' },
            { n: '2', h: 'We build your AI agent', p: 'Within 48 hours, we build, train, and test your custom AI agent. It knows your business, your pricing, your policies, and your voice.' },
            { n: '3', h: 'Go live & iterate', p: 'We deploy your agent and monitor for 30 days. Every week, we review performance and tune it until it handles conversations like a pro.' },
          ].map(s => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-body"><h3>{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="section-label">FAQ</div>
        <h2>Common questions</h2>
        <div className="faq-list">
          {[
            { q: 'What kind of businesses is this for?', a: 'Any business that talks to customers — dentists, law firms, agencies, SaaS companies, plumbers, restaurants, real estate agents. If you answer phones, emails, or chat, AI can help.' },
            { q: 'Will the AI sound robotic?', a: 'No. Modern voice AI is remarkably natural. Most callers can\'t tell the difference. We customize the tone and personality to match your brand.' },
            { q: 'What if the AI can\'t answer a question?', a: 'It gracefully transfers to a human, takes a message, or schedules a callback — whatever you prefer. It never makes things up or gives wrong information.' },
            { q: 'Can I try it before I commit?', a: 'Absolutely. Book a free call and we\'ll run a live demo with your actual business information. You\'ll see exactly how it works before paying anything.' },
            { q: 'What\'s the monthly fee for?', a: 'Hosting, AI model costs, monitoring, and ongoing tuning. We continuously improve your agent based on real conversations. Cancel anytime.' },
            { q: 'How is this different from Intercom or Drift?', a: 'Those are tools you configure and manage yourself. We build and manage the entire system for you. You get the results without the work.' },
          ].map((f) => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="cta-bottom">
        <div className="section-label" style={{ marginBottom: 16 }}>Ready to Automate?</div>
        <h2>Stop missing leads.<br />Start growing on autopilot.</h2>
        <p>Book a free 15-minute call. No commitment. We'll tell you exactly what AI can do for your business.</p>
        <a href="https://cal.com/manduks/midastools" className="btn-primary" target="_blank" rel="noopener">Book a Free Call &rarr;</a>
        <div style={{ marginTop: 24 }}>
          <a href="mailto:iam@armando.mx" className="btn-outline" style={{ fontSize: 14, padding: '12px 28px' }}>Or email us: iam@armando.mx</a>
        </div>
      </div>
    </Layout>
  );
}
