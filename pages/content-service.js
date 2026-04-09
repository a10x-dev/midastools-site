import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/dRm9ASdgzcHfb0U4FIcMM06';

export default function ContentService() {
  return (
    <Layout>
      <Head>
        <title>AI Content Service — Done-For-You Articles, Every Month | Midas Tools</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta name="description" content="We publish 10 SEO articles per month for your startup. AI-written, human-reviewed, and posted directly to dev.to, Medium, and your blog. $299/mo." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        .hero{max-width:760px;margin:0 auto;padding:80px 40px 64px;text-align:center}
        .badge{display:inline-block;background:rgba(59,95,255,0.08);border:1px solid rgba(59,95,255,0.15);color:var(--gold);padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:32px}
        h1{font-size:clamp(32px,5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:19px;color:var(--gray-400);max-width:560px;margin:0 auto 48px;line-height:1.6}
        .btn{display:inline-block;background:var(--gold);color:var(--black);padding:18px 40px;border-radius:12px;font-size:18px;font-weight:800;text-decoration:none;letter-spacing:-0.3px}
        .price-note{font-size:14px;color:var(--gray-400);margin-top:12px}
        section{max-width:760px;margin:0 auto;padding:80px 40px}
        .label{font-size:12px;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase;margin-bottom:16px}
        h2{font-size:clamp(26px,3.5vw,40px);font-weight:800;letter-spacing:-1px;margin-bottom:40px}
        .feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
        .feature{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:16px;padding:28px}
        .feature-icon{font-size:28px;margin-bottom:12px}
        .feature h3{font-size:16px;font-weight:700;margin-bottom:8px}
        .feature p{font-size:14px;color:var(--gray-400);line-height:1.6}
        .deliverable{display:flex;gap:20px;padding:28px 0;border-bottom:1px solid var(--gray-800)}
        .deliverable:last-child{border-bottom:none}
        .d-num{flex-shrink:0;width:36px;height:36px;background:rgba(59,95,255,0.08);border:1px solid rgba(59,95,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--gold);font-size:15px}
        .d-body h3{font-size:17px;font-weight:700;margin-bottom:6px}
        .d-body p{font-size:15px;color:var(--gray-400);line-height:1.5}
        .stat-row{display:flex;gap:40px;justify-content:center;padding:60px 40px;border-top:1px solid var(--gray-800);border-bottom:1px solid var(--gray-800);margin:0 auto;max-width:760px}
        .stat{text-align:center}
        .stat-num{font-size:42px;font-weight:900;color:var(--gold);letter-spacing:-2px}
        .stat-label{font-size:13px;color:var(--gray-400);margin-top:4px}
        .cta-box{background:linear-gradient(135deg,rgba(59,95,255,0.06) 0%,rgba(255,255,255,0) 60%);border:1px solid rgba(59,95,255,0.12);border-radius:24px;padding:80px 40px;text-align:center;max-width:760px;margin:0 auto 80px}
        .cta-box h2{margin-bottom:16px}
        .cta-box p{color:var(--gray-400);font-size:18px;margin-bottom:40px}
        @media(max-width:600px){
          .hero{padding:48px 20px}
          section{padding:60px 20px}
          .feature-grid{grid-template-columns:1fr}
          .stat-row{flex-direction:column;gap:24px}
        }
      `}</style>

      <div className="hero">
        <div className="badge" style={{marginBottom:32}}>Done-For-You Content</div>
        <h1>10 articles a month.<br /><span>Zero effort</span> from you.</h1>
        <p className="hero-sub">We research, write, and publish 10 SEO-optimized articles every month for your startup. Posted to dev.to, your blog, and wherever your buyers are reading.</p>
        <a href={STRIPE_URL} className="btn">Start Publishing — $299/mo →</a>
        <p className="price-note">Monthly subscription · Cancel anytime · First articles in 7 days</p>
      </div>

      <div className="stat-row">
        {[
          { n: '10', l: 'articles per month' },
          { n: '45+', l: 'articles we\'ve published' },
          { n: '7', l: 'days to first article' },
          { n: '$30', l: 'per article (vs $150+ freelance)' },
        ].map(s => (
          <div className="stat" key={s.l}>
            <div className="stat-num">{s.n}</div>
            <div className="stat-label">{s.l}</div>
          </div>
        ))}
      </div>

      <section>
        <div className="label">What You Get</div>
        <h2>A full content engine, hands-free</h2>
        <div>
          {[
            { n: '1', h: '10 SEO articles/month', p: 'Keyword-researched, long-form articles (1,200–2,000 words) targeting your buyers\' search intent. Not AI slop — structured, useful content.' },
            { n: '2', h: 'Published directly to your channels', p: 'Posted to dev.to, Medium, your blog, or wherever your audience reads. We handle the publishing — you just check the links.' },
            { n: '3', h: 'Topic strategy included', p: 'We build your content calendar each month based on your product, target customer, and what\'s actually ranking. No briefs needed from you.' },
            { n: '4', h: 'Internal linking & CTAs', p: 'Every article drives readers toward your product. Clear calls-to-action, links to your pricing page, and SEO-friendly internal structure.' },
            { n: '5', h: 'Monthly performance report', p: 'End-of-month summary of what published, which articles are getting traction, and what we\'re targeting next month.' },
          ].map(d => (
            <div className="deliverable" key={d.n}>
              <div className="d-num">{d.n}</div>
              <div className="d-body"><h3>{d.h}</h3><p>{d.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="label">Why It Works</div>
        <h2>Content compounds. Ads don't.</h2>
        <div className="feature-grid">
          {[
            { icon: '📈', h: 'SEO traffic is free forever', p: 'Every article you publish keeps working after you pay for it. Unlike ads, content doesn\'t stop when your budget does.' },
            { icon: '🎯', h: 'Targets buyer intent', p: 'We don\'t write thought leadership fluff. We write articles people search for when they\'re close to buying.' },
            { icon: '⚡', h: 'Faster than hiring', p: 'A freelance writer costs $150/article and takes a week. We publish 10 articles in 30 days for $299 total.' },
            { icon: '🔁', h: 'Builds over time', p: '10 articles. Then 20. Then 50. Each one adds authority, backlink surface, and another path for buyers to find you.' },
          ].map(f => (
            <div className="feature" key={f.h}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-box" id="start">
        <div className="label" style={{marginBottom:16}}>Ready to start?</div>
        <h2>10 articles live<br />in 30 days or less</h2>
        <p>$299/month. No briefs. No back-and-forth. Just published content and a growing audience.</p>
        <a href={STRIPE_URL} className="btn">Start Publishing — $299/mo →</a>
        <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>Secure checkout via Stripe · Cancel anytime · First article in 7 days</p>
      </div>

    </Layout>
  );
}
