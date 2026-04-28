import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

const ASSESSMENT_URL = 'https://buy.stripe.com/cNi14m90j6iR7OI8VYcMM03';
const STRIPE_STARTER = 'https://buy.stripe.com/fZueVcb8rgXv3ysc8acMM0t';

const QUESTIONS = [
  {
    n: 'Q1',
    title: 'Walk me through yesterday. Where did your time actually go?',
    why: 'Self-reports of time use are wildly inaccurate. Walking through a specific day surfaces context-switching cost most operators never quantify (typical underestimate: 50%+).',
    score: 'Time recovery score (0\u201310): How many of the activities you describe were value-creating vs. administrative? Anything below 6 is a red flag \u2014 most of your day is being eaten.',
  },
  {
    n: 'Q2',
    title: 'What tasks do you dread but can\u2019t hand off to anyone?',
    why: 'Dread + lock-in = the highest-value automation candidates. If it were easy to hand off, you would have. The friction tells you exactly where AI fits.',
    score: 'Dread index (0\u201310): How much avoidance behavior have you developed around this task? 8+ = automate this WEEK.',
  },
  {
    n: 'Q3',
    title: 'Where does work pile up waiting on you specifically?',
    why: 'Bottlenecks where you are the dependency are 100% of the time AI-augmentable today. The pile is the proof.',
    score: 'Bottleneck severity (0\u201310): How many other people / customers / projects stall when this queue stalls? 7+ = highest priority to automate.',
  },
  {
    n: 'Q4',
    title: 'What have you tried to automate but couldn\u2019t figure out?',
    why: 'Failed attempts mean the problem is real and previous tools weren\u2019t the right fit. The gap between "I tried" and "I gave up" is exactly where current AI tools win.',
    score: 'Attempts made (count): 1\u20132 = experiment more aggressively. 3+ = you have a real bottleneck that needs an outside perspective.',
  },
  {
    n: 'Q5',
    title: 'What\u2019s the one thing that, if it ran itself, would change your week?',
    why: 'This is the dream-state question. Your answer reveals the highest emotional payoff target \u2014 and the one most likely to actually drive adoption once shipped.',
    score: 'Emotional weight (0\u201310): How visceral is your answer? 9\u201310 = build this regardless of ROI; the energy gain is worth it.',
  },
];

const ANALYSIS_PROMPT = `You are an AI tools consultant analyzing a business owner's responses to identify the highest-ROI automation opportunities.

Below are answers to 5 discovery questions plus self-scored severity ratings.

For EACH opportunity you identify (target 5\u20137 total):
1. Name the SPECIFIC AI tool(s) you'd recommend (production-ready, not experimental)
2. Estimate weekly hours saved (be specific: "4\u20136 hrs/week", not "many hours")
3. Rate implementation difficulty: easy / medium / hard
4. Describe the workflow before AND after the tool is in place
5. Estimate monthly tool cost
6. Rate confidence (high / medium / low) based on how clearly the operator described the bottleneck

Filter rules:
- Reject any tool you haven't seen production-deployed in at least 5 similar businesses
- Reject any recommendation that requires the operator to learn a new programming/scripting skill
- Reject any "experimental" or "beta" tools \u2014 only ship-ready
- If two tools solve the same problem, pick the one with the lower learning curve

Then prioritize by HOURS SAVED PER MONTH ÷ IMPLEMENTATION DIFFICULTY. The top 3 are what they should set up this month.

Output format:
- Executive summary (3 bullets: top 3 moves)
- Per-opportunity table with all the fields above
- 4-day quick-start plan (what to set up Monday / Tuesday / Wednesday / Thursday)
- Rejection list: 3\u20135 popular tools you DID NOT recommend, and why

OPERATOR'S ANSWERS:
[PASTE THE 5 ANSWERS + SELF-SCORES HERE]`;

const RUBRIC = [
  { range: '0\u201320 total', label: 'Stable workflow', interpretation: 'You\u2019re running tight. Focus on growth tools (lead-gen, content scale) rather than internal automation.' },
  { range: '21\u201335 total', label: 'Quiet leakage', interpretation: '5\u20137 hrs/week leaking. Pick the top-2 highest-score answers and automate those first. Skip the rest.' },
  { range: '36\u201350 total', label: 'Active bottleneck', interpretation: 'You\u2019re the bottleneck for your own business. 10+ hrs/week recoverable. Run the full audit framework or have us do it for you.' },
];

export default function AuditTemplate() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const utm = params ? {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
      } : {};
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'audit-template',
          referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
          ...utm,
        }),
      });
      setStatus('success');
      setUnlocked(true);
    } catch {
      setStatus('error');
    }
  };

  const title = 'Free AI Audit Template \u2014 The 5-Question Self-Audit (2026) | Midas Tools';
  const description = 'The same 5-question framework, scoring rubric, and Claude analysis prompt we use on every $997 AI Tools Assessment. Run it on yourself in 30 minutes \u2014 free. For coaches, consultants, and solo operators.';
  const url = 'https://www.midastools.co/audit-template';

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description,
          url,
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
        }) }} />
      </Head>

      <style>{`
        .hero{max-width:760px;margin:0 auto;padding:80px 40px 56px;text-align:center}
        .pre-h1{display:inline-block;padding:6px 14px;background:rgba(255,200,0,0.08);color:var(--gold);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:24px;letter-spacing:1.5px;border:1px solid rgba(255,200,0,0.15)}
        h1{font-size:clamp(32px,5vw,56px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px}
        h1 span{color:var(--gold)}
        .hero-sub{font-size:18px;color:var(--gray-400);max-width:580px;margin:0 auto 32px;line-height:1.65}
        section{max-width:760px;margin:0 auto;padding:64px 40px}
        h2{font-size:clamp(26px,3.5vw,38px);font-weight:900;letter-spacing:-1px;margin-bottom:20px;line-height:1.15}
        h3{font-size:20px;font-weight:800;margin-bottom:10px;letter-spacing:-0.3px}
        .gate-box{max-width:480px;margin:0 auto}
        .gate-form{display:flex;gap:8px}
        .gate-input{flex:1;font-size:15px;padding:14px 20px;border:2px solid var(--gray-800);background:var(--gray-900);border-radius:99px;outline:none;color:#FFF;font-family:inherit}
        .gate-input:focus{border-color:var(--gold)}
        .gate-btn{font-size:15px;font-weight:700;padding:14px 28px;background:var(--gold);color:#0F172A;border:none;border-radius:99px;cursor:pointer;white-space:nowrap;transition:opacity 0.15s;font-family:inherit}
        .gate-btn:hover{opacity:0.9}
        .gate-btn:disabled{opacity:0.6;cursor:not-allowed}
        .trust{font-size:13px;color:var(--gray-400);margin-top:14px}
        .trust strong{color:#FFF}
        .success-msg{font-size:16px;font-weight:600;color:var(--gold);text-align:center;margin-top:8px}
        .question-block{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:28px;margin-bottom:18px;position:relative}
        .question-block.locked{filter:blur(5px);user-select:none;pointer-events:none}
        .q-num{display:inline-block;padding:4px 10px;background:rgba(255,200,0,0.1);color:var(--gold);font-size:11px;font-weight:800;border-radius:99px;margin-bottom:14px;letter-spacing:1px}
        .q-title{font-size:18px;font-weight:800;margin-bottom:14px;color:#FFF;line-height:1.4}
        .q-section{margin-top:14px}
        .q-section-label{font-size:11px;font-weight:800;color:var(--gold);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}
        .q-section-text{font-size:14px;color:var(--gray-300);line-height:1.6}
        .copy-block{position:relative;background:#0B1120;border:1px solid var(--gray-800);border-radius:10px;padding:20px;font-family:'SF Mono',Menlo,monospace;font-size:13px;line-height:1.65;color:#E5E7EB;white-space:pre-wrap;overflow-x:auto;margin:16px 0}
        .copy-btn{position:absolute;top:10px;right:10px;font-size:11px;font-weight:700;padding:6px 12px;background:var(--gold);color:#0F172A;border:none;border-radius:6px;cursor:pointer;font-family:inherit}
        .rubric-table{width:100%;border-collapse:collapse;margin-top:16px}
        .rubric-table th,.rubric-table td{padding:14px 12px;text-align:left;border-bottom:1px solid var(--gray-800);font-size:14px}
        .rubric-table th{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--gold);font-weight:800}
        .rubric-table td:first-child{font-weight:700;color:#FFF;white-space:nowrap}
        .rubric-table td:nth-child(2){color:var(--gold);font-weight:600}
        .rubric-table td:last-child{color:var(--gray-300);line-height:1.5}
        .upsell{background:linear-gradient(135deg,rgba(252,211,77,0.06),rgba(245,158,11,0.04));border:1px solid rgba(252,211,77,0.18);border-radius:18px;padding:48px 36px;text-align:center;margin-top:48px}
        .upsell h2{margin-bottom:14px}
        .upsell p{font-size:16px;color:var(--gray-300);margin-bottom:24px;line-height:1.65;max-width:540px;margin-left:auto;margin-right:auto}
        .upsell-tiers{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px}
        .upsell-tier{background:var(--gray-900);border:1px solid var(--gray-800);border-radius:14px;padding:24px;text-align:left}
        .upsell-tier.featured{border:2px solid var(--gold)}
        .tier-tag{font-size:10px;font-weight:800;color:var(--gold);letter-spacing:1px;margin-bottom:10px}
        .tier-h{font-size:17px;font-weight:800;margin-bottom:6px}
        .tier-p{font-size:23px;font-weight:900;color:var(--gold);margin-bottom:10px;letter-spacing:-1px}
        .tier-desc{font-size:13px;color:var(--gray-400);line-height:1.55;margin-bottom:14px}
        .tier-btn{display:block;text-align:center;padding:10px 14px;background:rgba(255,200,0,0.08);border:1px solid rgba(255,200,0,0.2);border-radius:99px;font-size:13px;font-weight:700;color:var(--gold);text-decoration:none}
        .tier-btn.primary{background:var(--gold);color:#0F172A}
        @media(max-width:600px){.hero{padding:48px 20px}section{padding:48px 20px}.gate-form{flex-direction:column}.gate-input,.gate-btn{width:100%}.upsell{padding:36px 20px}.upsell-tiers{grid-template-columns:1fr}}
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="pre-h1">FREE TEMPLATE \u00B7 5-QUESTION SELF-AUDIT \u00B7 30 MIN</div>
        <h1>The same audit framework <span>$10K consultants use.</span><br />Yours free.</h1>
        <p className="hero-sub">
          The 5 questions. The scoring rubric. The Claude prompt that turns your answers into a tool-recommendation report. Run the framework on yourself in 30 minutes \u2014 the same one we use on every $997 AI Tools Assessment.
        </p>
        {!unlocked ? (
          <div className="gate-box">
            <form className="gate-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@yourbusiness.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="gate-input"
                disabled={status === 'loading'}
              />
              <button type="submit" className="gate-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Unlocking\u2026' : 'Get the Template'}
              </button>
            </form>
            {status === 'error' && <p style={{ color: '#F87171', fontSize: 14, marginTop: 8 }}>Something went wrong. Try again.</p>}
            <p className="trust">Free, instant access. <strong>No credit card.</strong> One email/week max.</p>
          </div>
        ) : (
          <p className="success-msg">Unlocked. Scroll down to use the framework. \u2193</p>
        )}
      </div>

      {/* THE 5 QUESTIONS */}
      <section>
        <div className="section-label">Phase 1 \u2014 The 5 Discovery Questions</div>
        <h2>Answer all five. Be honest with yourself.</h2>
        <p style={{fontSize:15,color:'var(--gray-400)',marginBottom:32,lineHeight:1.65}}>
          Each question has a "why it works" note (so you understand what we're surfacing) and a self-scoring rubric. Write your answers in any document. Score yourself at the end of each question.
        </p>

        {QUESTIONS.map((q, i) => (
          <div className={`question-block${unlocked ? '' : i > 0 ? ' locked' : ''}`} key={q.n}>
            <div className="q-num">{q.n}</div>
            <div className="q-title">{q.title}</div>
            <div className="q-section">
              <div className="q-section-label">Why it works</div>
              <div className="q-section-text">{q.why}</div>
            </div>
            <div className="q-section">
              <div className="q-section-label">Self-score</div>
              <div className="q-section-text">{q.score}</div>
            </div>
          </div>
        ))}
      </section>

      {/* SCORING RUBRIC */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Phase 2 \u2014 Scoring Rubric</div>
        <h2>Add up your scores. Read what they mean.</h2>
        <p style={{fontSize:15,color:'var(--gray-400)',marginBottom:24,lineHeight:1.65}}>
          Sum your self-scores across all 5 questions (max 50 points). Find your range below. This tells you whether you have a tools problem, a workflow problem, or both.
        </p>
        <div className={unlocked ? '' : 'question-block locked'} style={!unlocked ? {padding:0,border:'none',background:'transparent'} : {}}>
          <table className="rubric-table">
            <thead>
              <tr><th>Total Score</th><th>Diagnosis</th><th>What to do</th></tr>
            </thead>
            <tbody>
              {RUBRIC.map(r => (
                <tr key={r.range}>
                  <td>{r.range}</td>
                  <td>{r.label}</td>
                  <td>{r.interpretation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CLAUDE ANALYSIS PROMPT */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Phase 3 \u2014 The Claude Analysis Prompt</div>
        <h2>Paste your answers into this prompt.</h2>
        <p style={{fontSize:15,color:'var(--gray-400)',marginBottom:24,lineHeight:1.65}}>
          Open Claude (or ChatGPT-5/Gemini-3 \u2014 we recommend Claude Opus 4.7 for this). Paste the prompt below, then paste your 5 answers + scores at the bottom. You'll get a structured tool-recommendation report in 60 seconds.
        </p>
        <div className={`copy-block${unlocked ? '' : ' locked'}`} style={!unlocked ? {filter:'blur(5px)',userSelect:'none'} : {}}>
          {unlocked && (
            <button
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(ANALYSIS_PROMPT)}
            >Copy</button>
          )}
          {ANALYSIS_PROMPT}
        </div>
      </section>

      {/* PHASE 4 */}
      <section style={{paddingTop:0}}>
        <div className="section-label">Phase 4 \u2014 Pick The Top 3 And Ship</div>
        <h2>Don't implement 7 things. Implement 3.</h2>
        <p style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.65}}>
          Most operators try to implement everything Claude recommends, get overwhelmed, and abandon the whole exercise. The discipline is to pick the top 3 (highest hours-saved \u00F7 lowest implementation difficulty) and only ship those this month.
        </p>
        <p style={{fontSize:15,color:'var(--gray-400)',lineHeight:1.65,marginTop:16}}>
          Set up tool #1 on Monday. Tool #2 on Wednesday. Tool #3 on Friday. Spend the rest of the month using them. Re-audit in 30 days.
        </p>
      </section>

      {/* UPSELL */}
      <section style={{paddingTop:0}}>
        <div className="upsell">
          <div className="section-label" style={{marginBottom:16}}>Want us to do this for you?</div>
          <h2 style={{margin:'0 0 14px'}}>The DIY framework works.<br />A 48-hour pro audit works faster.</h2>
          <p>
            Running this yourself takes ~3 hours of focused work + an honest self-assessment. If you want a 15\u201325 page custom report (with rejection list, ROI math, and a 30-min walkthrough call), we do it in 48 hours for $997 \u2014 with a full refund if we don't find 5+ hours/week of savings.
          </p>
          <div className="upsell-tiers">
            <div className="upsell-tier">
              <div className="tier-tag">START SMALL</div>
              <div className="tier-h">$9 Starter Pack</div>
              <div className="tier-p">$9</div>
              <div className="tier-desc">20 hand-picked AI prompts \u2014 cold outreach, content, sales pages. Instant download.</div>
              <a href={STRIPE_STARTER} className="tier-btn">Try the prompts \u2192</a>
            </div>
            <div className="upsell-tier featured">
              <div className="tier-tag">DONE-FOR-YOU</div>
              <div className="tier-h">AI Tools Assessment</div>
              <div className="tier-p">$997</div>
              <div className="tier-desc">48-hr custom report. 5+ hrs/week guaranteed. 30-min walkthrough. Full refund if we don't deliver.</div>
              <Link href="/ai-audit"><a className="tier-btn primary">Book the assessment \u2192</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop:0,paddingBottom:80,textAlign:'center'}}>
        <p style={{fontSize:15,color:'var(--gray-400)',maxWidth:540,margin:'0 auto',lineHeight:1.6}}>
          The translation gap between &ldquo;AI can do this&rdquo; and &ldquo;here&rsquo;s how to set it up for your business&rdquo; is the most valuable consulting niche in 2026. Most operators close the gap themselves. Some hire us. Both work.
        </p>
      </section>
    </Layout>
  );
}
