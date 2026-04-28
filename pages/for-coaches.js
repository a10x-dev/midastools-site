import Head from 'next/head';
import Layout from '../components/Layout';

// Stripe payment links — see CLAUDE.md memory and pages/services.js
const STRIPE_STARTER = 'https://buy.stripe.com/fZueVcb8rgXv3ysc8acMM0t'; // $9 starter pack
const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d'; // $97 mega pack — verified in pages/ai-prompt-mega-pack.js:6
const STRIPE_DFY_CONTENT = 'https://buy.stripe.com/28EdR84K36iR5GAa02cMM0u'; // $199 AI Content Month DFY
const STRIPE_DFY_BRAND = 'https://buy.stripe.com/cNi14mccv36F3ys1twcMM0v'; // $299 Brand Starter Pack DFY
const STRIPE_ASSESSMENT = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03'; // $997 AI Clarity Assessment — see /ai-audit

const PAINS = [
  {
    icon: '🎯',
    title: 'Content burnout',
    body: 'You became a coach to coach — not to write 30 IG posts a month, 4 newsletters, 12 lead-magnet drafts, and a sales page that converts.',
  },
  {
    icon: '⛓️',
    title: 'Trading hours for dollars',
    body: 'You\'re fully booked. The only way to grow is to scale yourself — but every "scale" tool requires you to become a marketer first.',
  },
  {
    icon: '🤖',
    title: 'Generic AI doesn\'t know coaching',
    body: 'ChatGPT writes like a robot intern. Most prompt packs target marketers and devs. Nothing is built for the way coaches actually sell.',
  },
];

const COACH_PROMPTS = [
  {
    name: 'The Niche Definer (find your $200/hr lane)',
    body: `You are a positioning strategist who only gives executable advice.\n\nMy current coaching offer: [DESCRIBE_OFFER]\nMy target client: [WHO]\nMy 3 unfair advantages: [LIST_3]\nMy current rate: $[RATE]\n\nReturn:\n1. The $200+/hour niche I should narrow to (one sentence)\n2. The exact 5-word phrase my ICP would Google to find me\n3. 3 lead-magnet titles that convert at >25%\n4. The 1-line transformation promise for my landing page hero\n5. The objection that's costing me 80% of sales today, and the 1-sentence reframe that kills it`,
    why: 'Forces specificity. Most coaches market to "everyone" and convert no one.',
  },
  {
    name: 'The 30-Day Content Engine for Coaches',
    body: `You are a content strategist who has scaled 12 coaching practices to 6-figures.\n\nBuild me 30 days of content for a [NICHE] coach.\n\nPlatform: [IG / LinkedIn / Newsletter — pick one]\nMy 5 client wins to reference: [LIST_5]\nMy best transformation story: [DESCRIBE]\nMy CTA goal: [book a call / download a lead magnet / join the waitlist]\n\nFor each of the 30 days, give:\n- Hook (the line that stops the scroll)\n- 3-line story or proof point\n- The CTA\n- Why this post moves my reader 1 step closer to working with me\n\nGroup the 30 days into 4 weekly themes that build a narrative arc.`,
    why: 'Replaces hiring a $1,500/mo content strategist. Outputs in 90 seconds.',
  },
  {
    name: 'The Discovery Call Script That Closes 60%',
    body: `You are a sales coach trained on Sandler + Sam Ovens.\n\nWrite a 25-minute discovery call script for a [NICHE] coach selling a $[PRICE] program.\n\nThe call must:\n1. Open with one disqualifying question (so I never sell the wrong fit)\n2. Surface their #1 pain in their own words\n3. Quantify the cost of inaction (in $ AND in life-impact)\n4. Position my program as the bridge\n5. Handle the 3 most common objections BEFORE they\'re raised\n6. End with a clean ask for the close (no "let me think about it")\n\nReturn the full script with estimated minute markers.`,
    why: 'Most coaches sell on vibes. This sells on structure — and structure compounds.',
  },
];

const TIERS = [
  {
    tag: 'Try us first',
    name: 'Coach Starter Pack',
    price: 9,
    href: STRIPE_STARTER,
    desc: '20 hand-picked prompts. Cold outreach, landing pages, 30-day content calendars, sales copy. Instant download.',
    bullets: [
      '20 prompts across 6 categories',
      'Works with ChatGPT, Claude, Gemini',
      '30-day money-back guarantee',
    ],
    cta: 'Get 20 prompts — $9',
    accent: '#FEF3C7',
    accentText: '#92400E',
  },
  {
    tag: 'Most popular',
    name: 'Coach Edition Mega Pack',
    price: 97,
    href: STRIPE_MEGA_PACK,
    desc: '200+ prompts across content, branding, sales pages, lead magnets, email pipelines, niche definition. Lifetime ownership — no subscription.',
    bullets: [
      '200+ prompts, lifetime access',
      'Replaces $360/yr Jasper, $588/yr Copy.ai',
      'Free updates forever',
      '30-day money-back guarantee',
    ],
    cta: 'Buy Mega Pack — $97',
    featured: true,
    accent: 'rgba(59,95,255,0.08)',
    accentText: '#3B5FFF',
  },
  {
    tag: 'Done for you',
    name: 'AI Content Month',
    price: 199,
    href: STRIPE_DFY_CONTENT,
    desc: 'You stop writing. We deliver 30 days of social posts, newsletters, captions, and content calendar — built for your coaching brand. 48-hour turnaround.',
    bullets: [
      '10 LinkedIn + 10 IG + 10 Twitter posts',
      '4 newsletter editions',
      'Brand voice cheat sheet',
      'Posting calendar with optimal times',
    ],
    cta: 'Book Content Month — $199',
    accent: '#DBEAFE',
    accentText: '#1E40AF',
  },
  {
    tag: 'Best value',
    name: 'Coach Brand Starter Pack',
    price: 299,
    href: STRIPE_DFY_BRAND,
    desc: 'The full DFY package: brand voice, 50 social posts, email sequences, ad copy, landing page copy, and a positioning brief. 72-hour delivery.',
    bullets: [
      'Brand voice + messaging guide',
      '50 multi-platform social posts',
      '10 email templates (welcome / promo / nurture)',
      'Landing page copy hero → CTA',
      'Competitor positioning brief',
    ],
    cta: 'Book Brand Pack — $299',
    accent: '#D1FAE5',
    accentText: '#065F46',
  },
  {
    tag: 'Strategic',
    name: 'AI Clarity Assessment',
    price: 997,
    href: '/ai-audit',
    desc: 'A 7-day productized consulting engagement. We map your weekly time sinks, build a custom AI tool stack, and deliver a 4-day quick-start to recover 5+ hours/week. Full refund if we don\'t hit the target.',
    bullets: [
      'Pre-call research dossier',
      '60-min discovery interview',
      'Priority matrix + tool recommendations',
      '4-day quick-start plan',
      'Financial impact projection',
      '30-min review call walkthrough',
    ],
    cta: 'Book Assessment — $997',
    accent: '#FEF3C7',
    accentText: '#92400E',
  },
];

const FAQS = [
  {
    q: 'Why coaches and consultants specifically?',
    a: 'Because the math works. A coach billing $200/hour gets ROI on a $97 prompt pack in the first 30 minutes saved. A side-hustler making $530/month doesn\'t. We\'re building for the wallet that actually pays for output.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'No. The kits are copy-paste prompts. The DFY services mean we do the work — you fill out a 5-minute brief and we deliver finished assets via email.',
  },
  {
    q: 'Will this work for my niche (life / business / fitness / executive / spiritual)?',
    a: 'Yes. The prompts use placeholders for your niche, ICP, and offer. We\'ve tested across 12+ coaching verticals.',
  },
  {
    q: 'How is this different from Paperbell, Thinkific, CoachVox?',
    a: 'Paperbell is a CRM. Thinkific is course hosting. CoachVox is an AI clone of you. We\'re the productivity layer that runs your content, brand, and lead-gen — the part those tools don\'t cover.',
  },
  {
    q: 'What if I don\'t love it?',
    a: '30-day money-back guarantee on every kit and every DFY service. No questions, no support tickets — just email and we refund.',
  },
];

export default function ForCoaches() {
  const title = 'AI for Coaches & Consultants — Content, Branding & Lead-Gen | Midas Tools';
  const description = 'AI productivity stack for solo coaches and consultants. Done-for-you content, branding, and prompt kits that turn your expertise into recurring revenue. From $9.';
  const url = 'https://www.midastools.co/for-coaches';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Productivity Stack for Coaches',
          description,
          url,
          provider: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI for Coaches',
            itemListElement: TIERS.map(t => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: t.name, description: t.desc },
              price: t.price,
              priceCurrency: 'USD',
            })),
          },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }) }} />
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", background: '#FFFFFF', color: '#111827' }}>

        {/* HERO */}
        <section style={{ padding: '72px 24px 48px', textAlign: 'center', background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#FEF3C7', color: '#92400E', fontSize: 12, fontWeight: 700, borderRadius: 99, marginBottom: 20, letterSpacing: 1 }}>
              FOR COACHES, CONSULTANTS & EXPERTS
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.025em', margin: '0 0 20px' }}>
              Turn your expertise into <span style={{ color: '#3B5FFF' }}>recurring revenue</span>.
            </h1>
            <p style={{ fontSize: 20, color: '#4B5563', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.55 }}>
              The AI productivity stack for solo coaches and consultants. Done-for-you content, branding, and lead-gen — so you stop trading hours for dollars and start scaling.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
              <a href={STRIPE_MEGA_PACK} style={{
                display: 'inline-block', background: '#3B5FFF', color: '#FFF', fontWeight: 700, fontSize: 17,
                padding: '16px 30px', borderRadius: 99, textDecoration: 'none', boxShadow: '0 4px 14px rgba(59,95,255,0.3)',
              }}>
                Buy Coach Mega Pack — $97 →
              </a>
              <a href={STRIPE_STARTER} style={{
                display: 'inline-block', background: '#FFF', color: '#111827', fontWeight: 700, fontSize: 17,
                padding: '16px 30px', borderRadius: 99, textDecoration: 'none', border: '2px solid #E5E7EB',
              }}>
                Try $9 Starter Pack
              </a>
            </div>
            <div style={{ fontSize: 14, color: '#6B7280', display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>✓ Lifetime ownership — no subscriptions</span>
              <span>✓ 30-day guarantee</span>
              <span>✓ Works with ChatGPT, Claude, Gemini</span>
            </div>
          </div>
        </section>

        {/* AUDIT BANNER — premium service above kits */}
        <section style={{ padding: '32px 24px 16px', maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%)',
            border: '1px solid #F59E0B',
            borderRadius: 18,
            padding: '28px 32px',
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
            <div style={{ flex: '1 1 320px' }}>
              <div style={{ display: 'inline-block', padding: '4px 10px', background: '#0F172A', color: '#FCD34D', fontSize: 10, fontWeight: 800, borderRadius: 99, marginBottom: 10, letterSpacing: 1 }}>NEW &middot; PREMIUM SERVICE</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 8px', color: '#0F172A', letterSpacing: '-0.5px' }}>
                Not sure which kit fits? Get a $997 AI Audit first.
              </h3>
              <p style={{ fontSize: 15, color: '#1F2937', margin: 0, lineHeight: 1.5 }}>
                48-hour custom report. We map your bottleneck, recommend the exact AI moves, and tell you which kits (if any) are worth it. <strong>5+ hrs/week recovered or full refund.</strong>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="/ai-audit" style={{
                display: 'inline-block', background: '#0F172A', color: '#FFF', fontWeight: 700, fontSize: 14,
                padding: '13px 22px', borderRadius: 99, textDecoration: 'none', whiteSpace: 'nowrap',
              }}>Book the Audit &rarr;</a>
              <a href="/audit-template" style={{
                display: 'inline-block', background: 'rgba(15,23,42,0.08)', color: '#0F172A', fontWeight: 700, fontSize: 14,
                padding: '13px 22px', borderRadius: 99, textDecoration: 'none', whiteSpace: 'nowrap',
              }}>Free template</a>
            </div>
          </div>
        </section>

        {/* WHY THIS EXISTS — pain points */}
        <section style={{ padding: '56px 24px', maxWidth: 1040, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            You became a coach to coach.
          </h2>
          <p style={{ fontSize: 17, color: '#6B7280', textAlign: 'center', margin: '0 0 40px', maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            Not to spend Sunday nights writing IG carousels and re-writing your sales page for the third time.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {PAINS.map(p => (
              <div key={p.title} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{p.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px' }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SAMPLE PROMPTS */}
        <section style={{ padding: '56px 24px', background: '#F9FAFB' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ display: 'inline-block', padding: '6px 14px', background: '#FFF', color: '#3B5FFF', fontSize: 12, fontWeight: 700, borderRadius: 99, marginBottom: 16, letterSpacing: 1, border: '1px solid #DBEAFE' }}>
                SEE EXACTLY WHAT YOU GET
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 12px' }}>
                3 prompts from the Coach Mega Pack
              </h2>
              <p style={{ fontSize: 16, color: '#6B7280', margin: 0 }}>Real prompts. Variables in [BRACKETS]. Copy, fill, paste into your AI.</p>
            </div>

            {COACH_PROMPTS.map((p, i) => (
              <div key={i} style={{ background: '#FFF', border: '1px solid #E5E7EB', borderRadius: 16, padding: 28, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', background: '#FEF3C7', color: '#92400E', fontSize: 11, fontWeight: 700, borderRadius: 99, letterSpacing: 0.5 }}>
                    PROMPT {i + 1}
                  </span>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>{p.name}</h3>
                </div>
                <pre style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, padding: 18, fontSize: 13.5, lineHeight: 1.65, fontFamily: "'SF Mono', Menlo, monospace", whiteSpace: 'pre-wrap', overflowX: 'auto', margin: '0 0 14px', color: '#1F2937' }}>
                  {p.body.split(/(\[[A-Z_0-9'\s]+\])/g).map((chunk, j) =>
                    chunk.match(/^\[[A-Z_0-9'\s]+\]$/)
                      ? <span key={j} style={{ background: '#FEF3C7', color: '#92400E', padding: '1px 5px', borderRadius: 4, fontWeight: 700 }}>{chunk}</span>
                      : <span key={j}>{chunk}</span>
                  )}
                </pre>
                <p style={{ fontSize: 14, color: '#6B7280', margin: 0, fontStyle: 'italic' }}>
                  <strong style={{ color: '#111827', fontStyle: 'normal' }}>Why it works:</strong> {p.why}
                </p>
              </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <a href={STRIPE_MEGA_PACK} style={{
                display: 'inline-block', background: '#3B5FFF', color: '#FFF', fontWeight: 700, fontSize: 17,
                padding: '16px 32px', borderRadius: 99, textDecoration: 'none', boxShadow: '0 4px 14px rgba(59,95,255,0.3)',
              }}>
                Get 200+ more — $97 lifetime →
              </a>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section style={{ padding: '64px 24px', maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 38px)', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Pick your speed
          </h2>
          <p style={{ fontSize: 17, color: '#6B7280', textAlign: 'center', maxWidth: 600, margin: '0 auto 44px' }}>
            DIY with kits, or skip the work entirely with done-for-you services. Same AI either way — your time decides.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {TIERS.map(t => (
              <div key={t.name} style={{
                background: '#FFF',
                border: t.featured ? '2px solid #3B5FFF' : '1px solid #E5E7EB',
                borderRadius: 18,
                padding: 28,
                position: 'relative',
                boxShadow: t.featured ? '0 12px 32px rgba(59,95,255,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'inline-block', padding: '4px 10px', background: t.accent, color: t.accentText, fontSize: 11, fontWeight: 700, borderRadius: 99, marginBottom: 14, letterSpacing: 0.5 }}>
                  {t.tag}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{t.name}</h3>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#111827', margin: '0 0 12px' }}>
                  ${t.price}
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#6B7280', marginLeft: 6 }}>once</span>
                </div>
                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.55, margin: '0 0 18px' }}>{t.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px' }}>
                  {t.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 13.5, color: '#374151', padding: '6px 0', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#3B5FFF', fontWeight: 800 }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href={t.href} style={{
                  display: 'block', textAlign: 'center', background: t.featured ? '#3B5FFF' : '#111827',
                  color: '#FFF', fontWeight: 700, fontSize: 14.5, padding: '14px 18px', borderRadius: 99, textDecoration: 'none',
                }}>
                  {t.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SUBSCRIPTION KILLER COMPARISON */}
        <section style={{ padding: '56px 24px', background: '#0F172A', color: '#F9FAFB' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 14px', color: '#FFF' }}>
              Stop renting AI. <span style={{ color: '#FCD34D' }}>Own it.</span>
            </h2>
            <p style={{ fontSize: 17, color: '#CBD5E1', margin: '0 0 36px', lineHeight: 1.6 }}>
              The big AI tools want $30–$50/month forever. We sell lifetime ownership for one payment. Year-1 math:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, textAlign: 'left' }}>
              {[
                { name: 'Jasper', cost: '$360/yr', sub: 'subscription' },
                { name: 'Copy.ai Pro', cost: '$588/yr', sub: 'subscription' },
                { name: 'ChatGPT Teams', cost: '$300/yr', sub: 'subscription' },
                { name: 'Midas Coach Mega Pack', cost: '$97 once', sub: 'lifetime', highlight: true },
              ].map(c => (
                <div key={c.name} style={{
                  background: c.highlight ? 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)' : '#1E293B',
                  color: c.highlight ? '#0F172A' : '#F9FAFB',
                  padding: 18, borderRadius: 14,
                }}>
                  <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 700, marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.02em' }}>{c.cost}</div>
                  <div style={{ fontSize: 11, opacity: 0.75, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '64px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 32px)', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em', margin: '0 0 36px' }}>
            Questions coaches ask
          </h2>
          {FAQS.map((f, i) => (
            <details key={i} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '18px 22px', marginBottom: 12 }}>
              <summary style={{ fontSize: 16, fontWeight: 700, cursor: 'pointer', color: '#111827' }}>{f.q}</summary>
              <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.65, margin: '12px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </section>

        {/* FINAL CTA */}
        <section style={{ padding: '64px 24px 96px', textAlign: 'center', background: 'linear-gradient(180deg, #FFF 0%, #F9FAFB 100%)' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.025em', margin: '0 0 18px' }}>
              Your time is the ROI.
            </h2>
            <p style={{ fontSize: 17, color: '#4B5563', margin: '0 0 28px', lineHeight: 1.6 }}>
              Every hour you spend writing content is an hour you don't spend coaching, selling, or sleeping.
              Pick the speed that fits your week.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={STRIPE_MEGA_PACK} style={{
                display: 'inline-block', background: '#3B5FFF', color: '#FFF', fontWeight: 700, fontSize: 17,
                padding: '16px 30px', borderRadius: 99, textDecoration: 'none', boxShadow: '0 4px 14px rgba(59,95,255,0.3)',
              }}>
                Coach Mega Pack — $97 →
              </a>
              <a href={STRIPE_DFY_BRAND} style={{
                display: 'inline-block', background: '#111827', color: '#FFF', fontWeight: 700, fontSize: 17,
                padding: '16px 30px', borderRadius: 99, textDecoration: 'none',
              }}>
                Done For You — $299 →
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
