import { useState, useEffect, useRef } from 'react';
import { trackEvent } from '../lib/track';

// Recurring subscription — "put your bot live + capture leads" — $39/mo.
export const PRO_SUB_URL = 'https://buy.stripe.com/bJe28q3FZgXv5GAegicMM0C'; // plink_1TeLMeAdkDx8xZMk6MyHUoAx

// Description-led example — no external URL so it can never drift/404
// (the old example pointed a dental name at an unrelated auto-parts site).
// The builder grounds the demo bot on this description alone; a real user
// still sees the empty website field + placeholder inviting them to paste one.
const EXAMPLE = {
  name: 'Brightside Dental',
  url: '',
  description: 'A family & cosmetic dental clinic. New-patient exams, cleanings, whitening, Invisalign, and emergency visits. Open Mon–Fri 8am–5pm. Accepts most major insurance. Located in Austin, TX.',
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

/**
 * The whole build → preview → email → $39/mo flow, in one embeddable unit.
 *
 * Lives here rather than on /chatbot-builder alone so the pages that actually
 * rank on Google (the "sell AI chatbots" / niche posts) can convert readers in
 * place instead of spending a click sending them to the builder.
 *
 * @param source  attribution tag for chatbot_build + subscribe (e.g. 'blog-sell-ai-chatbots')
 * @param heading form title, so host pages can phrase the ask in their own context
 */
export default function ChatbotBuildWidget({ source = 'chatbot-builder', heading = 'Build your chatbot' }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [faqs, setFaqs] = useState([{ q: '', a: '' }]);
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState('');
  const [bot, setBot] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);
  const [emailError, setEmailError] = useState('');

  function setFaq(i, k, v) { setFaqs(f => f.map((x, j) => j === i ? { ...x, [k]: v } : x)); }
  function addFaq() { setFaqs(f => f.length < 5 ? [...f, { q: '', a: '' }] : f); }

  function loadExample() {
    setName(EXAMPLE.name); setUrl(EXAMPLE.url); setDescription(EXAMPLE.description);
    setShowAdvanced(true);
  }

  async function build(e) {
    e.preventDefault();
    setError('');
    if (!name.trim()) { setError('Add the business name.'); return; }
    if (!url.trim() && !description.trim() && !faqs.some(f => f.q && f.a)) {
      setError('Add a website URL, or open "Add details" and describe the business, so the bot knows what to say.'); return;
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
      trackEvent('chatbot_build', { scraped: !!data.scraped, source });
    } catch {
      setError('Network error — try again.');
    } finally { setBuilding(false); }
  }

  // Email is captured AFTER the bot exists — the ask is far more persuasive once
  // they've seen their own bot answering, and it no longer blocks activation.
  function saveEmail(e) {
    e.preventDefault();
    setEmailError('');
    if (!email.trim() || !/.+@.+\..+/.test(email)) { setEmailError('Enter a valid email so leads can reach you.'); return; }
    setEmailSaved(true);
    trackEvent('chatbot_email_captured', { botId: bot?.id, source });
    try {
      fetch('/api/subscribe', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
    } catch {}
  }

  function copyEmbed() {
    try { navigator.clipboard.writeText(bot.embed); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  }

  const shareUrl = bot ? `https://www.midastools.co/chat/${bot.id}` : '';
  function copyLink() {
    try { navigator.clipboard.writeText(shareUrl); setCopiedLink(true); setTimeout(() => setCopiedLink(false), 1800); } catch {}
  }
  const pitchText = bot
    ? `Hi — I built ${bot.name} a 24/7 AI assistant using your own website. It's already live and answering customer questions. Try it (nothing to install): ${shareUrl}\n\nAsk it anything a customer would. If you'd like it on your site, it's $300/mo and I'll have it embedded in a couple minutes — one recovered booking covers it many times over.`
    : '';
  function copyPitch() {
    try { navigator.clipboard.writeText(pitchText); setCopiedPitch(true); setTimeout(() => setCopiedPitch(false), 1800); } catch {}
  }

  const label = { display: 'block', fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#111827' };
  const inp = { width: '100%', border: '1px solid #D1D5DB', borderRadius: 10, padding: '11px 13px', fontSize: 15, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' };

  if (!bot) {
    return (
      <form onSubmit={build} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28, boxShadow: '0 4px 20px rgba(0,0,0,.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{heading}</h2>
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

        {/* Everything below is optional. Kept collapsed so the default path is
            name + website → build, matching the 60-second promise in the hero. */}
        <button type="button" onClick={() => setShowAdvanced(v => !v)}
          style={{ background: 'transparent', border: 'none', color: '#2563EB', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0, marginBottom: showAdvanced ? 16 : 4 }}>
          {showAdvanced ? '− Hide details' : '+ Add details (optional — no website? describe it instead)'}
        </button>

        {showAdvanced && (
          <>
            <div style={{ marginBottom: 16 }}>
              <label style={label}>Short description <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(helps if there's no website)</span></label>
              <textarea style={{ ...inp, minHeight: 70, resize: 'vertical' }} value={description} onChange={e => setDescription(e.target.value)} placeholder="What the business does, services, hours, location…" />
            </div>

            <label style={label}>FAQs <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(the answers you want it to nail)</span></label>
            {faqs.map((f, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 8, marginBottom: 8 }}>
                <input style={inp} value={f.q} onChange={e => setFaq(i, 'q', e.target.value)} placeholder="Question" />
                <input style={inp} value={f.a} onChange={e => setFaq(i, 'a', e.target.value)} placeholder="Answer" />
              </div>
            ))}
            {faqs.length < 5 && <button type="button" onClick={addFaq} style={{ background: 'transparent', border: 'none', color: '#2563EB', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0, marginBottom: 16 }}>+ Add another FAQ</button>}
          </>
        )}

        {error && <p style={{ color: '#DC2626', fontSize: 14, margin: '12px 0 12px' }}>{error}</p>}
        <button type="submit" disabled={building} style={{ width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 12, padding: '15px', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
          {building ? 'Building your chatbot…' : 'Build my chatbot →'}
        </button>
        <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: 13, marginTop: 10 }}>Free to build &amp; test. No signup, no card required.</p>
      </form>
    );
  }

  return (
    <div>
      <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 14, padding: '14px 18px', marginBottom: 24 }}>
        <strong style={{ color: '#065F46' }}>✓ Your chatbot for {bot.name} is live.</strong>
        <span style={{ color: '#047857', fontSize: 14 }}> Test it below — ask it anything a customer would.</span>
      </div>

      {/* Shareable live demo link — the reseller's closing tool + mobile test */}
      <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', borderRadius: 14, padding: 20, marginBottom: 24 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 6px' }}>📲 Share your live demo</h3>
        <p style={{ color: '#92400E', fontSize: 14, margin: '0 0 12px', lineHeight: 1.55 }}>
          Send this link to a business owner and let them chat with <strong>their own</strong> 24/7 assistant — it’s how you close the sale. Or open it on your phone to test.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <code style={{ flex: '1 1 260px', minWidth: 0, background: '#fff', border: '1px solid #FDE68A', borderRadius: 10, padding: '11px 14px', fontSize: 13.5, color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{shareUrl}</code>
          <button onClick={copyLink} style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 10, padding: '11px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 14, whiteSpace: 'nowrap' }}>
            {copiedLink ? '✓ Copied' : 'Copy link'}
          </button>
          <a href={shareUrl} target="_blank" rel="noopener" style={{ background: '#fff', color: '#111827', border: '1px solid #D1D5DB', borderRadius: 10, padding: '11px 18px', fontWeight: 700, textDecoration: 'none', fontSize: 14, whiteSpace: 'nowrap' }}>
            Open demo ↗
          </a>
        </div>

        {/* Ready-to-send pitch — removes the "what do I even say?" friction to the close */}
        <div style={{ marginTop: 16, borderTop: '1px dashed #FDE68A', paddingTop: 14 }}>
          <p style={{ color: '#92400E', fontSize: 13.5, fontWeight: 700, margin: '0 0 8px' }}>Don't know what to say? Copy this, paste the owner's name, send it:</p>
          <div style={{ background: '#fff', border: '1px solid #FDE68A', borderRadius: 10, padding: '12px 14px', fontSize: 13.5, color: '#374151', lineHeight: 1.55, whiteSpace: 'pre-wrap', marginBottom: 10 }}>{pitchText}</div>
          <button onClick={copyPitch} style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
            {copiedPitch ? '✓ Copied' : 'Copy pitch message'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28, alignItems: 'start' }}>
        {/* Left: embed + upsell */}
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px' }}>1. Drop it on any website</h3>
          <p style={{ color: '#6B7280', fontSize: 14, margin: '0 0 10px' }}>Paste this one line before <code>&lt;/body&gt;</code>. The chat bubble appears automatically.</p>

          {emailSaved ? (
            <>
              <div style={{ background: '#0F172A', color: '#E2E8F0', borderRadius: 10, padding: 14, fontFamily: 'monospace', fontSize: 12.5, lineHeight: 1.5, wordBreak: 'break-all', marginBottom: 10 }}>
                {bot.embed}
              </div>
              <button onClick={copyEmbed} style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>
                {copied ? '✓ Copied' : 'Copy embed code'}
              </button>
            </>
          ) : (
            <form onSubmit={saveEmail} style={{ background: '#F9FAFB', border: '1px dashed #D1D5DB', borderRadius: 12, padding: 18 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#111827', margin: '0 0 4px' }}>Where should your leads go?</p>
              <p style={{ fontSize: 13.5, color: '#6B7280', margin: '0 0 12px', lineHeight: 1.55 }}>
                Add your email to unlock the embed code. It’s also the inbox where this bot sends every lead it captures.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <input style={{ ...inp, flex: '1 1 200px' }} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
                <button type="submit" style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 10, padding: '11px 20px', fontWeight: 700, cursor: 'pointer', fontSize: 14, whiteSpace: 'nowrap' }}>
                  Unlock embed →
                </button>
              </div>
              {emailError && <p style={{ color: '#DC2626', fontSize: 13.5, margin: '10px 0 0' }}>{emailError}</p>}
            </form>
          )}

          <div style={{ marginTop: 28, background: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: 14, padding: 22 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>2. Put it live + capture leads — $39/mo</h3>
            <ul style={{ margin: '0 0 16px', paddingLeft: 18, color: '#374151', fontSize: 14, lineHeight: 1.7 }}>
              <li>Bot stays live on your (or your client's) site</li>
              <li><strong>Captured leads emailed to you</strong> the moment a visitor leaves their info</li>
              <li>Remove the “Powered by MidasTools” badge (white-label &amp; resell)</li>
              <li>Build unlimited bots — resell to local businesses for $300+/mo each</li>
            </ul>
            <a href={`${PRO_SUB_URL}?client_reference_id=${encodeURIComponent(bot.id)}${email ? `&prefilled_email=${encodeURIComponent(email)}` : ''}`} style={{ display: 'inline-block', background: '#2563EB', color: '#fff', padding: '12px 26px', borderRadius: 100, textDecoration: 'none', fontWeight: 800, fontSize: 15 }}>
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
  );
}
