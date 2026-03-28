import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/4gw6qrdtgaODdZS4gw';

export default function HowToWriteBetterAIPrompts2026() {
  const title = 'How to Write Better AI Prompts: The Complete 2026 Guide (With Free Tools)';
  const description = 'Stop getting mediocre AI output. Learn the CRAFT framework, see 10 before-and-after prompt examples, and use free tools to instantly improve your ChatGPT, Claude, and Gemini prompts.';
  const url = 'https://www.midastools.co/blog/how-to-write-better-ai-prompts-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    author: { '@type': 'Organization', name: 'Midas Tools Team', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best way to write AI prompts in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best way to write AI prompts is to use a structured framework like CRAFT (Context, Role, Action, Format, Tone). Instead of vague one-line requests, provide the AI with background context, assign it a specific role, clearly state the action you need, specify the output format, and define the tone. This approach consistently produces professional-grade results from ChatGPT, Claude, Gemini, and other AI tools.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why do my ChatGPT prompts give bad results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most ChatGPT prompts fail because they are too vague, lack context, or do not specify the desired output format. For example, asking "write me an email" gives generic output, while providing the recipient, purpose, tone, and format produces a targeted result. The five most common mistakes are: being too vague, skipping context, not assigning a role, forgetting to specify format, and accepting the first output without iterating.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the CRAFT framework for AI prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CRAFT stands for Context, Role, Action, Format, and Tone. It is a prompt engineering framework that ensures you include all five elements needed for high-quality AI output. Context provides background information. Role tells the AI who to be. Action specifies what you need done. Format defines how the output should be structured. Tone sets the voice and style. Using all five elements typically improves output quality by 3-5x compared to basic prompts.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there free tools to help me write better AI prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Midas Tools offers several free prompt tools: the Prompt Enhancer automatically upgrades any basic prompt into an expert-level one using proven frameworks. The Prompt Scorer analyzes your prompts and gives a quality score with specific improvement suggestions. The Prompt Generator helps you build custom prompts from scratch for any use case. All three are free to use with no signup required.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long should an AI prompt be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no ideal length, but effective prompts are typically 3-8 sentences. The key is specificity, not length. A focused 4-sentence prompt using the CRAFT framework will outperform a rambling 20-sentence prompt every time. Include only the information the AI needs: context, role, the specific task, output format, and tone. For complex tasks, break them into multiple sequential prompts rather than one massive prompt.'
        }
      }
    ]
  };

  const s = {
    section: { maxWidth: '720px', margin: '0 auto', padding: '0 24px' },
    h2: { fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, letterSpacing: '-0.5px', margin: '48px 0 16px', color: 'var(--text)' },
    h3: { fontSize: '18px', fontWeight: 700, margin: '32px 0 8px', color: 'var(--text)' },
    p: { fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: '0 0 16px' },
    prompt: {
      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px',
      padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap',
      lineHeight: '1.6', color: 'var(--text)', margin: '12px 0 24px', overflowX: 'auto',
    },
    bad: {
      background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '8px',
      padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap',
      lineHeight: '1.6', color: 'var(--text)', margin: '12px 0 12px', overflowX: 'auto',
    },
    good: {
      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px',
      padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap',
      lineHeight: '1.6', color: 'var(--text)', margin: '12px 0 24px', overflowX: 'auto',
    },
    tip: {
      background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)',
      borderRadius: '12px', padding: '20px', margin: '16px 0 24px',
    },
    label: {
      fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px',
      marginBottom: '6px',
    },
    cta: {
      background: 'var(--text)', borderRadius: '16px', padding: '32px',
      textAlign: 'center', margin: '48px 0', color: '#FFFFFF',
    },
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="how to write better ai prompts, improve chatgpt prompts, ai prompt tips 2026, prompt engineering for beginners, CRAFT framework prompts, better ai prompts, chatgpt prompt examples, prompt writing guide" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.midastools.co/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <article style={{ paddingTop: '48px', paddingBottom: '64px' }}>
        <div style={s.section}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '32px' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            How to Write Better AI Prompts
          </div>

          {/* Hero */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--text)' }}>
            How to Write Better AI Prompts: The Complete 2026 Guide
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            Most people get about 30% of what AI can actually do — because their prompts are vague, generic, and missing critical details. This guide gives you a simple framework and 10 real before-and-after examples that fix that immediately.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '40px' }}>
            By Midas Tools Team · March 27, 2026 · 12 min read
          </p>

          {/* Table of Contents */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>In This Guide</p>
            <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: 2, color: 'var(--accent)' }}>
              <li><a href="#craft" style={{ color: 'var(--accent)', textDecoration: 'none' }}>The CRAFT Framework</a></li>
              <li><a href="#examples" style={{ color: 'var(--accent)', textDecoration: 'none' }}>10 Before-and-After Prompt Examples</a></li>
              <li><a href="#tools" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Free Tools to Improve Your Prompts</a></li>
              <li><a href="#mistakes" style={{ color: 'var(--accent)', textDecoration: 'none' }}>5 Common Prompt Mistakes</a></li>
              <li><a href="#faq" style={{ color: 'var(--accent)', textDecoration: 'none' }}>FAQ</a></li>
            </ol>
          </div>

          {/* Intro */}
          <p style={s.p}>
            Here is the uncomfortable truth: the AI is not the problem. <strong>Your prompts are.</strong>
          </p>
          <p style={s.p}>
            ChatGPT, Claude, Gemini — they are all capable of producing genuinely brilliant output. Marketing copy that converts. Business plans with real financials. Emails that get replies. Resume summaries that land interviews. Product descriptions that sell. But only if you tell them exactly what you need.
          </p>
          <p style={s.p}>
            Most people type a single sentence into ChatGPT, get a mediocre response, and conclude that AI is overhyped. That is like typing "food" into Google and complaining you did not find a good restaurant. The quality of your input determines the quality of your output — always.
          </p>
          <p style={s.p}>
            The difference between a bad prompt and a great prompt is not talent or technical skill. It is a simple framework that takes 30 seconds to apply. We call it <strong>CRAFT</strong>, and once you learn it, you will never write a lazy prompt again.
          </p>
          <p style={s.p}>
            If you want the full deep dive into prompt engineering concepts, check out{' '}
            <Link href="/blog/prompt-engineering-guide-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>our full prompt engineering guide</Link>.
            This post is the practical, example-heavy companion — focused on making your prompts better <em>today</em>.
          </p>

          {/* Section: The CRAFT Framework */}
          <h2 id="craft" style={s.h2}>The CRAFT Framework: 5 Elements of a Perfect Prompt</h2>
          <p style={s.p}>
            Every great AI prompt contains five elements. Miss one and your output quality drops. Include all five and you consistently get professional-grade results. Here is the framework:
          </p>

          <div style={s.tip}>
            <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>The CRAFT Framework</p>
            <p style={{ ...s.p, margin: '0 0 8px' }}><strong>C — Context:</strong> Background information the AI needs. Who is the audience? What is the situation? What has already happened?</p>
            <p style={{ ...s.p, margin: '0 0 8px' }}><strong>R — Role:</strong> Who should the AI be? A senior copywriter? A CFO? A career coach? The role shapes the expertise and perspective.</p>
            <p style={{ ...s.p, margin: '0 0 8px' }}><strong>A — Action:</strong> The specific task. Not "write something about email" but "write a 3-paragraph cold email that books a discovery call."</p>
            <p style={{ ...s.p, margin: '0 0 8px' }}><strong>F — Format:</strong> How should the output be structured? Bullet points, numbered list, table, email format, JSON, markdown?</p>
            <p style={{ ...s.p, margin: 0 }}><strong>T — Tone:</strong> The voice and style. Professional, casual, urgent, empathetic, witty, authoritative?</p>
          </div>

          <p style={s.p}>
            Let us break down why each element matters so much.
          </p>

          <h3 style={s.h3}>A Quick Example</h3>
          <p style={s.p}>
            Here is the CRAFT framework applied to a simple request:
          </p>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Without CRAFT</p>
          <div style={s.bad}>Write a tagline for my business.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>With CRAFT</p>
          <div style={s.good}>{`Context: I run a meal prep delivery service for busy parents in the Dallas-Fort Worth area. Average customer: dual-income household, 2 kids, orders weekly.
Role: You are a brand strategist who has named and positioned 30+ DTC food brands.
Action: Write 10 tagline options that communicate convenience + real nutrition (not processed food).
Format: Numbered list, each tagline under 8 words.
Tone: Warm, modern, trustworthy. Think Sweetgreen, not McDonald's.`}</div>
          <p style={s.p}>
            The first prompt gives you "Delicious Meals, Delivered Fresh" — generic filler that could apply to any food company. The CRAFT prompt gives you 10 targeted options that sound like a real brand strategist wrote them. Same AI, radically different results.
          </p>
          <p style={s.p}>
            Now let us break down why each element matters.
          </p>

          <h3 style={s.h3}>Why Context Changes Everything</h3>
          <p style={s.p}>
            Context is the single most-skipped element, and it is also the one that makes the biggest difference. When you tell the AI "write a marketing email," it has to guess your industry, audience, product, and goals. It guesses wrong every time.
          </p>
          <p style={s.p}>
            When you add context — "I sell premium dog food to health-conscious millennial pet owners, and this email is going to customers who bought once but haven't reordered in 60 days" — the AI suddenly knows the audience, the product, the situation, and the implied goal (reactivation). The output goes from generic to eerily targeted.
          </p>

          <h3 style={s.h3}>Why Role Assignment Is So Powerful</h3>
          <p style={s.p}>
            AI models are trained on billions of words written by millions of different people — marketers, lawyers, doctors, comedians, professors, CEOs. When you assign a role, you are telling the model which subset of its training data to draw from. "You are a senior tax attorney" activates legal reasoning and cautious language. "You are a stand-up comedian" activates humor and timing patterns. Same model, radically different output.
          </p>
          <p style={s.p}>
            The specificity of the role matters. "You are a writer" is weak. "You are a direct-response copywriter who has written for Agora Financial and generates $50M+ in annual revenue from long-form sales letters" is strong. The more specific the role, the more the AI narrows its output to match that expertise.
          </p>

          <h3 style={s.h3}>Why Format Prevents Rewrites</h3>
          <p style={s.p}>
            Without format instructions, you will spend time reformatting AI output into the structure you actually needed. That is wasted time. If you need a table, say "output as a table." If you need an email, say "format as an email with subject line." If you need bullet points with bolded headers, say exactly that. The AI follows formatting instructions with near-perfect accuracy — but only when you provide them.
          </p>

          <h3 style={s.h3}>Who This Works For</h3>
          <p style={s.p}>
            The CRAFT framework works with every major AI tool: ChatGPT (GPT-4o), Claude, Gemini, Copilot, and Perplexity for text. Midjourney, DALL-E, and Stable Diffusion for images. It even works for AI coding assistants and data analysis tools. The underlying principle is universal — AI models produce better output when given specific, structured instructions.
          </p>
          <p style={s.p}>
            Whether you are a marketer writing ad copy, a founder building a pitch deck, a freelancer delivering client work, or a student writing a research paper — the CRAFT framework applies. It is not a ChatGPT-specific trick. It is a communication framework for working with AI effectively.
          </p>

          <p style={s.p}>
            That is the framework. Five elements, each doing a specific job. Now let us see it in action with 10 real examples across different use cases.
          </p>

          {/* Section: 10 Before-and-After Examples */}
          <h2 id="examples" style={s.h2}>10 Before-and-After Prompt Examples</h2>
          <p style={s.p}>
            Each example below shows a typical prompt (what most people write) and a CRAFT-upgraded version. The difference in output quality is dramatic.
          </p>

          {/* Example 1: Cold Email */}
          <h3 style={s.h3}>1. Writing a Cold Email</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Write a cold email to sell my product.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a B2B sales copywriter who specializes in cold outreach with 30%+ open rates.

Context: I run a SaaS tool that automates invoice processing for mid-size accounting firms (50-200 employees). Our average customer saves 12 hours per week. I'm reaching out to CFOs who currently use manual spreadsheet workflows.

Action: Write a cold email that gets a reply. The goal is to book a 15-minute discovery call. Use a pain-point opening, one specific stat, and a low-friction CTA.

Format: Subject line + email body. Keep the body under 120 words. No fluff.

Tone: Direct, confident, peer-to-peer. Not salesy or desperate.`}</div>
          <p style={s.p}>
            The bad prompt gives you a generic template. The CRAFT prompt gives you a targeted email a real CFO would actually reply to — because the AI knows the audience, the product, the goal, and the constraints.
          </p>

          <p style={s.p}>
            Notice how the CRAFT prompt is not longer for the sake of being longer. Every sentence gives the AI information it needs to produce better output. The role sets the expertise, the context gives the specifics, the action defines the goal, the format sets constraints, and the tone shapes the voice.
          </p>

          {/* Example 2: Social Media Content */}
          <h3 style={s.h3}>2. Creating Social Media Content</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Write some Instagram captions for my business.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a social media strategist who grows brands on Instagram using hook-driven content.

Context: I own a plant-based skincare brand targeting women aged 25-40. Our best-selling product is a $34 vitamin C serum. Our brand voice is clean, warm, and science-backed. We post 5x/week mixing education, social proof, and product highlights.

Action: Write 5 Instagram captions — 2 educational (ingredient benefits), 2 social proof (customer transformation), 1 product highlight. Each caption should have a scroll-stopping first line.

Format: Number each caption. Include the hook line, body (under 150 words), and 3-5 relevant hashtags.

Tone: Warm, confident, conversational. Like a knowledgeable friend, not a lab coat.`}</div>

          <p style={s.p}>
            The bad prompt would give you 5 identical-sounding captions with no brand personality. The CRAFT prompt produces varied content types (education, social proof, product highlight) in a consistent brand voice — exactly what a social media manager would create.
          </p>

          {/* Example 3: Product Descriptions */}
          <h3 style={s.h3}>3. Generating Product Descriptions</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Write a product description for my headphones.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are an e-commerce copywriter who writes product descriptions that convert browsers into buyers.

Context: Product: AeroSound Pro wireless noise-canceling headphones. Price: $179. Key features: 40-hour battery, hybrid ANC, spatial audio, 280g weight, memory foam ear cushions. Target buyer: remote workers and commuters aged 25-45 who want focus without fatigue. We compete with Sony WH-1000XM5 and AirPods Max.

Action: Write a product description for our Shopify product page. Lead with the primary benefit (uninterrupted focus), not the features. Weave features into benefit-driven sentences. End with a clear reason to buy now.

Format: Headline (under 10 words) + 3 short paragraphs + bullet list of 5 key specs.

Tone: Premium but approachable. Think Apple, not Bose.`}</div>
          <p style={s.p}>
            For more e-commerce AI prompt examples, see our guide on{' '}
            <Link href="/blog/best-ai-prompts-business-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>best prompts for business</Link>.
          </p>

          <p style={s.p}>
            The key detail here is naming a competitor ("We compete with Sony WH-1000XM5 and AirPods Max"). This forces the AI to position your product against known alternatives instead of writing in a vacuum. Context about competition dramatically improves marketing copy.
          </p>

          {/* Example 4: Business Plan */}
          <h3 style={s.h3}>4. Building a Business Plan</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Help me write a business plan.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a startup advisor who has helped 50+ companies raise seed funding. You think in terms of unit economics, market sizing, and competitive moats.

Context: I'm building a mobile app that connects local dog owners for group dog walks. Revenue model: $9.99/month subscription for premium features (route planning, vet-verified dog profiles, walk scheduling). Current stage: pre-launch with 200 beta signups in Austin, TX. I need this plan for a pitch to angel investors.

Action: Write a lean business plan covering: problem, solution, target market (with TAM/SAM/SOM estimates), revenue model, go-to-market strategy, competitive landscape, team needs, and 18-month financial projections.

Format: Use clear section headers. Financial projections in a simple table. Keep total length under 1500 words.

Tone: Confident, data-driven, investor-ready. No fluff or startup jargon.`}</div>

          <p style={s.p}>
            Notice the context includes specific numbers ($9.99/month, 200 beta signups, Austin TX) and clarifies the audience (angel investors). Vague business plan prompts produce vague plans. Specific context produces plans with real financial projections an investor can evaluate.
          </p>

          {/* Example 5: Resume Summary */}
          <h3 style={s.h3}>5. Writing a Resume Summary</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Write a resume summary for me.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a professional resume writer who has reviewed 10,000+ resumes and knows what hiring managers at Fortune 500 companies scan for in the first 6 seconds.

Context: I'm a marketing manager with 7 years of experience. I've managed $2M+ annual ad budgets across Google, Meta, and TikTok. I increased lead generation by 340% at my current company (B2B SaaS, 200 employees). I'm applying for a VP of Marketing role at a Series B startup in the fintech space.

Action: Write a 3-sentence resume summary that leads with my strongest result, positions me for a VP-level role, and signals I can operate in a fast-paced startup environment.

Format: 3 sentences, no bullet points. Under 60 words total.

Tone: Confident, results-driven, executive-level. No buzzwords like "synergy" or "thought leader."`}</div>

          <p style={s.p}>
            The format constraint ("Under 60 words total") is doing heavy lifting here. Without it, the AI writes a 200-word paragraph. The word limit forces concision, which is exactly what a resume summary needs. Format constraints are one of the most underused elements in prompt writing.
          </p>

          {/* Example 6: Blog Outlines */}
          <h3 style={s.h3}>6. Creating Blog Outlines</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Create a blog outline about productivity.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are an SEO content strategist who writes blog posts that rank on page 1 of Google and drive organic traffic.

Context: My blog targets solopreneurs and freelancers. We rank for long-tail productivity keywords. Our top-performing posts are actionable, list-based, and 2000-2500 words. Target keyword: "productivity system for freelancers." Current top-ranking articles are generic and lack specific frameworks.

Action: Create a detailed blog outline that will outrank existing content. Include a compelling H1, intro hook, 7-10 H2 sections with 2-3 sub-points each, and a conclusion with CTA. Each section should have a one-sentence summary of the key point.

Format: Hierarchical outline with H1, H2, and H3 labels. Include target word count per section.

Tone: Practical, direct, zero fluff. Like advice from a friend who actually freelances.`}</div>

          <p style={s.p}>
            The context about competitors ("Current top-ranking articles are generic and lack specific frameworks") tells the AI why this content needs to be different. The AI now writes to beat existing content, not to match it. Always tell the AI what the current landscape looks like.
          </p>

          {/* Example 7: AI Image Generation */}
          <h3 style={s.h3}>7. AI Image Generation</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Generate a picture of a coffee shop.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Context: This image is for the hero section of a specialty coffee brand's website. The brand aesthetic is warm minimalism — natural materials, soft light, intentional simplicity.

Role: Approach this as a commercial photographer shooting for a lifestyle brand lookbook.

Action: Generate a photo-realistic image of a small specialty coffee shop interior. Show a barista pouring a latte art rosetta, shot from a 45-degree angle across the counter. Include details: exposed brick wall, single hanging Edison bulb, a small succulent on the counter, steam rising from the cup.

Format: 16:9 aspect ratio, shallow depth of field with the latte art in sharp focus. Warm color palette — amber, cream, dark wood tones.

Tone: Cozy, elevated, editorial. Not stock-photo generic.`}</div>

          <p style={s.p}>
            Image prompts follow the same CRAFT principles but adapt the elements. "Format" becomes aspect ratio and visual composition. "Tone" becomes mood and aesthetic. The role ("commercial photographer") shapes the visual style. The more visual details you provide, the closer the output matches your vision.
          </p>

          {/* Example 8: Data Analysis */}
          <h3 style={s.h3}>8. Data Analysis</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Analyze my sales data.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a senior data analyst at a DTC e-commerce company. You specialize in identifying revenue patterns and actionable growth opportunities.

Context: I'm sharing 12 months of sales data for our online store (supplements, DTC). Revenue was $1.2M total. Q1 and Q4 were strong, Q2-Q3 dropped ~30%. We run Google Ads, Meta Ads, and email marketing. Average order value is $47. Customer return rate is 22%.

Action: Analyze the data for: (1) revenue trends and seasonality patterns, (2) which acquisition channel drives highest LTV, (3) why Q2-Q3 dropped and what to do about it, (4) three specific actions to increase revenue 20% next year.

Format: Executive summary (3 sentences), then numbered findings with supporting data points. Include a recommended action for each finding.

Tone: Analytical, executive-level. Lead with insights, not methodology.`}</div>

          <p style={s.p}>
            The structured action — "(1) revenue trends and seasonality patterns, (2) which acquisition channel drives highest LTV, (3) why Q2-Q3 dropped" — prevents the AI from doing a shallow surface-level analysis. Numbered sub-tasks force depth. Use this pattern whenever you need analytical output: explicitly list the questions you want answered.
          </p>

          {/* Example 9: Customer Service */}
          <h3 style={s.h3}>9. Customer Service Responses</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Write a response to an angry customer.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a senior customer success manager at a premium SaaS company. You are known for turning angry customers into brand advocates.

Context: A customer on our $99/month plan emailed saying our reporting dashboard has been "completely broken" for 3 days and they missed a client deadline because of it. They are threatening to cancel. Our engineering team confirmed the bug and deployed a fix 2 hours ago. This customer has been with us for 14 months and has referred 2 other accounts.

Action: Write a response email that: (1) validates their frustration without being defensive, (2) confirms the fix is live, (3) takes concrete ownership with a specific goodwill gesture, (4) gives them a reason to stay.

Format: Email format. Under 150 words. No corporate jargon.

Tone: Empathetic, human, direct. Like a real person who genuinely cares — not a template.`}</div>

          <p style={s.p}>
            The context here is critical — the AI knows the customer is long-tenured (14 months), high-value (referred 2 accounts), and genuinely affected (missed a client deadline). Without this context, the AI writes a generic apology. With it, the AI calibrates the response to the severity of the situation and the value of the relationship.
          </p>

          {/* Example 10: Presentation Slides */}
          <h3 style={s.h3}>10. Presentation Slides</h3>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Bad Prompt</p>
          <div style={s.bad}>Create a presentation about our quarterly results.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>CRAFT Prompt</p>
          <div style={s.good}>{`Role: You are a management consultant who builds executive presentations for Fortune 500 board meetings. You follow the Minto Pyramid principle — lead with the answer, then support it.

Context: I need to present Q1 2026 results to our board. Key metrics: Revenue $3.4M (up 28% YoY), 1,200 new customers (up 15%), churn dropped from 5.2% to 3.8%, NPS increased to 72. However, CAC increased 40% due to rising ad costs, and gross margin dipped from 68% to 63%.

Action: Create a 10-slide presentation outline. Each slide should have: a headline that states the key insight (not just a topic), 3-4 bullet points with specific data, and a speaker note with the narrative thread. Address the CAC and margin concerns proactively — don't hide them.

Format: Numbered slides. Each with: Headline, Bullets, Speaker Note. Suggest one data visualization type per slide.

Tone: Confident, transparent, forward-looking. Acknowledge challenges but frame them with solutions.`}</div>

          <p style={s.p}>
            The instruction to "Address the CAC and margin concerns proactively" is a master-level prompting technique. By telling the AI to confront the weaknesses head-on, you prevent a one-sided presentation that the board will immediately question. The best prompts anticipate the audience's objections and instruct the AI to address them.
          </p>

          <h3 style={s.h3}>The Pattern Across All 10 Examples</h3>
          <p style={s.p}>
            Look at the CRAFT prompts above. They share a common pattern: the bad prompt is 5-10 words. The CRAFT prompt is 80-150 words. That extra investment of 30-60 seconds of writing produces output that is 3-5x better and eliminates 2-3 rounds of revision. The math is obvious — spend 1 minute writing a better prompt, save 15 minutes fixing mediocre output.
          </p>
          <p style={s.p}>
            You do not have to memorize all of this. The fastest shortcut is to use our{' '}
            <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>free Prompt Enhancer</Link>{' '}
            — paste in any basic prompt and it automatically applies the CRAFT framework for you.
          </p>

          {/* Mid-article CTA */}
          <div style={s.tip}>
            <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>Want to skip the manual work?</p>
            <p style={{ ...s.p, margin: '0 0 12px' }}>
              Our free{' '}
              <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Prompt Enhancer</Link>{' '}
              automatically applies the CRAFT framework to any prompt. Paste in your basic prompt, and it upgrades it instantly — no signup required.
            </p>
            <Link href="/prompt-enhancer" style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Try the Free Prompt Enhancer →
            </Link>
          </div>

          {/* Section: Free Tools */}
          <h2 id="tools" style={s.h2}>Free Tools to Improve Your Prompts</h2>
          <p style={s.p}>
            You do not have to memorize the CRAFT framework or rewrite every prompt by hand. We built three free tools that do the heavy lifting for you. No signup required, no usage limits, free forever.
          </p>
          <p style={s.p}>
            These tools were built on the same principles covered in this guide and in{' '}
            <Link href="/blog/prompt-engineering-guide-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>our full prompt engineering guide</Link>.
            They encode years of prompt engineering best practices into one-click tools anyone can use.
          </p>

          <div style={{ display: 'grid', gap: '16px', margin: '16px 0 32px' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)' }}>
                <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Prompt Enhancer</Link>
              </h3>
              <p style={{ ...s.p, margin: 0 }}>
                Paste any basic prompt and get an expert-level version back instantly. It adds context, role, format, and tone automatically. This is the fastest way to improve your AI output without learning anything. <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Try our free Prompt Enhancer →</Link>
              </p>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)' }}>
                <Link href="/prompt-scorer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Prompt Scorer</Link>
              </h3>
              <p style={{ ...s.p, margin: 0 }}>
                Get a quality score from 0-100 for any prompt, plus specific suggestions for improvement. See exactly which CRAFT elements you are missing and how to fix them. <Link href="/prompt-scorer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Score your prompts →</Link>
              </p>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)' }}>
                <Link href="/prompt-generator" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Prompt Generator</Link>
              </h3>
              <p style={{ ...s.p, margin: 0 }}>
                Not sure where to start? Pick your use case and this tool builds a complete, ready-to-use prompt for you from scratch. Works for writing, marketing, coding, images, and more. <Link href="/prompt-generator" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Generate prompts →</Link>
              </p>
            </div>
          </div>

          <h3 style={s.h3}>How to Practice</h3>
          <p style={s.p}>
            The best way to improve your prompts is to use the feedback loop: write a prompt, evaluate the output, identify what is missing, and add it. Here is a practical exercise you can do right now:
          </p>
          <p style={s.p}>
            1. Pick a task you regularly use AI for (email, content, analysis, whatever).{' '}
            2. Write your normal prompt.{' '}
            3. Run it through our{' '}
            <Link href="/prompt-scorer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Prompt Scorer</Link>{' '}
            to see your score.{' '}
            4. Add the missing CRAFT elements.{' '}
            5. Score again and compare the AI output.
          </p>
          <p style={s.p}>
            Most people go from a score of 20-30 to 75+ in their first attempt. The improvement in output quality is immediately obvious.
          </p>

          {/* Section: Common Mistakes */}
          <h2 id="mistakes" style={s.h2}>5 Common Prompt Mistakes (and How to Fix Them)</h2>
          <p style={s.p}>
            Even after learning the CRAFT framework, most people fall into a few predictable traps. These five mistakes account for about 80% of bad AI output. Eliminate them and your results improve overnight.
          </p>

          <h3 style={s.h3}>Mistake 1: Being Too Vague</h3>
          <p style={s.p}>
            "Write about marketing" is not a prompt — it is a topic. The AI has no idea what angle, audience, length, or format you want, so it defaults to a generic, surface-level essay nobody would publish. This is the most common mistake by far, and it accounts for most of the "AI is not that useful" complaints you see online.
          </p>
          <p style={s.p}>
            <strong>Fix:</strong> Always include the specific task, the audience, and the desired output. "Write a 500-word LinkedIn post targeting B2B SaaS founders about why content marketing beats paid ads for long-term growth" gives the AI everything it needs.
          </p>
          <p style={{ ...s.label, color: 'rgba(239,68,68,0.8)' }}>Vague</p>
          <div style={s.bad}>Write about marketing.</div>
          <p style={{ ...s.label, color: 'rgba(34,197,94,0.8)' }}>Specific</p>
          <div style={s.good}>{`Write a 500-word LinkedIn post targeting B2B SaaS founders about why content marketing beats paid ads for long-term customer acquisition. Include one real-world example and end with a question to drive engagement. Tone: authoritative but conversational.`}</div>

          <h3 style={s.h3}>Mistake 2: Skipping the Role</h3>
          <p style={s.p}>
            When you do not assign a role, the AI responds as a generic assistant. The output is correct but bland. Assigning a role activates specialized knowledge and perspective. A "senior copywriter" writes differently than a "data analyst" — and both write differently than a generic AI.
          </p>
          <p style={s.p}>
            <strong>Fix:</strong> Start every prompt with "You are a [specific role] with [specific experience]." The more specific the role, the better the output. "You are a conversion copywriter who has written landing pages for 50+ SaaS companies" beats "You are a writer."
          </p>

          <h3 style={s.h3}>Mistake 3: Not Specifying Format</h3>
          <p style={s.p}>
            If you do not tell the AI how to structure its output, it defaults to long paragraphs. That might not be what you need. Maybe you need a table, bullet points, an email, or a numbered list. The AI is happy to use any format — you just have to ask.
          </p>
          <p style={s.p}>
            This mistake wastes the most time because you get output that is correct in substance but wrong in structure. You then spend 10 minutes reformatting it — time that could have been saved with one sentence in the prompt.
          </p>
          <p style={s.p}>
            <strong>Fix:</strong> Be explicit about format: "Reply as a numbered list," "Use a table with columns for X, Y, Z," "Format as an email with subject line," or "Give me markdown with H2 and H3 headers." Also specify length constraints: "Under 200 words," "Exactly 5 bullet points," "3 paragraphs max."
          </p>

          <h3 style={s.h3}>Mistake 4: Accepting the First Output</h3>
          <p style={s.p}>
            Most people treat AI like a search engine: one query, one result, done. But the best AI users iterate. The first output is a draft. You refine it by saying "Make it shorter," "Add more data," "Change the tone to be more casual," or "Focus more on the ROI section."
          </p>
          <p style={s.p}>
            <strong>Fix:</strong> Always plan for 2-3 iterations. Use follow-up prompts: "Rewrite this but cut the length in half," "Keep the structure but make the tone more urgent," or "This is good — now make the opening more compelling."
          </p>

          <h3 style={s.h3}>Mistake 5: Stuffing Everything Into One Prompt</h3>
          <p style={s.p}>
            Asking the AI to "write a complete marketing strategy, content calendar, email sequences, ad copy, and landing page" in a single prompt is a recipe for shallow output across the board. The AI tries to do everything and does nothing well. You get a surface-level overview of each component when what you need is deep, detailed work on each one.
          </p>
          <p style={s.p}>
            <strong>Fix:</strong> Break complex projects into sequential prompts. Start with strategy, then use the output to inform the next prompt for the content calendar, then individual pieces. Each prompt gets the AI's full attention and produces deeper, more detailed output. Think of it like a conversation, not a single command — you are building on each response to go deeper.
          </p>
          <p style={s.p}>
            A good rule of thumb: if your prompt asks for more than 3 distinct deliverables, split it up. "Write a tagline, brand positioning statement, and elevator pitch" is fine — it is 3 related outputs. "Write a brand strategy, website copy, email sequence, social media calendar, and ad campaign" needs to be 5 separate prompts.
          </p>

          <div style={s.tip}>
            <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>Quick Reference: The 5 Mistakes Cheat Sheet</p>
            <p style={{ ...s.p, margin: '0 0 4px' }}>1. <strong>Too vague</strong> → Add specifics: audience, length, angle</p>
            <p style={{ ...s.p, margin: '0 0 4px' }}>2. <strong>No role</strong> → Start with "You are a [specific expert]"</p>
            <p style={{ ...s.p, margin: '0 0 4px' }}>3. <strong>No format</strong> → Specify structure: list, table, email, etc.</p>
            <p style={{ ...s.p, margin: '0 0 4px' }}>4. <strong>No iteration</strong> → Plan for 2-3 follow-up refinements</p>
            <p style={{ ...s.p, margin: 0 }}>5. <strong>Too much at once</strong> → Break into sequential focused prompts</p>
          </div>

          {/* Bonus: Power Tips */}
          <h2 style={s.h2}>Bonus: 3 Power Tips for Advanced Users</h2>
          <p style={s.p}>
            Once you have mastered CRAFT, these three advanced techniques will push your output quality even higher:
          </p>

          <h3 style={s.h3}>Power Tip 1: Use Negative Instructions</h3>
          <p style={s.p}>
            Tell the AI what NOT to do. "Do not use cliches. Do not start with 'In today's fast-paced world.' Do not use corporate jargon like 'leverage' or 'synergy.' Do not exceed 200 words." Negative constraints eliminate the default patterns that make AI output feel generic. They force the model to be more creative and specific.
          </p>
          <p style={s.p}>
            This is especially powerful for writing tasks where AI defaults are most obvious. Every AI model has a "voice" — slightly formal, a bit wordy, heavy on transitions. Negative instructions break those patterns and produce output that sounds more human and more unique.
          </p>

          <h3 style={s.h3}>Power Tip 2: Give Examples of What You Want</h3>
          <p style={s.p}>
            This is called "few-shot prompting." If you want the AI to match a specific style, paste in 1-2 examples of output you love and say "Match this style and quality level." The AI pattern-matches against your examples, and the output immediately sounds like it was written by the same person. This is especially powerful for brand voice consistency.
          </p>
          <p style={s.p}>
            For example, if you love how a specific newsletter writer crafts their subject lines, paste in 5 of their best subject lines and say "Write 10 subject lines in this style for [your topic]." The results will be dramatically better than describing the style in words. Showing beats telling — even with AI.
          </p>

          <h3 style={s.h3}>Power Tip 3: Chain Your Prompts</h3>
          <p style={s.p}>
            For complex projects, use the output of one prompt as the input for the next. First prompt: "Create a detailed outline for a sales page." Second prompt: "Using this outline, write the hero section. Focus on the main pain point and primary benefit." Third prompt: "Now write the testimonials section based on these customer results: [paste data]." Each prompt gets focused attention, and the final result is far more cohesive than trying to do everything at once.
          </p>
          <p style={s.p}>
            Prompt chaining is how professionals use AI to produce long-form, high-quality work. A 3,000-word blog post written from a single prompt will be shallow. The same post written across 6 chained prompts (outline, intro, each section, conclusion) will be deep, detailed, and publication-ready.
          </p>

          {/* Summary */}
          <h2 style={s.h2}>The Bottom Line</h2>
          <p style={s.p}>
            Writing better AI prompts is not about being technical or learning to code. It is about being specific. The CRAFT framework — Context, Role, Action, Format, Tone — gives you a simple checklist that works every time, with every AI tool.
          </p>
          <p style={s.p}>
            Here is your action plan: the next time you write a prompt, add a Role and Context before your request. That single upgrade will double the quality of your output. Then gradually add Format and Tone constraints. Within a week, you will be getting consistently professional-grade results from AI tools that used to give you generic garbage.
          </p>
          <p style={s.p}>
            The people who get the most from AI are not the ones with the best tools or the most expensive subscriptions. They are the ones who have learned to communicate with AI clearly. That skill is free to develop, takes a week to build, and will pay dividends for the rest of your career.
          </p>
          <p style={s.p}>
            If you want to skip the learning curve entirely, our{' '}
            <Link href="/prompt-enhancer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>free Prompt Enhancer</Link>{' '}
            does the CRAFT optimization automatically. Or if you want 500+ ready-to-use expert prompts, the Mega Pack below has you covered.
          </p>

          {/* CTA */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Stop Writing Prompts From Scratch</p>
            <p style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Get 500+ Pre-Written Expert Prompts</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', maxWidth: '480px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              Every prompt uses the CRAFT framework. Covers business, marketing, sales, content, images, presentations, resumes, and more. Copy, paste, customize, done.
            </p>
            <a href={STRIPE_MEGA_PACK} style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '16px 36px', borderRadius: '100px', textDecoration: 'none', fontWeight: 800, fontSize: '16px' }}>
              Get the AI Prompt Mega Pack →
            </a>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>One-time payment · Instant download · 30-day money-back guarantee</p>
          </div>

          <p style={s.p}>
            Want even more? Our{' '}
            <Link href="/ai-prompt-mega-pack" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>AI Prompt Mega Pack</Link>{' '}
            includes 500+ prompts across every business category, or{' '}
            <Link href="/bundle" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>get all 15 kits</Link>{' '}
            for the complete toolkit.
          </p>

          {/* Related */}
          <h2 style={s.h2}>Related Guides</h2>
          <ul style={{ listStyle: 'none', margin: '0 0 48px', padding: 0 }}>
            {[
              { title: 'The Complete AI Prompt Engineering Guide for 2026', href: '/blog/prompt-engineering-guide-2026' },
              { title: 'Best AI Prompts for Business in 2026', href: '/blog/best-ai-prompts-business-2026' },
              { title: '25 ChatGPT Tips and Tricks Most People Don\'t Know', href: '/blog/chatgpt-tips-tricks-2026' },
              { title: '10 AI Prompt Mistakes That Are Ruining Your ChatGPT Output', href: '/blog/ai-prompt-mistakes-2026' },
              { title: 'AI Prompt Roaster — Get Your Bad Prompts Roasted (Then Fixed)', href: '/prompt-roaster' },
              { title: 'Free AI Prompt Generator — Build Custom Prompts Instantly', href: '/prompt-generator' },
              { title: '15 ChatGPT Prompts to Write a Perfect Resume', href: '/blog/ai-resume-prompts-chatgpt-2026' },
              { title: '20 AI Prompts That Will Transform Your Social Media', href: '/blog/ai-social-media-prompts-2026' },
              { title: '20 AI Prompts for Better Email Marketing', href: '/blog/ai-email-marketing-prompts-2026' },
            ].map(link => (
              <li key={link.href} style={{ padding: '8px 0' }}>
                <Link href={link.href} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
                  {link.title} →
                </Link>
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h2 id="faq" style={s.h2}>Frequently Asked Questions</h2>
          {faqLd.mainEntity.map(faq => (
            <div key={faq.name} style={{ borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>{faq.name}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}

        </div>
      </article>
    </Layout>
  );
}
