import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

/* ── Scoring Logic ─────────────────────────────────────────────── */

function scoreSpecificity(text) {
  let score = 0;
  const lower = text.toLowerCase();
  // Numbers / quantities
  if (/\d+/.test(text)) score += 5;
  if (/\d{2,}/.test(text)) score += 3;
  // Specific nouns (proper nouns / capitalized words beyond sentence start)
  const properNouns = text.match(/(?<=[.!?\s])[A-Z][a-z]{2,}/g);
  if (properNouns && properNouns.length >= 1) score += 3;
  if (properNouns && properNouns.length >= 3) score += 2;
  // Adjectives / descriptors
  const descriptors = ['specific', 'detailed', 'exact', 'precise', 'particular', 'concrete', 'measurable', 'quantif'];
  descriptors.forEach(d => { if (lower.includes(d)) score += 1; });
  // Examples
  if (/e\.g\.|for example|for instance|such as|like this/i.test(text)) score += 4;
  // Length bonus — longer prompts tend to be more specific
  const words = text.trim().split(/\s+/).length;
  if (words > 30) score += 2;
  if (words > 60) score += 2;
  if (words > 100) score += 2;
  return Math.min(score, 20);
}

function scoreContext(text) {
  let score = 0;
  const lower = text.toLowerCase();
  const contextPhrases = [
    'i am', 'i\'m', 'i need', 'i want', 'i have', 'i work',
    'for my', 'my business', 'my company', 'my team', 'my project',
    'background:', 'context:', 'situation:', 'scenario:',
    'currently', 'right now', 'at the moment',
    'the goal is', 'the purpose', 'objective',
    'target audience', 'intended for', 'aimed at',
    'industry', 'niche', 'market', 'sector',
  ];
  contextPhrases.forEach(phrase => {
    if (lower.includes(phrase)) score += 2;
  });
  // Longer context is better
  const words = text.trim().split(/\s+/).length;
  if (words > 40) score += 2;
  if (words > 80) score += 2;
  return Math.min(score, 20);
}

function scoreRole(text) {
  let score = 0;
  const lower = text.toLowerCase();
  const rolePhrases = [
    'act as', 'you are', 'you\'re a', 'you\'re an',
    'pretend', 'imagine you', 'role:', 'persona:',
    'as a', 'as an', 'behave like', 'think like',
    'expert', 'specialist', 'professional', 'consultant',
    'experienced', 'senior', 'seasoned', 'world-class',
    'advisor', 'coach', 'mentor', 'strategist',
  ];
  rolePhrases.forEach(phrase => {
    if (lower.includes(phrase)) score += 3;
  });
  return Math.min(score, 20);
}

function scoreFormat(text) {
  let score = 0;
  const lower = text.toLowerCase();
  const formatPhrases = [
    'list', 'table', 'bullet', 'bullets', 'numbered',
    'step by step', 'step-by-step', 'steps:', 'steps to',
    'format:', 'formatted as', 'in the format',
    'markdown', 'json', 'csv', 'html',
    'heading', 'section', 'paragraph',
    'column', 'row', 'outline',
    'template', 'structure', 'organize',
    'example output', 'output format', 'deliver as',
    'code block', 'write it as',
  ];
  formatPhrases.forEach(phrase => {
    if (lower.includes(phrase)) score += 3;
  });
  return Math.min(score, 20);
}

function scoreConstraints(text) {
  let score = 0;
  const lower = text.toLowerCase();
  const constraintPhrases = [
    'maximum', 'minimum', 'at most', 'at least', 'no more than', 'no less than',
    'tone:', 'tone should', 'write in a', 'conversational', 'formal', 'casual', 'professional',
    'audience:', 'for beginners', 'for experts', 'for children', 'target audience',
    'length:', 'words', 'sentences', 'paragraphs',
    'do not', 'don\'t', 'avoid', 'never', 'must not', 'without',
    'must include', 'make sure', 'ensure', 'required',
    'language:', 'in english', 'in spanish',
    'deadline', 'within', 'under',
    'word count', 'character limit', 'keep it short', 'keep it brief', 'concise',
  ];
  constraintPhrases.forEach(phrase => {
    if (lower.includes(phrase)) score += 2;
  });
  return Math.min(score, 20);
}

function analyzePrompt(text) {
  if (!text.trim()) return null;

  const specificity = scoreSpecificity(text);
  const context = scoreContext(text);
  const role = scoreRole(text);
  const format = scoreFormat(text);
  const constraints = scoreConstraints(text);
  const total = specificity + context + role + format + constraints;

  return { total, specificity, context, role, format, constraints };
}

function getSuggestions(scores, text) {
  const suggestions = [];
  const lower = text.toLowerCase();

  if (scores.role < 12) {
    suggestions.push({
      category: 'Role',
      score: scores.role,
      max: 20,
      icon: '🎭',
      color: '#8B5CF6',
      tip: 'Assign a specific role to the AI. Try starting with: "Act as a [specific expert] with [years] of experience in [domain]..."',
      example: 'Act as a senior marketing strategist with 15 years of experience in B2B SaaS.',
    });
  }

  if (scores.context < 12) {
    suggestions.push({
      category: 'Context',
      score: scores.context,
      max: 20,
      icon: '📋',
      color: '#059669',
      tip: 'Add background information. Explain your situation, who you are, and why you need this.',
      example: 'I am a freelance designer building a personal brand. My target audience is small business owners who need affordable design work.',
    });
  }

  if (scores.specificity < 12) {
    suggestions.push({
      category: 'Specificity',
      score: scores.specificity,
      max: 20,
      icon: '🎯',
      color: '#D97706',
      tip: 'Add specific details: numbers, names, examples, and concrete descriptions instead of vague language.',
      example: 'Include 5 bullet points, each under 20 words. Reference competitors like Notion, Trello, and Asana.',
    });
  }

  if (scores.format < 12) {
    suggestions.push({
      category: 'Format',
      score: scores.format,
      max: 20,
      icon: '📐',
      color: '#3B5FFF',
      tip: 'Tell the AI exactly how to structure the output: list, table, step-by-step, markdown, JSON, etc.',
      example: 'Format the response as a numbered list with bold headers for each section. Include a summary table at the end.',
    });
  }

  if (scores.constraints < 12) {
    suggestions.push({
      category: 'Constraints',
      score: scores.constraints,
      max: 20,
      icon: '📏',
      color: '#EC4899',
      tip: 'Set boundaries: length, tone, audience level, things to avoid, and must-haves.',
      example: 'Keep it under 300 words. Use a professional but friendly tone. Avoid jargon. Write for a non-technical audience.',
    });
  }

  return suggestions;
}

function buildImprovedPrompt(text, scores) {
  let improved = text.trim();
  const parts = [];

  if (scores.role < 12) {
    parts.push('Act as an expert consultant in this field.');
  }
  if (scores.context < 12) {
    parts.push('Context: I need this for a professional project targeting a specific audience.');
  }
  if (scores.specificity < 12) {
    parts.push('Be specific and include concrete examples, numbers, and actionable details.');
  }
  if (scores.format < 12) {
    parts.push('Format your response with clear headings, bullet points, and a summary section.');
  }
  if (scores.constraints < 12) {
    parts.push('Keep the response concise (under 500 words). Use a professional yet conversational tone. Avoid generic filler.');
  }

  if (parts.length > 0) {
    improved = parts.join('\n\n') + '\n\n---\n\n' + improved;
  }

  return improved;
}

function getScoreLabel(score) {
  if (score >= 90) return 'Masterful';
  if (score >= 80) return 'Excellent';
  if (score >= 71) return 'Great';
  if (score >= 60) return 'Good';
  if (score >= 41) return 'Needs Work';
  if (score >= 20) return 'Weak';
  return 'Poor';
}

function getScoreColor(score) {
  if (score >= 71) return '#059669';
  if (score >= 41) return '#D97706';
  return '#DC2626';
}

function getScoreEmoji(score) {
  if (score >= 90) return '🏆';
  if (score >= 80) return '🔥';
  if (score >= 71) return '💪';
  if (score >= 60) return '👍';
  if (score >= 41) return '🤔';
  if (score >= 20) return '😬';
  return '💀';
}

/* ── Animated Score Ring ──────────────────────────────────────── */

function ScoreRing({ score, size = 200, strokeWidth = 14 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;
  const color = getScoreColor(animatedScore);

  useEffect(() => {
    setAnimatedScore(0);
    let current = 0;
    const step = score / 40;
    const interval = setInterval(() => {
      current += step;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      setAnimatedScore(Math.round(current));
    }, 16);
    return () => clearInterval(interval);
  }, [score]);

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#E5E7EB" strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.05s ease, stroke 0.3s ease' }}
        />
      </svg>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: size * 0.25, fontWeight: 900, color, lineHeight: 1 }}>
          {animatedScore}
        </span>
        <span style={{ fontSize: size * 0.08, color: '#6B7280', fontWeight: 600, marginTop: 4 }}>
          out of 100
        </span>
      </div>
    </div>
  );
}

/* ── Criterion Bar ────────────────────────────────────────────── */

function CriterionBar({ label, score, max, icon, color }) {
  const pct = (score / max) * 100;
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>
          {icon} {label}
        </span>
        <span style={{ fontSize: 14, fontWeight: 700, color }}>{score}/{max}</span>
      </div>
      <div style={{ height: 8, background: '#E5E7EB', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${pct}%`, background: color, borderRadius: 100,
          transition: 'width 0.6s ease',
        }} />
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────── */

export default function PromptScorer() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showImproved, setShowImproved] = useState(false);
  const resultRef = useRef(null);

  const handleScore = () => {
    const scores = analyzePrompt(prompt);
    if (!scores) return;
    setResult(scores);
    setShowImproved(false);
    setCopied(false);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCopyImproved = () => {
    if (!result) return;
    const improved = buildImprovedPrompt(prompt, result);
    navigator.clipboard.writeText(improved);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setPrompt('');
    setResult(null);
    setCopied(false);
    setShowImproved(false);
  };

  const suggestions = result ? getSuggestions(result, prompt) : [];
  const improvedPrompt = result ? buildImprovedPrompt(prompt, result) : '';
  const wordCount = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;

  const title = 'Free AI Prompt Scorer — Rate & Improve Your ChatGPT Prompts | Midas Tools';
  const description = 'Score your AI prompts on a 0-100 scale. Get instant feedback on specificity, context, role-setting, format, and constraints. Improve your ChatGPT, Claude, and Gemini prompts for free.';
  const url = 'https://midastools.co/prompt-scorer';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompt scorer, prompt quality checker, rate my AI prompt, prompt grader, ChatGPT prompt scorer, prompt analyzer, prompt improvement tool, free AI tools 2026" />
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
          '@type': 'WebApplication',
          name: 'AI Prompt Quality Scorer',
          description: description,
          url: url,
          applicationCategory: 'Productivity',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How does the AI Prompt Scorer work?', acceptedAnswer: { '@type': 'Answer', text: 'The scorer analyzes your prompt across 5 key dimensions: specificity, context, role assignment, output format, and constraints. Each criterion is scored 0-20 for a total of 0-100. It uses pattern matching to detect best practices in prompt engineering.' }},
            { '@type': 'Question', name: 'Is the Prompt Scorer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% free with no signup required. Score unlimited prompts and get improvement suggestions instantly.' }},
            { '@type': 'Question', name: 'What makes a high-scoring prompt?', acceptedAnswer: { '@type': 'Answer', text: 'High-scoring prompts (80+) include a clear role for the AI, specific context about your situation, concrete details and examples, a defined output format, and constraints like tone, length, and audience.' }},
            { '@type': 'Question', name: 'Does this work for all AI tools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The scoring criteria apply universally to ChatGPT, Claude, Gemini, Copilot, and any LLM. Well-structured prompts perform better across all AI tools.' }},
          ],
        })}} />
      </Head>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 80px 24px 48px;
          max-width: 800px;
          margin: 0 auto;
        }
        .badge {
          display: inline-block;
          background: #EEF2FF;
          color: #3B5FFF;
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
        .hero p {
          font-size: 20px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }
        .hero .highlight {
          color: #3B5FFF;
          font-weight: 600;
        }

        .scorer {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .scorer-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px;
        }
        .scorer-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .scorer-textarea {
          width: 100%;
          min-height: 180px;
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
        .scorer-textarea:focus {
          outline: none;
          border-color: #3B5FFF;
        }
        .scorer-textarea::placeholder {
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
        .btn-score {
          flex: 1;
          padding: 16px 24px;
          background: #3B5FFF;
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          letter-spacing: -0.3px;
        }
        .btn-score:hover:not(:disabled) {
          background: #2D4ADB;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(59, 95, 255, 0.3);
        }
        .btn-score:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .btn-reset {
          padding: 16px 24px;
          background: #F3F4F6;
          color: #374151;
          border: none;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-reset:hover {
          background: #E5E7EB;
        }

        .results {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .results-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 40px 32px;
        }
        .score-header {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 36px;
        }
        .score-ring-wrap {
          flex-shrink: 0;
        }
        .score-info h2 {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 4px;
        }
        .score-verdict {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 12px;
        }
        .score-summary {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }
        .share-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          padding: 8px 16px;
          background: #F3F4F6;
          border: none;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .share-btn:hover {
          background: #E5E7EB;
        }

        .breakdown-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 20px;
          padding-top: 24px;
          border-top: 2px solid #E5E7EB;
        }

        .suggestions {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px solid #E5E7EB;
        }
        .suggestions-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 20px;
        }
        .suggestion-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 12px;
        }
        .suggestion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .suggestion-cat {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
        }
        .suggestion-score {
          font-size: 13px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 100px;
        }
        .suggestion-tip {
          font-size: 14px;
          color: #374151;
          line-height: 1.6;
          margin: 0 0 10px;
        }
        .suggestion-example {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 13px;
          color: #6B7280;
          line-height: 1.6;
          font-style: italic;
        }
        .suggestion-example strong {
          color: #374151;
          font-style: normal;
        }

        .improved {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px solid #E5E7EB;
        }
        .improved-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .improved-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        .btn-toggle {
          padding: 10px 20px;
          background: #111827;
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-toggle:hover {
          background: #374151;
          transform: translateY(-1px);
        }
        .improved-prompt {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 12px;
          padding: 20px;
          white-space: pre-wrap;
          font-size: 14px;
          line-height: 1.7;
          color: #374151;
          max-height: 500px;
          overflow-y: auto;
          margin-bottom: 12px;
        }
        .btn-copy {
          padding: 10px 24px;
          background: #059669;
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-copy:hover {
          background: #047857;
          transform: translateY(-1px);
        }
        .btn-copy.copied {
          background: #111827;
        }

        .all-good {
          text-align: center;
          padding: 24px;
          background: #F0FDF4;
          border-radius: 12px;
          border: 1px solid #BBF7D0;
        }
        .all-good p {
          font-size: 15px;
          color: #059669;
          font-weight: 600;
          margin: 0;
        }

        .upsell {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .upsell-card {
          background: #111827;
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
          color: white;
        }
        .upsell-badge {
          display: inline-block;
          background: rgba(59, 95, 255, 0.2);
          color: #93A8FF;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .upsell-card h2 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .upsell-card p {
          font-size: 18px;
          color: #9CA3AF;
          margin: 0 0 32px;
          line-height: 1.6;
        }
        .upsell-btn {
          display: inline-block;
          background: #3B5FFF;
          color: white;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 17px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s;
          letter-spacing: -0.3px;
        }
        .upsell-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 24px rgba(59, 95, 255, 0.4);
        }

        .faq {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .faq h2 {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 32px;
        }
        .faq-item {
          border-bottom: 1px solid #E5E7EB;
          padding: 20px 0;
        }
        .faq-q {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px;
        }
        .faq-a {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }

        .related {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .related h2 {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 24px;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .related-card {
          background: #F9FAFB;
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .related-card .rc-title {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px;
        }
        .related-card .rc-desc {
          font-size: 13px;
          color: #6B7280;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 700px) {
          .hero h1 { font-size: 32px; }
          .hero p { font-size: 17px; }
          .scorer-card { padding: 20px; }
          .results-card { padding: 24px 20px; }
          .score-header {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
          .btn-row { flex-direction: column; }
          .upsell-card { padding: 32px 20px; }
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="badge">100% Free — No Signup Required</div>
        <h1>AI Prompt <span className="highlight">Scorer</span></h1>
        <p>
          Paste any prompt and get an instant quality score from 0-100.
          Find out exactly <span className="highlight">what's missing</span> and get a rewritten version that scores 90+.
        </p>
      </section>

      {/* Scorer Input */}
      <section className="scorer">
        <div className="scorer-card">
          <label className="scorer-label">Paste your AI prompt below</label>
          <textarea
            className="scorer-textarea"
            placeholder={"Example: Write me a blog post about marketing.\n\n(Paste your real prompt here — the more you give us, the better we can score it!)"}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="word-count">{wordCount} word{wordCount !== 1 ? 's' : ''}</div>
          <div className="btn-row">
            <button
              className="btn-score"
              onClick={handleScore}
              disabled={!prompt.trim()}
            >
              Score My Prompt
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
        <section className="results" ref={resultRef}>
          <div className="results-card">

            {/* Score + Ring */}
            <div className="score-header">
              <div className="score-ring-wrap">
                <ScoreRing score={result.total} />
              </div>
              <div className="score-info">
                <h2>{getScoreEmoji(result.total)} {getScoreLabel(result.total)}</h2>
                <p className="score-verdict" style={{ color: getScoreColor(result.total) }}>
                  Your prompt scored {result.total}/100
                </p>
                <p className="score-summary">
                  {result.total >= 80
                    ? 'This is a well-crafted prompt. It covers most best practices and should produce high-quality AI output.'
                    : result.total >= 60
                    ? 'Decent prompt, but there is clear room for improvement. Adding the missing elements below could dramatically improve your AI output.'
                    : result.total >= 41
                    ? 'This prompt is missing several key elements. The suggestions below will help you get much better results from any AI tool.'
                    : 'This prompt needs significant improvement. Most AI tools will give you generic, unhelpful responses with a prompt like this. Follow the suggestions below.'}
                </p>
                <button
                  className="share-btn"
                  onClick={() => {
                    const text = `My AI prompt scored ${result.total}/100 on the Midas Tools Prompt Scorer! How does yours compare? Try it free: https://midastools.co/prompt-scorer`;
                    if (navigator.share) {
                      navigator.share({ text });
                    } else {
                      navigator.clipboard.writeText(text);
                    }
                  }}
                >
                  Share my score
                </button>
              </div>
            </div>

            {/* Breakdown Bars */}
            <h3 className="breakdown-title">Score Breakdown</h3>
            <CriterionBar label="Specificity" score={result.specificity} max={20} icon="🎯" color="#D97706" />
            <CriterionBar label="Context" score={result.context} max={20} icon="📋" color="#059669" />
            <CriterionBar label="Role Assignment" score={result.role} max={20} icon="🎭" color="#8B5CF6" />
            <CriterionBar label="Output Format" score={result.format} max={20} icon="📐" color="#3B5FFF" />
            <CriterionBar label="Constraints" score={result.constraints} max={20} icon="📏" color="#EC4899" />

            {/* Suggestions */}
            {suggestions.length > 0 ? (
              <div className="suggestions">
                <h3 className="suggestions-title">How to Improve</h3>
                {suggestions.map((s, i) => (
                  <div key={i} className="suggestion-card">
                    <div className="suggestion-header">
                      <span className="suggestion-cat">{s.icon} {s.category}</span>
                      <span className="suggestion-score" style={{
                        background: s.score < 8 ? '#FEF2F2' : '#FFFBEB',
                        color: s.score < 8 ? '#DC2626' : '#D97706',
                      }}>
                        {s.score}/{s.max}
                      </span>
                    </div>
                    <p className="suggestion-tip">{s.tip}</p>
                    <div className="suggestion-example">
                      <strong>Try adding:</strong> "{s.example}"
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="suggestions">
                <div className="all-good">
                  <p>All criteria are strong. Your prompt is well-structured.</p>
                </div>
              </div>
            )}

            {/* Improved Prompt */}
            {suggestions.length > 0 && (
              <div className="improved">
                <div className="improved-header">
                  <h3 className="improved-title">Rewritten Prompt</h3>
                  <button className="btn-toggle" onClick={() => setShowImproved(!showImproved)}>
                    {showImproved ? 'Hide' : 'Show Improved Version'}
                  </button>
                </div>
                {showImproved && (
                  <>
                    <div className="improved-prompt">{improvedPrompt}</div>
                    <button
                      className={`btn-copy ${copied ? 'copied' : ''}`}
                      onClick={handleCopyImproved}
                    >
                      {copied ? 'Copied!' : 'Copy Improved Prompt'}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Upsell */}
      <section className="upsell">
        <div className="upsell-card">
          <div className="upsell-badge">Skip the Guesswork</div>
          <h2>Get 2,000+ Prompts That Score 90+</h2>
          <p>
            Every prompt in our kits is professionally engineered with role, context, format,
            and constraints built in. Copy, paste, get results.
          </p>
          <Link href="/kits" className="upsell-btn">
            Browse AI Prompt Kits
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {[
          { q: 'How does the AI Prompt Scorer work?', a: 'The scorer analyzes your prompt across 5 key dimensions of prompt engineering: specificity, context, role assignment, output format, and constraints. Each dimension is scored 0-20 using pattern matching, giving you a total score out of 100 with actionable improvement tips.' },
          { q: 'Is the Prompt Scorer really free?', a: 'Yes, 100% free with no signup required. Score as many prompts as you want. Everything runs in your browser — we never store or see your prompts.' },
          { q: 'What score should I aim for?', a: 'Anything above 70 is good. Above 80 is excellent and will produce consistently high-quality AI output. Our premium prompt kits are engineered to score 90+.' },
          { q: 'Does this work for image/video prompts too?', a: 'The scoring criteria are optimized for text-based AI prompts (ChatGPT, Claude, Gemini). Image and video prompts follow different rules, though specificity and detail still matter.' },
          { q: 'Why is my prompt scoring low?', a: 'Most people write prompts that are too vague. The most common issues are: no role assignment, no output format specified, and no constraints. Adding these three elements alone can boost your score by 30-40 points.' },
        ].map((item, i) => (
          <div key={i} className="faq-item">
            <h3 className="faq-q">{item.q}</h3>
            <p className="faq-a">{item.a}</p>
          </div>
        ))}
      </section>

      {/* Related Tools */}
      <section className="related">
        <h2>More Free AI Tools</h2>
        <div className="related-grid">
          <Link href="/prompt-roaster" className="related-card">
            <h3 className="rc-title">AI Prompt Roaster</h3>
            <p className="rc-desc">Get your prompt brutally roasted for 10 common sins, then get a fixed version.</p>
          </Link>
          <Link href="/prompt-enhancer" className="related-card">
            <h3 className="rc-title">AI Prompt Enhancer</h3>
            <p className="rc-desc">Get 5 enhanced versions of any prompt — Professional, Creative, Viral & more.</p>
          </Link>
          <Link href="/prompt-generator" className="related-card">
            <h3 className="rc-title">AI Prompt Generator</h3>
            <p className="rc-desc">Generate expert-level prompts for any use case. 8 categories, instant results.</p>
          </Link>
          <Link href="/business-name-generator" className="related-card">
            <h3 className="rc-title">Business Name Generator</h3>
            <p className="rc-desc">Get 20 brandable business names instantly. 16 industries, 6 styles.</p>
          </Link>
          <Link href="/tools" className="related-card">
            <h3 className="rc-title">All Free Tools</h3>
            <p className="rc-desc">Browse our complete collection of free AI tools for entrepreneurs.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
