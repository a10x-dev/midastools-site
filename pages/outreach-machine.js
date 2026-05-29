import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CHANNELS = [
  { id: 'email', label: 'Cold Email', desc: 'Get replies, not just opens' },
  { id: 'linkedin', label: 'LinkedIn DM', desc: 'Short, native, scroll-stopping' },
  { id: 'both', label: 'Both', desc: 'Email + DM versions' },
];

const TONES = [
  { id: 'direct', label: 'Direct', desc: 'Confident, no fluff' },
  { id: 'warm', label: 'Warm', desc: 'Human & curious' },
  { id: 'bold', label: 'Bold', desc: 'Pattern-interrupt' },
  { id: 'professional', label: 'Professional', desc: 'Polished & credible' },
];

const FREE_LIMIT = 3; // generations before the email gate

export default function OutreachMachine() {
  const [offer, setOffer] = useState('');
  const [prospect, setProspect] = useState('');
  const [channel, setChannel] = useState('email');
  const [tone, setTone] = useState('direct');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(null);
  const [count, setCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [captureMsg, setCaptureMsg] = useState('');

  useEffect(() => {
    try { if (localStorage.getItem('om_unlocked') === '1') setUnlocked(true); } catch {}
  }, []);

  const gated = count >= FREE_LIMIT && !unlocked;

  async function handleGenerate() {
    if (!offer.trim() || offer.trim().length < 5) {
      setError('Tell us what you sell — even one sentence works.');
      return;
    }
    if (gated) return;
    setError('');
    setLoading(true);
    setResult(null);
    setCopied(null);
    try {
      const res = await fetch('/api/outreach-machine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offer, prospect, channel, tone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Something went wrong. Try again.');
      } else {
        setResult(data.result);
        setCount(c => c + 1);
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
        body: JSON.stringify({ email, source: 'outreach-machine' }),
      });
      try { localStorage.setItem('om_unlocked', '1'); } catch {}
      setUnlocked(true);
      setCaptureMsg('Unlocked. Keep generating — and check your inbox for 5 money-prompts.');
    } catch {
      // Even if the network hiccups, don't trap the user.
      setUnlocked(true);
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Outreach Machine — AI Cold Email & DM Generator',
    url: 'https://www.midastools.co/outreach-machine',
    description: 'Free AI tool that writes personalized cold emails, LinkedIn DMs, and 3-touch follow-up sequences that book sales calls. Built for founders, freelancers, agencies and consultants.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <Layout>
      <Head>
        <title>The Outreach Machine — Free AI Cold Email & DM Generator That Books Calls | MidasTools</title>
        <meta name="description" content="Paste what you sell + who you're targeting. Get a personalized cold email, LinkedIn DM, and 3-touch follow-up sequence engineered to get replies and book sales calls. Free AI tool." />
        <meta property="og:title" content="The Outreach Machine — AI that books you sales calls" />
        <meta property="og:description" content="Free AI tool: personalized cold email + DM + follow-up sequence that gets replies. Built to make you money." />
        <meta property="og:url" content="https://www.midastools.co/outreach-machine" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/outreach-machine" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .om-page { max-width: 820px; margin: 0 auto; padding: 72px 40px; }
        .om-hero { text-align: center; margin-bottom: 44px; }
        .om-hero h1 { font-size: clamp(32px, 5.5vw, 54px); font-weight: 900; line-height: 1.08; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .om-hero h1 span { color: var(--accent); }
        .om-hero p { font-size: 18px; color: var(--text-secondary); max-width: 580px; margin: 0 auto; line-height: 1.65; }

        .om-form { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 32px; margin-bottom: 32px; }
        .om-group { margin-bottom: 22px; }
        .om-group label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .om-group .hint { font-weight: 500; color: var(--text-tertiary); font-size: 12px; }
        .om-group textarea, .om-group input[type=text] {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border); border-radius: 12px;
          font-size: 15px; font-family: inherit; background: var(--bg); color: var(--text);
          outline: none; transition: border-color 0.15s; resize: vertical; line-height: 1.5;
        }
        .om-group textarea:focus, .om-group input:focus { border-color: var(--accent); }

        .om-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .chip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .chip-grid.tones { grid-template-columns: repeat(4, 1fr); }
        .chip {
          border: 2px solid var(--border); border-radius: 12px; padding: 12px 10px; cursor: pointer;
          transition: border-color 0.15s, background 0.15s; text-align: center;
        }
        .chip:hover { border-color: var(--text-tertiary); }
        .chip.active { border-color: var(--accent); background: rgba(59,95,255,0.04); }
        .chip .c-label { font-size: 13px; font-weight: 700; color: var(--text); }
        .chip .c-desc { font-size: 11px; color: var(--text-secondary); margin-top: 2px; }

        .om-btn {
          width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none;
          border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer;
          font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; margin-top: 8px;
        }
        .om-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }
        .om-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .om-err { color: #DC2626; font-size: 14px; margin-top: 12px; text-align: center; }

        .out-card { border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-bottom: 16px; background: var(--bg); }
        .out-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 12px; }
        .out-head h3 { font-size: 13px; font-weight: 800; color: var(--accent); letter-spacing: 0.5px; text-transform: uppercase; }
        .out-body { font-size: 15px; color: var(--text); line-height: 1.7; white-space: pre-wrap; }
        .out-subject { font-size: 17px; font-weight: 700; color: var(--text); }
        .mini-copy { background: none; border: 1px solid var(--border); border-radius: 8px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer; color: var(--text-secondary); font-family: inherit; white-space: nowrap; }
        .mini-copy:hover { border-color: var(--accent); color: var(--accent); }
        .fu { border-left: 3px solid var(--accent); padding: 10px 0 10px 16px; margin-bottom: 14px; }
        .fu .when { font-size: 12px; font-weight: 800; color: var(--accent); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }

        .gate { background: var(--text); color: #fff; border-radius: 20px; padding: 36px 32px; text-align: center; margin: 24px 0; }
        .gate h3 { font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 8px; }
        .gate p { color: rgba(255,255,255,0.72); font-size: 15px; margin-bottom: 20px; }
        .gate form { display: flex; gap: 8px; max-width: 420px; margin: 0 auto; }
        .gate input { flex: 1; padding: 14px 16px; border: none; border-radius: 100px; font-size: 15px; font-family: inherit; }
        .gate button { background: var(--accent); color: #fff; border: none; border-radius: 100px; padding: 14px 24px; font-weight: 800; cursor: pointer; font-family: inherit; }
        .gate .ok { color: #6EE7B7; font-size: 14px; margin-top: 14px; }

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
          .om-page { padding: 44px 20px; }
          .om-form { padding: 22px; }
          .om-row { grid-template-columns: 1fr; }
          .chip-grid, .chip-grid.tones { grid-template-columns: repeat(2, 1fr); }
          .pro-feats { grid-template-columns: 1fr; }
          .gate form { flex-direction: column; }
        }
      `}</style>

      <div className="om-page">
        <div className="om-hero">
          <div className="badge" style={{ marginBottom: 20 }}>AI Money Tool · Free</div>
          <h1>The <span>Outreach Machine</span></h1>
          <p>Paste what you sell and who you're chasing. Get a cold email, a LinkedIn DM, and a 3-touch follow-up sequence engineered to get replies and <strong>book sales calls</strong>. Your next client is one good message away.</p>
        </div>

        <div className="om-form">
          <div className="om-group">
            <label>What do you sell? <span className="hint">— and the outcome you deliver</span></label>
            <textarea
              rows={3}
              placeholder="e.g. I help B2B coaches book 10–15 qualified sales calls a month with done-for-you LinkedIn outreach."
              value={offer}
              onChange={e => setOffer(e.target.value)}
            />
          </div>

          <div className="om-group">
            <label>Who are you reaching out to? <span className="hint">— paste their name, role, company, or a line from their site / LinkedIn (optional but makes it 10x better)</span></label>
            <textarea
              rows={3}
              placeholder="e.g. Sarah Chen, Founder of GrowthLab — a 6-person marketing agency. Their site says 'we scale DTC brands past $1M.'"
              value={prospect}
              onChange={e => setProspect(e.target.value)}
            />
          </div>

          <div className="om-row" style={{ marginBottom: 22 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Channel</label>
              <div className="chip-grid">
                {CHANNELS.map(c => (
                  <div key={c.id} className={`chip${channel === c.id ? ' active' : ''}`} onClick={() => setChannel(c.id)}>
                    <div className="c-label">{c.label}</div>
                    <div className="c-desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="om-group">
            <label>Tone</label>
            <div className="chip-grid tones">
              {TONES.map(t => (
                <div key={t.id} className={`chip${tone === t.id ? ' active' : ''}`} onClick={() => setTone(t.id)}>
                  <div className="c-label">{t.label}</div>
                  <div className="c-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <button className="om-btn" onClick={handleGenerate} disabled={loading || gated}>
            {loading ? 'Writing your outreach…' : result ? 'Generate Again →' : 'Write My Outreach →'}
          </button>
          {error && <div className="om-err">{error}</div>}
        </div>

        {/* Output */}
        {result && (
          <div style={{ marginBottom: 8 }}>
            {(channel !== 'linkedin') && (
              <>
                <div className="out-card">
                  <div className="out-head">
                    <h3>Subject Line</h3>
                    <button className="mini-copy" onClick={() => copy(result.subject, 'subj')}>{copied === 'subj' ? 'Copied!' : 'Copy'}</button>
                  </div>
                  <div className="out-subject">{result.subject}</div>
                </div>
                <div className="out-card">
                  <div className="out-head">
                    <h3>Cold Email</h3>
                    <button className="mini-copy" onClick={() => copy(result.email, 'email')}>{copied === 'email' ? 'Copied!' : 'Copy email'}</button>
                  </div>
                  <div className="out-body">{result.email}</div>
                </div>
              </>
            )}

            {(channel === 'linkedin' || channel === 'both') && result.dm && (
              <div className="out-card">
                <div className="out-head">
                  <h3>LinkedIn / DM Version</h3>
                  <button className="mini-copy" onClick={() => copy(result.dm, 'dm')}>{copied === 'dm' ? 'Copied!' : 'Copy DM'}</button>
                </div>
                <div className="out-body">{result.dm}</div>
              </div>
            )}

            {Array.isArray(result.followups) && result.followups.length > 0 && (
              <div className="out-card">
                <div className="out-head">
                  <h3>Follow-Up Sequence (this is where the money is)</h3>
                  <button className="mini-copy" onClick={() => copy(result.followups.map(f => `${f.when}: ${f.message}`).join('\n\n'), 'fus')}>{copied === 'fus' ? 'Copied!' : 'Copy all'}</button>
                </div>
                {result.followups.map((f, i) => (
                  <div className="fu" key={i}>
                    <div className="when">{f.when}</div>
                    <div className="out-body" style={{ fontSize: 14 }}>{f.message}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Email gate */}
        {gated && (
          <div className="gate">
            <h3>You're onto something — keep going free</h3>
            <p>Drop your email to unlock unlimited generations + we'll send you 5 money-making AI prompts (the competitor-teardown one alone is worth it).</p>
            <form onSubmit={handleCapture}>
              <input type="email" placeholder="you@work.com" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit">Unlock</button>
            </form>
            {captureMsg && <div className="ok">{captureMsg}</div>}
          </div>
        )}

        {/* Pro upsell */}
        <div className="pro">
          <div className="badge" style={{ background: 'rgba(59,95,255,0.2)', borderColor: 'rgba(59,95,255,0.4)', color: '#93B4FF', marginBottom: 16 }}>MidasTools Pro</div>
          <h2>Turn this into a client machine</h2>
          <p>The free tool writes one great message at a time. Pro runs your whole pipeline.</p>
          <div className="pro-feats">
            <div className="pro-feat"><span className="ck">✓</span> Unlimited AI generations (our best model)</div>
            <div className="pro-feat"><span className="ck">✓</span> Save & reuse winning campaigns</div>
            <div className="pro-feat"><span className="ck">✓</span> Bulk mode — paste 10 prospects, get 10 tailored emails</div>
            <div className="pro-feat"><span className="ck">✓</span> Every MidasTools money-tool, unlocked</div>
          </div>
          <a href="#" className="pro-cta" onClick={(e) => { e.preventDefault(); document.getElementById('pro-waitlist-email')?.focus(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>
            Get early access — 50% off launch →
          </a>
          <div className="fine">Launching this week. Founding members lock in the lowest price forever.</div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const el = document.getElementById('pro-waitlist-email');
              const v = el?.value || '';
              if (!v.includes('@')) return;
              try {
                await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: v, source: 'outreach-pro-waitlist' }) });
              } catch {}
              if (el) el.value = '';
              const note = document.getElementById('pro-waitlist-note');
              if (note) note.textContent = "You're on the founding-member list. We'll email you the moment Pro opens.";
            }}
            style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '22px auto 0' }}
          >
            <input id="pro-waitlist-email" type="email" placeholder="you@work.com" required style={{ flex: 1, padding: '14px 16px', border: 'none', borderRadius: 100, fontSize: 15, fontFamily: 'inherit' }} />
            <button type="submit" style={{ background: '#3B5FFF', color: '#fff', border: 'none', borderRadius: 100, padding: '14px 24px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}>Notify me</button>
          </form>
          <div id="pro-waitlist-note" style={{ color: '#6EE7B7', fontSize: 14, marginTop: 14, minHeight: 18 }}></div>
        </div>

        {/* SEO content */}
        <div className="seo">
          <h2>Cold outreach that actually books calls</h2>
          <p>Most cold emails die in the first line. "I hope this email finds you well." "My name is X and I wanted to reach out." Delete. The Outreach Machine writes the opposite: a specific, prospect-relevant opener, a tight value line, and a low-friction ask that makes replying easy — the structure that actually gets responses.</p>

          <h3>How to use it (60 seconds)</h3>
          <ul>
            <li><strong>Describe what you sell</strong> — and the concrete outcome you deliver, not just features.</li>
            <li><strong>Paste your prospect</strong> — their name, role, company, or a line straight from their website or LinkedIn. The more real detail, the sharper the personalization.</li>
            <li><strong>Pick channel + tone</strong> — cold email, LinkedIn DM, or both.</li>
            <li><strong>Generate</strong> — get the message + a 3-touch follow-up sequence. Copy, personalize the brackets, send.</li>
          </ul>

          <h3>Why follow-ups are where the money is</h3>
          <p>Most replies come on touch 2, 3, or 4 — but most people send touch 1 and quit. The Outreach Machine writes a full sequence with a different angle each time (a useful resource, a quick proof point, a graceful break-up) so you stay in front of prospects without being annoying. That's the difference between "I tried cold outreach, it didn't work" and a booked calendar.</p>

          <h2>Who it's for</h2>
          <p>Founders chasing their first 10 customers. Freelancers and agencies who need a steadier client pipeline. Coaches and consultants who hate "selling." B2B operators who know exactly who they want to work with — they just need the words.</p>

          <h2>More free money-tools</h2>
          <p>The Outreach Machine is part of MidasTools — AI tools built to put money in your pocket. While you're here, try the <Link href="/prompt-generator" style={{ color: 'var(--accent)', fontWeight: 600 }}>Prompt Generator</Link> or grab the <Link href="/freelancer-kit" style={{ color: 'var(--accent)', fontWeight: 600 }}>Freelancer Kit</Link> for proposals, pricing, and client-management prompts.</p>
        </div>

        {/* FAQ */}
        <div className="seo">
          <h2>FAQ</h2>
          {[
            { q: 'Is the Outreach Machine really free?', a: 'Yes. Generate cold emails, DMs, and follow-up sequences free. Drop your email to keep going unlimited. Pro adds our best AI model, saved campaigns, and bulk mode.' },
            { q: 'Will the messages sound like a robot wrote them?', a: 'No. The tool is built on the cold-outreach rules that actually get replies — specific openers, tight value, low-friction CTAs, no corporate filler. You add the final personal touches in the bracketed spots.' },
            { q: 'Do I need to paste a prospect?', a: 'It works without one (you\'ll get a strong template with placeholders), but pasting real details about who you\'re targeting — a line from their site or LinkedIn — makes the output dramatically more personalized.' },
            { q: 'What should I do with the output?', a: 'Copy it, fill in any [bracketed] placeholders, and send. Use the follow-up sequence over the next ~2 weeks. Reply rates climb with each well-timed, value-led touch.' },
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
