import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

const CATEGORIES = [
  {
    id: 'sales-email',
    label: 'Sales Email',
    icon: '✉️',
    color: '#3B5FFF',
    fields: [
      { id: 'product', label: 'What are you selling?', placeholder: 'e.g. Online course on productivity' },
      { id: 'audience', label: 'Who is your ideal customer?', placeholder: 'e.g. Busy professionals aged 25-40' },
      { id: 'pain', label: 'What problem does it solve?', placeholder: 'e.g. They waste 3+ hours daily on unproductive tasks' },
    ],
    generate: (f) => `You are a direct-response copywriter who has written emails generating $10M+ in revenue. Write a sales email for:

Product: ${f.product}
Target customer: ${f.audience}
Main pain point: ${f.pain}

Requirements:
- Subject line that gets 40%+ open rate (use curiosity or specificity, never clickbait)
- Opening line that hooks in 3 seconds (no "I hope this finds you well")
- One clear story or proof point in the body
- Single CTA at the end
- Under 200 words total
- Write 3 versions: casual, professional, and urgent

Make each version feel like a real person wrote it. No corporate jargon.`,
  },
  {
    id: 'social-media',
    label: 'Social Media Post',
    icon: '📱',
    color: '#8B5CF6',
    fields: [
      { id: 'platform', label: 'Which platform?', placeholder: 'e.g. LinkedIn, Twitter/X, Instagram' },
      { id: 'topic', label: 'What\'s the topic?', placeholder: 'e.g. Why most startups fail in year 1' },
      { id: 'goal', label: 'What\'s the goal?', placeholder: 'e.g. Drive traffic to my website, get engagement' },
    ],
    generate: (f) => `You are a viral content strategist with 500K+ followers across platforms. Create a ${f.platform} post about:

Topic: ${f.topic}
Goal: ${f.goal}

Requirements:
- Hook in the first line that stops the scroll (pattern interrupt)
- Use the proven ${f.platform} format that gets maximum reach
- Include a clear CTA that drives ${f.goal}
- Add 3-5 relevant hashtags
- Write 3 variations: storytelling, data-driven, and controversial take

For each variation:
- First line must be so compelling they HAVE to read the rest
- Use short paragraphs and line breaks for readability
- End with engagement trigger (question, poll, or bold statement)

Make it feel authentic, not AI-generated. No generic motivational fluff.`,
  },
  {
    id: 'product-description',
    label: 'Product Description',
    icon: '🛒',
    color: '#059669',
    fields: [
      { id: 'product', label: 'What\'s the product?', placeholder: 'e.g. Wireless noise-canceling headphones' },
      { id: 'buyer', label: 'Who buys this?', placeholder: 'e.g. Remote workers who need focus' },
      { id: 'usp', label: 'What makes it different?', placeholder: 'e.g. 40-hour battery life, weighs only 180g' },
    ],
    generate: (f) => `You are a conversion copywriter for brands generating $100M+ in e-commerce. Write a product description that sells:

Product: ${f.product}
Target buyer: ${f.buyer}
Unique selling point: ${f.usp}

Write 2 versions:

VERSION A (Emotional): Lead with the transformation. How does the buyer's life change? Use sensory language. Create desire before features.

VERSION B (Logical): Lead with specs and proof points. Comparison angle. ROI calculation if applicable.

For both versions:
- Opening hook that stops the scroll (first 10 words matter most)
- Bullet points for scanability
- Place to insert social proof/reviews
- Urgency element (without being sleazy)
- Clear CTA
- 3 SEO keywords to target

Under 250 words each. Ready to copy-paste into any listing.`,
  },
  {
    id: 'blog-outline',
    label: 'Blog Post Outline',
    icon: '📝',
    color: '#D97706',
    fields: [
      { id: 'topic', label: 'Blog topic or keyword', placeholder: 'e.g. How to start a side hustle in 2026' },
      { id: 'audience', label: 'Who is reading this?', placeholder: 'e.g. 9-5 employees looking for extra income' },
      { id: 'angle', label: 'What\'s your unique angle?', placeholder: 'e.g. I built 3 side hustles while working full-time' },
    ],
    generate: (f) => `You are an SEO content strategist who has ranked 200+ articles on page 1 of Google. Create a comprehensive blog post outline:

Topic: ${f.topic}
Target reader: ${f.audience}
Unique angle: ${f.angle}

Provide:
1. SEO-optimized title (include primary keyword, under 60 chars)
2. Meta description (under 155 chars, includes CTA)
3. H2 and H3 structure (8-12 sections minimum)
4. For each section: 2-3 bullet points of what to cover
5. Introduction hook (first 2 sentences that make them keep reading)
6. 3 internal linking opportunities
7. FAQ section (5 questions with brief answers for featured snippet)
8. Suggested word count per section
9. CTA placement recommendations (where to insert offers naturally)

Target: 2,500-3,500 word article that ranks AND converts.
Include "People Also Ask" questions to target.`,
  },
  {
    id: 'cold-outreach',
    label: 'Cold Outreach',
    icon: '🎯',
    color: '#EC4899',
    fields: [
      { id: 'service', label: 'What service do you offer?', placeholder: 'e.g. Web design for restaurants' },
      { id: 'prospect', label: 'Who are you reaching out to?', placeholder: 'e.g. Restaurant owners in Austin, TX' },
      { id: 'proof', label: 'Your best result or credential', placeholder: 'e.g. Helped 3 restaurants increase online orders by 40%' },
    ],
    generate: (f) => `You are a B2B sales expert who books 15+ meetings per week from cold outreach. Write outreach messages for:

Service: ${f.service}
Prospect: ${f.prospect}
Proof point: ${f.proof}

Write 3 versions:
1. Cold EMAIL (under 100 words, no fluff, specific value prop)
2. LinkedIn DM (conversational, under 75 words, connection-first)
3. Follow-up message (for non-responders, different angle, under 60 words)

For each:
- First sentence must be about THEM, not you (research-based opener)
- Include specific, quantified value proposition
- One clear, low-friction CTA (not "hop on a call" — too much commitment)
- No corporate buzzwords, no "I'd love to pick your brain"
- Sound like a confident peer, not a desperate salesperson

These should feel like they were written specifically for that prospect.`,
  },
  {
    id: 'image-prompt',
    label: 'AI Image Prompt',
    icon: '🎨',
    color: '#F43F5E',
    fields: [
      { id: 'subject', label: 'What do you want to create?', placeholder: 'e.g. A cozy coffee shop interior' },
      { id: 'style', label: 'What style?', placeholder: 'e.g. Studio Ghibli anime, hyperrealistic, 3D render' },
      { id: 'use', label: 'What\'s it for?', placeholder: 'e.g. Instagram post, website hero image, print' },
    ],
    generate: (f) => `Create a detailed AI image generation prompt for:

Subject: ${f.subject}
Style: ${f.style}
Use case: ${f.use}

Write 3 prompt versions optimized for different tools:

1. DALL-E / ChatGPT version:
[Detailed natural language prompt with composition, lighting, mood, and style descriptors. Optimized for DALL-E 3's understanding of natural language.]

2. Midjourney version:
[Concise, keyword-rich prompt with Midjourney-specific parameters like --ar, --v 6, --style raw. Include lighting, composition, and mood keywords separated by commas.]

3. Stable Diffusion version:
[Prompt with positive and negative prompts. Include quality boosters like "masterpiece, best quality, highly detailed." Add suggested cfg_scale and steps.]

For each version:
- Include specific camera angle and lighting direction
- Specify aspect ratio for ${f.use}
- Add 2 style variations (e.g., day/night, warm/cool)
- Include negative prompt suggestions to avoid common issues`,
  },
  {
    id: 'video-script',
    label: 'Video Script',
    icon: '🎬',
    color: '#0EA5E9',
    fields: [
      { id: 'type', label: 'What type of video?', placeholder: 'e.g. YouTube tutorial, TikTok, product demo' },
      { id: 'topic', label: 'What\'s the topic?', placeholder: 'e.g. 5 AI tools that replaced my team' },
      { id: 'length', label: 'Target length', placeholder: 'e.g. 60 seconds, 5 minutes, 10 minutes' },
    ],
    generate: (f) => `You are a viral video creator with 10M+ views across platforms. Write a ${f.type} script:

Topic: ${f.topic}
Target length: ${f.length}

Structure:
1. HOOK (first 3 seconds): Pattern interrupt that makes them STOP scrolling. This is the most important part.
2. SETUP (next 10 seconds): Why they should care. Create a knowledge gap.
3. BODY: Main content with clear transitions between points
4. CTA: What you want them to do (subscribe, comment, visit link)

Requirements:
- Write the EXACT words to say (not bullet points or outlines)
- Include [VISUAL] cues for what to show on screen
- Mark the HOOK, RETENTION BUMP (2-3 re-hooks throughout), and CTA clearly
- Add suggested B-roll or visual ideas in brackets
- Include 3 title options optimized for ${f.type} algorithm
- Thumbnail concept suggestion

Tone: Conversational, energetic, like talking to a smart friend. No "Hey guys!" openers.`,
  },
  {
    id: 'business-plan',
    label: 'Business Strategy',
    icon: '📊',
    color: '#6366F1',
    fields: [
      { id: 'business', label: 'Describe your business', placeholder: 'e.g. Online tutoring platform for high school math' },
      { id: 'revenue', label: 'Current revenue (monthly)', placeholder: 'e.g. $2,000/month, or pre-revenue' },
      { id: 'challenge', label: 'Biggest challenge right now', placeholder: 'e.g. Can\'t get past 50 paying students' },
    ],
    generate: (f) => `Act as a McKinsey senior partner with 20 years of experience. Analyze this business:

Business: ${f.business}
Current revenue: ${f.revenue}
Biggest challenge: ${f.challenge}

Provide:
1. DIAGNOSIS: What is actually causing this problem? (Look beyond the obvious. Challenge my assumptions.)
2. THREE STRATEGIC OPTIONS: For each, give the approach, expected outcome, timeline, and risk level (High/Medium/Low)
3. RECOMMENDATION: Which option and why?
4. FIRST 3 MOVES: Exact actions to take THIS WEEK
5. 90-DAY ROADMAP: Monthly milestones with specific metrics to hit
6. METRICS TO TRACK: How I'll know if this is working (with specific numbers)

Be direct and brutally honest. If my approach is wrong, say so. Don't sugarcoat.
Frame everything in terms of ROI and time-to-value.`,
  },
];

export default function PromptGenerator() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fields, setFields] = useState({});
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [promptCount, setPromptCount] = useState(0);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setFields({});
    setGeneratedPrompt('');
    setCopied(false);
  };

  const handleFieldChange = (fieldId, value) => {
    setFields(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleGenerate = () => {
    if (!selectedCategory) return;
    const cat = CATEGORIES.find(c => c.id === selectedCategory);
    const allFilled = cat.fields.every(f => fields[f.id]?.trim());
    if (!allFilled) return;
    setGeneratedPrompt(cat.generate(fields));
    setPromptCount(prev => prev + 1);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setFields({});
    setGeneratedPrompt('');
    setCopied(false);
  };

  const currentCat = CATEGORIES.find(c => c.id === selectedCategory);
  const allFieldsFilled = currentCat ? currentCat.fields.every(f => fields[f.id]?.trim()) : false;

  const title = 'Free AI Prompt Generator — Create Perfect Prompts Instantly';
  const description = 'Generate custom AI prompts for sales emails, social media, product descriptions, blog outlines, cold outreach, image generation, video scripts, and business strategy. Free, instant, no signup required.';
  const url = 'https://www.midastools.co/prompt-generator';

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompt generator, free prompt generator, ChatGPT prompt maker, AI prompt builder, custom AI prompts, prompt engineering tool, free AI tools 2026" />
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
          name: 'AI Prompt Generator',
          description: description,
          url: url,
          applicationCategory: 'Productivity',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Is the AI Prompt Generator really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% free with no signup required. Generate unlimited custom prompts for any use case.' }},
            { '@type': 'Question', name: 'What AI tools do the prompts work with?', acceptedAnswer: { '@type': 'Answer', text: 'All generated prompts work with ChatGPT, Claude, Gemini, Copilot, Midjourney, DALL-E, Stable Diffusion, and any other AI tool.' }},
            { '@type': 'Question', name: 'How is this different from just asking ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'Our generator uses battle-tested prompt engineering frameworks that produce significantly better results. Each template is optimized by professional prompt engineers for maximum output quality.' }},
            { '@type': 'Question', name: 'Can I use the generated prompts commercially?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Use them for your business, clients, products — no restrictions.' }},
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
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
        }
        .stat-label {
          font-size: 13px;
          color: #6B7280;
        }

        .categories {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 48px;
        }
        .categories h2 {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px;
        }
        .categories .subtitle {
          text-align: center;
          color: #6B7280;
          margin: 0 0 32px;
          font-size: 16px;
        }
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .cat-card {
          padding: 20px 16px;
          border-radius: 12px;
          border: 2px solid #E5E7EB;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }
        .cat-card:hover {
          border-color: #3B5FFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 95, 255, 0.15);
        }
        .cat-card.active {
          border-color: #3B5FFF;
          background: #EEF2FF;
        }
        .cat-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }
        .cat-label {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
        }

        .generator {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 64px;
        }
        .gen-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          padding: 32px;
        }
        .gen-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .gen-icon {
          font-size: 28px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        .gen-title {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        .gen-subtitle {
          font-size: 14px;
          color: #6B7280;
          margin: 2px 0 0;
        }
        .field-group {
          margin-bottom: 20px;
        }
        .field-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }
        .field-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #E5E7EB;
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          color: #111827;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .field-input:focus {
          outline: none;
          border-color: #3B5FFF;
        }
        .field-input::placeholder {
          color: #9CA3AF;
        }
        .btn-row {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .btn-generate {
          flex: 1;
          padding: 14px 24px;
          background: #3B5FFF;
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-generate:hover:not(:disabled) {
          background: #2D4ADB;
          transform: translateY(-1px);
        }
        .btn-generate:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-reset {
          padding: 14px 24px;
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

        .output {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 2px solid #E5E7EB;
        }
        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .output-label {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
        }
        .btn-copy {
          padding: 8px 20px;
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
          background: #374151;
        }
        .btn-copy.copied {
          background: #059669;
        }
        .prompt-output {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 20px;
          white-space: pre-wrap;
          font-size: 14px;
          line-height: 1.7;
          color: #374151;
          max-height: 500px;
          overflow-y: auto;
        }
        .tip {
          margin-top: 16px;
          padding: 12px 16px;
          background: #FEF3C7;
          border-radius: 10px;
          font-size: 14px;
          color: #92400E;
        }
        .tip strong {
          color: #78350F;
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
        .upsell-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 600px;
          margin: 0 auto 24px;
        }
        .upsell-option {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 24px 20px;
          text-decoration: none;
          color: white;
          transition: all 0.2s;
        }
        .upsell-option:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }
        .upsell-option .price {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .upsell-option .name {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .upsell-option .desc {
          font-size: 13px;
          color: #9CA3AF;
        }
        .upsell-option.featured {
          border-color: #3B5FFF;
          background: rgba(59, 95, 255, 0.15);
        }
        .upsell-option .tag {
          display: inline-block;
          background: #3B5FFF;
          color: white;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
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
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
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
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
          .gen-card { padding: 20px; }
          .upsell-card { padding: 32px 20px; }
          .upsell-options { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .stats-bar { gap: 20px; }
          .btn-row { flex-direction: column; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="badge">100% Free — No Signup Required</div>
        <h1>AI Prompt <span className="highlight">Generator</span></h1>
        <p>
          Create expert-level prompts for ChatGPT, Claude, Gemini, Midjourney, and more.
          Pick a category, fill in your details, get a <span className="highlight">copy-paste ready prompt</span> in seconds.
        </p>
        <div className="stats-bar">
          <div className="stat">
            <div className="stat-number">8</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat">
            <div className="stat-number">24+</div>
            <div className="stat-label">Prompt Templates</div>
          </div>
          <div className="stat">
            <div className="stat-number">Free</div>
            <div className="stat-label">Forever</div>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="categories">
        <h2>What do you need a prompt for?</h2>
        <p className="subtitle">Pick a category to get started</p>
        <div className="cat-grid">
          {CATEGORIES.map(cat => (
            <div
              key={cat.id}
              className={`cat-card ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat.id)}
            >
              <div className="cat-icon">{cat.icon}</div>
              <div className="cat-label">{cat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Generator Form */}
      {currentCat && (
        <section className="generator">
          <div className="gen-card">
            <div className="gen-header">
              <div className="gen-icon" style={{ background: currentCat.color + '15', color: currentCat.color }}>
                {currentCat.icon}
              </div>
              <div>
                <h3 className="gen-title">{currentCat.label} Prompt</h3>
                <p className="gen-subtitle">Fill in the details below for a customized prompt</p>
              </div>
            </div>

            {currentCat.fields.map(field => (
              <div key={field.id} className="field-group">
                <label className="field-label">{field.label}</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder={field.placeholder}
                  value={fields[field.id] || ''}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                />
              </div>
            ))}

            <div className="btn-row">
              <button
                className="btn-generate"
                onClick={handleGenerate}
                disabled={!allFieldsFilled}
              >
                Generate Prompt {currentCat.icon}
              </button>
              <button className="btn-reset" onClick={handleReset}>
                Start Over
              </button>
            </div>

            {/* Output */}
            {generatedPrompt && (
              <div className="output">
                <div className="output-header">
                  <span className="output-label">Your Custom Prompt</span>
                  <button className={`btn-copy ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy to Clipboard'}
                  </button>
                </div>
                <div className="prompt-output">{generatedPrompt}</div>
                <div className="tip">
                  <strong>Pro tip:</strong> Paste this prompt into ChatGPT, Claude, or Gemini. For even better results, add specific examples from your business. Want 200+ pre-built expert prompts? Check out our <Link href="/ai-prompt-mega-pack" style={{ color: '#92400E', fontWeight: 700 }}>AI Prompt Mega Pack</Link>.
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Upsell */}
      <section className="upsell">
        <div className="upsell-card">
          <div className="upsell-badge">Want More Power?</div>
          <h2>Get 1,000+ Expert Prompts</h2>
          <p>
            This generator creates great starter prompts. Our premium packs include advanced frameworks,
            industry-specific templates, and prompts refined by professionals. Copy, paste, profit.
          </p>
          <div className="upsell-options">
            <a href={STRIPE_MEGA_PACK} className="upsell-option" target="_blank" rel="noopener noreferrer">
              <div className="price">$29</div>
              <div className="name">AI Prompt Mega Pack</div>
              <div className="desc">200+ prompts for every business task</div>
            </a>
            <a href={STRIPE_BUNDLE} className="upsell-option featured" target="_blank" rel="noopener noreferrer">
              <div className="tag">Best Value — 79% Off</div>
              <div className="price">$97</div>
              <div className="name">All 13 Kits Bundle</div>
              <div className="desc">1,000+ prompts + templates. $467 value.</div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {[
          { q: 'Is the AI Prompt Generator really free?', a: 'Yes, 100% free with no signup required. Generate as many custom prompts as you want. No limits, no catches.' },
          { q: 'What AI tools do the prompts work with?', a: 'All generated prompts work with ChatGPT (GPT-4), Claude, Gemini, Copilot, Midjourney, DALL-E, Stable Diffusion, Sora, Runway, and any other AI tool that accepts text prompts.' },
          { q: 'How is this different from just asking ChatGPT?', a: 'Our generator uses battle-tested prompt engineering frameworks developed by professionals. The structure, specificity, and role-setting produce significantly better outputs than generic questions.' },
          { q: 'Can I use the generated prompts for my business?', a: 'Absolutely. Use them for clients, products, marketing, content — no restrictions. They\'re yours.' },
          { q: 'Why would I buy the Mega Pack if this is free?', a: 'This generator creates great starting prompts. The Mega Pack includes 200+ advanced prompts with multiple variations, industry-specific frameworks, and prompt chains that build on each other for complex workflows.' },
        ].map((item, i) => (
          <div key={i} className="faq-item">
            <h3 className="faq-q">{item.q}</h3>
            <p className="faq-a">{item.a}</p>
          </div>
        ))}
      </section>

      {/* Cross-promote other free tools */}
      <section className="related" style={{ paddingBottom: 0 }}>
        <h2>More Free AI Tools</h2>
        <div className="related-grid">
          <Link href="/business-name-generator" className="related-card" style={{ borderColor: 'rgba(59,95,255,0.2)', background: 'rgba(59,95,255,0.03)' }}>
            <div style={{ fontSize: 10, fontWeight: 700, background: '#FEF3C7', color: '#D97706', padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 8 }}>NEW</div>
            <h3 className="rc-title">AI Business Name Generator</h3>
            <p className="rc-desc">Get 20 brandable business names instantly. 16 industries, 6 styles.</p>
          </Link>
          <Link href="/hashtag-generator" className="related-card" style={{ borderColor: 'rgba(59,95,255,0.2)', background: 'rgba(59,95,255,0.03)' }}>
            <div style={{ fontSize: 10, fontWeight: 700, background: '#FEF3C7', color: '#D97706', padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 8 }}>NEW</div>
            <h3 className="rc-title">AI Hashtag Generator</h3>
            <p className="rc-desc">Generate optimized hashtags for Instagram, TikTok & more. 22 niches.</p>
          </Link>
          <Link href="/tools" className="related-card">
            <h3 className="rc-title">All Free Tools</h3>
            <p className="rc-desc">Browse our complete collection of free AI tools</p>
          </Link>
        </div>
      </section>

      {/* Related Content */}
      <section className="related">
        <h2>Learn More About AI Prompts</h2>
        <div className="related-grid">
          <Link href="/blog/prompt-engineering-guide-2026" className="related-card">
            <h3 className="rc-title">Prompt Engineering Guide 2026</h3>
            <p className="rc-desc">Master the fundamentals of writing effective AI prompts</p>
          </Link>
          <Link href="/blog/chatgpt-image-prompts-2026" className="related-card">
            <h3 className="rc-title">50 Viral ChatGPT Image Prompts</h3>
            <p className="rc-desc">The best image generation prompts going viral right now</p>
          </Link>
          <Link href="/blog/ai-video-prompts-sora-runway-2026" className="related-card">
            <h3 className="rc-title">Best AI Video Prompts 2026</h3>
            <p className="rc-desc">Create stunning videos with Sora, Runway, and Pika</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
