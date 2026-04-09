import Head from 'next/head';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gw6qrdtgaODdZS4gw';

/* ── Topic Detection ─────────────────────────────────────────── */

function detectTopic(text) {
  const lower = text.toLowerCase();
  const topics = [];

  const writingKeywords = ['write', 'blog', 'article', 'essay', 'copy', 'content', 'story', 'script', 'email', 'letter', 'headline', 'caption', 'post', 'newsletter', 'paragraph', 'text', 'description', 'summary', 'rewrite'];
  const imageKeywords = ['image', 'photo', 'picture', 'illustration', 'design', 'logo', 'visual', 'graphic', 'draw', 'portrait', 'landscape', 'render', 'midjourney', 'dall-e', 'stable diffusion', 'art', 'painting'];
  const businessKeywords = ['business', 'marketing', 'sales', 'revenue', 'profit', 'strategy', 'growth', 'customer', 'brand', 'startup', 'company', 'roi', 'campaign', 'launch', 'pricing', 'competitor', 'market', 'funnel', 'leads'];
  const codeKeywords = ['code', 'function', 'api', 'database', 'javascript', 'python', 'react', 'css', 'html', 'build', 'develop', 'app', 'software', 'debug', 'error', 'algorithm', 'script', 'program', 'component', 'endpoint', 'backend', 'frontend'];
  const educationKeywords = ['explain', 'teach', 'learn', 'understand', 'tutorial', 'lesson', 'course', 'study', 'student', 'concept', 'theory', 'beginner', 'guide', 'how to', 'step by step'];

  if (writingKeywords.some(k => lower.includes(k))) topics.push('writing');
  if (imageKeywords.some(k => lower.includes(k))) topics.push('image');
  if (businessKeywords.some(k => lower.includes(k))) topics.push('business');
  if (codeKeywords.some(k => lower.includes(k))) topics.push('code');
  if (educationKeywords.some(k => lower.includes(k))) topics.push('education');

  return topics.length > 0 ? topics : ['general'];
}

function getRoleForTopic(topics, style) {
  const roles = {
    writing: {
      professional: 'a senior content strategist with 15 years of experience crafting high-converting copy for Fortune 500 brands',
      creative: 'an award-winning creative writer known for vivid storytelling and unexpected perspectives',
      data: 'a data-driven content analyst who optimizes every piece of writing for engagement metrics and SEO performance',
      viral: 'a viral content creator with 2M+ followers who knows exactly what makes content spread like wildfire',
      expert: 'a renowned linguistics professor and published author who deconstructs writing at a structural level',
    },
    image: {
      professional: 'a professional art director with expertise in visual composition, color theory, and brand aesthetics',
      creative: 'a visionary digital artist who blends surrealism with photorealism to create striking visual narratives',
      data: 'a UX researcher who uses visual design principles backed by eye-tracking studies and conversion data',
      viral: 'a social media visual strategist whose designs consistently generate 10x higher engagement rates',
      expert: 'a fine arts professor specializing in composition theory, lighting design, and visual semiotics',
    },
    business: {
      professional: 'a McKinsey-trained management consultant with 20 years advising C-suite executives at Fortune 100 companies',
      creative: 'an innovative startup advisor known for unconventional growth strategies that disrupted entire industries',
      data: 'a senior business analyst who relies exclusively on data, KPIs, and measurable outcomes to drive decisions',
      viral: 'a growth marketing expert who has scaled 3 startups from $0 to $10M ARR using viral loops and word-of-mouth',
      expert: 'a Harvard Business School professor who developed frameworks used by thousands of companies worldwide',
    },
    code: {
      professional: 'a principal software engineer at a FAANG company with deep expertise in scalable architecture and clean code',
      creative: 'an innovative full-stack developer known for elegant, creative solutions to complex technical problems',
      data: 'a performance engineer who optimizes code for speed, memory efficiency, and measurable reliability metrics',
      viral: 'a developer advocate who creates tools and libraries used by millions of developers worldwide',
      expert: 'a computer science PhD who specializes in algorithm design, system architecture, and software engineering best practices',
    },
    education: {
      professional: 'an instructional designer with 12 years of experience creating corporate training programs for global organizations',
      creative: 'an engaging educator known for using analogies, stories, and interactive methods to make complex topics click',
      data: 'a learning scientist who designs curricula based on cognitive load theory and evidence-based learning research',
      viral: 'a popular online educator whose courses have enrolled 500K+ students with a 4.9-star average rating',
      expert: 'a cognitive psychologist and pedagogy expert who has published extensively on knowledge transfer and retention',
    },
    general: {
      professional: 'a highly experienced consultant known for delivering clear, structured, and actionable advice',
      creative: 'a creative thinker who approaches problems from unexpected angles and finds innovative solutions',
      data: 'an analytical expert who grounds every recommendation in data, evidence, and measurable outcomes',
      viral: 'a communication specialist who knows how to frame any topic in the most compelling and shareable way',
      expert: 'a multidisciplinary expert who applies first-principles thinking and proven frameworks to any problem',
    },
  };

  const primaryTopic = topics[0];
  return roles[primaryTopic]?.[style] || roles.general[style];
}

/* ── Enhancement Logic ───────────────────────────────────────── */

function getContextAdditions(topics) {
  const additions = {};

  if (topics.includes('writing')) {
    additions.context = 'Consider the target audience, their reading level, and the platform where this will be published.';
    additions.format = 'Structure the output with a compelling hook, clear sections, and a strong conclusion. Use formatting (headers, bullets, bold) for scannability.';
    additions.constraints = 'Maintain a consistent tone throughout. Avoid cliches and filler words. Every sentence should earn its place.';
  }
  if (topics.includes('image')) {
    additions.context = 'Consider the visual style, mood, color palette, and composition. Think about lighting direction, camera angle, and depth of field.';
    additions.format = 'Include specific details about: subject positioning, background elements, lighting setup, color grading, artistic style, and technical parameters (aspect ratio, rendering quality).';
    additions.constraints = 'Be precise with visual descriptors. Specify exact styles (e.g., "cinematic lighting" not just "good lighting"). Include negative prompts where relevant.';
  }
  if (topics.includes('business')) {
    additions.context = 'Factor in the current market landscape, competitive positioning, and industry benchmarks. Consider both short-term wins and long-term sustainability.';
    additions.format = 'Include specific metrics, timelines, and KPIs. Structure recommendations as actionable steps with expected ROI for each.';
    additions.constraints = 'Ground all advice in real-world business economics. Include risk assessment and contingency considerations. Avoid generic motivational advice.';
  }
  if (topics.includes('code')) {
    additions.context = 'Consider the tech stack, performance requirements, scalability needs, and maintenance implications. Factor in edge cases and error scenarios.';
    additions.format = 'Provide clean, well-commented code with proper error handling. Include type annotations where applicable. Separate concerns logically.';
    additions.constraints = 'Follow established best practices and design patterns. Handle edge cases explicitly. Include input validation and meaningful error messages.';
  }
  if (topics.includes('education')) {
    additions.context = 'Assess the learner\'s current knowledge level and build from there. Use the principle of progressive complexity.';
    additions.format = 'Break down complex concepts into digestible steps. Use analogies and real-world examples. Include a summary and key takeaways.';
    additions.constraints = 'Never assume prior knowledge without stating it. Define technical terms on first use. Test understanding with questions or exercises.';
  }

  if (Object.keys(additions).length === 0) {
    additions.context = 'Consider the broader context, intended audience, and desired outcome for this request.';
    additions.format = 'Organize the response with clear structure: introduction, main content with logical sections, and actionable conclusion.';
    additions.constraints = 'Be specific and concrete rather than vague. Prioritize actionable insights over general observations.';
  }

  return additions;
}

function enhancePrompt(originalPrompt, style) {
  const trimmed = originalPrompt.trim();
  if (!trimmed) return '';

  const topics = detectTopic(trimmed);
  const additions = getContextAdditions(topics);

  switch (style) {
    case 'professional': {
      const role = getRoleForTopic(topics, 'professional');
      return `Act as ${role}.\n\nYour task:\n${trimmed}\n\n${additions.context}\n\nPlease structure your response as follows:\n${additions.format}\n\nImportant guidelines:\n- ${additions.constraints}\n- Provide specific, actionable recommendations rather than generic advice\n- Use professional language while remaining accessible\n- Include relevant examples or case studies where appropriate\n- End with a clear summary of key action items`;
    }

    case 'creative': {
      const role = getRoleForTopic(topics, 'creative');
      return `You are ${role}. Channel your most imaginative thinking for this challenge.\n\nHere is what I need:\n${trimmed}\n\nApproach this with fresh eyes. ${additions.context}\n\nThink beyond the obvious — explore unexpected connections, vivid metaphors, and novel angles that make this truly stand out. ${additions.format}\n\nCreative parameters:\n- Push boundaries while staying relevant to the core request\n- ${additions.constraints}\n- Use sensory language and concrete imagery to bring ideas to life\n- Surprise the reader with at least one unconventional perspective\n- Weave in storytelling elements to make the content memorable`;
    }

    case 'data': {
      const role = getRoleForTopic(topics, 'data');
      return `Act as ${role}. Every claim you make must be grounded in evidence, logic, or established best practices.\n\nRequest:\n${trimmed}\n\n${additions.context}\n\nData-driven requirements:\n- Include specific numbers, percentages, or benchmarks wherever possible\n- Cite frameworks, methodologies, or research that support your recommendations\n- ${additions.format}\n- ${additions.constraints}\n- Present information in a structured, analytical format\n- Quantify expected outcomes where feasible (e.g., "This approach typically yields a 20-30% improvement in...")\n- Separate facts from assumptions and label each clearly\n- Include a prioritized ranking if multiple options are presented`;
    }

    case 'viral': {
      const role = getRoleForTopic(topics, 'viral');
      return `You are ${role}. Your mission is to make this absolutely impossible to ignore.\n\n${trimmed}\n\nMake this hit different. ${additions.context}\n\nViral framework:\n- Open with a hook so compelling that people stop scrolling immediately\n- ${additions.format}\n- Use power words that trigger emotion: "secret," "mistake," "proven," "surprising," "essential"\n- Create curiosity gaps that keep the reader engaged paragraph after paragraph\n- ${additions.constraints}\n- Build to a payoff that makes people want to share this instantly\n- Include a perspective or insight that challenges conventional thinking\n- End with a call-to-action that feels natural, not forced`;
    }

    case 'expert': {
      const role = getRoleForTopic(topics, 'expert');
      return `Act as ${role}. Apply rigorous, multi-layered thinking to this challenge.\n\nProblem statement:\n${trimmed}\n\n${additions.context}\n\nAnalytical framework:\n1. First, break this down into its fundamental components\n2. Examine each component through multiple lenses (practical, theoretical, contrarian)\n3. Identify the non-obvious connections and second-order effects\n4. ${additions.format}\n\nConstraints for excellence:\n- ${additions.constraints}\n- Challenge assumptions embedded in the original request\n- Consider edge cases and potential failure modes\n- Provide your reasoning chain, not just conclusions\n- If there are trade-offs, explicitly map them (e.g., speed vs. quality, cost vs. thoroughness)\n- Conclude with the single highest-leverage insight or recommendation`;
    }

    default:
      return trimmed;
  }
}

/* ── Quality Score ───────────────────────────────────────────── */

function calculateQualityScore(text) {
  let score = 40; // base score for having enhancement
  const words = text.trim().split(/\s+/).length;
  const lower = text.toLowerCase();

  // Word count scoring
  if (words > 50) score += 5;
  if (words > 100) score += 5;
  if (words > 150) score += 5;

  // Structure indicators
  if (/act as|you are/i.test(text)) score += 8;
  if (/\d+/.test(text)) score += 4;
  if (/step|section|format|structure/i.test(text)) score += 5;
  if (/constraint|guideline|requirement|important/i.test(text)) score += 5;
  if (/example|e\.g\.|such as|like/i.test(text)) score += 4;
  if (/avoid|don't|never|must not/i.test(text)) score += 3;
  if (/\n/.test(text)) score += 3;
  if (/bullet|list|heading/i.test(lower)) score += 3;
  if (/specific|concrete|actionable/i.test(lower)) score += 3;
  if (/metric|measure|kpi|benchmark|percentage/i.test(lower)) score += 3;
  if (/framework|methodology|principle/i.test(lower)) score += 4;

  return Math.min(score, 100);
}

function getScoreLabel(score) {
  if (score >= 90) return 'Elite';
  if (score >= 80) return 'Excellent';
  if (score >= 70) return 'Strong';
  if (score >= 60) return 'Good';
  return 'Decent';
}

function getScoreColor(score) {
  if (score >= 85) return '#059669';
  if (score >= 70) return '#3B5FFF';
  if (score >= 55) return '#D97706';
  return '#6B7280';
}

/* ── Enhancement Styles Config ───────────────────────────────── */

const STYLES = [
  { id: 'professional', emoji: '\uD83C\uDFAF', label: 'Professional', desc: 'Role, context, format instructions', color: '#3B5FFF', bgColor: '#EEF2FF' },
  { id: 'creative', emoji: '\uD83C\uDFA8', label: 'Creative', desc: 'Vivid language, metaphors, creative angles', color: '#8B5CF6', bgColor: '#F5F3FF' },
  { id: 'data', emoji: '\uD83D\uDCCA', label: 'Data-Driven', desc: 'Metrics, specificity, measurable outcomes', color: '#059669', bgColor: '#ECFDF5' },
  { id: 'viral', emoji: '\uD83D\uDD25', label: 'Viral / Marketing', desc: 'Persuasion, urgency, emotional hooks', color: '#DC2626', bgColor: '#FEF2F2' },
  { id: 'expert', emoji: '\uD83E\uDDE0', label: 'Expert', desc: 'Framework thinking, multi-step reasoning', color: '#D97706', bgColor: '#FFFBEB' },
];

/* ── Main Component ──────────────────────────────────────────── */

export default function PromptEnhancer() {
  const [prompt, setPrompt] = useState('');
  const [results, setResults] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(-1);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const resultsRef = useRef(null);

  const wordCount = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;

  const handleEnhance = () => {
    if (!prompt.trim()) return;
    const enhanced = STYLES.map(style => {
      const text = enhancePrompt(prompt, style.id);
      const score = calculateQualityScore(text);
      return { ...style, text, score };
    });
    setResults(enhanced);
    setCopiedIdx(-1);
    setTimeout(() => setShowStickyCta(true), 3000);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(-1), 2000);
  };

  const handleTweet = () => {
    const tweetText = encodeURIComponent('Just enhanced my AI prompt with @midastools \uD83D\uDD25 Try it free: https://midastools.co/prompt-enhancer');
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
  };

  const handleReset = () => {
    setPrompt('');
    setResults(null);
    setCopiedIdx(-1);
  };

  const title = 'Free AI Prompt Enhancer \u2014 Upgrade Any ChatGPT Prompt | Midas Tools';
  const description = 'Paste any basic AI prompt and instantly get 5 enhanced versions: Professional, Creative, Data-Driven, Viral, and Expert. 100% free, no signup, no API needed.';
  const url = 'https://midastools.co/prompt-enhancer';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompt enhancer, prompt improver, upgrade ChatGPT prompt, better AI prompts, prompt engineering tool, prompt optimizer, free AI tools 2026, prompt rewriter" />
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
          name: 'AI Prompt Enhancer',
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
            { '@type': 'Question', name: 'How does the AI Prompt Enhancer work?', acceptedAnswer: { '@type': 'Answer', text: 'The enhancer analyzes your prompt to detect its topic (writing, business, code, images, etc.), then applies 5 different enhancement templates. Each template adds a relevant expert role, context scaffolding, format instructions, and quality constraints tailored to your topic.' }},
            { '@type': 'Question', name: 'Is the Prompt Enhancer free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% free with no signup required. Enhance unlimited prompts instantly. Everything runs in your browser — we never store or see your prompts.' }},
            { '@type': 'Question', name: 'What are the 5 enhancement styles?', acceptedAnswer: { '@type': 'Answer', text: 'Professional (adds role, context, format instructions), Creative (adds vivid language and creative angles), Data-Driven (adds metrics and measurable outcomes), Viral/Marketing (adds persuasion and emotional hooks), and Expert (adds framework thinking and multi-step reasoning).' }},
            { '@type': 'Question', name: 'Does this work for any type of prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The enhancer automatically detects your topic — writing, images, business, code, education, or general — and tailors each enhancement accordingly. It works for ChatGPT, Claude, Gemini, and any AI tool.' }},
            { '@type': 'Question', name: 'Why should I enhance my AI prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Better prompts produce dramatically better AI output. Research shows that adding role assignment, context, and format instructions can improve response quality by 50-80%. The enhancer does this automatically in seconds.' }},
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

        .stats-bar {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin: 32px auto 0;
          padding: 16px 24px;
          background: #F9FAFB;
          border-radius: 100px;
          max-width: 700px;
        }
        .stat-item {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          white-space: nowrap;
        }

        .how-it-works {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px 24px;
        }
        .how-it-works h2 {
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
          padding: 32px 20px;
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
          background: #3B5FFF;
          color: white;
          border-radius: 50%;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .step-card h3 {
          font-size: 18px;
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

        .enhancer {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .enhancer-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px;
        }
        .enhancer-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .enhancer-textarea {
          width: 100%;
          min-height: 160px;
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
        .enhancer-textarea:focus {
          outline: none;
          border-color: #3B5FFF;
        }
        .enhancer-textarea::placeholder {
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
        .btn-enhance {
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
        .btn-enhance:hover:not(:disabled) {
          background: #2D4ADB;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(59, 95, 255, 0.3);
        }
        .btn-enhance:disabled {
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
        .results-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .results-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 8px;
        }
        .results-header p {
          font-size: 16px;
          color: #6B7280;
          margin: 0;
        }
        .result-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 24px;
          transition: border-color 0.2s;
        }
        .result-card:hover {
          border-color: #D1D5DB;
        }
        .result-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .result-style {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .result-emoji {
          font-size: 24px;
        }
        .result-label {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }
        .result-desc {
          font-size: 13px;
          color: #6B7280;
          margin-left: 34px;
          margin-bottom: 16px;
        }
        .score-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
        }
        .result-text {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 20px;
          font-size: 14px;
          line-height: 1.7;
          color: #374151;
          white-space: pre-wrap;
          word-wrap: break-word;
          max-height: 300px;
          overflow-y: auto;
        }
        .result-actions {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .btn-copy {
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
        .btn-copy:hover {
          background: #1F2937;
          transform: translateY(-1px);
        }
        .btn-copy.copied {
          background: #059669;
        }
        .btn-tweet {
          padding: 10px 20px;
          background: #EFF6FF;
          color: #1D9BF0;
          border: none;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-tweet:hover {
          background: #DBEAFE;
          transform: translateY(-1px);
        }

        .upsell {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 64px;
        }
        .upsell-card {
          background: linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%);
          border: 2px solid #C7D2FE;
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
        }
        .upsell-badge {
          display: inline-block;
          background: #3B5FFF;
          color: white;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .upsell-card h2 {
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .upsell-card > p {
          font-size: 17px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0 0 28px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
        }
        .upsell-btn {
          display: inline-block;
          background: #3B5FFF;
          color: white;
          padding: 16px 40px;
          border-radius: 100px;
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }
        .upsell-btn:hover {
          background: #2D4ADB;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 95, 255, 0.3);
        }

        .faq {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 64px;
        }
        .faq h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 32px;
        }
        .faq-item {
          border-bottom: 1px solid #E5E7EB;
          padding: 24px 0;
        }
        .faq-item:first-of-type {
          border-top: 1px solid #E5E7EB;
        }
        .faq-q {
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px;
        }
        .faq-a {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.7;
          margin: 0;
        }

        .related {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        .related h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 32px;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .related-card {
          display: block;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 24px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .related-card:hover {
          border-color: #3B5FFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .rc-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px;
        }
        .rc-desc {
          font-size: 13px;
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 32px;
          }
          .hero p {
            font-size: 17px;
          }
          .stats-bar {
            gap: 16px;
            border-radius: 16px;
            padding: 16px;
          }
          .stat-item {
            font-size: 13px;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .enhancer-card {
            padding: 20px;
          }
          .result-card {
            padding: 20px;
          }
          .result-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .result-desc {
            margin-left: 0;
          }
          .upsell-card {
            padding: 32px 24px;
          }
          .upsell-card h2 {
            font-size: 24px;
          }
          .related-grid {
            grid-template-columns: 1fr;
          }
          .btn-row {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="badge">Free Tool</div>
        <h1>AI Prompt Enhancer</h1>
        <p>
          Paste any basic prompt and instantly get <span className="highlight">5 enhanced versions</span> optimized
          for better AI output. No signup, no API, completely free.
        </p>
        <div className="stats-bar">
          <span className="stat-item">5 Enhancement Styles</span>
          <span className="stat-item">&bull; Instant Results</span>
          <span className="stat-item">&bull; 100% Free</span>
          <span className="stat-item">&bull; No Signup</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">1</div>
            <h3>Paste Your Prompt</h3>
            <p>Drop in any basic AI prompt you have been using. Even a single sentence works.</p>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <h3>Click Enhance</h3>
            <p>Our engine detects your topic and generates 5 expert-level versions instantly.</p>
          </div>
          <div className="step-card">
            <div className="step-num">3</div>
            <h3>Copy and Use</h3>
            <p>Pick the style you like, copy with one click, and paste into any AI tool.</p>
          </div>
        </div>
      </section>

      {/* Enhancer Tool */}
      <section className="enhancer">
        <div className="enhancer-card">
          <label className="enhancer-label" htmlFor="prompt-input">Your Basic Prompt</label>
          <textarea
            id="prompt-input"
            className="enhancer-textarea"
            placeholder="Paste your basic AI prompt here... e.g. &quot;Write a blog post about productivity tips&quot;"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleEnhance();
            }}
          />
          <div className="word-count">{wordCount} word{wordCount !== 1 ? 's' : ''}</div>
          <div className="btn-row">
            <button
              className="btn-enhance"
              onClick={handleEnhance}
              disabled={!prompt.trim()}
            >
              Enhance My Prompt
            </button>
            {results && (
              <button className="btn-reset" onClick={handleReset}>
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      {results && (
        <section className="results" ref={resultsRef}>
          <div className="results-header">
            <h2>Your Enhanced Prompts</h2>
            <p>5 versions tailored to different use cases. Copy whichever fits best.</p>
          </div>

          {results.map((r, i) => {
            const scoreLabel = getScoreLabel(r.score);
            const scoreColor = getScoreColor(r.score);
            return (
              <div key={r.id} className="result-card">
                <div className="result-top">
                  <div className="result-style">
                    <span className="result-emoji">{r.emoji}</span>
                    <span className="result-label">{r.label}</span>
                  </div>
                  <span
                    className="score-badge"
                    style={{ background: r.bgColor, color: scoreColor }}
                  >
                    {r.score}/100 &mdash; {scoreLabel}
                  </span>
                </div>
                <p className="result-desc">{r.desc}</p>
                <div className="result-text">{r.text}</div>
                <div className="result-actions">
                  <button
                    className={`btn-copy ${copiedIdx === i ? 'copied' : ''}`}
                    onClick={() => handleCopy(r.text, i)}
                  >
                    {copiedIdx === i ? '\u2713 Copied!' : 'Copy Prompt'}
                  </button>
                  <button className="btn-tweet" onClick={handleTweet}>
                    Share on Twitter
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* CTA Upsell */}
      <section className="upsell">
        <div className="upsell-card">
          <div className="upsell-badge">Skip the Enhancing</div>
          <h2>Want 500+ Pre-Written Expert Prompts?</h2>
          <p>
            Every prompt in our Mega Pack is already engineered with role assignment, context,
            format instructions, and quality constraints built in. Just copy, paste, and get results.
          </p>
          <a href={STRIPE_MEGA_PACK} className="upsell-btn">
            Get the AI Prompt Mega Pack
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {[
          { q: 'How does the AI Prompt Enhancer work?', a: 'The enhancer analyzes your prompt to detect its topic (writing, business, code, images, education), then applies 5 different enhancement templates. Each template wraps your prompt with a relevant expert role, context scaffolding, format instructions, and quality constraints tailored to your specific topic.' },
          { q: 'Is the Prompt Enhancer really free?', a: 'Yes, 100% free with no signup, no API key, and no limits. Enhance as many prompts as you want. Everything runs entirely in your browser — we never store, send, or see your prompts.' },
          { q: 'What makes these enhanced prompts better?', a: 'Enhanced prompts include four critical elements that most people miss: role assignment (telling the AI who to be), context (background information), format instructions (how to structure the output), and constraints (tone, length, quality guardrails). Research shows this can improve AI output quality by 50-80%.' },
          { q: 'Which enhancement style should I use?', a: 'It depends on your goal. Use Professional for business and work tasks. Creative for writing and brainstorming. Data-Driven for analysis and strategy. Viral for content and marketing. Expert for research and complex problem-solving.' },
          { q: 'Does this work with ChatGPT, Claude, and Gemini?', a: 'Yes. The enhanced prompts follow universal prompt engineering best practices that work across all major AI tools including ChatGPT, Claude, Gemini, Copilot, Perplexity, and any LLM-based system.' },
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
          <Link href="/prompt-scorer" className="related-card">
            <h3 className="rc-title">AI Prompt Scorer</h3>
            <p className="rc-desc">Score your prompts on a 0-100 scale with actionable improvement tips.</p>
          </Link>
          <Link href="/prompt-generator" className="related-card">
            <h3 className="rc-title">AI Prompt Generator</h3>
            <p className="rc-desc">Generate expert-level prompts for any use case. 8 categories, instant results.</p>
          </Link>
          <Link href="/tools" className="related-card">
            <h3 className="rc-title">All Free Tools</h3>
            <p className="rc-desc">Browse our complete collection of free AI tools for entrepreneurs.</p>
          </Link>
          <Link href="/blog/how-to-write-better-ai-prompts-2026" className="related-card">
            <h3 className="rc-title">Prompt Writing Guide</h3>
            <p className="rc-desc">Learn the CRAFT framework with 10 before-and-after examples that transform your prompts.</p>
          </Link>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      {showStickyCta && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 99,
          background: 'rgba(17,24,39,0.97)', backdropFilter: 'blur(8px)',
          padding: '12px 20px', display: 'flex', justifyContent: 'center',
          alignItems: 'center', gap: 16, flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <span style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>
            500+ expert prompts ready to copy & paste
          </span>
          <a href={STRIPE_MEGA_PACK} style={{
            background: '#3B5FFF', color: '#fff', padding: '8px 20px',
            borderRadius: 100, fontSize: 13, fontWeight: 700,
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}>
            Get Mega Pack — $29
          </a>
          <button onClick={() => setShowStickyCta(false)} style={{
            background: 'none', border: 'none', color: '#6B7280',
            cursor: 'pointer', fontSize: 18, padding: '0 4px', lineHeight: 1,
          }} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </Layout>
  );
}
