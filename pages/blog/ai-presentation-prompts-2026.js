import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const PRESENTATION_KIT_URL = '/presentation-kit';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function AIPresentationPrompts2026() {
  const title = '15 AI Prompts That Will Make Your Presentations 10x Better in 2026';
  const description = 'The best AI presentation prompts for 2026. 15 copy-paste ChatGPT prompts for pitch decks, sales presentations, keynote talks, board meetings, and slide storytelling. Create investor-ready decks, persuasive sales slides, and conference talks that land.';
  const url = 'https://www.midastools.co/blog/ai-presentation-prompts-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
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
        name: 'Can AI create an entire presentation for me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI can generate the narrative structure, slide-by-slide content, speaker notes, and even suggest visual layouts for your entire presentation. However, AI works best as a collaborator, not a replacement. It excels at creating the first draft in minutes instead of hours — structuring your argument, writing concise slide copy, generating data narratives, and crafting speaker notes. You still need to add your specific data, customize the design in your preferred tool (PowerPoint, Google Slides, Keynote, Canva), and rehearse the delivery. The prompts in this guide are designed to get you 80% of the way there so you can spend your time on the 20% that matters most: your unique insights, real data, and personal delivery style.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best AI tool for making presentations in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For content generation and narrative structure, ChatGPT (GPT-4o) and Claude are the best general-purpose tools — they excel at creating slide outlines, writing concise copy, and building persuasive arguments. For AI-native slide creation, tools like Gamma, Tome, and Beautiful.ai can generate visual slides directly from prompts. For the best results, use a two-step workflow: first use ChatGPT or Claude with the prompts in this guide to nail your narrative and content, then bring that content into your preferred design tool. This approach gives you more control over both the message and the visuals than any single AI presentation tool can provide.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many slides should a pitch deck have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard investor pitch deck is 10-12 slides, following the classic framework: Title, Problem, Solution, Market Size, Business Model, Traction, Team, Competition, Financials, and Ask. For a demo day or pitch competition, aim for 8-10 slides that you can present in 5-7 minutes. For a Series A or later fundraise, you may need a more detailed appendix deck of 20-30 slides that investors review on their own time, plus the concise 10-12 slide version for the live pitch. The key principle is one idea per slide — if a slide requires more than 6 seconds to understand, it has too much content. The prompts in this guide help you structure content at the right density for each slide type.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I make my AI-generated presentation sound authentic and not generic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The number one reason AI presentations sound generic is that the prompt was generic. To get authentic output: (1) Include specific numbers, names, and examples from your actual business or experience — not placeholders. (2) Tell the AI your presentation style: "I use dry humor," "I open with personal stories," "I prefer Socratic questions over statements." (3) Feed it your actual data and ask it to find the narrative, rather than asking it to make up data. (4) After generating, do a "voice pass" — read every slide out loud and rewrite anything that does not sound like something you would actually say on stage or in a meeting. (5) Add one personal anecdote or specific detail per section that only you could know. The prompts in this guide include voice and context fields specifically to avoid the generic AI sound.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use these prompts with Google Slides, PowerPoint, or Keynote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. These prompts generate the content and structure for your presentation — the narrative arc, slide-by-slide copy, speaker notes, and data visualization recommendations. You then bring that content into whichever tool you prefer: Google Slides, PowerPoint, Keynote, Canva, Gamma, or any other presentation software. The prompts are tool-agnostic by design. For the fastest workflow: (1) Use the prompt in ChatGPT or Claude to generate your slide content and speaker notes. (2) Copy the slide titles and bullet points into your preferred tool. (3) Apply your company template or brand guidelines. (4) Add charts, images, and visuals based on the AI\'s layout recommendations. This two-step approach gives you professional content with your preferred visual design.'
        }
      }
    ]
  };

  const promptBlockStyle = {
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    marginBottom: '24px'
  };

  const ctaBoxStyle = {
    marginTop: '32px',
    marginBottom: '32px',
    padding: '24px',
    background: '#F0F4FF',
    border: '1px solid #93B4FF',
    borderRadius: '8px',
    textAlign: 'center'
  };

  const proTipStyle = {
    marginTop: '16px',
    marginBottom: '24px',
    padding: '16px 20px',
    background: '#FFFBEB',
    border: '1px solid #FCD34D',
    borderRadius: '8px',
    fontSize: '14px'
  };

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI presentation prompts, ChatGPT pitch deck, AI slide content, AI presentation maker prompts, best AI prompts for presentations, AI pitch deck prompts, ChatGPT presentation, AI keynote prompts, AI sales deck, ChatGPT slides, AI board meeting deck, presentation AI prompts 2026" />
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

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          15 AI Prompts That Will Make Your Presentations 10x Better in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 26, 2026 &middot; 16 min read &middot; Midas Tools Team</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p>Most people spend 6&ndash;8 hours building a presentation. They open a blank slide deck, stare at the white rectangle, type &ldquo;Agenda&rdquo; on slide two, and then spiral into formatting bullet points for the next four hours. The result? A mediocre deck that looks like every other deck in the room.</p>

        <p>Here is the uncomfortable truth: <strong>presentations are the highest-leverage communication tool in business</strong>, and almost nobody is good at them. A single pitch deck can raise $5 million. A single sales presentation can close a $500K deal. A single keynote can establish you as a thought leader in your industry. And yet most professionals treat presentation creation as a chore &mdash; something to rush through the night before.</p>

        <p>AI changes this equation completely. Not because AI can make slides look pretty (it can help with that too), but because AI solves the hardest part of any presentation: <strong>figuring out what to say and in what order.</strong> The narrative structure. The persuasive arc. The slide-by-slide logic that takes an audience from &ldquo;I do not care&rdquo; to &ldquo;I am convinced.&rdquo;</p>

        <p>With the right prompts, you can go from a blank deck to a fully structured, narrative-driven presentation in 20 minutes instead of 6 hours. Not a generic outline &mdash; a specific, detailed, slide-by-slide blueprint with headlines, talking points, speaker notes, and even data visualization recommendations tailored to your exact audience and objective.</p>

        <p>But &ldquo;make me a presentation about Q3 results&rdquo; will give you garbage. Just like every other AI use case, the quality of the output depends entirely on the quality of the prompt. Generic prompts produce generic slide decks that sound like they were written by a committee that has never met your audience.</p>

        <p>The 15 prompts in this guide are different. Each one is built for a specific presentation scenario &mdash; pitch decks, sales decks, keynotes, board meetings, strategy presentations &mdash; and each includes the frameworks, structures, and audience psychology that separate forgettable presentations from ones that actually move people to action.</p>

        <p>Every prompt uses <strong>[BRACKETS]</strong> for the details you fill in. Copy the prompt, replace the brackets with your specifics, paste into ChatGPT, Claude, or <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>our free Prompt Generator</Link>, and get a presentation blueprint you can drop straight into PowerPoint, Google Slides, Keynote, or Canva.</p>

        <p>Let us build some decks.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* WHY PRESENTATIONS + AI                      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Why Presentations + AI Is the Productivity Unlock Most People Overlook</h2>

        <p>Everyone is talking about AI for writing emails, blog posts, and social media captions. Almost nobody is talking about AI for presentations. That is a massive missed opportunity. Here is why:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>65% of people are visual learners</strong> (Social Science Research Network), which means presentations are the most effective way to communicate complex ideas in business settings.</li>
          <li><strong>30 million presentations</strong> are created every single day worldwide (Slides Carnival, 2026). The demand is enormous, and most of those presentations are mediocre because people run out of time or creative energy.</li>
          <li>Executives spend an average of <strong>3&ndash;7 hours per week</strong> creating or reviewing slide decks (Beautiful.ai Workplace Report). That is 150&ndash;350 hours per year &mdash; nearly two full months of work.</li>
          <li>Pitch decks with a <strong>clear narrative arc</strong> are 2x more likely to secure follow-up meetings than feature-focused decks (DocSend Pitch Deck Analysis, 2025).</li>
          <li>Presenters who use <strong>structured storytelling frameworks</strong> are rated 22% more persuasive by audiences compared to those who present information linearly (Harvard Business Review).</li>
          <li>AI can reduce presentation creation time by <strong>70&ndash;80%</strong> when used for narrative structuring, slide copy, and speaker notes &mdash; the three most time-consuming parts of the process.</li>
        </ul>

        <p>The math is clear: presentations are high-stakes, time-consuming, and most people struggle with the narrative structure. AI is exceptionally good at narrative structure. Put them together and you have an unfair advantage that almost nobody is using yet.</p>

        <p>Here are the prompts.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: PITCH DECKS & FUNDRAISING (1-3)  */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Pitch Decks &amp; Fundraising (Prompts 1&ndash;3)</h2>
        <p>Your pitch deck is probably the most consequential document your startup will ever create. It determines whether you get a meeting, whether you get a second meeting, and whether you get a term sheet. Investors see thousands of decks per year. The ones that stand out do not have the fanciest designs &mdash; they have the clearest narratives. These prompts help you build that narrative.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. The Investor Pitch Deck Narrative Builder</h3>
        <p>This prompt creates a complete 10&ndash;12 slide pitch deck narrative &mdash; not just an outline, but the actual slide-by-slide content including headlines, key points, speaker notes, and transition logic. It follows the structure that top VCs (Sequoia, a16z, Y Combinator) recommend, with a storytelling layer that most founders miss.</p>
        <div style={promptBlockStyle}>
{`I need a complete investor pitch deck for my startup. Generate slide-by-slide content I can drop directly into my deck.

Company details:
- Company name: [COMPANY NAME]
- One-line description: [WHAT YOU DO IN ONE SENTENCE, e.g., "AI-powered inventory management for DTC e-commerce brands"]
- Stage: [PRE-SEED / SEED / SERIES A / SERIES B]
- Amount raising: $[AMOUNT]
- Industry: [INDUSTRY/VERTICAL]
- Founded: [YEAR]
- Team size: [NUMBER]

The problem:
- Who has this problem: [TARGET CUSTOMER, e.g., "DTC e-commerce brands doing $1M-$50M in annual revenue"]
- The specific pain point: [DESCRIBE THE PROBLEM IN DETAIL, e.g., "They overstock by 30% on average, tying up $200K+ in dead inventory because they forecast demand using spreadsheets and gut instinct"]
- Why existing solutions fail: [WHAT THEY USE NOW AND WHY IT DOESN'T WORK, e.g., "Legacy ERP systems are built for enterprises, cost $50K+/year, and require 6-month implementations. Spreadsheets break at scale. Most brands just guess."]
- The cost of the problem: [QUANTIFY IT, e.g., "$180B in dead inventory across the DTC industry annually"]

Your solution:
- What you built: [DESCRIBE YOUR PRODUCT, e.g., "An AI demand forecasting engine that connects to Shopify/Amazon in 5 minutes and reduces overstock by 40%"]
- Key differentiator: [WHAT MAKES YOU DIFFERENT, e.g., "We use real-time sell-through data + external signals (weather, social trends, competitor pricing) instead of just historical sales"]
- How it works (3 steps): [SIMPLE EXPLANATION, e.g., "1. Connect your store, 2. AI analyzes 50+ demand signals, 3. Get weekly restock recommendations"]

Traction:
- Current metrics: [REVENUE, USERS, GROWTH RATE, e.g., "$45K MRR, 120 paying customers, 18% month-over-month growth"]
- Key milestones: [2-3 ACHIEVEMENTS, e.g., "Launched 8 months ago, $0 to $45K MRR with no paid marketing, 95% gross retention"]
- Notable customers or logos: [IF ANY]
- Waitlist or pipeline: [IF APPLICABLE]

Market:
- TAM (Total Addressable Market): $[AMOUNT] — [HOW YOU CALCULATED IT]
- SAM (Serviceable Addressable Market): $[AMOUNT]
- SOM (Serviceable Obtainable Market): $[AMOUNT]
- Growth rate of the market: [X]% CAGR

Business model:
- How you make money: [PRICING MODEL, e.g., "SaaS subscription: $299/month for Growth plan, $799/month for Enterprise"]
- Unit economics: [CAC, LTV, PAYBACK PERIOD, GROSS MARGIN if available]
- Expansion revenue: [HOW CUSTOMERS SPEND MORE OVER TIME]

Competition:
- Direct competitors: [LIST 2-4, e.g., "Inventory Planner, Cogsy, Flieber"]
- Indirect competitors: [LIST 2-3, e.g., "Spreadsheets, legacy ERP systems, manual counting"]
- Your unfair advantage: [WHY YOU WIN, e.g., "Proprietary external signal data, 5-minute setup vs. 6-month implementation, 3x more accurate forecasts in blind testing"]

Team:
- Founder(s): [NAMES, TITLES, AND RELEVANT BACKGROUND, e.g., "Jane Doe, CEO — ex-Amazon supply chain (8 years), built the demand forecasting model for Amazon Fresh"]
- Key hires: [IF ANY]
- Why this team: [WHAT MAKES YOU UNIQUELY QUALIFIED, e.g., "We've spent 25 combined years in supply chain and built forecasting models that served 200M+ customers at Amazon"]

The ask:
- Raising: $[AMOUNT] at $[VALUATION] (or "[AMOUNT] on a SAFE with $[CAP]")
- Use of funds: [HOW YOU'LL SPEND IT, e.g., "60% engineering (hire 4 engineers), 25% go-to-market (first sales hire + paid acquisition tests), 15% operations"]
- Milestones this funding enables: [WHAT YOU'LL ACHIEVE, e.g., "Get to $200K MRR and 500 customers in 12 months, proving the path to Series A"]

Now create the pitch deck:

For EACH slide, provide:
1. SLIDE TITLE: A compelling headline (not generic labels like "Market" — use insight-driven headlines like "DTC brands waste $180B/year on dead inventory")
2. KEY CONTENT: The 3-5 bullet points or visual description for the slide body
3. VISUAL RECOMMENDATION: What type of visual works best (chart type, screenshot mockup, comparison table, icon grid, etc.)
4. SPEAKER NOTES: 4-6 sentences of what I should SAY while this slide is on screen — the story behind the data, the anecdote, the conviction
5. TRANSITION: One sentence that bridges to the next slide, creating narrative momentum

Use this slide order:
1. Title / Hook slide
2. Problem
3. The cost of the problem (quantified)
4. Solution
5. How it works (product demo/walkthrough)
6. Traction / Proof
7. Market size
8. Business model
9. Competitive landscape
10. Team
11. The Ask + Use of funds
12. Vision / Closing slide

IMPORTANT: The deck should tell a STORY, not just present information. Each slide should make the next slide feel inevitable. The narrative arc is: "Here's a massive problem → here's why nobody has solved it well → here's our elegant solution → here's proof it works → here's how big this can be → here's why we're the team to do it → here's what we need from you."

Write the deck so that if an investor reads it WITHOUT a presenter, it still tells a compelling, self-contained story.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> After generating your pitch deck, apply the &ldquo;so what?&rdquo; test to every slide. Read each headline and ask yourself: does this tell the investor something they did not already know or assume? &ldquo;We have a great team&rdquo; fails the test. &ldquo;Our CTO built the forecasting engine that powers 40% of Amazon Fresh orders&rdquo; passes it. The best pitch decks are built entirely on &ldquo;so what?&rdquo;-proof headlines.
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. The Market Sizing Slide Generator</h3>
        <p>The market sizing slide is where most pitch decks lose credibility. Founders either throw out a massive TAM number with no logic behind it (&ldquo;AI is a $500B market&rdquo;) or they undersell a compelling opportunity. This prompt creates a market sizing slide that is both ambitious and defensible &mdash; with bottom-up math that investors can follow.</p>
        <div style={promptBlockStyle}>
{`I need a rigorous, investor-grade market sizing analysis for my pitch deck. This needs to be ambitious but defensible — I want investors to nod, not roll their eyes.

My company:
- What I sell: [PRODUCT/SERVICE AND PRICING, e.g., "AI inventory forecasting SaaS at $299-$799/month"]
- Who I sell to: [TARGET CUSTOMER SEGMENT, e.g., "DTC e-commerce brands on Shopify and Amazon doing $1M-$50M in annual revenue"]
- My geography (current): [WHERE YOU OPERATE NOW, e.g., "US and Canada"]
- My geography (future): [WHERE YOU'LL EXPAND, e.g., "English-speaking markets, then Europe"]
- My pricing model: [HOW YOU CHARGE, e.g., "$299/month Growth plan, $799/month Enterprise plan, average contract value $450/month"]

Create a market sizing slide with THREE layers:

1. TAM (Total Addressable Market):
   - Define the broadest reasonable market for my product category
   - Use a top-down approach: start with the total number of potential customers in my category globally, multiply by my average revenue per customer
   - Cite real or realistic data sources (industry reports, census data, platform data)
   - Show the math step by step so investors can follow the logic
   - Express as both dollar amount and number of potential customers

2. SAM (Serviceable Addressable Market):
   - Narrow to the segment I can realistically reach with my current product and go-to-market
   - Apply filters: geography, company size, platform (e.g., Shopify only), willingness to pay, technical readiness
   - Show the math: "X total companies × Y% that match our criteria × Z average ACV = SAM"
   - This should be 10-30% of TAM for most startups

3. SOM (Serviceable Obtainable Market):
   - What I can realistically capture in the next 3-5 years
   - Factor in: competition, sales capacity, market penetration rates for similar SaaS categories
   - Show the math: "SAM × realistic market share % = SOM"
   - This should feel achievable but exciting — typically 1-5% of SAM in year 1, growing to 10-20% by year 5

Also provide:
- MARKET GROWTH: What is the CAGR for this market? Is it expanding? Why?
- TAILWINDS: 2-3 macro trends that are making this market bigger or more urgent (e.g., "Shopify merchant count growing 25% YoY," "supply chain disruptions making forecasting critical," "AI adoption in SMBs accelerating")
- VISUAL RECOMMENDATION: Describe the best way to visualize this on one slide (nested circles, bar chart, funnel, or table)
- INVESTOR OBJECTION PREP: What will a skeptical investor challenge about these numbers, and how should I respond?

IMPORTANT: Do NOT use vague sources like "according to industry estimates." Use specific, nameable sources — even if approximate. Investors want to see that you did the work, not that you Googled "TAM for [industry]."

Format the output so I can put the key numbers and visual on the slide, and keep the detailed math in my speaker notes or appendix.`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. The Competitive Landscape Slide</h3>
        <p>Investors do not believe you have no competition. If you say &ldquo;we have no competitors,&rdquo; it means either you have not done your research or there is no market. This prompt creates a competitive landscape slide that honestly positions you against alternatives while making your differentiation crystal clear.</p>
        <div style={promptBlockStyle}>
{`Create a competitive landscape slide for my pitch deck that makes our differentiation undeniable.

My company:
- What we do: [ONE-SENTENCE DESCRIPTION]
- Our target customer: [WHO WE SERVE]
- Our pricing: [PRICE POINT AND MODEL]
- Our key differentiators: [LIST 3-5 THINGS THAT MAKE YOU DIFFERENT, e.g., "5-minute setup vs. 6-month implementation," "AI-powered vs. rules-based," "built specifically for DTC vs. retrofitted enterprise tool," "real-time external signals vs. historical data only," "$299/month vs. $50K/year"]

Direct competitors (provide what you know):
1. [COMPETITOR 1 NAME]: [BRIEF DESCRIPTION, PRICING IF KNOWN, STRENGTHS AND WEAKNESSES]
2. [COMPETITOR 2 NAME]: [BRIEF DESCRIPTION, PRICING IF KNOWN, STRENGTHS AND WEAKNESSES]
3. [COMPETITOR 3 NAME]: [BRIEF DESCRIPTION, PRICING IF KNOWN, STRENGTHS AND WEAKNESSES]
4. [COMPETITOR 4 NAME — OPTIONAL]

Indirect competitors / alternatives:
- [e.g., "Spreadsheets / manual tracking"]
- [e.g., "Legacy ERP systems (SAP, Oracle, NetSuite)"]
- [e.g., "Hiring an in-house data analyst"]
- [e.g., "Doing nothing / gut instinct"]

Create the competitive slide with:

1. SLIDE HEADLINE: An insight-driven headline that frames the landscape in your favor. NOT "Competitive Landscape" — something like "Legacy tools weren't built for [YOUR TARGET CUSTOMER]" or "The market is stuck between overbuilt enterprise tools and underbuilt spreadsheets."

2. POSITIONING MATRIX / 2x2 GRID:
   - Choose the TWO axes that best highlight your differentiation
   - Suggest 3-4 axis options and recommend the best pair. Good axes include: ease of setup, cost, accuracy, time to value, customization, scalability, AI-native vs. legacy, SMB-focused vs. enterprise-focused
   - Plot yourself and each competitor on the grid
   - You should be alone in the top-right quadrant (or whichever quadrant represents the best position)

3. FEATURE COMPARISON TABLE (alternative or supplement to the 2x2):
   - Rows: 6-8 key capabilities that matter to your target customer
   - Columns: Your product + 3-4 competitors
   - Use checkmarks, X marks, and "partial" indicators
   - Choose capabilities where you win on at least 5 of 8 — this is not about being dishonest, it's about choosing the RIGHT comparison criteria that reflect what your target customer actually cares about

4. SPEAKER NOTES:
   - How to present this slide without badmouthing competitors (investors hate that)
   - The key talking point: "We respect what [COMPETITOR] has built for [THEIR SEGMENT]. We're building specifically for [YOUR SEGMENT], which has different needs."
   - How to handle "what if [BIG COMPANY] builds this?" — your moat explanation
   - 2-3 customer quotes that explain why they chose you over alternatives

5. APPENDIX DETAIL: A more detailed competitive breakdown I can have ready if investors ask follow-up questions during Q&A. For each competitor, include: founding year, funding raised, estimated revenue, target market, pricing, key strengths, key weaknesses, and why we win against them.

IMPORTANT: Be honest about competitor strengths. Investors will know if you're misrepresenting. The goal is not to pretend competitors are bad — it's to show that you have a clear, defensible position in the market that competitors cannot easily replicate.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The most common mistake on competitive slides is choosing comparison axes that make you look good but do not reflect what customers actually care about. Before building this slide, interview 5 customers and ask: &ldquo;What were the top 3 criteria when you chose us over alternatives?&rdquo; Use THOSE criteria as your axes. Investors trust customer-validated differentiation far more than founder-asserted differentiation.
        </div>

        {/* CTA AFTER PITCH DECK SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 100+ presentation prompts with proven frameworks built in?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Presentation Kit includes pitch deck templates, sales deck frameworks, keynote outlines, board meeting structures, and slide storytelling formulas. Copy, paste, present, persuade.</p>
          <a href={PRESENTATION_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Presentation Kit
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: SALES PRESENTATIONS (4-6)        */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Sales Presentations (Prompts 4&ndash;6)</h2>
        <p>Sales presentations close deals. The difference between a $10K deal and a $100K deal is often not the product &mdash; it is how the product was presented. These prompts help you build sales decks that are structured around the buyer&rsquo;s psychology, not your feature list. Because nobody ever closed a deal by reading bullet points about features for 45 minutes.</p>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. The Discovery Call Follow-Up Deck</h3>
        <p>After a discovery call, you need to follow up with a deck that proves you listened. This is not a generic product overview &mdash; it is a customized presentation that mirrors the prospect&rsquo;s specific pain points, maps your solution to their exact situation, and makes the business case in their language. It is the deck that separates the top 10% of sales reps from everyone else.</p>
        <div style={promptBlockStyle}>
{`Create a customized follow-up sales deck based on the discovery call notes below. This deck should feel like it was built specifically for this prospect — because it was.

My product/service:
- Company name: [YOUR COMPANY]
- What we sell: [PRODUCT/SERVICE DESCRIPTION]
- Pricing: [PRICING MODEL AND RANGE]
- Key value propositions: [LIST 3-5]
- Implementation timeline: [HOW LONG TO GET STARTED]
- Typical ROI: [WHAT CUSTOMERS TYPICALLY SEE, e.g., "30% reduction in churn within 90 days," "5 hours saved per week per rep"]

Discovery call notes:
- Prospect company: [COMPANY NAME]
- Prospect's role: [TITLE AND RESPONSIBILITIES]
- Company size: [REVENUE, EMPLOYEES, OR OTHER RELEVANT SIZE METRIC]
- Industry: [THEIR INDUSTRY]
- Current solution: [WHAT THEY USE NOW]
- Pain points they mentioned:
  1. [PAIN POINT 1, e.g., "Their sales team spends 3 hours per day on data entry instead of selling"]
  2. [PAIN POINT 2, e.g., "They can't get accurate forecasts — their pipeline reports are always wrong"]
  3. [PAIN POINT 3, e.g., "They lost 2 deals last quarter because their follow-up process was too slow"]
- Goals they mentioned: [WHAT THEY WANT TO ACHIEVE, e.g., "Hit $10M ARR by end of year," "Reduce sales cycle from 45 days to 30 days"]
- Budget indicators: [ANY BUDGET INFO SHARED, e.g., "They mentioned their current tool costs $2K/month and they'd pay more for something that works"]
- Decision-making process: [WHO ELSE IS INVOLVED, TIMELINE, e.g., "Need to get VP of Sales approval, want to decide by end of month"]
- Objections or concerns raised: [ANY HESITATIONS, e.g., "Worried about implementation disrupting their Q2 pipeline," "Had a bad experience migrating from their last CRM"]
- Their definition of success: [HOW THEY'LL MEASURE WHETHER THIS WORKED]

Create a 8-10 slide deck:

SLIDE 1 — TITLE:
- "[PROSPECT COMPANY] + [YOUR COMPANY]: [OUTCOME-FOCUSED TITLE]"
- e.g., "Acme Corp + SalesAI: Hitting $10M ARR by Automating Your Pipeline"
- Include both logos, meeting date, and your name/title

SLIDE 2 — "WHAT WE HEARD":
- Mirror back their pain points in their own words (quote them if possible)
- This slide proves you listened and immediately builds trust
- Frame each pain point in terms of BUSINESS IMPACT, not just inconvenience
- e.g., "3 hours/day on data entry = $180K/year in lost selling time across your 8-person team"

SLIDE 3 — "THE COST OF DOING NOTHING":
- Quantify what happens if they don't solve these problems
- Use their own numbers: revenue at risk, time wasted, deals lost, team turnover
- This slide creates urgency without being manipulative — it's math

SLIDE 4 — "OUR RECOMMENDATION":
- Present your solution mapped specifically to their pain points
- For each pain point from Slide 2, show exactly which feature/capability addresses it
- Use a two-column format: "Your Challenge" → "Our Solution"

SLIDE 5 — "HOW IT WORKS":
- 3-4 step implementation plan specific to their situation
- Include timeline: "Week 1: [X], Week 2: [Y], Week 3: [Z], Week 4: Live"
- Address their migration concern if applicable
- Show that you've thought about THEIR specific implementation, not a generic process

SLIDE 6 — "RESULTS YOU CAN EXPECT":
- Projected outcomes based on their specific metrics
- e.g., "Based on your 8-person sales team and current 45-day sales cycle, we project: [X] hours saved per week, [Y]% improvement in forecast accuracy, [Z] additional deals closed per quarter"
- Include a conservative, expected, and optimistic scenario

SLIDE 7 — "PROOF IT WORKS":
- 2-3 case studies from companies similar to theirs (same industry, size, or pain point)
- For each: company name (or anonymized), starting situation, what they implemented, measurable results, timeline to results
- If you have a case study from their exact industry, lead with that one

SLIDE 8 — "INVESTMENT":
- Present pricing in the context of ROI, not just cost
- "Your investment: $[X]/month → Projected return: $[Y]/month → ROI: [Z]x in [TIMEFRAME]"
- Show pricing tiers if applicable, with a recommended option highlighted
- Address their budget if they shared it: "Within your indicated budget of [X], we recommend [SPECIFIC PLAN]"

SLIDE 9 — "NEXT STEPS":
- Clear, specific action items with dates
- e.g., "1. [YOUR NAME] sends over the proposal and contract by [DATE]. 2. [PROSPECT] reviews with [VP NAME] by [DATE]. 3. Kickoff call scheduled for [DATE]. 4. Live by [DATE]."
- Include who is responsible for each step
- End with: "Any questions before we move forward?"

SLIDE 10 — APPENDIX (optional slides for Q&A):
- Technical specifications
- Security and compliance details
- Full feature comparison vs. their current solution
- Additional case studies
- Team bios

For EACH slide, provide:
- Slide headline
- Slide body content (formatted for the slide — concise, visual-friendly)
- Speaker notes (what to SAY, 4-6 sentences)
- Visual recommendation (chart, screenshot, comparison table, etc.)

IMPORTANT: This deck should feel like a conversation continuation, not a sales pitch. Reference their specific words, their specific numbers, and their specific goals. Every slide should answer the question: "Why should [PROSPECT COMPANY] specifically choose [YOUR COMPANY] to achieve [THEIR SPECIFIC GOAL]?"`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The &ldquo;What We Heard&rdquo; slide is the single most powerful slide in any sales deck. When a prospect sees their own words reflected back at them with quantified business impact, two things happen: they feel understood, and they realize the problem is bigger than they thought. Both reactions move them closer to buying. Spend extra time making this slide perfect &mdash; it is the foundation everything else builds on.
        </div>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. The ROI Justification Deck</h3>
        <p>When a prospect says &ldquo;I need to justify this to my boss,&rdquo; this is the deck you send them. It is not a sales deck &mdash; it is a business case that your champion can present internally to get budget approval. The structure is designed for decision-makers who were not in the sales conversation and need to see the numbers.</p>
        <div style={promptBlockStyle}>
{`Create an ROI justification deck that my prospect can present internally to get budget approval. This deck needs to speak to the CFO / VP / decision-maker who was NOT on our sales calls and only cares about the numbers.

Context:
- My product: [PRODUCT NAME AND DESCRIPTION]
- Price: $[MONTHLY OR ANNUAL COST]
- Contract length: [MONTHLY / ANNUAL / MULTI-YEAR]
- Prospect company: [COMPANY NAME]
- Prospect's role: [THE PERSON WHO WILL PRESENT THIS INTERNALLY]
- Decision-maker they need to convince: [TITLE, e.g., "CFO," "VP of Operations," "CEO"]
- The decision-maker cares about: [WHAT METRICS MATTER TO THEM, e.g., "revenue growth," "cost reduction," "efficiency gains," "risk mitigation"]

Current state (the problem):
- Current process: [HOW THEY DO IT NOW]
- Current costs: [WHAT THEY SPEND NOW — software, headcount, time, opportunity cost]
- Current pain: [QUANTIFIED PROBLEMS, e.g., "15 hours/week of manual reporting across 5 team members," "average deal close rate of 18%," "$400K in lost revenue from churned accounts last year"]
- Risk of inaction: [WHAT HAPPENS IF THEY DON'T CHANGE, e.g., "Competitors already using AI tools are closing deals 40% faster"]

Proposed solution (your product):
- What it replaces or augments: [WHICH CURRENT TOOLS/PROCESSES IT AFFECTS]
- Implementation cost: $[ONE-TIME SETUP, MIGRATION, TRAINING]
- Ongoing cost: $[RECURRING COST]
- Implementation timeline: [WEEKS/MONTHS]
- Time to first value: [WHEN THEY'LL SEE INITIAL RESULTS]

Expected outcomes (be specific):
- Cost savings: [e.g., "Eliminate $80K/year in manual data entry labor," "Reduce tool spend by $24K/year by replacing 3 tools with one"]
- Revenue impact: [e.g., "Increase close rate from 18% to 25%," "Reduce churn by 15% = $60K in retained revenue"]
- Efficiency gains: [e.g., "Save 15 hours/week across the team," "Reduce reporting time from 3 days to 3 hours"]
- Risk reduction: [e.g., "Automated compliance reduces audit risk," "Better forecasting reduces cash flow surprises"]

Create a 7-slide ROI deck:

SLIDE 1 — TITLE: "[PRODUCT NAME]: Business Case for [PROSPECT COMPANY]"
- Clean, professional, includes date and "Prepared for [DECISION-MAKER NAME/TITLE]"

SLIDE 2 — EXECUTIVE SUMMARY:
- 3-4 bullet points maximum
- Investment amount, expected return, payback period, strategic rationale
- This slide should be sufficient for someone who only reads one slide

SLIDE 3 — CURRENT STATE: THE COST OF THE STATUS QUO:
- Quantify everything: labor costs, software costs, opportunity costs, risk costs
- Total it up: "The current approach costs $[X]/year when you factor in [ITEMIZED LIST]"
- Visual: stacked bar chart or pie chart showing cost breakdown
- Tone: objective, data-driven, not emotional

SLIDE 4 — PROPOSED SOLUTION: WHAT CHANGES:
- Simple before/after comparison
- Which processes change, which tools are replaced, what the team's workflow looks like
- Implementation timeline with milestones
- Keep it practical — decision-makers want to know "what does this mean day to day for my team?"

SLIDE 5 — ROI ANALYSIS:
- This is the money slide. Three scenarios:
  - CONSERVATIVE: Assumptions on the low end. "Even if we only achieve 50% of projected outcomes..."
  - EXPECTED: Most likely outcome based on customer data and benchmarks
  - OPTIMISTIC: Best-case scenario based on top-performing customers
- For each scenario show: Year 1 investment, Year 1 return, Net ROI, Payback period
- Visual: table with three columns, or a bar chart comparing investment vs. return
- Include the calculation methodology so the CFO can verify the math

SLIDE 6 — RISK ANALYSIS:
- Risks of adopting (and mitigation): implementation disruption, learning curve, vendor lock-in
- Risks of NOT adopting: falling behind competitors, increasing costs, team burnout, missed targets
- Present this as a balanced analysis, not a scare tactic
- Include your guarantee, pilot program, or other risk-reduction measures

SLIDE 7 — RECOMMENDATION AND NEXT STEPS:
- Clear recommendation: "We recommend [SPECIFIC PLAN/TIER] at $[PRICE]"
- Immediate next steps with timeline
- Decision deadline if applicable
- Contact information for questions
- "Prepared by [PROSPECT'S NAME/TITLE] with data from [YOUR COMPANY]" — this positions your champion as the author

For each slide, provide:
- Slide content (formatted for a slide — no paragraphs, use bullets, numbers, and visuals)
- Speaker notes for your champion to use when presenting internally
- Visual recommendation

IMPORTANT: This deck must be written from the PROSPECT'S perspective, not yours. It should read as if the prospect created it to present to their boss. Use "we" to mean the prospect's company, not yours. The tone should be analytical and objective — zero sales language.`}
        </div>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. The Customer Case Study Slide Builder</h3>
        <p>Case studies are the most persuasive sales collateral that exists. A well-structured case study slide does not just say &ldquo;our customer liked us&rdquo; &mdash; it tells a story of transformation that the prospect can see themselves in. This prompt turns raw customer data into a compelling narrative slide or mini-deck.</p>
        <div style={promptBlockStyle}>
{`Turn the following customer success data into a compelling case study presentation (1-3 slides) I can use in sales decks, on my website, and in pitch materials.

Customer information:
- Customer name: [COMPANY NAME — or "anonymized" if they prefer]
- Industry: [THEIR INDUSTRY]
- Company size: [EMPLOYEES, REVENUE, OR OTHER SIZE METRIC]
- Customer's role / champion: [TITLE OF THE PERSON WHO BOUGHT AND USES YOUR PRODUCT]
- How long they've been a customer: [TIMEFRAME]

Before (the problem):
- What they were doing before: [PREVIOUS PROCESS OR TOOL]
- Specific pain points: [LIST 2-3, e.g., "Manual reporting took 20 hours/week," "Forecasts were off by 30%+," "They lost 3 key accounts due to slow response times"]
- The trigger: [WHY DID THEY START LOOKING FOR A SOLUTION, e.g., "They missed their Q3 target by $200K and the CEO demanded a fix"]
- What they tried before you: [OTHER SOLUTIONS THEY EVALUATED OR USED]

The decision:
- Why they chose you: [IN THEIR WORDS IF POSSIBLE, e.g., "The 5-minute setup won us over. We couldn't afford another 6-month implementation."]
- What the evaluation process looked like: [e.g., "Compared 4 vendors over 2 weeks, ran a pilot with 2 finalists"]

After (the results):
- Quantitative results: [HARD NUMBERS, e.g., "Reduced reporting time from 20 hours/week to 3 hours/week," "Forecast accuracy improved from 68% to 94%," "Closed $340K in at-risk revenue in the first quarter"]
- Qualitative results: [SOFT BENEFITS, e.g., "Team morale improved because reps spend time selling instead of doing data entry," "CEO now trusts the pipeline forecast"]
- Timeline to results: [HOW FAST, e.g., "First results in 2 weeks, full impact by month 3"]
- Direct quotes from the customer: [ANY TESTIMONIAL QUOTES YOU HAVE]

Create the case study slides:

FORMAT OPTION A — SINGLE SLIDE (for embedding in a sales deck):
- Headline: Result-focused, e.g., "[CUSTOMER] reduced [METRIC] by [X]% in [TIMEFRAME]"
- Layout: Three columns — BEFORE | SOLUTION | AFTER
- Key metrics with big numbers (the kind that make people pause)
- One pull quote from the customer
- Company logo (placeholder)
- Industry tag so prospects can see it's relevant to them

FORMAT OPTION B — 3-SLIDE MINI-DECK (for detailed case study presentation):

Slide 1: The Challenge
- Headline: "[CUSTOMER] was [PROBLEM STATEMENT]"
- 3-4 bullet points describing the situation
- One quote from the customer about the problem
- Visual: timeline or process diagram showing the broken workflow

Slide 2: The Solution
- Headline: "[CUSTOMER] implemented [YOUR PRODUCT] to [GOAL]"
- What they implemented and how
- Implementation timeline
- Key features they use
- Visual: screenshot or workflow diagram

Slide 3: The Results
- Headline: "[BIG RESULT NUMBER] — [TIMEFRAME]"
- 3-4 key metrics in large format (think scoreboard)
- Customer quote about the outcome
- "Next steps" — what they're doing with your product next (shows ongoing value)
- CTA: "See how [YOUR PRODUCT] can deliver similar results for [PROSPECT]"

For each format, provide the slide content plus speaker notes.

IMPORTANT: The best case studies follow a simple narrative: relatable problem → clear solution → undeniable results. Lead with the result in the headline — busy decision-makers should get the punchline from the headline alone. Then back it up with the story for those who want the details.`}
        </div>

        {/* CTA AFTER SALES SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>These 6 prompts cover pitch decks and sales. There are 9 more.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The full <Link href="/presentation-kit" style={{ color: '#3B5FFF' }}>AI Presentation Kit</Link> includes 100+ prompts covering every presentation type: investor pitches, sales decks, keynote talks, board meetings, training sessions, and more. Every prompt uses proven persuasion and storytelling frameworks.</p>
          <a href={PRESENTATION_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Presentation Kit
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: CONFERENCE & KEYNOTE (7-9)       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Conference &amp; Keynote Talks (Prompts 7&ndash;9)</h2>
        <p>Speaking at a conference or all-hands meeting is one of the fastest ways to build authority, generate leads, and advance your career. But most conference presentations are boring &mdash; slide after slide of bullet points read aloud to a room of people checking their phones. These prompts help you build talks that actually hold attention and get shared afterward.</p>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. The Conference Talk Outline Builder</h3>
        <p>This prompt creates a complete talk structure from a single topic idea. It generates the narrative arc, slide-by-slide outline, timing breakdown, and speaker notes &mdash; everything you need to go from &ldquo;I have to give a talk about X&rdquo; to &ldquo;I have a complete presentation plan&rdquo; in one session.</p>
        <div style={promptBlockStyle}>
{`I'm giving a conference talk and need a complete presentation outline with slide-by-slide content.

Talk details:
- Topic: [YOUR TOPIC, e.g., "How we scaled from 0 to $5M ARR with a 3-person team using AI automation"]
- Conference/event: [EVENT NAME, e.g., "SaaStr Annual," "company all-hands," "local meetup," "TEDx"]
- Time slot: [DURATION, e.g., "20 minutes + 5 min Q&A," "45 minutes," "lightning talk: 7 minutes"]
- Audience: [WHO'S IN THE ROOM, e.g., "200 SaaS founders and operators," "50 marketing professionals," "500 mixed business audience"]
- Audience expertise level: [BEGINNER / INTERMEDIATE / ADVANCED / MIXED]
- What they came to learn: [THEIR EXPECTATION, e.g., "actionable growth tactics," "inspiration and big ideas," "technical deep dives"]
- My goal for this talk: [WHAT I WANT TO HAPPEN AFTER, e.g., "generate leads for my product," "establish thought leadership," "get invited to more conferences," "motivate my team"]

My content:
- My main thesis / big idea: [THE ONE THING YOU WANT THEM TO REMEMBER, e.g., "You don't need a big team to build a big company if you leverage AI for the work that doesn't require human judgment"]
- Key supporting points:
  1. [POINT 1 WITH EVIDENCE, e.g., "We automated 70% of our customer support with AI agents, reducing response time from 4 hours to 4 minutes"]
  2. [POINT 2 WITH EVIDENCE, e.g., "Our AI content pipeline produces 40 blog posts/month that now generate 60% of our inbound leads"]
  3. [POINT 3 WITH EVIDENCE, e.g., "We built internal AI tools that save each team member 12 hours/week on repetitive tasks"]
- Stories I can tell: [LIST 2-3 ANECDOTES, e.g., "The time our AI chatbot closed a $50K deal at 3am while we were sleeping," "The disaster when we automated too aggressively and our AI sent a wrong email to 10K people"]
- Data I have: [STATS, CHARTS, RESULTS YOU CAN SHARE]
- My speaking style: [e.g., "conversational with humor," "data-driven and precise," "storytelling-focused," "high-energy motivational"]

Build the complete talk:

1. NARRATIVE ARC:
   - What's the emotional journey of the audience? Map it: Curiosity → Surprise → Understanding → Excitement → Empowerment
   - What's the "before and after" of this talk? Before: they believe [X]. After: they believe [Y].

2. SLIDE-BY-SLIDE OUTLINE:
   For each slide, provide:
   - Slide number and title
   - Slide content (what appears on screen — minimal text, one idea per slide)
   - Speaker notes (what I SAY — the actual talk, word for word or detailed bullet points)
   - Visual recommendation (photo, chart, single stat, quote, or just a word)
   - Timing (how long to spend on this slide)
   - Transition to next slide (the bridge sentence)

3. TIMING BREAKDOWN:
   - Opening / hook: [X] minutes
   - Setup / context: [X] minutes
   - Main content (3 key points): [X] minutes each
   - Stories / examples: [X] minutes total
   - Closing / CTA: [X] minutes
   - Buffer: [X] minutes
   - Total: [TALK DURATION]

4. AUDIENCE ENGAGEMENT MOMENTS:
   - Where to pause for laughter (if using humor)
   - Where to ask a question to the audience
   - Where to do a show-of-hands poll
   - Where to let a powerful stat or story land in silence

5. Q&A PREP:
   - 5 most likely questions the audience will ask
   - Concise, impressive answers for each
   - One question to plant if Q&A is slow: "A question I often get is..."

6. MEMORABLE MOMENTS:
   - The ONE slide/moment that will be screenshot and shared on social media
   - The ONE quote they'll remember a week later
   - The ONE actionable takeaway they can implement tomorrow

IMPORTANT: The best conference talks are NOT informational. They are transformational. The audience should leave thinking differently about something, not just knowing more facts. Structure this talk around changing a belief or mindset, with information as supporting evidence.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The most common mistake in conference talks is trying to cover too much. A 20-minute talk that makes one point brilliantly is 10x more effective than a 20-minute talk that makes five points adequately. Before finalizing your outline, ask: &ldquo;If the audience only remembers one thing from my talk, what should it be?&rdquo; Then ruthlessly cut everything that does not support that one thing.
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. The Opening Hook Generator</h3>
        <p>You have 30 seconds at the beginning of a talk to either capture the audience or lose them. Most speakers waste that window with &ldquo;Hi, my name is... and today I am going to talk about...&rdquo; This prompt generates powerful opening hooks that grab attention from the first sentence and make the audience put down their phones.</p>
        <div style={promptBlockStyle}>
{`I need a powerful opening for my presentation. Generate 5 different opening hooks I can choose from, each using a different technique.

My talk:
- Topic: [YOUR TOPIC]
- Audience: [WHO'S LISTENING]
- My main thesis: [THE BIG IDEA OF THE TALK]
- The emotion I want to create at the start: [CURIOSITY / SHOCK / EMPATHY / EXCITEMENT / TENSION]
- Talk length: [DURATION]
- Context: [CONFERENCE STAGE / TEAM MEETING / CLIENT PRESENTATION / WEBINAR / CLASSROOM]

Generate 5 opening hooks (each 30-90 seconds when spoken):

HOOK 1 — THE BOLD CLAIM:
- Open with a provocative, counterintuitive statement that challenges a common belief
- It should make the audience think "wait, what?" or "that can't be right"
- Follow it with: "And I'm going to prove it in the next [X] minutes."
- Example framework: "Everything you've been told about [TOPIC] is wrong. And it's costing you [SPECIFIC THING]."
- Write the complete opening (first 4-6 sentences) with speaker notes on delivery and pacing

HOOK 2 — THE PERSONAL STORY:
- Open with a vivid, specific moment in time: "It was [DATE/TIME]. I was [WHERE]. And [WHAT HAPPENED]."
- The story should be related to the talk's main thesis but not obviously so — create a narrative gap
- Keep it under 60 seconds — just enough to set the scene and create curiosity
- End the story with a cliffhanger: "And that moment changed everything. But I'll come back to that."
- Write the complete opening with delivery notes

HOOK 3 — THE AUDIENCE QUESTION:
- Open by asking the audience a question they can't ignore
- It should be a question where the answer reveals a problem they didn't realize they had
- Follow with a show of hands, a pause, or a surprising statistic that reframes the question
- Example framework: "Raise your hand if you've ever [COMMON EXPERIENCE]. Keep your hand up if [SURPRISING TWIST]. Look around. That's [PERCENTAGE] of this room."
- Write the complete opening with timing and interaction notes

HOOK 4 — THE SHOCKING STATISTIC:
- Open with a single, powerful number that stops the room
- The stat should be directly relevant to the audience's situation and slightly alarming
- Follow with context that makes the number personal: "That means every person in this room is [PERSONAL IMPACT]"
- Then pivot: "But what if I told you there's a way to [REVERSE THE STAT]?"
- Write the complete opening with visual recommendation (the number on screen, nothing else)

HOOK 5 — THE HYPOTHETICAL FUTURE:
- Open by painting a vivid picture of the future: "Imagine it's [DATE, 2-5 years out]. You walk into your office and [DESCRIBE A TRANSFORMED SCENARIO related to your topic]."
- Make it specific and sensory — what do they see, hear, feel?
- Then snap back to reality: "That future is closer than you think. And in the next [X] minutes, I'm going to show you exactly how to get there."
- Write the complete opening with pacing notes

For EACH hook, also provide:
- The transition sentence that bridges from the hook to the first main point of the talk
- Delivery tips: pace, volume, where to pause, where to make eye contact
- Risk assessment: when this hook works best and when it might fall flat
- Backup plan: if the hook doesn't land (especially for Hook 3 with audience interaction), how to recover gracefully`}
        </div>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. The Audience Engagement &amp; Interaction Planner</h3>
        <p>The difference between a talk people endure and a talk people remember is interaction. Passive audiences check out after 10 minutes. Active audiences stay engaged for 45. This prompt builds an engagement layer on top of your existing talk &mdash; polls, questions, activities, and moments that turn a monologue into a conversation.</p>
        <div style={promptBlockStyle}>
{`I have an existing presentation and I need to add audience engagement moments throughout to keep attention high and make the talk memorable.

My talk details:
- Topic: [YOUR TOPIC]
- Duration: [LENGTH, e.g., "30 minutes"]
- Audience: [WHO AND HOW MANY, e.g., "150 marketing professionals at a conference," "20 executives in a boardroom," "500 attendees at an all-hands"]
- Format: [IN-PERSON / VIRTUAL / HYBRID]
- Current structure: [BRIEF OUTLINE, e.g., "5 min intro, 20 min main content split into 4 sections, 5 min closing"]
- My comfort level with interaction: [HIGH — I love improv / MEDIUM — I can handle structured interaction / LOW — I prefer predictable moments]
- Tools available: [e.g., "Slido for polls," "just a mic and slides," "Zoom chat and reactions," "Mentimeter"]

My talk sections (provide 3-5):
1. [SECTION 1 TOPIC AND KEY POINT]
2. [SECTION 2 TOPIC AND KEY POINT]
3. [SECTION 3 TOPIC AND KEY POINT]
4. [SECTION 4 TOPIC AND KEY POINT — optional]
5. [SECTION 5 TOPIC AND KEY POINT — optional]

Create an engagement plan:

FOR EACH SECTION, provide ONE engagement moment:

1. ENGAGEMENT TYPE: [Poll / Show of hands / Think-pair-share / Live demo / Audience question / Guided exercise / Fill-in-the-blank / Social media moment / Story prompt / Reflection pause]

2. EXACT SCRIPT: What I say to set up the interaction, word for word. Include:
   - The transition INTO the interaction: "Before I show you the data, I want to know..."
   - The interaction itself: exactly what I ask or instruct
   - The transition OUT of the interaction: how I use their response to lead into my next point
   - What I say if nobody participates (the rescue plan)

3. TIMING: How long this takes (30 seconds for a show-of-hands, 2-3 minutes for a think-pair-share)

4. PURPOSE: Why this interaction exists at this moment — what it achieves for the talk's narrative

5. RISK LEVEL: [LOW / MEDIUM / HIGH] and what could go wrong + how to handle it

Also provide:

OPENING INTERACTION (first 60 seconds):
- A warm-up interaction that gets the audience engaged before you start the main content
- This should be low-risk and high-participation (everyone can do it)

CLOSING INTERACTION (last 2 minutes):
- A memorable closing moment that reinforces the main takeaway
- This should create an emotional high point — the moment they'll remember

VIRTUAL-SPECIFIC ADAPTATIONS (if applicable):
- How to modify each interaction for Zoom/Teams/virtual audiences
- Chat-based alternatives for every interaction
- How to handle the "dead air" problem in virtual settings

TIMING BUDGET:
- Total interaction time: [X] minutes out of [TOTAL] talk time
- Recommended ratio: 15-25% of total talk time should be interactive
- Where to add buffer time in case an interaction runs long

IMPORTANT: Every interaction should serve the talk's narrative — not just break up the monotony. The best engagement moments make the audience discover your point themselves, rather than you telling them. A well-placed poll that reveals a surprising result is worth more than 5 slides of data.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The 10-minute rule is real. Research on attention spans consistently shows that audiences start to disengage after 10 minutes of passive listening. Plan one engagement moment every 7&ndash;10 minutes as a &ldquo;reset&rdquo; that re-captures attention. Even something as simple as asking the audience to turn to the person next to them and share one thought for 30 seconds can reset the attention clock.
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: BUSINESS REPORTS (10-12)         */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Business Reports &amp; Internal Decks (Prompts 10&ndash;12)</h2>
        <p>Internal presentations &mdash; quarterly reviews, board meetings, strategy decks &mdash; might not feel as glamorous as a keynote, but they are where careers are made and company direction is set. The executives who present clearly and persuasively in these settings are the ones who get promoted, funded, and trusted with bigger decisions. These prompts help you build internal decks that are concise, data-driven, and action-oriented.</p>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. The Quarterly Business Review (QBR) Deck</h3>
        <p>The quarterly business review is the presentation most professionals dread building. It requires pulling data from multiple sources, telling a coherent story about what happened and why, and presenting a plan for what comes next. This prompt structures the entire QBR so you spend your time analyzing instead of formatting.</p>
        <div style={promptBlockStyle}>
{`Create a Quarterly Business Review (QBR) presentation deck for [QUARTER, e.g., "Q1 2026"].

Context:
- My role: [YOUR TITLE AND FUNCTION, e.g., "VP of Marketing," "Head of Sales," "CEO," "Product Manager"]
- Department/company: [TEAM OR COMPANY NAME]
- Audience: [WHO WILL SEE THIS, e.g., "C-suite and board," "my direct team of 12," "cross-functional leadership," "investors"]
- Presentation format: [LIVE PRESENTATION / ASYNC DECK SENT VIA EMAIL / BOTH]
- Time allotted: [MINUTES]

Performance data (fill in what applies):

GOALS VS. ACTUALS:
- Goal 1: [METRIC AND TARGET, e.g., "Revenue: $1.2M target"] → Actual: [RESULT, e.g., "$1.08M (90% of target)"]
- Goal 2: [METRIC AND TARGET, e.g., "New customers: 150 target"] → Actual: [RESULT, e.g., "167 (111% of target)"]
- Goal 3: [METRIC AND TARGET, e.g., "Churn rate: <3% target"] → Actual: [RESULT, e.g., "4.2% (missed)"]
- Goal 4: [METRIC AND TARGET] → Actual: [RESULT]
- Goal 5: [METRIC AND TARGET — optional] → Actual: [RESULT]

KEY WINS:
1. [WIN 1, e.g., "Launched new pricing tier that increased ARPU by 18%"]
2. [WIN 2, e.g., "Closed largest deal in company history: $340K ACV with Fortune 500 client"]
3. [WIN 3, e.g., "Reduced CAC by 22% through organic content strategy"]

KEY MISSES / CHALLENGES:
1. [MISS 1, e.g., "Churn spiked to 4.2% due to product stability issues in February"]
2. [MISS 2, e.g., "Hiring: filled 2 of 4 open roles, 2 still in pipeline"]
3. [MISS 3, e.g., "Enterprise pipeline is thinner than expected heading into Q2"]

WHAT WE LEARNED:
1. [LEARNING 1, e.g., "Our mid-market segment converts 3x faster than enterprise — we may be targeting too upmarket"]
2. [LEARNING 2, e.g., "Content-driven inbound is now 60% of pipeline — we should double down"]
3. [LEARNING 3, e.g., "Product stability directly correlates with churn — every outage costs us ~8 customers"]

NEXT QUARTER PLAN:
- Top 3 priorities: [LIST THEM]
- Key initiatives: [WHAT YOU'LL DO DIFFERENTLY]
- Goals/targets: [SPECIFIC METRICS FOR NEXT QUARTER]
- Resources needed: [HEADCOUNT, BUDGET, CROSS-FUNCTIONAL SUPPORT]

Create the QBR deck:

SLIDE 1 — TITLE: "[DEPARTMENT/COMPANY] Q[X] 2026 Business Review"

SLIDE 2 — EXECUTIVE SUMMARY:
- 4-5 bullet points that tell the whole story in 30 seconds
- Lead with the headline: "Q[X] was [ONE WORD: strong / mixed / challenging / record-breaking] — [ONE SENTENCE EXPLANATION]"
- Key number: the single most important metric and where it landed
- Tone-setter for the rest of the deck

SLIDE 3 — SCORECARD: GOALS VS. ACTUALS:
- Clean table or dashboard format: Metric | Target | Actual | Status (green/yellow/red)
- Include trend arrows (up/down vs. previous quarter)
- Visual: think executive dashboard, not spreadsheet

SLIDE 4 — WINS: WHAT WORKED:
- 3 wins with brief context and impact
- For each: what happened, why it matters, and the quantified impact
- Celebrate genuinely — this builds team confidence and stakeholder trust

SLIDE 5 — MISSES: WHAT DIDN'T WORK:
- 3 misses with honest analysis — not excuses
- For each: what happened, root cause analysis, and what we're doing about it
- Frame as "here's what we learned" not "here's why it wasn't our fault"

SLIDE 6 — DEEP DIVE: [THE MOST IMPORTANT STORY]:
- Pick the ONE metric or initiative that deserves the most discussion
- Go deeper: show the data, the timeline, the contributing factors, and the implications
- This is where you demonstrate analytical rigor and strategic thinking
- Visual: line chart, funnel, cohort analysis, or whatever best tells this specific story

SLIDE 7 — KEY LEARNINGS & INSIGHTS:
- 3 strategic insights that emerged from the quarter
- These should be forward-looking: "Based on what we saw in Q[X], we believe..."
- This is where you show strategic thinking, not just reporting

SLIDE 8 — NEXT QUARTER PLAN:
- Top 3 priorities with clear success metrics
- Resource requests if any
- Key dates and milestones
- Dependencies on other teams

SLIDE 9 — DISCUSSION / Q&A:
- 2-3 specific questions you want the audience's input on
- e.g., "Should we double down on mid-market or invest in fixing the enterprise pipeline?"
- This shows leadership maturity — you're not just reporting, you're seeking strategic input

For each slide: provide content, speaker notes (4-6 sentences), visual recommendation, and timing.

IMPORTANT: A great QBR does three things: (1) demonstrates accountability — own the results, good and bad, (2) shows analytical depth — don't just report numbers, explain WHY they happened, and (3) looks forward — the audience should leave knowing exactly what happens next. The worst QBRs are backward-looking data dumps. The best ones are strategy presentations informed by data.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Start your QBR with the executive summary, not the data. Most QBR decks bury the punchline behind 15 slides of charts. Senior leaders want to know three things immediately: did we hit our goals, what is the one thing that matters most, and what are we doing next quarter. Give them that on slide 2, then use the remaining slides to provide evidence and depth. If you only have 5 minutes instead of 30 (which happens constantly), you can present slide 2 alone and still deliver value.
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. The Board Meeting Deck</h3>
        <p>Board meeting presentations are the highest-stakes internal deck you will ever create. Your board sees hundreds of presentations a year. They can spot filler, fluff, and hand-waving from a mile away. This prompt creates a board deck that is information-dense, honest, forward-looking, and respectful of the board&rsquo;s time.</p>
        <div style={promptBlockStyle}>
{`Create a board meeting presentation deck.

Company context:
- Company name: [NAME]
- Stage: [SEED / SERIES A / SERIES B / GROWTH / PUBLIC]
- Industry: [INDUSTRY]
- Board composition: [WHO'S ON THE BOARD, e.g., "2 VC partners (lead investors), 2 independent directors, CEO, CTO"]
- Board meeting cadence: [MONTHLY / QUARTERLY]
- This meeting covers: [TIME PERIOD, e.g., "January - March 2026"]
- Time allotted for presentation: [MINUTES, e.g., "45 minutes presentation, 45 minutes discussion"]

Financial performance:
- Revenue: $[AMOUNT] this period vs. $[AMOUNT] target vs. $[AMOUNT] same period last year
- Revenue growth: [X]% MoM / QoQ / YoY
- Burn rate: $[AMOUNT]/month
- Runway: [X] months at current burn
- Cash in bank: $[AMOUNT]
- Key financial metrics: [ARR, MRR, GROSS MARGIN, CAC, LTV, PAYBACK PERIOD — include what's relevant]

Operational highlights:
- Customers: [TOTAL COUNT, NET NEW, CHURNED, EXPANSION]
- Product: [KEY LAUNCHES, MILESTONES, METRICS — e.g., "Launched v2.0, DAU up 40%, NPS increased from 42 to 58"]
- Team: [HEADCOUNT, KEY HIRES, DEPARTURES, OPEN ROLES]
- Sales/Marketing: [PIPELINE, CONVERSION RATES, KEY DEALS]

Key issues to discuss with the board:
1. [ISSUE 1, e.g., "We need to decide whether to raise a bridge round or extend runway by cutting burn"]
2. [ISSUE 2, e.g., "Our enterprise sales cycle is 6 months — should we hire a VP of Sales or keep founder-led sales?"]
3. [ISSUE 3, e.g., "A competitor just raised $50M — how should we respond?"]

Create the board deck:

SLIDE 1 — COVER: Company name, board meeting date, "Confidential"

SLIDE 2 — EXECUTIVE SUMMARY (THE MOST IMPORTANT SLIDE):
- The state of the company in 5 bullet points or less
- Lead with: "The company is [ONE WORD: strong / on track / at an inflection point / facing headwinds]"
- Key metrics: revenue, growth rate, runway, and one operational metric that matters most right now
- The #1 thing you want the board to know
- The #1 thing you need the board's help with

SLIDE 3 — FINANCIAL DASHBOARD:
- Revenue vs. plan vs. prior year (chart)
- Burn rate and runway (chart or callout)
- Key unit economics: CAC, LTV, LTV/CAC ratio, payback period
- Cash position and projected cash curve
- Visual: dashboard format — charts, not paragraphs

SLIDE 4 — REVENUE DEEP DIVE:
- Revenue breakdown by segment, product line, or cohort
- What's driving growth (or slowing it)
- Cohort retention data if available
- Pipeline and forecast for next period
- The story behind the numbers

SLIDE 5 — OPERATIONAL HIGHLIGHTS:
- Product: what shipped and what it means
- Team: key hires, org chart changes, culture signals
- Sales and marketing: pipeline, conversion, channel performance
- Customer success: retention, NPS, notable wins or losses

SLIDE 6 — STRATEGIC PRIORITIES UPDATE:
- What were the top 3 priorities set at the last board meeting?
- Status on each: on track / at risk / completed / deprioritized
- If anything changed, explain why
- This is your accountability slide

SLIDE 7 — KEY DISCUSSION TOPICS:
- Present each issue clearly with:
  - The context: what happened and why this needs board input
  - The options: 2-3 paths forward with pros and cons of each
  - Your recommendation: what you think the company should do and why
  - What you need from the board: a decision, an introduction, strategic guidance, or just awareness
- This is where the most valuable board conversation happens — set it up well

SLIDE 8 — NEXT PERIOD PLAN:
- Top 3 priorities and why
- Key milestones and dates
- Resource requests or decisions needed
- What success looks like by next board meeting

SLIDE 9 — APPENDIX:
- Detailed financial tables
- Detailed product roadmap
- Competitive landscape update
- Cap table update (if relevant)
- Any pre-read materials referenced during the meeting

For each slide: content, speaker notes, visual recommendation, and discussion prompts for the board.

IMPORTANT: Board decks are NOT performance presentations — they are STRATEGIC CONVERSATIONS with slides as scaffolding. The best board meetings spend 30% of the time on the presentation and 70% on discussion. Structure the deck to create space for discussion, not fill time with information. Send the deck as a pre-read 48 hours before the meeting so board members arrive prepared to discuss, not just listen.`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. The Strategy Presentation</h3>
        <p>Whether you are proposing a new initiative, recommending a pivot, or laying out a 3-year vision, the strategy presentation is where big decisions get made. This prompt creates a strategic argument that is rigorous, evidence-based, and persuasive &mdash; not just a wish list of ideas with no supporting logic.</p>
        <div style={promptBlockStyle}>
{`Create a strategy presentation that makes a persuasive case for a strategic initiative.

Context:
- My role: [YOUR TITLE]
- My organization: [COMPANY/TEAM]
- Audience: [WHO DECIDES, e.g., "CEO and executive team," "board of directors," "my department heads," "cross-functional leadership"]
- The decision I need: [WHAT I'M ASKING FOR, e.g., "Approval to enter the enterprise market segment," "Budget of $500K to build a new product line," "Headcount increase of 5 engineers to rebuild the platform," "Agreement to shut down our underperforming product"]
- Timeline for decision: [WHEN, e.g., "need a go/no-go by end of month"]

The strategic initiative:
- What I'm proposing: [DETAILED DESCRIPTION, e.g., "Shift our go-to-market from self-serve PLG to enterprise sales, starting with a dedicated enterprise team and custom pricing tier"]
- Why now: [WHAT CHANGED THAT MAKES THIS URGENT, e.g., "3 of our largest self-serve accounts asked for enterprise features in the last month, our top competitor just launched an enterprise tier, and we're leaving $2M+ ARR on the table"]
- Expected outcome: [WHAT SUCCESS LOOKS LIKE, e.g., "Add $2M in enterprise ARR within 12 months, increase average ACV from $5K to $50K, reduce churn below 2%"]
- Resources required: [WHAT YOU NEED — money, people, time, technology]
- Risks: [WHAT COULD GO WRONG, e.g., "Enterprise sales cycles are 6+ months, we might neglect our SMB base, requires hiring expensive talent we haven't recruited before"]

Supporting evidence:
- Data: [MARKET DATA, INTERNAL DATA, CUSTOMER DATA THAT SUPPORTS YOUR CASE]
- Customer signals: [FEEDBACK, REQUESTS, CHURN REASONS RELATED TO THIS INITIATIVE]
- Competitive intelligence: [WHAT COMPETITORS ARE DOING]
- Industry trends: [MACRO TRENDS THAT SUPPORT THE TIMING]

What I've considered and rejected:
- Alternative 1: [OPTION YOU CONSIDERED AND WHY YOU REJECTED IT, e.g., "Build enterprise features for self-serve and hope larger customers adopt — rejected because enterprise buyers need a sales touch and custom contracts"]
- Alternative 2: [ANOTHER OPTION AND WHY IT'S WORSE]

Build the strategy deck:

SLIDE 1 — TITLE: "[INITIATIVE NAME]: A Proposal for [COMPANY]"
- Subtitle that hints at the opportunity: "How [INITIATIVE] could add $[X] in revenue by [DATE]"

SLIDE 2 — THE OPPORTUNITY (Why we should care):
- The market opportunity in one powerful sentence
- 3-4 data points that frame the size and urgency of the opportunity
- The cost of inaction: "If we don't do this, [CONSEQUENCE]"
- Visual: market size, growth curve, or customer demand signal

SLIDE 3 — THE EVIDENCE (Why we believe this):
- Customer signals: specific quotes, data, and examples
- Market data: industry trends, competitor moves, analyst forecasts
- Internal data: usage patterns, feature requests, churn analysis
- Frame each piece of evidence as a story, not just a data point

SLIDE 4 — THE PROPOSAL (What we should do):
- Clear, specific description of the initiative
- Scope: what's included AND what's explicitly not included (avoid scope creep)
- Phased approach if applicable: Phase 1 (quick wins), Phase 2 (scale), Phase 3 (optimize)
- Clear success metrics for each phase

SLIDE 5 — WHY THIS APPROACH (Why this and not something else):
- Present 2-3 alternatives you considered
- For each: what it is, why it's appealing, and why the proposed approach is better
- This shows you've done the strategic thinking, not just gotten excited about one idea
- Use a comparison matrix if helpful

SLIDE 6 — INVESTMENT AND ROI:
- What this costs: headcount, technology, cash, opportunity cost
- What this returns: revenue, margin, strategic positioning, customer retention
- Timeline: when does the investment pay off?
- Three scenarios: conservative, expected, optimistic (with assumptions listed)

SLIDE 7 — RISK ANALYSIS AND MITIGATION:
- Top 3-5 risks, ranked by likelihood and impact
- For each risk: description, likelihood (high/medium/low), impact (high/medium/low), mitigation plan
- Decision triggers: "If [X] happens by [DATE], we will [ADJUST/CONTINUE/ABORT]"
- This is the slide that builds credibility — it shows you're realistic, not just optimistic

SLIDE 8 — IMPLEMENTATION PLAN:
- 90-day roadmap with specific milestones
- Resource allocation: who does what and when
- Dependencies: what needs to be true for this to work
- Decision points: when will you come back with an update

SLIDE 9 — THE ASK:
- State exactly what you need: budget, headcount, timeline, authority
- Restate the expected return
- Make it binary: "I'm asking for [X] to pursue [Y] which we project will yield [Z]"
- Next step: what happens if they say yes today

For each slide: content, speaker notes, visual recommendation, and anticipated questions from the audience.

IMPORTANT: Strategy presentations fail when they lead with the solution instead of the problem. Nobody cares about your proposal until they agree the opportunity is real. Spend 40% of the deck on the opportunity and evidence (why), 30% on the proposal (what and how), 20% on risk and investment (how much), and 10% on the ask. If you lose them at the "why," the "what" doesn't matter.`}
        </div>

        {/* CTA AFTER BUSINESS REPORTS SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Stop spending 6 hours building presentations from scratch.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <Link href="/presentation-kit" style={{ color: '#3B5FFF' }}>AI Presentation Kit</Link> includes 100+ prompts for every presentation type: pitch decks, sales decks, QBRs, board meetings, keynotes, strategy proposals, and more. Every prompt includes the exact frameworks top consultants and executives use.</p>
          <a href={PRESENTATION_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Presentation Kit
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: SLIDE DESIGN & STORYTELLING (13-15) */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Slide Design &amp; Storytelling (Prompts 13&ndash;15)</h2>
        <p>These final three prompts are different from the previous twelve. Instead of building a specific type of deck from scratch, these prompts improve and optimize presentations you have already drafted. Think of them as an AI &ldquo;presentation coach&rdquo; that takes your existing work and makes it sharper, more visual, and more persuasive.</p>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. The Slide Copy Optimizer</h3>
        <p>Most slides have too many words. The average audience reads slide text at 150 words per minute but your presenter is speaking at 130 words per minute &mdash; so they are reading ahead, not listening. This prompt takes your wordy slides and distills them down to high-impact, scannable copy that supports your verbal delivery instead of competing with it.</p>
        <div style={promptBlockStyle}>
{`I have a presentation with slides that have too much text. Rewrite the slide copy to be concise, visual-friendly, and high-impact.

My presentation:
- Topic: [TOPIC]
- Audience: [WHO]
- Goal: [WHAT I WANT THE AUDIENCE TO DO AFTER]
- My delivery style: [e.g., "I talk through the details verbally," "I send the deck and people read it without me," "some slides are presented live, some are read async"]

For each slide below, rewrite the content following these rules:

RULES FOR GREAT SLIDE COPY:
1. One idea per slide — if a slide has two ideas, it should be two slides
2. Maximum 6 words in a headline (the "billboard test" — would you understand this at 60mph?)
3. Maximum 3 bullet points per slide, maximum 8 words per bullet
4. Replace paragraphs with visuals: charts, icons, images, or single powerful numbers
5. If a sentence can be a number, make it a number: "Revenue grew substantially" → "$4.2M (+34%)"
6. Delete every word that doesn't earn its spot — no "In order to," "It is important to note that," "As we can see from the data"
7. Use active voice and present tense: "Customers choose us because" not "We have been chosen by customers due to"
8. Turn adjectives into data: "significant growth" → "142% YoY growth"

Here are my slides (I'll provide the current text for each):

SLIDE [NUMBER]: [SLIDE TITLE]
Current content:
[PASTE YOUR CURRENT SLIDE TEXT HERE]

SLIDE [NUMBER]: [SLIDE TITLE]
Current content:
[PASTE YOUR CURRENT SLIDE TEXT HERE]

SLIDE [NUMBER]: [SLIDE TITLE]
Current content:
[PASTE YOUR CURRENT SLIDE TEXT HERE]

SLIDE [NUMBER]: [SLIDE TITLE]
Current content:
[PASTE YOUR CURRENT SLIDE TEXT HERE]

SLIDE [NUMBER]: [SLIDE TITLE]
Current content:
[PASTE YOUR CURRENT SLIDE TEXT HERE]

[ADD AS MANY SLIDES AS NEEDED]

For EACH slide, provide:

1. REWRITTEN HEADLINE: Shorter, sharper, insight-driven
2. REWRITTEN BODY: Concise bullets or a single visual concept
3. WHAT TO MOVE TO SPEAKER NOTES: The detailed context that should be SAID, not displayed
4. VISUAL SUGGESTION: What type of visual would replace text and communicate the same idea faster (specific chart type, icon concept, image description, or infographic layout)
5. BEFORE/AFTER WORD COUNT: Show the reduction (goal: 50-70% reduction in on-slide text)

After optimizing all slides, provide:

OVERALL DECK ASSESSMENT:
- Total word count before vs. after
- Slides that should be merged (same idea split across two slides)
- Slides that should be split (two ideas crammed into one slide)
- Slides that should be deleted entirely (redundant or low-value)
- Suggested slide order changes for better narrative flow
- Missing slides: based on the content and goal, is there a slide that should exist but doesn't?

IMPORTANT: "Read async" decks need more text than "presented live" decks. If the deck will be read without a presenter, keep more context on the slide — but still cut the fluff. The goal is clear, scannable writing, not just short writing. A 15-word sentence that communicates clearly is better than a 5-word bullet that's vague.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Apply the &ldquo;squint test&rdquo; to every slide. Lean back from your screen and squint at the slide. Can you identify the main point from the visual hierarchy alone? If the slide looks like a wall of similarly-sized text, the audience will not know where to look. Great slides have one dominant visual element &mdash; a big number, a chart, an image &mdash; with supporting text that is clearly secondary.
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. The Data Visualization Narrative Builder</h3>
        <p>Data slides are where most presentations lose the audience. A chart without context is just a picture. A chart with the wrong framing tells the wrong story. This prompt takes your raw data and creates data visualization slides that tell a specific, persuasive story &mdash; with the right chart type, the right framing, and the right narrative.</p>
        <div style={promptBlockStyle}>
{`I have data that I need to present on slides. Help me choose the right visualization, frame the narrative, and write the slide content.

My data:

DATASET 1:
- What it measures: [DESCRIPTION, e.g., "Monthly revenue for the past 12 months"]
- The data: [PROVIDE THE NUMBERS, e.g., "Jan: $82K, Feb: $91K, Mar: $105K, Apr: $98K, May: $112K, Jun: $128K, Jul: $119K, Aug: $134K, Sep: $156K, Oct: $148K, Nov: $171K, Dec: $189K"]
- The story I want to tell: [WHAT'S THE POINT, e.g., "We're growing consistently despite the Q3 dip," "Revenue 2.3x'd in 12 months," "The trend is accelerating"]
- Audience context: [DO THEY KNOW THIS DATA ALREADY? ARE THEY FRIENDLY OR SKEPTICAL?]

DATASET 2:
- What it measures: [DESCRIPTION, e.g., "Customer acquisition by channel"]
- The data: [PROVIDE THE NUMBERS, e.g., "Organic: 45%, Paid: 25%, Referral: 18%, Partners: 12%"]
- The story I want to tell: [e.g., "Our organic engine is working — we're not dependent on paid acquisition"]

DATASET 3:
- What it measures: [DESCRIPTION]
- The data: [PROVIDE THE NUMBERS]
- The story I want to tell: [THE POINT]

[ADD MORE DATASETS AS NEEDED]

For EACH dataset, create a complete data slide:

1. CHART TYPE RECOMMENDATION:
   - Recommended chart type and WHY (line chart for trends, bar chart for comparisons, pie chart for composition, scatter plot for correlation, waterfall for financial bridges, etc.)
   - What NOT to use and why (e.g., "Don't use a pie chart here — comparing 12 months of data on a pie chart is unreadable")
   - Color strategy: which data points to highlight, which to de-emphasize

2. SLIDE HEADLINE:
   - Write an insight-driven headline, NOT a label
   - BAD: "Revenue by Month"
   - GOOD: "Revenue 2.3x'd in 12 months — and the trend is accelerating"
   - The headline should tell the audience what to think BEFORE they look at the chart

3. CHART ANNOTATIONS:
   - What to label on the chart itself (key milestones, outliers, trendlines)
   - Where to draw the audience's eye (highlight the key data point or trend)
   - What to simplify or remove (axis labels, gridlines, legend placement)

4. SUPPORTING TEXT:
   - 1-2 bullet points below the chart that provide context the chart can't
   - e.g., "Revenue dipped in July due to planned pricing migration — all affected customers have since re-activated"
   - This is where you pre-answer the "why" question that the audience will ask

5. SPEAKER NOTES:
   - The verbal narrative for this slide (6-8 sentences)
   - How to walk the audience through the data: "Let me draw your attention to [X]. What you're seeing here is [Y]. This matters because [Z]."
   - The one number or trend to emphasize
   - How to handle the skeptic: "You might be wondering about [ANOMALY]. Here's what happened..."

6. TRANSITION:
   - How this data slide connects to the next slide's content
   - The bridge sentence: "This growth is impressive, but it's only possible because of [NEXT TOPIC]..."

GENERAL DATA VISUALIZATION PRINCIPLES TO FOLLOW:
- Every chart should answer ONE question. If it answers two questions, split it into two charts.
- Use the "three second rule" — can the audience understand the key takeaway within 3 seconds of seeing the chart?
- Highlight the data that matters and gray out everything else. Don't make the audience search for the point.
- Round numbers for slide display ($1.89M → $1.9M, 23.7% → 24%). Save precision for the appendix.
- Always show context: vs. target, vs. last year, vs. industry benchmark, vs. competitor. A number without context is meaningless.

IMPORTANT: Data does not speak for itself. YOU tell the audience what the data means. The headline tells them the conclusion. The chart shows them the evidence. The speaker notes explain the story. If you put a chart on screen with no headline or context, you're asking the audience to do analytical work — and they won't. They'll just check their phone.`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. The Executive Summary Slide Creator</h3>
        <p>The executive summary slide is the most important single slide in any business presentation. Executives are busy. Many of them will only look at this one slide before deciding whether to engage with the rest. This prompt creates an executive summary that stands completely on its own &mdash; if someone only sees this slide and nothing else, they understand the full picture.</p>
        <div style={promptBlockStyle}>
{`Create an executive summary slide for my presentation. This one slide must be able to stand alone — if someone only sees this slide and ignores the rest of the deck, they should still understand the key message, the evidence, and the ask.

My presentation:
- Title: [PRESENTATION TITLE]
- Total slides: [NUMBER]
- Purpose: [INFORM / PERSUADE / REQUEST DECISION / UPDATE STATUS / PROPOSE INITIATIVE]
- Audience: [WHO WILL SEE THIS, e.g., "CEO and executive team," "board of directors," "external investors," "cross-functional leadership"]
- The ONE thing I need them to remember: [THE CORE MESSAGE]
- The ONE thing I need them to do: [THE DESIRED ACTION, e.g., "approve the budget," "align on priorities," "understand our progress," "agree to the partnership"]

Key content to summarize:

THE SITUATION (2-3 sentences):
[DESCRIBE THE CURRENT STATE — what is happening and why this presentation exists]

THE KEY DATA:
- Metric 1: [e.g., "Q1 Revenue: $1.2M (90% of target)"]
- Metric 2: [e.g., "Customer count: 340 (+45% YoY)"]
- Metric 3: [e.g., "Burn rate: $180K/month, 14 months runway"]
- Metric 4: [e.g., "NPS: 62 (up from 48 last quarter)"]
- Metric 5: [OPTIONAL — only if critical]

THE HEADLINE: What is the single most important takeaway?
[e.g., "We're growing faster than planned but burning faster too. We need to choose between aggressive growth and extending runway."]

THE ASK / NEXT STEP:
[e.g., "We're requesting approval for Plan A: maintain current growth trajectory and begin Series A fundraise in Q3."]

Create the executive summary slide with:

1. HEADLINE: One sentence that captures the entire presentation's message. This should be a complete thought, not a label.
   - BAD: "Q1 2026 Update"
   - BAD: "Executive Summary"
   - GOOD: "Q1 revenue hit $1.2M with 45% customer growth — we're outpacing plan but need to decide on burn rate"
   - GOOD: "Our enterprise pilot proved the model: 3 Fortune 500 customers, $340K ACV, 100% retention. We recommend going all-in."

2. LAYOUT: Recommend one of these formats:
   - THE DASHBOARD: 4-6 key metrics in large format with status indicators (green/yellow/red), one sentence of context for each
   - THE NARRATIVE: 4-5 bullet points that tell the story sequentially (situation, what we did, results, what's next, the ask)
   - THE TWO-COLUMN: Left side = key metrics, Right side = key decisions needed
   - THE HEADLINE + SUPPORTING POINTS: Big headline at top, 3 supporting bullet points below with data

3. CONTENT: Write the actual slide text using the chosen layout format. Every word must earn its place.

4. VISUAL HIERARCHY: What should the audience see first, second, and third? (Font sizes, bold text, color coding)

5. SPEAKER NOTES (6-8 sentences): What to say while this slide is on screen. This is often the first thing you present, so the verbal delivery should:
   - Set the tone for the entire meeting
   - Give the audience the punchline immediately
   - Tell them what the rest of the deck covers so they know what's coming
   - Frame the discussion you want to have

6. WHAT TO CUT: List anything from my input that should NOT be on this slide — it belongs in the detailed slides instead. Executive summaries fail when they try to include everything. Only the information that drives the decision or headline belongs here.

ALSO provide:

VERSION A: For a 10-second scan (the executive who's glancing at this on their phone before the meeting)
VERSION B: For a 2-minute read (the executive who's reviewing the pre-read carefully)

Both versions use the same slide — Version A is the visual hierarchy at a glance, Version B includes the detail below.

IMPORTANT: The executive summary is NOT a table of contents. "This deck covers revenue, customers, product, and strategy" is a table of contents. An executive summary says "Revenue grew 34% but churn increased to 5.1%, driven by the pricing migration. The pricing issue is now resolved. We project a return to 2.5% churn by Q3. Our recommendation is to maintain current pricing and invest $200K in a customer success expansion." That is a summary — it has a beginning, middle, and end. It tells a complete story.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Write your executive summary slide last, not first. Build the full presentation, do all the analysis, make your arguments &mdash; then distill everything into one slide. Trying to write the summary before the analysis leads to vague, unfocused summaries. Trying to write it after means you have the complete picture and can ruthlessly prioritize what matters most. The executive summary is the distillation, not the introduction.
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* HOW TO CUSTOMIZE THESE PROMPTS              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>How to Get the Best Results from These Prompts</h2>

        <p>Every prompt in this guide works as-is. But if you want to go from &ldquo;good&rdquo; to &ldquo;outstanding,&rdquo; here are the techniques that separate mediocre AI-generated presentations from ones that actually win deals, raise money, and move audiences:</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Feed It Real Data, Not Placeholders</h3>
        <p>The biggest lever for AI presentation quality is specificity. Do not leave placeholders generic. Instead of &ldquo;[REVENUE],&rdquo; give it &ldquo;$1.08M in Q1, up 34% YoY but 10% below our $1.2M target.&rdquo; The more real data you provide, the more specific and useful the output. AI cannot make up your actual business numbers &mdash; but once you give them, it can find the narrative in those numbers faster than you can.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Specify Your Audience&rsquo;s Sophistication</h3>
        <p>A presentation to a first-time angel investor is fundamentally different from one to a Tier 1 VC partner who has seen 5,000 pitch decks. A board meeting at a seed-stage startup is different from one at a public company. Always tell the AI who your audience is, what they already know, and what they care about. This single input changes the entire tone, depth, and structure of the output.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Iterate on Sections, Not the Whole Deck</h3>
        <p>After the first generation, do not ask the AI to &ldquo;make it better.&rdquo; Instead, target specific sections: &ldquo;The opening hook is weak &mdash; make it more surprising.&rdquo; &ldquo;The ROI slide needs a third scenario with more conservative assumptions.&rdquo; &ldquo;The competitive slide makes us sound arrogant &mdash; rewrite it with more respect for competitors.&rdquo; Targeted iteration gets you to excellence faster than vague iteration.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Use AI for Speaker Notes, Not Just Slides</h3>
        <p>Most people use AI only for the slide content and then wing the verbal delivery. That is leaving half the value on the table. Ask AI to write detailed speaker notes for every slide: what to say, when to pause, where to make eye contact, when to tell a story, and how to transition to the next slide. Then practice with those notes until the delivery feels natural.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Build a Prompt Library for Recurring Presentations</h3>
        <p>If you give the same type of presentation regularly &mdash; weekly team updates, monthly client reviews, quarterly board meetings &mdash; save your customized prompts with your specific data fields already defined. This turns a 30-minute prompting session into a 5-minute one. The <Link href="/presentation-kit" style={{ color: '#3B5FFF' }}>AI Presentation Kit</Link> does this for you with 100+ pre-built prompts organized by presentation type.</p>

        <p>For a deeper dive into writing effective prompts for any use case, read our <Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>Complete Prompt Engineering Guide for 2026</Link>.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FREE VS PREMIUM                             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Free Prompts vs. the Full Presentation Kit</h2>

        <p>The 15 prompts in this guide are genuinely useful. Use them today. They will make your next presentation faster to build, better structured, and more persuasive.</p>

        <p>But if you build presentations regularly and want a complete system, the <Link href="/presentation-kit" style={{ color: '#3B5FFF' }}>AI Presentation Kit</Link> goes much deeper:</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px', marginBottom: '24px' }}>
          <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px' }}>This Free Guide</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#6B7280' }}>
              <li>15 prompts</li>
              <li>5 categories</li>
              <li>General purpose</li>
              <li>Great starting point</li>
            </ul>
          </div>
          <div style={{ background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px', color: '#3B5FFF' }}>Presentation Kit</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#374151' }}>
              <li><strong>100+ prompts</strong></li>
              <li>10 categories with sub-sections</li>
              <li>Industry-specific variations</li>
              <li>Slide design frameworks built in</li>
              <li>Complete pitch deck templates</li>
              <li>Speaker notes and delivery coaching</li>
              <li>Free updates for life</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a href={PRESENTATION_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Presentation Kit
          </a>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        </div>

        <div style={{ background: '#111827', color: '#fff', borderRadius: '8px', padding: '24px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 8px', color: '#93B4FF' }}>BEST VALUE</p>
          <p style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 8px' }}>All 13 AI Kits &mdash; $97</p>
          <p style={{ fontSize: '14px', color: '#9CA3AF', margin: '0 0 16px' }}>Presentation Kit + 12 more specialized kits. $400+ value. Plus every future kit free.</p>
          <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#fff', color: '#111827', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Bundle &mdash; $97 &rarr;
          </a>
          <p style={{ margin: '10px 0 0', color: '#6B7280', fontSize: '12px' }}>
            <Link href="/bundle" style={{ color: '#93B4FF' }}>See everything included in the bundle</Link>
          </p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FAQ                                         */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can AI create an entire presentation for me?</h3>
        <p>AI can generate the narrative structure, slide-by-slide content, speaker notes, and visual layout recommendations for your entire presentation. It excels at creating the first draft in minutes instead of hours &mdash; structuring your argument, writing concise slide copy, generating data narratives, and crafting speaker notes. You still need to add your specific data, customize the design in your preferred tool (PowerPoint, Google Slides, Keynote, Canva), and rehearse the delivery. The prompts in this guide get you 80% of the way there so you spend your time on the 20% that matters most: your unique insights, real data, and personal delivery style.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What is the best AI tool for making presentations in 2026?</h3>
        <p>For content generation and narrative structure, ChatGPT (GPT-4o) and Claude are the best general-purpose tools. For AI-native slide creation, Gamma, Tome, and Beautiful.ai can generate visual slides directly from prompts. For the best results, use a two-step workflow: first use ChatGPT or Claude with the prompts in this guide to nail your narrative and content, then bring that content into your preferred design tool. This gives you more control over both the message and the visuals than any single tool.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How many slides should a pitch deck have?</h3>
        <p>The standard investor pitch deck is 10&ndash;12 slides following the classic framework: Title, Problem, Solution, Market Size, Business Model, Traction, Team, Competition, Financials, and Ask. For a demo day or pitch competition, aim for 8&ndash;10 slides you can present in 5&ndash;7 minutes. For a Series A or later, you may need a detailed appendix deck of 20&ndash;30 slides investors review on their own, plus the concise 10&ndash;12 slide version for the live pitch. The key principle: one idea per slide. If a slide requires more than 6 seconds to understand, it has too much content.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How do I make my AI-generated presentation sound authentic and not generic?</h3>
        <p>Include specific numbers, names, and examples from your actual business. Tell the AI your presentation style: &ldquo;I use dry humor,&rdquo; &ldquo;I open with personal stories,&rdquo; &ldquo;I prefer Socratic questions over statements.&rdquo; Feed it your actual data and ask it to find the narrative. After generating, do a &ldquo;voice pass&rdquo; &mdash; read every slide out loud and rewrite anything that does not sound like something you would actually say. Add one personal anecdote per section that only you could know. The prompts in this guide include voice and context fields specifically to avoid the generic AI sound.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can I use these prompts with Google Slides, PowerPoint, or Keynote?</h3>
        <p>Absolutely. These prompts generate the content and structure &mdash; narrative arc, slide-by-slide copy, speaker notes, and data visualization recommendations. You bring that content into whichever tool you prefer. For the fastest workflow: (1) use the prompt in ChatGPT or Claude to generate your content, (2) copy the slide titles and bullet points into your tool, (3) apply your template or brand guidelines, (4) add charts, images, and visuals based on the AI&rsquo;s layout recommendations. This two-step approach gives you professional content with your preferred visual design.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If you found these presentation prompts useful, check out these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>The Complete Prompt Engineering Guide for 2026</Link> &mdash; Master the skill behind every great AI output</li>
          <li><Link href="/blog/best-ai-prompts-business-2026" style={{ color: '#3B5FFF' }}>Best AI Prompts for Business in 2026</Link> &mdash; Prompts for every business function</li>
          <li><Link href="/blog/ai-email-marketing-prompts-2026" style={{ color: '#3B5FFF' }}>20 AI Prompts That Will Transform Your Email Marketing</Link> &mdash; AI prompts for email campaigns that convert</li>
          <li><Link href="/presentation-kit" style={{ color: '#3B5FFF' }}>AI Presentation Kit</Link> &mdash; The full 100+ prompt system for presentations</li>
          <li><Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>Free AI Prompt Generator</Link> &mdash; Build custom prompts for any use case</li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FINAL CTA */}
        <div style={{ marginTop: '48px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to build presentations 10x faster with AI?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Presentation Kit</strong> includes 100+ prompts for pitch decks, sales presentations, keynote talks, board meetings, strategy proposals, and slide optimization. Every prompt uses proven storytelling and persuasion frameworks. One-time purchase.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={PRESENTATION_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Presentation Kit
            </a>
            <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Presentation Kit plus 12 more specialized kits &mdash; best value if you want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* EMAIL CAPTURE */}
        <EmailCapture />

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          <em>The Midas Tools Team builds <a href="https://www.midastools.co" style={{ color: '#3B5FFF' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#3B5FFF' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}