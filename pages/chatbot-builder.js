import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { trackEvent } from '../lib/track';

// Recurring subscription — "put your bot live + capture leads" — $39/mo.
const PRO_SUB_URL = 'https://buy.stripe.com/7sYcN42BVaz70mg0pscMM0A'; // TODO: replace with $39/mo subscription link
const EXAMPLE = {
  name: 'Brightside Dental',
  url: 'https://www.adps.com',
  description: 'A family & cosmetic dental clinic. New-patient exams, cleanings, whitening, Invisalign, emergency visits. Open Mon–Fri 8am–5pm. Accepts most insurance.',
};

function LivePreview({ bot }) {
  const [messages, setMessages] = useState([{ role: 'assistant', content: bot.greeting }]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => { if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight; }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next); setInput(''); setSending(true);
    try {
      const res = await fetch('/api/chatbot/respond', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: bot.id, messages: next.slice(-12) }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || 'Thanks! Our team will follow up.' }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Hmm, something glitched — try again.' }]);
    } finally { setSending(false); }
  }

  return (
    <div style={{ border: '1px solid #E5E7EB', borderRadius: 14, overflow: 'hidden', maxWidth: 420, background: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,.08)' }}>
      <div style={{ background: '#2563EB', color: '#fff', padding: '12px 16px', fontWeight: 700, fontSize: 15 }}>{bot.name}</div>
      <div ref={boxRef} style={{ height: 320, overflowY: 'auto', padding: 16, background: '#F9FAFB' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
            <div style={{ maxWidth: '82%', padding: '9px 13px', borderRadius: 14, fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap',
              ...(m.role === 'user'
                ? { background: '#2563EB', color: '#fff', borderBottomRightRadius: 4 }
                : { background: '#fff', color: '#1F2937', border: '1px solid #E5E7EB', borderBottomLeftRadius: 4 }) }}>
              {m.content}
            </div>
          </div>
        ))}
        {sending && <div style={{ color: '#9CA3AF', fontSize: 13 }}>typing…</div>}
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 10, borderTop: '1px solid #E5E7EB' }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') send(); }}
          placeholder="Ask it something a customer would…"
          style={{ flex: 1, border: '1px solid #D1D5DB', borderRadius: 10, padding: '10px 12px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }} />
        <button onClick={send} disabled={sending} style={{ background: '#2563EB', color: '#fff', border: 'none', borderRadius: 10, padding: '0 16px', fontWeight: 700, cursor: 'pointer' }}>Send</button>
      </div>
    </div>
  );
}

export default function ChatbotBuilder() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [faqs, setFaqs] = useState([{ q: '', a: '' }]);
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState('');
  const [bot, setBot] = useState(null);
  const [copied, setCopied] = useState(false);

  function setFaq(i, k, v) { setFaqs(f => f.map((x, j) => j === i ? { ...x, [k]: v } : x)); }
  function addFaq() { setFaqs(f => f.length < 5 ? [...f, { q: '', a: '' }] : f); }

  function loadExample() {
    setName(EXAMPLE.name); setUrl(EXAMPLE.url); setDescription(EXAMPLE.description);
  }

  async function build(e) {
    e.preventDefault();
    setError('');
    if (!name.trim()) { setError('Add the business name.'); return; }
    if (!email.trim() || !/.+@.+\..+/.test(email)) { setError('Add your email — that\'s where the bot will send captured leads.'); return; }
    if (!url.trim() && !description.trim() && !faqs.some(f => f.q && f.a)) {
      setError('Add a website URL, a short description, or one FAQ so the bot knows what to say.'); return;
    }
    setBuilding(true);
    try {
      const res = await fetch('/api/chatbot/build', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url, description, email, faqs: faqs.filter(f => f.q && f.a) }),
      });
      const data = await res.json();
      if (data.error) { setError(data.message || 'Could not build the bot. Try again.'); setBuilding(false); return; }
      setBot(data);
      trackEvent('chatbot_build', { scraped: !!data.scraped });
      // also capture the owner as a subscriber lead
      try { fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, source: 'chatbot-builder' }) }); } catch {}
    } catch {
      setError('Network error — try again.');
    } finally { setBuilding(false); }
  }

  function copyEmbed() {
    try { navigator.clipboard.writeText(bot.embed); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  }

  const label = { display: 'block', fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#111827' };
  const inp = { width: '100%', border: '1px solid #D1D5DB', borderRadius: 10, padding: '11px 13px', fontSize: 15, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' };

  return (
    <Layout>
      <Head>
        <title>Chatbot Builder — Build a Lead-Capturing AI Chatbot for Any Business in 60 Seconds | MidasTools</title>
        <meta name="description" content="Paste a business website, get a working AI chatbot that answers customer questions and captures leads 24/7. Embed it with one line. Resell it to local businesses for $300/mo. Free to build." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.midastools.co/chatbot-builder" />
        <meta property="og:title" content="Chatbot Builder — Lead-Capturing AI Chatbot in 60 Seconds" />
        <meta property="og:description" content="Build a working AI chatbot from any business website. Answers questions, captures leads, embeds with one line. Resell it for $300/mo." />
      </Head>

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '40px 20px 60px' }}>
        {/* Hero */}
        <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#2563EB', fontWeight: 700, fontSize: 13, padding: '5px 12px', borderRadius: 100, marginBottom: 16 }}>💰 Money Tool</span>
        <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, lineHeight: 1.12, margin: '0 0 16px', color: '#111827' }}>
          Build a lead-capturing AI chatbot for any business in 60 seconds
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#374151', margin: '0 0 8px' }}>
          Paste a business website. Get a working AI chatbot that answers customer questions and <strong>captures leads 24/7</strong> — then drop it on any site with one line of code.
        </p>
        <p style={{ fontSize: 15, color: '#6B7280', margin: '0 0 32px' }}>
          Local businesses pay <strong>$300+/mo</strong> for this. Build yours free, then put it live for <strong>$39/mo</strong> and resell as many as you want.
        </p>

        {!bot ? (
          <form onSubmit={build} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28, boxShadow: '0 4px 20px rgba(0,0,0,.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Build your chatbot</h2>
              <button type="button" onClick={loadExample} style={{ background: 'transparent', border: 'none', color: '#2563EB', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Try an example →</button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={label}>Business name *</label>
              <input style={inp} value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Brightside Dental" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={label}>Business website <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(we read it to train the bot)</span></label>
              <input style={inp} value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={label}>Short description <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional — helps if there's no website)</span></label>
              <textarea style={{ ...inp, minHeight: 70, resize: 'vertical' }} value={description} onChange={e => setDescription(e.target.value)} placeholder="What the business does, services, hours, location…" />
            </div>

            <label style={label}>FAQs <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional — the answers you want it to nail)</span></label>
            {faqs.map((f, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 8, marginBottom: 8 }}>
                <input style={inp} value={f.q} onChange={e => setFaq(i, 'q', e.target.value)} placeholder="Question" />
                <input style={inp} value={f.a} onChange={e => setFaq(i, 'a', e.target.value)} placeholder="Answer" />
              </div>
            ))}
            {faqs.length < 5 && <button type="button" onClick={addFaq} style={{ background: 'transparent', border: 'none', color: '#2563EB', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0, marginBottom: 16 }}>+ Add another FAQ</button>}

            <div style={{ marginTop: 8, marginBottom: 16 }}>
              <label style={label}>Your email * <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(where the bot sends captured leads)</span></label>
              <input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
            </div>

            {error && <p style={{ color: '#DC2626', fontSize: 14, margin: '0 0 12px' }}>{error}</p>}
            <button type="submit" disabled={building} style={{ width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
              {building ? 'Building your chatbot…' : 'Build my chatbot →'}
            </button>
            <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: 13, marginTop: 10 }}>Free to build & test. No card required.</p>
          </form>
        ) : (
          <div>
            <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 14, padding: '14px 18px', marginBottom: 24 }}>
              <strong style={{ color: '#065F46' }}>✓ Your chatbot for {bot.name} is live.</strong>
              <span style={{ color: '#047857', fontSize: 14 }}> Test it on the right — ask it anything a customer would.</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28, alignItems: 'start' }}>
              {/* Left: embed + upsell */}
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px' }}>1. Drop it on any website</h3>
                <p style={{ color: '#6B7280', fontSize: 14, margin: '0 0 10px' }}>Paste this one line before <code>&lt;/body&gt;</code>. The chat bubble appears automatically.</p>
                <div style={{ background: '#0F172A', color: '#E2E8F0', borderRadius: 10, padding: 14, fontFamily: 'monospace', fontSize: 12.5, lineHeight: 1.5, wordBreak: 'break-all', marginBottom: 10 }}>
                  {bot.embed}
                </div>
                <button onClick={copyEmbed} style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
                  {copied ? '✓ Copied' : 'Copy embed code'}
                </button>

                <div style={{ marginTop: 28, background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: 14, padding: 22 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>2. Put it live + capture leads — $39/mo</h3>
                  <ul style={{ margin: '0 0 16px', paddingLeft: 18, color: '#374151', fontSize: 14, lineHeight: 1.7 }}>
                    <li>Bot stays live on your (or your client's) site</li>
                    <li><strong>Captured leads emailed to you</strong> the moment a visitor leaves their info</li>
                    <li>Remove the “Powered by MidasTools” badge (white-label & resell)</li>
                    <li>Build unlimited bots — resell to local businesses for $300+/mo each</li>
                  </ul>
                  <a href={PRO_SUB_URL} style={{ display: 'inline-block', background: '#2563EB', color: '#fff', padding: '12px 26px', borderRadius: 100, textDecoration: 'none', fontWeight: 800, fontSize: 15 }}>
                    Put my bot live — $39/mo →
                  </a>
                </div>
              </div>

              {/* Right: live preview */}
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px' }}>Live preview</h3>
                <LivePreview bot={bot} />
                <button onClick={() => { setBot(null); setName(''); setUrl(''); setDescription(''); setFaqs([{ q: '', a: '' }]); }}
                  style={{ background: 'transparent', border: 'none', color: '#6B7280', fontSize: 14, cursor: 'pointer', marginTop: 14, padding: 0 }}>
                  ← Build another bot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* How it works */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>How people make money with this</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
            {[
              ['1. Build', 'Paste a local business\'s website. The bot trains itself on their services, hours, and FAQs in seconds.'],
              ['2. Sell', 'Pitch the dentist, plumber, or salon down the street: “a 24/7 receptionist that books you leads.” They pay $300+/mo.'],
              ['3. Profit', 'You pay $39/mo, they pay $300+/mo. Each bot is recurring margin. Stack as many clients as you want.'],
            ].map(([h, p]) => (
              <div key={h} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px', color: '#2563EB' }}>{h}</h3>
                <p style={{ fontSize: 14, color: '#374151', margin: 0, lineHeight: 1.6 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 36, color: '#6B7280', fontSize: 14 }}>
          Part of <Link href="/tools" style={{ color: '#2563EB' }}>MidasTools</Link> — AI tools that make you money. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#2563EB' }}>iam@armando.mx</a>.
        </p>
      </div>
    </Layout>
  );
}
