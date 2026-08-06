// Hosted, shareable full-page chat demo for any Chatbot Builder bot.
// The bot id IS the credential — anyone with the link can chat with the bot.
// This is the outbound sales asset: send a business owner midastools.co/chat/<botId>
// and they experience their own 24/7 AI assistant live, built from their website.
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PRO_SUB_URL } from '../../components/ChatbotBuildWidget';
import { trackEvent } from '../../lib/track';

const ACCENT_FALLBACK = '#3B5FFF';

// The model answers in markdown, so replies were rendering literal "**Botox**" to
// every visitor — including, in the outbound motion, the business owner we are asking
// for $39/month. Render bold as bold. Built as React nodes rather than innerHTML so
// model output can never inject markup.
function renderRich(text) {
  return String(text || '')
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**') && part.length > 4
        ? <strong key={i}>{part.slice(2, -2)}</strong>
        : <span key={i}>{part}</span>
    );
}
const SUGGESTIONS = [
  'What services do you offer?',
  'How do I book an appointment?',
  'Where are you located?',
  'What are your hours?',
];

export default function ChatDemo() {
  const router = useRouter();
  const { id, owner } = router.query;
  const isOwner = owner === '1';
  const [bot, setBot] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | notfound
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    fetch(`/api/chatbot/config?id=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((cfg) => {
        if (cancelled) return;
        setBot(cfg);
        setStatus('ready');
        setMessages([{ role: 'assistant', content: cfg.greeting || `Hi! 👋 How can I help you?` }]);
      })
      .catch(() => { if (!cancelled) setStatus('notfound'); });
    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages, sending]);

  async function send(text) {
    const msg = (text || input).trim();
    if (!msg || sending || !bot) return;
    const next = [...messages, { role: 'user', content: msg }];
    setMessages(next);
    setInput('');
    setSending(true);
    try {
      const res = await fetch('/api/chatbot/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: bot.id, messages: next.slice(-12) }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || 'Thanks! Our team will follow up with you shortly.' }]);
      // The buying signal is the CONVERSATION, not the pageview. Without this, a
      // prospect who opened their demo and asked five questions is indistinguishable
      // from one who bounced — and the Conversations KPI is unmeasurable by construction.
      trackEvent('chatbot_message', {
        botId: bot.id,
        owner: isOwner ? 1 : 0,
        turn: next.filter((m) => m.role === 'user').length,
        lead_captured: data.lead_captured ? 1 : 0,
        degraded: data.degraded ? 1 : 0,
      });
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Hmm, something glitched — please try again.' }]);
    } finally {
      setSending(false);
    }
  }

  const accent = bot?.accent || ACCENT_FALLBACK;
  const name = bot?.name || 'AI Assistant';

  return (
    <>
      <Head>
        <title>{status === 'ready' ? `${name} — AI Assistant` : 'AI Assistant'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: '100dvh', display: 'flex', flexDirection: 'column',
        background: '#F9FAFB', color: '#111827',
      }}>
        {/* Header */}
        <header style={{
          background: accent, color: '#fff', padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
          boxShadow: '0 2px 12px rgba(0,0,0,.12)',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
          }}>💬</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
            <div style={{ fontSize: 12, opacity: 0.9, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
              AI Assistant · Online 24/7
            </div>
          </div>
        </header>

        {/* Messages */}
        <div ref={boxRef} style={{ flex: 1, overflowY: 'auto', padding: '18px 16px', WebkitOverflowScrolling: 'touch' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {status === 'loading' && (
              <div style={{ textAlign: 'center', color: '#9CA3AF', marginTop: 40, fontSize: 14 }}>Loading assistant…</div>
            )}
            {status === 'notfound' && (
              <div style={{ textAlign: 'center', color: '#6B7280', marginTop: 60, padding: '0 20px' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🤔</div>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>This assistant isn’t available</div>
                <div style={{ fontSize: 14 }}>The link may be expired or incorrect. Want one for your business?{' '}
                  <a href="/chatbot-builder" style={{ color: ACCENT_FALLBACK, fontWeight: 700 }}>Build a free AI assistant →</a>
                </div>
              </div>
            )}
            {status === 'ready' && messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
                <div style={{
                  maxWidth: '84%', padding: '11px 15px', borderRadius: 18, fontSize: 15, lineHeight: 1.55, whiteSpace: 'pre-wrap',
                  ...(m.role === 'user'
                    ? { background: accent, color: '#fff', borderBottomRightRadius: 5 }
                    : { background: '#fff', color: '#1F2937', border: '1px solid #EAECEF', borderBottomLeftRadius: 5, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }),
                }}>{m.role === 'assistant' ? renderRich(m.content) : m.content}</div>
              </div>
            ))}
            {sending && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 12 }}>
                <div style={{ background: '#fff', border: '1px solid #EAECEF', borderRadius: 18, borderBottomLeftRadius: 5, padding: '12px 16px', color: '#9CA3AF', fontSize: 14 }}>typing…</div>
              </div>
            )}

            {/* Suggested questions — one-tap activation */}
            {status === 'ready' && messages.length === 1 && !sending && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} style={{
                    background: '#fff', border: `1px solid ${accent}`, color: accent,
                    borderRadius: 20, padding: '8px 14px', fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}>{s}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Composer */}
        {status === 'ready' && (
          <div style={{ flexShrink: 0, borderTop: '1px solid #EAECEF', background: '#fff', padding: '12px 16px calc(12px + env(safe-area-inset-bottom))' }}>
            <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder="Type your question…"
                rows={1}
                style={{
                  flex: 1, resize: 'none', border: '1px solid #D1D5DB', borderRadius: 22, padding: '11px 16px',
                  fontSize: 15, fontFamily: 'inherit', outline: 'none', maxHeight: 120, lineHeight: 1.4,
                }}
              />
              <button onClick={() => send()} disabled={sending || !input.trim()} style={{
                background: accent, color: '#fff', border: 'none', borderRadius: '50%', width: 46, height: 46, flexShrink: 0,
                fontSize: 20, cursor: sending || !input.trim() ? 'default' : 'pointer', opacity: sending || !input.trim() ? 0.5 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }} aria-label="Send">↑</button>
            </div>
            {/* Owner mode. Only ever set on a link we email to the business owner in
                the build-it-for-them-first motion — a visitor to an embedded bot must
                never see this. Held back until they've actually exchanged a message,
                so the bot earns the ask instead of leading with it. */}
            {isOwner && messages.length > 2 ? (
              <div style={{
                maxWidth: 640, margin: '10px auto 0', background: '#F5F8FF', border: '1px solid #D8E2FF',
                borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap',
              }}>
                <div style={{ flex: '1 1 240px', fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
                  This is <strong>{name}</strong>’s own assistant — built from your website, answering 24/7.
                  Put it on your site for <strong>$39/month</strong>. One line of code, cancel anytime.
                </div>
                <a
                  href={`${PRO_SUB_URL}?client_reference_id=${encodeURIComponent(id || '')}&utm_source=chat_demo_owner`}
                  style={{
                    background: ACCENT_FALLBACK, color: '#fff', fontWeight: 700, fontSize: 13.5,
                    padding: '10px 16px', borderRadius: 9, textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                >Keep this assistant →</a>
              </div>
            ) : (
              <div style={{ textAlign: 'center', marginTop: 8, fontSize: 11.5, color: '#9CA3AF' }}>
                Built by <a href="/chatbot-builder?utm_source=chat_demo" style={{ color: '#9CA3AF', fontWeight: 600, textDecoration: 'none' }}>MidasTools</a> — your 24/7 AI assistant
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
