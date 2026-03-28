import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gw6qrdtgaODdZS4gw';
const STRIPE_BUNDLE = 'https://buy.stripe.com/8wM2abdtg5up7BueVa';

export default function AIPromptMistakes2026() {
  const title = '10 AI Prompt Mistakes That Are Ruining Your ChatGPT Output (2026)';
  const description = 'Most people make the same 10 prompt mistakes every day. Here\'s what they are, why they kill your AI output, and exactly how to fix each one — with before-and-after examples.';
  const url = 'https://www.midastools.co/blog/ai-prompt-mistakes-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
    author: { '@type': 'Organization', name: 'Midas Tools Team', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the most common AI prompt mistake?', acceptedAnswer: { '@type': 'Answer', text: 'The most common mistake is being too vague. Prompts like "write me a blog post" give the AI no direction on topic, audience, tone, length, or format. Adding even basic details like "Write a 1000-word blog post about AI marketing for B2B SaaS founders, with 5 actionable tips and a conversational tone" dramatically improves output quality.' }},
      { '@type': 'Question', name: 'Why does ChatGPT give generic answers?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT gives generic answers when prompts lack specificity. The most common causes are: no role assignment (not telling it WHO to be), no context (not explaining your situation), no format instructions (not specifying HOW to respond), and no constraints (not setting boundaries). Fix these four elements and output quality improves 50-80%.' }},
      { '@type': 'Question', name: 'How do I write better AI prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Use the RACE framework: Role (assign an expert persona), Action (state exactly what you need), Context (provide background details), and Examples (show what good output looks like). You can also use free tools like the AI Prompt Roaster at midastools.co/prompt-roaster to instantly find and fix mistakes in your prompts.' }},
      { '@type': 'Question', name: 'Does prompt length matter for AI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but quality matters more than raw length. A well-structured 50-word prompt with role, context, and format instructions will outperform a rambling 300-word prompt. The sweet spot for most tasks is 30-100 words with clear structure. Research shows that adding role assignment alone improves output quality by 20-30%.' }},
      { '@type': 'Question', name: 'Can I test my AI prompts before using them?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Free tools like the AI Prompt Roaster (midastools.co/prompt-roaster) analyze your prompts for 10 common mistakes and generate a fixed version. The AI Prompt Scorer (midastools.co/prompt-scorer) rates your prompt 1-100 on specificity, context, role, format, and constraints. Both tools run in your browser with no signup required.' }},
    ]
  };

  const s = {
    article: { maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' },
    badge: { display: 'inline-block', background: '#FEF2F2', color: '#DC2626', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 700, marginBottom: 16, letterSpacing: 0.5 },
    h1: { fontSize: 42, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 16 },
    meta: { fontSize: 15, color: '#6B7280', marginBottom: 40, lineHeight: 1.6 },
    h2: { fontSize: 28, fontWeight: 800, color: '#111827', marginTop: 48, marginBottom: 16, lineHeight: 1.2 },
    h3: { fontSize: 22, fontWeight: 700, color: '#111827', marginTop: 32, marginBottom: 12 },
    p: { fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 20 },
    toolCta: { display: 'block', textAlign: 'center', padding: '28px 32px', background: 'linear-gradient(135deg, #FEF2F2, #FFF7ED)', border: '2px solid #FECACA', borderRadius: 20, textDecoration: 'none', margin: '32px 0', transition: 'transform 0.15s' },
    sinCard: { background: '#F9FAFB', border: '1.5px solid #E5E7EB', borderRadius: 16, padding: '24px 28px', marginBottom: 24 },
    sinNum: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, background: '#DC2626', color: 'white', borderRadius: '50%', fontSize: 16, fontWeight: 800, marginRight: 12, flexShrink: 0 },
    sinTitle: { fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 12, display: 'flex', alignItems: 'center' },
    bad: { background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '14px 18px', marginBottom: 10, fontFamily: "'SF Mono', 'Fira Code', Consolas, monospace", fontSize: 14, color: '#991B1B', lineHeight: 1.6 },
    good: { background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 10, padding: '14px 18px', marginBottom: 16, fontFamily: "'SF Mono', 'Fira Code', Consolas, monospace", fontSize: 14, color: '#166534', lineHeight: 1.6 },
    label: { fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 },
    cta: { display: 'block', textAlign: 'center', padding: '48px 32px', background: 'linear-gradient(135deg, #EEF2FF, #F0FDF4)', border: '1.5px solid #E5E7EB', borderRadius: 20, margin: '48px 0' },
    ctaBtn: { display: 'inline-block', padding: '14px 36px', background: '#3B5FFF', color: 'white', borderRadius: 100, fontSize: 16, fontWeight: 700, textDecoration: 'none', marginTop: 16 },
    relatedGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, margin: '24px 0 40px' },
    relatedCard: { display: 'block', padding: '20px 24px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 14, textDecoration: 'none', transition: 'border-color 0.15s' },
  };

  const sins = [
    {
      emoji: '1',
      title: 'Being Criminally Vague',
      bad: 'Write me a blog post',
      good: 'Act as a content marketing expert. Write a 1200-word blog post about AI marketing automation for B2B SaaS founders. Include 5 actionable strategies with real-world examples. Use a conversational, authoritative tone. Format with H2 headings and bullet points.',
      why: 'Vague prompts force the AI to guess everything — topic depth, audience, tone, length, format. You get the "average" of all possible answers, which is mediocre by definition.',
      fix: 'Add WHO it\'s for, WHAT specifically you need, HOW LONG, and in WHAT FORMAT.',
    },
    {
      emoji: '2',
      title: 'Skipping the Role Assignment',
      bad: 'Give me advice on pricing my SaaS product',
      good: 'Act as a SaaS pricing consultant who has helped 50+ startups optimize their pricing strategy. You specialize in PLG (product-led growth) models. Give me advice on pricing my project management SaaS for teams of 5-50 people. Current price: $12/seat/month. We have 200 customers and 40% monthly churn.',
      why: 'Without a role, the AI responds as a generic assistant. With a role, it adopts the expertise, vocabulary, and thinking patterns of that specialist. Research shows role assignment alone improves output quality by 20-30%.',
      fix: 'Start every prompt with "Act as a [specific expert with specific experience]."',
    },
    {
      emoji: '3',
      title: 'Providing Zero Context',
      bad: 'Write a cold email for my business',
      good: 'I run a B2B email marketing agency targeting e-commerce brands doing $1-10M in revenue. Our main offer is a done-for-you email flow setup ($2,500 one-time). Our ideal customer is a DTC brand owner who knows email is important but doesn\'t have time to set it up. Write a cold email that focuses on the revenue they\'re leaving on the table.',
      why: 'Context is the #1 differentiator between generic and useful AI output. Without it, the AI literally cannot tailor its response to your situation.',
      fix: 'Include: your industry, target audience, goals, current situation, and any constraints.',
    },
    {
      emoji: '4',
      title: 'No Format Instructions',
      bad: 'Explain how SEO works',
      good: 'Explain how SEO works for someone launching their first website. Structure your response as:\n1. A 2-sentence TL;DR\n2. The 5 most important SEO factors (bullet list, one sentence each)\n3. A step-by-step action plan for the first 30 days (numbered list)\n4. 3 common mistakes to avoid\nKeep the total under 500 words.',
      why: 'Without format instructions, you get a wall of text. With them, you get structured, scannable output that\'s immediately useful.',
      fix: 'Specify: lists vs paragraphs, headings, word count, sections, and any specific structure.',
    },
    {
      emoji: '5',
      title: 'Never Including Examples',
      bad: 'Write subject lines for my email campaign',
      good: 'Write 10 email subject lines for a flash sale on AI prompt templates (normally $29, now $19). Target: entrepreneurs and content creators.\n\nHere are examples of subject lines that have worked well for us:\n- "The prompts that made me $14,718 in 3 weeks" (42% open rate)\n- "Stop writing bad AI prompts (here\'s the fix)" (38% open rate)\n\nMatch this style: curiosity-driven, specific numbers, conversational.',
      why: 'Examples are the most powerful prompt technique. They show the AI EXACTLY what "good" looks like, eliminating guesswork.',
      fix: 'Include 1-3 examples of ideal output. If you have performance data, share it.',
    },
    {
      emoji: '6',
      title: 'Setting No Constraints',
      bad: 'Create a social media strategy',
      good: 'Create a 30-day social media strategy for an AI tools company on Twitter/X. Constraints:\n- Budget: $0 (organic only)\n- Post frequency: 1 tweet per day + 5 replies\n- Content types: educational threads, tool demos, memes\n- Avoid: generic "AI will change everything" takes\n- Include: specific engagement tactics and a content calendar template',
      why: 'Without constraints, AI outputs are often too long, too broad, or off-target. Constraints focus the response and prevent wasted effort.',
      fix: 'Add word limits, budget, what to avoid, what to include, and any hard requirements.',
    },
    {
      emoji: '7',
      title: 'Writing a Google Search Instead of a Prompt',
      bad: 'best marketing tools 2026',
      good: 'Act as a digital marketing consultant. Recommend the 5 best marketing tools for a bootstrapped SaaS startup in 2026 with a budget under $200/month. For each tool, include: name, monthly cost, primary use case, one specific way to use it to generate leads, and one limitation. Format as a comparison table.',
      why: 'AI is not a search engine. It generates answers, it doesn\'t retrieve them. Treating it like Google gives you surface-level, SEO-optimized fluff.',
      fix: 'Transform search queries into structured requests with audience, format, and specificity.',
    },
    {
      emoji: '8',
      title: 'Being Overly Polite (at the Expense of Clarity)',
      bad: 'Hi there! I was wondering if you could maybe help me with something? I would really appreciate if you could possibly write something about marketing? Thank you so much in advance!',
      good: 'Write a 500-word guide on email marketing for e-commerce beginners. Include 3 essential automations to set up on day one. Use a friendly, jargon-free tone.',
      why: 'Politeness filler wastes tokens and adds zero information. The AI doesn\'t have feelings — it responds to instructions, not manners.',
      fix: 'Replace courtesy with clarity. Every word should carry information.',
    },
    {
      emoji: '9',
      title: 'Accepting the First Output',
      bad: '[Uses first response without iterating]',
      good: '"Good start, but the tone is too formal. Make it more conversational — like you\'re explaining this to a friend at a coffee shop. Also, the third point about analytics is too vague. Replace it with a specific example using Google Analytics 4."',
      why: 'First outputs are drafts, not finals. The AI gets dramatically better with feedback. Most people quit at the first response and miss 80% of the value.',
      fix: 'Always do 2-3 rounds of iteration. Be specific about what to change.',
    },
    {
      emoji: '10',
      title: 'Trying to Do Everything in One Prompt',
      bad: 'Write me a complete marketing plan with social media strategy, email sequences, blog content calendar, ad copy for Facebook and Google, influencer outreach templates, and a PR strategy for my new SaaS product',
      good: 'Let\'s build a marketing plan step by step. Start with Step 1:\n\nAct as a social media strategist. Create a 30-day Twitter/X content calendar for a new SaaS product launch. Include: daily post type (thread, poll, meme, case study), topic, and best posting time. Target audience: startup founders aged 25-40.',
      why: 'Asking for everything at once produces shallow output on every topic. Breaking it into steps produces deep, actionable output on each.',
      fix: 'Break complex requests into 3-5 focused prompts. Build on each response.',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI prompt mistakes, ChatGPT mistakes, bad AI prompts, prompt engineering errors, how to fix AI prompts, prompt roast, AI prompt tips 2026, ChatGPT prompt tips, common prompt errors" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <article style={s.article}>
        <div style={s.badge}>AI PROMPTING</div>
        <h1 style={s.h1}>{title}</h1>
        <p style={s.meta}>
          Updated March 2026 &middot; 12 min read &middot; By the Midas Tools team
        </p>

        <p style={s.p}>
          <strong>Here&apos;s a hard truth:</strong> 90% of people using ChatGPT, Claude, and Gemini are getting mediocre output — not because the AI is bad, but because their prompts are.
        </p>
        <p style={s.p}>
          After analyzing thousands of prompts (we built a <Link href="/prompt-roaster" style={{ color: '#DC2626', fontWeight: 600 }}>free tool that roasts your prompts</Link>), we&apos;ve identified the <strong>10 most common mistakes</strong> that kill your AI output. Each one has a fix you can apply in seconds.
        </p>
        <p style={s.p}>
          Ready to find out which sins <em>your</em> prompts are committing?
        </p>

        {/* Tool CTA */}
        <Link href="/prompt-roaster" style={s.toolCta}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>&#x1F525;</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#DC2626', marginBottom: 4 }}>Try the AI Prompt Roaster</div>
          <div style={{ fontSize: 15, color: '#6B7280' }}>Paste your prompt. Get brutally honest feedback. Then get a fixed version. 100% free.</div>
        </Link>

        <h2 style={s.h2}>The 10 Prompt Sins (With Before &amp; After Fixes)</h2>

        {sins.map((sin, i) => (
          <div key={i} style={s.sinCard}>
            <div style={s.sinTitle}>
              <span style={s.sinNum}>{sin.emoji}</span>
              {sin.title}
            </div>
            <p style={{ ...s.p, marginBottom: 16 }}>{sin.why}</p>
            <div style={{ ...s.label, color: '#DC2626' }}>BAD PROMPT</div>
            <div style={s.bad}>{sin.bad}</div>
            <div style={{ ...s.label, color: '#059669' }}>GOOD PROMPT</div>
            <div style={s.good}>{sin.good}</div>
            <p style={{ ...s.p, fontSize: 15, marginBottom: 0, fontWeight: 600 }}>
              The fix: {sin.fix}
            </p>
          </div>
        ))}

        {/* Mid-article CTA */}
        <div style={s.cta}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#3B5FFF', letterSpacing: 1, marginBottom: 8 }}>SKIP THE MISTAKES</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Get 1,000+ Expert Prompts Ready to Use</h2>
          <p style={{ fontSize: 16, color: '#6B7280', margin: '0 0 4px', lineHeight: 1.6 }}>
            Every prompt already has role, context, format, and constraints built in. No roasting required.
          </p>
          <a href={STRIPE_MEGA_PACK} style={s.ctaBtn}>Get the AI Prompt Mega Pack — $29</a>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 12 }}>Instant download. 30-day money-back guarantee.</p>
        </div>

        <h2 style={s.h2}>The Quick-Reference Cheat Sheet</h2>
        <p style={s.p}>
          Here&apos;s a framework you can use for every prompt. We call it <strong>RACE</strong>:
        </p>
        <div style={{ background: '#EEF2FF', border: '2px solid #C7D2FE', borderRadius: 16, padding: '28px 32px', marginBottom: 32 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#3B5FFF', marginBottom: 16 }}>The RACE Framework</div>
          <div style={{ fontSize: 16, color: '#374151', lineHeight: 2 }}>
            <strong>R</strong> — <strong>Role:</strong> &ldquo;Act as a [specific expert]...&rdquo;<br/>
            <strong>A</strong> — <strong>Action:</strong> &ldquo;[Exactly what you need done]...&rdquo;<br/>
            <strong>C</strong> — <strong>Context:</strong> &ldquo;[Your situation, audience, goals]...&rdquo;<br/>
            <strong>E</strong> — <strong>Examples:</strong> &ldquo;[Here&apos;s what good looks like]...&rdquo;
          </div>
        </div>

        <h2 style={s.h2}>Free Tools to Fix Your Prompts</h2>
        <p style={s.p}>
          We built a suite of free tools to make prompt engineering effortless:
        </p>
        <div style={s.relatedGrid}>
          <Link href="/prompt-roaster" style={s.relatedCard}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#DC2626', marginBottom: 4 }}>AI Prompt Roaster</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Get your prompt roasted + fixed</div>
          </Link>
          <Link href="/prompt-enhancer" style={s.relatedCard}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#3B5FFF', marginBottom: 4 }}>AI Prompt Enhancer</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>5 enhanced versions of any prompt</div>
          </Link>
          <Link href="/prompt-scorer" style={s.relatedCard}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#8B5CF6', marginBottom: 4 }}>AI Prompt Scorer</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Score your prompt 1-100</div>
          </Link>
          <Link href="/prompt-generator" style={s.relatedCard}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#059669', marginBottom: 4 }}>AI Prompt Generator</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Generate expert prompts from scratch</div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div style={s.cta}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>Stop Making Prompt Mistakes. Start Getting Results.</h2>
          <p style={{ fontSize: 16, color: '#6B7280', margin: '0 0 4px', lineHeight: 1.6 }}>
            Get 15 AI kits with 1,000+ expert prompts, templates, and workflows. All prompt sins pre-eliminated.
          </p>
          <a href={STRIPE_BUNDLE} style={s.ctaBtn}>Get All 15 AI Kits — $97 (81% off)</a>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 12 }}>$506 value. Instant download. 30-day money-back guarantee.</p>
        </div>

        {/* Related Articles */}
        <h2 style={s.h2}>Keep Reading</h2>
        <div style={s.relatedGrid}>
          <Link href="/blog/how-to-write-better-ai-prompts-2026" style={s.relatedCard}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>How to Write Better AI Prompts: Complete Guide</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>The CRAFT framework with 10 examples</div>
          </Link>
          <Link href="/blog/prompt-engineering-guide-2026" style={s.relatedCard}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Prompt Engineering Guide 2026</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Advanced techniques for power users</div>
          </Link>
          <Link href="/blog/best-ai-prompts-business-2026" style={s.relatedCard}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Best AI Prompts for Business</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Ready-to-use prompts for entrepreneurs</div>
          </Link>
          <Link href="/blog/chatgpt-tips-tricks-2026" style={s.relatedCard}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>ChatGPT Tips &amp; Tricks</div>
            <div style={{ fontSize: 14, color: '#6B7280' }}>Hidden features most people miss</div>
          </Link>
        </div>
      </article>
    </Layout>
  );
}
