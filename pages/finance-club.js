import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const BUNDLE_URL = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q';
const MEGA_PACK_ZIP = '/ai-prompt-mega-pack.zip';

const SAMPLE_PROMPTS = [
  {
    title: 'Board Narrative Builder',
    use: 'Turn raw monthly numbers into a 1-page board narrative your CEO will actually read.',
    body: `You are the CFO of [COMPANY NAME] writing the monthly board update.

Context:
- Revenue this month: [NUMBER]
- Revenue same month last year: [NUMBER]
- Gross margin trend: [3-MONTH SERIES]
- Top 3 expense categories: [LIST]
- One-time items / accruals: [LIST]
- Strategic priorities the board cares about: [LIST]

Write a 1-page board narrative with:
1. Headline number + year-over-year delta in plain language (no jargon)
2. The single most important thing that changed this month (be specific — name the cause)
3. Three things working (with the metric that proves each)
4. Two things not working (with the leading indicator we're watching)
5. The one decision you need from the board
6. A 90-day forward look — what gets better, what gets worse, what's uncertain

Tone: confident, specific, no hedging. If a number is bad, say it's bad. Board members can read a financial pack — they need YOUR judgment, not a recap.`,
  },
  {
    title: 'Scenario Model — 3 Cases',
    use: 'Generate base/upside/downside scenarios with the assumption tree exposed, not buried.',
    body: `Build a 12-month scenario model for [COMPANY NAME] with three cases: Base, Upside, Downside.

Inputs:
- Current monthly revenue: [NUMBER]
- Current monthly burn: [NUMBER]
- Cash on hand: [NUMBER]
- Top 3 revenue drivers: [LIST with current values + monthly growth rate]
- Top 3 cost drivers: [LIST with current values + scaling rule]
- Macro variable that could change everything: [e.g., FX rate, raw material price, customer concentration]

For each case (Base/Upside/Downside):
1. State 5 explicit assumptions (not vague — give numbers)
2. Project monthly revenue, GM, opex, cash for 12 months
3. Identify the runway-out date if applicable
4. Name the 3 metrics that would tell us (within 60 days) which case we're actually in

Output as a table I can paste into a deck. Below the table, give me a 3-bullet "what to watch" memo for the next 30 days.

Be honest in the Downside case. Most consultants make Downside still profitable. Reality usually isn't.`,
  },
];

export default function FinanceClub() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle');
  const [unlocked, setUnlocked] = useState(false);
  const [via, setVia] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const v = (params.get('via') || '').toLowerCase();
    if (v) setVia(v);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const utm = params ? {
        utm_source: params.get('utm_source') || (via || 'finance-club'),
        utm_medium: params.get('utm_medium') || 'cross-promo',
        utm_campaign: params.get('utm_campaign') || 'finance-club-2026-05',
      } : {};
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: via ? `${via}-finance-club` : 'finance-club',
          access_code: code || '',
          referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
          ...utm,
        }),
      });
      setStatus('success');
      setUnlocked(true);
    } catch {
      setStatus('error');
    }
  };

  const partner = via === 'boucher' ? 'Nicolas Boucher' : (via ? via.charAt(0).toUpperCase() + via.slice(1) : 'A finance creator');
  const headlineSub = via === 'boucher'
    ? 'Nicolas vouched for us, so we are vouching for his members. 145+ AI prompts built for finance pros, free for AI Finance Club.'
    : '145+ AI prompts built for finance pros — reporting, scenario modelling, audit prep, board narrative, and ops automation. Free for community members.';

  const title = 'Finance Club — Free MidasTools Mega Pack | Midas Tools';
  const description = '145+ AI prompts for finance pros — reporting, scenario modelling, audit prep, board narrative, ops automation. Free for partner communities.';
  const url = 'https://www.midastools.co/finance-club';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .hero{max-width:760px;margin:0 auto;padding:80px 40px 56px;text-align:center}
        .pre-h1{display:inline-block;padding:6px 14px;background:rgba(255,200,0,0.08);color:var(--gold);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:24px;letter-spacing:1.5px;border:1px solid rgba(255,200,0,0.15)}
        h1{font-size:clamp(32px,5vw,56px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:18px;color:var(--gray-400);max-width:580px;margin:0 auto 32px;line-height:1.65}
        section{max-width:760px;margin:0 auto;padding:64px 40px}
        h2{font-size:clamp(26px,3.5vw,38px);font-weight:900;letter-spacing:-1px;margin-bottom:20px;line-height:1.15}
        h3{font-size:20px;font-weight:800;margin-bottom:10px;letter-spacing:-0.3px}
        .gate-box{max-width:480px;margin:0 auto}
        .gate-form{display:flex;flex-direction:column;gap:10px}
        .gate-input{font-size:15px;padding:14px 20px;border:2px solid var(--gray-800);background:var(--gray-900);border-radius:99px;outline:none;color:var(--text);font-family:inherit}
        .gate-input:focus{border-color:var(--gold)}
        .gate-btn{font-size:15px;font-weight:700;padding:14px 28px;background:var(--gold);color:#0F172A;border:none;border-radius:99px;cursor:pointer;white-space:nowrap;transition:opacity 0.15s;font-family:inherit}
        .gate-btn:hover{opacity:0.9}
        .gate-btn:disabled{opacity:0.6;cursor:not-allowed}
        .trust{font-size:13px;color:var(--gray-400);margin-top:14px}
        .trust strong{color:var(--text)}
        .success-msg{font-size:16px;font-weight:600;color:var(--gold);text-align:center;margin-top:8px}
        .download-box{max-width:520px;margin:24px auto 0;padding:24px;background:var(--gray-900);border:2px solid var(--gold);border-radius:14px}
        .download-box h3{margin-bottom:8px}
        .download-box p{font-size:14px;color:var(--gray-300);line-height:1.6;margin-bottom:14px}
        .download-btn{display:inline-block;padding:14px 28px;background:var(--gold);color:#0F172A;font-size:15px;font-weight:700;border-radius:99px;text-decoration:none}
        .prompt-block{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;margin-bottom:18px}
        .prompt-block.locked{filter:blur(5px);user-select:none;pointer-events:none}
        .p-tag{display:inline-block;padding:4px 10px;background:rgba(255,200,0,0.1);color:var(--gold);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:14px;letter-spacing:1px}
        .p-title{font-size:18px;font-weight:800;margin-bottom:8px;color:var(--text);line-height:1.4}
        .p-use{font-size:14px;color:var(--gray-300);line-height:1.6;margin-bottom:14px;font-style:italic}
        .copy-block{position:relative;background:#0B1120;border:1px solid var(--gray-800);border-radius:10px;padding:20px;font-family:'SF Mono',Menlo,monospace;font-size:13px;line-height:1.65;color:#E5E7EB;white-space:pre-wrap;overflow-x:auto;margin:0}
        .copy-btn{position:absolute;top:10px;right:10px;font-size:11px;font-weight:700;padding:6px 12px;background:var(--gold);color:#0F172A;border:none;border-radius:6px;cursor:pointer;font-family:inherit}
        .why-box{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;font-size:15px;color:var(--gray-300);line-height:1.7}
        .why-box strong{color:var(--text)}
        .upsell{background:linear-gradient(135deg,rgba(252,211,77,0.06),rgba(245,158,11,0.04));border:1px solid rgba(252,211,77,0.18);border-radius:18px;padding:48px 36px;text-align:center;margin-top:48px}
        .upsell h2{margin-bottom:14px}
        .upsell p{font-size:16px;color:var(--gray-300);margin-bottom:24px;line-height:1.65;max-width:540px;margin-left:auto;margin-right:auto}
        .upsell-btn{display:inline-block;padding:14px 32px;background:var(--gold);color:#0F172A;font-size:16px;font-weight:800;border-radius:99px;text-decoration:none}
        @media(max-width:600px){.hero{padding:48px 20px}section{padding:48px 20px}.upsell{padding:36px 20px}}
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="pre-h1">{via === 'boucher' ? 'AI FINANCE CLUB · MEMBERS-ONLY' : 'PARTNER COMMUNITIES · MEMBERS-ONLY'}</div>
        <h1>145+ AI prompts <span>built for finance pros.</span><br />Yours free.</h1>
        <p className="hero-sub">{headlineSub}</p>
        {!unlocked ? (
          <div className="gate-box">
            <form className="gate-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@yourfirm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="gate-input"
                disabled={status === 'loading'}
                aria-label="Email"
              />
              <input
                type="text"
                placeholder="Access code from the newsletter"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="gate-input"
                disabled={status === 'loading'}
                aria-label="Access code"
              />
              <button type="submit" className="gate-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Unlocking\u2026' : 'Get the Mega Pack'}
              </button>
            </form>
            {status === 'error' && <p style={{ color: '#F87171', fontSize: 14, marginTop: 8 }}>Something went wrong. Try again.</p>}
            <p className="trust">Free, instant access. <strong>No credit card.</strong> 1 email/month max.</p>
          </div>
        ) : (
          <div className="download-box">
            <h3>Mega Pack unlocked.</h3>
            <p>145+ prompts across 6 categories — copywriting, social, content, business operations, personal branding, productivity. ZIP file, ~80KB.</p>
            <a href={MEGA_PACK_ZIP} className="download-btn" download>Download .zip \u2193</a>
          </div>
        )}
      </div>

      {/* SAMPLE PROMPTS */}
      <section>
        <div className="section-label">Inside the kit \u2014 2 sample prompts</div>
        <h2>What you actually get.</h2>
        <p style={{fontSize:15,color:'var(--gray-400)',marginBottom:32,lineHeight:1.65}}>
          Below: 2 of the 145+ prompts from the Business Operations track. Variables in [BRACKETS] \u2014 fill in your numbers and run in Claude Opus 4.7 or ChatGPT-5. The full kit covers reporting, scenario modelling, audit prep, board narrative, hiring, SOPs, and ops automation.
        </p>

        {SAMPLE_PROMPTS.map((p, i) => (
          <div className={`prompt-block${unlocked ? '' : i > 0 ? ' locked' : ''}`} key={p.title}>
            <div className="p-tag">PROMPT {i + 1}</div>
            <div className="p-title">{p.title}</div>
            <div className="p-use">{p.use}</div>
            <div className="copy-block">
              {unlocked && (
                <button
                  className="copy-btn"
                  onClick={() => navigator.clipboard.writeText(p.body)}
                >Copy</button>
              )}
              {p.body}
            </div>
          </div>
        ))}
      </section>

      {/* WHY WE'RE DOING THIS */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Why this is free</div>
        <h2>Member perks, not affiliate tricks.</h2>
        <div className="why-box">
          <p style={{marginBottom:14}}>
            We sell prompt packs. <strong>{partner}{via ? "'s" : ''}</strong> audience is exactly the kind of pro who benefits most. Free perks are how communities thank their members \u2014 there's no affiliate cut, no upsell trick on this page.
          </p>
          <p style={{marginBottom:14}}>
            Your email goes only into our list (we send 1 email per month, max, and you can unsubscribe in one click). We don't share with {partner}. We don't share with anyone.
          </p>
          <p style={{marginBottom:0}}>
            If after using the prompts you want more \u2014 our $97 All Kits Bundle includes 12 packs across finance, ops, sales, content, and more. That's at the bottom of this page if you're curious. No pressure.
          </p>
        </div>
      </section>

      {/* SOFT UPSELL */}
      <section style={{paddingTop:0}}>
        <div className="upsell">
          <div className="section-label" style={{marginBottom:16}}>If the Mega Pack helped \u2014</div>
          <h2 style={{margin:'0 0 14px'}}>The All Kits Bundle.<br />12 packs. $97 once.</h2>
          <p>
            12 paid kits in one bundle: SaaS Founder, Email Marketing, Notion AI Templates, Resume & Career, Real Estate, Content Creator, Freelancer, Small Business, E-commerce, Image Pack, Video Pack, plus the Mega Pack you just got. ~1,500 prompts total. One-time payment, lifetime updates.
          </p>
          <a href={BUNDLE_URL} className="upsell-btn" target="_blank" rel="noopener noreferrer">See the All Kits Bundle \u2014 $97 \u2192</a>
          <p style={{marginTop:18,fontSize:13,color:'var(--gray-400)'}}>30-day refund. Stripe checkout, instant download.</p>
        </div>
      </section>

      <section style={{paddingTop:0,paddingBottom:80,textAlign:'center'}}>
        <p style={{fontSize:13,color:'var(--gray-400)',maxWidth:540,margin:'0 auto',lineHeight:1.6}}>
          Questions? Reply to any of our emails or write iam@armando.mx \u2014 a real human reads every one.
        </p>
      </section>
    </Layout>
  );
}
