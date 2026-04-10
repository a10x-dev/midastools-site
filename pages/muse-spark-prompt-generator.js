import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const STRIPE_URL = 'https://buy.stripe.com/28EdR8ccv22B1qk0pscMM0r';

const categories = {
  'Visual Coding': {
    icon: '🎨',
    templates: [
      'Create a [type: landing page / dashboard / mini-game] that [function]. Use a [style: modern / minimal / playful] design with [color scheme]. Make it responsive and interactive.',
      'I\'m uploading a screenshot of [what]. Recreate this as clean, semantic HTML/CSS with [framework: Tailwind / vanilla CSS]. Keep the layout pixel-perfect but improve the code quality.',
      'Build a [type: data visualization / chart / infographic] that shows [data description]. Use [format: SVG / Canvas / CSS Grid]. Make it interactive — hover shows details, click filters data.',
      'Generate a browser-based [game type: puzzle / platformer / quiz] about [topic]. Include score tracking, 3 levels of difficulty, and smooth animations. Single HTML file.',
      'Convert this wireframe into a working prototype: [describe layout]. Add realistic placeholder content, hover states, and a mobile-responsive version.',
    ]
  },
  'Multimodal Reasoning': {
    icon: '🧠',
    templates: [
      'Analyze this [image type: chart / photo / document / screenshot] and provide: 1) A detailed description of what you see, 2) Key insights or data points, 3) Actionable recommendations based on the analysis.',
      'Compare these [number] images and create a detailed comparison table. Rate each on [criteria]. Identify patterns, differences, and which one is best for [purpose].',
      'I\'m showing you a photo of [object / space / product]. Identify [number] potential issues or improvements. Annotate your response with specific locations in the image.',
      'Extract all text, numbers, and data from this [document type: receipt / form / handwritten notes / whiteboard]. Organize it into a structured [format: table / JSON / markdown] format.',
      'Look at this [product / room / design] photo. Suggest [number] specific improvements with visual references. Explain the reasoning behind each suggestion.',
    ]
  },
  'Contemplating Mode': {
    icon: '💭',
    templates: [
      'I need a deep analysis of [topic/problem]. Use your full reasoning capabilities: consider multiple perspectives, weigh evidence, identify assumptions, and provide a structured recommendation with confidence levels for each point.',
      'Research and synthesize: [complex question]. Break this into sub-questions, analyze each thoroughly, then combine your findings into a comprehensive answer with citations to your reasoning chain.',
      'Perform a strategic analysis of [business/market/decision]. Consider: market dynamics, competitor moves, timing, risks, and second-order effects. Present 3 scenarios (optimistic, realistic, pessimistic) with probability estimates.',
      'Analyze this [legal document / contract / policy] for: 1) Key obligations and rights, 2) Potential risks or loopholes, 3) Unusual or concerning clauses, 4) Recommended modifications. Be thorough — this matters.',
      'Create a financial model for [business/project]. Include: revenue projections (3 scenarios), cost structure, break-even analysis, sensitivity analysis on key variables, and a recommendation on go/no-go.',
    ]
  },
  'Instant Mode': {
    icon: '⚡',
    templates: [
      'Quick: [specific factual question]. Just the answer, no preamble.',
      'Rewrite this in [tone: professional / casual / persuasive / academic]: "[text to rewrite]"',
      'Convert [number/measurement] from [unit A] to [unit B]. Show the math.',
      'Fix the grammar and improve clarity: "[text with errors]". Return only the corrected version.',
      'Translate to [language] with cultural context: "[text to translate]". Note any idioms or concepts that don\'t translate directly.',
    ]
  },
  'Multi-Agent': {
    icon: '🤖',
    templates: [
      'Set up a content pipeline: Agent 1 researches [topic] and gathers key facts. Agent 2 writes a [content type] from the research. Agent 3 edits for [tone/audience]. Show me the output from each stage.',
      'I need a review chain for [document type]. First pass: check factual accuracy. Second pass: improve clarity and flow. Third pass: optimize for [audience]. Final pass: proofread. Run all passes and show improvements at each stage.',
      'Create a competitive analysis workflow: Agent 1 profiles [competitor A], Agent 2 profiles [competitor B], Agent 3 synthesizes both into a comparative analysis with strategic recommendations.',
      'Build an automated [type: customer support / sales / onboarding] flow: Define the decision tree, write responses for each branch, create escalation criteria, and test with [number] sample scenarios.',
      'Design a quality assurance pipeline for [content/code/process]. Define: check criteria, pass/fail thresholds, human review triggers, and automated fixes. Test with [sample input].',
    ]
  },
  'Meta Platforms': {
    icon: '📱',
    templates: [
      'Write [number] Instagram caption variations for [product/service/content]. Include: hook line, value proposition, call-to-action, and 15 relevant hashtags. Optimize for engagement.',
      'Create a WhatsApp Business response template library for [business type]. Include: greeting, FAQ answers, booking confirmations, payment reminders, and follow-up sequences. Keep them conversational.',
      'Generate [number] Facebook ad variations for [product/offer]. For each: headline (40 chars), primary text (125 chars), description (30 chars), and CTA button recommendation. A/B test angles: pain point, benefit, social proof.',
      'Write [number] Messenger chatbot conversation flows for [business]. Map: welcome sequence, product discovery, FAQ handling, booking/purchase flow, and handoff to human. Include fallback responses.',
      'Create voice command scripts for Ray-Ban Meta glasses. Cover [number] daily scenarios: [list scenarios]. Keep responses under 15 seconds spoken. Natural, conversational tone.',
    ]
  },
};

export default function MuseSparkGenerator() {
  const [category, setCategory] = useState('Visual Coding');
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [customValues, setCustomValues] = useState({});
  const [copied, setCopied] = useState(false);

  const currentTemplate = categories[category].templates[selectedPrompt];

  const fillTemplate = (template) => {
    let filled = template;
    const placeholders = template.match(/\[([^\]]+)\]/g) || [];
    placeholders.forEach(ph => {
      const key = ph.replace(/[\[\]]/g, '');
      if (customValues[key]) {
        filled = filled.replace(ph, customValues[key]);
      }
    });
    return filled;
  };

  const placeholders = (currentTemplate.match(/\[([^\]]+)\]/g) || []).map(p => p.replace(/[\[\]]/g, ''));

  const handleCopy = () => {
    navigator.clipboard.writeText(fillTemplate(currentTemplate));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <Head>
        <title>Free Muse Spark Prompt Generator — Meta AI Prompts | Midas Tools</title>
        <meta name="description" content="Free prompt generator for Meta Muse Spark. 30+ templates across visual coding, multimodal reasoning, Contemplating mode & more. Copy, paste, use." />
        <meta property="og:title" content="Free Muse Spark Prompt Generator" />
        <meta property="og:description" content="30+ free prompt templates for Meta's brand new Muse Spark AI. Visual coding, multimodal, multi-agent & more." />
        <meta property="og:url" content="https://midastools.co/muse-spark-prompt-generator" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://midastools.co/muse-spark-prompt-generator" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .msg-page { max-width: 800px; margin: 0 auto; padding: 80px 24px 64px; }
        .msg-badge { display: inline-block; background: #10B981; color: white; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; letter-spacing: 0.5px; }
        .msg-h1 { font-size: clamp(28px, 5vw, 42px); font-weight: 900; line-height: 1.1; letter-spacing: -1.5px; color: var(--text); margin-bottom: 12px; }
        .msg-h1 span { color: var(--accent); }
        .msg-sub { font-size: 18px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 32px; }
        .msg-cats { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .msg-cat { padding: 8px 16px; border-radius: 100px; border: 1px solid var(--border); background: var(--bg); font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .msg-cat:hover { border-color: var(--accent); }
        .msg-cat-active { background: var(--accent); color: white; border-color: var(--accent); }
        .msg-prompts { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
        .msg-prompt-btn { text-align: left; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg); font-size: 13px; color: var(--text-secondary); cursor: pointer; transition: all 0.2s; line-height: 1.4; }
        .msg-prompt-btn:hover { border-color: var(--accent); }
        .msg-prompt-active { border-color: var(--accent); background: #f0f4ff; color: var(--text); font-weight: 600; }
        .msg-workspace { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-bottom: 24px; }
        .msg-template { font-size: 15px; line-height: 1.7; color: var(--text); margin-bottom: 16px; font-family: 'SF Mono', 'Fira Code', monospace; background: white; border: 1px solid var(--border); border-radius: 8px; padding: 16px; white-space: pre-wrap; }
        .msg-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
        .msg-field label { display: block; font-size: 12px; font-weight: 700; color: var(--text-secondary); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
        .msg-field input { width: 100%; padding: 10px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; }
        .msg-field input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(59,95,255,0.1); }
        .msg-actions { display: flex; gap: 12px; align-items: center; }
        .msg-copy { padding: 12px 24px; background: var(--accent); color: white; border: none; border-radius: 100px; font-weight: 700; font-size: 14px; cursor: pointer; transition: all 0.2s; }
        .msg-copy:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(59,95,255,0.3); }
        .msg-upsell { background: linear-gradient(135deg, #111827 0%, #1e293b 100%); border-radius: 16px; padding: 32px; text-align: center; margin-top: 48px; }
        .msg-upsell h3 { color: white; font-size: 22px; font-weight: 800; margin-bottom: 8px; }
        .msg-upsell p { color: rgba(255,255,255,0.6); font-size: 15px; margin-bottom: 20px; }
        .msg-upsell-cta { display: inline-block; padding: 14px 28px; background: white; color: var(--text); border-radius: 100px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.2s; }
        .msg-upsell-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,0.2); }
        @media (max-width: 640px) {
          .msg-fields { grid-template-columns: 1fr; }
          .msg-cats { gap: 6px; }
          .msg-cat { font-size: 12px; padding: 6px 12px; }
        }
      `}</style>

      <div className="msg-page">
        <div className="msg-badge">FREE TOOL</div>
        <h1 className="msg-h1">
          <span>Muse Spark</span> Prompt Generator
        </h1>
        <p className="msg-sub">
          30+ free prompt templates for Meta's brand new AI model. Pick a category,
          customize the blanks, copy & paste into meta.ai.
        </p>

        {/* Category Pills */}
        <div className="msg-cats">
          {Object.entries(categories).map(([name, cat]) => (
            <button
              key={name}
              className={`msg-cat ${category === name ? 'msg-cat-active' : ''}`}
              onClick={() => { setCategory(name); setSelectedPrompt(0); setCustomValues({}); }}
            >
              {cat.icon} {name}
            </button>
          ))}
        </div>

        {/* Prompt Selection */}
        <div className="msg-prompts">
          {categories[category].templates.map((t, i) => (
            <button
              key={i}
              className={`msg-prompt-btn ${selectedPrompt === i ? 'msg-prompt-active' : ''}`}
              onClick={() => { setSelectedPrompt(i); setCustomValues({}); }}
            >
              {t.length > 120 ? t.slice(0, 120) + '...' : t}
            </button>
          ))}
        </div>

        {/* Workspace */}
        <div className="msg-workspace">
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>
            {categories[category].icon} {category} — Template {selectedPrompt + 1}
          </div>

          {placeholders.length > 0 && (
            <div className="msg-fields">
              {placeholders.map((ph, i) => (
                <div className="msg-field" key={i}>
                  <label>{ph}</label>
                  <input
                    placeholder={`Enter ${ph.split(':')[0].toLowerCase()}...`}
                    value={customValues[ph] || ''}
                    onChange={e => setCustomValues({ ...customValues, [ph]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="msg-template">{fillTemplate(currentTemplate)}</div>

          <div className="msg-actions">
            <button className="msg-copy" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy Prompt'}
            </button>
            <a href="https://www.meta.ai" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
              Open meta.ai →
            </a>
          </div>
        </div>

        {/* Upsell */}
        <div className="msg-upsell">
          <h3>Want all 100+ Muse Spark prompts?</h3>
          <p>This free tool has 30 templates. The full kit has 100+ prompts across all 8 categories, plus mode selection guides, visual coding cheatsheets, and multimodal prompt patterns.</p>
          <a href={STRIPE_URL} className="msg-upsell-cta">Get the Full Kit — $29</a>
        </div>

        {/* More free tools */}
        <div style={{ textAlign: 'center', marginTop: 32, padding: '24px 0', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            More free tools: <Link href="/prompt-generator" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>AI Prompt Generator</Link> · <Link href="/image-prompt-builder" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Image Prompt Builder</Link> · <Link href="/tools" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>All 14 Tools →</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}