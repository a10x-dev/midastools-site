import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import { submitSubscribe } from '../lib/subscribe';

const STRIPE_URL = 'https://buy.stripe.com/fZubJ01xR8qZed6goqcMM0z';
const BUNDLE_STRIPE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ChampionMonthly() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLead = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await submitSubscribe({ email, source: 'champion-monthly-lead', business: 'B2B Adoption' });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>MidasTools Champion — Your AI Rollout, On Retainer | $199/mo</title>
        <meta name="description" content="Personalized monthly AI drops for VPs of People, Heads of L&D, and Directors of Ops rolling out AI to their teams. Weekly tips, monthly prompt drops, prompt validator, competitive briefs. First drop within 7 days. $199/mo." />
        <meta property="og:title" content="MidasTools Champion — Your AI Rollout, On Retainer" />
        <meta property="og:description" content="$199/mo for a personalized monthly AI drop: weekly tips, prompt validator, competitive brief — all calibrated to your team. First drop ships within 7 days." />
        <meta property="og:url" content="https://www.midastools.co/champion-monthly" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "MidasTools Champion Monthly",
          "description": "Monthly subscription delivering personalized AI prompts, playbooks, prompt validation, and competitive briefs to VPs of People and Heads of L&D rolling out AI to their teams.",
          "url": "https://www.midastools.co/champion-monthly",
          "image": "https://www.midastools.co/og-image.png",
          "brand": "Midas Tools",
          "offers": {
            "@type": "Offer",
            "price": "199",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": STRIPE_URL,
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "199",
              "priceCurrency": "USD",
              "billingIncrement": 1,
              "unitText": "MONTH"
            }
          }
        })}} />
      </Head>

      <style>{`
        .cm-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .cm-badge { display: inline-block; background: var(--accent); color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .cm-h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 16px; }
        .cm-h1 span { color: var(--accent); }
        .cm-sub { font-size: 20px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .cm-cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
        .cm-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; border-radius: 100px; font-weight: 700; font-size: 16px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .cm-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.3); }
        .cm-cta-primary { background: var(--accent); color: white; }
        .cm-cta-secondary { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
        .cm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 48px; }
        .cm-stat { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
        .cm-stat-num { font-size: 28px; font-weight: 900; color: var(--accent); letter-spacing: -1px; }
        .cm-stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; }
        .cm-section { margin-bottom: 56px; }
        .cm-section h2 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 12px; letter-spacing: -0.5px; }
        .cm-section h2 + p { color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px; }
        .cm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .cm-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; }
        .cm-card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .cm-card-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        .cm-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .cm-step { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; }
        .cm-step-num { display: inline-block; background: var(--accent); color: white; width: 28px; height: 28px; line-height: 28px; text-align: center; border-radius: 99px; font-weight: 800; font-size: 14px; margin-bottom: 12px; }
        .cm-step-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .cm-step-body { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        .cm-sample { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 16px; }
        .cm-sample-label { display: inline-block; background: rgba(59,95,255,0.08); color: var(--accent); font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 99px; margin-bottom: 12px; letter-spacing: 0.5px; text-transform: uppercase; }
        .cm-sample-title { font-size: 16px; font-weight: 700; margin-bottom: 12px; }
        .cm-sample-body { font-size: 14px; line-height: 1.7; color: var(--text-secondary); white-space: pre-line; }
        .cm-price-box { background: var(--surface); border: 2px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 48px; }
        .cm-price-big { font-size: 48px; font-weight: 900; color: var(--text); letter-spacing: -2px; }
        .cm-price-per { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
        .cm-guarantee { background: rgba(59,95,255,0.06); border: 1px solid rgba(59,95,255,0.2); border-radius: 12px; padding: 20px 24px; margin-bottom: 48px; }
        .cm-guarantee-title { font-size: 14px; font-weight: 700; color: var(--accent); margin-bottom: 6px; }
        .cm-guarantee-body { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        .cm-lead { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 48px; }
        .cm-lead-form { display: flex; gap: 8px; margin-top: 12px; }
        .cm-lead-input { flex: 1; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; }
        .cm-lead-btn { padding: 12px 24px; background: var(--accent); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
        .cm-faq { margin-bottom: 48px; }
        .cm-faq-item { border-bottom: 1px solid var(--border); padding: 16px 0; }
        .cm-faq-q { font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .cm-faq-a { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
        @media (max-width: 640px) {
          .cm-stats { grid-template-columns: repeat(2, 1fr); }
          .cm-grid { grid-template-columns: 1fr; }
          .cm-steps { grid-template-columns: 1fr; }
          .cm-cta-row { flex-direction: column; }
          .cm-cta { justify-content: center; }
          .cm-lead-form { flex-direction: column; }
        }
      `}</style>

      <div className="cm-page">
        <div className="cm-badge">B2B SUBSCRIPTION — $199/MO</div>
        <h1 className="cm-h1">
          Your AI rollout. <span>On retainer.</span>
        </h1>
        <p className="cm-sub">
          $199/mo for a personalized monthly drop of prompts, playbooks, and competitive briefs —
          calibrated to your team, your stage, and the rollout milestone you're hitting next.
          Built for the VP People / Head of L&D / Chief of Staff on the hook for "make AI happen."
        </p>

        <div className="cm-cta-row">
          <a href={STRIPE_URL} className="cm-cta cm-cta-primary">Subscribe — $199/mo</a>
          <a href="#how-it-works" className="cm-cta cm-cta-secondary">See how it works</a>
        </div>

        <div className="cm-stats">
          <div className="cm-stat"><div className="cm-stat-num">7 days</div><div className="cm-stat-label">To first drop</div></div>
          <div className="cm-stat"><div className="cm-stat-num">6</div><div className="cm-stat-label">Deliverables monthly</div></div>
          <div className="cm-stat"><div className="cm-stat-num">1:1</div><div className="cm-stat-label">Personalized to your team</div></div>
          <div className="cm-stat"><div className="cm-stat-num">Anytime</div><div className="cm-stat-label">Cancel via Stripe receipt</div></div>
        </div>

        {/* Who this is for */}
        <div className="cm-section">
          <h2>Who this is for</h2>
          <p>
            B2B operators rolling AI to a real team. Not solo coaches, not consumer prompt-pack browsers.
            If you've been told "we need an AI strategy" and are now on the hook to ship it, this is built for you.
          </p>
          <div className="cm-grid">
            <div className="cm-card">
              <div className="cm-card-title">VP People / Head of People Ops</div>
              <div className="cm-card-desc">You're scaling AI across non-technical teams (HR, Ops, Sales, Marketing). You need playbooks per role and a way to track adoption without policing it.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Head of L&D / Training</div>
              <div className="cm-card-desc">You're building the internal AI curriculum. You need a monthly stream of skills + frameworks that's better than what your team would find on YouTube.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Director of Operations</div>
              <div className="cm-card-desc">You're standing up an internal AI program. You need ROI math, skill-gap rubrics, and a Marketplace pattern that actually drives bottoms-up adoption.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Chief of Staff to CEO</div>
              <div className="cm-card-desc">The CEO said "AI everywhere by Q4." You're translating that into a 90-day plan with weekly checkpoints. You need monthly intel on what competitors are doing.</div>
            </div>
          </div>
        </div>

        {/* What you get monthly */}
        <div className="cm-section">
          <h2>What lands in your inbox every month</h2>
          <p>
            Six deliverables. Calibrated to your team based on a 7-question intake survey at signup.
            Not a generic newsletter. Each drop is built around your specific rollout cadence and the skeptical-staff / regulated-environment / tool-stack reality of your company.
          </p>
          <div className="cm-grid">
            <div className="cm-card">
              <div className="cm-card-title">Weekly AI tip</div>
              <div className="cm-card-desc">Every Monday. One tactic for your role this week — calibrated to where you are in your rollout (week 4 looks different from week 40). 90 seconds to read.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Monthly prompt drop</div>
              <div className="cm-card-desc">8-12 paste-and-run prompts targeting your next team pain. Could be: skeptical-staff talking points, board-deck prep, vendor evaluation, AI policy drafts.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Prompt validator</div>
              <div className="cm-card-desc">Paste any prompt you wrote — get a critique + rewrite within 24h. We tell you what's missing (context, constraints, examples, output format) and ship a better version back.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Personalized AI search tool</div>
              <div className="cm-card-desc">A private search interface seeded with your company context (stage, team, stack, regulated/not, primary AI tool). Ask any question — get answers calibrated to your reality, not generic.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Idea validator</div>
              <div className="cm-card-desc">Paste an idea ("should we mandate Claude Code?" / "do we ship an AI office hours?"). Get pushback, 3 alternatives, and the question you should have asked instead.</div>
            </div>
            <div className="cm-card">
              <div className="cm-card-title">Monthly competitive AI brief</div>
              <div className="cm-card-desc">1-page intel on what your top 3-5 competitors are doing with AI — product, pricing, hiring, internal rollouts (when publicly known). Where your moat is. Where they're ahead.</div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="cm-section" id="how-it-works">
          <h2>How it works</h2>
          <p>Three steps. No discovery call required, no sales process. Subscribe → onboarding survey → first drop within 7 days.</p>
          <div className="cm-steps">
            <div className="cm-step">
              <div className="cm-step-num">1</div>
              <div className="cm-step-title">Subscribe</div>
              <div className="cm-step-body">$199/mo via Stripe. Cancel anytime from your receipt link. Your card is on file but you can pause or cancel without contacting us.</div>
            </div>
            <div className="cm-step">
              <div className="cm-step-num">2</div>
              <div className="cm-step-title">Onboarding survey</div>
              <div className="cm-step-body">7 questions, ~4 min. Role, company stage, team composition, primary AI tool, regulated/not, current rollout milestone, biggest blocker. Tells us how to calibrate every drop.</div>
            </div>
            <div className="cm-step">
              <div className="cm-step-num">3</div>
              <div className="cm-step-title">First drop within 7 days</div>
              <div className="cm-step-body">You get your first weekly tip + your first monthly prompt drop in week 1. Competitive brief lands by end of month 1. From month 2 forward: predictable monthly cadence.</div>
            </div>
          </div>
        </div>

        {/* Sample outputs */}
        <div className="cm-section">
          <h2>What a real drop looks like</h2>
          <p>Two excerpts from drops we've shipped. Specifics swapped out for privacy.</p>

          <div className="cm-sample">
            <div className="cm-sample-label">Sample weekly tip — week 4 of rollout, VP People at 300-person B2B SaaS</div>
            <div className="cm-sample-title">The skeptical-staff conversation you keep avoiding</div>
            <div className="cm-sample-body">{`The single highest-leverage thing you can do in week 4 is have the 1:1 you've been avoiding with your most senior skeptic.

Don't pitch them on AI. Don't show them a demo. Ask them this question instead:

"What part of your job in 2027 do you NOT want AI involved in?"

Why this works:
1. It assumes their reality (AI is here, this is happening) without arguing the premise
2. It moves them from "AI shouldn't" to "AI shouldn't here, but here it's fine"
3. It gives YOU the data to draft an AI usage policy that actually represents your team's values, not just your own

Run this with your 3 most senior skeptics. Synthesize their answers. That synthesis IS the first draft of your AI usage policy.`}</div>
          </div>

          <div className="cm-sample">
            <div className="cm-sample-label">Sample competitive brief excerpt — Head of L&D at 800-person B2B fintech</div>
            <div className="cm-sample-title">Where your top 3 competitors are pulling ahead — and where they're not</div>
            <div className="cm-sample-body">{`Allvue (your closest comp) is hiring 4 ML engineers as of last week — job descriptions explicitly reference 'agentic CRM workflows.' Read between the lines: they're building Claude-style agentic features into the workflow layer, not just chatbot wrappers.

Anduin shipped 'Anduin AI Insights' two weeks ago (LP analyst-facing). Pricing not public yet but their messaging is around 'replace 60% of LP analyst hours' — that's the dollar-anchor frame they're using on procurement calls.

Where you're ahead:
Your training-and-adoption story is real. They have neither a public adoption playbook nor a champion program. The internal-rollout-as-moat thesis the CEO floated last quarter is correct — your moat is people-layer execution, not the tooling.

Recommend this week:
- 1 LinkedIn post from your CEO about your internal AI proficiency framework (steals their thunder before they publish theirs)
- Talking point in your sales decks: "We didn't just buy AI — we trained our 800-person team to use it" — true, defensible, hard to copy.`}</div>
          </div>
        </div>

        {/* Pricing */}
        <div className="cm-price-box">
          <div className="cm-price-big">$199<span style={{ fontSize: 20, color: 'var(--text-secondary)' }}>/mo</span></div>
          <div className="cm-price-per">~$50/week for a senior operator calibrating your team's AI rollout. Less than 1 hour of a consultant's time.</div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STRIPE_URL} className="cm-cta cm-cta-primary">Subscribe — $199/mo</a>
            <a href="/team-adoption-kit" className="cm-cta cm-cta-secondary">$49 one-off kit instead</a>
          </div>
        </div>

        {/* Guarantee */}
        <div className="cm-guarantee">
          <div className="cm-guarantee-title">First-drop guarantee</div>
          <div className="cm-guarantee-body">
            If your first drop (delivered within 7 days of subscribing) doesn't feel calibrated to your team and worth $199/mo,
            reply to the delivery email with "refund" — we'll refund the first month, no questions, and you keep the drop.
            We'd rather you tell us than ghost us.
          </div>
        </div>

        {/* Email Capture */}
        <div className="cm-lead">
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Not ready to subscribe? See a real drop first.</div>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Leave your email — we'll send you one full sample drop (weekly tip + 3 prompts + 1 brief excerpt) so you can judge before you buy.</div>
          {sent ? (
            <div style={{ marginTop: 12, color: 'var(--accent)', fontWeight: 700 }}>Check your inbox — sample drop on the way within 24h.</div>
          ) : (
            <form onSubmit={handleLead} className="cm-lead-form">
              <input className="cm-lead-input" type="email" placeholder="Your work email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="cm-lead-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send me a sample drop'}</button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="cm-faq">
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>FAQ</h2>
          {[
            { q: 'Who writes the drops?', a: 'Armando (founder) drafts every drop personally and uses our internal AI champion tooling to scale calibration. Not a generic content team. You can reply to any drop and reach Armando directly.' },
            { q: 'Can I cancel anytime?', a: 'Yes. Stripe receipt has a cancel link. No call required, no retention pitch. We do ask one optional question on cancellation so we can improve the product — totally skippable.' },
            { q: 'Is this for me if I run a consulting firm or coach solo?', a: 'No. The Mega Pack ($29) or Team Adoption Kit ($49) is a better fit. Champion is built for in-house operators rolling AI to an employed team.' },
            { q: 'What if my team is 5 people? 500?', a: 'Works for 50-1000 person B2B. Under 50: the Team Adoption Kit ($49) is enough. Over 1000: drop a line to Armando — enterprise calibration may need a custom engagement.' },
            { q: 'Do you sign NDAs / DPAs?', a: 'Yes — we are happy to sign your standard NDA before onboarding. We do not train AI models on your survey or prompt data. Reply to any drop to start the paperwork.' },
            { q: 'What\'s the difference between this and the AI Team Adoption Kit ($49)?', a: 'The $49 kit is a one-time download of 48 generic prompts + 4 frameworks + 5 onboarding guides. The $199/mo Champion is the personalized monthly cadence — every drop is calibrated to YOUR team, not a generic template.' },
            { q: 'How is the survey data used?', a: 'Survey answers are stored in our private database, used only to calibrate your drops. Not shared with vendors, not sold, not used for training. Email iam@armando.mx for deletion at any time.' },
          ].map((faq, i) => (
            <div className="cm-faq-item" key={i}>
              <div className="cm-faq-q">{faq.q}</div>
              <div className="cm-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>You've been told to "do AI." Now you're on the hook.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: 18 }}>
            Get a senior AI operator dropping calibrated drops into your inbox every month — for less than the cost of one consulting hour.
          </p>
          <a href={STRIPE_URL} className="cm-cta cm-cta-primary" style={{ fontSize: 18, padding: '18px 40px' }}>Subscribe to Champion — $199/mo</a>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 16 }}>
            Cancel anytime. First-drop refund guarantee. Questions: <a href="mailto:iam@armando.mx" style={{ color: 'var(--accent)' }}>iam@armando.mx</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
