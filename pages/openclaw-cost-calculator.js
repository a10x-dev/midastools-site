import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_STARTER = 'https://buy.stripe.com/7sI9CDbla7Cx7Bu3ck';
const STRIPE_BUNDLE = 'https://buy.stripe.com/00g5xY2WM04Ncyw9AH';

const MODELS = [
  { id: 'sonnet', name: 'Claude 3.5 Sonnet', inputPer1M: 3, outputPer1M: 15 },
  { id: 'opus', name: 'Claude Opus', inputPer1M: 15, outputPer1M: 75 },
  { id: 'haiku', name: 'Claude Haiku', inputPer1M: 0.25, outputPer1M: 1.25 },
  { id: 'gpt4o', name: 'GPT-4o', inputPer1M: 2.50, outputPer1M: 10 },
  { id: 'gpt4omini', name: 'GPT-4o-mini', inputPer1M: 0.15, outputPer1M: 0.60 },
];

const PLANS = [
  { id: 'pro', name: 'Claude Pro ($20/mo)', cost: 20 },
  { id: 'max200', name: 'Claude Max ($200/mo)', cost: 200 },
  { id: 'api', name: 'API Only (no subscription)', cost: 0 },
];

const PRESETS = [
  { id: 'hobby', name: 'Hobby Agent', sessions: 3, tokensPerSession: 50000, description: 'Light usage — a few check-ins per day' },
  { id: 'active', name: 'Active Agent', sessions: 8, tokensPerSession: 100000, description: 'Regular usage — checks in every 2-3 hours' },
  { id: 'felix', name: 'Felix-Level Agent', sessions: 12, tokensPerSession: 150000, description: 'Heavy usage — checks every 2 hours, multiple tools' },
  { id: 'always', name: 'Always-On Agent', sessions: 24, tokensPerSession: 200000, description: '24/7 agent running continuous loops' },
  { id: 'custom', name: 'Custom', sessions: 0, tokensPerSession: 0, description: 'Set your own numbers' },
];

function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function formatCurrencyPrecise(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(n);
}

export default function OpenClawCostCalculator() {
  const [model, setModel] = useState(MODELS[0]);
  const [plan, setPlan] = useState(PLANS[0]);
  const [preset, setPreset] = useState(PRESETS[1]);
  const [customSessions, setCustomSessions] = useState(8);
  const [customTokens, setCustomTokens] = useState(100000);
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [showResults, setShowResults] = useState(false);

  const sessions = preset.id === 'custom' ? customSessions : preset.sessions;
  const tokensPerSession = preset.id === 'custom' ? customTokens : preset.tokensPerSession;

  // Cost calculation (assuming 30% input, 70% output ratio typical for agents)
  const dailyTokens = sessions * tokensPerSession;
  const monthlyTokens = dailyTokens * 30;
  const inputTokens = monthlyTokens * 0.3;
  const outputTokens = monthlyTokens * 0.7;

  const apiCost = (inputTokens / 1000000 * model.inputPer1M) + (outputTokens / 1000000 * model.outputPer1M);
  const totalNewCost = apiCost + plan.cost;
  const oldCost = plan.cost || apiCost; // Before: subscription covered it

  const costIncrease = plan.cost > 0 ? apiCost : 0;
  const costMultiplier = plan.cost > 0 && plan.cost > 0 ? (totalNewCost / plan.cost) : 1;

  const revenue = monthlyRevenue ? parseFloat(monthlyRevenue) : 0;
  const roi = revenue > 0 && totalNewCost > 0 ? (revenue / totalNewCost).toFixed(0) : null;
  const revenuePerTokenDollar = revenue > 0 && apiCost > 0 ? (revenue / apiCost).toFixed(0) : null;

  // Multi-model savings estimate (use Haiku for 60% of tasks)
  const haikuModel = MODELS.find(m => m.id === 'haiku');
  const mixedApiCost = (inputTokens * 0.6 / 1000000 * haikuModel.inputPer1M) +
    (outputTokens * 0.6 / 1000000 * haikuModel.outputPer1M) +
    (inputTokens * 0.4 / 1000000 * model.inputPer1M) +
    (outputTokens * 0.4 / 1000000 * model.outputPer1M);

  const calculate = () => setShowResults(true);

  return (
    <Layout>
      <Head>
        <title>OpenClaw Cost Calculator 2026 — Estimate Your AI Agent Costs After Claude Pricing Change | Midas Tools</title>
        <meta name="description" content="Free OpenClaw cost calculator. See how the April 2026 Claude pricing change affects your AI agent. Compare models, estimate monthly costs, and find savings." />
        <meta property="og:title" content="OpenClaw Cost Calculator — After the Claude Pricing Change" />
        <meta property="og:description" content="See how much your OpenClaw agent will cost after Anthropic cut subscriptions. Free calculator with cost-saving tips." />
        <meta property="og:url" content="https://midastools.co/openclaw-cost-calculator" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://midastools.co/openclaw-cost-calculator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "OpenClaw Cost Calculator",
          "description": "Calculate your OpenClaw AI agent costs after the April 2026 Claude pricing change",
          "url": "https://midastools.co/openclaw-cost-calculator",
          "applicationCategory": "BusinessApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does OpenClaw cost per month after the Claude pricing change?", "acceptedAnswer": { "@type": "Answer", "text": "OpenClaw itself is free. After April 4, 2026, Claude API costs for agents range from $5-15/month for hobby usage to $500-1,000+/month for 24/7 agents, depending on model choice and session frequency." }},
            { "@type": "Question", "name": "What is the cheapest way to run OpenClaw in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Use multi-model routing: Claude Haiku for routine checks ($0.25/1M input tokens) and Sonnet only for complex decisions ($3/1M). This can reduce costs by 60-80% compared to using Sonnet for everything." }},
            { "@type": "Question", "name": "Can I still use my Claude subscription with OpenClaw?", "acceptedAnswer": { "@type": "Answer", "text": "No. Since April 4, 2026, Claude subscriptions no longer cover OpenClaw usage. You need to use API billing (pay-as-you-go) separately from your subscription." }}
          ]
        })}} />
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Inter, -apple-system, sans-serif', color: '#111827' }}>
        <Link href="/tools" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>← All tools</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          OpenClaw Cost Calculator
        </h1>
        <p style={{ color: '#6B7280', fontSize: '15px', marginBottom: '8px' }}>
          See how the April 2026 Claude pricing change affects your AI agent costs.
        </p>
        <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '32px' }}>
          Free · No signup · Updated April 8, 2026
        </p>

        <div style={{ background: '#FEF3C7', border: '1px solid #F59E0B', borderRadius: '8px', padding: '16px', marginBottom: '32px', fontSize: '14px' }}>
          <strong>April 4, 2026:</strong> Anthropic removed OpenClaw from Claude subscriptions. Your agent now needs separate API billing.{' '}
          <Link href="/blog/claude-openclaw-pricing-change-2026" style={{ color: '#3B5FFF' }}>Read the full analysis →</Link>
        </div>

        {/* Step 1: Model */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>1. Which model does your agent use?</h2>
          <div style={{ display: 'grid', gap: '8px' }}>
            {MODELS.map(m => (
              <button
                key={m.id}
                onClick={() => { setModel(m); setShowResults(false); }}
                style={{
                  padding: '12px 16px',
                  border: model.id === m.id ? '2px solid #3B5FFF' : '1px solid #E5E7EB',
                  borderRadius: '8px',
                  background: model.id === m.id ? '#EEF2FF' : '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                <strong>{m.name}</strong>
                <span style={{ color: '#6B7280', marginLeft: '12px' }}>
                  ${m.inputPer1M}/1M input · ${m.outputPer1M}/1M output
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Plan */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>2. Your Claude subscription (before the change)</h2>
          <div style={{ display: 'grid', gap: '8px' }}>
            {PLANS.map(p => (
              <button
                key={p.id}
                onClick={() => { setPlan(p); setShowResults(false); }}
                style={{
                  padding: '12px 16px',
                  border: plan.id === p.id ? '2px solid #3B5FFF' : '1px solid #E5E7EB',
                  borderRadius: '8px',
                  background: plan.id === p.id ? '#EEF2FF' : '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Usage */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>3. How does your agent run?</h2>
          <div style={{ display: 'grid', gap: '8px' }}>
            {PRESETS.map(p => (
              <button
                key={p.id}
                onClick={() => { setPreset(p); setShowResults(false); }}
                style={{
                  padding: '12px 16px',
                  border: preset.id === p.id ? '2px solid #3B5FFF' : '1px solid #E5E7EB',
                  borderRadius: '8px',
                  background: preset.id === p.id ? '#EEF2FF' : '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              >
                <strong>{p.name}</strong>
                {p.id !== 'custom' && (
                  <span style={{ color: '#6B7280', marginLeft: '8px' }}>
                    {p.sessions} sessions/day · {(p.tokensPerSession / 1000).toFixed(0)}K tokens each
                  </span>
                )}
                <br />
                <span style={{ color: '#9CA3AF', fontSize: '13px' }}>{p.description}</span>
              </button>
            ))}
          </div>

          {preset.id === 'custom' && (
            <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '13px', color: '#6B7280', display: 'block', marginBottom: '4px' }}>Sessions per day</label>
                <input
                  type="number"
                  value={customSessions}
                  onChange={e => { setCustomSessions(parseInt(e.target.value) || 0); setShowResults(false); }}
                  style={{ width: '100%', padding: '10px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '15px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#6B7280', display: 'block', marginBottom: '4px' }}>Tokens per session</label>
                <input
                  type="number"
                  value={customTokens}
                  onChange={e => { setCustomTokens(parseInt(e.target.value) || 0); setShowResults(false); }}
                  step={10000}
                  style={{ width: '100%', padding: '10px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '15px' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Step 4: Revenue (optional) */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>4. Monthly revenue from your agent (optional)</h2>
          <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '8px' }}>If your agent generates revenue, we'll calculate your ROI</p>
          <input
            type="number"
            value={monthlyRevenue}
            onChange={e => { setMonthlyRevenue(e.target.value); setShowResults(false); }}
            placeholder="e.g. 5000"
            style={{ width: '100%', maxWidth: '200px', padding: '10px', border: '1px solid #E5E7EB', borderRadius: '6px', fontSize: '15px' }}
          />
        </div>

        {/* Calculate */}
        <button
          onClick={calculate}
          style={{
            width: '100%',
            padding: '16px',
            background: '#3B5FFF',
            color: '#fff',
            border: 'none',
            borderRadius: '999px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            marginBottom: '32px',
          }}
        >
          Calculate My Costs →
        </button>

        {/* Results */}
        {showResults && (
          <div id="results">
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px' }}>Your OpenClaw Cost Breakdown</h2>

            {/* Before vs After */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Before April 4</p>
                <p style={{ fontSize: '2rem', fontWeight: '800', margin: '0', color: '#10B981' }}>{formatCurrency(oldCost)}</p>
                <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '4px 0 0' }}>/month</p>
              </div>
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>After April 4</p>
                <p style={{ fontSize: '2rem', fontWeight: '800', margin: '0', color: '#EF4444' }}>{formatCurrency(totalNewCost)}</p>
                <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '4px 0 0' }}>/month ({plan.cost > 0 ? `${costMultiplier.toFixed(1)}x increase` : 'API only'})</p>
              </div>
            </div>

            {/* Details */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: 0, marginBottom: '12px' }}>Cost Breakdown</h3>
              <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '8px 0', color: '#6B7280' }}>Daily tokens</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: '600' }}>{(dailyTokens / 1000).toFixed(0)}K</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '8px 0', color: '#6B7280' }}>Monthly tokens</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: '600' }}>{(monthlyTokens / 1000000).toFixed(1)}M</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '8px 0', color: '#6B7280' }}>API cost ({model.name})</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: '600' }}>{formatCurrencyPrecise(apiCost)}/mo</td>
                  </tr>
                  {plan.cost > 0 && (
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '8px 0', color: '#6B7280' }}>Subscription (kept)</td>
                      <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: '600' }}>{formatCurrency(plan.cost)}/mo</td>
                    </tr>
                  )}
                  <tr>
                    <td style={{ padding: '8px 0', fontWeight: '700' }}>New total</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: '800', color: '#EF4444' }}>{formatCurrencyPrecise(totalNewCost)}/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ROI section */}
            {revenue > 0 && (
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '12px', padding: '20px', marginBottom: '24px', textAlign: 'center' }}>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 4px' }}>Your Agent's ROI</p>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0', color: '#10B981' }}>{roi}x</p>
                <p style={{ color: '#6B7280', fontSize: '14px', margin: '8px 0 0' }}>
                  {formatCurrency(revenue)} revenue / {formatCurrencyPrecise(totalNewCost)} cost
                </p>
                {parseInt(roi) >= 10 && (
                  <p style={{ color: '#10B981', fontSize: '14px', fontWeight: '600', margin: '8px 0 0' }}>
                    Your agent is highly profitable — the pricing change barely matters.
                  </p>
                )}
              </div>
            )}

            {/* Savings tip */}
            <div style={{ background: '#EEF2FF', border: '2px solid #3B5FFF', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px', color: '#3B5FFF' }}>Save with Multi-Model Routing</h3>
              <p style={{ fontSize: '14px', margin: '0 0 8px', color: '#4B5563' }}>
                Use Haiku for 60% of routine tasks, {model.name} for complex decisions:
              </p>
              <p style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0', color: '#3B5FFF' }}>
                {formatCurrencyPrecise(mixedApiCost)}/mo
                <span style={{ fontSize: '14px', fontWeight: '400', color: '#6B7280', marginLeft: '8px' }}>
                  (save {Math.round((1 - mixedApiCost / apiCost) * 100)}% on API costs)
                </span>
              </p>
            </div>

            {/* Felix comparison */}
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 8px' }}>How does Felix Craft compare?</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                Felix runs ~12 sessions/day and generates <strong>$300K/month</strong> on ~$1,500/month costs.
                That's a <strong>200x ROI</strong> — the pricing change barely dents it.{' '}
                <Link href="/blog/felix-craft-story" style={{ color: '#3B5FFF' }}>Read the full case study →</Link>
              </p>
            </div>

            {/* CTA */}
            <div style={{ background: '#111827', borderRadius: '12px', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
              <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px' }}>Build a Profitable Agent (Even After the Price Hike)</p>
              <p style={{ color: '#9CA3AF', margin: '0 0 16px', fontSize: '14px' }}>Revenue-focused SOUL.md templates, heartbeat configs, and cost optimization guides.</p>
              <a href={STRIPE_STARTER} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', marginRight: '8px' }}>
                Starter Kit — $29
              </a>
              <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: 'transparent', color: '#fff', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '14px', border: '1px solid #4B5563' }}>
                All 16 Kits — $97
              </a>
            </div>

            <p style={{ textAlign: 'center', fontSize: '13px', color: '#9CA3AF' }}>
              <Link href="/blog/claude-openclaw-pricing-change-2026" style={{ color: '#3B5FFF' }}>Full pricing analysis →</Link>
              {' · '}
              <Link href="/soul-generator" style={{ color: '#3B5FFF' }}>Free SOUL.md Generator →</Link>
              {' · '}
              <Link href="/tools" style={{ color: '#6B7280' }}>All free tools →</Link>
            </p>
          </div>
        )}

        {/* SEO content */}
        {!showResults && (
          <div style={{ marginTop: '40px', borderTop: '1px solid #E5E7EB', paddingTop: '32px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>About the Claude/OpenClaw Pricing Change</h2>
            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.7' }}>
              On April 4, 2026, Anthropic announced that Claude subscriptions no longer cover OpenClaw usage. This means AI agents running on OpenClaw now need separate API billing, potentially increasing costs by 5-50x depending on usage patterns.
            </p>
            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.7' }}>
              This calculator helps you estimate your new monthly costs, compare models, and find savings through multi-model routing. For a complete analysis, read our{' '}
              <Link href="/blog/claude-openclaw-pricing-change-2026" style={{ color: '#3B5FFF' }}>full breakdown of the pricing change</Link>.
            </p>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginTop: '24px' }}>Key facts:</h3>
            <ul style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8' }}>
              <li>OpenClaw is free — you only pay for LLM API usage</li>
              <li>Claude Haiku is 12-60x cheaper than Sonnet/Opus for routine tasks</li>
              <li>Multi-model routing can save 60-80% on agent costs</li>
              <li>Anthropic transition credit available until April 17, 2026</li>
              <li>Felix Craft generates $200 revenue per $1 of LLM cost</li>
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}
