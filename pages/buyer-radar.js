import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { trackEvent } from '../lib/track';

// One-click prefill so a curious visitor sees real leads in a single click.
const EXAMPLES = ['video editing', 'logo design', 'Shopify development', 'short-form content', 'web design', 'copywriting'];

const FREE_SEARCH_LIMIT = 2; // searches before the email gate
const PRO_URL = 'https://buy.stripe.com/7sYcN42BVaz70mg0pscMM0A'; // MidasTools Pro Pass — $39 one-time

export default function BuyerRadar() {
  const [service, setService] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(null);
  const [count, setCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [captureMsg, setCaptureMsg] = useState('');
  const [pro, setPro] = useState(false);
  const [proCode, setProCode] = useState('');
  const [proInput, setProInput] = useState('');
  const [proMsg, setProMsg] = useState('');

  useEffect(() => {
    try {
      if (localStorage.getItem('br_unlocked') === '1') setUnlocked(true);
      const savedCode = localStorage.getItem('om_pro_code'); // one Pro Pass unlocks every tool
      if (savedCode) { setPro(true); setProCode(savedCode); }
    } catch {}
  }, []);

  const gated = !pro && count >= FREE_SEARCH_LIMIT && !unlocked;

  async function handleVerifyPro(e) {
    e.preventDefault();
    const code = proInput.trim().toUpperCase();
    if (!code) return;
    setProMsg('Checking…');
    try {
      const res = await fetch('/api/verify-pro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (data.valid) {
        try { localStorage.setItem('om_pro_code', code); } catch {}
        setPro(true); setProCode(code); setProMsg('');
      } else {
        setProMsg("That code didn't work. Check your receipt email, or contact iam@armando.mx.");
      }
    } catch {
      setProMsg('Network error — try again.');
    }
  }

  async function handleSearch() {
    if (!service.trim() || service.trim().length < 3) {
      setError('Tell us the service you sell — e.g. "video editing".');
      return;
    }
    if (gated) return;
    setError('');
    setLoading(true);
    setResult(null);
    setCopied(null);
    try {
      const res = await fetch('/api/buyer-radar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, proCode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Something went wrong. Try again.');
      } else {
        setResult(data);
        setCount(c => c + 1);
        // Instrument real tool usage — the kill-criterion metric.
        trackEvent('buyer_radar_search', {
          engine: data.engine || 'unknown',
          leads: Array.isArray(data.leads) ? data.leads.length : 0,
          pro: !!data.pro,
        });
      }
    } catch {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }

  function copy(text, key) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  async function handleCapture(e) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setCaptureMsg('');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'buyer-radar' }),
      });
      try { localStorage.setItem('br_unlocked', '1'); } catch {}
      setUnlocked(true);
      setCaptureMsg('Unlocked. Keep hunting — and check your inbox for 5 money-prompts.');
    } catch {
      setUnlocked(true);
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Buyer-Radar — Find Clients Who Are Hiring Right Now',
    url: 'https://www.midastools.co/buyer-radar',
    description: 'Free AI tool that scans Reddit for people asking to hire your service right now — real, recent leads with a ready-to-send reply for each. Built for freelancers, editors, designers, developers and agencies.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const leads = result?.leads || [];

  return (
    <Layout>
      <Head>
        <title>Buyer-Radar — Find People Hiring Your Service on Reddit Right Now | MidasTools</title>
        <meta name="description" content="Type what you do. Buyer-Radar scans Reddit for real, recent posts where someone is asking to hire that — each with a ready-to-send reply. Free AI lead-finder for freelancers, editors, designers and developers." />
        <meta property="og:title" content="Buyer-Radar — find clients who are hiring right now" />
        <meta property="og:description" content="Free AI tool that surfaces real Reddit buyers looking to hire your service, with a drafted reply for each. Stop pitching into the void." />
        <meta property="og:url" content="https://www.midastools.co/buyer-radar" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/buyer-radar" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .br-page { max-width: 820px; margin: 0 auto; padding: 72px 40px; }
        .br-hero { text-align: center; margin-bottom: 44px; }
        .br-hero h1 { font-size: clamp(32px, 5.5vw, 54px); font-weight: 900; line-height: 1.08; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .br-hero h1 span { color: var(--accent); }
        .br-hero p { font-size: 18px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.65; }

        .br-form { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 32px; margin-bottom: 32px; }
        .br-group label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .br-group input[type=text] {
          width: 100%; padding: 16px; border: 1px solid var(--border); border-radius: 12px;
          font-size: 16px; font-family: inherit; background: var(--bg); color: var(--text); outline: none; transition: border-color 0.15s;
        }
        .br-group input:focus { border-color: var(--accent); }
        .br-examples { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
        .br-ex { background: none; border: 1px solid var(--border); border-radius: 100px; padding: 6px 14px; font-size: 13px; font-weight: 600; color: var(--text-secondary); cursor: pointer; font-family: inherit; transition: all 0.15s; }
        .br-ex:hover { border-color: var(--accent); color: var(--accent); }

        .br-btn { width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none; border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer; font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; margin-top: 20px; }
        .br-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }
        .br-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .br-err { color: #DC2626; font-size: 14px; margin-top: 12px; text-align: center; }
        .br-note { text-align: center; font-size: 13px; color: var(--text-tertiary); margin-top: 14px; }

        .lead { border: 1px solid var(--border); border-radius: 16px; padding: 22px 24px; margin-bottom: 16px; background: var(--bg); }
        .lead-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; margin-bottom: 8px; }
        .lead-sub { font-size: 12px; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.5px; }
        .lead-score { font-size: 12px; font-weight: 800; padding: 3px 10px; border-radius: 100px; white-space: nowrap; }
        .lead-title { font-size: 16px; font-weight: 700; color: var(--text); line-height: 1.4; margin-bottom: 6px; }
        .lead-why { font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px; }
        .lead-why b { color: var(--text); }
        .lead-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .lead-link { display: inline-block; font-size: 13px; font-weight: 700; color: var(--accent); text-decoration: none; border: 1px solid var(--border); border-radius: 100px; padding: 8px 16px; }
        .lead-link:hover { border-color: var(--accent); }
        .reply-box { margin-top: 14px; border-top: 1px dashed var(--border); padding-top: 14px; }
        .reply-label { font-size: 11px; font-weight: 800; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
        .reply-body { font-size: 14px; color: var(--text); line-height: 1.65; white-space: pre-wrap; }
        .reply-locked { position: relative; }
        .reply-locked .reply-body { filter: blur(5px); user-select: none; opacity: 0.7; }
        .reply-unlock { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .reply-unlock a { background: var(--text); color: #fff; font-size: 13px; font-weight: 700; padding: 10px 18px; border-radius: 100px; text-decoration: none; }
        .mini-copy { background: none; border: 1px solid var(--border); border-radius: 8px; padding: 5px 11px; font-size: 12px; font-weight: 600; cursor: pointer; color: var(--text-secondary); font-family: inherit; }
        .mini-copy:hover { border-color: var(--accent); color: var(--accent); }

        .manual-card { border: 1px solid var(--border); border-radius: 16px; padding: 24px; background: var(--bg); }
        .manual-card a { display: block; color: var(--accent); font-weight: 600; padding: 10px 0; border-bottom: 1px solid var(--border); text-decoration: none; }

        .gate { background: var(--text); color: #fff; border-radius: 20px; padding: 36px 32px; text-align: center; margin: 24px 0; }
        .gate h3 { font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 8px; }
        .gate p { color: rgba(255,255,255,0.72); font-size: 15px; margin-bottom: 20px; }
        .gate form { display: flex; gap: 8px; max-width: 420px; margin: 0 auto; }
        .gate input { flex: 1; padding: 14px 16px; border: none; border-radius: 100px; font-size: 15px; font-family: inherit; }
        .gate button { background: var(--accent); color: #fff; border: none; border-radius: 100px; padding: 14px 24px; font-weight: 800; cursor: pointer; font-family: inherit; }

        .pro { background: linear-gradient(135deg, #111827 0%, #1E293B 100%); border-radius: 20px; padding: 44px 36px; text-align: center; margin: 40px 0; }
        .pro h2 { font-size: 28px; font-weight: 900; color: #fff; margin-bottom: 10px; }
        .pro > p { color: rgba(255,255,255,0.72); font-size: 16px; max-width: 520px; margin: 0 auto 26px; line-height: 1.6; }
        .pro-feats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; max-width: 520px; margin: 0 auto 28px; text-align: left; }
        .pro-feat { display: flex; gap: 10px; align-items: flex-start; color: rgba(255,255,255,0.9); font-size: 14px; }
        .pro-feat .ck { color: #3B5FFF; font-weight: 900; }
        .pro-cta { display: inline-block; background: #fff; color: #111827; padding: 16px 40px; border-radius: 100px; font-weight: 800; font-size: 16px; text-decoration: none; transition: transform 0.15s; }
        .pro-cta:hover { transform: translateY(-2px); }
        .pro .fine { color: rgba(255,255,255,0.5); font-size: 13px; margin-top: 14px; }

        .seo { margin: 48px 0; }
        .seo h2 { font-size: 26px; font-weight: 800; color: var(--text); margin-bottom: 14px; }
        .seo h3 { font-size: 18px; font-weight: 700; color: var(--text); margin: 24px 0 10px; }
        .seo p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 14px; }
        .seo li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 6px; }

        @media(max-width:700px) {
          .br-page { padding: 44px 20px; }
          .br-form { padding: 22px; }
          .pro-feats { grid-template-columns: 1fr; }
          .gate form { flex-direction: column; }
        }
      `}</style>

      <div className="br-page">
        <div className="br-hero">
          <div className="badge" style={{ marginBottom: 20 }}>AI Money Tool · Free</div>
          <h1><span>Buyer-Radar</span></h1>
          <p>Stop pitching into the void. Type what you do — Buyer-Radar scans Reddit for <strong>real people asking to hire that, right now</strong>, and hands you each lead with a ready-to-send reply.</p>
        </div>

        <div className="br-form">
          <div className="br-group">
            <label>What service do you sell?</label>
            <input
              type="text"
              placeholder="e.g. video editing, logo design, Shopify development…"
              value={service}
              onChange={e => setService(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
            />
            {!service.trim() && !result && (
              <div className="br-examples">
                {EXAMPLES.map(ex => (
                  <button key={ex} type="button" className="br-ex" onClick={() => { setService(ex); setError(''); }}>{ex}</button>
                ))}
              </div>
            )}
          </div>

          <button className="br-btn" onClick={handleSearch} disabled={loading || gated}>
            {loading ? 'Scanning Reddit for buyers…' : result ? 'Find More Buyers →' : 'Find Buyers Hiring Now →'}
          </button>
          {error && <div className="br-err">{error}</div>}
          {!result && !error && <div className="br-note">Free. No signup to start. Scans the last 30 days of Reddit.</div>}
        </div>

        {/* Manual mode (Firecrawl key not yet wired) */}
        {result?.mode === 'manual' && (
          <div className="manual-card">
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 0, lineHeight: 1.6 }}>
              Here are the live Reddit searches that surface people hiring a <b style={{ color: 'var(--text)' }}>{result.service}</b> right now — click to see real buyers:
            </p>
            {result.searchUrls?.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">{s.label} →</a>
            ))}
          </div>
        )}

        {/* Results */}
        {result && Array.isArray(result.leads) && (
          <div style={{ marginBottom: 8 }}>
            {result.message && leads.length === 0 && (
              <div className="lead" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>{result.message}</div>
            )}
            {leads.length > 0 && (
              <p style={{ fontSize: 14, color: 'var(--text-tertiary)', marginBottom: 16 }}>
                Found <b style={{ color: 'var(--text)' }}>{leads.length}</b> potential {leads.length === 1 ? 'buyer' : 'buyers'} for <b style={{ color: 'var(--text)' }}>{result.service}</b>{result.scanned ? ` (scanned ${result.scanned} recent posts)` : ''}. Highest intent first.
              </p>
            )}
            {leads.map((l, i) => {
              const showReply = pro || i === 0; // free users see the #1 reply, rest are Pro
              const score = l.intent;
              const scoreColor = score == null ? { bg: 'var(--border)', fg: 'var(--text-secondary)' }
                : score >= 75 ? { bg: 'rgba(16,185,129,0.12)', fg: '#059669' }
                : score >= 50 ? { bg: 'rgba(59,95,255,0.10)', fg: 'var(--accent)' }
                : { bg: 'var(--border)', fg: 'var(--text-secondary)' };
              return (
                <div className="lead" key={i}>
                  <div className="lead-top">
                    <div>
                      <span className="lead-sub">r/{l.subreddit || 'reddit'}</span>
                      <div className="lead-title" style={{ marginTop: 6 }}>{l.title}</div>
                    </div>
                    {score != null && (
                      <span className="lead-score" style={{ background: scoreColor.bg, color: scoreColor.fg }}>{score}% intent</span>
                    )}
                  </div>
                  {l.why && <div className="lead-why"><b>Why it's a lead:</b> {l.why}</div>}
                  <div className="lead-actions">
                    <a className="lead-link" href={l.url} target="_blank" rel="noopener noreferrer">Open the post on Reddit →</a>
                  </div>
                  {l.reply && (
                    <div className="reply-box">
                      <div className="reply-label">
                        <span>Your ready-to-send reply</span>
                        {showReply && <button className="mini-copy" onClick={() => copy(l.reply, `r${i}`)}>{copied === `r${i}` ? 'Copied!' : 'Copy'}</button>}
                      </div>
                      {showReply ? (
                        <div className="reply-body">{l.reply}</div>
                      ) : (
                        <div className="reply-locked">
                          <div className="reply-body">{l.reply}</div>
                          <div className="reply-unlock">
                            <a href={PRO_URL} data-cta="buyer-radar-reply-lock-39">🔒 Unlock every reply — Pro $39 →</a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            {leads.length > 1 && !pro && (
              <p style={{ fontSize: 13, color: 'var(--text-tertiary)', textAlign: 'center', marginTop: 4 }}>
                You're seeing the #1 reply free. <a href={PRO_URL} data-cta="buyer-radar-replies-note-39" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>Go Pro to unlock all {leads.length} drafted replies →</a>
              </p>
            )}
          </div>
        )}

        {/* Email gate */}
        {gated && (
          <div className="gate">
            <h3>You found real buyers — keep hunting free</h3>
            <p>Drop your email for unlimited daily searches + 5 money-making AI prompts to land the gig once you reply.</p>
            <form onSubmit={handleCapture}>
              <input type="email" placeholder="you@work.com" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit">Unlock</button>
            </form>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 16, marginBottom: 0 }}>
              Want every drafted reply + unlimited searches? <a href={PRO_URL} data-cta="gate-pro-pass-39" style={{ color: '#93B4FF', fontWeight: 700, textDecoration: 'none' }}>Go Pro ($39 lifetime) →</a>
            </p>
          </div>
        )}
        {unlocked && captureMsg && (
          <div className="gate" style={{ padding: '22px 32px' }}>
            <p style={{ color: '#6EE7B7', fontSize: 15, margin: 0, fontWeight: 600 }}>{captureMsg}</p>
          </div>
        )}

        {/* Pro */}
        <div className="pro" id="pro">
          {pro ? (
            <>
              <div className="badge" style={{ background: 'rgba(110,231,183,0.2)', borderColor: 'rgba(110,231,183,0.4)', color: '#6EE7B7', marginBottom: 16 }}>⚡ Pro Active</div>
              <h2>You're Pro. Go close them.</h2>
              <p>Unlimited searches + every drafted reply unlocked on this device. Code: <span style={{ fontFamily: 'monospace', color: '#93B4FF' }}>{proCode}</span></p>
            </>
          ) : (
            <>
              <div className="badge" style={{ background: 'rgba(59,95,255,0.2)', borderColor: 'rgba(59,95,255,0.4)', color: '#93B4FF', marginBottom: 16 }}>MidasTools Pro Pass</div>
              <h2>One reply lands the gig. Pro unlocks them all.</h2>
              <p>The free tool shows you the buyers and one drafted reply. Pro gives you every reply, unlimited daily searches, and our best AI — one payment, lifetime, no subscription.</p>
              <div className="pro-feats">
                <div className="pro-feat"><span className="ck">✓</span> Every drafted reply, ready to send</div>
                <div className="pro-feat"><span className="ck">✓</span> Unlimited daily buyer searches</div>
                <div className="pro-feat"><span className="ck">✓</span> Our best AI for sharper buyer detection</div>
                <div className="pro-feat"><span className="ck">✓</span> Every MidasTools money-tool, unlocked</div>
              </div>
              <a href={PRO_URL} className="pro-cta" data-cta="buyer-radar-pro-pass-39">Get Pro Pass — $39 lifetime →</a>
              <div className="fine">One payment. Yours forever. 30-day money-back guarantee.</div>
              <form onSubmit={handleVerifyPro} style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '24px auto 0' }}>
                <input type="text" placeholder="Already Pro? Enter your code" value={proInput} onChange={e => setProInput(e.target.value)} style={{ flex: 1, padding: '14px 16px', border: 'none', borderRadius: 100, fontSize: 15, fontFamily: 'inherit' }} />
                <button type="submit" style={{ background: '#3B5FFF', color: '#fff', border: 'none', borderRadius: 100, padding: '14px 24px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}>Activate</button>
              </form>
              {proMsg && <div style={{ color: '#FCA5A5', fontSize: 14, marginTop: 12 }}>{proMsg}</div>}
            </>
          )}
        </div>

        {/* SEO content */}
        <div className="seo">
          <h2>Find clients who are already trying to hire you</h2>
          <p>Cold outreach is hard because you're interrupting people who weren't thinking about you. Buyer-Radar flips it: it finds people who are <em>actively asking to hire</em> your exact service on Reddit — in r/forhire and in the niche communities where they hang out — so you reply to warm intent instead of pitching strangers.</p>

          <h3>How it works (15 seconds)</h3>
          <ul>
            <li><strong>Type your service</strong> — "video editing", "logo design", "Shopify development", whatever you sell.</li>
            <li><strong>We scan the last 30 days of Reddit</strong> across r/forhire and niche subs for real hire-intent posts.</li>
            <li><strong>AI filters the buyers</strong> from the freelancers-advertising and the just-asking-advice noise, and scores how strong each lead is.</li>
            <li><strong>Reply with the drafted message</strong> — tailored to their post, built to start a conversation, not to read like a copy-paste ad.</li>
          </ul>

          <h3>Why Reddit?</h3>
          <p>Every day, founders, YouTubers, store owners and small businesses post "I need someone to…" on Reddit — and most freelancers never see it because it's buried across hundreds of subreddits. Buyer-Radar surfaces those posts in one place. One landed gig is worth hundreds or thousands; the tool's job is to put you in front of the buyer before fifty other freelancers do.</p>

          <h2>Who it's for</h2>
          <p>Video editors, designers, developers, copywriters, marketers, VAs, and any freelancer or agency that wins work by reaching the right person at the right moment. If you sell a service, someone on Reddit is asking to hire it this week.</p>

          <h2>More free money-tools</h2>
          <p>Buyer-Radar is part of MidasTools — AI tools built to put money in your pocket. Once you've found the buyer, use the <Link href="/outreach-machine" style={{ color: 'var(--accent)', fontWeight: 600 }}>Outreach Machine</Link> to write the follow-up that books the call. One Pro Pass unlocks every tool.</p>
        </div>

        {/* FAQ */}
        <div className="seo">
          <h2>FAQ</h2>
          {[
            { q: 'Are these real, current leads?', a: 'Yes. Buyer-Radar searches real Reddit posts from the last 30 days and the AI keeps only the ones where someone is genuinely looking to hire — dropping freelancers advertising themselves and people just asking for advice.' },
            { q: 'Is it free?', a: 'Yes — run buyer searches and see your top lead\'s reply free. Drop your email for unlimited daily searches. Pro unlocks every drafted reply and our best AI for sharper buyer detection.' },
            { q: 'Will my reply look like spam?', a: 'No. Each reply references the buyer\'s specific post, leads with credibility instead of a pitch, and ends with a low-friction question — the way a real, helpful freelancer would respond. You add a portfolio link and any personal detail in the bracketed spot.' },
            { q: 'What services work best?', a: 'Anything with steady Reddit hire-intent: video/photo editing, design, web/app development, copywriting, marketing, VA work, and more. Broader terms ("video editing") surface more buyers than narrow sub-niches.' },
          ].map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', margin: '0 0 8px' }}>{f.q}</h3>
              <p style={{ marginBottom: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
