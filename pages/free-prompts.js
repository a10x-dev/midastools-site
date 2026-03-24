import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/6oE8Aa1SIgRFgOQ5kD';
const STRIPE_BUNDLE = 'https://buy.stripe.com/00g5xY2WM04Ncyw9AH';

const FREE_PROMPTS = [
  {
    title: 'The Revenue Email Generator',
    category: 'Sales',
    color: '#3B5FFF',
    prompt: `You are a direct-response copywriter who has written emails generating $10M+ in revenue. Write a sales email for my product/service:

Product: [YOUR PRODUCT]
Target customer: [IDEAL CUSTOMER]
Main pain point: [BIGGEST PROBLEM YOU SOLVE]
Price: [PRICE]

Requirements:
- Subject line that gets 40%+ open rate (use curiosity or specificity, never clickbait)
- Opening line that hooks in 3 seconds (no "I hope this finds you well")
- One clear story or proof point in the body
- Single CTA at the end
- Under 200 words total
- Write 3 versions: casual, professional, and urgent`,
    result: 'Users report 2-3x higher email open rates and measurably more replies vs. their previous emails.',
  },
  {
    title: 'The Instant Content Repurposer',
    category: 'Content',
    color: '#8B5CF6',
    prompt: `Take this content and repurpose it into 5 different formats. Maintain the core message but adapt the tone, length, and style for each platform:

Original content: [PASTE YOUR BLOG POST, VIDEO SCRIPT, OR ARTICLE]

Create:
1. Twitter/X thread (8-12 tweets, hook in tweet 1, CTA in last tweet)
2. LinkedIn post (personal story angle, 150-200 words, line breaks for readability)
3. Instagram carousel script (10 slides: hook, 8 value slides, CTA)
4. Email newsletter version (casual tone, one key takeaway, under 300 words)
5. YouTube Shorts/TikTok script (60 seconds, pattern interrupt opening, clear hook in first 3 seconds)

For each: include the exact text I can copy and paste. Do not give me outlines or summaries — give me final, publish-ready content.`,
    result: 'Turn 1 piece of content into 5. Saves 3-4 hours of content creation per week.',
  },
  {
    title: 'The Proposal Writer',
    category: 'Freelancing',
    color: '#059669',
    prompt: `You are a freelance consultant who has won $2M+ in contracts. Write a project proposal for a potential client:

My service: [WHAT YOU DO]
Client's business: [THEIR COMPANY/INDUSTRY]
Project scope: [WHAT THEY NEED]
My relevant experience: [1-2 PAST RESULTS]
Timeline: [ESTIMATED DURATION]
Budget range: [YOUR PRICE]

Structure the proposal as:
1. Executive Summary (3 sentences — show you understand their problem)
2. Proposed Approach (3-4 bullet points of what you will deliver)
3. Timeline & Milestones (with specific dates)
4. Investment (frame the price against the ROI they will get)
5. Why Me (2-3 proof points that make you the obvious choice)
6. Next Steps (one clear action for them to take)

Tone: confident but not arrogant. Professional but warm. Under 500 words total.`,
    result: 'Freelancers using this prompt report 40%+ higher proposal win rates.',
  },
  {
    title: 'The Business Strategy Analyzer',
    category: 'Strategy',
    color: '#D97706',
    prompt: `Act as a McKinsey senior partner with 20 years of experience advising companies in my industry. Analyze my business situation:

My business: [DESCRIBE YOUR BUSINESS IN 2-3 SENTENCES]
Current revenue: [MONTHLY/ANNUAL REVENUE]
Biggest challenge right now: [YOUR #1 PROBLEM]
Resources available: [TEAM SIZE, BUDGET, TIME]

Provide:
1. DIAGNOSIS: What is actually causing this problem? (Look beyond the obvious)
2. THREE STRATEGIC OPTIONS: For each, give the approach, expected outcome, timeline, and risk level (High/Medium/Low)
3. RECOMMENDATION: Which option would you choose and why?
4. FIRST 3 MOVES: The exact actions to take this week to start executing
5. METRICS TO TRACK: How I will know if this is working (with specific numbers to hit)

Be direct. Challenge my assumptions. If my approach is wrong, say so.`,
    result: 'Like having a $500/hour consultant on demand. Users save thousands in advisory fees.',
  },
  {
    title: 'The Product Description Converter',
    category: 'E-commerce',
    color: '#EC4899',
    prompt: `You are a conversion copywriter who has written product descriptions for brands generating $100M+ in e-commerce revenue. Rewrite this product description to maximize conversions:

Current description: [PASTE YOUR EXISTING DESCRIPTION]
Product: [PRODUCT NAME]
Target buyer: [WHO BUYS THIS]
Price point: [PRICE]
Top 3 features: [LIST THEM]
What makes it different: [YOUR UNIQUE SELLING POINT]

Write 2 versions:
VERSION A (Emotional): Lead with the transformation/outcome. How does the buyer's life change? Use sensory language. Create desire before mentioning features.
VERSION B (Logical): Lead with specs and proof points. Comparison to alternatives. ROI calculation if applicable.

For both versions:
- Opening hook that stops the scroll (first 10 words are everything)
- Bullet points for scanability
- Social proof integration point (where to add reviews/testimonials)
- Urgency element (without being sleazy)
- Clear CTA
- SEO-optimized (include 3 suggested keywords to target)`,
    result: 'E-commerce sellers report 15-30% higher conversion rates after rewriting with this prompt.',
  },
];

export default function FreePrompts() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'free-prompts-page' }),
      });
      setStatus('success');
      setUnlocked(true);
    } catch {
      setStatus('error');
    }
  };

  const title = '5 Free AI Prompts That Actually Make Money';
  const description = 'Get 5 battle-tested AI prompts for sales, content, freelancing, strategy, and e-commerce. Free, no strings attached. Works with ChatGPT, Claude, and Gemini.';
  const url = 'https://www.midastools.co/free-prompts';

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="free AI prompts, ChatGPT prompts free, AI prompts for business, free AI tools, best AI prompts 2026" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description: description,
          url: url,
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
        })}} />
      </Head>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 80px 24px 48px;
          max-width: 720px;
          margin: 0 auto;
        }
        .badge {
          display: inline-block;
          background: #EEF2FF;
          color: #3B5FFF;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-family: 'Inter', sans-serif;
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 16px;
        }
        .hero p {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #6B7280;
          line-height: 1.6;
          max-width: 560px;
          margin: 0 auto 32px;
        }
        .email-gate {
          max-width: 480px;
          margin: 0 auto;
        }
        .email-form {
          display: flex;
          gap: 8px;
        }
        .email-input {
          flex: 1;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          padding: 14px 20px;
          border: 2px solid #E5E7EB;
          border-radius: 100px;
          outline: none;
          color: #111827;
        }
        .email-input:focus {
          border-color: #3B5FFF;
          box-shadow: 0 0 0 3px rgba(59, 95, 255, 0.15);
        }
        .email-btn {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 28px;
          background: #3B5FFF;
          color: #fff;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.15s;
        }
        .email-btn:hover { opacity: 0.9; }
        .email-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .success-msg {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #059669;
          text-align: center;
        }
        .trust {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 12px;
          text-align: center;
        }

        .prompts-section {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px 60px;
        }
        .prompt-card {
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
          background: #fff;
        }
        .prompt-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .prompt-category {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          color: #fff;
        }
        .prompt-title {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
        }
        .prompt-block {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          padding: 20px;
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 13px;
          line-height: 1.6;
          color: #374151;
          white-space: pre-wrap;
          word-break: break-word;
          margin-bottom: 16px;
          position: relative;
        }
        .prompt-block.locked {
          filter: blur(4px);
          user-select: none;
          pointer-events: none;
        }
        .prompt-result {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #059669;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .copy-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          background: #3B5FFF;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .copy-btn:hover { opacity: 0.9; }

        .upsell {
          background: #111827;
          border-radius: 16px;
          padding: 48px 32px;
          text-align: center;
          margin-top: 48px;
        }
        .upsell h2 {
          font-family: 'Inter', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }
        .upsell p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #9CA3AF;
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .upsell-grid {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .upsell-btn {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.15s;
        }
        .upsell-btn:hover { opacity: 0.9; }
        .upsell-btn.primary {
          background: #3B5FFF;
          color: #fff;
        }
        .upsell-btn.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.3);
        }
        .upsell-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #6B7280;
          margin-top: 16px;
        }

        .related {
          max-width: 720px;
          margin: 48px auto;
          padding: 0 24px;
        }
        .related h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }
        .related-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .related-links a {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #3B5FFF;
          text-decoration: none;
          font-weight: 500;
        }
        .related-links a:hover { text-decoration: underline; }

        @media (max-width: 640px) {
          .hero h1 { font-size: 1.8rem; }
          .email-form { flex-direction: column; }
          .email-input { width: 100%; }
          .email-btn { width: 100%; }
          .prompt-card { padding: 20px; }
          .upsell { padding: 32px 20px; }
          .upsell h2 { font-size: 1.4rem; }
          .upsell-grid { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="badge">100% Free — No Credit Card Required</div>
        <h1>5 AI Prompts That Actually Make Money</h1>
        <p>
          Battle-tested prompts for sales, content, freelancing, strategy, and e-commerce.
          Works with ChatGPT, Claude, and Gemini. Copy, paste, profit.
        </p>

        {!unlocked ? (
          <div className="email-gate">
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
                disabled={status === 'loading'}
              />
              <button type="submit" className="email-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Unlocking...' : 'Get Free Prompts'}
              </button>
            </form>
            {status === 'error' && <p style={{ color: '#DC2626', fontSize: '14px', marginTop: '8px' }}>Something went wrong. Please try again.</p>}
            <p className="trust">Join 1,000+ founders. No spam, unsubscribe anytime.</p>
          </div>
        ) : (
          <p className="success-msg">Unlocked! Scroll down to copy all 5 prompts.</p>
        )}
      </section>

      {/* Prompts */}
      <section className="prompts-section">
        {FREE_PROMPTS.map((p, i) => (
          <div key={i} className="prompt-card">
            <div className="prompt-header">
              <span className="prompt-category" style={{ background: p.color }}>{p.category}</span>
              <span className="prompt-title">{p.title}</span>
            </div>
            <div className={`prompt-block${unlocked ? '' : i > 0 ? ' locked' : ''}`}>
              {unlocked || i === 0 ? (
                <>
                  {p.prompt}
                  {unlocked && (
                    <button
                      className="copy-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(p.prompt);
                      }}
                    >
                      Copy
                    </button>
                  )}
                </>
              ) : (
                p.prompt
              )}
            </div>
            <p className="prompt-result">
              <span>&#x2713;</span> {p.result}
            </p>
          </div>
        ))}

        {/* Upsell */}
        <div className="upsell">
          <h2>Liked These 5? There Are 200+ More.</h2>
          <p>
            The AI Prompt Mega Pack includes 200+ prompts across 6 categories —
            plus 7 specialized kits for freelancers, real estate, e-commerce, SaaS, and more.
          </p>
          <div className="upsell-grid">
            <a href={STRIPE_MEGA_PACK} className="upsell-btn primary">
              Get 200+ Prompts — $29
            </a>
            <a href={STRIPE_BUNDLE} className="upsell-btn secondary">
              Get All 8 Kits — $97
            </a>
          </div>
          <p className="upsell-note">One-time purchase. Instant download. No subscription.</p>
        </div>
      </section>

      {/* Related content */}
      <section className="related">
        <h3>Keep learning:</h3>
        <div className="related-links">
          <Link href="/blog/best-ai-prompts-business-2026">50 AI Prompts That Are Actually Making People Money in 2026</Link>
          <Link href="/blog/chatgpt-side-hustle-2026">7 ChatGPT Side Hustles Actually Making Money in 2026</Link>
          <Link href="/blog/ai-second-income-2026">How to Build a Second Income with AI in 2026</Link>
          <Link href="/ai-roi-calculator">AI ROI Calculator — See How Much AI Saves You</Link>
          <Link href="/ai-prompt-mega-pack">AI Prompt Mega Pack — Full Product Details</Link>
        </div>
      </section>
    </Layout>
  );
}
