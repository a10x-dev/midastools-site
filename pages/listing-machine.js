import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { trackEvent } from '../lib/track';
import { submitSubscribe } from '../lib/subscribe';

const PLATFORMS = [
  { id: 'etsy', label: 'Etsy', desc: '13 tags + SEO title' },
  { id: 'shopify', label: 'Shopify', desc: 'Store product page' },
  { id: 'amazon', label: 'Amazon', desc: 'Bullets + keywords' },
  { id: 'gumroad', label: 'Gumroad', desc: 'Digital products' },
  { id: 'ebay', label: 'eBay', desc: 'Search-optimized' },
];

const VIBES = [
  { id: 'cozy', label: 'Cozy', desc: 'Warm & inviting' },
  { id: 'premium', label: 'Premium', desc: 'Elevated & minimal' },
  { id: 'playful', label: 'Playful', desc: 'Fun & bold' },
  { id: 'clean', label: 'Clean', desc: 'Clear & pro' },
];

// One-click prefill so a curious visitor sees real AI output in a single click.
const EXAMPLE = {
  product: 'Ghibli-style cozy cottage art print — instant digital download, 5 sizes (A4, A3, 11x14, 16x20, 24x36). Soft watercolor, warm autumn palette. Printable wall art for a reading nook.',
  audience: 'Buyers who love cottagecore + Studio Ghibli aesthetics, decorating a cozy bedroom or reading nook. Keywords: cottagecore wall art, ghibli print, cozy digital download.',
};

const FREE_LIMIT = 3; // generations before the email gate
const PRO_URL = 'https://buy.stripe.com/7sYcN42BVaz70mg0pscMM0A'; // MidasTools Pro Pass — $39 one-time

export default function ListingMachine() {
  const [product, setProduct] = useState('');
  const [audience, setAudience] = useState('');
  const [platform, setPlatform] = useState('etsy');
  const [vibe, setVibe] = useState('cozy');
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
      if (localStorage.getItem('lm_unlocked') === '1') setUnlocked(true);
      // MidasTools Pro Pass is universal — one code unlocks every money-tool.
      const savedCode = localStorage.getItem('om_pro_code');
      if (savedCode) { setPro(true); setProCode(savedCode); }
    } catch {}
  }, []);

  const gated = !pro && count >= FREE_LIMIT && !unlocked;

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

  async function handleGenerate() {
    if (!product.trim() || product.trim().length < 5) {
      setError('Tell us what you sell — even one line works.');
      return;
    }
    if (gated) return;
    setError('');
    setLoading(true);
    setResult(null);
    setCopied(null);
    try {
      const res = await fetch('/api/listing-machine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, audience, platform, vibe, proCode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Something went wrong. Try again.');
      } else {
        setResult(data.result);
        setCount(c => c + 1);
        // Kill-criterion metric — real tool sessions. Fire-and-forget → /api/track.
        trackEvent('listing_generate', {
          engine: data.engine || 'unknown',
          platform,
          vibe,
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
      await submitSubscribe({ email, source: 'listing-machine' });
      try { localStorage.setItem('lm_unlocked', '1'); } catch {}
      setUnlocked(true);
      setCaptureMsg('Unlocked. Keep generating — and check your inbox for 5 money-prompts.');
    } catch {
      setUnlocked(true);
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Listing Machine — AI Product Listing & Etsy SEO Generator',
    url: 'https://www.midastools.co/listing-machine',
    description: 'Free AI tool that writes ready-to-publish product listings — SEO title, tags/keywords, description, and bullets — for Etsy, Shopify, Amazon, Gumroad and eBay. Built for sellers and side-hustlers.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <Layout>
      <Head>
        <title>The Listing Machine — Free AI Product Listing & Etsy SEO Generator | MidasTools</title>
        <meta name="description" content="Paste your product. Get a ready-to-publish listing — SEO title, tags/keywords, description, bullets and a price tip — built to rank and sell on Etsy, Shopify, Amazon, Gumroad & eBay. Free AI tool." />
        <meta property="og:title" content="The Listing Machine — AI that writes listings that sell" />
        <meta property="og:description" content="Free AI tool: SEO title + tags + description + bullets for Etsy, Shopify, Amazon & more. Turn any product into a listing that ranks and sells." />
        <meta property="og:url" content="https://www.midastools.co/listing-machine" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/listing-machine" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .lm-page { max-width: 820px; margin: 0 auto; padding: 72px 40px; }
        .lm-hero { text-align: center; margin-bottom: 44px; }
        .lm-hero h1 { font-size: clamp(32px, 5.5vw, 54px); font-weight: 900; line-height: 1.08; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .lm-hero h1 span { color: var(--accent); }
        .lm-hero p { font-size: 18px; color: var(--text-secondary); max-width: 580px; margin: 0 auto; line-height: 1.65; }

        .lm-form { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 32px; margin-bottom: 32px; }
        .lm-group { margin-bottom: 22px; }
        .lm-group label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .lm-group .hint { font-weight: 500; color: var(--text-tertiary); font-size: 12px; }
        .lm-group textarea, .lm-group input[type=text] {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border); border-radius: 12px;
          font-size: 15px; font-family: inherit; background: var(--bg); color: var(--text);
          outline: none; transition: border-color 0.15s; resize: vertical; line-height: 1.5;
        }
        .lm-group textarea:focus, .lm-group input:focus { border-color: var(--accent); }

        .chip-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
        .chip-grid.vibes { grid-template-columns: repeat(4, 1fr); }
        .chip {
          border: 2px solid var(--border); border-radius: 12px; padding: 12px 8px; cursor: pointer;
          transition: border-color 0.15s, background 0.15s; text-align: center;
        }
        .chip:hover { border-color: var(--text-tertiary); }
        .chip.active { border-color: var(--accent); background: rgba(59,95,255,0.04); }
        .chip .c-label { font-size: 13px; font-weight: 700; color: var(--text); }
        .chip .c-desc { font-size: 11px; color: var(--text-secondary); margin-top: 2px; }

        .lm-btn {
          width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none;
          border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer;
          font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; margin-top: 8px;
        }
        .lm-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }
        .lm-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .lm-err { color: #DC2626; font-size: 14px; margin-top: 12px; text-align: center; }
        .lm-example { display: block; margin: 12px auto 0; background: none; border: none; color: var(--accent); font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; text-align: center; width: 100%; }
        .lm-example:hover { text-decoration: underline; }

        .out-card { border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-bottom: 16px; background: var(--bg); }
        .out-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 12px; }
        .out-head h3 { font-size: 13px; font-weight: 800; color: var(--accent); letter-spacing: 0.5px; text-transform: uppercase; }
        .out-body { font-size: 15px; color: var(--text); line-height: 1.7; white-space: pre-wrap; }
        .out-title { font-size: 17px; font-weight: 700; color: var(--text); line-height: 1.4; }
        .mini-copy { background: none; border: 1px solid var(--border); border-radius: 8px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer; color: var(--text-secondary); font-family: inherit; white-space: nowrap; }
        .mini-copy:hover { border-color: var(--accent); color: var(--accent); }
        .tag-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { background: rgba(59,95,255,0.06); border: 1px solid var(--border); border-radius: 100px; padding: 6px 14px; font-size: 13px; color: var(--text); }
        .blt { border-left: 3px solid var(--accent); padding: 8px 0 8px 16px; margin-bottom: 12px; font-size: 14px; color: var(--text); line-height: 1.6; }
        .pricetip { background: rgba(59,95,255,0.05); border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px; font-size: 14px; color: var(--text); line-height: 1.7; }

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
          .lm-page { padding: 44px 20px; }
          .lm-form { padding: 22px; }
          .chip-grid, .chip-grid.vibes { grid-template-columns: repeat(2, 1fr); }
          .pro-feats { grid-template-columns: 1fr; }
          .gate form { flex-direction: column; }
        }
      `}</style>

      <div className="lm-page">
        <div className="lm-hero">
          <div className="badge" style={{ marginBottom: 20 }}>AI Money Tool · Free</div>
          <h1>The <span>Listing Machine</span></h1>
          <p>Paste what you're selling — an AI-art print, a digital download, a handmade piece, a dropship product. Get a ready-to-publish listing engineered to <strong>rank in search and sell</strong>: title, tags, description, bullets, and a price tip. Your next sale starts with a listing buyers can actually find.</p>
        </div>

        <div className="lm-form">
          <div className="lm-group">
            <label>What are you selling? <span className="hint">— what it is, sizes/format, what makes it good</span></label>
            <textarea
              rows={4}
              placeholder="e.g. Ghibli-style cozy cottage art print — instant digital download, 5 sizes. Soft watercolor, warm autumn palette. Printable wall art for a reading nook."
              value={product}
              onChange={e => setProduct(e.target.value)}
            />
          </div>

          <div className="lm-group">
            <label>Who buys it + keywords to rank for <span className="hint">— optional, but makes the SEO 10x sharper</span></label>
            <textarea
              rows={2}
              placeholder="e.g. cottagecore + Ghibli fans decorating a cozy bedroom. Keywords: cottagecore wall art, ghibli print, cozy digital download."
              value={audience}
              onChange={e => setAudience(e.target.value)}
            />
          </div>

          <div className="lm-group">
            <label>Marketplace</label>
            <div className="chip-grid">
              {PLATFORMS.map(p => (
                <div key={p.id} className={`chip${platform === p.id ? ' active' : ''}`} onClick={() => setPlatform(p.id)}>
                  <div className="c-label">{p.label}</div>
                  <div className="c-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lm-group">
            <label>Brand vibe</label>
            <div className="chip-grid vibes">
              {VIBES.map(v => (
                <div key={v.id} className={`chip${vibe === v.id ? ' active' : ''}`} onClick={() => setVibe(v.id)}>
                  <div className="c-label">{v.label}</div>
                  <div className="c-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <button className="lm-btn" onClick={handleGenerate} disabled={loading || gated}>
            {loading ? 'Writing your listing…' : result ? 'Generate Again →' : 'Write My Listing →'}
          </button>
          {!product.trim() && !result && (
            <button
              type="button"
              className="lm-example"
              onClick={() => { setProduct(EXAMPLE.product); setAudience(EXAMPLE.audience); setError(''); }}
            >
              Not sure what to write? Try an example →
            </button>
          )}
          {error && <div className="lm-err">{error}</div>}
        </div>

        {/* Output */}
        {result && (
          <div style={{ marginBottom: 8 }}>
            <div className="out-card">
              <div className="out-head">
                <h3>Listing Title</h3>
                <button className="mini-copy" onClick={() => copy(result.title, 'title')}>{copied === 'title' ? 'Copied!' : 'Copy'}</button>
              </div>
              <div className="out-title">{result.title}</div>
            </div>

            {Array.isArray(result.tags) && result.tags.length > 0 && (
              <div className="out-card">
                <div className="out-head">
                  <h3>Tags / Keywords ({result.tags.length})</h3>
                  <button className="mini-copy" onClick={() => copy(result.tags.join(', '), 'tags')}>{copied === 'tags' ? 'Copied!' : 'Copy all'}</button>
                </div>
                <div className="tag-wrap">
                  {result.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                </div>
              </div>
            )}

            <div className="out-card">
              <div className="out-head">
                <h3>Description</h3>
                <button className="mini-copy" onClick={() => copy(result.description, 'desc')}>{copied === 'desc' ? 'Copied!' : 'Copy'}</button>
              </div>
              <div className="out-body">{result.description}</div>
            </div>

            {Array.isArray(result.bullets) && result.bullets.length > 0 && (
              <div className="out-card">
                <div className="out-head">
                  <h3>Key Bullets</h3>
                  <button className="mini-copy" onClick={() => copy(result.bullets.map(b => `• ${b}`).join('\n'), 'blts')}>{copied === 'blts' ? 'Copied!' : 'Copy all'}</button>
                </div>
                {result.bullets.map((b, i) => <div className="blt" key={i}>{b}</div>)}
              </div>
            )}

            {result.pricetip && (
              <div className="out-card">
                <div className="out-head">
                  <h3>Price Tip (this is where the margin is)</h3>
                  <button className="mini-copy" onClick={() => copy(result.pricetip, 'pt')}>{copied === 'pt' ? 'Copied!' : 'Copy'}</button>
                </div>
                <div className="pricetip">{result.pricetip}</div>
              </div>
            )}
          </div>
        )}

        {/* Email gate */}
        {gated && (
          <div className="gate">
            <h3>You're onto something — keep going free</h3>
            <p>Drop your email to unlock unlimited listings + we'll send you 5 money-making AI prompts for sellers.</p>
            <form onSubmit={handleCapture}>
              <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit">Unlock</button>
            </form>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 16, marginBottom: 0 }}>
              Selling at scale? <a href={PRO_URL} data-cta="lm-gate-pro-pass-39" style={{ color: '#93B4FF', fontWeight: 700, textDecoration: 'none' }}>Skip the email — go Pro ($39 lifetime: best AI + bulk mode) →</a>
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
              <h2>You're Pro. Go list everything.</h2>
              <p>Unlimited listings on our best model are unlocked on this device. Code: <span style={{ fontFamily: 'monospace', color: '#93B4FF' }}>{proCode}</span></p>
            </>
          ) : (
            <>
              <div className="badge" style={{ background: 'rgba(59,95,255,0.2)', borderColor: 'rgba(59,95,255,0.4)', color: '#93B4FF', marginBottom: 16 }}>MidasTools Pro Pass</div>
              <h2>List your whole shop in an afternoon</h2>
              <p>The free tool writes one listing at a time. Pro runs your entire catalog — one payment, lifetime access, no subscription. Unlocks every MidasTools money-tool.</p>
              <div className="pro-feats">
                <div className="pro-feat"><span className="ck">✓</span> Unlimited AI listings on our best model</div>
                <div className="pro-feat"><span className="ck">✓</span> Bulk mode — paste 10 products, get 10 listings</div>
                <div className="pro-feat"><span className="ck">✓</span> Every marketplace format (Etsy, Shopify, Amazon…)</div>
                <div className="pro-feat"><span className="ck">✓</span> The Outreach Machine + every money-tool, unlocked</div>
              </div>
              <a href={PRO_URL} className="pro-cta" data-cta="lm-pro-pass-39">Get Pro Pass — $39 lifetime →</a>
              <div className="fine">One payment. Yours forever. 30-day money-back guarantee.</div>
              <form onSubmit={handleVerifyPro} style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '24px auto 0' }}>
                <input
                  type="text"
                  placeholder="Already Pro? Enter your code"
                  value={proInput}
                  onChange={e => setProInput(e.target.value)}
                  style={{ flex: 1, padding: '14px 16px', border: 'none', borderRadius: 100, fontSize: 15, fontFamily: 'inherit' }}
                />
                <button type="submit" style={{ background: '#3B5FFF', color: '#fff', border: 'none', borderRadius: 100, padding: '14px 24px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}>Activate</button>
              </form>
              {proMsg && <div style={{ color: '#FCA5A5', fontSize: 14, marginTop: 12 }}>{proMsg}</div>}
            </>
          )}
        </div>

        {/* SEO content */}
        <div className="seo">
          <h2>Product listings that actually rank and sell</h2>
          <p>On Etsy, Amazon, Shopify and every marketplace, the listing is the whole game. A great product with a weak title disappears on page 8 of search. The Listing Machine writes the opposite: a title front-loaded with the exact phrase buyers type, real multi-word tags, a description that leads with the outcome, and bullets a shopper can scan in three seconds — the structure that actually gets found and bought.</p>

          <h3>How to use it (60 seconds)</h3>
          <ul>
            <li><strong>Describe your product</strong> — what it is, sizes or format, what makes it good.</li>
            <li><strong>Add your buyer + keywords</strong> (optional) — who it's for and the phrases you want to rank for. The more real detail, the sharper the SEO.</li>
            <li><strong>Pick your marketplace + vibe</strong> — Etsy, Shopify, Amazon, Gumroad or eBay.</li>
            <li><strong>Generate</strong> — copy the title, tags, description, bullets and price tip straight into your listing. Fill any [brackets], publish.</li>
          </ul>

          <h3>Built for AI-art sellers, makers, and side-hustlers</h3>
          <p>If you're selling AI-generated art prints, printables, or digital downloads, your competition is fierce and your listing is the only thing standing between your design and a sale. This tool turns "I made something cool" into "I made something findable." Same for handmade shops, print-on-demand stores, and dropshippers — paste the product, get a listing built to convert.</p>

          <h2>More free money-tools</h2>
          <p>The Listing Machine is part of MidasTools — AI tools built to put money in your pocket. Chasing clients instead of customers? Try the <Link href="/outreach-machine" style={{ color: 'var(--accent)', fontWeight: 600 }}>Outreach Machine</Link>. Or sharpen any prompt with the <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', fontWeight: 600 }}>Prompt Enhancer</Link>.</p>
        </div>

        {/* FAQ */}
        <div className="seo">
          <h2>FAQ</h2>
          {[
            { q: 'Is the Listing Machine really free?', a: 'Yes. Generate full product listings free. Drop your email to keep going unlimited. Pro adds our best AI model, bulk mode, and unlocks every MidasTools money-tool.' },
            { q: 'Does it do Etsy SEO tags?', a: 'Yes. Pick Etsy and you get a search-optimized title plus 13 multi-word tags built from the phrases buyers actually type — plus a description, bullets and a price tip.' },
            { q: 'Will it work for AI art and digital downloads?', a: 'That\'s exactly who it\'s built for. Describe your print or download (style, sizes, what\'s included) and it writes a listing tuned to how buyers search for that kind of product.' },
            { q: 'What about Shopify, Amazon, Gumroad and eBay?', a: 'Pick your marketplace and the output adapts — title length, tag/keyword style, and description format follow each platform\'s rules.' },
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
