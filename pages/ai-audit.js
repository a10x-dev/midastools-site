import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const AUDIT_URL = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';

export default function AIAudit() {
  return (
    <Layout>
      <Head>
        <title>AI Business Audit & Setup — Midas Tools</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="description" content="We audit your business, find the 3 highest-ROI processes to automate, and deploy your first AI agent — in 48 hours. $997 one-time." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        .hero{max-width:760px;margin:0 auto;padding:80px 40px 64px;text-align:center}
        h1{font-size:clamp(32px,5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:18px;color:var(--gray-400);max-width:540px;margin:0 auto 40px;line-height:1.7}
        section{max-width:760px;margin:0 auto;padding:80px 40px}
        h2{font-size:clamp(26px,3.5vw,40px);font-weight:800;letter-spacing:-1px;margin-bottom:40px}
        .card-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:16px;padding:28px;transition:border-color 0.2s}
        .card:hover{border-color:var(--gray-700)}
        .card h3{font-size:16px;font-weight:700;margin-bottom:8px}
        .card p{font-size:14px;color:var(--gray-400);line-height:1.6}
        .deliverable{display:flex;gap:20px;padding:28px 0;border-bottom:1px solid var(--gray-800)}
        .deliverable:last-child{border-bottom:none}
        .d-num{flex-shrink:0;width:36px;height:36px;background:rgba(245,200,66,0.08);border:1px solid rgba(245,200,66,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:15px}
        .d-body h3{font-size:17px;font-weight:700;margin-bottom:6px}
        .d-body p{font-size:15px;color:var(--gray-400);line-height:1.6}
        .process-step{display:flex;gap:20px;padding:24px 0;border-bottom:1px solid var(--gray-800)}
        .process-step:last-child{border-bottom:none}
        .p-num{flex-shrink:0;width:36px;height:36px;background:rgba(245,200,66,0.08);border:1px solid rgba(245,200,66,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:14px}
        .p-body h3{font-size:16px;font-weight:700;margin-bottom:4px}
        .p-body p{font-size:14px;color:var(--gray-400);line-height:1.6}
        .who-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .who-item{display:flex;gap:12px;align-items:flex-start;padding:14px;background:var(--gray-900);border:1px solid var(--gray-800);border-radius:12px}
        .who-check{color:var(--gold);font-weight:800;flex-shrink:0}
        .who-text{font-size:14px;color:var(--gray-400);line-height:1.5}
        .cta-box{border:1px solid var(--gray-800);border-radius:20px;padding:80px 40px;text-align:center;max-width:760px;margin:0 auto 80px}
        .cta-box h2{margin-bottom:16px}
        .cta-box p{color:var(--gray-400);font-size:17px;margin-bottom:40px}
        .price-big{font-size:56px;font-weight:900;color:var(--gold);letter-spacing:-3px;line-height:1}
        @media(max-width:600px){.hero{padding:48px 20px}section{padding:60px 20px}.card-grid,.who-grid{grid-template-columns:1fr}.cta-box{padding:60px 24px;margin:0 20px 60px}}
      `}</style>

      <div className="hero">
        <div className="badge" style={{marginBottom:32}}>Done-For-You AI Implementation</div>
        <h1>We find where AI saves you<br /><span>$10,000+/year</span> &mdash; then<br />build it for you.</h1>
        <p className="hero-sub">A 48-hour audit of your business + a live AI agent deployed and running before we leave. No fluff. A working system that cuts costs or grows revenue.</p>
        <a href={AUDIT_URL} className="btn-primary">Book Your AI Audit &mdash; $997 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time &middot; 48 hours &middot; 100% money-back if we don't find $5,000+ in savings</p>
      </div>

      <section>
        <div className="section-label">Who This Is For</div>
        <h2>You know AI is changing everything.<br />You don't know where to start.</h2>
        <div className="who-grid">
          {[
            'You have a small team (1\u201310 people) spending time on repetitive tasks',
            'You\'re paying $500+/month for tools, VAs, or contractors that AI could replace',
            'You\'ve tried ChatGPT but never deployed anything that runs on its own',
            'You want a working AI system, not another framework or course',
            'You have a clear bottleneck: lead gen, content, support, ops',
            'You want results in days, not months',
          ].map((t,i) => (
            <div className="who-item" key={i}>
              <span className="who-check">&#10003;</span>
              <span className="who-text">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="section-label">What You Get</div>
        <h2>An audit AND a working system.</h2>
        <div>
          {[
            { n: '1', h: 'Business Process Audit', p: 'We review your workflows, tools, and team tasks. We identify the 3 highest-ROI processes to automate \u2014 ranked by time savings and revenue impact.' },
            { n: '2', h: 'Custom AI Agent Built & Deployed', p: 'We build your first AI agent live \u2014 configured for your actual business, connected to your real tools.' },
            { n: '3', h: 'Automation Playbook', p: 'A written document: what the agent does, how to adjust it, what to automate next. You own it forever.' },
            { n: '4', h: '30-Day Follow-Up Support', p: 'Email access to us for 30 days. If something breaks, we fix it. If you want to expand, we help plan it.' },
            { n: '5', h: 'ROI Projection', p: 'We calculate expected time and cost savings. If we can\'t find $5,000+/year in value, you get a full refund.' },
          ].map(d => (
            <div className="deliverable" key={d.n}>
              <div className="d-num">{d.n}</div>
              <div className="d-body"><h3>{d.h}</h3><p>{d.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="section-label">How It Works</div>
        <h2>From payment to live agent in 48 hours.</h2>
        {[
          { n: '1', h: 'Day 0 \u2014 You book and fill out the intake form', p: '15 minutes. Tell us your business, your biggest time-wasters, and what tools you use.' },
          { n: '2', h: 'Day 1 \u2014 We audit and plan', p: 'We map your workflows, identify automation targets, and build the plan. You approve before we build.' },
          { n: '3', h: 'Day 2 \u2014 We build and deploy', p: 'Live build. Your AI agent gets configured, connected, and tested against your actual data.' },
          { n: '4', h: 'Day 2 night \u2014 Handoff', p: 'You receive the deployed system + Automation Playbook. We stay on email for 30 days.' },
        ].map(s => (
          <div className="process-step" key={s.h}>
            <div className="p-num">{s.n}</div>
            <div className="p-body"><h3>{s.h}</h3><p>{s.p}</p></div>
          </div>
        ))}
      </section>

      <div className="cta-box" id="book">
        <div className="section-label" style={{marginBottom:24}}>Ready to find your savings?</div>
        <div className="price-big">$997</div>
        <p style={{marginTop:16,marginBottom:40}}>One-time. 48 hours. A working AI agent deployed in your business.<br />Full refund if we don't find $5,000+/year in savings.</p>
        <a href={AUDIT_URL} className="btn-primary">Book Your AI Audit &rarr;</a>
        <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe &middot; Intake form within 1 hour &middot; 30-day guarantee</p>
      </div>

      <section style={{paddingTop:0}}>
        <div className="section-label">FAQ</div>
        <h2>Common questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {[
            { q: 'Do I need to be technical?', a: 'No. We handle all setup. You tell us your business problems \u2014 we build the solution.' },
            { q: 'How do you access my systems?', a: 'Only with explicit permission, during a live session. We never store credentials.' },
            { q: 'What if the AI agent stops working?', a: '30-day email support included. We also document everything in your Automation Playbook.' },
            { q: 'What kinds of businesses do you work with?', a: 'Service businesses, agencies, SaaS founders, solo operators with 1\u201310 people.' },
            { q: 'What if you can\'t find $5,000 in savings?', a: 'Full refund. No questions asked.' },
          ].map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
