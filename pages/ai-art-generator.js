import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { trackEvent } from '../lib/track';

const STYLES = [
  { id: 'ghibli', label: 'Ghibli', desc: 'Soft & whimsical' },
  { id: 'petportrait', label: 'Pet Portrait', desc: 'Painterly & cute' },
  { id: 'pixar', label: '3D Animated', desc: 'Pixar-style' },
  { id: 'watercolor', label: 'Watercolor', desc: 'Soft fine-art' },
  { id: 'anime', label: 'Anime', desc: 'Vibrant cel-shade' },
  { id: 'oil', label: 'Oil Painting', desc: 'Classical, rich' },
  { id: 'popart', label: 'Pop Art', desc: 'Bold & graphic' },
  { id: 'cyberpunk', label: 'Cyberpunk', desc: 'Neon & moody' },
];

const EXAMPLE = 'my fluffy orange tabby cat sitting on a sunny windowsill, looking out at a green meadow';

const FREE_LIMIT = 1; // each image costs real money — gate the email after the first free one

export default function AiArtGenerator() {
  const [subject, setSubject] = useState('');
  const [style, setStyle] = useState('ghibli');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [captureMsg, setCaptureMsg] = useState('');
  const [notConfigured, setNotConfigured] = useState(false);
  const [waitEmail, setWaitEmail] = useState('');
  const [waitMsg, setWaitMsg] = useState('');
  const [hdEmail, setHdEmail] = useState('');
  const [hdMsg, setHdMsg] = useState('');

  useEffect(() => {
    try {
      if (localStorage.getItem('art_unlocked') === '1') setUnlocked(true);
    } catch {}
  }, []);

  const gated = count >= FREE_LIMIT && !unlocked;

  async function handleGenerate() {
    if (!subject.trim() || subject.trim().length < 3) {
      setError('Describe what you want — even a few words works.');
      return;
    }
    if (gated) return;
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, style }),
      });
      const data = await res.json();
      if (data.error === 'not_configured') {
        setNotConfigured(true);
      } else if (!res.ok || data.error) {
        setError(data.message || 'Something went wrong. Try again.');
      } else {
        setImage(data.image);
        setCount(c => c + 1);
        // Kill-criterion metric — the core action. Fire-and-forget → /api/track.
        trackEvent('image_generate', { engine: data.engine || 'unknown', style });
      }
    } catch {
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleCapture(e) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setCaptureMsg('');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'art-machine' }),
      });
      try { localStorage.setItem('art_unlocked', '1'); } catch {}
      setUnlocked(true);
      setCaptureMsg('Unlocked. Keep creating — and check your inbox.');
    } catch {
      setUnlocked(true);
    }
  }

  async function handleWaitlist(e) {
    e.preventDefault();
    if (!waitEmail.includes('@')) return;
    setWaitMsg('');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitEmail, source: 'art-machine-waitlist' }),
      });
      trackEvent('art_waitlist', {});
      setWaitMsg("You're on the list. We'll email you the moment it's live.");
      setWaitEmail('');
    } catch {
      setWaitMsg("You're on the list.");
    }
  }

  async function handleHdWaitlist(e) {
    e.preventDefault();
    if (!hdEmail.includes('@')) return;
    setHdMsg('');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: hdEmail, source: 'art-machine-hd-waitlist' }),
      });
      // Willingness-to-pay signal — who wants the paid HD pack.
      trackEvent('hd_waitlist', { style });
      setHdMsg('Got it — you\'ll get early access to the HD pack ($4.99) the day it launches.');
      setHdEmail('');
    } catch {
      setHdMsg('Got it — you\'re on the early-access list.');
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Art Machine — Free AI Art & Pet Portrait Generator',
    url: 'https://www.midastools.co/ai-art-generator',
    description: 'Free AI art generator. Describe anything — your pet, yourself, a scene — and get the actual image in Ghibli, pet-portrait, anime, watercolor, 3D and more. No prompt-copying, no other app.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <Layout>
      <Head>
        <title>The Art Machine — Free AI Art & Pet Portrait Generator | MidasTools</title>
        <meta name="description" content="Describe it, get the actual image. Free AI art generator for Ghibli-style art, pet portraits, anime, watercolor, 3D and more — generated right here, no prompt-copying, no other app." />
        <meta property="og:title" content="The Art Machine — describe it, get the actual AI image" />
        <meta property="og:description" content="Free AI art & pet portrait generator. Ghibli, anime, watercolor, 3D and more — your image, made here." />
        <meta property="og:url" content="https://www.midastools.co/ai-art-generator" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/ai-art-generator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style>{`
        .am-page { max-width: 820px; margin: 0 auto; padding: 72px 40px; }
        .am-hero { text-align: center; margin-bottom: 44px; }
        .am-hero h1 { font-size: clamp(32px, 5.5vw, 54px); font-weight: 900; line-height: 1.08; letter-spacing: -2px; margin-bottom: 16px; color: var(--text); }
        .am-hero h1 span { color: var(--accent); }
        .am-hero p { font-size: 18px; color: var(--text-secondary); max-width: 580px; margin: 0 auto; line-height: 1.65; }

        .am-form { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 32px; margin-bottom: 32px; }
        .am-group { margin-bottom: 22px; }
        .am-group label { display: block; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .am-group .hint { font-weight: 500; color: var(--text-tertiary); font-size: 12px; }
        .am-group textarea {
          width: 100%; padding: 14px 16px; border: 1px solid var(--border); border-radius: 12px;
          font-size: 15px; font-family: inherit; background: var(--bg); color: var(--text);
          outline: none; transition: border-color 0.15s; resize: vertical; line-height: 1.5;
        }
        .am-group textarea:focus { border-color: var(--accent); }

        .chip-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .chip {
          border: 2px solid var(--border); border-radius: 12px; padding: 12px 8px; cursor: pointer;
          transition: border-color 0.15s, background 0.15s; text-align: center;
        }
        .chip:hover { border-color: var(--text-tertiary); }
        .chip.active { border-color: var(--accent); background: rgba(59,95,255,0.04); }
        .chip .c-label { font-size: 13px; font-weight: 700; color: var(--text); }
        .chip .c-desc { font-size: 11px; color: var(--text-secondary); margin-top: 2px; }

        .am-btn {
          width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none;
          border-radius: 100px; font-size: 16px; font-weight: 800; cursor: pointer;
          font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; margin-top: 8px;
        }
        .am-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(59,95,255,0.25); }
        .am-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .am-err { color: #DC2626; font-size: 14px; margin-top: 12px; text-align: center; }
        .am-example { display: block; margin: 12px auto 0; background: none; border: none; color: var(--accent); font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; text-align: center; width: 100%; }
        .am-example:hover { text-decoration: underline; }

        .am-result { border: 1px solid var(--border); border-radius: 20px; padding: 20px; margin-bottom: 24px; background: var(--bg); text-align: center; }
        .am-result img { width: 100%; max-width: 560px; border-radius: 14px; display: block; margin: 0 auto; }
        .am-dl { display: inline-block; margin-top: 18px; background: var(--accent); color: #fff; padding: 12px 28px; border-radius: 100px; font-weight: 800; font-size: 15px; text-decoration: none; }
        .am-spinner { padding: 60px 20px; text-align: center; color: var(--text-secondary); font-size: 16px; }

        .hd { background: linear-gradient(135deg, #111827 0%, #1E293B 100%); border-radius: 20px; padding: 36px 32px; text-align: center; margin: 24px 0; }
        .hd h3 { font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 8px; }
        .hd p { color: rgba(255,255,255,0.72); font-size: 15px; margin-bottom: 20px; max-width: 460px; margin-left: auto; margin-right: auto; }
        .hd form { display: flex; gap: 8px; max-width: 420px; margin: 0 auto; }
        .hd input { flex: 1; padding: 14px 16px; border: none; border-radius: 100px; font-size: 15px; font-family: inherit; }
        .hd button { background: var(--accent); color: #fff; border: none; border-radius: 100px; padding: 14px 24px; font-weight: 800; cursor: pointer; font-family: inherit; }
        .hd .ok { color: #6EE7B7; font-size: 15px; font-weight: 600; }

        .gate { background: var(--text); color: #fff; border-radius: 20px; padding: 36px 32px; text-align: center; margin: 24px 0; }
        .gate h3 { font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 8px; }
        .gate p { color: rgba(255,255,255,0.72); font-size: 15px; margin-bottom: 20px; }
        .gate form { display: flex; gap: 8px; max-width: 420px; margin: 0 auto; }
        .gate input { flex: 1; padding: 14px 16px; border: none; border-radius: 100px; font-size: 15px; font-family: inherit; }
        .gate button { background: var(--accent); color: #fff; border: none; border-radius: 100px; padding: 14px 24px; font-weight: 800; cursor: pointer; font-family: inherit; }

        .seo { margin: 48px 0; }
        .seo h2 { font-size: 26px; font-weight: 800; color: var(--text); margin-bottom: 14px; }
        .seo h3 { font-size: 18px; font-weight: 700; color: var(--text); margin: 24px 0 10px; }
        .seo p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 14px; }
        .seo li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 6px; }

        @media(max-width:700px) {
          .am-page { padding: 44px 20px; }
          .am-form { padding: 22px; }
          .chip-grid { grid-template-columns: repeat(2, 1fr); }
          .gate form, .hd form { flex-direction: column; }
        }
      `}</style>

      <div className="am-page">
        <div className="am-hero">
          <div className="badge" style={{ marginBottom: 20 }}>AI Art · Free</div>
          <h1>The <span>Art Machine</span></h1>
          <p>Describe your pet, yourself, or any scene — and get <strong>the actual image</strong>, made right here. No prompt to copy, no other app to open. Pick a style, hit generate, download.</p>
        </div>

        {notConfigured ? (
          <div className="hd">
            <h3>Launching this week 🎨</h3>
            <p>The Art Machine goes live in a few days. Drop your email and you'll be first to make your pet into a Ghibli masterpiece — free.</p>
            <form onSubmit={handleWaitlist}>
              <input type="email" placeholder="you@email.com" value={waitEmail} onChange={e => setWaitEmail(e.target.value)} required />
              <button type="submit">Notify me</button>
            </form>
            {waitMsg && <p className="ok" style={{ marginTop: 16, marginBottom: 0 }}>{waitMsg}</p>}
          </div>
        ) : (
          <>
            <div className="am-form">
              <div className="am-group">
                <label>What do you want to create? <span className="hint">— describe the subject, setting, and mood</span></label>
                <textarea
                  rows={4}
                  placeholder="e.g. my fluffy orange tabby cat sitting on a sunny windowsill, looking out at a green meadow"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
              </div>

              <div className="am-group">
                <label>Style</label>
                <div className="chip-grid">
                  {STYLES.map(s => (
                    <div key={s.id} className={`chip${style === s.id ? ' active' : ''}`} onClick={() => setStyle(s.id)}>
                      <div className="c-label">{s.label}</div>
                      <div className="c-desc">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="am-btn" onClick={handleGenerate} disabled={loading || gated}>
                {loading ? 'Painting your image…' : image ? 'Generate Again →' : 'Make My Art →'}
              </button>
              {!subject.trim() && !image && (
                <button
                  type="button"
                  className="am-example"
                  onClick={() => { setSubject(EXAMPLE); setError(''); }}
                >
                  Not sure what to write? Try an example →
                </button>
              )}
              {error && <div className="am-err">{error}</div>}
            </div>

            {loading && (
              <div className="am-result"><div className="am-spinner">🎨 Painting your image… this takes about 10 seconds.</div></div>
            )}

            {image && !loading && (
              <div className="am-result">
                <img src={image} alt="Your AI-generated art" />
                <a className="am-dl" href={image} download="midastools-art.png">Download image</a>
              </div>
            )}

            {/* HD pack — willingness-to-pay capture (paid pack is the fast-follow) */}
            {image && !loading && (
              <div className="hd">
                <h3>Love it? Get the HD pack — $4.99</h3>
                <p>The clean high-res file + 6 more variations + the right to print &amp; sell it. Launching this week — drop your email for early access and we'll send it the day it drops.</p>
                <form onSubmit={handleHdWaitlist}>
                  <input type="email" placeholder="you@email.com" value={hdEmail} onChange={e => setHdEmail(e.target.value)} required />
                  <button type="submit">Get early access</button>
                </form>
                {hdMsg && <p className="ok" style={{ marginTop: 16, marginBottom: 0 }}>{hdMsg}</p>}
              </div>
            )}

            {/* Email gate after first free image */}
            {gated && (
              <div className="gate">
                <h3>Want to make more? Drop your email</h3>
                <p>Your first one's on us. Add your email to keep creating free — and we'll send you our best free money-tools for creators.</p>
                <form onSubmit={handleCapture}>
                  <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                  <button type="submit">Keep creating</button>
                </form>
              </div>
            )}
            {unlocked && captureMsg && (
              <div className="gate" style={{ padding: '22px 32px' }}>
                <p style={{ color: '#6EE7B7', fontSize: 15, margin: 0, fontWeight: 600 }}>{captureMsg}</p>
              </div>
            )}
          </>
        )}

        {/* SEO content */}
        <div className="seo">
          <h2>The AI art generator that actually makes the image</h2>
          <p>Most "AI art generators" online just hand you a prompt and tell you to go paste it into ChatGPT or Midjourney. The Art Machine is different: you describe what you want, pick a style, and the real image appears right here — your pet as a Studio Ghibli character, yourself as a watercolor portrait, any scene in anime, oil, pop-art or cyberpunk. No second app, no prompt-fiddling.</p>

          <h3>How to use it (30 seconds)</h3>
          <ul>
            <li><strong>Describe it</strong> — the subject, the setting, the mood. The more detail, the better the result.</li>
            <li><strong>Pick a style</strong> — Ghibli, pet portrait, 3D animated, watercolor, anime, oil, pop art, or cyberpunk.</li>
            <li><strong>Generate &amp; download</strong> — your image appears in about ten seconds. Download it free.</li>
          </ul>

          <h3>Perfect for pet portraits, Ghibli-style art, and gifts</h3>
          <p>Turn a description of your dog or cat into an adorable painterly portrait. Reimagine yourself or a friend in Studio Ghibli style. Make a one-of-a-kind gift, a profile picture, or wall art — all from a few words. Want the high-res file plus variations and the right to print and sell it? The HD pack is launching this week.</p>

          <h2>More free tools for creators</h2>
          <p>The Art Machine is part of MidasTools. Selling your art online? Turn any piece into a ready-to-publish listing with the <Link href="/listing-machine" style={{ color: 'var(--accent)', fontWeight: 600 }}>Listing Machine</Link>, or sharpen any prompt with the <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', fontWeight: 600 }}>Prompt Enhancer</Link>.</p>
        </div>

        {/* FAQ */}
        <div className="seo">
          <h2>FAQ</h2>
          {[
            { q: 'Is the Art Machine really free?', a: 'Yes — your first image is free, and you can keep generating free after a quick email. The optional HD pack ($4.99) gives you the clean high-res file, more variations, and the right to print and sell your art.' },
            { q: 'Does it actually make the image, or just a prompt?', a: 'It makes the actual image, right on this page. No copying a prompt into another tool — describe it, pick a style, and download the result.' },
            { q: 'Can I make a portrait of my pet?', a: 'Yes — that\'s one of the most popular uses. Describe your pet (breed, color, a detail or two) and pick the Pet Portrait or Ghibli style for an adorable, gift-worthy result.' },
            { q: 'Can I use the images commercially?', a: 'The free downloads are great for personal use, profile pictures and gifts. The HD pack (launching this week) includes a commercial license so you can print and sell your art.' },
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
