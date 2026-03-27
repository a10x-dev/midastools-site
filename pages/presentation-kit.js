import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

const STRIPE_URL = 'https://buy.stripe.com/8x228q6Sb36F2uofkmcMM0m';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function PresentationKit() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'presentation-kit-lead', business: 'Presentations' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  const faqItems = [
    { q: 'Do I need presentation design experience?', a: 'No. These prompts generate the content, structure, and talking points for your presentations. You paste the AI output into your favorite tool — PowerPoint, Google Slides, Keynote, Canva, or Pitch — and the design follows naturally from great structure.' },
    { q: 'Which presentation tools does this work with?', a: 'Any presentation tool — PowerPoint, Google Slides, Keynote, Canva, Pitch, Beautiful.ai, Prezi, and more. The prompts generate content, outlines, and slide-by-slide structures you paste into any tool.' },
    { q: 'Can I use this for client work?', a: 'Yes. The templates are designed to be customized with different industries, audiences, and brands. Consultants, agencies, and freelancers use this kit across all their client projects.' },
    { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
    { q: 'How is this different from presentation templates?', a: 'Static slide templates give you the same layouts everyone else uses. AI prompt templates generate unique, tailored content every time — customized to your topic, audience, and goals. You never deliver a generic deck again.' },
    { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
  ];

  return (
    <Layout>
      <Head>
        <title>AI Presentation & Pitch Deck Kit — Pitch Decks, Sales Decks, Conference Talks & Business Reports | Midas Tools</title>
        <meta name="description" content="125+ AI prompts and templates for presentations. Pitch decks, sales presentations, conference talks, business reports, training workshops, and slide design. $29 one-time." />
        <meta name="keywords" content="AI presentation prompts, pitch deck AI, sales deck templates, conference talk generator, business presentation AI, slide design prompts, AI pitch deck" />
        <meta property="og:title" content="AI Presentation & Pitch Deck Kit — Pitch Decks, Sales Decks & Conference Talks | Midas Tools" />
        <meta property="og:description" content="125+ AI prompts and templates for presentations. Pitch decks, sales presentations, conference talks, business reports, and slide design — all for $29 one-time." />
        <meta property="og:url" content="https://www.midastools.co/presentation-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Presentation & Pitch Deck Kit — Midas Tools" />
        <meta name="twitter:description" content="125+ AI prompts for presentations. Pitch decks, sales presentations, conference talks, business reports, and slide design. $29 one-time." />
        <link rel="canonical" href="https://www.midastools.co/presentation-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Presentation & Pitch Deck Kit",
          "description": "125+ AI prompts and templates for presentations — pitch decks, sales presentations, conference talks, business reports, training workshops, and slide design & storytelling.",
          "url": "https://www.midastools.co/presentation-kit",
          "brand": { "@type": "Brand", "name": "Midas Tools" },
          "offers": {
            "@type": "Offer",
            "price": "29.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": STRIPE_URL
          }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}} />
      </Head>

      <style>{`
        section{max-width:820px;margin:0 auto;padding:80px 40px}
        h1{font-size:clamp(34px,5.5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:#7C3AED}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:#7C3AED}
        .kit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:48px}
        .kit-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;transition:border-color 0.2s}
        .kit-card:hover{border-color:var(--gray-700)}
        .pain-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;text-align:center}
        .stat-accent{color:#7C3AED}
        @media(max-width:700px){
          section{padding:60px 20px}
          .pain-grid,.kit-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge" style={{marginBottom:32}}>Built for Presenters & Founders</div>
        <h1>Build Decks That Win.<br />Pitches That Land.<br /><span>In Minutes.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          125+ AI prompts and templates for presentations — pitch decks, sales presentations, conference talks, business reports, training workshops, and slide storytelling. All for $29.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,maxWidth:560,margin:'0 auto 40px'}}>
          {[
            { stat: '125+', label: 'Prompts' },
            { stat: '6', label: 'Categories' },
            { stat: '$29', label: 'One-time' },
            { stat: 'Any LLM', label: 'Compatible' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:16}}>
              <div style={{fontSize:22,fontWeight:900,color:'#7C3AED'}}>{s.stat}</div>
              <div style={{fontSize:12,color:'var(--gray-400)',marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>

        <a href={STRIPE_URL} className="btn-primary">Get the Presentation Kit &mdash; $29 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:16,padding:48,textAlign:'center',marginBottom:48}}>
          <h2 style={{fontSize:28}}>Presentations Take Too Long to Build</h2>
          <p style={{color:'var(--gray-400)',fontSize:17,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            Pitch decks, sales presentations, conference talks, quarterly reports — building slides from scratch is painful. This kit gives you <strong style={{color:'#7C3AED'}}>125+ battle-tested templates</strong> so you can create persuasive presentations in minutes, not days.
          </p>
        </div>

        <div className="pain-grid">
          {[
            { stat: '8+ hrs', label: 'Executives spend 8+ hours per deck on average' },
            { stat: '91%', label: 'of presenters feel more confident with better slides' },
            { stat: '47%', label: 'of professionals say presentations are their #1 dread' },
            { stat: '+43%', label: 'Well-structured decks are 43% more persuasive' },
          ].map(s => (
            <div key={s.label} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:20,fontWeight:900,color:'#7C3AED',marginBottom:8}}>{s.stat}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside — 6 category grid */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>Every AI template a presenter needs</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built prompts and frameworks. Copy, paste, build decks that win.</p>

        <div className="kit-grid">
          {[
            { title: 'Pitch Decks (20+ prompts)', desc: 'Startup investor pitch decks, seed round narratives, Series A storytelling, problem-solution frameworks, traction slide generators, and competitive landscape layouts.' },
            { title: 'Sales Presentations (25+ templates)', desc: 'Product demo decks, enterprise sales presentations, ROI calculators, objection-handling slides, customer success stories, and proposal deck structures.' },
            { title: 'Conference Talks (20+ prompts)', desc: 'Keynote outlines, TEDx-style talk structures, panel discussion prep, workshop facilitation guides, audience engagement frameworks, and speaker bio generators.' },
            { title: 'Business Reports (20+ templates)', desc: 'Quarterly business reviews, board meeting decks, annual report narratives, KPI dashboards, strategy presentations, and executive summary frameworks.' },
            { title: 'Training & Workshops (20+ prompts)', desc: 'Employee onboarding decks, training module outlines, workshop agendas, interactive exercise slides, knowledge assessment frameworks, and facilitation scripts.' },
            { title: 'Slide Design & Storytelling (20+ formulas)', desc: 'Narrative arc frameworks, data visualization prompts, slide layout principles, opening hook generators, closing CTA formulas, and visual metaphor templates.' },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Preview */}
      <section>
        <div className="section-label">Prompt Preview</div>
        <h2>See what's inside</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,lineHeight:1.7}}>3 real prompts from the kit. Copy-paste ready.</p>

        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {[
            {
              title: 'Startup Investor Pitch Deck',
              prompt: 'I\'m building [STARTUP NAME], a [ONE-LINE DESCRIPTION] for [TARGET MARKET]. We\'re raising a [SEED/SERIES A] round of [AMOUNT]. Create a 12-slide investor pitch deck outline. For each slide provide: Slide title | Key message (1 sentence) | 3-4 bullet points | Suggested visual/chart. Slides: 1) Hook/Problem 2) Solution 3) Market Size (TAM/SAM/SOM) 4) Product Demo 5) Business Model 6) Traction & Metrics 7) Competitive Landscape 8) Go-to-Market Strategy 9) Team 10) Financial Projections 11) The Ask 12) Vision/Closing. Tone: confident, data-driven, compelling. Industry: [INDUSTRY].',
            },
            {
              title: 'Sales Demo Presentation',
              prompt: 'I sell [PRODUCT/SERVICE] at [PRICE POINT] to [TARGET BUYER ROLE] at [COMPANY TYPE]. Create a 10-slide sales presentation structure. For each slide provide: Slide title | Talking points (30 seconds each) | Key visual suggestion. Flow: 1) Attention-grabbing opening stat 2) Their problem (3 pain points) 3) Cost of inaction 4) Your solution overview 5) How it works (3 steps) 6) Feature deep-dive with benefits 7) Case study / social proof 8) ROI calculation 9) Pricing & packages 10) Next steps + CTA. Include objection-handling notes for slides 6-9. Tone: consultative, not salesy.',
            },
            {
              title: 'Conference Keynote Outline',
              prompt: 'I\'m giving a [LENGTH]-minute keynote at [CONFERENCE/EVENT] to an audience of [AUDIENCE DESCRIPTION]. My topic is [TOPIC]. Create a complete talk outline with: Opening hook (choose from: surprising stat, personal story, provocative question, or bold prediction) | 3 main sections with key points and transitions | Audience engagement moment (poll, show of hands, or reflection) | Memorable closing with call-to-action. For each section include: Time allocation | Key slide visuals | Speaker notes (2-3 sentences). Also provide: 5 potential talk titles | 2-sentence speaker bio | 3 audience takeaways for the event program. Tone: [STYLE — inspiring/educational/provocative].',
            },
          ].map((p, i) => (
            <div key={i} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
              <div style={{fontSize:12,fontWeight:700,color:'#7C3AED',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Example Prompt</div>
              <div style={{fontSize:16,fontWeight:700,marginBottom:12}}>{p.title}</div>
              <div style={{background:'var(--gray-800)',borderRadius:10,padding:20,fontSize:14,color:'var(--gray-400)',lineHeight:1.7,fontFamily:'monospace'}}>{p.prompt}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section>
        <h2 style={{textAlign:'center'}}>Built for <span>anyone who presents</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Startup Founders', desc: 'You need a pitch deck that lands funding but don\'t have weeks to build it. These templates generate investor-ready decks in minutes, not months.' },
            { name: 'Sales Teams', desc: 'You run demos and close deals every week. Skip the blank slides and generate persuasive sales presentations customized to each prospect instantly.' },
            { name: 'Consultants', desc: 'You deliver client presentations constantly. Get strategy decks, project proposals, and workshop materials built with AI — faster than ever.' },
            { name: 'Executives', desc: 'Board meetings, quarterly reviews, strategy presentations — generate polished executive decks with the right data, narrative, and structure every time.' },
            { name: 'Educators & Trainers', desc: 'Course lectures, training workshops, onboarding sessions — create engaging educational presentations with clear structure and interactive elements.' },
            { name: 'Conference Speakers', desc: 'Keynotes, panels, workshops — build talks that captivate audiences with proven storytelling frameworks and slide structures that keep people engaged.' },
          ].map(c => (
            <div key={c.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{c.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI / Stats */}
      <section>
        <div style={{background:'rgba(124,58,237,0.04)',border:'1px solid rgba(124,58,237,0.15)',borderRadius:20,padding:48,textAlign:'center'}}>
          <h2>The Math <span>Speaks for Itself</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32}}>Replace days of deck-building with proven AI templates.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:560,margin:'0 auto'}}>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Kit cost</div>
              <div style={{fontSize:28,fontWeight:900}}>$29</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>Time saved</div>
              <div style={{fontSize:28,fontWeight:900,color:'#7C3AED'}}>40+ hrs</div>
            </div>
            <div style={{background:'var(--gray-800)',borderRadius:12,padding:24}}>
              <div style={{fontSize:11,color:'var(--gray-400)',textTransform:'uppercase',letterSpacing:1,marginBottom:8}}>More persuasive</div>
              <div style={{fontSize:28,fontWeight:900,color:'#7C3AED'}}>43%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(124,58,237,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Presentation Edition</div>
          <h2 style={{marginBottom:8}}>AI Presentation & Pitch Deck Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'#7C3AED',margin:'16px 0 4px'}}>$29</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Pitch deck templates (20+ prompts)',
              'Sales presentation structures (25+ prompts)',
              'Conference talk outlines (20+ prompts)',
              'Business report frameworks (20+ templates)',
              'Training & workshop builders (20+ prompts)',
              'Slide design & storytelling formulas (20+ templates)',
              'Works with any presentation tool',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'#7C3AED',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Presentation Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(124,58,237,0.04)',border:'1px solid rgba(124,58,237,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'#7C3AED',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Best Value</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 15 AI kits for $97</p>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + 14 more AI kits &mdash; $535 value. Save 82%.</p>
          <a href={BUNDLE_URL} style={{color:'#7C3AED',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle — $97 &rarr;
          </a>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Pitch Deck Outline</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you a complete 12-slide pitch deck framework &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(124,58,237,0.08)',border:'1px solid rgba(124,58,237,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free pitch deck outline is on its way.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--gray-700)',background:'var(--gray-800)',color:'var(--text)',fontSize:15,outline:'none',fontFamily:'inherit'}}
              />
              <button
                type="submit"
                disabled={loading}
                style={{background:'#7C3AED',color:'#FFFFFF',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap',fontFamily:'inherit'}}
              >
                {loading ? '...' : 'Send It \u2192'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {faqItems.map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center',marginBottom:32}}>Related Kits</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}}>
          {[
            { name: 'AI Social Media Manager Kit', price: '$39', desc: 'Content calendars, caption hooks, viral formulas, analytics, and paid ad copy for every platform.', href: '/social-media-kit' },
            { name: 'Content Creator Kit', price: '$39', desc: 'Repurposing templates, headline formulas, and a 30-day content calendar generator.', href: '/content-creator-kit' },
            { name: 'Small Business AI Kit', price: '$39', desc: 'Social media, email marketing, customer service, hiring, and operations templates.', href: '/small-business-kit' },
            { name: 'AI Email Marketing Kit', price: '$29', desc: 'Welcome sequences, sales emails, newsletters, cold outreach, and subject line formulas.', href: '/email-marketing-kit' },
          ].map(k => (
            <a key={k.name} href={k.href} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textDecoration:'none',color:'inherit',transition:'border-color 0.2s'}}>
              <div style={{fontSize:15,fontWeight:700,marginBottom:4}}>{k.name} <span style={{color:'#7C3AED'}}>{k.price}</span></div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{k.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{textAlign:'center',paddingBottom:100}}>
        <h2>Ready to build decks that <span>actually win?</span></h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,maxWidth:480,margin:'0 auto 32px',lineHeight:1.7}}>
          125+ prompts. Every presentation type. One price. Stop staring at blank slides and start delivering decks that close deals and captivate audiences.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Presentation Kit &mdash; $29 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>
    </Layout>
  );
}
