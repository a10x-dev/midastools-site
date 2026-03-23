import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

// TODO: Founder — create Stripe product "AI Prompt Mega Pack" at $29 and paste Payment Link here
const STRIPE_URL = 'https://buy.stripe.com/PLACEHOLDER_PROMPT_MEGA_PACK';

export default function AIPromptMegaPack() {
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
        body: JSON.stringify({ email, source: 'prompt-mega-pack-lead', business: 'General' })
      });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>AI Prompt Mega Pack — 200+ Ready-to-Use Prompts | Midas Tools</title>
        <meta name="description" content="200+ battle-tested AI prompts for copywriting, social media, content creation, business operations, personal branding, and productivity. Works with ChatGPT, Claude, Gemini. $29 one-time." />
        <meta property="og:title" content="AI Prompt Mega Pack — 200+ Ready-to-Use AI Prompts" />
        <meta property="og:description" content="The most comprehensive collection of AI prompts for entrepreneurs, creators, and professionals. 200+ prompts across 6 categories. $29." />
        <meta property="og:url" content="https://www.midastools.co/ai-prompt-mega-pack" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AI Prompt Mega Pack",
          "description": "200+ battle-tested AI prompts for business, content, and productivity",
          "offers": { "@type": "Offer", "price": "29", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "brand": { "@type": "Brand", "name": "Midas Tools" },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What AI tools do these prompts work with?", "acceptedAnswer": { "@type": "Answer", "text": "Every prompt works with ChatGPT (GPT-4, GPT-4o), Claude, Google Gemini, Microsoft Copilot, and any other LLM that accepts text prompts." }},
            { "@type": "Question", "name": "How many prompts are included?", "acceptedAnswer": { "@type": "Answer", "text": "200+ prompts across 6 categories: Copywriting & Sales, Social Media, Content Creation, Business Operations, Personal Branding, and Productivity & Automation." }},
            { "@type": "Question", "name": "Is this different from the niche AI kits?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Mega Pack covers broad categories for any professional. Our niche kits go deep on specific industries (real estate, freelancing, etc.) with industry-specific templates." }},
            { "@type": "Question", "name": "Is there a money-back guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — 30-day money-back guarantee, no questions asked. If the prompts don't save you time, we'll refund you." }},
          ]
        })}} />
      </Head>

      <style>{`
        section { max-width: 820px; margin: 0 auto; padding: 80px 40px; }
        h1, h2 { letter-spacing: -1.5px; }
        h1 span, h2 span { color: var(--gold); }
        .kit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .kit-card {
          background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 14px;
          padding: 24px; transition: border-color 0.2s ease;
        }
        .kit-card:hover { border-color: var(--gray-700); }
        .category-icon { font-size: 28px; margin-bottom: 12px; }
        .prompt-count {
          display: inline-block; background: rgba(245,200,66,0.1); color: var(--gold);
          padding: 2px 10px; border-radius: 100px; font-size: 12px; font-weight: 700; margin-bottom: 8px;
        }
        .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 32px; }
        .before-col, .after-col { padding: 28px; border-radius: 14px; }
        .before-col { background: rgba(255,50,50,0.04); border: 1px solid rgba(255,50,50,0.15); }
        .after-col { background: rgba(245,200,66,0.04); border: 1px solid rgba(245,200,66,0.15); }
        .faq-item { border-bottom: 1px solid var(--gray-800); padding: 20px 0; }
        .faq-q { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .faq-a { font-size: 15px; color: var(--gray-400); line-height: 1.7; }
        .tools-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 20px; }
        .tool-badge { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 8px; padding: 8px 16px; font-size: 13px; font-weight: 600; color: var(--gray-200); }
        @media(max-width: 700px) {
          section { padding: 48px 20px; }
          .kit-grid { grid-template-columns: 1fr; }
          .before-after { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section style={{textAlign:'center', paddingBottom: 60}}>
        <div className="badge" style={{marginBottom:24}}>200+ AI Prompts · Works With Any LLM</div>
        <h1 style={{fontSize:'clamp(32px, 5vw, 52px)', fontWeight:900, lineHeight:1.1, marginBottom:16}}>
          The Only Prompt Pack<br/>You'll <span>Ever Need</span>
        </h1>
        <p style={{fontSize:18, color:'var(--gray-400)', maxWidth:560, margin:'0 auto 40px', lineHeight:1.7}}>
          200+ battle-tested AI prompts for copywriting, social media, content, operations, branding, and productivity. Copy. Paste. Get results.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Mega Pack — $29 →</a>
        <p style={{marginTop:14, fontSize:14, color:'var(--gray-400)'}}>
          One-time payment · Instant download · 30-day money-back guarantee
        </p>
        <div className="tools-row">
          <div className="tool-badge">ChatGPT</div>
          <div className="tool-badge">Claude</div>
          <div className="tool-badge">Gemini</div>
          <div className="tool-badge">Copilot</div>
          <div className="tool-badge">Any LLM</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)', border:'1px solid var(--gray-800)', borderRadius:16, padding:48, textAlign:'center'}}>
          <h2 style={{fontSize:28, fontWeight:900, marginBottom:16}}>
            You're leaving <span>80% of AI's power</span> on the table
          </h2>
          <p style={{color:'var(--gray-400)', fontSize:17, maxWidth:540, margin:'0 auto'}}>
            Most people type vague prompts and get vague results. The difference between "meh" AI output and <strong style={{color:'var(--gold)'}}>revenue-generating content</strong> is the prompt. Our 200+ prompts are engineered for specific business outcomes.
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{paddingTop:0}}>
        <div className="section-label">What's Inside</div>
        <h2 style={{fontSize:'clamp(24px, 3.5vw, 36px)', fontWeight:900, marginBottom:8}}>
          6 categories. <span>200+ prompts.</span> Zero fluff.
        </h2>
        <p style={{color:'var(--gray-400)', fontSize:16, marginBottom:48}}>
          Every prompt is ready to use — just fill in the brackets and paste into your AI tool.
        </p>

        <div className="kit-grid">
          {[
            {
              icon: '✍️', title: 'Copywriting & Sales',
              count: '35+',
              desc: 'Headlines, sales pages, email sequences, ad copy, product descriptions, cold emails, pricing pages, upsell copy, and testimonial frameworks.'
            },
            {
              icon: '📱', title: 'Social Media & Growth',
              count: '35+',
              desc: 'Twitter threads, LinkedIn posts, Instagram carousels, TikTok scripts, 30-day content calendars, viral hooks, bio optimization, and hashtag strategy.'
            },
            {
              icon: '📝', title: 'Content Creation',
              count: '35+',
              desc: 'SEO blog posts, YouTube scripts, newsletters, podcast outlines, content repurposing, headline A/B testing, content briefs, and pillar strategies.'
            },
            {
              icon: '⚙️', title: 'Business Operations',
              count: '35+',
              desc: 'Professional emails, SOPs, meeting agendas, hiring posts, financial analysis, customer service templates, project plans, and crisis communication.'
            },
            {
              icon: '🎯', title: 'Personal Branding',
              count: '35+',
              desc: 'Brand strategy, LinkedIn optimization, resume writing, thought leadership articles, elevator pitches, speaking prep, portfolio case studies, and networking.'
            },
            {
              icon: '🚀', title: 'Productivity & Automation',
              count: '35+',
              desc: 'Decision frameworks, weekly planning, research analysis, workflow automation, learning plans, inbox zero systems, goal tracking, and data analysis.'
            },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div className="category-icon">{f.icon}</div>
              <div className="prompt-count">{f.count} prompts</div>
              <div style={{fontSize:16, fontWeight:700, marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14, color:'var(--gray-400)', lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900}}>
          Before vs. <span>After</span>
        </h2>
        <div className="before-after">
          <div className="before-col">
            <div style={{fontSize:14, fontWeight:700, color:'rgba(255,100,100,0.8)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>Without the Mega Pack</div>
            <ul style={{listStyle:'none', fontSize:15, color:'var(--gray-400)', lineHeight:2}}>
              <li>❌ Staring at a blank prompt for 20 minutes</li>
              <li>❌ Getting generic, useless AI output</li>
              <li>❌ Rewriting AI responses 5+ times</li>
              <li>❌ Different prompt style for each task</li>
              <li>❌ No framework for getting consistent results</li>
            </ul>
          </div>
          <div className="after-col">
            <div style={{fontSize:14, fontWeight:700, color:'var(--gold)', marginBottom:16, textTransform:'uppercase', letterSpacing:1}}>With the Mega Pack</div>
            <ul style={{listStyle:'none', fontSize:15, color:'var(--gray-200)', lineHeight:2}}>
              <li>✅ Copy prompt, fill brackets, paste — done in 2 minutes</li>
              <li>✅ Specific, actionable output every time</li>
              <li>✅ First-draft quality that's 80% ready</li>
              <li>✅ Organized by category — find what you need fast</li>
              <li>✅ Proven frameworks that get professional results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900, marginBottom:32}}>
          Built for <span>anyone who uses AI</span>
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
          {[
            { title: 'Entrepreneurs', desc: 'Write copy, plan strategy, automate operations — all with AI' },
            { title: 'Content Creators', desc: 'Produce 10x more content across every platform' },
            { title: 'Freelancers', desc: 'Proposals, emails, invoices, and client communication on autopilot' },
            { title: 'Marketers', desc: 'Ad copy, email sequences, social media — engineered to convert' },
            { title: 'Small Business Owners', desc: 'Handle hiring, customer service, and growth without a big team' },
            { title: 'Professionals', desc: 'Better emails, presentations, and personal branding in less time' },
          ].map(p => (
            <div key={p.title} style={{background:'var(--gray-900)', border:'1px solid var(--gray-800)', borderRadius:12, padding:20}}>
              <div style={{fontSize:15, fontWeight:700, marginBottom:6}}>{p.title}</div>
              <div style={{fontSize:13, color:'var(--gray-400)', lineHeight:1.6}}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="buy" style={{paddingTop:0}}>
        <div style={{background:'var(--gray-900)', border:'2px solid rgba(245,200,66,0.4)', borderRadius:20, padding:48, textAlign:'center', maxWidth:500, margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:16}}>Most Popular</div>
          <h2 style={{fontSize:24, fontWeight:900, marginBottom:4}}>AI Prompt Mega Pack</h2>
          <p style={{color:'var(--gray-400)', fontSize:15, marginBottom:16}}>200+ prompts across 6 categories</p>
          <div style={{fontSize:48, fontWeight:900, color:'var(--gold)', margin:'16px 0 4px'}}>$29</div>
          <p style={{color:'var(--gray-400)', fontSize:14, marginBottom:24}}>One-time payment</p>
          <ul style={{listStyle:'none', textAlign:'left', marginBottom:32, maxWidth:320, margin:'0 auto 32px'}}>
            {[
              '200+ ready-to-use AI prompts',
              '6 categories (copy, social, content, ops, brand, productivity)',
              'Works with ChatGPT, Claude, Gemini, and any LLM',
              'Fill-in-the-bracket format — zero learning curve',
              'Pro tips and best practices for each category',
              'Free updates as we add new prompts',
            ].map(f => (
              <li key={f} style={{fontSize:15, padding:'6px 0', color:'#ccc'}}>
                <span style={{color:'var(--gold)', fontWeight:700, marginRight:10}}>✓</span>{f}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block', textAlign:'center'}}>
            Get the Mega Pack — $29 →
          </a>
          <p style={{marginTop:16, fontSize:13, color:'var(--gray-400)'}}>
            30-day money-back guarantee · Secure checkout via Stripe
          </p>
        </div>
      </section>

      {/* BUNDLE UPSELL */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(245,200,66,0.04)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:16, padding:32, textAlign:'center'}}>
          <div style={{fontSize:12, fontWeight:700, color:'var(--gold)', textTransform:'uppercase', letterSpacing:1}}>Want Industry-Specific Prompts Too?</div>
          <p style={{fontSize:20, fontWeight:800, marginBottom:4, marginTop:8}}>Get all 8 AI kits + Mega Pack for $97</p>
          <p style={{fontSize:14, color:'var(--gray-400)', marginBottom:16}}>Real Estate + Content Creator + Freelancer + Small Business + E-commerce + SaaS Founder + Starter Kit. Save 68%.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{color:'var(--gold)', fontWeight:700, fontSize:15, textDecoration:'none'}}>
            Get the Bundle — $97 →
          </a>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section style={{background:'var(--gray-900)', borderTop:'1px solid var(--gray-800)', padding:'80px 40px', maxWidth:'100%'}}>
        <div style={{maxWidth:480, margin:'0 auto', textAlign:'center'}}>
          <h2 style={{fontSize:24, fontWeight:900, marginBottom:8}}>
            Want a <span>free sample</span>?
          </h2>
          <p style={{fontSize:15, color:'var(--gray-400)', marginBottom:24}}>
            Get 10 of our best prompts free — see the quality before you buy.
          </p>
          {sent ? (
            <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:12, padding:20}}>
              <p style={{color:'var(--gold)', fontWeight:700, fontSize:16}}>Check your inbox!</p>
              <p style={{color:'var(--gray-400)', fontSize:14, marginTop:6}}>Your free sample is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex', gap:10}}>
              <input
                type="email" placeholder="your@email.com" value={email}
                onChange={e => setEmail(e.target.value)} required
                style={{flex:1, padding:'14px 18px', borderRadius:10, border:'1px solid var(--gray-700)',
                  background:'var(--gray-800)', color:'white', fontSize:15, outline:'none'}}
              />
              <button type="submit" disabled={loading} className="btn-primary" style={{padding:'14px 24px', border:'none', cursor:'pointer', fontSize:15}}>
                {loading ? '...' : 'Send Free Sample'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 style={{textAlign:'center', fontSize:'clamp(24px, 3.5vw, 32px)', fontWeight:900, marginBottom:32}}>Questions</h2>
        {[
          {
            q: 'What AI tools do these prompts work with?',
            a: 'Every prompt works with ChatGPT (GPT-4, GPT-4o), Claude, Google Gemini, Microsoft Copilot, and any other LLM that accepts text prompts. The prompts are plain text — copy, paste, and customize.'
          },
          {
            q: 'How is this different from your niche AI kits?',
            a: 'The Mega Pack covers broad categories for any professional — copywriting, social media, content, operations, branding, and productivity. Our niche kits (Real Estate, Freelancer, etc.) go deep on specific industries with specialized templates. The Mega Pack is your foundation; niche kits are your specialty.'
          },
          {
            q: 'Are these just generic prompts I could find online?',
            a: 'No. Every prompt is engineered with specific structures, variable placeholders, output formatting instructions, and follow-up suggestions. Each prompt includes context on when to use it, how to customize it, and pro tips. These are production-grade prompts, not "Write me a blog post about X."'
          },
          {
            q: 'Will I get updates when new prompts are added?',
            a: 'Yes — we regularly add new prompts based on what\'s working. You\'ll get an email when major updates are available, and you can re-download anytime.'
          },
          {
            q: 'What format do the prompts come in?',
            a: 'Markdown (.md) files organized by category. You can open them in any text editor, Notion, Obsidian, Google Docs, or read them as plain text. Each file covers one category with all its prompts, variables, and pro tips.'
          },
          {
            q: 'Is there a money-back guarantee?',
            a: '30 days, no questions asked. If the prompts don\'t save you time or improve your AI output, email us and we\'ll refund you immediately.'
          },
        ].map(faq => (
          <div key={faq.q} className="faq-item">
            <div className="faq-q">{faq.q}</div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
