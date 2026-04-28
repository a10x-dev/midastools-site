import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

// $997 AI Clarity Assessment — entry-point service
// Stripe link reused from prior $997 product (re-priced from "AI Audit + Deploy")
// Updated 2026-04-28: repositioned per "selling clarity, not automation" framework
const ASSESSMENT_URL = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';

// Implementation upsell tiers (existing DFY links)
const IMPL_CONTENT = 'https://buy.stripe.com/28EdR84K36iR5GAa02cMM0u';   // $199 Content Month
const IMPL_BRAND   = 'https://buy.stripe.com/cNi14mccv36F3ys1twcMM0v';   // $299 Brand Pack
const MEGA_PACK    = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';   // $97 Mega Pack

const TITLE = 'AI Clarity Assessment — $997, 7-Day Custom Report | Midas Tools';
const DESCRIPTION = 'A $10,000-consultant-quality AI assessment for your business. We map your workflows, identify your top 3-5 highest-ROI AI moves, and deliver a polished implementation report in 7 days. $997 one-time. Full refund if we don\'t save you 5+ hours/week.';
const URL = 'https://www.midastools.co/ai-audit';

export default function AIAssessment() {
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={URL} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Clarity Assessment',
          description: DESCRIPTION,
          url: URL,
          provider: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
          offers: { '@type': 'Offer', price: 997, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What do I actually receive?', acceptedAnswer: { '@type': 'Answer', text: 'A custom written report (15-25 pages, PDF) with: your top 3-5 AI tool recommendations, exact use-cases per tool, monthly software cost, expected hours-per-week saved, an implementation order, and a 30-minute live review call with the analyst who built it.' } },
            { '@type': 'Question', name: 'How is this different from a free ChatGPT recommendation?', acceptedAnswer: { '@type': 'Answer', text: 'A generic article tells you "10 AI Tools for Entrepreneurs." This is a custom analysis of YOUR business — your workflows, your bottlenecks, your specific bookkeeping setup, your team\'s skill level — with tested tool recommendations and rejection criteria for tools that won\'t fit. We translate "AI can do this" into "here\'s the exact tool, the exact use case, and how to set it up for you specifically."' } },
            { '@type': 'Question', name: 'How long does it take?', acceptedAnswer: { '@type': 'Answer', text: '7 days from booking to delivered report. Day 1: 60-min discovery call. Days 2-5: AI-powered analysis + tool research. Day 6: report drafted and quality-reviewed. Day 7: 30-min review call to walk through it.' } },
            { '@type': 'Question', name: 'What if I need help implementing the recommendations?', acceptedAnswer: { '@type': 'Answer', text: '60% of assessment clients want implementation help. We offer 3 implementation tiers ($1.5K, $3.5K, $7.5K+) for everything from setting up one tool to a full multi-tool integration with team training. Pricing is on the report and you decide after.' } },
            { '@type': 'Question', name: 'What if your recommendations don\'t save me 5+ hours/week?', acceptedAnswer: { '@type': 'Answer', text: 'Full refund. We\'ll only recommend tools we\'ve personally tested in workflows similar to yours, and we project hours saved + dollar value before you commit.' } },
          ].map(item => item),
        }) }} />
      </Head>

      <style>{`
        .hero{max-width:820px;margin:0 auto;padding:80px 40px 56px;text-align:center}
        .pre-h1{display:inline-block;padding:6px 14px;background:rgba(255,200,0,0.08);color:var(--gold);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:24px;letter-spacing:1.5px;border:1px solid rgba(255,200,0,0.15)}
        h1{font-size:clamp(34px,5.4vw,60px);font-weight:900;line-height:1.04;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:19px;color:var(--gray-400);max-width:620px;margin:0 auto 36px;line-height:1.6}
        .hero-cta-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:18px}
        .hero-meta{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;font-size:13px;color:var(--gray-400)}
        .hero-meta span::before{content:"✓ ";color:var(--gold);font-weight:800}
        section{max-width:820px;margin:0 auto;padding:64px 40px}
        h2{font-size:clamp(28px,3.8vw,42px);font-weight:900;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.1}
        .sub2{color:var(--gray-400);font-size:17px;margin-bottom:36px;line-height:1.6;max-width:640px}
        .pull-quote{border-left:3px solid var(--gold);padding:20px 24px;background:var(--gray-900);border-radius:0 12px 12px 0;margin:32px 0;font-size:18px;line-height:1.6;color:var(--gray-200);font-style:italic}
        .pull-quote cite{display:block;margin-top:10px;font-style:normal;font-size:13px;color:var(--gray-400);font-weight:600}
        .phase{display:flex;gap:24px;padding:32px 0;border-bottom:1px solid var(--gray-800)}
        .phase:last-child{border-bottom:none}
        .phase-num{flex-shrink:0;width:48px;height:48px;background:linear-gradient(135deg,#FCD34D 0%,#F59E0B 100%);color:#0F172A;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px}
        .phase-body h3{font-size:19px;font-weight:800;margin-bottom:8px}
        .phase-body .phase-meta{font-size:12px;color:var(--gold);font-weight:700;letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
        .phase-body p{font-size:15px;color:var(--gray-300);line-height:1.65;margin-bottom:8px}
        .phase-body ul{margin:8px 0 0 0;padding-left:0;list-style:none}
        .phase-body ul li{font-size:14px;color:var(--gray-400);padding:4px 0;display:flex;gap:10px}
        .phase-body ul li::before{content:"›";color:var(--gold);font-weight:800;flex-shrink:0}
        .deliv-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px}
        .deliv-item{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:12px;padding:20px}
        .deliv-item h4{font-size:14px;font-weight:800;margin-bottom:6px;color:var(--gold);letter-spacing:0.5px}
        .deliv-item p{font-size:13.5px;color:var(--gray-400);line-height:1.55}
        .math-table{width:100%;border-collapse:collapse;margin-top:20px}
        .math-table tr{border-bottom:1px solid var(--gray-800)}
        .math-table td{padding:14px 0;font-size:15px;color:var(--gray-300)}
        .math-table td:last-child{text-align:right;font-weight:700;color:var(--gold);font-variant-numeric:tabular-nums}
        .math-table tr.total td{font-size:17px;color:#FFF;font-weight:900;padding-top:18px}
        .math-table tr.total td:last-child{color:var(--gold);font-size:22px}
        .ladder-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:24px}
        .ladder-card{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:24px;position:relative}
        .ladder-card.featured{border:2px solid var(--gold);background:linear-gradient(180deg,rgba(255,200,0,0.04) 0%,var(--gray-900) 100%)}
        .ladder-card .tier-tag{display:inline-block;padding:3px 10px;background:rgba(255,200,0,0.1);color:var(--gold);font-size:10px;font-weight:800;border-radius:99px;letter-spacing:1px;margin-bottom:12px}
        .ladder-card h4{font-size:17px;font-weight:800;margin-bottom:6px}
        .ladder-card .price{font-size:26px;font-weight:900;color:var(--gold);letter-spacing:-1px;margin-bottom:10px}
        .ladder-card .price small{font-size:11px;font-weight:600;color:var(--gray-400);letter-spacing:0;margin-left:4px}
        .ladder-card p{font-size:13px;color:var(--gray-400);line-height:1.55}
        .who-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .who-item{display:flex;gap:12px;align-items:flex-start;padding:14px;background:var(--gray-900);border:1px solid var(--gray-800);border-radius:12px}
        .who-check{color:var(--gold);font-weight:800;flex-shrink:0}
        .who-text{font-size:14px;color:var(--gray-300);line-height:1.5}
        .cta-box{border:1px solid var(--gray-800);border-radius:20px;padding:72px 40px;text-align:center;max-width:820px;margin:40px auto 80px;background:linear-gradient(180deg,rgba(255,200,0,0.04) 0%,transparent 100%)}
        .cta-box h2{margin-bottom:14px}
        .cta-box .price-big{font-size:64px;font-weight:900;color:var(--gold);letter-spacing:-3px;line-height:1;margin:18px 0 8px}
        .cta-box .price-cap{font-size:13px;color:var(--gray-400);text-transform:uppercase;letter-spacing:2px;margin-bottom:32px}
        .cta-box p{color:var(--gray-300);font-size:16px;margin-bottom:32px;line-height:1.6}
        .faq-item{border-bottom:1px solid var(--gray-800);padding-bottom:20px;margin-bottom:20px}
        .faq-item summary{font-size:16px;font-weight:700;cursor:pointer;color:#FFF;list-style:none;padding:8px 0}
        .faq-item summary::-webkit-details-marker{display:none}
        .faq-item summary::before{content:"+ ";color:var(--gold);font-weight:900;margin-right:8px}
        .faq-item[open] summary::before{content:"− "}
        .faq-item p{font-size:15px;color:var(--gray-400);line-height:1.65;margin:12px 0 0;padding-left:22px}
        @media(max-width:600px){.hero{padding:48px 20px}section{padding:48px 20px}.deliv-grid,.who-grid{grid-template-columns:1fr}.cta-box{padding:48px 24px;margin:0 20px 60px}.cta-box .price-big{font-size:52px}}
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="pre-h1">$997 · 7 DAYS · WRITTEN REPORT + REVIEW CALL</div>
        <h1>The AI clarity report<br />a <span>$10,000 consultant</span><br />would write for you.</h1>
        <p className="hero-sub">
          You don&apos;t need another listicle. You need a custom report built around <em>your</em> workflows, your tools, and your bottleneck — telling you the 3-5 AI moves that will save you 5+ hours/week, ranked and ready to implement.
        </p>
        <div className="hero-cta-row">
          <a href={ASSESSMENT_URL} className="btn-primary">Book Your AI Assessment — $997 →</a>
        </div>
        <div className="hero-meta">
          <span>One-time payment</span>
          <span>7-day delivery</span>
          <span>5+ hrs/week guaranteed or full refund</span>
        </div>
      </div>

      {/* THE PITCH — selling clarity */}
      <section>
        <div className="section-label">The Difference</div>
        <h2>You&apos;re not buying tools. You&apos;re buying clarity.</h2>
        <p className="sub2">
          Every business owner knows AI is changing everything. Almost none of them know <em>which 3 tools</em>, in <em>what order</em>, would actually move the needle for their specific business this quarter.
        </p>
        <p className="sub2">
          That gap — between &ldquo;AI can do this&rdquo; and &ldquo;here&apos;s exactly how to set it up for <em>you</em>&rdquo; — is what we close. One discovery call, one custom report, one review call.
        </p>
        <div className="pull-quote">
          A typical client recovers <strong style={{color:'#FCD34D'}}>6+ hours/week</strong> for ~<strong style={{color:'#FCD34D'}}>$40/month</strong> in tool costs. At $100/hour of their time, that&apos;s <strong style={{color:'#FCD34D'}}>$31,200/year of value created</strong> from a $997 assessment.
          <cite>— Per the AI consulting model we built this on</cite>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Who This Is For</div>
        <h2>Built for service pros and small teams who don&apos;t have time to figure it out themselves.</h2>
        <div className="who-grid">
          {[
            'Coaches, consultants, agencies, solo operators with $5K+ months',
            'Small teams (1-10) drowning in repetitive admin and content work',
            'You\'ve tried ChatGPT but never built a system that runs on its own',
            'You\'re paying $500+/mo for tools, VAs, or contractors AI could replace',
            'You want a written game plan, not a $200/hr consultant on retainer',
            'You can spare 60 minutes for a discovery call this week',
          ].map((t,i) => (
            <div className="who-item" key={i}>
              <span className="who-check">✓</span>
              <span className="who-text">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* THE 4-PHASE FRAMEWORK */}
      <section style={{paddingTop:0}}>
        <div className="section-label">How It Works</div>
        <h2>The 4-phase framework. 7 days, end-to-end.</h2>
        <p className="sub2">
          No fluff. No generic frameworks. Every phase produces something concrete you can use.
        </p>

        <div className="phase">
          <div className="phase-num">1</div>
          <div className="phase-body">
            <div className="phase-meta">Day 1 · 60-min Zoom</div>
            <h3>Discovery Call</h3>
            <p>A live, follow-up-question-driven interview about your business. Not a questionnaire — a conversation, because the best insights come from the answers we can&apos;t script. The five questions that surface the highest-ROI opportunities:</p>
            <ul>
              <li>Walk me through yesterday. Where did your time actually go?</li>
              <li>What tasks do you dread but can&apos;t hand off to anyone?</li>
              <li>Where does work pile up waiting on you specifically?</li>
              <li>What have you tried to automate but couldn&apos;t figure out?</li>
              <li>What&apos;s the one thing that, if it ran itself, would change your week?</li>
            </ul>
            <p style={{marginTop:14,fontSize:14,color:'var(--gray-400)',fontStyle:'italic'}}>Most operators underestimate context-switching cost by 50%+. These questions are designed to expose the time-drains you&apos;ve never quantified — in your own words.</p>
          </div>
        </div>

        <div className="phase">
          <div className="phase-num">2</div>
          <div className="phase-body">
            <div className="phase-meta">Days 2-5 · Behind the scenes</div>
            <h3>AI-Powered Analysis</h3>
            <p>We synthesize the call transcript with AI to surface time-sinks you mentioned in passing — the ones that turn out to represent the biggest leverage. Then we map each against the current AI tool landscape.</p>
            <ul>
              <li>Cross-reference your stack against 50+ tested AI tools</li>
              <li>Score every candidate on fit, cost, learning curve, ROI</li>
              <li>Reject anything we haven&apos;t personally tested in similar workflows</li>
              <li>Distill to 3-5 recommendations (more is overwhelm; fewer is malpractice)</li>
            </ul>
          </div>
        </div>

        <div className="phase">
          <div className="phase-num">3</div>
          <div className="phase-body">
            <div className="phase-meta">Day 6 · Polished deliverable</div>
            <h3>The Report</h3>
            <p>A 15-25 page custom PDF — written like a $10K consulting deck, not a free PDF. Designed to make decisions, not collect dust.</p>
            <div className="deliv-grid">
              <div className="deliv-item"><h4>EXECUTIVE SUMMARY</h4><p>Your top 3 AI moves, in priority order, on page 1. The rest is the why.</p></div>
              <div className="deliv-item"><h4>TOOL RECOMMENDATIONS</h4><p>3-5 tools, with use cases, pricing, learning curve, and exact setup notes.</p></div>
              <div className="deliv-item"><h4>HOURS-SAVED PROJECTION</h4><p>Per-tool estimate of weekly hours recovered, anchored on your actual workflow.</p></div>
              <div className="deliv-item"><h4>COST OF INACTION</h4><p>What every month of delay costs you — in dollars and in compounding leverage.</p></div>
              <div className="deliv-item"><h4>IMPLEMENTATION ORDER</h4><p>Which tool first, which second, what to skip. So you don&apos;t implement nothing.</p></div>
              <div className="deliv-item"><h4>REJECTION LIST</h4><p>The 3-5 popular AI tools we DIDN&apos;T recommend for you, and why. Saves you wasted experiments.</p></div>
            </div>
          </div>
        </div>

        <div className="phase">
          <div className="phase-num">4</div>
          <div className="phase-body">
            <div className="phase-meta">Day 7 · 30-min walkthrough</div>
            <h3>Review Call</h3>
            <p>We walk through the report live. You ask anything. We adjust if context shifted. You leave with three things:</p>
            <ul>
              <li>The next tool to set up this week (Monday-morning clarity)</li>
              <li>An honest yes/no on whether you should do this yourself or have us implement it</li>
              <li>The full report PDF, yours forever — adjust and re-use as your business grows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section style={{paddingTop:0}}>
        <div className="section-label">The Numbers</div>
        <h2>Why $997 is the bargain in this transaction.</h2>
        <p className="sub2">
          Run the math on a typical assessment outcome — 6 hours/week recovered at $100/hour of your time:
        </p>
        <table className="math-table">
          <tbody>
            <tr><td>Hours recovered per week</td><td>6 hrs</td></tr>
            <tr><td>Your hourly rate (conservative)</td><td>$100/hr</td></tr>
            <tr><td>Weekly value created</td><td>$600/wk</td></tr>
            <tr><td>Annual value (52 weeks)</td><td>$31,200/yr</td></tr>
            <tr><td>Recommended tool stack cost</td><td>~$40/mo ($480/yr)</td></tr>
            <tr><td>Net value, year one</td><td>$30,720</td></tr>
            <tr className="total"><td>Cost of the assessment</td><td>$997</td></tr>
            <tr className="total"><td>Year-1 ROI</td><td>30.8x</td></tr>
          </tbody>
        </table>
      </section>

      {/* IMPLEMENTATION LADDER */}
      <section style={{paddingTop:0}}>
        <div className="section-label">After The Report</div>
        <h2>Want us to build the recommendations? Here&apos;s the ladder.</h2>
        <p className="sub2">
          Roughly 60% of assessment clients ask for help implementing. You&apos;re never obligated — but if you want it, here are the tiers. Pricing is fixed and on the report so you can decide unhurried.
        </p>
        <div className="ladder-grid">
          <div className="ladder-card">
            <div className="tier-tag">DIY-ASSIST</div>
            <h4>Coach Mega Pack</h4>
            <div className="price">$97<small>/once</small></div>
            <p>200+ done-for-you prompts so the recommended tools immediately produce on-brand output.</p>
            <a href={MEGA_PACK} style={{display:'block',textAlign:'center',marginTop:16,padding:'10px 14px',background:'rgba(255,200,0,0.08)',border:'1px solid rgba(255,200,0,0.2)',borderRadius:99,fontSize:13,fontWeight:700,color:'var(--gold)',textDecoration:'none'}}>Add to assessment →</a>
          </div>
          <div className="ladder-card">
            <div className="tier-tag">FOUNDATION</div>
            <h4>Content Month</h4>
            <div className="price">$199<small>/once</small></div>
            <p>30 days of content built using your assessment&apos;s recommended stack. We deliver, you publish.</p>
            <a href={IMPL_CONTENT} style={{display:'block',textAlign:'center',marginTop:16,padding:'10px 14px',background:'rgba(255,200,0,0.08)',border:'1px solid rgba(255,200,0,0.2)',borderRadius:99,fontSize:13,fontWeight:700,color:'var(--gold)',textDecoration:'none'}}>See package →</a>
          </div>
          <div className="ladder-card featured">
            <div className="tier-tag">MOST POPULAR</div>
            <h4>Brand + Stack Build</h4>
            <div className="price">$1,500<small>+ scoped</small></div>
            <p>We implement the top recommendation from your report. Tool setup, brand voice tuning, team-ready docs.</p>
            <p style={{fontSize:12,color:'var(--gray-400)',marginTop:10,fontStyle:'italic'}}>Quoted on report after Phase 3</p>
          </div>
          <div className="ladder-card">
            <div className="tier-tag">FULL BUILD</div>
            <h4>Full Implementation</h4>
            <div className="price">$3,500<small>+ scoped</small></div>
            <p>All 3-5 recommendations implemented. Multi-tool integration, team training, 30-day support.</p>
            <p style={{fontSize:12,color:'var(--gray-400)',marginTop:10,fontStyle:'italic'}}>Quoted on report after Phase 3</p>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET BRIDGE */}
      <section style={{paddingTop:0}}>
        <div style={{background:'linear-gradient(135deg,rgba(252,211,77,0.06),rgba(245,158,11,0.04))',border:'1px solid rgba(252,211,77,0.18)',borderRadius:18,padding:'40px 36px',textAlign:'center'}}>
          <div className="section-label" style={{marginBottom:14}}>Not Ready Yet?</div>
          <h3 style={{fontSize:24,fontWeight:900,margin:'0 0 12px',letterSpacing:'-0.5px'}}>Run the audit framework on yourself first.</h3>
          <p style={{fontSize:15,color:'var(--gray-400)',margin:'0 auto 24px',lineHeight:1.65,maxWidth:560}}>
            Download the free <strong style={{color:'#FFF'}}>AI Audit Template</strong> &mdash; the same 5 questions, scoring rubric, and tool-recommendation framework we use on every $997 audit. Run it on yourself in 30 minutes. If you want a pro report after, you know where to find us.
          </p>
          <Link href="/audit-template"><a className="btn-primary" style={{display:'inline-block'}}>Get the free template →</a></Link>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <div className="cta-box" id="book">
        <div className="section-label" style={{marginBottom:0}}>Ready to stop guessing?</div>
        <div className="price-big">$997</div>
        <div className="price-cap">One-Time · 7 Days · Yours Forever</div>
        <p>
          Book today, kick off your discovery call within 48 hours,<br />
          have a custom report and clear next moves by next week.<br /><br />
          <strong style={{color:'#FFF'}}>Full refund</strong> if we can&apos;t identify 5+ hours/week of recoverable time. We&apos;ve never had to issue one.
        </p>
        <a href={ASSESSMENT_URL} className="btn-primary">Book Your AI Assessment →</a>
        <p style={{marginTop:18,fontSize:12,color:'var(--gray-400)'}}>
          Secure Stripe checkout · Discovery call scheduling within 1 hour · 100% money-back guarantee
        </p>
      </div>

      {/* FAQ */}
      <section style={{paddingTop:0}}>
        <div className="section-label">FAQ</div>
        <h2>Questions buyers actually ask.</h2>
        <div>
          {[
            {
              q: 'What do I actually receive?',
              a: 'A custom written report (15-25 pages, PDF) with: your top 3-5 AI tool recommendations, exact use cases per tool, monthly cost, expected hours-per-week saved, an implementation order, and a 30-minute live review call with the analyst who built it. Yours forever.',
            },
            {
              q: 'How is this different from a free ChatGPT recommendation or a "10 AI Tools" listicle?',
              a: 'A generic article tells you what AI exists. We tell you what AI fits your business — your workflow, your team, your bookkeeping setup, your CRM, your bottleneck. We test every recommendation against your actual context. We also tell you which popular tools NOT to bother with, given your situation. That rejection list alone saves most clients $1,000+ in subscription waste.',
            },
            {
              q: 'How long does it take?',
              a: '7 days from booking to delivered report. Day 1: 60-minute discovery call. Days 2-5: AI-powered analysis + tool research. Day 6: report drafted and quality-reviewed. Day 7: 30-minute review call to walk it through.',
            },
            {
              q: 'Do I need to be technical?',
              a: 'No. Zero. We translate "AI can do this" into "click here, then here, then here." Most clients implement Tool #1 within 48 hours of receiving the report.',
            },
            {
              q: 'What if I need help implementing the recommendations?',
              a: '60% of assessment clients want implementation help. We offer 3 implementation tiers ($1.5K, $3.5K, $7.5K+) for everything from setting up one tool to a full multi-tool integration with team training. Pricing is on the report and you decide after.',
            },
            {
              q: 'What if your recommendations don\'t save me 5+ hours/week?',
              a: 'Full refund. We only recommend tools we\'ve personally tested in workflows similar to yours, and we project hours saved + dollar value before you commit. The guarantee is the easiest one in the industry.',
            },
            {
              q: 'How do you access my systems?',
              a: 'You don\'t share credentials. The discovery call is conversation-only. The report is built from what you tell us, not from logging into anything. If you opt for implementation later, we use scoped tokens and short-lived access only.',
            },
            {
              q: 'What kinds of businesses do you assess?',
              a: 'Coaches, consultants, agencies, freelancers, real estate professionals, e-commerce operators, and small teams (1-10 people) doing $5K+/month in revenue. We don\'t take on enterprise (different problem) or pre-revenue (different product).',
            },
          ].map((f,i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA — soft */}
      <section style={{paddingTop:0,paddingBottom:80,textAlign:'center'}}>
        <p style={{fontSize:17,color:'var(--gray-300)',maxWidth:540,margin:'0 auto 24px',lineHeight:1.6}}>
          The translation gap between &ldquo;AI can do this&rdquo; and &ldquo;here&apos;s how to set it up for your business&rdquo; won&apos;t stay open forever. The clarity premium is now.
        </p>
        <a href={ASSESSMENT_URL} className="btn-primary">Book Your $997 AI Assessment →</a>
      </section>
    </Layout>
  );
}
