import Head from 'next/head';
import Layout from '../components/Layout';

// Tripwire: 20 best prompts for $9. Stripe link set by /api/setup-tripwire (updated manually after first run)
const STRIPE_URL = 'https://buy.stripe.com/fZueVcb8rgXv3ysc8acMM0t';

const SAMPLE_PROMPTS = [
  {
    name: 'The Cold Outreach Email That Gets 23% Reply Rate',
    body: `You are a world-class cold email copywriter.\n\nWrite a 5-sentence cold email to [PROSPECT_NAME], a [ROLE] at [COMPANY].\n\nConstraints:\n- Subject line must reference something SPECIFIC they recently did (from [THEIR_RECENT_POST_OR_NEWS])\n- First line proves I paid attention (NEVER "I hope this finds you well")\n- Middle frames my offer around THEIR goal, not mine\n- Close with a single low-commitment ask (no "quick 15-min call?")\n- No buzzwords: remove "synergy", "circle back", "reach out"\n\nMy offer: [WHAT_I_DO_IN_ONE_SENTENCE]\n\nReturn: 3 complete email versions + which one to send first and why.`,
    why: 'Forces the AI to research → prove attention → offer → low-friction close. Produces emails that actually reply.'
  },
  {
    name: 'The "Money Page" Landing Page Rewriter',
    body: `Act as a direct-response copywriter trained on Stefan Georgi and Gary Halbert.\n\nRewrite my landing page copy below using this EXACT structure:\n1. Hook (1 line) — interrupt the scroll\n2. Problem (2 sentences) — the pain they feel today\n3. Agitation (2 sentences) — what happens if they don't fix it\n4. Solution (3 sentences) — what I'm offering + why it works\n5. Proof (2 sentences) — one specific result + one specific client\n6. Offer (3 sentences) — price, what they get, guarantee\n7. Objection handler (bullets) — 5 reasons someone would NOT buy, each with a 1-sentence response\n8. CTA (1 line) — urgent, specific, action-oriented\n\nMy current copy: [PASTE_YOUR_COPY]\nMy product: [PRODUCT_DESCRIPTION]\nMy target customer: [WHO_IT'S_FOR]\n\nReturn the new page copy, section by section.`,
    why: 'Addresses the 7 reasons people DON\'T buy. Most landing pages only sell the feature. This sells past the objection.'
  },
  {
    name: 'The 30-Day Content Calendar That Actually Fits Your Life',
    body: `You are a content strategist who only gives specific, executable advice (no fluff).\n\nBuild me a 30-day content calendar for [PLATFORM] in the [NICHE] space.\n\nMy constraints:\n- I have [HOURS_PER_DAY] hours per day to create\n- Budget: $[BUDGET] total (could be $0)\n- Goal: [SPECIFIC_OUTCOME — e.g. 500 new subs, 10 sales calls, $1K MRR]\n- My 3 unfair advantages: [LIST_3]\n- My current audience size: [NUMBER]\n\nFor each day, give me:\n- Exact post type (video/carousel/text/story)\n- Working title\n- Hook (first line)\n- CTA at the end\n- Why this post moves me toward the goal\n\nGroup the 30 days into weekly themes so I see the arc.`,
    why: 'Forces ruthless specificity — no vague "post consistently" advice. Every day is executable.'
  },
];

const PROMPT_CATEGORIES = [
  { icon: '✉️', title: 'Cold Outreach', count: 4, examples: 'Reply-magnet email, LinkedIn DM opener, warm intro ask, follow-up that doesn\'t suck' },
  { icon: '📄', title: 'Landing Page Copy', count: 3, examples: 'Hero rewrite, objection handler, pricing page psychology' },
  { icon: '📱', title: 'Social Content', count: 4, examples: '30-day calendar, hook generator, LinkedIn carousel, viral video script' },
  { icon: '🖼️', title: 'AI Image Gen', count: 3, examples: 'Ghibli-style portrait, product hero shot, Pinterest-ready pin' },
  { icon: '💰', title: 'Sales & Offers', count: 3, examples: 'Irresistible offer builder, price anchoring, money-back guarantee copy' },
  { icon: '⚡', title: 'Productivity', count: 3, examples: 'Daily priorities from a brain dump, meeting notes → action items, decision matrix' },
];

export default function StarterPack() {
  return (
    <Layout>
      <Head>
        <title>Best 20 AI Prompts Starter Pack — $9 | Midas Tools</title>
        <meta name="description" content="20 hand-picked AI prompts that actually work. Cold outreach, landing pages, content calendars, AI images, sales copy, productivity. $9 instant download. Works with ChatGPT, Claude, Gemini." />
        <meta property="og:title" content="Best 20 AI Prompts Starter Pack — $9" />
        <meta property="og:description" content="20 battle-tested AI prompts. Cold outreach, landing pages, content, images, sales, productivity. $9. Instant download." />
        <meta property="og:url" content="https://www.midastools.co/starter-pack" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Best 20 AI Prompts — Starter Pack",
          "description": "20 hand-picked AI prompts for cold outreach, landing pages, content, images, sales, and productivity.",
          "url": "https://www.midastools.co/starter-pack",
          "image": "https://www.midastools.co/og-image.png",
          "offers": {
            "@type": "Offer",
            "price": "9",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": "30",
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          "brand": "Midas Tools"
        }) }} />
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", background: '#FFFFFF', color: '#111827' }}>
        {/* Hero */}
        <section style={{ padding: '60px 24px 40px', textAlign: 'center', background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#FEF3C7', color: '#92400E', fontSize: 12, fontWeight: 700, borderRadius: 99, marginBottom: 20, letterSpacing: 1 }}>
              TRY US FOR $9 → UPGRADE IF YOU LOVE IT
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
              The Best 20 AI Prompts<br />
              <span style={{ color: '#3B5FFF' }}>from our entire catalog</span>
            </h1>
            <p style={{ fontSize: 19, color: '#6B7280', margin: '0 0 32px', lineHeight: 1.5 }}>
              Cold emails, landing pages, 30-day content calendars, AI images, sales copy, productivity — the 20 prompts our best customers actually use. Instant download. Works with ChatGPT, Claude, Gemini.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              <a href={STRIPE_URL} style={{
                display: 'inline-block', background: '#3B5FFF', color: '#FFF', fontWeight: 700, fontSize: 18,
                padding: '18px 36px', borderRadius: 99, textDecoration: 'none', boxShadow: '0 4px 14px rgba(59,95,255,0.3)',
              }}>
                Get 20 Prompts — $9 →
              </a>
            </div>
            <div style={{ fontSize: 14, color: '#6B7280', display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>✓ Instant download</span>
              <span>✓ 30-day guarantee</span>
              <span>✓ Lifetime updates</span>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section style={{ padding: '40px 24px', maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', margin: '0 0 8px' }}>What's Inside</h2>
          <p style={{ fontSize: 16, color: '#6B7280', textAlign: 'center', margin: '0 0 36px' }}>20 prompts across 6 categories — the best of our $29 Mega Pack.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {PROMPT_CATEGORIES.map(cat => (
              <div key={cat.title} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{cat.title}</div>
                <div style={{ fontSize: 13, color: '#3B5FFF', fontWeight: 600, marginBottom: 8 }}>{cat.count} prompts</div>
                <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.5 }}>{cat.examples}</div>
              </div>
            ))}
          </div>
        </section>

        {/* See It In Action — 3 real sample prompts */}
        <section style={{ padding: '40px 24px', maxWidth: 820, margin: '0 auto', background: '#F9FAFB' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', margin: '0 0 8px' }}>See 3 of the 20 Prompts (Real)</h2>
          <p style={{ fontSize: 16, color: '#6B7280', textAlign: 'center', margin: '0 0 32px' }}>
            No fake preview. These are actual prompts from the pack — paste them into ChatGPT right now.
          </p>

          {SAMPLE_PROMPTS.map((p, i) => (
            <div key={i} style={{ background: '#FFF', border: '1px solid #E5E7EB', borderRadius: 16, padding: 24, marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#3B5FFF', marginBottom: 6 }}>
                PROMPT {i + 1} OF 20
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 14px' }}>{p.name}</h3>
              <div style={{ background: '#0F172A', color: '#E2E8F0', padding: 18, borderRadius: 10, fontSize: 13, fontFamily: 'monospace', lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
                {p.body.split(/(\[[A-Z_']+\])/).map((part, idx) =>
                  part.match(/^\[[A-Z_']+\]$/)
                    ? <span key={idx} style={{ color: '#FBBF24', fontWeight: 700 }}>{part}</span>
                    : <span key={idx}>{part}</span>
                )}
              </div>
              <p style={{ fontSize: 14, color: '#6B7280', margin: '14px 0 0', fontStyle: 'italic' }}>Why it works: {p.why}</p>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href={STRIPE_URL} style={{
              display: 'inline-block', background: '#3B5FFF', color: '#FFF', fontWeight: 700, fontSize: 17,
              padding: '16px 32px', borderRadius: 99, textDecoration: 'none',
            }}>
              Get all 20 prompts — $9
            </a>
            <div style={{ fontSize: 13, color: '#6B7280', marginTop: 10 }}>That's 17 more like the ones above.</div>
          </div>
        </section>

        {/* Upgrade path */}
        <section style={{ padding: '40px 24px', maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B5FFF 100%)', borderRadius: 20, padding: 36, color: '#FFF', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 10 }}>WANT MORE AFTER THIS?</div>
            <h3 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 12px' }}>Upgrade to the full 200+ prompts</h3>
            <p style={{ fontSize: 16, opacity: 0.9, margin: '0 0 20px' }}>
              After you buy the starter pack, you can upgrade to the Mega Pack for just the difference ($20). Or grab all 21 kits for $97.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/ai-prompt-mega-pack" style={{ background: '#FFF', color: '#1E3A8A', fontWeight: 700, padding: '12px 24px', borderRadius: 99, textDecoration: 'none' }}>
                Mega Pack — $29
              </a>
              <a href="/bundle" style={{ background: 'transparent', color: '#FFF', fontWeight: 700, padding: '12px 24px', borderRadius: 99, textDecoration: 'none', border: '2px solid #FFF' }}>
                All 21 Kits — $97
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '40px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 24px', textAlign: 'center' }}>Quick Questions</h2>
          {[
            { q: 'Why only $9?', a: 'It\'s a starter pack — we\'d rather you try us for $9, love the prompts, and decide if you want the full 200+ at $29 (or all 21 kits for $97). No pressure.' },
            { q: 'What do I actually get?', a: '20 prompts delivered as copy-paste text. Each prompt includes variable placeholders (like [COMPANY_NAME]) so you can customize it to your use case instantly.' },
            { q: 'Works with ChatGPT? Claude? Gemini?', a: 'Yes — all three. Prompts are written to be model-agnostic. If you have a free ChatGPT account, you can use every one of them.' },
            { q: 'Is this the same as the $29 Mega Pack?', a: 'It\'s the best 20 out of the 200+ in the Mega Pack. If you buy this and want the full pack, we\'ll credit your $9 toward the upgrade.' },
            { q: '30-day guarantee?', a: 'Yes. If the prompts don\'t save you time or make you better AI output, email us and we refund. No questions.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 16, padding: 20, background: '#F9FAFB', borderRadius: 12, border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.q}</div>
              <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item.a}</div>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section style={{ padding: '60px 24px', textAlign: 'center', background: '#111827', color: '#FFF' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 16px' }}>20 Prompts. $9. Instant Download.</h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', margin: '0 0 24px' }}>One coffee. Better AI output for the rest of the year.</p>
          <a href={STRIPE_URL} style={{
            display: 'inline-block', background: '#3B5FFF', color: '#FFF', fontWeight: 700, fontSize: 18,
            padding: '18px 40px', borderRadius: 99, textDecoration: 'none',
          }}>
            Get the Starter Pack — $9 →
          </a>
        </section>
      </div>
    </Layout>
  );
}
