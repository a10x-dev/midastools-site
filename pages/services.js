import Head from 'next/head';

export default function Services() {
  return (
    <>
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
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --gold: #F5C842; --black: #0A0A0A; --gray-900: #111; --gray-800: #1A1A1A;
          --gray-700: #2A2A2A; --gray-400: #888; --gray-200: #CCC; --white: #FFF;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: var(--black); color: var(--white); line-height: 1.6; -webkit-font-smoothing: antialiased; }
        nav { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; border-bottom: 1px solid var(--gray-800); position: sticky; top: 0; background: rgba(10,10,10,0.95); backdrop-filter: blur(10px); z-index: 100; }
        .nav-logo { font-size: 20px; font-weight: 800; color: var(--gold); text-decoration: none; }
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-link { color: #aaa; text-decoration: none; font-size: 14px; font-weight: 500; }
        .nav-link:hover { color: #fff; }
        .nav-cta { background: var(--gold); color: var(--black); padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; text-decoration: none; }
        .hero { max-width: 900px; margin: 0 auto; padding: 100px 40px 80px; text-align: center; }
        .badge { display: inline-block; background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); color: var(--gold); padding: 6px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; margin-bottom: 32px; }
        h1 { font-size: clamp(36px, 6vw, 64px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; }
        h1 span { color: var(--gold); }
        .hero-sub { font-size: 20px; color: var(--gray-400); max-width: 600px; margin: 0 auto 48px; }
        .btn-primary { display: inline-block; background: var(--gold); color: var(--black); padding: 18px 40px; border-radius: 12px; font-size: 18px; font-weight: 800; text-decoration: none; letter-spacing: -0.3px; }
        .btn-primary:hover { opacity: 0.9; }
        .btn-outline { display: inline-block; border: 2px solid var(--gold); color: var(--gold); padding: 16px 36px; border-radius: 12px; font-size: 16px; font-weight: 700; text-decoration: none; }
        .btn-outline:hover { background: rgba(245,200,66,0.1); }
        section { max-width: 900px; margin: 0 auto; padding: 80px 40px; }
        .section-label { font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
        h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 16px; }
        .section-sub { font-size: 18px; color: var(--gray-400); margin-bottom: 48px; }

        .tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 48px; }
        .tier { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; }
        .tier.featured { border-color: var(--gold); box-shadow: 0 0 40px rgba(245,200,66,0.08); }
        .tier-badge { background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); color: var(--gold); padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; width: fit-content; margin-bottom: 20px; }
        .tier-icon { font-size: 36px; margin-bottom: 16px; }
        .tier-name { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
        .tier-price { margin-bottom: 8px; }
        .tier-price .setup { font-size: 32px; font-weight: 900; letter-spacing: -1px; }
        .tier-price .monthly { font-size: 15px; color: var(--gray-400); }
        .tier-desc { font-size: 15px; color: var(--gray-400); line-height: 1.6; margin-bottom: 24px; flex: 1; }
        .tier-features { list-style: none; margin-bottom: 28px; }
        .tier-features li { font-size: 14px; color: var(--gray-200); padding: 6px 0; padding-left: 24px; position: relative; }
        .tier-features li::before { content: '✓'; position: absolute; left: 0; color: var(--gold); font-weight: 700; }
        .tier-cta { display: block; text-align: center; background: var(--gold); color: var(--black); padding: 14px 24px; border-radius: 10px; font-weight: 700; font-size: 15px; text-decoration: none; }
        .tier-cta:hover { opacity: 0.9; }

        .steps { display: flex; flex-direction: column; }
        .step { display: flex; gap: 24px; padding: 32px 0; border-bottom: 1px solid var(--gray-800); }
        .step:last-child { border-bottom: none; }
        .step-num { flex-shrink: 0; width: 48px; height: 48px; background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; color: var(--gold); }
        .step-body h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
        .step-body p { font-size: 15px; color: var(--gray-400); line-height: 1.6; }

        .social-proof { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 40px; text-align: center; margin-bottom: 48px; }
        .social-proof p { font-size: 18px; color: var(--gray-200); line-height: 1.7; }
        .social-proof .highlight { color: var(--gold); font-weight: 700; }

        .faq-list { display: flex; flex-direction: column; gap: 24px; }
        .faq-item { border-bottom: 1px solid var(--gray-800); padding-bottom: 24px; }
        .faq-q { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .faq-a { font-size: 15px; color: var(--gray-400); line-height: 1.6; }

        .cta-bottom { background: linear-gradient(135deg, rgba(245,200,66,0.08) 0%, rgba(10,10,10,0) 60%); border: 1px solid rgba(245,200,66,0.2); border-radius: 24px; padding: 80px 40px; text-align: center; max-width: 900px; margin: 0 auto 80px; }
        .cta-bottom h2 { margin-bottom: 16px; }
        .cta-bottom p { color: var(--gray-400); font-size: 18px; margin-bottom: 40px; }

        footer { border-top: 1px solid var(--gray-800); padding: 32px 40px; text-align: center; color: var(--gray-400); font-size: 13px; }
        footer a { color: var(--gray-400); }
        @media(max-width:600px){ nav{padding:16px 20px} .hero{padding:60px 20px 60px} section{padding:60px 20px} .cta-bottom{padding:60px 24px;margin:0 20px 60px} .tiers{grid-template-columns:1fr} }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">👑 Midas Tools</a>
        <div className="nav-links">
          <a href="/" className="nav-link">Starter Kit</a>
          <a href="/bundle" className="nav-link">All Kits — $97</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="#pricing" className="nav-cta">Book a Free Call</a>
        </div>
      </nav>

      <div className="hero">
        <div className="badge">⚡ New — AI Automation Services</div>
        <h1>We Build <span>Custom AI Agents</span> for Your Business in 48 Hours</h1>
        <p className="hero-sub">Stop losing leads, wasting time on repetitive tasks, and missing calls. We set up AI that works 24/7 — so you don't have to.</p>
        <a href="https://cal.com/manduks/midastools" className="btn-primary" target="_blank" rel="noopener">Book a Free 15-Min Call →</a>
        <p style={{ marginTop: 16, fontSize: 14, color: 'var(--gray-400)' }}>No commitment · We'll assess your needs · Get a custom plan</p>
      </div>

      {/* SOCIAL PROOF */}
      <section style={{ paddingTop: 0 }}>
        <div className="social-proof">
          <p>Our AI agents run <span className="highlight">24 hours a day, 7 days a week</span>, managing real businesses. We don't just build AI — <span className="highlight">we ARE AI</span>. Our own business is built and operated by autonomous agents that write code, publish content, monitor revenue, and run strategy reviews every 6 hours. We know what works because we live it.</p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section id="pricing" style={{ paddingTop: 0 }}>
        <div className="section-label">Services</div>
        <h2>Choose the AI agent your business needs</h2>
        <p className="section-sub">Every package includes setup, training, testing, and 30 days of support.</p>
        <div className="tiers">
          <div className="tier">
            <div className="tier-icon">📞</div>
            <div className="tier-name">AI Receptionist</div>
            <div className="tier-price">
              <span className="setup">$499</span> <span className="monthly">setup + $299/mo</span>
            </div>
            <div className="tier-desc">AI answers your phone 24/7. Never miss a call, a lead, or an appointment again. <a href="/receptionist" style={{color:'var(--gold)'}}>Full details →</a></div>
            <ul className="tier-features">
              <li>24/7 phone answering</li>
              <li>Appointment booking</li>
              <li>Call transcripts via email</li>
              <li>Custom greeting & FAQ</li>
              <li>Transfers to human when needed</li>
              <li>30 days of tuning included</li>
            </ul>
            <a href="https://cal.com/manduks/midastools" className="tier-cta" target="_blank" rel="noopener">Book a Call →</a>
            <p style={{textAlign:'center',fontSize:12,color:'var(--gray-400)',marginTop:8}}>or <a href="mailto:iam@armando.mx" style={{color:'var(--gray-400)'}}>email us directly</a></p>
          </div>

          <div className="tier featured">
            <div className="tier-badge">Most Popular</div>
            <div className="tier-icon">💬</div>
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
            <a href="https://cal.com/manduks/midastools" className="tier-cta" target="_blank" rel="noopener">Book a Call →</a>
            <p style={{textAlign:'center',fontSize:12,color:'var(--gray-400)',marginTop:8}}>or <a href="mailto:iam@armando.mx" style={{color:'var(--gray-400)'}}>email us directly</a></p>
          </div>

          <div className="tier">
            <div className="tier-icon">🤖</div>
            <div className="tier-name">Full AI Automation</div>
            <div className="tier-price">
              <span className="setup">$5,000</span> <span className="monthly">setup + $499/mo</span>
            </div>
            <div className="tier-desc">Custom AI workflows for your entire business. Email, support, scheduling, lead gen, and reporting — all automated.</div>
            <ul className="tier-features">
              <li>Everything in Sales Agent</li>
              <li>Email triage & auto-response</li>
              <li>Customer support automation</li>
              <li>Scheduling & calendar management</li>
              <li>Lead generation workflows</li>
              <li>Custom integrations</li>
              <li>Weekly strategy calls</li>
              <li>Dedicated Slack channel</li>
            </ul>
            <a href="https://cal.com/manduks/midastools" className="tier-cta" target="_blank" rel="noopener">Book a Call →</a>
            <p style={{textAlign:'center',fontSize:12,color:'var(--gray-400)',marginTop:8}}>or <a href="mailto:iam@armando.mx" style={{color:'var(--gray-400)'}}>email us directly</a></p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="section-label">How It Works</div>
        <h2>From zero to live AI in 48 hours</h2>
        <p className="section-sub">We handle everything. You just tell us what you need.</p>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h3>Tell us your workflow</h3>
              <p>15-minute call. You describe how your business works — what calls you get, what questions customers ask, what tasks eat your time. We listen.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h3>We build your AI agent</h3>
              <p>Within 48 hours, we build, train, and test your custom AI agent. It knows your business, your pricing, your policies, and your voice.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h3>Go live & iterate</h3>
              <p>We deploy your agent and monitor it for 30 days. Every week, we review performance and tune it until it's handling conversations like a pro.</p>
            </div>
          </div>
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
            { q: 'What\'s the monthly fee for?', a: 'Hosting, AI model costs, monitoring, and ongoing tuning. We continuously improve your agent based on real conversations. You can cancel anytime.' },
            { q: 'How is this different from Intercom or Drift?', a: 'Those are tools you have to configure and manage yourself. We build and manage the entire system for you. You get the results without the work.' },
          ].map((f) => (
            <div className="faq-item" key={f.q}>
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="cta-bottom">
        <div className="section-label" style={{ marginBottom: 16 }}>Ready to Automate?</div>
        <h2>Stop missing leads.<br />Start growing on autopilot.</h2>
        <p>Book a free 15-minute call. No commitment, no pressure. We'll tell you exactly what AI can (and can't) do for your business.</p>
        <a href="https://cal.com/manduks/midastools" className="btn-primary" target="_blank" rel="noopener">Book a Free Call →</a>
        <div style={{ marginTop: 24 }}>
          <a href="mailto:iam@armando.mx" className="btn-outline" style={{ fontSize: 14, padding: '12px 28px' }}>Or email us: iam@armando.mx</a>
        </div>
      </div>

      <footer>
        <p>© 2026 Midas Tools · AI Automation Services · <a href="mailto:iam@armando.mx">iam@armando.mx</a></p>
      </footer>
    </>
  );
}
