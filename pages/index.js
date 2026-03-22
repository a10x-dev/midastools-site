import Head from 'next/head';
import { useState } from 'react';

const STRIPE_URL = 'https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00';

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
    <>
      <Head>
        <title>OpenClaw Entrepreneur Starter Kit — Midas Tools</title>
        <meta name="description" content="Launch your AI entrepreneur in 24 hours. Templates, workflows, and prompts used by the agents already making $1,000s/week on OpenClaw." />
        <meta property="og:title" content="OpenClaw Entrepreneur Starter Kit" />
        <meta property="og:description" content="The exact templates and workflows behind the AI agents already making real revenue. $29 one-time." />
        <meta property="og:url" content="https://www.midastools.co" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OpenClaw Entrepreneur Starter Kit — Midas Tools" />
        <meta name="twitter:description" content="Launch your AI entrepreneur in 24 hours. Templates, workflows, and prompts used by agents making real revenue." />
        <meta name="twitter:image" content="https://www.midastools.co/og-image.png" />
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
        .nav-logo { font-size: 20px; font-weight: 800; color: var(--gold); }
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-link { color: #aaa; text-decoration: none; font-size: 14px; font-weight: 500; }
        .nav-link:hover { color: #fff; }
        .nav-cta { background: var(--gold); color: var(--black); padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; text-decoration: none; }
        .hero { max-width: 820px; margin: 0 auto; padding: 100px 40px 80px; text-align: center; }
        .badge { display: inline-block; background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); color: var(--gold); padding: 6px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; margin-bottom: 32px; }
        h1 { font-size: clamp(36px, 6vw, 68px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; }
        h1 span { color: var(--gold); }
        .hero-sub { font-size: 20px; color: var(--gray-400); max-width: 560px; margin: 0 auto 48px; }
        .btn-primary { display: inline-block; background: var(--gold); color: var(--black); padding: 18px 40px; border-radius: 12px; font-size: 18px; font-weight: 800; text-decoration: none; letter-spacing: -0.3px; }
        .price-tag { font-size: 14px; color: var(--gray-400); margin-top: 12px; }
        .price-tag strong { color: var(--white); }
        .proof { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 16px; padding: 32px; max-width: 680px; margin: 0 auto 80px; text-align: left; }
        .proof-quote { font-size: 17px; line-height: 1.6; color: var(--gray-200); margin-bottom: 16px; font-style: italic; }
        .proof-author { font-size: 14px; color: var(--gray-400); font-weight: 600; }
        .proof-author span { color: var(--gold); }
        section { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        .section-label { font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
        h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 16px; }
        .section-sub { font-size: 18px; color: var(--gray-400); margin-bottom: 48px; }
        .kit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 48px; }
        .kit-card { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 14px; padding: 28px; }
        .kit-icon { font-size: 28px; margin-bottom: 16px; }
        .kit-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .kit-desc { font-size: 14px; color: var(--gray-400); line-height: 1.5; }
        .steps { display: flex; flex-direction: column; }
        .step { display: flex; gap: 24px; padding: 32px 0; border-bottom: 1px solid var(--gray-800); }
        .step:last-child { border-bottom: none; }
        .step-num { flex-shrink: 0; width: 40px; height: 40px; background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; color: var(--gold); }
        .step-body h3 { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .step-body p { font-size: 15px; color: var(--gray-400); line-height: 1.5; }
        .email-box { background: rgba(245,200,66,0.05); border: 1px solid rgba(245,200,66,0.2); border-radius: 16px; padding: 40px; text-align: center; max-width: 820px; margin: 0 auto 0; }
        .email-box h3 { font-size: 24px; font-weight: 800; margin-bottom: 8px; }
        .email-box p { color: var(--gray-400); margin-bottom: 24px; }
        .email-form { display: flex; gap: 12px; max-width: 480px; margin: 0 auto; flex-wrap: wrap; justify-content: center; }
        .email-form input { flex: 1; min-width: 200px; padding: 14px 16px; background: var(--gray-900); border: 1px solid var(--gray-700); border-radius: 8px; color: var(--white); font-size: 15px; font-family: inherit; outline: none; }
        .email-form input:focus { border-color: var(--gold); }
        .email-form button { background: var(--gold); color: var(--black); padding: 14px 24px; border-radius: 8px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; font-family: inherit; white-space: nowrap; }
        .faq-list { display: flex; flex-direction: column; gap: 24px; }
        .faq-item { border-bottom: 1px solid var(--gray-800); padding-bottom: 24px; }
        .faq-q { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .faq-a { font-size: 15px; color: var(--gray-400); line-height: 1.6; }
        .cta-bottom { background: linear-gradient(135deg, rgba(245,200,66,0.08) 0%, rgba(10,10,10,0) 60%); border: 1px solid rgba(245,200,66,0.2); border-radius: 24px; padding: 80px 40px; text-align: center; max-width: 820px; margin: 0 auto 80px; }
        .cta-bottom h2 { margin-bottom: 16px; }
        .cta-bottom p { color: var(--gray-400); font-size: 18px; margin-bottom: 40px; }
        footer { border-top: 1px solid var(--gray-800); padding: 32px 40px; text-align: center; color: var(--gray-400); font-size: 13px; }
        footer a { color: var(--gray-400); }
        @media(max-width:600px){ nav{padding:16px 20px} .hero{padding:60px 20px 60px} section{padding:60px 20px} .cta-bottom{padding:60px 24px;margin:0 20px 60px} }
      `}</style>

      <div style={{background:'linear-gradient(90deg, rgba(245,200,66,0.15) 0%, rgba(245,200,66,0.05) 100%)',borderBottom:'1px solid rgba(245,200,66,0.3)',padding:'12px 40px',textAlign:'center',fontSize:14,fontWeight:600}}>
        <a href="/real-estate-kit" style={{color:'var(--gold)',textDecoration:'none'}}>🏡 NEW: AI Agent Kit for Real Estate — Automate leads & follow-ups for $49 → <span style={{textDecoration:'underline'}}>Get It Now</span></a>
      </div>

      <nav>
        <div className="nav-logo">👑 Midas Tools</div>
        <div className="nav-links">
          <a href="/services" className="nav-link">AI Services</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/receptionist" className="nav-link">AI Receptionist</a>
          <a href="/bundle" className="nav-cta">All Kits — $97</a>
        </div>
      </nav>

      <div className="hero">
        <div className="badge">🔥 Nat Eliason viral post: 230K+ readers on X</div>
        <h1>Launch Your<br /><span>AI Entrepreneur</span><br />in 24 Hours</h1>
        <p className="hero-sub">The exact templates, workflows, and prompts to deploy an AI agent that manages your email, monitors revenue, publishes content, and runs your business 24/7 — for under $50/month total.</p>
        <a href={STRIPE_URL} className="btn-primary">Get the Starter Kit →</a>
        <p className="price-tag"><strong>$29 one-time</strong> · Instant download · 30-day money-back guarantee</p>

        {/* Social Proof Bar */}
        <div style={{display:'flex',justifyContent:'center',gap:32,marginTop:40,flexWrap:'wrap'}}>
          {[
            { num: '247K+', label: 'OpenClaw GitHub Stars' },
            { num: '$14,718', label: 'Earned by Felix in 3 Weeks' },
            { num: '24/7', label: 'Autonomous Operation' },
          ].map(s => (
            <div key={s.label} style={{textAlign:'center'}}>
              <div style={{fontSize:24,fontWeight:900,color:'var(--gold)',letterSpacing:-1}}>{s.num}</div>
              <div style={{fontSize:12,color:'var(--gray-400)',fontWeight:500,marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
        <div className="proof">
          <p className="proof-quote">"In those two and a half weeks, he's earned $14,718. Making nearly $15,000 in under three weeks for a new entrepreneur is impressive on its own, but what makes it more impressive is that Felix isn't a real person. He's an OpenClaw, running on a Mac Mini, who has full control over his websites, email, Stripe, and bank account."</p>
          <p className="proof-author">— <span>Nat Eliason</span>, Entrepreneur & Author (230,000+ views on X, Feb 2026)</p>
        </div>
      </div>

      <section id="kit">
        <div className="section-label">What's Inside</div>
        <h2>Everything you need to deploy your agent and start making money</h2>
        <p className="section-sub">Skip the weeks of trial and error. Get the exact files that make an AI entrepreneur actually work.</p>
        <div className="kit-grid">
          {[
            { icon: '🧠', title: '5 SOUL.md Templates', desc: 'Pre-built identity files for entrepreneur, content creator, SaaS builder, community manager, and service business. Drop in your name and go.' },
            { icon: '💓', title: 'Heartbeat Workflow System', desc: 'Makes your agent proactively check emails, monitor revenue, track tasks — and reach out when something needs your attention.' },
            { icon: '📋', title: 'Daily Review Template', desc: 'The exact morning report structure: revenue stats, open blockers, and the top 5 things your agent should focus on — ready every morning.' },
            { icon: '🚀', title: 'Product Launch Prompts', desc: 'Word-for-word prompts to tell your agent to create and launch a digital product overnight — the same approach Felix used.' },
            { icon: '💰', title: 'Revenue Ops Playbook', desc: 'How to give your agent access to Stripe, email, and hosting safely. The minimal permission set that lets them run a real business.' },
            { icon: '📖', title: 'Complete Setup Guide', desc: 'Step-by-step: zero to a deployed, revenue-focused OpenClaw agent. Including the exact tools, accounts, and configurations you need.' },
          ].map((item) => (
            <div className="kit-card" key={item.title}>
              <div className="kit-icon">{item.icon}</div>
              <div className="kit-title">{item.title}</div>
              <div className="kit-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="section-label">How It Works</div>
        <h2>From zero to deployed in one day</h2>
        <p className="section-sub">No coding required. Just install OpenClaw, drop in the templates, and point your agent at a mission.</p>
        <div className="steps">
          {[
            { n: '1', h: 'Install OpenClaw', p: 'Download and install OpenClaw on any Mac. It takes about 10 minutes and needs no programming knowledge.' },
            { n: '2', h: 'Drop in the templates', p: 'Copy the SOUL.md and HEARTBEAT.md files from the kit into your workspace. Fill in your name, your mission. That\'s it.' },
            { n: '3', h: 'Give it a mission', p: 'Use our Product Launch Prompts. Go to sleep. Wake up to a deployed product with a payment link.' },
            { n: '4', h: 'Review and unblock', p: 'Your agent sends you a daily report. You spend 10 minutes reviewing. The rest is handled.' },
          ].map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="step-body"><h3>{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>
      </section>


      {/* PRODUCT LADDER */}
      <section style={{ paddingTop: 0 }}>
        <div className="section-label">Choose Your Path</div>
        <h2>One goal. Three ways to get there.</h2>
        <p className="section-sub">Start with the kit. Upgrade when you're ready.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
          {[
            { badge:'Most Popular', price:'$29', label:'one-time', name:'Starter Kit', desc:'Templates, workflows, and prompts to deploy your agent yourself.', href:'https://buy.stripe.com/4gM00i6Sbaz71qka02cMM00', cta:'Get the Kit →' },
            { badge:'Best Value', price:'$97', label:'one-time', name:'All Kits Bundle', desc:'Starter Kit + Real Estate Kit + Content Creator Kit + all future kits free. Save 40%.', href:'/bundle', cta:'Get the Bundle →' },
            { badge:'Hands-Off', price:'$299', label:'one-time', name:'Done For You', desc:'We configure your entire agent and launch your first product.', href:'/done-for-you', cta:'Get Setup →' },
          ].map(p => (
            <div key={p.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28,display:'flex',flexDirection:'column',gap:12}}>
              <span style={{background:'rgba(245,200,66,0.12)',border:'1px solid rgba(245,200,66,0.3)',color:'var(--gold)',padding:'4px 10px',borderRadius:100,fontSize:11,fontWeight:700,letterSpacing:1,textTransform:'uppercase',width:'fit-content'}}>{p.badge}</span>
              <div>
                <span style={{fontSize:32,fontWeight:900,letterSpacing:-1}}>{p.price}</span>
                <span style={{color:'var(--gray-400)',fontSize:15}}>{p.label}</span>
              </div>
              <div style={{fontWeight:800,fontSize:17}}>{p.name}</div>
              <div style={{color:'var(--gray-400)',fontSize:14,lineHeight:1.5,flex:1}}>{p.desc}</div>
              <a href={p.href} style={{display:'block',textAlign:'center',background:'var(--gold)',color:'var(--black)',padding:'12px 20px',borderRadius:8,fontWeight:700,fontSize:14,textDecoration:'none'}}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section style={{ paddingTop: 0 }}>
        <div className="email-box">
          <h3>Get free templates + updates</h3>
          <p>Join OpenClaw builders getting weekly workflows, prompts, and revenue tips — free.</p>
          {subStatus === 'done' ? (
            <p style={{ color: '#F5C842', fontWeight: 700, fontSize: 16 }}>✓ You're in — check your inbox!</p>
          ) : (
            <form className="email-form" onSubmit={handleSubscribe}>
              <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" disabled={subStatus === 'loading'}>{subStatus === 'loading' ? '...' : 'Subscribe free →'}</button>
            </form>
          )}
        </div>
      </section>

      <div className="cta-bottom" id="buy">
        <div className="section-label" style={{ marginBottom: 16 }}>Get Started Today</div>
        <h2>Deploy your AI entrepreneur<br />for $29</h2>
        <p>One-time payment. Instant download. 30-day money-back guarantee.</p>
        <a href={STRIPE_URL} className="btn-primary">Get the Starter Kit →</a>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--gray-400)' }}>Secure checkout via Stripe · ZIP file · Instant delivery to your email</p>

        {/* Trust Signals */}
        <div style={{display:'flex',justifyContent:'center',gap:24,marginTop:32,flexWrap:'wrap'}}>
          {['🔒 Secure Checkout', '⚡ Instant Download', '💰 30-Day Refund', '🚫 No Subscription'].map(t => (
            <span key={t} style={{fontSize:13,color:'var(--gray-400)',fontWeight:500}}>{t}</span>
          ))}
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="section-label">FAQ</div>
        <h2>Common questions</h2>
        <div className="faq-list">
          {[
            { q: 'Do I need to know how to code?', a: 'No. The templates are text files. Your agent handles all the coding.' },
            { q: 'Is this just for Mac?', a: 'OpenClaw currently runs on macOS. A Mac Mini (~$599) is ideal for 24/7 operation, but any Mac works to start.' },
            { q: 'What will my agent actually build?', a: 'Depends on what you tell it. The kit gives you proven prompts for digital products, software tools, and service businesses.' },
            { q: 'How is this different from just using ChatGPT?', a: 'ChatGPT responds to messages. OpenClaw runs 24/7, maintains memory, executes code, deploys websites, and works toward long-term goals — without you being there.' },
            { q: 'Can this replace my virtual assistant?', a: 'For about 75% of typical VA work — yes. Email triage, research summaries, content scheduling, and daily reporting all run autonomously. High-stakes client calls and legal/financial decisions stay with you. Total cost: under $50/month vs. $3,000–$8,000/month for a human VA.' },
            { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email rmidas26@gmail.com and you\'ll get your money back the same day.' },
          ].map((f) => (
            <div className="faq-item" key={f.q}>
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Midas Tools · Built by an AI, for entrepreneurs · <a href="mailto:rmidas26@gmail.com">rmidas26@gmail.com</a></p>
      </footer>
    </>
  );
}
