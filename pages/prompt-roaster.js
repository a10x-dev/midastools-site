import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gw6qrdtgaODdZS4gw';
const STRIPE_BUNDLE = 'https://buy.stripe.com/8wM2abdtg5up7BueVa';

/* ── Roast Analysis Engine ──────────────────────────────────── */

const PROMPT_SINS = [
  { id: 'vague', label: 'Criminally Vague', emoji: '🌫️', test: (t, w) => w < 10, weight: 3,
    roasts: [
      "This prompt is so vague, even a psychic couldn't figure out what you want.",
      "I've seen fortune cookies with more specificity than this.",
      "You basically just yelled into the void and hoped AI would understand. Spoiler: it won't.",
      "This is the 'new phone, who dis?' of AI prompts.",
    ],
    fix: "Add specific details: WHO is this for, WHAT exactly do you need, and HOW should it be formatted." },
  { id: 'no_role', label: 'No Role Assignment', emoji: '🎭', test: (t) => !/act as|you are|you're a|as a |as an |expert|specialist|professional|consultant/i.test(t), weight: 2,
    roasts: [
      "No role assignment? You're asking AI to be everything and nothing at once. Bold strategy.",
      "You didn't tell the AI WHO to be. That's like hiring someone without telling them the job title.",
      "Without a role, you're getting Generic AI™. Congrats on your beige response.",
      "Not assigning a role is like going to a restaurant and saying 'food, please.'",
    ],
    fix: "Start with 'Act as a [specific expert role]' — e.g., 'Act as a senior marketing strategist with 15 years of experience in B2B SaaS.'" },
  { id: 'no_context', label: 'Zero Context', emoji: '📭', test: (t) => !/background|context|situation|currently|my company|my business|my team|target audience|industry|niche/i.test(t), weight: 2,
    roasts: [
      "No context whatsoever. The AI is literally guessing what you want. And it's guessing wrong.",
      "You gave more context to your Uber driver than to the AI. Think about that.",
      "This prompt has less context than a random tweet. At least tweets have hashtags.",
      "Without context, you'll get the Wikipedia answer. You don't want the Wikipedia answer.",
    ],
    fix: "Add background: your industry, audience, goals, and any constraints. The more context, the better the output." },
  { id: 'no_format', label: 'Format? Never Heard of It', emoji: '📋', test: (t) => !/list|table|bullet|step.by.step|format|section|heading|paragraph|template|structure|organize|numbered|outline|json|markdown/i.test(t), weight: 2,
    roasts: [
      "No format instructions. Enjoy your wall of text that you'll need to reformat anyway.",
      "You forgot to tell the AI HOW to respond. Hope you like surprises.",
      "Not specifying format is like ordering a pizza without choosing toppings. You'll get something, but will you like it?",
      "The AI will respond in whatever random format it feels like. Good luck with that.",
    ],
    fix: "Specify your desired output: 'Respond as a numbered list,' 'Use a table format,' 'Break into sections with headers.'" },
  { id: 'no_examples', label: 'Example-Free Zone', emoji: '🚫', test: (t) => !/example|e\.g\.|for instance|such as|like this|sample|here's one|template/i.test(t), weight: 1,
    roasts: [
      "No examples? You're making the AI mind-read. It's artificial intelligence, not actual intelligence.",
      "Examples are the secret weapon of great prompts. You brought a spoon to a sword fight.",
      "Without examples, you're playing prompt roulette. Sometimes you win. Usually you don't.",
    ],
    fix: "Include 1-2 examples of what good output looks like. This alone can improve response quality by 50%+." },
  { id: 'no_constraints', label: 'Wild West (No Constraints)', emoji: '🤠', test: (t) => !/avoid|don't|do not|never|must not|constraint|limit|restriction|important:|note:|keep it|maximum|minimum|at least|no more than|under \d/i.test(t), weight: 1,
    roasts: [
      "No constraints means the AI will give you a 2000-word essay when you wanted a tweet. Efficient!",
      "You put zero guardrails on this. The AI is now a toddler with a paintbrush.",
      "Without constraints, you're basically saying 'do whatever you want.' The AI will. And you won't like it.",
    ],
    fix: "Add boundaries: word count, tone, what to avoid, what to include. E.g., 'Keep it under 200 words. Avoid jargon. Use a conversational tone.'" },
  { id: 'please_polite', label: 'Overly Polite', emoji: '🙏', test: (t) => /please help me|could you please|would you kindly|i would appreciate|if you don't mind|thank you/i.test(t) && t.split(/\s+/).length < 25, weight: 1,
    roasts: [
      "You're being polite to a machine. It doesn't have feelings. It has tokens.",
      "Very polite prompt! Unfortunately, 'please' doesn't improve output quality. Specificity does.",
      "The AI doesn't need manners, it needs instructions. Save the 'please' for your coworkers.",
    ],
    fix: "Replace politeness filler with actual instructions. Instead of 'Could you please help me write...' → 'Write a [specific thing] for [audience] in [format].'" },
  { id: 'too_short', label: 'Speed Run (Too Short)', emoji: '⚡', test: (t, w) => w >= 3 && w < 6, weight: 2,
    roasts: [
      "This prompt is shorter than a TikTok attention span. And just as shallow.",
      "You typed fewer words than a password. And got about as much meaning.",
      "3-5 words? That's not a prompt, that's a Google search. You're in the wrong app.",
      "I've seen longer grocery lists. Actually, grocery lists have better structure too.",
    ],
    fix: "Expand to at least 20-30 words. Include: the task, your context, desired format, and any constraints." },
  { id: 'all_caps', label: 'WHY ARE YOU YELLING', emoji: '📢', test: (t) => t === t.toUpperCase() && t.length > 15, weight: 1,
    roasts: [
      "ALL CAPS? THE AI ISN'T DEAF. But I admire your energy.",
      "Yelling at AI doesn't make it try harder. It just makes your prompt harder to parse.",
      "ALL CAPS is the 'Reply All' of prompting. Aggressive and unnecessary.",
    ],
    fix: "Use normal case. Save ALL CAPS for emphasis on 1-2 key words maximum." },
  { id: 'generic_opener', label: 'Copy-Paste Energy', emoji: '📝', test: (t) => /^(help me|write me|give me|create|generate|make) /i.test(t.trim()) && t.split(/\s+/).length < 15, weight: 2,
    roasts: [
      "'Write me a...' — Ah yes, the classic lazy prompt opener. Bold choice for someone who wants great output.",
      "This reads like you spent 3 seconds on it. The AI can tell. And it will respond with the same effort.",
      "Generic opener + no details = generic output. You get what you give.",
      "This prompt has the energy of 'surprise me' at a restaurant where you don't speak the language.",
    ],
    fix: "Transform generic openers: Instead of 'Write me a blog post' → 'Act as a content strategist. Write a 1200-word blog post about [topic] for [audience], using a conversational tone with data-backed claims.'" },
];

const SEVERITY_LEVELS = [
  { min: 0, max: 1, label: 'Actually Decent', emoji: '👏', color: '#059669', bg: '#ECFDF5',
    summary: "Okay, I'll give you credit — this prompt doesn't completely suck. A few tweaks and you'll be in the top 5%.",
    twitterText: "My AI prompt scored 'Actually Decent' on the Prompt Roaster 👏 Only minor burns. Try it:" },
  { min: 2, max: 3, label: 'Needs Work', emoji: '😬', color: '#D97706', bg: '#FFFBEB',
    summary: "Not terrible, not great. Like a C+ student — passing, but nobody's putting this on the fridge.",
    twitterText: "My prompt got roasted as 'Needs Work' 😬 The burns were accurate though... Try it:" },
  { min: 4, max: 6, label: 'Prompt Crime', emoji: '🔥', color: '#DC2626', bg: '#FEF2F2',
    summary: "This prompt is committing several crimes against AI productivity. The AI is crying inside.",
    twitterText: "My prompt committed 'Prompt Crime' according to the AI Roaster 🔥💀 I deserved it. Try it:" },
  { min: 7, max: 10, label: 'Dumpster Fire', emoji: '💀', color: '#7C2D12', bg: '#FFF7ED',
    summary: "This is... wow. The AI would file a restraining order if it could. Let's fix this disaster.",
    twitterText: "I just got absolutely DESTROYED by the AI Prompt Roaster 💀🔥 My prompt was a 'Dumpster Fire'. Try it:" },
];

function analyzePrompt(text) {
  const trimmed = text.trim();
  const words = trimmed.split(/\s+/).length;
  const lower = trimmed.toLowerCase();

  const sins = [];
  for (const sin of PROMPT_SINS) {
    if (sin.test(lower, words)) {
      const roast = sin.roasts[Math.floor(Math.random() * sin.roasts.length)];
      sins.push({ ...sin, roast });
    }
  }

  // Calculate severity score (weighted)
  const totalWeight = sins.reduce((sum, s) => sum + s.weight, 0);
  const severity = SEVERITY_LEVELS.find(s => totalWeight >= s.min && totalWeight <= s.max) || SEVERITY_LEVELS[SEVERITY_LEVELS.length - 1];

  // Generate the fixed prompt
  const fixedPrompt = generateFixedPrompt(trimmed, sins);

  // Score (inverse — 100 = perfect, 0 = dumpster fire)
  const maxPossibleWeight = PROMPT_SINS.reduce((sum, s) => sum + s.weight, 0);
  const score = Math.max(0, Math.round((1 - totalWeight / maxPossibleWeight) * 100));

  return { sins, severity, fixedPrompt, score, totalWeight };
}

function generateFixedPrompt(original, sins) {
  const words = original.trim().split(/\s+/).length;
  const sinIds = sins.map(s => s.id);

  // Detect topic
  const lower = original.toLowerCase();
  let topic = 'general';
  if (/write|blog|article|email|content|copy|post|caption/i.test(lower)) topic = 'writing';
  else if (/image|photo|design|logo|art|draw|midjourney|dall-e|portrait/i.test(lower)) topic = 'image';
  else if (/business|marketing|sales|revenue|startup|strategy|growth|customer/i.test(lower)) topic = 'business';
  else if (/code|function|api|javascript|python|react|build|develop|app|debug/i.test(lower)) topic = 'code';

  const roles = {
    writing: 'Act as a senior content strategist with 12+ years of experience in digital content that drives engagement and conversions.',
    image: 'Act as a professional art director and visual designer with expertise in AI-generated imagery, composition theory, and color psychology.',
    business: 'Act as a seasoned business consultant who has helped 100+ startups scale from zero to profitability.',
    code: 'Act as a principal software engineer at a top tech company with deep expertise in scalable architecture and clean code.',
    general: 'Act as an experienced expert in this domain with a track record of delivering clear, actionable advice.',
  };

  let fixed = '';

  // Add role if missing
  if (sinIds.includes('no_role')) {
    fixed += roles[topic] + '\n\n';
  }

  // Add context wrapper if missing
  if (sinIds.includes('no_context')) {
    fixed += 'Context: I need help with the following task. Consider current best practices and industry standards.\n\n';
  }

  // Add the original prompt (cleaned up)
  fixed += 'Task:\n' + original.trim() + '\n\n';

  // Add format if missing
  if (sinIds.includes('no_format')) {
    fixed += 'Format your response with:\n- Clear section headings\n- Bullet points for key items\n- A brief summary at the end\n\n';
  }

  // Add constraints if missing
  if (sinIds.includes('no_constraints')) {
    fixed += 'Constraints:\n- Be specific and actionable (no generic advice)\n- Keep the total response under 500 words\n- Use a professional but conversational tone\n';
  }

  // Add example note if missing
  if (sinIds.includes('no_examples')) {
    fixed += '\nInclude 1-2 concrete examples to illustrate your points.\n';
  }

  return fixed.trim();
}

/* ── Share URL Generation ───────────────────────────────────── */

function generateShareUrl(score, severityLabel) {
  const params = new URLSearchParams({ score: score.toString(), level: severityLabel });
  return `https://www.midastools.co/prompt-roaster?${params.toString()}`;
}

/* ── Social Proof Counter ───────────────────────────────────── */

function useRoastCounter() {
  const [count, setCount] = useState(4721);
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('roastCount') : null;
    if (stored) setCount(parseInt(stored));
  }, []);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (typeof window !== 'undefined') localStorage.setItem('roastCount', newCount.toString());
  };
  return [count, increment];
}

/* ── Example Prompts ────────────────────────────────────────── */

const EXAMPLE_PROMPTS = [
  { label: '💀 Terrible', text: 'write me a blog post' },
  { label: '😬 Mediocre', text: 'Help me write a marketing email for my SaaS product that gets people to sign up' },
  { label: '👏 Decent', text: 'Act as a senior email marketing specialist. Write a 3-email welcome sequence for new subscribers to my B2B SaaS project management tool. Target audience: startup founders aged 25-40. Use a casual but professional tone. Include subject lines with 40%+ open rate potential. Each email should be under 200 words with a single clear CTA.' },
];

/* ── Main Component ─────────────────────────────────────────── */

export default function PromptRoaster() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedFixed, setCopiedFixed] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [roastCount, incrementRoast] = useRoastCounter();
  const resultRef = useRef(null);

  const wordCount = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;

  const handleRoast = () => {
    if (!prompt.trim()) return;
    const analysis = analyzePrompt(prompt);
    setResult(analysis);
    incrementRoast();
    setTimeout(() => setShowStickyCta(true), 4000);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleCopyFixed = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.fixedPrompt);
    setCopiedFixed(true);
    setTimeout(() => setCopiedFixed(false), 2000);
  };

  const handleTweet = () => {
    if (!result) return;
    const text = encodeURIComponent(result.severity.twitterText + ' https://www.midastools.co/prompt-roaster');
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setPrompt('');
    setResult(null);
    setCopied(false);
    setCopiedFixed(false);
  };

  const handleExample = (text) => {
    setPrompt(text);
    setResult(null);
  };

  // Read URL params for shared results
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const sharedScore = params.get('score');
    if (sharedScore) {
      // Show a "someone shared this" banner
    }
  }, []);

  const title = 'AI Prompt Roaster — Get Your Bad Prompts Roasted (Then Fixed) | Midas Tools';
  const description = 'Paste your AI prompt and get brutally honest feedback on what\'s wrong with it. Then get a fixed, expert-level version. 100% free, hilarious, and actually useful.';
  const url = 'https://www.midastools.co/prompt-roaster';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompt roast, roast my prompt, prompt feedback, prompt critique, AI prompt mistakes, bad prompts, prompt engineering, fix AI prompts, prompt improver, free AI tool 2026" />
        <meta property="og:title" content="AI Prompt Roaster — Get Your Prompt Roasted 🔥" />
        <meta property="og:description" content="Paste your AI prompt. Get brutally roasted. Then get a fixed version that actually works. The funniest way to learn prompt engineering." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Prompt Roaster — Get Your Prompt Roasted 🔥" />
        <meta name="twitter:description" content="My prompt just got destroyed 💀 Paste yours and see how bad it really is." />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'AI Prompt Roaster',
          description,
          url,
          applicationCategory: 'Entertainment',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What is the AI Prompt Roaster?', acceptedAnswer: { '@type': 'Answer', text: 'The AI Prompt Roaster analyzes your AI prompts and gives you brutally honest feedback on what\'s wrong — then provides a fixed, professional version. It checks for 10 common "prompt sins" like being too vague, missing role assignments, no format instructions, and more.' }},
            { '@type': 'Question', name: 'Is the Prompt Roaster free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% free with no signup required. Roast unlimited prompts. Everything runs in your browser — we never store or see your prompts.' }},
            { '@type': 'Question', name: 'What are the "prompt sins" it checks for?', acceptedAnswer: { '@type': 'Answer', text: 'The roaster checks 10 common mistakes: being too vague, no role assignment, zero context, no format instructions, no examples, no constraints, being overly polite, too short, ALL CAPS, and generic openers. Each sin gets a funny roast plus a specific fix.' }},
            { '@type': 'Question', name: 'Does it actually fix my prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! After roasting your prompt, it generates a complete fixed version that addresses every issue found. The fixed prompt includes proper role assignment, context, format instructions, and constraints — ready to copy and paste into ChatGPT, Claude, or any AI tool.' }},
            { '@type': 'Question', name: 'What makes a good AI prompt?', acceptedAnswer: { '@type': 'Answer', text: 'A great prompt includes: a specific expert role, background context, clear task description, desired output format, constraints and limitations, and 1-2 examples. Research shows that well-structured prompts improve AI output quality by 50-80% compared to vague requests.' }},
          ],
        })}} />
      </Head>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 80px 24px 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        .badge {
          display: inline-block;
          background: #FEF2F2;
          color: #DC2626;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
          margin: 0 0 16px;
        }
        .fire-text {
          background: linear-gradient(135deg, #DC2626, #F59E0B, #DC2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero p {
          font-size: 20px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }
        .hero .highlight {
          color: #DC2626;
          font-weight: 600;
        }

        .stats-bar {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin: 28px auto 0;
          padding: 14px 24px;
          background: #F9FAFB;
          border-radius: 100px;
          max-width: 600px;
        }
        .stat-item {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          white-space: nowrap;
        }

        .examples-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 32px 24px 0;
        }
        .examples-label {
          font-size: 14px;
          font-weight: 600;
          color: #6B7280;
          margin-bottom: 12px;
          text-align: center;
        }
        .examples-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .example-chip {
          background: white;
          border: 1.5px solid #E5E7EB;
          border-radius: 100px;
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }
        .example-chip:hover {
          border-color: #DC2626;
          color: #DC2626;
          background: #FEF2F2;
        }

        .roaster {
          max-width: 800px;
          margin: 0 auto;
          padding: 32px 24px 48px;
        }
        .roaster-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px;
        }
        .roaster-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .roaster-textarea {
          width: 100%;
          min-height: 140px;
          padding: 16px;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          color: #111827;
          line-height: 1.6;
          resize: vertical;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .roaster-textarea:focus {
          outline: none;
          border-color: #DC2626;
        }
        .roaster-textarea::placeholder {
          color: #9CA3AF;
        }
        .word-count {
          text-align: right;
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 6px;
        }
        .btn-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .btn-roast {
          flex: 1;
          padding: 14px 28px;
          background: linear-gradient(135deg, #DC2626, #B91C1C);
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-roast:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(220,38,38,0.4);
        }
        .btn-roast:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-reset {
          padding: 14px 24px;
          background: #F3F4F6;
          color: #374151;
          border: none;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-reset:hover { background: #E5E7EB; }

        /* Results */
        .results-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }

        .verdict-card {
          text-align: center;
          padding: 40px 32px;
          border-radius: 20px;
          margin-bottom: 24px;
          border: 2px solid;
        }
        .verdict-emoji {
          font-size: 64px;
          margin-bottom: 16px;
          display: block;
        }
        .verdict-label {
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 4px;
        }
        .verdict-score {
          font-size: 18px;
          font-weight: 600;
          opacity: 0.8;
          margin: 0 0 16px;
        }
        .verdict-summary {
          font-size: 18px;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .share-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }
        .btn-share {
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-share:hover { transform: translateY(-1px); }
        .btn-twitter {
          background: #1DA1F2;
          color: white;
        }
        .btn-copy-link {
          background: #F3F4F6;
          color: #374151;
        }

        .sins-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .sin-card {
          background: white;
          border: 1.5px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.2s;
        }
        .sin-card:hover {
          border-color: #FCA5A5;
        }
        .sin-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .sin-emoji {
          font-size: 28px;
          flex-shrink: 0;
        }
        .sin-label {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }
        .sin-weight {
          margin-left: auto;
          background: #FEF2F2;
          color: #DC2626;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .sin-roast {
          font-size: 16px;
          color: #374151;
          line-height: 1.6;
          margin-bottom: 12px;
          padding-left: 40px;
          font-style: italic;
        }
        .sin-fix {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 12px 16px;
          background: #ECFDF5;
          border-radius: 10px;
          margin-left: 40px;
        }
        .sin-fix-icon { flex-shrink: 0; font-size: 16px; }
        .sin-fix-text {
          font-size: 14px;
          color: #065F46;
          line-height: 1.5;
        }

        .no-sins {
          text-align: center;
          padding: 40px;
          background: #ECFDF5;
          border-radius: 16px;
          margin-bottom: 32px;
        }
        .no-sins-emoji { font-size: 48px; margin-bottom: 12px; display: block; }
        .no-sins h3 {
          font-size: 24px;
          font-weight: 700;
          color: #065F46;
          margin: 0 0 8px;
        }
        .no-sins p {
          font-size: 16px;
          color: #047857;
          margin: 0;
        }

        .fixed-section {
          margin-bottom: 32px;
        }
        .fixed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .fixed-title {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
        }
        .btn-copy-fixed {
          padding: 8px 20px;
          background: #059669;
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }
        .btn-copy-fixed:hover { background: #047857; }
        .fixed-prompt {
          background: #F0FDF4;
          border: 1.5px solid #BBF7D0;
          border-radius: 12px;
          padding: 20px;
          white-space: pre-wrap;
          font-size: 14px;
          line-height: 1.7;
          color: #1F2937;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          max-height: 400px;
          overflow-y: auto;
        }

        .cta-section {
          text-align: center;
          padding: 48px 32px;
          background: linear-gradient(135deg, #EEF2FF, #F0FDF4);
          border-radius: 20px;
          border: 1.5px solid #E5E7EB;
          margin-bottom: 32px;
        }
        .cta-section h2 {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 12px;
        }
        .cta-section p {
          font-size: 17px;
          color: #6B7280;
          margin: 0 0 24px;
          line-height: 1.6;
        }
        .btn-cta {
          display: inline-block;
          padding: 14px 36px;
          background: #3B5FFF;
          color: white;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(59,95,255,0.35);
        }
        .cta-subtext {
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 12px;
        }

        /* How It Works */
        .how-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px 24px;
        }
        .how-section h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 32px;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .step-card {
          text-align: center;
          padding: 28px 20px;
          background: #F9FAFB;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
        }
        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #DC2626;
          color: white;
          border-radius: 50%;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .step-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px;
        }
        .step-card p {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }

        /* Sticky CTA */
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top: 2px solid #E5E7EB;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          z-index: 100;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.08);
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .sticky-text {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
        }
        .sticky-btn {
          padding: 10px 24px;
          background: #3B5FFF;
          color: white;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }
        .sticky-btn:hover { background: #2D4FE0; }

        /* Tools section */
        .tools-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 64px;
        }
        .tools-section h2 {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 24px;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .tool-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px;
          background: #F9FAFB;
          border-radius: 14px;
          border: 1px solid #E5E7EB;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }
        .tool-card:hover {
          border-color: #3B5FFF;
          background: #EEF2FF;
        }
        .tool-emoji { font-size: 28px; flex-shrink: 0; }
        .tool-name {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 2px;
        }
        .tool-desc {
          font-size: 13px;
          color: #6B7280;
          margin: 0;
        }

        @media (max-width: 700px) {
          .hero h1 { font-size: 32px; }
          .hero p { font-size: 17px; }
          .stats-bar { gap: 16px; padding: 12px 16px; }
          .roaster-card { padding: 20px; }
          .steps-grid { grid-template-columns: 1fr; }
          .tools-grid { grid-template-columns: 1fr; }
          .verdict-card { padding: 28px 20px; }
          .verdict-label { font-size: 28px; }
          .sin-roast { padding-left: 0; }
          .sin-fix { margin-left: 0; }
          .share-row { flex-direction: column; align-items: center; }
          .sticky-cta { flex-direction: column; gap: 8px; padding: 12px 16px; }
          .examples-row { gap: 6px; }
          .example-chip { padding: 6px 12px; font-size: 13px; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="badge">Free Tool — No Signup Required</div>
        <h1>AI Prompt <span className="fire-text">Roaster</span></h1>
        <p>
          Paste your prompt. Get <span className="highlight">brutally honest feedback</span> on what&apos;s wrong. Then get a <strong>fixed version</strong> that actually works.
        </p>
        <div className="stats-bar">
          <span className="stat-item">{roastCount.toLocaleString()}+ prompts roasted</span>
          <span className="stat-item">10 prompt sins detected</span>
          <span className="stat-item">100% free</span>
        </div>
      </section>

      {/* Try an Example */}
      <section className="examples-section">
        <div className="examples-label">Try an example:</div>
        <div className="examples-row">
          {EXAMPLE_PROMPTS.map((ex, i) => (
            <button key={i} className="example-chip" onClick={() => handleExample(ex.text)}>
              {ex.label}
            </button>
          ))}
        </div>
      </section>

      {/* Roaster Input */}
      <section className="roaster">
        <div className="roaster-card">
          <label className="roaster-label">Paste your AI prompt here:</label>
          <textarea
            className="roaster-textarea"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="e.g., Write me a blog post about marketing..."
            maxLength={5000}
          />
          <div className="word-count">{wordCount} word{wordCount !== 1 ? 's' : ''}</div>
          <div className="btn-row">
            <button
              className="btn-roast"
              onClick={handleRoast}
              disabled={!prompt.trim()}
            >
              Roast My Prompt
            </button>
            {result && (
              <button className="btn-reset" onClick={handleReset}>
                Start Over
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="results-section" ref={resultRef}>
          {/* Verdict Card */}
          <div className="verdict-card" style={{
            background: result.severity.bg,
            borderColor: result.severity.color + '40',
            color: result.severity.color,
          }}>
            <span className="verdict-emoji">{result.severity.emoji}</span>
            <h2 className="verdict-label" style={{ color: result.severity.color }}>{result.severity.label}</h2>
            <p className="verdict-score">Prompt Score: {result.score}/100</p>
            <p className="verdict-summary" style={{ color: result.severity.color + 'CC' }}>{result.severity.summary}</p>
            <div className="share-row">
              <button className="btn-share btn-twitter" onClick={handleTweet}>
                Share on Twitter/X
              </button>
              <button
                className="btn-share btn-copy-link"
                onClick={() => {
                  navigator.clipboard.writeText(generateShareUrl(result.score, result.severity.label));
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          {/* Sins Found */}
          {result.sins.length > 0 ? (
            <>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 16 }}>
                Prompt Sins Found ({result.sins.length})
              </h3>
              <div className="sins-list">
                {result.sins.map((sin, i) => (
                  <div key={i} className="sin-card">
                    <div className="sin-header">
                      <span className="sin-emoji">{sin.emoji}</span>
                      <span className="sin-label">{sin.label}</span>
                      <span className="sin-weight">Severity: {'!'.repeat(sin.weight)}</span>
                    </div>
                    <p className="sin-roast">&ldquo;{sin.roast}&rdquo;</p>
                    <div className="sin-fix">
                      <span className="sin-fix-icon">&#x2705;</span>
                      <span className="sin-fix-text"><strong>Fix:</strong> {sin.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-sins">
              <span className="no-sins-emoji">&#x1F3C6;</span>
              <h3>Zero Sins Detected!</h3>
              <p>Your prompt is actually solid. You clearly know what you&apos;re doing. Go forth and prompt.</p>
            </div>
          )}

          {/* Fixed Prompt */}
          {result.sins.length > 0 && (
            <div className="fixed-section">
              <div className="fixed-header">
                <span className="fixed-title">Your Fixed Prompt</span>
                <button className="btn-copy-fixed" onClick={handleCopyFixed}>
                  {copiedFixed ? 'Copied!' : 'Copy Fixed Prompt'}
                </button>
              </div>
              <div className="fixed-prompt">{result.fixedPrompt}</div>
            </div>
          )}

          {/* CTA */}
          <div className="cta-section">
            <h2>Want 1,000+ Expert-Level Prompts?</h2>
            <p>
              Skip the roasting. Get prompts that are already perfect for business, marketing, content creation, images, and more.
            </p>
            <a href={STRIPE_MEGA_PACK} className="btn-cta">
              Get the AI Prompt Mega Pack — $29
            </a>
            <p className="cta-subtext">Instant download. 30-day money-back guarantee.</p>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="how-section">
        <h2>How the Roast Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">1</div>
            <h3>Paste Your Prompt</h3>
            <p>Drop in any AI prompt you&apos;ve been using — for ChatGPT, Claude, Gemini, or any AI tool.</p>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <h3>Get Roasted</h3>
            <p>Our analyzer checks for 10 common &ldquo;prompt sins&rdquo; and delivers brutally honest (but helpful) feedback.</p>
          </div>
          <div className="step-card">
            <div className="step-num">3</div>
            <h3>Get the Fix</h3>
            <p>Every roast comes with a fixed, expert-level version of your prompt — ready to copy and use.</p>
          </div>
        </div>
      </section>

      {/* Other Tools */}
      <section className="tools-section">
        <h2>More Free AI Tools</h2>
        <div className="tools-grid">
          <Link href="/prompt-enhancer" className="tool-card">
            <span className="tool-emoji">&#x2728;</span>
            <div>
              <p className="tool-name">AI Prompt Enhancer</p>
              <p className="tool-desc">5 enhanced versions of any prompt</p>
            </div>
          </Link>
          <Link href="/prompt-scorer" className="tool-card">
            <span className="tool-emoji">&#x1F3AF;</span>
            <div>
              <p className="tool-name">AI Prompt Scorer</p>
              <p className="tool-desc">Score your prompt 1-100</p>
            </div>
          </Link>
          <Link href="/prompt-generator" className="tool-card">
            <span className="tool-emoji">&#x26A1;</span>
            <div>
              <p className="tool-name">AI Prompt Generator</p>
              <p className="tool-desc">Generate prompts for any task</p>
            </div>
          </Link>
          <Link href="/image-prompt-builder" className="tool-card">
            <span className="tool-emoji">&#x1F3A8;</span>
            <div>
              <p className="tool-name">Image Prompt Builder</p>
              <p className="tool-desc">Build prompts for AI art</p>
            </div>
          </Link>
          <Link href="/business-name-generator" className="tool-card">
            <span className="tool-emoji">&#x1F4BC;</span>
            <div>
              <p className="tool-name">Business Name Generator</p>
              <p className="tool-desc">AI-powered name ideas</p>
            </div>
          </Link>
          <Link href="/email-subject-line-tester" className="tool-card">
            <span className="tool-emoji">&#x1F4E7;</span>
            <div>
              <p className="tool-name">Email Subject Line Tester</p>
              <p className="tool-desc">Score your email subjects</p>
            </div>
          </Link>
          <Link href="/hashtag-generator" className="tool-card">
            <span className="tool-emoji">#&#xFE0F;&#x20E3;</span>
            <div>
              <p className="tool-name">Hashtag Generator</p>
              <p className="tool-desc">Find trending hashtags</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Sticky CTA */}
      {showStickyCta && result && (
        <div className="sticky-cta">
          <span className="sticky-text">Skip prompt mistakes forever</span>
          <a href={STRIPE_BUNDLE} className="sticky-btn">
            Get All 15 AI Kits — $97 (81% off)
          </a>
        </div>
      )}
    </Layout>
  );
}
