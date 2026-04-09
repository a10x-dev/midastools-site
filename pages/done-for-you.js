import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const DFY_URL = 'https://buy.stripe.com/00w7sK3FZ8qZ7OI7RUcMM01';

export default function DoneForYou() {
  return (
    <Layout>
      <Head>
        <title>Done-For-You OpenClaw Setup — Midas Tools</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta name="description" content="We configure your entire OpenClaw agent for you — SOUL.md, heartbeat system, API connections, and first product launch. $299 one-time." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .hero{max-width:760px;margin:0 auto;padding:80px 40px 64px;text-align:center}
        h1{font-size:clamp(32px,5vw,60px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:18px;color:var(--gray-400);max-width:520px;margin:0 auto 40px;line-height:1.7}
        section{max-width:760px;margin:0 auto;padding:80px 40px}
        h2{font-size:clamp(26px,3.5vw,40px);font-weight:800;letter-spacing:-1px;margin-bottom:40px}
        .deliverable{display:flex;gap:20px;padding:28px 0;border-bottom:1px solid var(--gray-800)}
        .deliverable:last-child{border-bottom:none}
        .d-num{flex-shrink:0;width:36px;height:36px;background:rgba(59,95,255,0.06);border:1px solid rgba(59,95,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:15px}
        .d-body h3{font-size:17px;font-weight:700;margin-bottom:6px}
        .d-body p{font-size:15px;color:var(--gray-400);line-height:1.6}
        .process-step{display:flex;gap:20px;padding:24px 0;border-bottom:1px solid var(--gray-800)}
        .process-step:last-child{border-bottom:none}
        .p-num{flex-shrink:0;width:36px;height:36px;background:rgba(59,95,255,0.06);border:1px solid rgba(59,95,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:14px}
        .p-body h3{font-size:16px;font-weight:700;margin-bottom:4px}
        .p-body p{font-size:14px;color:var(--gray-400);line-height:1.6}
        .cta-box{border:1px solid var(--gray-800);border-radius:20px;padding:80px 40px;text-align:center;max-width:760px;margin:0 auto 80px}
        .cta-box h2{margin-bottom:16px}
        .cta-box p{color:var(--gray-400);font-size:17px;margin-bottom:40px}
        @media(max-width:600px){.hero{padding:48px 20px}section{padding:60px 20px}.cta-box{padding:60px 24px;margin:0 20px 60px}}
      `}</style>

      <div className="hero">
        <div className="badge" style={{marginBottom:32}}>Done-For-You Service</div>
        <h1>Your AI entrepreneur,<br /><span>built and launched</span><br />while you sleep.</h1>
        <p className="hero-sub">Pay once. We configure your entire OpenClaw agent &mdash; identity, heartbeat system, API connections, and first product launch. You wake up with a deployed revenue machine.</p>
        <a href={DFY_URL} className="btn-primary">Get Started &mdash; $299 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time &middot; Delivered within 48 hours &middot; 30-day guarantee</p>
      </div>

      <section>
        <div className="section-label">What You Get</div>
        <h2>Everything configured, nothing left to figure out</h2>
        <div>
          {[
            { n: '1', h: 'Custom SOUL.md', p: 'Your agent\'s identity file — written specifically for your goals, market, and business type. Not a template. Yours.' },
            { n: '2', h: 'Heartbeat System', p: 'HEARTBEAT.md configured to monitor your revenue, inbox, and metrics. Proactive alerts for what matters.' },
            { n: '3', h: 'Full API Integration', p: 'Stripe, GitHub, Vercel, and Gmail all connected and tested. Your agent can deploy code, collect payments, and handle support from day one.' },
            { n: '4', h: 'First Product Launch', p: 'We give your agent its first overnight mission and stay live through the morning to unblock anything it flags.' },
            { n: '5', h: 'Daily Review Setup', p: 'Your agent\'s morning report configured and running. Revenue, blockers, and priorities — delivered every morning.' },
            { n: '6', h: '2 Weeks of Support', p: 'Access to us via email for 14 days after delivery. Questions, tweaks, course corrections — we\'ve got you.' },
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
        <h2>Three steps. 48 hours. Done.</h2>
        <div>
          {[
            { n: '1', h: 'You pay and fill out a short form', p: 'Tell us your revenue goal, niche, and what tools you already have.' },
            { n: '2', h: 'We build your agent overnight', p: 'We configure everything: SOUL.md, HEARTBEAT.md, API connections, and your first product launch prompt.' },
            { n: '3', h: 'Your agent is live', p: 'Within 48 hours, you receive your configured workspace and a live agent ready to build and sell.' },
          ].map(s => (
            <div className="process-step" key={s.h}>
              <div className="p-num">{s.n}</div>
              <div className="p-body"><h3>{s.h}</h3><p>{s.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-box" id="buy">
        <div className="section-label" style={{marginBottom:16}}>Ready to start?</div>
        <h2>Your AI entrepreneur,<br />configured in 48 hours</h2>
        <p>$299 one-time. Full setup, first product launch, and 2 weeks of support.</p>
        <a href={DFY_URL} className="btn-primary">Get Started &mdash; $299 &rarr;</a>
        <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe &middot; 30-day money-back guarantee</p>
      </div>
    </Layout>
  );
}
