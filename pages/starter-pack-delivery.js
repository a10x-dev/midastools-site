import Head from 'next/head';
import Layout from '../components/Layout';
import { STARTER_PACK_PROMPTS, PROMPT_CATEGORIES } from '../lib/starter-pack-prompts';

// Delivered to buyers of the $9 Starter Pack.
// Linked from /thank-you?tier=tripwire and from the buyer's receipt email.
// noindex — this is paid-only content.

export default function StarterPackDelivery() {
  const grouped = PROMPT_CATEGORIES.map(cat => ({
    ...cat,
    prompts: STARTER_PACK_PROMPTS.filter(p => p.category === cat.title),
  }));

  return (
    <Layout>
      <Head>
        <title>Your 20 AI Prompts — Midas Tools Starter Pack</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", background: '#FFFFFF', color: '#111827' }}>
        {/* Header */}
        <section style={{ padding: '60px 24px 30px', textAlign: 'center', background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#DCFCE7', color: '#166534', fontSize: 12, fontWeight: 700, borderRadius: 99, marginBottom: 16, letterSpacing: 1 }}>
              ✓ YOUR STARTER PACK
            </div>
            <h1 style={{ fontSize: 42, fontWeight: 900, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Here are your 20 prompts.
            </h1>
            <p style={{ fontSize: 17, color: '#6B7280', margin: '0 0 20px', lineHeight: 1.5 }}>
              Bookmark this page — we'll also email you the link so you always have it. Every prompt works with ChatGPT, Claude, and Gemini. Variables are in <span style={{ color: '#D97706', fontWeight: 700 }}>[BRACKETS]</span> — replace them with your specifics.
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {PROMPT_CATEGORIES.map(cat => (
                <a key={cat.title} href={`#${cat.title.replace(/\s+/g, '-').toLowerCase()}`} style={{ padding: '6px 14px', background: '#F3F4F6', color: '#374151', fontSize: 13, fontWeight: 600, borderRadius: 99, textDecoration: 'none' }}>
                  {cat.icon} {cat.title} ({cat.count})
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Prompts by category */}
        <section style={{ padding: '20px 24px 40px', maxWidth: 820, margin: '0 auto' }}>
          {grouped.map(cat => (
            <div key={cat.title} id={cat.title.replace(/\s+/g, '-').toLowerCase()} style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, margin: '32px 0 20px', borderBottom: '2px solid #F3F4F6', paddingBottom: 12 }}>
                {cat.icon} {cat.title}
              </h2>
              {cat.prompts.map((p, i) => {
                const num = STARTER_PACK_PROMPTS.indexOf(p) + 1;
                return (
                  <div key={p.name} style={{ background: '#FFF', border: '1px solid #E5E7EB', borderRadius: 14, padding: 24, marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#3B5FFF', marginBottom: 6 }}>
                      PROMPT {num} / 20
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 14px' }}>{p.name}</h3>
                    <div style={{ background: '#0F172A', color: '#E2E8F0', padding: 18, borderRadius: 10, fontSize: 13, fontFamily: 'monospace', lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowX: 'auto', marginBottom: 12 }}>
                      {p.body.split(/(\[[A-Z_'?→\s/0-9$]+\])/).map((part, idx) =>
                        part.match(/^\[[A-Z_'?→\s/0-9$]+\]$/)
                          ? <span key={idx} style={{ color: '#FBBF24', fontWeight: 700 }}>{part}</span>
                          : <span key={idx}>{part}</span>
                      )}
                    </div>
                    <p style={{ fontSize: 13, color: '#6B7280', margin: 0, fontStyle: 'italic' }}>When to use: {p.useCase}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </section>

        {/* Upgrade */}
        <section style={{ padding: '40px 24px', maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B5FFF 100%)', borderRadius: 20, padding: 32, color: '#FFF', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 10 }}>LIKED THESE?</div>
            <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px' }}>Get 180+ more like these</h3>
            <p style={{ fontSize: 15, opacity: 0.9, margin: '0 0 20px' }}>
              You just got the 20 best of our 145+ prompt Mega Pack. Upgrade to the full pack for $29 (or all 21 kits for $97).
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/ai-prompt-mega-pack" style={{ background: '#FFF', color: '#1E3A8A', fontWeight: 700, padding: '12px 22px', borderRadius: 99, textDecoration: 'none' }}>
                Mega Pack — $29
              </a>
              <a href="/bundle" style={{ background: 'transparent', color: '#FFF', fontWeight: 700, padding: '12px 22px', borderRadius: 99, textDecoration: 'none', border: '2px solid #FFF' }}>
                All 21 Kits — $97
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#9CA3AF' }}>
            Need help or want a refund? Email <a href="mailto:iam@armando.mx" style={{ color: '#6B7280' }}>iam@armando.mx</a> — we reply within 24h.
          </p>
        </section>
      </div>
    </Layout>
  );
}
