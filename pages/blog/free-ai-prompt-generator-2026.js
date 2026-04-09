import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_MEGA = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0d';
const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function FreeAIPromptGenerator2026() {
  const title = 'Free AI Prompt Generator: Build Perfect Prompts in Seconds (2026)';
  const description = 'Use our free AI prompt generator to create high-quality prompts for ChatGPT, Claude, Midjourney, and more. 8 categories, zero cost. Stop writing bad prompts — build them in seconds.';
  const url = 'https://midastools.co/blog/free-ai-prompt-generator-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the AI prompt generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free with no signup required. You can generate unlimited prompts across all 8 categories — marketing, business, content, coding, images, video, education, and personal productivity. The tool runs directly in your browser. We also offer a premium Mega Pack with 150+ pre-built, professionally engineered prompts if you want ready-made options.'
        }
      },
      {
        '@type': 'Question',
        name: 'What AI tools do the generated prompts work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The prompts work with every major AI tool: ChatGPT (GPT-4o), Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, Sora, Runway, and more. The generator builds prompts using universal best practices — role assignment, structured context, and clear output formatting — that produce excellent results across all platforms.'
        }
      },
      {
        '@type': 'Question',
        name: 'How is a prompt generator different from just asking ChatGPT directly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A prompt generator applies proven prompt engineering frameworks automatically. Instead of writing "help me with marketing," the generator builds a structured prompt with role assignment, context, constraints, and output formatting. The result is dramatically better AI output — without you needing to learn prompt engineering techniques yourself.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I customize the prompts after they are generated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. The generator creates a structured starting point that you can edit before copying. You can adjust the role, tone, context, constraints, and output format. Think of the generated prompt as a professional template — it handles the structure so you can focus on the specifics of your task.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the 8 prompt categories available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 8 categories are: Marketing & Sales (ads, emails, funnels), Business & Strategy (plans, analysis, operations), Content Creation (blogs, social, scripts), Coding & Technical (code generation, debugging, architecture), Image Generation (Midjourney, DALL-E, Stable Diffusion), Video Production (Sora, Runway, Pika), Education & Research (lesson plans, study guides, analysis), and Personal Productivity (planning, decision-making, habits). Each category includes sub-types tailored to common use cases.'
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
    tip: {
      background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)',
      borderRadius: '12px', padding: '20px', margin: '16px 0 24px',
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
        <meta name="keywords" content="free AI prompt generator, AI prompt maker, ChatGPT prompt builder, custom AI prompts, prompt generator tool, AI prompt creator, best prompt generator 2026, free prompt maker, ChatGPT prompt generator, AI prompt template builder" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
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
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '32px' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            Free AI Prompt Generator
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--text)' }}>
            Free AI Prompt Generator: Build Perfect Prompts in Seconds
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            Most people type one sentence into ChatGPT and wonder why the output is mediocre. The problem is not the AI — it is the prompt. Our free generator builds structured, expert-level prompts for you in seconds.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '40px' }}>
            Updated March 2026 · 10 min read
          </p>

          {/* Table of Contents */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>In This Guide</p>
            <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: 2, color: 'var(--accent)' }}>
              <li><a href="#why" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Why You Need a Prompt Generator</a></li>
              <li><a href="#how-it-works" style={{ color: 'var(--accent)', textDecoration: 'none' }}>How Our Free AI Prompt Generator Works</a></li>
              <li><a href="#categories" style={{ color: 'var(--accent)', textDecoration: 'none' }}>8 Types of Prompts You Can Generate</a></li>
              <li><a href="#tips" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Tips for Getting Even Better Results</a></li>
              <li><a href="#free-vs-premium" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Free vs Premium: When to Upgrade</a></li>
              <li><a href="#faq" style={{ color: 'var(--accent)', textDecoration: 'none' }}>FAQ</a></li>
            </ol>
          </div>

          {/* Section 1: Why You Need a Prompt Generator */}
          <h2 id="why" style={s.h2}>1. Why You Need a Prompt Generator</h2>
          <p style={s.p}>
            Here is the uncomfortable truth: <strong>90% of people are using AI at maybe 10% of its capability</strong>. They type something like "write me a marketing email" and get bland, generic output. Then they conclude that AI is overhyped.
          </p>
          <p style={s.p}>
            The actual problem is the prompt. AI models are trained on the entire internet — they can write like a Fortune 500 CMO or a Pulitzer-winning journalist. But they need the right instructions to access that level. A vague prompt triggers the model's "safe, generic, please-everyone" default mode.
          </p>
          <p style={s.p}>
            A prompt generator solves this by applying <Link href="/blog/prompt-engineering-guide-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>prompt engineering best practices</Link> automatically. Here is why that matters:
          </p>

          <h3 style={s.h3}>Reason 1: Structure beats talent</h3>
          <p style={s.p}>
            A well-structured prompt with role assignment, context, and output formatting will outperform a clever one-liner every time. The generator builds this structure for you — role, task, context, constraints, and format — in the correct order.
          </p>

          <h3 style={s.h3}>Reason 2: You do not know what you are missing</h3>
          <p style={s.p}>
            Most people forget critical prompt elements. They skip role assignment (which changes the AI's entire perspective), omit output format (so they get wall-of-text paragraphs), or forget to add constraints (so the output is bloated and generic). A generator includes all of these by default.
          </p>

          <h3 style={s.h3}>Reason 3: Speed compounds</h3>
          <p style={s.p}>
            Writing a great prompt from scratch takes 3-5 minutes. The generator does it in 15 seconds. If you write 10 prompts a day, that is 30-45 minutes saved daily — over 150 hours per year. More importantly, every prompt is structurally sound instead of rushed.
          </p>

          <h3 style={s.h3}>Reason 4: Consistency across your team</h3>
          <p style={s.p}>
            When your whole team uses a prompt generator, everyone gets the same quality of AI output. No more "Sarah gets great results from ChatGPT but nobody else can." The generator standardizes the input quality, which standardizes the output quality.
          </p>

          {/* CTA 1 */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Try It Now</p>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Build Your First Prompt in 15 Seconds</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>8 categories. Unlimited prompts. No signup required.</p>
            <Link href="/prompt-generator" style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Open the Free Prompt Generator →
            </Link>
          </div>

          {/* Section 2: How It Works */}
          <h2 id="how-it-works" style={s.h2}>2. How Our Free AI Prompt Generator Works</h2>
          <p style={s.p}>
            The generator uses a four-step process that mirrors how professional prompt engineers build prompts. The difference is it takes seconds instead of minutes.
          </p>

          <h3 style={s.h3}>Step 1: Pick a category</h3>
          <p style={s.p}>
            Choose from 8 categories: Marketing, Business, Content, Coding, Images, Video, Education, or Personal Productivity. Each category loads sub-types and field labels specific to that domain. Picking "Marketing" gives you options like email campaigns, ad copy, and sales pages. Picking "Coding" gives you code generation, debugging, and architecture review.
          </p>

          <h3 style={s.h3}>Step 2: Select a prompt type</h3>
          <p style={s.p}>
            Each category contains 5-10 specific prompt types. These narrow the generator's output to your exact use case. For example, under Content Creation you will find blog posts, social media captions, video scripts, newsletters, and more. The prompt type determines which fields appear next.
          </p>

          <h3 style={s.h3}>Step 3: Fill in the details</h3>
          <p style={s.p}>
            The generator shows you context fields tailored to your prompt type. For a marketing email, you will see fields for product name, audience, tone, key benefit, and CTA. For an image prompt, you will see fields for subject, style, lighting, and composition. You fill in what you know — every field is optional, but more detail means a better prompt.
          </p>

          <h3 style={s.h3}>Step 4: Copy and use</h3>
          <p style={s.p}>
            The generator assembles a complete, structured prompt using your inputs. It applies role assignment, adds formatting instructions, includes constraints to prevent generic output, and structures everything in the order that AI models respond to best. One click copies it to your clipboard — paste it into ChatGPT, Claude, Midjourney, or any AI tool.
          </p>

          <div style={s.tip}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>Pro tip</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              After pasting the generated prompt, read the AI's output and then iterate. The generator gives you a strong starting point — but the best results come from refining. Tell the AI "make it shorter," "more casual tone," or "add a specific example." Two rounds of feedback beats one perfect prompt. See our <Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>ChatGPT tips guide</Link> for more iteration strategies.
            </p>
          </div>

          {/* Section 3: 8 Categories */}
          <h2 id="categories" style={s.h2}>3. 8 Types of Prompts You Can Generate</h2>
          <p style={s.p}>
            Each category is built around the most common use cases we see from thousands of users. Here is what each one covers and when to use it.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '16px 0 32px' }}>
            {[
              { icon: '1', name: 'Marketing & Sales', desc: 'Email campaigns, ad copy, sales pages, product launches, A/B test variations, landing page headlines, and conversion-focused CTAs.' },
              { icon: '2', name: 'Business & Strategy', desc: 'Business plans, competitive analysis, SWOT analysis, pricing strategies, investor pitches, operations workflows, and quarterly planning.' },
              { icon: '3', name: 'Content Creation', desc: 'Blog posts, social media captions, YouTube scripts, newsletter editions, podcast outlines, and SEO-optimized articles.' },
              { icon: '4', name: 'Coding & Technical', desc: 'Code generation, debugging, code review, API design, database schemas, architecture decisions, and technical documentation.' },
              { icon: '5', name: 'Image Generation', desc: 'Midjourney, DALL-E, and Stable Diffusion prompts. Product photography, portraits, landscapes, abstract art, logos, and UI mockups.' },
              { icon: '6', name: 'Video Production', desc: 'Sora, Runway, and Pika prompts. Product demos, social media clips, cinematic b-roll, explainer videos, and ad creatives.' },
              { icon: '7', name: 'Education & Research', desc: 'Lesson plans, study guides, research summaries, quiz generation, concept explanations, and curriculum design.' },
              { icon: '8', name: 'Personal Productivity', desc: 'Goal planning, decision frameworks, habit tracking, meeting agendas, weekly reviews, and personal development plans.' },
            ].map(cat => (
              <div key={cat.name} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--accent)', marginRight: '6px' }}>{cat.icon}.</span>{cat.name}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{cat.desc}</p>
              </div>
            ))}
          </div>

          <p style={s.p}>
            Every category generates prompts that include role assignment, structured context, output formatting, and negative constraints. The prompts work with ChatGPT, Claude, Gemini, and every other major AI tool.
          </p>

          {/* Section 4: Tips */}
          <h2 id="tips" style={s.h2}>4. Tips for Getting Even Better Results</h2>
          <p style={s.p}>
            The generator handles prompt structure automatically. These five tips will help you get the most out of the prompts it creates.
          </p>

          <h3 style={s.h3}>Tip 1: Fill in every field you can</h3>
          <p style={s.p}>
            The generator's fields are all optional, which makes it fast to use. But specificity is the single biggest factor in prompt quality. A prompt with your actual product name, real audience demographics, and concrete goals will outperform a generic one by a wide margin. Take 30 extra seconds to fill in the details.
          </p>

          <h3 style={s.h3}>Tip 2: Edit the prompt before you paste it</h3>
          <p style={s.p}>
            The generated prompt is a starting point, not a final product. Scan it before copying. Add a specific example of output you like. Remove a constraint that does not apply. Change the word count. Small edits take 10 seconds and meaningfully improve the output.
          </p>

          <h3 style={s.h3}>Tip 3: Use the output as round one, not the final draft</h3>
          <p style={s.p}>
            The best AI workflows involve iteration. Get the first output, then tell the AI what to change: "Make the tone more conversational," "Cut this to half the length," "Add three specific statistics." Two rounds of refinement consistently beats one attempt at a perfect prompt.
          </p>

          <h3 style={s.h3}>Tip 4: Save your best prompts</h3>
          <p style={s.p}>
            When a generated prompt produces great output, save it. Build a personal library of prompts that work for your specific use cases. Over time, you will have a toolkit of proven prompts that you can reuse and adapt — much faster than generating from scratch each time.
          </p>

          <h3 style={s.h3}>Tip 5: Combine categories for complex tasks</h3>
          <p style={s.p}>
            Launching a product? Generate a marketing prompt for the sales page, a content prompt for the announcement blog post, an image prompt for the social media graphics, and a video prompt for the product demo. The generator makes each one take 15 seconds, so you can cover an entire launch in under two minutes.
          </p>

          <div style={s.tip}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>Want to go deeper?</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Our <Link href="/blog/prompt-engineering-guide-2026" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>complete prompt engineering guide</Link> covers the five fundamentals, advanced techniques like chain-of-thought and mega-prompts, and the 7 most common mistakes people make. It is the best companion to this tool.
            </p>
          </div>

          {/* Section 5: Free vs Premium */}
          <h2 id="free-vs-premium" style={s.h2}>5. Free vs Premium: When to Upgrade</h2>
          <p style={s.p}>
            The free prompt generator is genuinely useful — no artificial limitations, no signup wall. But we also sell premium prompt packs for people who want ready-made, copy-paste prompts that have been professionally engineered and tested.
          </p>
          <p style={s.p}>
            Here is the honest comparison:
          </p>

          {/* Comparison Table */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', margin: '16px 0 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--surface)' }}>
              <div style={{ padding: '14px 16px', fontWeight: 700, fontSize: '13px', color: 'var(--text-tertiary)', borderBottom: '1px solid var(--border)' }}>Feature</div>
              <div style={{ padding: '14px 16px', fontWeight: 700, fontSize: '13px', color: 'var(--text-tertiary)', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>Free Generator</div>
              <div style={{ padding: '14px 16px', fontWeight: 700, fontSize: '13px', color: 'var(--accent)', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>Mega Pack ($29)</div>
            </div>
            {[
              { feat: 'Prompt creation', free: 'Unlimited', prem: '150+ pre-built' },
              { feat: 'Categories', free: '8 categories', prem: '8 categories' },
              { feat: 'Customization', free: 'Fill-in fields', prem: 'Copy & edit' },
              { feat: 'Time per prompt', free: '~15 seconds', prem: '~3 seconds' },
              { feat: 'Prompt quality', free: 'Good structure', prem: 'Expert-tested' },
              { feat: 'Examples included', free: 'No', prem: 'Yes — with expected output' },
              { feat: 'Advanced techniques', free: 'Basic frameworks', prem: 'Chain-of-thought, mega-prompts, few-shot' },
              { feat: 'Best for', free: 'Exploration & learning', prem: 'Daily professional use' },
            ].map((row, i) => (
              <div key={row.feat} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: i % 2 === 0 ? 'transparent' : 'var(--surface)' }}>
                <div style={{ padding: '12px 16px', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{row.feat}</div>
                <div style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>{row.free}</div>
                <div style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>{row.prem}</div>
              </div>
            ))}
          </div>

          <p style={s.p}>
            <strong>Use the free generator</strong> if you are exploring AI, learning prompt engineering, or need occasional prompts. It gives you solid structure and covers every category.
          </p>
          <p style={s.p}>
            <strong>Upgrade to the <Link href="/ai-prompt-mega-pack" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Mega Pack</Link></strong> if you use AI daily for work. The pre-built prompts are faster, include tested examples, and use advanced techniques that the free generator does not cover. At $29, it pays for itself if it saves you one hour of prompt writing.
          </p>
          <p style={s.p}>
            <strong>Get the <Link href="/bundle" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Full Bundle</Link></strong> ($97) if you want every prompt pack we sell — text, image, video, and niche-specific packs for real estate, freelancers, creators, and small businesses. It is 11 products at a 75% discount.
          </p>

          {/* CTA 2 */}
          <div style={{ background: 'rgba(59,95,255,0.04)', border: '1px solid rgba(59,95,255,0.15)', borderRadius: '16px', padding: '28px', textAlign: 'center', margin: '48px 0' }}>
            <p style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--text)' }}>Ready to build better prompts?</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Start free or grab the premium pack for instant, expert-level prompts.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/prompt-generator" style={{ display: 'inline-block', background: 'var(--text)', color: '#FFFFFF', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
                Free Generator →
              </Link>
              <a href={STRIPE_MEGA} style={{ display: 'inline-block', background: 'transparent', color: 'var(--accent)', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '14px', border: '1px solid var(--accent)' }}>
                Mega Pack — $29 →
              </a>
            </div>
          </div>

          {/* Section 6: FAQ */}
          <h2 id="faq" style={s.h2}>6. Frequently Asked Questions</h2>

          <h3 style={s.h3}>Is the AI prompt generator really free?</h3>
          <p style={s.p}>
            Yes, 100% free with no signup. Generate unlimited prompts across all 8 categories directly in your browser. We also offer a premium <Link href="/ai-prompt-mega-pack" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Mega Pack</Link> with 150+ pre-built, professionally engineered prompts for people who want ready-made options.
          </p>

          <h3 style={s.h3}>What AI tools do the generated prompts work with?</h3>
          <p style={s.p}>
            Every major AI tool: ChatGPT (GPT-4o), Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, Sora, Runway, and more. The generator builds prompts using universal prompt engineering principles — role assignment, structured context, and clear output formatting — that work across all platforms.
          </p>

          <h3 style={s.h3}>How is this different from just asking ChatGPT directly?</h3>
          <p style={s.p}>
            A prompt generator applies proven prompt engineering frameworks automatically. Instead of "help me with marketing," the generator builds a structured prompt with a specific role, detailed context, constraints to prevent generic output, and output formatting instructions. The result is dramatically better AI output without you needing to study prompt engineering.
          </p>

          <h3 style={s.h3}>Can I customize the prompts after they are generated?</h3>
          <p style={s.p}>
            Absolutely. The generator creates a structured starting point that you can edit before copying. Adjust the role, tone, context, constraints, or output format. Think of it as a professional template — it handles the structure so you can focus on the specifics of your task.
          </p>

          <h3 style={s.h3}>What are the 8 prompt categories?</h3>
          <p style={s.p}>
            Marketing & Sales, Business & Strategy, Content Creation, Coding & Technical, Image Generation, Video Production, Education & Research, and Personal Productivity. Each category includes sub-types tailored to the most common use cases. See the <a href="#categories" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>full breakdown above</a>.
          </p>

          {/* Final CTA */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Stop Writing Bad Prompts</p>
            <p style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Build Perfect AI Prompts — Free</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              8 categories. Unlimited generations. No signup required. Professional prompt engineering built in.
            </p>
            <Link href="/prompt-generator" style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '16px 36px', borderRadius: '100px', textDecoration: 'none', fontWeight: 800, fontSize: '16px' }}>
              Open the Prompt Generator →
            </Link>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              Or get 150+ pre-built prompts: <a href={STRIPE_MEGA} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Mega Pack $29</a> · <a href={STRIPE_BUNDLE} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Full Bundle $97</a>
            </p>
          </div>

          {/* Related */}
          <h2 style={s.h2}>Related Guides</h2>
          <ul style={{ listStyle: 'none', margin: '0 0 48px', padding: 0 }}>
            {[
              { title: 'The Complete AI Prompt Engineering Guide for 2026', href: '/blog/prompt-engineering-guide-2026' },
              { title: '25 ChatGPT Tips and Tricks Most People Don\'t Know', href: '/blog/chatgpt-tips-tricks-2026' },
              { title: 'AI Prompt Mega Pack — 150+ Ready-Made Prompts', href: '/ai-prompt-mega-pack' },
              { title: 'The Complete AI Tools Bundle — All 13 Kits', href: '/bundle' },
            ].map(link => (
              <li key={link.href} style={{ padding: '8px 0' }}>
                <Link href={link.href} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
                  {link.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
}
