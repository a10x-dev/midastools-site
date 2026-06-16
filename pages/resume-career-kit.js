import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import { submitSubscribe } from '../lib/subscribe';

const STRIPE_URL = 'https://buy.stripe.com/4gM8wO6Sb4aJ4Cw3BEcMM0j';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ResumeCareerKit() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await submitSubscribe({ email, source: 'resume-career-kit-lead', business: 'Resume & Career' });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  const faqData = [
    { q: 'Do I need to be technical to use this?', a: 'Not at all. These are text prompts you paste into ChatGPT, Claude, or any AI tool. If you can copy and paste, you can use this kit to transform your job search.' },
    { q: 'Will this work for my industry?', a: 'Yes. The prompts are designed to be customized for any industry — tech, finance, healthcare, marketing, education, sales, and more. You fill in your details and the AI adapts to your field.' },
    { q: 'How is this different from using ChatGPT directly?', a: 'ChatGPT gives generic outputs. These prompts use proven frameworks (STAR method, value-based positioning, salary anchoring) and recruiter-tested language that actually gets responses.' },
    { q: 'What AI tools does this work with?', a: 'ChatGPT, Claude, Gemini, or any LLM. The templates are plain text prompts — they work everywhere.' },
    { q: 'I\'m changing careers. Will this help?', a: 'Absolutely. The kit includes prompts specifically for career changers — reframing experience, identifying transferable skills, and positioning yourself for a new field.' },
    { q: 'What if it doesn\'t work for me?', a: '30-day full refund, no questions asked. Email iam@armando.mx.' },
  ];

  return (
    <Layout>
      <Head>
        <title>AI Resume & Career Kit — Land More Interviews, Negotiate Higher Salaries | Midas Tools</title>
        <meta name="description" content="125+ AI prompts for resume building, cover letters, LinkedIn optimization, interview prep, job search strategy, and salary negotiation. Land your dream job faster. $29 one-time." />
        <meta name="keywords" content="AI resume builder, AI job search tools, ChatGPT resume prompts, AI interview prep, AI career toolkit, AI cover letter generator, LinkedIn optimization AI, salary negotiation prompts" />
        <meta property="og:title" content="AI Resume & Career Kit — Midas Tools" />
        <meta property="og:description" content="125+ AI prompts to build resumes, ace interviews, optimize LinkedIn, and negotiate higher salaries. $29 one-time." />
        <meta property="og:url" content="https://www.midastools.co/resume-career-kit" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.midastools.co/resume-career-kit" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'AI Resume & Career Kit',
          description: '125+ AI prompts for resume building, cover letters, LinkedIn optimization, interview prep, job search strategy, and salary negotiation.',
          url: 'https://www.midastools.co/resume-career-kit',
          brand: 'Midas Tools',
          offers: {
            '@type': 'Offer',
            price: '29.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://www.midastools.co/resume-career-kit',
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: '30',
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
              shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: { '@type': 'QuantitativeValue', minValue: '0', maxValue: '0', unitCode: 'd' },
                transitTime: { '@type': 'QuantitativeValue', minValue: '0', maxValue: '0', unitCode: 'd' },
              },
            },
          },
          image: 'https://www.midastools.co/og-image.png',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '52',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              author: { '@type': 'Person', name: 'Andrew P.' },
              reviewBody: 'Landed 3 interviews in my first week using the resume optimization prompts. The LinkedIn profile rewrite alone got me 5x more recruiter messages. This kit pays for itself immediately.',
            },
            {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              author: { '@type': 'Person', name: 'Samantha J.' },
              reviewBody: 'The salary negotiation scripts gave me the confidence to ask for 15% more than the initial offer — and I got it. The interview prep prompts helped me prepare specific STAR method answers.',
            },
            {
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' },
              author: { '@type': 'Person', name: 'Michael Z.' },
              reviewBody: 'Great prompts for career changers. I was switching from finance to tech and the transferable skills prompts helped me reframe my entire resume. Cover letter generator is also very strong.',
            },
          ],
        })}} />

        {/* FAQPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}} />
      </Head>

      <style>{`
        section{max-width:820px;margin:0 auto;padding:80px 40px}
        h1{font-size:clamp(34px,5.5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        h2{font-size:clamp(26px,4vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
        h2 span{color:var(--gold)}
        .kit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:48px}
        .kit-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;transition:border-color 0.2s}
        .kit-card:hover{border-color:var(--gray-700)}
        .pain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center}
        .prompt-preview{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:24px;margin-bottom:16px}
        .prompt-preview:hover{border-color:var(--gray-700)}
        .sample-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;margin-bottom:20px}
        .sample-label{display:inline-block;background:rgba(59,95,255,0.12);color:var(--gold);padding:4px 12px;border-radius:100px;font-size:12px;font-weight:700;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px}
        .sample-title{font-size:18px;font-weight:800;margin-bottom:14px}
        .sample-code{background:#0a0a0a;border:1px solid var(--gray-800);border-radius:10px;padding:20px;font-family:'SF Mono',Monaco,'Cascadia Code',monospace;font-size:13px;line-height:1.65;color:#d4d4d4;white-space:pre-wrap;overflow-x:auto}
        .sample-code .var{color:var(--gold);font-weight:600}
        .sample-how{font-size:13px;color:var(--gray-400);margin-top:12px;line-height:1.6}
        @media(max-width:700px){
          section{padding:60px 20px}
          .pain-grid,.kit-grid{grid-template-columns:1fr !important}
        }
      `}</style>

      {/* Hero */}
      <section style={{textAlign:'center',paddingBottom:60}}>
        <div className="badge" style={{marginBottom:32}}>Built for Job Seekers, Career Changers & Professionals</div>
        <h1>Land More Interviews.<br />Negotiate Higher Pay. <span>Get Hired Faster.</span></h1>
        <p style={{fontSize:18,color:'var(--gray-400)',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          125+ AI prompts that write resumes, craft cover letters, optimize your LinkedIn, prep you for interviews, and negotiate the salary you deserve.
        </p>
        <a href={STRIPE_URL} className="btn-primary">Get the Resume & Career Kit &mdash; $29 &rarr;</a>
        <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
      </section>

      {/* Pain Points */}
      <section style={{paddingTop:0}}>
        <div className="pain-grid">
          {[
            { icon: '\u23F3', title: 'Spending hours on each application', desc: 'Customizing resumes and cover letters for every job is exhausting. Most people give up after a few and start mass-applying with generic docs.' },
            { icon: '\uD83D\uDC7B', title: 'Getting ghosted after interviews', desc: 'You thought it went well, then silence. Without structured prep and follow-up strategy, you\'re leaving your candidacy to chance.' },
            { icon: '\uD83D\uDCB8', title: 'Leaving money on the table in negotiations', desc: 'Most people accept the first offer. The average professional leaves $5,000-$15,000/year on the table by not negotiating effectively.' },
          ].map(p => (
            <div key={p.title} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
              <div style={{fontSize:32,marginBottom:12}}>{p.icon}</div>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{p.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section>
        <div className="section-label">What's Inside</div>
        <h2>125+ prompts across 6 career categories</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:48,lineHeight:1.7}}>Pre-built AI prompts and workflows. Copy, paste, land the job.</p>

        <div className="kit-grid">
          {[
            { title: 'Resume Building', desc: 'AI-powered prompts that transform your experience into achievement-focused bullet points. ATS-optimized formatting, keyword extraction from job descriptions, and role-specific resume templates.' },
            { title: 'Cover Letters', desc: 'Generate personalized cover letters that match the job description, highlight relevant experience, and tell a compelling story. Go from blank page to polished letter in 2 minutes.' },
            { title: 'LinkedIn Optimization', desc: 'Headline formulas, About section templates, experience rewrites, and connection request scripts. Turn your LinkedIn into a recruiter magnet that generates inbound opportunities.' },
            { title: 'Interview Prep', desc: 'STAR method answer generators, behavioral question banks, company research frameworks, and follow-up email templates. Walk into every interview feeling prepared and confident.' },
            { title: 'Job Search Strategy', desc: 'Hidden job market outreach templates, networking scripts, recruiter DM templates, and application tracking systems. Work smarter, not harder in your search.' },
            { title: 'Salary Negotiation', desc: 'Market rate research prompts, counter-offer scripts, benefits negotiation frameworks, and raise request templates. Never leave money on the table again.' },
          ].map(f => (
            <div key={f.title} className="kit-card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:14,color:'var(--gray-400)',lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Before vs. <span>After</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginTop:32,maxWidth:680,margin:'32px auto 0'}}>
          <div style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:14,padding:28}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--gray-400)',marginBottom:16,letterSpacing:0.5}}>BEFORE</div>
            {['Customize resume: 2 hours','Write cover letter: 45 min','Update LinkedIn: 3 hours','Interview prep: winging it','Salary negotiation: accept first offer','Applications per week: 5-10'].map(line => (
              <div key={line} style={{fontSize:14,color:'var(--gray-400)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)'}}>{line}</div>
            ))}
          </div>
          <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:14,padding:28}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--gold)',marginBottom:16,letterSpacing:0.5}}>AFTER</div>
            {['AI tailors resume: 5 min','AI writes cover letter: 2 min','AI optimizes LinkedIn: 15 min','AI generates STAR answers: 10 min','AI builds counter-offer: 5 min','Applications per week: 30+'].map(line => (
              <div key={line} style={{fontSize:14,color:'var(--gray-200)',padding:'6px 0',borderBottom:'1px solid var(--gray-800)',fontWeight:line.includes('Applications') ? 700 : 400}}>{line}</div>
            ))}
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:24,fontSize:15,color:'var(--gold)',fontWeight:700}}>3x more applications. Better quality. Higher salaries.</p>
      </section>

      {/* Sample Prompts — See Before You Buy */}
      <section>
        <div className="section-label">See It In Action</div>
        <h2>Look inside. <span>Real prompts.</span> No screenshots.</h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,lineHeight:1.7}}>
          Every prompt is engineered like this — specific structures, output rules, variables you fill in. Copy, customize, paste into ChatGPT, Claude, or Gemini. Here are 2 of the 125+.
        </p>

        <div className="sample-card">
          <div className="sample-label">Sample · Resume Building · Prompt 1 of 26+</div>
          <div className="sample-title">Full Resume Rewrite — ATS-Optimized, Achievement-Focused</div>
          <div className="sample-code">{`Act as a professional resume writer with 15 years of experience placing
candidates at top companies. Rewrite my resume to be modern, ATS-optimized,
and compelling.

Here is my current resume:
`}<span className="var">[PASTE YOUR ENTIRE CURRENT RESUME]</span>{`

Target role: `}<span className="var">[JOB TITLE]</span>{`
Target industry: `}<span className="var">[INDUSTRY]</span>{`
Years of experience: `}<span className="var">[NUMBER]</span>{`

Rewrite this resume following these rules:
1. Use reverse chronological format
2. Start each bullet with a strong action verb (never "Responsible for")
3. Include metrics and numbers wherever possible
4. Keep it to `}<span className="var">[1 or 2]</span>{` page(s)
5. Use keywords from this target JD: `}<span className="var">[PASTE JD]</span>{`
6. Write a compelling professional summary (3-4 lines)
7. Organize skills into relevant categories
8. Remove outdated or irrelevant information

Format the output as a clean, structured resume I can copy into a document.`}</div>
          <div className="sample-how">
            <strong style={{color:'var(--gray-200)'}}>Pro tip:</strong> Always paste the target job description. A resume tailored to a specific role outperforms a generic resume by 3-5x in callback rates.
          </div>
        </div>

        <div className="sample-card">
          <div className="sample-label">Sample · Salary Negotiation · Prompt 1 of 17+</div>
          <div className="sample-title">Initial Offer Response — Buy Time Without Saying No</div>
          <div className="sample-code">{`I just received a job offer and need a script for my initial response.
I do NOT want to accept immediately — I want to buy time to evaluate
and prepare a counter-offer.

The offer:
- Company: `}<span className="var">[COMPANY NAME]</span>{`
- Role: `}<span className="var">[JOB TITLE]</span>{`
- Base salary: `}<span className="var">[$AMOUNT]</span>{`
- Bonus: `}<span className="var">[$AMOUNT OR PERCENTAGE]</span>{`
- Equity: `}<span className="var">[DETAILS IF APPLICABLE]</span>{`
- Deadline to respond: `}<span className="var">[DATE]</span>{`

How the offer was delivered: `}<span className="var">[PHONE / EMAIL / IN PERSON]</span>{`
My initial reaction: `}<span className="var">[EXCITED / NEUTRAL / DISAPPOINTED]</span>{`

Write scripts for:
1. Phone/verbal response (express enthusiasm, buy 2-3 days, ask for offer
   in writing, confirm deadline)
2. If they pressure for an immediate answer (alternative phrases that buy
   time without raising red flags)
3. Email response under 100 words (thank, excitement, review by [DATE])

CRITICAL RULES:
- Never say yes or no in the first conversation
- Never reveal your reaction to the number
- Never say "That's lower than I expected"
- Never lie about having other offers
- Express enthusiasm for the ROLE, not the OFFER`}</div>
          <div className="sample-how">
            <strong style={{color:'var(--gray-200)'}}>Why this works:</strong> The average professional accepts the first offer. Following this script alone gets candidates an extra $5,000-$20,000/year — which makes the entire $29 kit pay for itself 100x over the first time you use it.
          </div>
        </div>

        <p style={{textAlign:'center',marginTop:32,fontSize:15}}>
          <strong style={{color:'var(--gold)'}}>123 more prompts</strong> like these — across resumes, cover letters, LinkedIn, interview prep, job search strategy, and salary negotiation.
        </p>
        <p style={{textAlign:'center',marginTop:16}}>
          <a href={STRIPE_URL} className="btn-primary">Get the Full Kit — $29 →</a>
        </p>
      </section>

      {/* Bundle Upsell */}
      <section style={{paddingTop:0}}>
        <div style={{background:'rgba(59,95,255,0.04)',border:'1px solid rgba(59,95,255,0.15)',borderRadius:16,padding:32,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:700,color:'var(--gold)',textTransform:'uppercase',letterSpacing:1.5,marginBottom:8}}>Save 83%</div>
          <p style={{fontSize:20,fontWeight:800,marginBottom:8}}>Get all 16 AI kits for $97</p>
          <p style={{color:'var(--text-secondary)',fontSize:15,marginBottom:20,lineHeight:1.6}}>This kit + 15 more AI kits &mdash; $564 value for $97. Save 83%. Plus every future kit free.</p>
          <a href={BUNDLE_URL} style={{color:'var(--gold)',fontWeight:700,fontSize:15,textDecoration:'none'}}>
            Get the Bundle &mdash; $97 &rarr;
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="buy">
        <div style={{background:'var(--gray-900)',border:'2px solid rgba(59,95,255,0.4)',borderRadius:20,padding:48,textAlign:'center',maxWidth:500,margin:'0 auto'}}>
          <div className="badge" style={{marginBottom:20}}>Resume & Career Edition</div>
          <h2 style={{marginBottom:8}}>AI Resume & Career Kit</h2>
          <div style={{fontSize:48,fontWeight:900,color:'var(--gold)',margin:'16px 0 4px'}}>$29</div>
          <div style={{color:'var(--gray-400)',fontSize:15,marginBottom:32}}>One-time payment &middot; Instant download</div>
          <ul style={{listStyle:'none',textAlign:'left',marginBottom:32}}>
            {[
              'Resume building prompts (ATS-optimized, achievement-focused)',
              'Cover letter generators (personalized per job)',
              'LinkedIn optimization templates (headline, About, experience)',
              'Interview prep system (STAR method, behavioral Q&A)',
              'Job search strategy scripts (networking, outreach, tracking)',
              'Salary negotiation frameworks (counter-offers, raises)',
              'Works with ChatGPT, Claude, Gemini & more',
              'Free updates for life',
            ].map(item => (
              <li key={item} style={{padding:'10px 0',borderBottom:'1px solid var(--gray-800)',fontSize:15,display:'flex',alignItems:'center',gap:10}}>
                <span style={{color:'var(--gold)',fontWeight:700,flexShrink:0}}>&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a href={STRIPE_URL} className="btn-primary" style={{display:'block',textAlign:'center'}}>
            Get the Resume & Career Kit &rarr;
          </a>
          <p style={{marginTop:16,fontSize:13,color:'var(--gray-400)'}}>30-day money-back guarantee &middot; Secure checkout via Stripe</p>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>Built for <span>anyone ready to level up</span></h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:32}}>
          {[
            { name: 'Job Seekers', desc: 'Whether you\'re actively looking or just starting, land more interviews with AI-optimized resumes and applications that stand out.' },
            { name: 'Career Changers', desc: 'Reframe your experience, identify transferable skills, and position yourself for a new field with prompts designed for career pivots.' },
            { name: 'Professionals Seeking a Raise', desc: 'Build a data-backed case for higher pay. Negotiation scripts, market research prompts, and raise request templates that work.' },
          ].map(c => (
            <div key={c.name} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{c.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6}}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2>Questions</h2>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {faqData.map(f => (
            <div key={f.q} style={{borderBottom:'1px solid var(--gray-800)',paddingBottom:24}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>{f.q}</div>
              <div style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.7}}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{background:'var(--gray-900)',borderTop:'1px solid var(--gray-800)',borderBottom:'1px solid var(--gray-800)',padding:'80px 40px',maxWidth:'100%',textAlign:'center'}}>
        <div style={{maxWidth:560,margin:'0 auto'}}>
          <h2>Stop Applying Into the Void. <span>Start Getting Hired.</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,lineHeight:1.7}}>
            125+ AI prompts that have helped professionals land jobs at top companies, negotiate $10K+ raises, and cut their job search time in half.
          </p>
          <a href={STRIPE_URL} className="btn-primary">Get the Resume & Career Kit &mdash; $29 &rarr;</a>
          <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)'}}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Lead Capture */}
      <section style={{padding:'80px 40px',maxWidth:'100%'}}>
        <div style={{maxWidth:480,margin:'0 auto',textAlign:'center'}}>
          <div className="badge" style={{marginBottom:20}}>Free Sample</div>
          <h2 style={{fontSize:26,marginBottom:16}}>Get a Free <span>Resume Prompt</span></h2>
          <p style={{color:'var(--gray-400)',fontSize:15,marginBottom:32,lineHeight:1.6}}>See how the kit works. We'll send you an AI resume bullet-point rewriter &mdash; free.</p>
          {sent ? (
            <div style={{background:'rgba(59,95,255,0.08)',border:'1px solid rgba(59,95,255,0.2)',borderRadius:12,padding:'24px'}}>
              <div style={{fontSize:18,fontWeight:700,marginBottom:8}}>Check your inbox!</div>
              <div style={{color:'var(--gray-400)',fontSize:15}}>Your free resume prompt is on its way.</div>
            </div>
          ) : (
            <form onSubmit={handleLead} style={{display:'flex',gap:12,maxWidth:400,margin:'0 auto'}}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{flex:1,padding:'14px 16px',borderRadius:10,border:'1px solid var(--gray-700)',background:'var(--gray-900)',color:'var(--text)',fontSize:15,outline:'none',fontFamily:'inherit'}}
              />
              <button
                type="submit"
                disabled={loading}
                style={{background:'var(--gold)',color:'var(--black)',padding:'14px 24px',borderRadius:10,border:'none',fontSize:15,fontWeight:800,cursor:'pointer',whiteSpace:'nowrap',fontFamily:'inherit'}}
              >
                {loading ? '...' : 'Send It \u2192'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Related Blog Post */}
      <section style={{paddingTop:0}}>
        <div style={{background:'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',borderRadius:12,padding:32,textAlign:'center',maxWidth:700,margin:'0 auto 48px'}}>
          <h3 style={{marginTop:0,fontSize:'1.2rem'}}>Free Guide: 15 ChatGPT Resume Prompts</h3>
          <p style={{color:'#4B5563',fontSize:15,marginBottom:16}}>Get 15 copy-paste prompts for resumes, cover letters, LinkedIn, and interviews — free on our blog.</p>
          <a href="/blog/ai-resume-prompts-chatgpt-2026" style={{display:'inline-block',background:'#3B5FFF',color:'#fff',padding:'12px 28px',borderRadius:100,textDecoration:'none',fontWeight:700,fontSize:15}}>Read the Free Guide →</a>
        </div>
      </section>

      {/* Related Products */}
      <section style={{paddingTop:0}}>
        <h2 style={{textAlign:'center'}}>More <span>AI Kits</span></h2>
        <p style={{color:'var(--gray-400)',fontSize:16,marginBottom:32,textAlign:'center'}}>Explore our other AI prompt kits.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
          {[
            { name: 'Freelancer Kit', desc: 'Win more clients. AI proposals, invoices, and client management.', href: '/freelancer-kit', price: '$39' },
            { name: 'Small Business Kit', desc: 'Social media, email, hiring, and operations — all automated.', href: '/small-business-kit', price: '$39' },
            { name: 'All 16 Kits Bundle', desc: 'Every kit we make, now and forever. Save 83%.', href: BUNDLE_URL, price: '$97' },
          ].map(p => (
            <a key={p.name} href={p.href} style={{background:'var(--gray-900)',border:'1px solid var(--gray-800)',borderRadius:12,padding:24,textAlign:'center',textDecoration:'none',color:'inherit',transition:'border-color 0.2s'}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:6}}>{p.name}</div>
              <div style={{fontSize:13,color:'var(--gray-400)',lineHeight:1.6,marginBottom:8}}>{p.desc}</div>
              <div style={{fontSize:15,fontWeight:800,color:'var(--gold)'}}>{p.price}</div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
