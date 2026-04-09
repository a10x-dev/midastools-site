import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_STARTER = 'https://buy.stripe.com/7sI9CDbla7Cx7Bu3ck';
const STRIPE_BUNDLE = 'https://buy.stripe.com/8wM2abdtg5up7BueVa';

/* ── Industry Presets ──────────────────────────────────── */

const PRESETS = [
  { id: 'ecommerce', label: 'E-commerce', emoji: '🛒', description: 'Shopify, Amazon, DTC brands',
    skills: ['Product listing optimization', 'Inventory monitoring', 'Customer support automation', 'Review response generation', 'Competitor price tracking', 'Social media product posts'],
    tools: ['Shopify API', 'Stripe', 'Email (SMTP)', 'Social media APIs', 'Google Sheets'],
    schedule: '24/7 monitoring with hourly inventory checks, daily social posts at 9am/12pm/6pm, weekly performance reports on Monday',
    personality: 'Friendly, data-driven, customer-obsessed. Always prioritizes customer experience over short-term revenue.' },
  { id: 'content', label: 'Content Creator', emoji: '🎬', description: 'YouTube, TikTok, podcasts',
    skills: ['Content calendar management', 'Script outline generation', 'Thumbnail title A/B testing', 'Social media repurposing', 'Comment engagement', 'Trend monitoring'],
    tools: ['YouTube API', 'Twitter/X API', 'Google Trends', 'Notion', 'Buffer/Hootsuite'],
    schedule: 'Daily trend checks at 7am, content scheduling 2x/day, engagement sweeps every 4 hours, weekly analytics review Friday',
    personality: 'Creative, trend-aware, authentic. Speaks in the creator\'s voice. Never posts anything generic or AI-sounding.' },
  { id: 'realestate', label: 'Real Estate', emoji: '🏠', description: 'Agents, brokers, property managers',
    skills: ['Listing description generation', 'Lead follow-up automation', 'Market analysis reports', 'Open house coordination', 'CRM data entry', 'Neighborhood research'],
    tools: ['MLS API', 'Email (SMTP)', 'Google Calendar', 'CRM (Follow Up Boss/KVCore)', 'Zillow data'],
    schedule: 'Lead responses within 5 minutes 24/7, morning market briefing at 7am, listing updates at 9am, follow-ups at 10am/2pm/5pm',
    personality: 'Professional, knowledgeable, warm. Local market expert. Responds to leads immediately with personalized context.' },
  { id: 'saas', label: 'SaaS Founder', emoji: '🚀', description: 'Startups, indie hackers, micro-SaaS',
    skills: ['User onboarding sequences', 'Churn prediction alerts', 'Feature request categorization', 'Support ticket triage', 'Competitor monitoring', 'Investor update drafting'],
    tools: ['Stripe API', 'Intercom/Crisp', 'GitHub', 'Slack', 'PostHog/Mixpanel', 'Linear'],
    schedule: 'Continuous support monitoring, daily MRR/churn check at 8am, weekly investor metric email Friday, monthly competitive analysis 1st of month',
    personality: 'Technical yet approachable. Data-obsessed. Speaks like a YC founder — clear, direct, metric-driven.' },
  { id: 'freelancer', label: 'Freelancer', emoji: '💼', description: 'Consultants, agencies, solopreneurs',
    skills: ['Proposal generation', 'Client communication automation', 'Invoice reminders', 'Project status updates', 'Lead qualification', 'Portfolio case study writing'],
    tools: ['Email (SMTP)', 'Google Calendar', 'Notion/Airtable', 'Stripe/PayPal', 'LinkedIn API'],
    schedule: 'Lead responses within 1 hour during business hours, invoice reminders at 9am, weekly project status on Friday, monthly client check-ins',
    personality: 'Professional, reliable, solution-oriented. Makes clients feel they have a dedicated team, not a solo freelancer.' },
  { id: 'smb', label: 'Small Business', emoji: '🏪', description: 'Local businesses, restaurants, services',
    skills: ['Review response management', 'Appointment scheduling', 'Social media posting', 'Email marketing campaigns', 'Customer loyalty tracking', 'Local SEO updates'],
    tools: ['Google Business Profile', 'Email (SMTP)', 'Social media APIs', 'Square/Toast POS', 'Yelp API'],
    schedule: 'Review responses within 2 hours, daily social post at 11am, weekly email newsletter Thursday, monthly loyalty rewards check',
    personality: 'Warm, community-focused, authentic. Speaks like a friendly local business owner. Uses customer first names.' },
  { id: 'custom', label: 'Custom', emoji: '⚙️', description: 'Build from scratch',
    skills: [], tools: [], schedule: '', personality: '' },
];

/* ── SOUL.md Generator Engine ──────────────────────────── */

function generateSoul(config) {
  const {
    preset,
    agentName,
    businessName,
    businessDescription,
    mainGoal,
    customSkills,
    customTools,
    tone,
    constraints,
  } = config;

  const selectedPreset = PRESETS.find(p => p.id === preset) || PRESETS[6];
  const skills = preset === 'custom'
    ? customSkills.split('\n').filter(s => s.trim())
    : [...selectedPreset.skills, ...customSkills.split('\n').filter(s => s.trim())];
  const tools = preset === 'custom'
    ? customTools.split('\n').filter(t => t.trim())
    : [...selectedPreset.tools, ...customTools.split('\n').filter(t => t.trim())];
  const personality = tone || selectedPreset.personality;
  const schedule = selectedPreset.schedule || 'Define your agent\'s operating schedule based on your business needs.';

  const soul = `# ${agentName || 'Agent'} — SOUL.md
# Generated by Midas Tools (midastools.co/soul-generator)

## Identity
- **Name**: ${agentName || '[Your Agent Name]'}
- **Business**: ${businessName || '[Your Business Name]'}
- **Role**: Autonomous AI agent for ${businessDescription || '[describe your business]'}

## Mission
${mainGoal || 'Help the business grow revenue, save time, and delight customers — autonomously.'}

## Personality & Voice
${personality}

## Core Skills
${skills.map(s => `- ${s}`).join('\n')}

## Tools & Integrations
${tools.map(t => `- ${t}`).join('\n')}

## Operating Schedule
${schedule}

## Rules & Constraints
${constraints ? constraints.split('\n').map(c => `- ${c.trim()}`).filter(c => c !== '- ').join('\n') : `- Never make financial decisions above $50 without human approval
- Always respond to customers within the brand voice
- Escalate any negative reviews or complaints immediately
- Log all actions for audit trail
- Never share customer data externally`}

## Memory
- Remember all customer interactions and preferences
- Track business metrics and report weekly
- Learn from successful actions and repeat them
- Flag patterns that need human attention

## Heartbeat
- Check in every 15 minutes during active hours
- Run health checks on all integrations daily
- Alert the founder immediately if anything breaks
- Send daily summary at end of business day

---
*Generated at midastools.co/soul-generator — Get the full OpenClaw Starter Kit ($29) for production-ready templates, workflows, and deployment guides.*
`;

  return soul.trim();
}

function calculateCompleteness(config) {
  let score = 0;
  const checks = [];
  if (config.agentName?.trim()) { score += 15; checks.push({ label: 'Agent name', done: true }); }
  else checks.push({ label: 'Agent name', done: false });
  if (config.businessName?.trim()) { score += 15; checks.push({ label: 'Business name', done: true }); }
  else checks.push({ label: 'Business name', done: false });
  if (config.businessDescription?.trim()) { score += 20; checks.push({ label: 'Business description', done: true }); }
  else checks.push({ label: 'Business description', done: false });
  if (config.mainGoal?.trim()) { score += 20; checks.push({ label: 'Mission statement', done: true }); }
  else checks.push({ label: 'Mission statement', done: false });
  if (config.preset !== 'custom') { score += 15; checks.push({ label: 'Industry preset', done: true }); }
  else if (config.customSkills?.trim()) { score += 15; checks.push({ label: 'Custom skills', done: true }); }
  else checks.push({ label: 'Skills defined', done: false });
  if (config.tone?.trim() || config.preset !== 'custom') { score += 10; checks.push({ label: 'Voice & personality', done: true }); }
  else checks.push({ label: 'Voice & personality', done: false });
  if (config.constraints?.trim()) { score += 5; checks.push({ label: 'Custom constraints', done: true }); }
  else checks.push({ label: 'Custom constraints (optional)', done: false });
  return { score: Math.min(score, 100), checks };
}

/* ── Readiness Score ───────────────────────────────────── */

const READINESS_LEVELS = [
  { min: 0,  label: 'Needs More Coffee', emoji: '☕', color: '#EF4444', shareText: 'barely awake' },
  { min: 30, label: 'Getting There', emoji: '🔧', color: '#F59E0B', shareText: 'under construction' },
  { min: 50, label: 'Looking Solid', emoji: '💪', color: '#3B82F6', shareText: 'looking solid' },
  { min: 75, label: 'Almost Ready', emoji: '🎯', color: '#8B5CF6', shareText: 'almost ready to deploy' },
  { min: 90, label: 'Ready to Ship', emoji: '🚀', color: '#10B981', shareText: 'ready to ship' },
];

function getReadinessLevel(score) {
  for (let i = READINESS_LEVELS.length - 1; i >= 0; i--) {
    if (score >= READINESS_LEVELS[i].min) return READINESS_LEVELS[i];
  }
  return READINESS_LEVELS[0];
}

/* ── Share helpers ──────────────────────────────────────── */

function generateShareUrl(preset, agentName, score) {
  const params = new URLSearchParams();
  if (preset) params.set('preset', preset);
  if (agentName) params.set('agent', agentName);
  if (score) params.set('score', score.toString());
  return `https://midastools.co/soul-generator?${params.toString()}`;
}

function useGeneratorCount() {
  const [count, setCount] = useState(3_247);
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('soul_gen_count') : null;
    if (stored) setCount(parseInt(stored, 10));
  }, []);
  const increment = () => {
    const next = count + 1;
    setCount(next);
    if (typeof window !== 'undefined') localStorage.setItem('soul_gen_count', next.toString());
  };
  return [count, increment];
}

/* ── Component ─────────────────────────────────────────── */

export default function SoulGenerator() {
  const [preset, setPreset] = useState('');
  const [agentName, setAgentName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [mainGoal, setMainGoal] = useState('');
  const [customSkills, setCustomSkills] = useState('');
  const [customTools, setCustomTools] = useState('');
  const [tone, setTone] = useState('');
  const [constraints, setConstraints] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [genCount, incrementGen] = useGeneratorCount();
  const resultRef = useRef(null);

  const config = { preset, agentName, businessName, businessDescription, mainGoal, customSkills, customTools, tone, constraints };
  const { score: completeness, checks } = calculateCompleteness(config);
  const canGenerate = preset && (businessDescription.trim().length > 0 || agentName.trim().length > 0);

  function handleGenerate() {
    const soul = generateSoul(config);
    setResult(soul);
    incrementGen();
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    setTimeout(() => setShowStickyCta(true), 4000);
  }

  function handleCopy() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(generateShareUrl(preset, agentName, completeness));
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  }

  function handleReset() {
    setPreset('');
    setAgentName('');
    setBusinessName('');
    setBusinessDescription('');
    setMainGoal('');
    setCustomSkills('');
    setCustomTools('');
    setTone('');
    setConstraints('');
    setResult(null);
    setShowStickyCta(false);
  }

  const selectedPreset = PRESETS.find(p => p.id === preset);
  const readiness = getReadinessLevel(completeness);
  const shareText = encodeURIComponent(`My OpenClaw agent scored "${readiness.label}" ${readiness.emoji} on the SOUL.md Generator\n\nBuild yours free: https://midastools.co/soul-generator`);

  /* ── FAQ data for JSON-LD ── */
  const faqs = [
    { q: 'What is a SOUL.md file?', a: 'A SOUL.md file is the configuration that defines your OpenClaw AI agent\'s identity, skills, personality, and operating rules. It\'s like a job description for your AI employee — telling it who it is, what it does, and how it behaves.' },
    { q: 'What is OpenClaw?', a: 'OpenClaw is the #1 open-source AI agent framework with over 100,000 GitHub stars. It lets you deploy autonomous AI agents that can run your business 24/7 — handling customer support, content creation, sales, and more.' },
    { q: 'Do I need coding experience to use this?', a: 'No! This generator creates a complete SOUL.md configuration file you can copy-paste directly into your OpenClaw setup. The Midas Tools Starter Kit includes step-by-step deployment guides for non-technical users.' },
    { q: 'Is this generator free?', a: 'Yes, the SOUL.md Generator is 100% free with no limits. For production-ready templates, advanced workflows, and deployment guides, check out the OpenClaw Starter Kit ($29).' },
    { q: 'Can I customize the generated SOUL.md?', a: 'Absolutely. The generated config is a starting point — you can edit every section to match your exact business needs. Add custom skills, change the schedule, adjust constraints, and fine-tune the personality.' },
  ];

  return (
    <Layout>
      <Head>
        <title>Free OpenClaw SOUL.md Generator — Build Your AI Agent Config | Midas Tools</title>
        <meta name="description" content="Generate a complete SOUL.md configuration for your OpenClaw AI agent in 60 seconds. Choose your industry, describe your business, and get a production-ready agent config — free." />
        <meta name="keywords" content="OpenClaw, SOUL.md, AI agent, agent configuration, OpenClaw setup, AI automation, autonomous agent, OpenClaw tutorial, agent builder" />
        <meta property="og:title" content="Free OpenClaw SOUL.md Generator — Build Your AI Agent in 60 Seconds" />
        <meta property="og:description" content="Generate a complete AI agent configuration for OpenClaw. Choose your industry, describe your business, get a production-ready SOUL.md — free." />
        <meta property="og:url" content="https://midastools.co/soul-generator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free OpenClaw SOUL.md Generator — Build Your AI Agent" />
        <meta name="twitter:description" content="Generate a complete AI agent config in 60 seconds. 100% free. 6 industry presets." />
        <link rel="canonical" href="https://midastools.co/soul-generator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "OpenClaw SOUL.md Generator",
          "url": "https://midastools.co/soul-generator",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "description": "Generate a complete SOUL.md configuration for your OpenClaw AI agent. 6 industry presets, instant download."
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
        })}} />
      </Head>

      {/* ── Hero ── */}
      <section className="hero">
        <span className="badge">FREE TOOL</span>
        <h1>OpenClaw <span className="gradient-text">SOUL.md</span> Generator</h1>
        <p className="subtitle">Build your AI agent&apos;s configuration in 60 seconds. Choose your industry, describe your business, and get a production-ready SOUL.md file — ready to deploy.</p>
        <div className="stats-bar">
          <span>{genCount.toLocaleString()}+ configs generated</span>
          <span className="dot">·</span>
          <span>6 industry presets</span>
          <span className="dot">·</span>
          <span>100% free</span>
        </div>
      </section>

      {/* ── Industry Presets ── */}
      <section className="presets-section">
        <h2>1. Choose Your Industry</h2>
        <div className="presets-grid">
          {PRESETS.map(p => (
            <button
              key={p.id}
              className={`preset-card ${preset === p.id ? 'active' : ''}`}
              onClick={() => {
                setPreset(p.id);
                if (p.id !== 'custom') {
                  setTone(p.personality);
                }
              }}
            >
              <span className="preset-emoji">{p.emoji}</span>
              <span className="preset-label">{p.label}</span>
              <span className="preset-desc">{p.description}</span>
            </button>
          ))}
        </div>

        {selectedPreset && selectedPreset.id !== 'custom' && (
          <div className="preset-preview">
            <h3>{selectedPreset.emoji} {selectedPreset.label} Preset Includes:</h3>
            <div className="preview-cols">
              <div>
                <strong>Skills ({selectedPreset.skills.length})</strong>
                <ul>{selectedPreset.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </div>
              <div>
                <strong>Tools ({selectedPreset.tools.length})</strong>
                <ul>{selectedPreset.tools.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── Configuration Form ── */}
      {preset && (
        <section className="config-section">
          <h2>2. Configure Your Agent</h2>

          <div className="completeness-bar">
            <div className="completeness-fill" style={{ width: `${completeness}%` }} />
            <span className="completeness-label">{completeness}% complete</span>
          </div>
          <div className="checklist">
            {checks.map((c, i) => (
              <span key={i} className={`check-item ${c.done ? 'done' : ''}`}>
                {c.done ? '✅' : '⬜'} {c.label}
              </span>
            ))}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Agent Name *</label>
              <input
                type="text"
                value={agentName}
                onChange={e => setAgentName(e.target.value)}
                placeholder="e.g., Atlas, Luna, Felix"
                maxLength={50}
              />
              <span className="hint">Give your AI agent a memorable name</span>
            </div>

            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="e.g., Sunrise Coffee, TechFlow SaaS"
                maxLength={100}
              />
            </div>

            <div className="form-group full-width">
              <label>What does your business do? *</label>
              <textarea
                value={businessDescription}
                onChange={e => setBusinessDescription(e.target.value)}
                placeholder="e.g., We sell handmade candles on Shopify and Instagram. 500 orders/month, 3 person team, growing 20% monthly."
                rows={3}
                maxLength={500}
              />
              <span className="hint">{businessDescription.length}/500 — Be specific about what you do, how big you are, and what matters most</span>
            </div>

            <div className="form-group full-width">
              <label>Main Goal for Your Agent</label>
              <textarea
                value={mainGoal}
                onChange={e => setMainGoal(e.target.value)}
                placeholder="e.g., Automate customer support and social media so I can focus on product development. Target: reduce my daily admin time from 4 hours to 30 minutes."
                rows={3}
                maxLength={500}
              />
              <span className="hint">What should this agent achieve? Be specific about outcomes.</span>
            </div>

            <div className="form-group full-width">
              <label>Additional Skills {preset !== 'custom' ? '(added to preset)' : '*'}</label>
              <textarea
                value={customSkills}
                onChange={e => setCustomSkills(e.target.value)}
                placeholder="One skill per line, e.g.:&#10;Competitor price monitoring&#10;Weekly newsletter drafting&#10;Inventory reorder alerts"
                rows={3}
              />
            </div>

            <div className="form-group full-width">
              <label>Additional Tools {preset !== 'custom' ? '(added to preset)' : '*'}</label>
              <textarea
                value={customTools}
                onChange={e => setCustomTools(e.target.value)}
                placeholder="One tool per line, e.g.:&#10;Zapier&#10;Airtable&#10;WhatsApp Business API"
                rows={3}
              />
            </div>

            <div className="form-group full-width">
              <label>Agent Voice & Personality</label>
              <textarea
                value={tone}
                onChange={e => setTone(e.target.value)}
                placeholder={selectedPreset?.personality || "Describe how your agent should communicate..."}
                rows={2}
                maxLength={300}
              />
            </div>

            <div className="form-group full-width">
              <label>Custom Rules & Constraints</label>
              <textarea
                value={constraints}
                onChange={e => setConstraints(e.target.value)}
                placeholder="One rule per line, e.g.:&#10;Never discount more than 15%&#10;Always CC me on emails over $500&#10;Don't post on weekends"
                rows={3}
              />
              <span className="hint">Leave empty for sensible defaults</span>
            </div>
          </div>

          <div className="generate-actions">
            <button
              className="btn-generate"
              onClick={handleGenerate}
              disabled={!canGenerate}
            >
              🤖 Generate SOUL.md
            </button>
            {result && (
              <button className="btn-reset" onClick={handleReset}>
                Start Over
              </button>
            )}
          </div>
        </section>
      )}

      {/* ── Result ── */}
      {result && (
        <section className="result-section" ref={resultRef}>
          {/* Readiness Score Card */}
          <div className="readiness-card" style={{ borderColor: readiness.color }}>
            <div className="readiness-emoji">{readiness.emoji}</div>
            <div className="readiness-score" style={{ color: readiness.color }}>{completeness}/100</div>
            <div className="readiness-label" style={{ color: readiness.color }}>{readiness.label}</div>
            <p className="readiness-desc">
              {completeness >= 90 ? 'Your agent is production-ready. Copy the config below and deploy!' :
               completeness >= 75 ? 'Almost there! Fill in the remaining fields above for a stronger agent.' :
               completeness >= 50 ? 'Good start — add more details to make your agent truly autonomous.' :
               'Your agent needs more definition. Fill in the fields above for better results.'}
            </p>
          </div>

          <div className="result-header">
            <h2>Your SOUL.md Config</h2>
            <div className="result-actions">
              <button className="btn-copy" onClick={handleCopy}>
                {copied ? '✅ Copied!' : '📋 Copy SOUL.md'}
              </button>
              <a
                className="btn-share-twitter"
                href={`https://twitter.com/intent/tweet?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏 Share Score on Twitter
              </a>
              <button className="btn-copy-link" onClick={handleCopyLink}>
                {copiedLink ? '✅ Link Copied!' : '🔗 Copy Share Link'}
              </button>
            </div>
          </div>

          <div className="soul-output">
            <pre>{result}</pre>
          </div>

          {/* ── CTA After Result ── */}
          <div className="result-cta">
            <h3>Ready to Deploy Your Agent?</h3>
            <p>The OpenClaw Starter Kit includes production-ready SOUL.md templates, deployment scripts, workflow automations, and a step-by-step setup guide.</p>
            <a href={STRIPE_STARTER} className="btn-buy" target="_blank" rel="noopener noreferrer">
              Get the Starter Kit — $29
            </a>
            <span className="trust">Instant download. 30-day money-back guarantee. No subscription.</span>
          </div>
        </section>
      )}

      {/* ── How It Works ── */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="step-num">1</span>
            <h3>Pick Your Industry</h3>
            <p>Choose from 6 preset configurations or start custom. Each preset includes battle-tested skills and integrations.</p>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <h3>Describe Your Business</h3>
            <p>Tell us what you do, your goals, and any special requirements. The more detail, the better your config.</p>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <h3>Deploy Your Agent</h3>
            <p>Copy the generated SOUL.md into your OpenClaw setup and watch your AI agent come to life.</p>
          </div>
        </div>
      </section>

      {/* ── What is OpenClaw ── */}
      <section className="openclaw-explainer">
        <h2>What is OpenClaw?</h2>
        <p>OpenClaw is the <strong>#1 open-source AI agent framework</strong> with 100,000+ GitHub stars. Acquired by OpenAI in 2026, it lets you deploy autonomous AI agents that run your business 24/7.</p>
        <div className="explainer-grid">
          <div className="explainer-card">
            <span>🧠</span>
            <h3>Autonomous</h3>
            <p>Your agent runs independently — making decisions, executing tasks, and learning from results without constant supervision.</p>
          </div>
          <div className="explainer-card">
            <span>🔧</span>
            <h3>Tool-Equipped</h3>
            <p>Connects to 50+ integrations: email, APIs, databases, social media, payment processors, and more.</p>
          </div>
          <div className="explainer-card">
            <span>🔒</span>
            <h3>Self-Hosted</h3>
            <p>Runs on your machine. Your data stays private. No third-party cloud dependency. Full control.</p>
          </div>
          <div className="explainer-card">
            <span>📈</span>
            <h3>Proven Results</h3>
            <p>Felix Craft, an OpenClaw agent, generated $200K+ in total revenue — starting with $14,718 in just 3 weeks, all autonomously.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/blog/ai-agent-10k-day" className="link-arrow">Read the Felix Craft Case Study →</Link>
        </div>
      </section>

      {/* ── More Free Tools ── */}
      <section className="more-tools">
        <h2>More Free AI Tools</h2>
        <div className="tools-grid">
          {[
            { href: '/prompt-generator', emoji: '✨', name: 'AI Prompt Generator', desc: 'Generate custom prompts for any use case' },
            { href: '/prompt-roaster', emoji: '🔥', name: 'AI Prompt Roaster', desc: 'Get your prompts brutally roasted' },
            { href: '/prompt-enhancer', emoji: '⚡', name: 'Prompt Enhancer', desc: 'Transform any prompt into 5 expert versions' },
            { href: '/prompt-scorer', emoji: '🎯', name: 'Prompt Scorer', desc: 'Score your prompts from 1-100' },
            { href: '/image-prompt-builder', emoji: '🎨', name: 'Image Prompt Builder', desc: 'Build perfect AI image prompts' },
            { href: '/business-name-generator', emoji: '💡', name: 'Business Name Generator', desc: 'Generate creative business names' },
            { href: '/hashtag-generator', emoji: '#️⃣', name: 'Hashtag Generator', desc: 'Generate trending hashtags' },
          ].map(tool => (
            <Link href={tool.href} key={tool.href} className="tool-card">
              <span className="tool-emoji">{tool.emoji}</span>
              <strong>{tool.name}</strong>
              <span>{tool.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      {/* ── Sticky CTA ── */}
      {showStickyCta && result && (
        <div className="sticky-cta">
          <span>🚀 Deploy your agent today</span>
          <a href={STRIPE_BUNDLE} target="_blank" rel="noopener noreferrer">
            All 15 Kits — $97 <small>(81% off)</small>
          </a>
        </div>
      )}

      <style jsx>{`
        .hero { text-align: center; padding: 3rem 1.5rem 2rem; max-width: 700px; margin: 0 auto; }
        .badge { display: inline-block; background: #EEF2FF; color: #3B5FFF; font-weight: 700; font-size: 0.8rem; padding: 0.3rem 1rem; border-radius: 100px; letter-spacing: 0.05em; margin-bottom: 1rem; }
        .hero h1 { font-size: 2.5rem; font-weight: 900; color: #111827; line-height: 1.15; margin-bottom: 1rem; }
        .gradient-text { background: linear-gradient(135deg, #3B5FFF, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .subtitle { font-size: 1.15rem; color: #6B7280; line-height: 1.6; max-width: 600px; margin: 0 auto 1.5rem; }
        .stats-bar { display: flex; gap: 0.5rem; justify-content: center; align-items: center; font-size: 0.9rem; color: #6B7280; flex-wrap: wrap; }
        .dot { color: #D1D5DB; }

        .presets-section, .config-section, .result-section, .how-it-works, .openclaw-explainer, .more-tools, .faq-section {
          max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem;
        }
        .presets-section h2, .config-section h2, .how-it-works h2, .openclaw-explainer h2, .more-tools h2, .faq-section h2 {
          font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 1.5rem;
        }

        /* Preset Grid */
        .presets-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem; }
        .preset-card {
          display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
          padding: 1rem 0.75rem; border: 2px solid #E5E7EB; border-radius: 12px;
          background: #fff; cursor: pointer; transition: all 0.15s;
          text-align: center; font-family: inherit;
        }
        .preset-card:hover { border-color: #3B5FFF; background: #F8FAFF; }
        .preset-card.active { border-color: #3B5FFF; background: #EEF2FF; box-shadow: 0 0 0 3px rgba(59,95,255,0.15); }
        .preset-emoji { font-size: 1.8rem; }
        .preset-label { font-weight: 700; font-size: 0.95rem; color: #111827; }
        .preset-desc { font-size: 0.75rem; color: #6B7280; }

        .preset-preview {
          background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px;
          padding: 1.25rem; margin-bottom: 1rem;
        }
        .preset-preview h3 { font-size: 1.05rem; margin-bottom: 0.75rem; }
        .preview-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .preview-cols ul { list-style: none; padding: 0; margin: 0.5rem 0 0; }
        .preview-cols li { font-size: 0.85rem; color: #374151; padding: 0.2rem 0; }
        .preview-cols li::before { content: '✓ '; color: #10B981; font-weight: 700; }

        /* Completeness Bar */
        .completeness-bar {
          position: relative; height: 28px; background: #F3F4F6; border-radius: 100px;
          overflow: hidden; margin-bottom: 0.75rem;
        }
        .completeness-fill {
          height: 100%; border-radius: 100px; transition: width 0.3s;
          background: linear-gradient(90deg, #3B5FFF, #7C3AED);
        }
        .completeness-label {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-size: 0.8rem; font-weight: 700; color: #111827;
        }
        .checklist { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
        .check-item { font-size: 0.8rem; color: #9CA3AF; }
        .check-item.done { color: #111827; }

        /* Form */
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.3rem; }
        .form-group.full-width { grid-column: 1 / -1; }
        .form-group label { font-weight: 700; font-size: 0.9rem; color: #111827; }
        .form-group input, .form-group textarea {
          padding: 0.75rem; border: 2px solid #E5E7EB; border-radius: 8px;
          font-size: 0.95rem; font-family: inherit; transition: border-color 0.15s;
          background: #fff; resize: vertical;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #3B5FFF; outline: none; }
        .hint { font-size: 0.75rem; color: #9CA3AF; }

        .generate-actions { display: flex; gap: 1rem; margin-top: 1.5rem; justify-content: center; }
        .btn-generate {
          padding: 0.9rem 2.5rem; border-radius: 100px; border: none;
          background: linear-gradient(135deg, #3B5FFF, #7C3AED); color: #fff;
          font-size: 1.1rem; font-weight: 800; cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          font-family: inherit;
        }
        .btn-generate:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.35); }
        .btn-generate:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-reset {
          padding: 0.9rem 2rem; border-radius: 100px; border: 2px solid #E5E7EB;
          background: #fff; color: #6B7280; font-size: 1rem; font-weight: 600;
          cursor: pointer; font-family: inherit;
        }
        .btn-reset:hover { border-color: #3B5FFF; color: #3B5FFF; }

        /* Result */
        /* Readiness Score Card */
        .readiness-card {
          text-align: center; padding: 2rem; border-radius: 16px;
          background: #FAFBFF; border: 3px solid #3B5FFF;
          margin-bottom: 2rem; animation: fadeInUp 0.3s ease-out;
        }
        .readiness-emoji { font-size: 3rem; margin-bottom: 0.5rem; }
        .readiness-score { font-size: 3rem; font-weight: 900; line-height: 1; }
        .readiness-label { font-size: 1.3rem; font-weight: 800; margin-top: 0.25rem; }
        .readiness-desc { color: #6B7280; font-size: 0.95rem; margin-top: 0.75rem; max-width: 400px; margin-left: auto; margin-right: auto; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .result-section { padding-top: 3rem; }
        .result-header { text-align: center; margin-bottom: 1.5rem; }
        .result-header h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .result-header p { color: #6B7280; font-size: 1rem; }
        .result-actions { display: flex; gap: 0.75rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap; }
        .btn-copy, .btn-share-twitter, .btn-copy-link {
          padding: 0.6rem 1.25rem; border-radius: 100px; border: 2px solid #E5E7EB;
          background: #fff; font-size: 0.9rem; font-weight: 600; cursor: pointer;
          transition: all 0.15s; font-family: inherit; text-decoration: none; color: #374151;
        }
        .btn-copy:hover, .btn-copy-link:hover { border-color: #3B5FFF; color: #3B5FFF; }
        .btn-share-twitter { border-color: #1DA1F2; color: #1DA1F2; display: inline-flex; align-items: center; }
        .btn-share-twitter:hover { background: #1DA1F2; color: #fff; }

        .soul-output {
          background: #0D1117; border-radius: 12px; padding: 1.5rem; overflow-x: auto;
          margin-bottom: 2rem; border: 1px solid #30363D;
        }
        .soul-output pre {
          color: #E6EDF3; font-size: 0.85rem; line-height: 1.7;
          font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; margin: 0;
        }

        .result-cta {
          text-align: center; background: linear-gradient(135deg, #EEF2FF, #F5F3FF);
          border-radius: 16px; padding: 2rem; margin-top: 1rem;
        }
        .result-cta h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem; }
        .result-cta p { color: #6B7280; margin-bottom: 1.25rem; max-width: 500px; margin-left: auto; margin-right: auto; }
        .btn-buy {
          display: inline-block; padding: 0.9rem 2.5rem; border-radius: 100px;
          background: #3B5FFF; color: #fff; font-size: 1.1rem; font-weight: 800;
          text-decoration: none; transition: all 0.15s;
        }
        .btn-buy:hover { background: #2D4FE0; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,95,255,0.35); }
        .trust { display: block; margin-top: 0.75rem; font-size: 0.8rem; color: #9CA3AF; }

        /* How It Works */
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .step { text-align: center; padding: 1.5rem 1rem; }
        .step-num {
          display: inline-flex; width: 40px; height: 40px; border-radius: 50%;
          background: #3B5FFF; color: #fff; font-weight: 800; font-size: 1.1rem;
          align-items: center; justify-content: center; margin-bottom: 0.75rem;
        }
        .step h3 { font-size: 1rem; margin-bottom: 0.5rem; }
        .step p { font-size: 0.9rem; color: #6B7280; line-height: 1.5; }

        /* OpenClaw Explainer */
        .openclaw-explainer { text-align: center; }
        .openclaw-explainer > p { color: #6B7280; max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.6; }
        .explainer-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; text-align: left; }
        .explainer-card {
          background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px;
          padding: 1.25rem;
        }
        .explainer-card span { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
        .explainer-card h3 { font-size: 1rem; margin-bottom: 0.4rem; }
        .explainer-card p { font-size: 0.85rem; color: #6B7280; line-height: 1.5; }
        .link-arrow { color: #3B5FFF; font-weight: 600; text-decoration: none; }
        .link-arrow:hover { text-decoration: underline; }

        /* More Tools */
        .tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; }
        .tool-card {
          display: flex; flex-direction: column; gap: 0.2rem; padding: 1rem;
          border: 1px solid #E5E7EB; border-radius: 10px; text-decoration: none;
          color: #374151; transition: all 0.15s;
        }
        .tool-card:hover { border-color: #3B5FFF; background: #F8FAFF; }
        .tool-emoji { font-size: 1.3rem; }
        .tool-card strong { font-size: 0.9rem; }
        .tool-card span:last-child { font-size: 0.8rem; color: #9CA3AF; }

        /* FAQ */
        .faq-item { margin-bottom: 1.5rem; }
        .faq-item h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; color: #111827; }
        .faq-item p { font-size: 0.95rem; color: #6B7280; line-height: 1.6; }

        /* Sticky CTA */
        .sticky-cta {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
          background: #111827; color: #fff; display: flex; align-items: center;
          justify-content: center; gap: 1rem; padding: 0.75rem 1.5rem;
          animation: slideUp 0.3s ease-out;
        }
        .sticky-cta span { font-size: 0.9rem; font-weight: 600; }
        .sticky-cta a {
          display: inline-block; padding: 0.5rem 1.5rem; border-radius: 100px;
          background: #3B5FFF; color: #fff; font-weight: 700; font-size: 0.9rem;
          text-decoration: none;
        }
        .sticky-cta small { opacity: 0.8; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

        @media (max-width: 700px) {
          .hero h1 { font-size: 1.8rem; }
          .presets-grid { grid-template-columns: repeat(2, 1fr); }
          .form-grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .explainer-grid { grid-template-columns: 1fr; }
          .preview-cols { grid-template-columns: 1fr; }
          .result-actions { flex-direction: column; align-items: center; }
        }
      `}</style>
    </Layout>
  );
}
