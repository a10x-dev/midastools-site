import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const EMAIL_KIT_URL = '/email-marketing-kit';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function AIEmailMarketingPrompts2026() {
  const title = '20 AI Prompts That Will Transform Your Email Marketing in 2026';
  const description = 'The best AI email marketing prompts for 2026. 20 copy-paste ChatGPT prompts for welcome sequences, sales emails, newsletters, cold outreach, and win-back campaigns. Boost open rates, click-throughs, and revenue from every send.';
  const url = 'https://www.midastools.co/blog/ai-email-marketing-prompts-2026';

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
        name: 'Can AI write effective marketing emails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AI can write highly effective marketing emails when given the right prompts. The key is providing context about your audience, product, and desired outcome. Generic prompts like "write me a marketing email" produce generic results. The prompts in this guide include specific frameworks — PAS (Problem-Agitate-Solution), AIDA (Attention-Interest-Desire-Action), and curiosity-driven subject line formulas — that consistently produce emails with above-average open and click-through rates. You still need to customize with your brand voice and specific offer details, but AI handles the heavy lifting of structure, persuasion psychology, and copywriting best practices.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best AI tool for email marketing in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT (GPT-4o) and Claude are the two best general-purpose AI tools for writing marketing emails in 2026. ChatGPT excels at structured sequences and A/B test variations. Claude produces more natural, conversational copy that avoids the typical "AI voice." For email-specific tools, Jasper and Copy.ai offer built-in email templates, but the prompts in this guide work with any AI tool and give you more control over the output. For best results, use a paid tier (ChatGPT Plus or Claude Pro) to avoid usage limits during campaign creation sprints.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I avoid my AI-written emails sounding robotic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The secret is in your prompt. Most AI-written emails sound robotic because the prompt was generic. To get natural-sounding copy: (1) Include your brand voice guidelines in the prompt — specify tone, reading level, and whether you use contractions, humor, or emojis. (2) Provide examples of emails you have sent that performed well and ask AI to match that style. (3) Always include a "write like a real person talking to a friend" instruction. (4) Edit the output — use AI for the first draft and add your personal touches. (5) Read it out loud. If it sounds like something you would never say, rewrite that section. The prompts in this guide include voice and tone instructions to avoid the robotic problem from the start.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many emails should be in a welcome sequence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A strong welcome sequence is typically 5-7 emails sent over 10-14 days. Email 1 (immediate): Deliver the promised lead magnet or welcome message. Email 2 (Day 1-2): Share your origin story or brand mission. Email 3 (Day 3-4): Provide a quick win or valuable tip. Email 4 (Day 5-7): Share social proof (testimonials, case studies, results). Email 5 (Day 7-9): Introduce your product with a soft pitch. Email 6 (Day 10-12): Handle objections and share FAQ. Email 7 (Day 13-14): Make your best offer with urgency. The welcome sequence prompt in this guide helps you create all 7 emails in one session, with each email building on the last to move subscribers from awareness to purchase.'
        }
      },
      {
        '@type': 'Question',
        name: 'What email metrics should I track to measure AI prompt effectiveness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Track these five metrics to measure whether your AI-written emails are performing: (1) Open rate — benchmark is 20-25% for most industries; subject lines are the primary lever. (2) Click-through rate (CTR) — benchmark is 2-5%; body copy and CTA placement drive this. (3) Conversion rate — the percentage of clickers who take the desired action (purchase, sign up, book a call). (4) Unsubscribe rate — should stay below 0.5% per send; high unsubscribes mean your content does not match subscriber expectations. (5) Revenue per email — the ultimate metric; track how much revenue each email or sequence generates. When testing AI prompts, send A/B tests with at least 1,000 subscribers per variant to get statistically significant results. Test one variable at a time: subject line, then body copy, then CTA.'
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
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI email marketing prompts, ChatGPT email marketing, AI email templates, email marketing AI prompts, best AI prompts for email, AI welcome sequence, AI sales email, ChatGPT newsletter prompts, AI cold email, email copywriting AI, AI email automation prompts 2026" />
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
          20 AI Prompts That Will Transform Your Email Marketing in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 26, 2026 &middot; 18 min read &middot; Midas Tools Team</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p>Email marketing is not dead. It is the <strong>highest-ROI marketing channel that exists</strong> &mdash; and it is not even close.</p>

        <p>For every $1 spent on email marketing, the average return is $36&ndash;$42 (DMA, 2026). No other channel &mdash; not social media, not paid ads, not SEO &mdash; comes close to that ratio. Your email list is the only marketing asset you truly own. Algorithm changes cannot take it away. Platform bans cannot erase it. It sits in your subscriber&rsquo;s inbox, waiting to be opened, every single day.</p>

        <p>The problem? <strong>Writing great emails is hard.</strong> You stare at a blank screen. You wrestle with subject lines. You agonize over whether your CTA is compelling enough. You spend 3 hours crafting a single email, send it to 10,000 people, and get a 1.8% click-through rate. That is 180 clicks for 3 hours of work.</p>

        <p>AI changes the math completely. With the right prompts, you can draft an entire 7-email welcome sequence in 30 minutes. You can generate 20 subject line variations and A/B test the best ones. You can write a cold outreach email that sounds like you spent an hour researching the prospect &mdash; because you instructed the AI to do that research for you.</p>

        <p>But &ldquo;write me a marketing email&rdquo; produces garbage. Generic prompts produce generic emails that get ignored, deleted, or unsubscribed from. The prompts in this guide are different. Each one includes <strong>proven copywriting frameworks</strong> &mdash; PAS (Problem-Agitate-Solution), AIDA (Attention-Interest-Desire-Action), curiosity gaps, social proof stacking, and urgency triggers &mdash; baked directly into the prompt structure.</p>

        <p>Every prompt uses <strong>[BRACKETS]</strong> for the details you fill in. Copy the prompt, replace the brackets with your specifics, paste into ChatGPT, Claude, or <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>our free Prompt Generator</Link>, and get a polished email draft in seconds.</p>

        <p>These 20 prompts cover the five core email marketing categories: welcome sequences, sales and promotions, newsletters and content, cold outreach, and retention campaigns. Let us get into it.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* WHY EMAIL + AI = HIGHEST ROI                */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Why Email Marketing + AI Is the Highest-ROI Combo in 2026</h2>

        <p>Before we get to the prompts, here are the numbers that explain why smart marketers are obsessing over AI-powered email in 2026:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>$36&ndash;$42 return per $1 spent</strong> on email marketing (DMA/Litmus, 2026). Social media averages $2.80. Paid search averages $8.</li>
          <li><strong>4.5 billion email users</strong> worldwide &mdash; more than Instagram, TikTok, and X combined (Statista, 2026).</li>
          <li><strong>77% of consumers</strong> prefer email for receiving promotional content from brands they follow (HubSpot State of Marketing).</li>
          <li>Automated email sequences generate <strong>320% more revenue</strong> than non-automated emails (Campaign Monitor).</li>
          <li>Personalized subject lines increase open rates by <strong>26%</strong>, and AI can generate personalized variations at scale in seconds.</li>
          <li>Marketers who use AI for email copy report spending <strong>60% less time</strong> on first drafts while maintaining or improving performance metrics.</li>
        </ul>

        <p>The math is simple: email already has the highest ROI of any marketing channel. AI makes you 3&ndash;5x faster at producing email content. Faster production means more testing. More testing means better performance. Better performance means more revenue from the same list.</p>

        <p>The marketers who are winning right now are not the ones with the biggest lists. They are the ones who can produce, test, and iterate on email campaigns faster than everyone else. AI is the lever that makes that possible.</p>

        <p>Now, the prompts.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: WELCOME & ONBOARDING (1-4)       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Welcome &amp; Onboarding Emails (Prompts 1&ndash;4)</h2>
        <p>Your welcome sequence is the single most important email series you will ever write. New subscribers open welcome emails at <strong>50&ndash;86% rates</strong> &mdash; 4x higher than regular campaigns. This is your best shot at making a first impression, building trust, and driving an early purchase. Mess it up, and you lose that subscriber forever.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. The Welcome Sequence Architect</h3>
        <p>This prompt generates a complete 7-email welcome sequence that takes a brand-new subscriber from &ldquo;who are you?&rdquo; to &ldquo;take my money.&rdquo; Each email has a specific job in the sequence, and the prompt ensures they build on each other rather than repeating the same message.</p>
        <div style={promptBlockStyle}>
{`I need a 7-email welcome sequence for my [BUSINESS TYPE, e.g., "SaaS company," "e-commerce store," "coaching business," "newsletter"].

About my business:
- What I sell: [YOUR PRODUCT/SERVICE, e.g., "online course on productivity systems," "handmade leather goods," "marketing automation software"]
- Target audience: [WHO YOUR SUBSCRIBERS ARE, e.g., "solopreneurs making $50K-$200K," "first-time managers at tech companies," "women 25-40 interested in minimalist fashion"]
- How they subscribed: [LEAD MAGNET OR OPT-IN, e.g., "downloaded my free PDF guide on time management," "signed up for 10% off their first order," "registered for a free webinar"]
- Main product price point: [PRICE, e.g., "$49 course," "$29/month subscription," "$150 average order"]
- Brand voice: [TONE, e.g., "casual and funny," "professional but warm," "bold and direct," "empathetic and supportive"]

Write 7 emails with the following structure:

EMAIL 1 — INSTANT DELIVERY (sent immediately):
- Deliver the lead magnet/welcome gift
- Set expectations for what they'll receive and how often
- One personal detail about me/the brand that builds connection
- Subject line that gets 50%+ open rate

EMAIL 2 — ORIGIN STORY (Day 1):
- Share why I started this business
- Connect my story to THEIR problem
- Build emotional rapport — make them feel understood
- End with a question that invites a reply (replies boost deliverability)

EMAIL 3 — QUICK WIN (Day 3):
- Give them one actionable tip they can implement in under 10 minutes
- Make them experience a result before asking for anything
- Demonstrate my expertise without being preachy
- Build anticipation for the next email

EMAIL 4 — SOCIAL PROOF (Day 5):
- Share 2-3 customer success stories or testimonials
- Focus on the TRANSFORMATION, not the product features
- Match the testimonial demographics to the subscriber (they should see themselves in the stories)
- Soft mention of the product as the vehicle for these results

EMAIL 5 — FIRST OFFER (Day 7):
- Use the PAS framework (Problem-Agitate-Solution)
- Present my product as the logical next step
- Include a special welcome offer (discount, bonus, or bundle)
- Create urgency (48-hour window, limited quantity, bonus expiration)
- Clear, single CTA button

EMAIL 6 — OBJECTION HANDLER (Day 9):
- Address the top 3 objections my target audience has before buying: [LIST YOUR TOP 3 OBJECTIONS, e.g., "too expensive," "I don't have time," "will this work for my industry?"]
- Answer each objection with logic AND emotion
- Include a money-back guarantee or risk-reversal
- Restate the offer from Email 5

EMAIL 7 — LAST CHANCE (Day 12):
- Final reminder that the welcome offer is expiring
- Recap the value in 3 bullet points
- Add one NEW testimonial or result they haven't seen
- Scarcity + urgency + clear CTA
- Let them know what to expect going forward (regular newsletter cadence)

For EACH email, provide:
- 3 subject line options (one curiosity-based, one benefit-based, one personal/conversational)
- Preview text (40-90 characters)
- Full email body (150-300 words each — no fluff)
- CTA text and placement
- Send timing recommendation

Format each email clearly with headers so I can copy-paste them directly into my email platform.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> After generating your welcome sequence, send each email to yourself first and read it on your phone. Over 60% of emails are opened on mobile. If any email looks too long, has a buried CTA, or requires scrolling past a wall of text to find the point &mdash; ask AI to tighten it. The best welcome emails are 150&ndash;250 words, not 500.
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. The SaaS Onboarding Drip Sequence</h3>
        <p>For SaaS companies and digital products, onboarding emails are not just marketing &mdash; they are the difference between a free trial that converts and one that churns. This prompt creates a behavior-triggered onboarding sequence that activates new users.</p>
        <div style={promptBlockStyle}>
{`Create a 5-email onboarding sequence for my [SaaS PRODUCT/DIGITAL PRODUCT].

Product details:
- Product name: [PRODUCT NAME]
- What it does: [ONE-SENTENCE DESCRIPTION, e.g., "project management tool for remote teams," "AI writing assistant for content marketers"]
- Key features (in priority order):
  1. [FEATURE 1, e.g., "task boards with drag-and-drop"]
  2. [FEATURE 2, e.g., "time tracking integrated into tasks"]
  3. [FEATURE 3, e.g., "automated weekly status reports"]
- The "aha moment" — the action that makes users stick: [DESCRIBE IT, e.g., "creating their first project and inviting a team member," "generating their first AI-written blog draft"]
- Trial length: [X DAYS]
- Paid plan price: [PRICE]

Target user:
- Role: [WHO USES IT, e.g., "marketing managers," "freelance designers," "startup founders"]
- Their current solution: [WHAT THEY USE NOW, e.g., "spreadsheets," "a competing tool," "nothing — doing it manually"]
- Biggest frustration with current solution: [PAIN POINT]

Write 5 onboarding emails:

EMAIL 1 — WELCOME + QUICK START (sent immediately after signup):
- Welcome them by name
- Give them exactly ONE action to take right now (the smallest step toward the aha moment)
- Include a visual-friendly step-by-step (numbered list, max 3 steps)
- Link directly to the action (not to a generic dashboard)
- Subject line that creates momentum: "Your [PRODUCT] account is ready — here's your first step"

EMAIL 2 — FEATURE SPOTLIGHT (Day 2):
- Highlight Feature 1 and explain WHY it matters (not just what it does)
- Include a specific use case: "Here's how [SIMILAR COMPANY/ROLE] uses this to [SPECIFIC RESULT]"
- One CTA: "Try it now" linking to that feature
- Keep it under 150 words

EMAIL 3 — THE AHA MOMENT NUDGE (Day 4):
- If they HAVE completed the aha moment: congratulate them and show them the next-level feature
- If they HAVE NOT: show them what they're missing with a specific example of value
- Write BOTH versions so I can set up a conditional branch in my email platform
- Include a GIF or screenshot placeholder showing the feature in action

EMAIL 4 — SOCIAL PROOF + RESULTS (Day 6):
- Share a case study or testimonial from a user similar to them
- Focus on measurable outcomes: "Team X reduced [METRIC] by [PERCENTAGE] in [TIMEFRAME]"
- Connect the testimonial to the features they should be using
- Soft CTA: "See what's possible" linking to a case study page or feature

EMAIL 5 — TRIAL ENDING + UPGRADE (Day [X-2], two days before trial ends):
- Remind them their trial is ending
- Summarize what they've accomplished so far (reference their actual usage if possible, or describe what typical users accomplish)
- Compare: "Here's what you lose if you don't upgrade" vs. "Here's what you unlock on the paid plan"
- Address the #1 objection to paying: [YOUR TOP OBJECTION]
- Clear upgrade CTA with pricing
- If applicable, offer an incentive: [DISCOUNT/EXTENDED TRIAL/BONUS]

For each email, include:
- Subject line (3 options)
- Preview text
- Full body copy
- CTA button text and link destination
- Recommended send time (based on onboarding day)
- Conditional logic notes (if behavior-triggered)`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. The Lead Magnet Follow-Up Sequence</h3>
        <p>Someone downloaded your lead magnet. They are interested but not ready to buy. This prompt creates a nurture sequence that warms them up with value, builds trust, and naturally transitions to your paid offer &mdash; without being pushy.</p>
        <div style={promptBlockStyle}>
{`I need a 5-email follow-up sequence for people who downloaded my lead magnet.

Lead magnet details:
- Title: [LEAD MAGNET TITLE, e.g., "The 2026 Social Media Calendar Template," "7 Cold Email Templates That Get Replies," "Free Website Audit Checklist"]
- Format: [PDF / video / template / checklist / webinar replay]
- Topic: [WHAT IT COVERS]
- The problem it solves: [SPECIFIC PAIN POINT]

My paid product:
- Name: [PRODUCT NAME]
- Price: [PRICE]
- What it includes: [BRIEF DESCRIPTION]
- How it relates to the lead magnet: [e.g., "the lead magnet gives them 7 templates, the paid product gives 100+ templates plus video training," "the checklist identifies problems, the paid service fixes them"]
- Product URL: [URL]

My audience:
- Who they are: [DEMOGRAPHIC/PSYCHOGRAPHIC, e.g., "e-commerce founders doing $10K-$100K/month," "freelance writers looking to raise their rates"]
- Their sophistication level: [BEGINNER / INTERMEDIATE / ADVANCED]
- What they've tried before: [PREVIOUS SOLUTIONS THEY'VE LIKELY USED]

Write 5 emails:

EMAIL 1 — DELIVER + MAXIMIZE (sent immediately):
- Deliver the lead magnet with a direct download link
- Add ONE bonus tip that helps them get more value from the lead magnet (something not included in the download)
- Set expectations: "Over the next week, I'll send you [X] more tips on [TOPIC]"
- Make it personal — sign off with a real name and invite replies
- Subject: "[FIRST NAME], your [LEAD MAGNET] is ready"

EMAIL 2 — DEEP DIVE (Day 2):
- Pick the single most valuable section of the lead magnet
- Expand on it with an additional insight, example, or case study they did NOT get in the download
- Teach something genuinely useful — this email should stand alone as valuable even if they never buy
- End with: "Tomorrow I'll share [TEASER of next email's content]"

EMAIL 3 — STORY + BRIDGE (Day 4):
- Tell a story: either your own experience or a customer's journey
- The story should mirror the subscriber's situation: they have [PROBLEM], they tried [CURRENT SOLUTIONS], nothing worked, then they discovered [YOUR APPROACH/FRAMEWORK]
- Do NOT pitch the product yet — just plant the seed of your methodology
- End with a cliffhanger or question: "Have you ever experienced this?"

EMAIL 4 — THE SOFT PITCH (Day 6):
- Reference the value you've provided in emails 1-3
- Transition naturally: "I created [LEAD MAGNET] because [REASON]. But I realized people needed more than a [FORMAT] — they needed [WHAT YOUR PAID PRODUCT PROVIDES]"
- Introduce the paid product as the natural next step
- Use the AIDA framework: Attention (hook), Interest (what it includes), Desire (results others have gotten), Action (CTA)
- Include one specific testimonial with a measurable result
- Link to product page, not checkout (let them explore)

EMAIL 5 — DECISION POINT (Day 8):
- Final email in the lead magnet sequence
- Be direct: "I've shared [X] free resources with you this week. If you're ready to go deeper, here's what I recommend."
- Stack the value: list everything included in the product
- Address one objection: [YOUR MOST COMMON OBJECTION]
- Add a risk-reversal (guarantee)
- Clear CTA to purchase
- Let them know: "After this, you'll hear from me [FREQUENCY, e.g., weekly / bi-weekly] with [WHAT YOUR NEWSLETTER COVERS]"
- Warm transition into your regular email cadence

For each email include: subject line (3 options), preview text, full body copy (150-250 words), and CTA.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The gap between your lead magnet and your paid product should feel like a bridge, not a cliff. If your lead magnet gives people a checklist, your paid product should give them the system. If your lead magnet diagnoses a problem, your paid product should be the solution. The closer the connection, the higher your conversion rate.
        </div>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. The VIP Subscriber Nurture Sequence</h3>
        <p>Not all subscribers are equal. Your most engaged readers &mdash; the ones who open every email, click every link, reply to your messages &mdash; deserve a different experience. This prompt creates an exclusive nurture track for your VIP subscribers that deepens loyalty and maximizes lifetime value.</p>
        <div style={promptBlockStyle}>
{`Create a 4-email VIP nurture sequence for my most engaged email subscribers.

Context:
- My business: [BUSINESS DESCRIPTION]
- These subscribers are VIPs because: [CRITERIA, e.g., "they've opened 10+ consecutive emails," "they've purchased at least once," "they've been subscribed for 6+ months with high engagement"]
- What I want from them: [GOAL, e.g., "upgrade to annual plan," "purchase premium product," "become brand ambassadors," "join my community"]
- My premium offer: [PRODUCT/SERVICE NAME AND PRICE]
- Brand voice: [TONE]

Write 4 emails:

EMAIL 1 — THE RECOGNITION (Day 0):
- Acknowledge that they're one of your most engaged subscribers — make them feel special (not with fake flattery, but with genuine appreciation)
- Share something exclusive: an insight, a behind-the-scenes look, or early access to something you haven't announced publicly
- Use language that creates belonging: "you're one of the [X] people who..."
- No ask in this email — pure value and appreciation

EMAIL 2 — THE INSIDER (Day 3):
- Share something you normally keep behind a paywall or don't share publicly
- This could be: a strategy breakdown, a revenue number, a mistake you made, a framework, or a resource
- Position it explicitly: "I don't usually share this publicly, but since you're [VIP CRITERIA]..."
- This builds reciprocity — you gave them something valuable, they'll want to give back

EMAIL 3 — THE EXCLUSIVE OFFER (Day 7):
- Present your premium offer with a VIP-only incentive
- This should feel different from your regular promotions: different pricing, different bonus, or early access
- Reference the value you've provided in emails 1-2: "Over the past week, I've shared [X] with you because you're one of my most engaged readers. Now I want to offer you something I'm not offering anyone else."
- Make the exclusivity real — limited quantity, limited time, or VIP-only pricing
- Strong CTA with urgency

EMAIL 4 — THE INNER CIRCLE (Day 10):
- Regardless of whether they bought, invite them deeper into your ecosystem
- Options: private community, advisory board, beta testing group, referral program, or affiliate opportunity
- Frame it as a mutually beneficial relationship, not a favor
- If they DID buy, this is the upsell or community invitation
- If they DID NOT buy, this keeps the relationship warm and opens a different path to value

For each email include: subject line (3 options), preview text, full body copy (200-300 words), and CTA. Mark clearly where personalization tokens should go ([FIRST NAME], [VIP CRITERIA], etc.).`}
        </div>

        {/* CTA AFTER WELCOME SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 150+ email marketing prompts with proven frameworks built in?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Email Marketing Kit includes welcome sequences, sales emails, newsletter templates, cold outreach scripts, A/B testing frameworks, and win-back campaigns. Copy, paste, send, profit.</p>
          <a href={EMAIL_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Email Marketing Kit
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: SALES & PROMOTIONS (5-8)         */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Sales &amp; Promotion Emails (Prompts 5&ndash;8)</h2>
        <p>Sales emails are where email marketing directly prints money. A well-crafted product launch email can generate more revenue in 24 hours than a month of social media posts. These prompts use battle-tested copywriting frameworks &mdash; PAS, AIDA, scarcity triggers, and social proof stacking &mdash; to create emails that convert.</p>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. The Product Launch Email Sequence</h3>
        <p>Launching a product to your email list? This prompt creates the full 4-email launch sequence: teaser, announcement, social proof, and last chance. Each email has a different psychological job, and together they create a momentum arc that peaks at your deadline.</p>
        <div style={promptBlockStyle}>
{`I'm launching a new product and need a 4-email launch sequence.

Product details:
- Product name: [NAME]
- What it is: [DESCRIPTION, e.g., "a 6-week cohort-based course on AI prompt engineering," "a Notion template pack for freelancers," "a physical planner designed for entrepreneurs"]
- Price: $[AMOUNT]
- Launch date: [DATE]
- Launch offer: [SPECIAL DEAL, e.g., "30% off for launch week only," "includes 3 bonus modules for early buyers," "first 100 buyers get a 1-on-1 call"]
- Target buyer: [WHO THIS IS FOR]
- The problem it solves: [SPECIFIC PAIN POINT]
- Key result/transformation: [WHAT BUYERS WILL ACHIEVE]
- Social proof available: [TESTIMONIALS, BETA RESULTS, YOUR OWN RESULTS, CASE STUDIES]

Write 4 emails:

EMAIL 1 — THE TEASER (3 days before launch):
- Build anticipation without revealing the full product
- Open with the PROBLEM your audience faces (make them feel it)
- Hint at what's coming: "I've been working on something for [X MONTHS] and it's almost ready"
- Give them a reason to open the next email: "On [LAUNCH DATE], I'm releasing something that will [SPECIFIC BENEFIT]"
- Optional: early-bird waitlist link for priority access
- DO NOT reveal the price or full details yet

EMAIL 2 — THE ANNOUNCEMENT (launch day):
- This is the big reveal — lead with the transformation, not the product
- Open with a bold claim backed by a specific result: "What if you could [DESIRED OUTCOME] in [TIMEFRAME]?"
- Introduce the product: what it is, who it's for, what's included
- Stack the value: list every component with its individual value
- Present the launch offer with urgency: "[X] discount expires [DATE]" or "first [X] buyers get [BONUS]"
- Social proof: include 1-2 testimonials or results
- Clear, single CTA button: "Get [PRODUCT NAME] — $[PRICE]"
- P.S. line with urgency reminder

EMAIL 3 — THE PROOF (Day 2 of launch):
- This email is 100% social proof and results
- Open with: "I wasn't sure how people would respond. Then I opened my inbox."
- Share 3-5 testimonials, screenshots, or results from beta users/early buyers
- Each testimonial should highlight a DIFFERENT benefit or use case
- Brief reminder of what the product includes and the launch offer
- CTA: "Join [X NUMBER] people who already got [PRODUCT] — [LAUNCH OFFER] ends [DATE]"

EMAIL 4 — THE LAST CHANCE (final day):
- Subject line: urgency and specificity — "[FIRST NAME], 12 hours left"
- Open with: "This is the last email I'll send about [PRODUCT] at this price."
- Recap the value in 3-5 bullet points (no lengthy descriptions)
- Address the #1 objection: [MOST COMMON OBJECTION AND YOUR RESPONSE]
- Add a risk-reversal: money-back guarantee, free trial, or no-questions-asked return
- Create FOMO: mention how many people have already bought
- Final CTA with countdown language
- Genuine close: "Whether you join now or later, I appreciate you reading these emails."

For each email: 3 subject line options, preview text, full body (200-400 words), CTA button text, and send time recommendation.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The highest-converting product launch emails share one trait: they sell the transformation, not the product. Nobody buys a course &mdash; they buy the result the course delivers. Nobody buys software &mdash; they buy the time it saves. In every email, lead with what changes in the buyer&rsquo;s life after purchasing, not with features and specifications.
        </div>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. The Flash Sale Email</h3>
        <p>Flash sales work because of urgency and scarcity. This prompt creates a single high-converting flash sale email designed to generate immediate revenue from your list with a time-limited offer.</p>
        <div style={promptBlockStyle}>
{`Write a flash sale email for my audience.

Details:
- Product: [PRODUCT NAME AND BRIEF DESCRIPTION]
- Normal price: $[REGULAR PRICE]
- Sale price: $[SALE PRICE] ([X]% off)
- Sale duration: [TIMEFRAME, e.g., "24 hours only," "this weekend only," "ends Friday at midnight"]
- Reason for the sale: [WHY, e.g., "Black Friday," "our anniversary," "we hit 10K customers," "end of quarter," "just because I felt like it"]
- Target buyer: [WHO WOULD BENEFIT MOST]
- Best feature/result: [THE ONE THING THAT MAKES PEOPLE BUY]
- Testimonial: [ONE SHORT TESTIMONIAL WITH NAME AND RESULT]

Write the email using this structure:

1. SUBJECT LINE: Write 5 options:
   - One with the discount percentage
   - One with urgency/deadline
   - One with curiosity (no mention of sale)
   - One with social proof ("join X people who...")
   - One that's personal/conversational

2. PREVIEW TEXT: Write 3 options (40-90 characters each)

3. EMAIL BODY (250 words max):
   - Opening hook: ONE sentence that makes them stop scrolling. Not "we're having a sale." Something that connects the product to a desire or pain point.
   - The offer: State the deal clearly — what they get, the discount, and the deadline. Bold the savings.
   - Why now: One paragraph explaining why this deal exists and why it won't come back
   - Social proof: The testimonial, formatted as a quote
   - Objection buster: One sentence that handles the most common hesitation
   - CTA: Big, clear button. Text: "[PRODUCT NAME] — $[SALE PRICE] (save $[SAVINGS])"
   - P.S.: Restate the deadline and add one more benefit they'll get

4. URGENCY FOLLOW-UP (send 4 hours before sale ends):
   - Short (100 words max)
   - Subject: "⏰ [X] hours left — [PRODUCT] at [DISCOUNT]%"
   - Recap the deal, restate the deadline, single CTA
   - No new information — just urgency

Keep the tone [BRAND VOICE]. Do NOT use fake scarcity. The deadline must be real.`}
        </div>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. The Abandoned Cart Recovery Sequence</h3>
        <p>Roughly 70% of online shopping carts are abandoned before checkout. That is not lost revenue &mdash; it is revenue waiting to be recovered. This prompt creates a 3-email abandoned cart sequence that recovers 10&ndash;15% of those lost sales.</p>
        <div style={promptBlockStyle}>
{`Create a 3-email abandoned cart recovery sequence.

My business:
- Business type: [E-COMMERCE / DIGITAL PRODUCTS / SAAS / COURSE]
- Product they left in cart: [PRODUCT NAME AND PRICE]
- Average cart value: $[AMOUNT]
- My return/refund policy: [POLICY, e.g., "30-day money-back guarantee," "free returns within 14 days"]
- Brand voice: [TONE]
- Common reasons people abandon cart: [LIST 2-3, e.g., "comparing prices," "unexpected shipping costs," "not sure about sizing," "need to think about it"]

Write 3 emails:

EMAIL 1 — THE GENTLE REMINDER (sent 1 hour after abandonment):
- Tone: helpful, not salesy — "Did something go wrong?" not "BUY NOW"
- Acknowledge they left something behind without being creepy about tracking
- Show the specific product with name, image placeholder, and price
- Address the #1 abandonment reason: [MOST COMMON REASON AND YOUR RESPONSE]
- Single CTA: "Complete your order" linking directly back to their cart
- NO discount yet — many people just got distracted and will complete at full price
- Subject lines (3 options): casual, helpful, curiosity-driven

EMAIL 2 — THE VALUE REINFORCEMENT (sent 24 hours after abandonment):
- Now we add social proof and value
- Open with a testimonial from someone who bought [PRODUCT] and loved it
- Remind them what they're getting: restate the key benefits (not features) in 3 bullet points
- Address objection #2: [SECOND MOST COMMON REASON]
- Mention your guarantee/return policy to reduce risk
- Still NO discount — test this sequence without one first
- CTA: "Your [PRODUCT] is still waiting"
- Subject lines (3 options): social proof, benefit-driven, personal

EMAIL 3 — THE INCENTIVE (sent 72 hours after abandonment):
- This is where you offer the incentive (if needed): [INCENTIVE, e.g., "10% off," "free shipping," "$5 off," "free bonus item"]
- Open with: "I normally don't do this, but..."
- Make the incentive feel exclusive and earned, not desperate
- Combine: social proof + incentive + urgency + guarantee
- Set a deadline for the incentive: "This offer expires in 48 hours"
- Final CTA with discount code or auto-applied link
- If they still don't buy, mark them for a different nurture track (not more cart emails)
- Subject lines (3 options): incentive-focused, urgency, final chance

For each email: subject lines, preview text, full body copy, CTA text, and send timing. Also include: recommended A/B test for each email (one variable to test per email).`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Do not lead with a discount in Email 1. Data from Klaviyo and Omnisend consistently shows that 30&ndash;40% of cart abandoners complete their purchase from a simple reminder email &mdash; no incentive needed. If you immediately offer 10% off, you train your audience to abandon carts on purpose. Save the discount for Email 3, and only for the people who genuinely needed the nudge.
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. The Upsell and Cross-Sell Email</h3>
        <p>Your existing customers are 60&ndash;70% more likely to buy from you again than a new prospect. This prompt creates post-purchase upsell and cross-sell emails that increase average order value and customer lifetime value without feeling pushy.</p>
        <div style={promptBlockStyle}>
{`Create an upsell/cross-sell email for customers who just purchased from me.

Purchase details:
- What they bought: [PRODUCT NAME AND PRICE]
- When they bought: [TIMING, e.g., "just now / 3 days ago / 1 week ago"]
- Their likely satisfaction level: [e.g., "high — they just made the purchase," "they've had time to use it and see results"]

Upsell/cross-sell product:
- Product name: [NAME]
- Price: $[AMOUNT]
- How it relates to their purchase: [CONNECTION, e.g., "it's the advanced version," "it's a complementary product," "it completes the system"]
- The gap it fills: [WHAT THE ORIGINAL PURCHASE DOESN'T DO THAT THIS PRODUCT DOES]
- Special offer for existing customers: [INCENTIVE, e.g., "20% off because you're already a customer," "free bonus module," "bundle discount"]

Write the email:

1. SUBJECT LINE (5 options):
   - One that references their recent purchase
   - One that highlights the result they'll get from the upsell
   - One with social proof ("87% of [PRODUCT] buyers also get...")
   - One with an exclusive offer angle
   - One that's curiosity-driven

2. EMAIL BODY:
   - Open by congratulating them on their purchase and reinforcing it was a great decision (reduce buyer's remorse)
   - Bridge: "Now that you have [PRODUCT], you might be wondering about [NEXT LOGICAL QUESTION OR NEED]"
   - Introduce the upsell as the answer to that question — NOT as another thing to buy
   - Show how the two products work TOGETHER to create a better result than either alone
   - Include one testimonial from someone who bought both
   - Present the existing-customer-only offer
   - CTA: clear, single button
   - Tone: helpful advisor, not pushy salesperson

3. TIMING RECOMMENDATION: When should this email send relative to the purchase? Explain your reasoning.

Keep it under 250 words. The best upsell emails feel like a personalized recommendation from a friend, not a cash grab.`}
        </div>

        {/* CTA AFTER SALES SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>These 8 prompts are just the sales section.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The full <Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>AI Email Marketing Kit</Link> includes 150+ prompts covering every email type: welcome sequences, launch campaigns, newsletter templates, cold outreach, A/B testing systems, and automated win-back flows. Every prompt uses proven copywriting frameworks.</p>
          <a href={EMAIL_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Email Marketing Kit
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: NEWSLETTER & CONTENT (9-12)      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Newsletter &amp; Content Emails (Prompts 9&ndash;12)</h2>
        <p>Your newsletter is how you stay top of mind between promotions. The best newsletters deliver so much value that subscribers actually look forward to them, which means when you do make an offer, they trust you enough to buy. These prompts help you produce consistent, high-quality newsletter content without staring at a blank screen every week.</p>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. The Weekly Newsletter Framework</h3>
        <p>This is the workhorse prompt. Use it every week to produce a newsletter your subscribers actually read. It creates a structured, repeatable format you can customize with fresh content each time, so your newsletter feels consistent without being boring.</p>
        <div style={promptBlockStyle}>
{`Write this week's newsletter issue for my audience.

Newsletter details:
- Newsletter name: [NAME, e.g., "The Growth Memo," "Creator Weekly," "Marketing Minutes"]
- Topic/niche: [NICHE, e.g., "B2B SaaS growth strategies," "freelance business building," "AI and productivity"]
- Audience: [WHO READS IT, e.g., "startup founders," "marketing managers," "freelance designers"]
- Cadence: [WEEKLY / BI-WEEKLY]
- Brand voice: [TONE, e.g., "smart and slightly irreverent," "professional with personality," "casual and direct"]
- Typical length: [WORD COUNT, e.g., "500-800 words"]

This week's content inputs:
- Main topic: [THE BIG IDEA FOR THIS ISSUE, e.g., "why most landing pages fail," "the AI tools I actually use daily," "how to raise your freelance rates without losing clients"]
- Key insight or opinion: [YOUR UNIQUE TAKE ON THE TOPIC]
- Supporting data or example: [A STAT, CASE STUDY, OR PERSONAL EXPERIENCE]
- Resource to share: [ARTICLE, TOOL, BOOK, OR RESOURCE YOU WANT TO RECOMMEND]
- CTA for this issue: [WHAT YOU WANT READERS TO DO, e.g., "reply with their biggest challenge," "check out your new product," "read your latest blog post"]

Write the newsletter using this structure:

1. SUBJECT LINE: 5 options — one curiosity-based, one number-driven, one controversial, one personal, one ultra-short (under 5 words)

2. OPENING HOOK (2-3 sentences): Start with a story, observation, or counterintuitive statement that makes them want to keep reading. NOT "Happy Monday!" or "Hope you're doing well."

3. MAIN SECTION: The key insight with supporting evidence. Write it as if you're explaining this to a smart friend over coffee — not a textbook, not a Twitter thread. Use short paragraphs (2-3 sentences max). Bold the key takeaways.

4. ACTIONABLE TAKEAWAY: One specific thing they can implement this week. Be prescriptive: "Do THIS, not THAT." Include steps if needed.

5. RESOURCE PICK: Brief recommendation of [RESOURCE] with why it's worth their time (2-3 sentences, not a full review).

6. CTA: Natural transition to [THIS WEEK'S CTA]. Should feel organic, not bolted on.

7. SIGN-OFF: Brief, personal, consistent with brand voice. Include a P.S. line with either a personal note, a teaser for next week, or a secondary CTA.

Write the full newsletter, formatted as it would appear in the email. Use line breaks liberally — nobody wants a wall of text in their inbox.`}
        </div>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. The Content Roundup Email</h3>
        <p>Content roundups are the fastest newsletter format to produce and one of the most appreciated by subscribers. You curate the best content from around the web so your readers do not have to. This prompt structures a curated roundup that provides real value, not just a list of links.</p>
        <div style={promptBlockStyle}>
{`Write a content roundup newsletter issue.

Newsletter context:
- Newsletter name: [NAME]
- Niche: [TOPIC AREA]
- Audience: [WHO READS IT]
- Brand voice: [TONE]

Content to include (I'll provide 5-7 items):
1. [TITLE AND URL OF ARTICLE/RESOURCE 1] — [ONE SENTENCE ABOUT WHY IT'S INTERESTING]
2. [TITLE AND URL OF ARTICLE/RESOURCE 2] — [ONE SENTENCE ABOUT WHY IT'S INTERESTING]
3. [TITLE AND URL OF ARTICLE/RESOURCE 3] — [ONE SENTENCE ABOUT WHY IT'S INTERESTING]
4. [TITLE AND URL OF ARTICLE/RESOURCE 4] — [ONE SENTENCE ABOUT WHY IT'S INTERESTING]
5. [TITLE AND URL OF ARTICLE/RESOURCE 5] — [ONE SENTENCE ABOUT WHY IT'S INTERESTING]
6. [OPTIONAL: TITLE AND URL 6]
7. [OPTIONAL: TITLE AND URL 7]

Write the roundup email:

1. SUBJECT LINE: 5 options. Best-performing roundup subjects use numbers and specificity: "7 things I read this week that changed how I think about [TOPIC]"

2. INTRO (3-4 sentences): Set the theme for this week's roundup. What's the through-line connecting these items? Or, if there's no theme, open with a brief personal observation about the week.

3. FOR EACH ITEM:
   - Bold headline with linked title
   - 2-3 sentence summary that explains WHY this is worth reading (not just WHAT it is)
   - Your personal take or hot take: what you agree with, disagree with, or found surprising
   - "Key quote" or key stat pulled from the piece (if applicable)
   - Categorize with a tag: [MUST READ] [DEEP DIVE] [QUICK HIT] [TOOL] [HOT TAKE]

4. PERSONAL PICK OF THE WEEK: One item that you found most valuable, with a slightly longer write-up (4-5 sentences) about why.

5. CLOSER: A question to invite replies ("What are you reading this week?"), a teaser for next issue, and a PS with your CTA.

Format it cleanly with clear visual breaks between items. This should be scannable in under 2 minutes but reward closer reading.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The secret weapon in roundup newsletters is your editorial voice. Anyone can compile a list of links. What makes subscribers loyal is your commentary &mdash; your hot takes, your disagreements, your surprising connections between ideas. Spend 80% of your roundup writing time on your commentary, not on finding links.
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. The Industry Trends Digest</h3>
        <p>Position yourself as the go-to source for what is happening in your industry. This prompt creates a trends digest email that makes subscribers look smart by forwarding your email to their colleagues. That is free growth.</p>
        <div style={promptBlockStyle}>
{`Write an industry trends digest email for my audience.

Context:
- My industry/niche: [INDUSTRY, e.g., "e-commerce," "SaaS," "content marketing," "AI/machine learning," "real estate investing"]
- My audience's role: [ROLE, e.g., "CMOs and VP Marketing," "indie hackers and solopreneurs," "real estate investors"]
- My newsletter name: [NAME]
- Brand voice: [TONE]

Recent trends and news to cover (provide 3-5):
1. [TREND/NEWS ITEM 1, e.g., "Google's new AI Overviews are crushing organic click-through rates for informational queries"]
2. [TREND/NEWS ITEM 2, e.g., "Shopify just launched its own email marketing tool, competing directly with Klaviyo"]
3. [TREND/NEWS ITEM 3, e.g., "Remote-first companies are outperforming hybrid companies in employee retention by 23%"]
4. [OPTIONAL: TREND/NEWS 4]
5. [OPTIONAL: TREND/NEWS 5]

Write the digest:

1. SUBJECT LINE: 5 options. Trend digest subjects work best when they tease the most surprising or controversial item.

2. OPENING (2-3 sentences): Set up the big picture. What's the theme this week? Is the industry shifting, evolving, breaking, or booming?

3. FOR EACH TREND:
   - Bold headline that summarizes the trend in one line
   - WHAT happened (2-3 sentences of factual context)
   - WHY it matters to my specific audience (2-3 sentences — this is the value-add)
   - WHAT TO DO about it: One actionable recommendation for how readers should respond, adapt, or capitalize
   - MY TAKE: My personal opinion — bullish, bearish, skeptical, excited — in one sentence

4. THE BIG PICTURE: A 3-4 sentence editorial that ties the trends together and offers a forward-looking perspective. What should my audience be paying attention to over the next 30-90 days?

5. CLOSER: Invite replies with a specific question ("Are you seeing [TREND] in your business?"). Tease next week's topic.

Target length: 600-900 words. Write it so that forwarding this email to a colleague makes the reader look informed and smart.`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. The Thought Leadership Email</h3>
        <p>Thought leadership emails are not about regurgitating conventional wisdom. They are about sharing a unique perspective that challenges assumptions, presents a new framework, or offers a contrarian take backed by evidence. These emails build authority and make people pay attention to everything else you send.</p>
        <div style={promptBlockStyle}>
{`Write a thought leadership email for my newsletter.

Context:
- My niche: [NICHE]
- My audience: [AUDIENCE]
- My brand voice: [TONE]
- My credibility: [WHY SHOULD THEY LISTEN TO ME, e.g., "I've built 3 companies to $1M+ ARR," "I've managed $50M in ad spend," "I've been a hiring manager for 15 years"]

The big idea for this email:
- My thesis: [YOUR CONTRARIAN OR UNIQUE OPINION, e.g., "Content marketing is dead for most B2B companies," "You shouldn't raise VC money in 2026," "Cold email outperforms LinkedIn outreach by 5x and here's the data"]
- Why I believe this: [YOUR REASONING IN 2-3 BULLET POINTS]
- Evidence: [DATA, PERSONAL EXPERIENCE, OR CASE STUDY THAT SUPPORTS YOUR THESIS]
- The conventional wisdom I'm challenging: [WHAT MOST PEOPLE BELIEVE THAT I THINK IS WRONG]
- The actionable takeaway: [WHAT I WANT READERS TO DO DIFFERENTLY AFTER READING THIS]

Write the email:

1. SUBJECT LINE: 5 options. The best thought leadership subjects provoke curiosity or mild controversy: "Why I stopped [COMMON PRACTICE]" or "The [POPULAR STRATEGY] myth"

2. OPENING HOOK (2-3 sentences): Start with a bold statement, a surprising statistic, or a brief story that sets up the big idea. The reader should immediately think "wait, what?" or "tell me more."

3. THE SETUP: Describe the conventional wisdom in 2-3 sentences. Show that you understand why most people believe it. This builds credibility before you challenge it.

4. THE BREAKDOWN: Present your counter-argument in 3-5 short paragraphs. Each paragraph should make ONE point, supported by evidence (data, story, or logical reasoning). Use this structure:
   - Point 1: The strongest evidence that the conventional wisdom is wrong
   - Point 2: What you've seen/done differently and the results
   - Point 3: The framework or mental model you use instead

5. THE TAKEAWAY: 2-3 sentences that tell readers exactly what to do with this information. Be specific and prescriptive. Not "think differently about X" but "this week, try [SPECIFIC ACTION]."

6. THE CLOSE: End with a question that invites healthy debate in the replies. Great thought leadership emails generate responses.

Target length: 500-700 words. Write it so it could be screenshot-shared on social media. Every paragraph should be strong enough to stand alone.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: COLD OUTREACH (13-16)            */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Cold Outreach Emails (Prompts 13&ndash;16)</h2>
        <p>Cold email has a bad reputation because most cold emails are terrible. They are generic, self-centered, and read like spam. But done right, cold email is one of the most effective growth channels for B2B companies, agencies, consultants, and anyone selling high-ticket services. The average cold email gets a 1&ndash;5% reply rate. The prompts below are designed to hit 10&ndash;20%+ by being specific, relevant, and human.</p>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. The Cold Email Introduction</h3>
        <p>The first cold email is everything. You have 2&ndash;3 seconds to earn their attention before they delete, archive, or mark you as spam. This prompt creates cold emails that feel like they were written specifically for the recipient &mdash; because the prompt ensures they are.</p>
        <div style={promptBlockStyle}>
{`Write a cold outreach email to a potential [CLIENT/CUSTOMER/PARTNER].

About my business:
- What I sell: [SERVICE/PRODUCT, e.g., "SEO services for e-commerce brands," "custom software development," "executive coaching"]
- My ideal client: [WHO, e.g., "DTC e-commerce brands doing $1M-$10M revenue," "Series A SaaS companies," "C-suite executives at mid-market companies"]
- My key differentiator: [WHAT MAKES ME DIFFERENT, e.g., "we guarantee page-1 rankings or your money back," "we only work with 5 clients at a time," "I've coached 200+ executives at Fortune 500 companies"]
- Price range: [APPROXIMATE PRICE RANGE]
- Best result I've delivered: [YOUR MOST IMPRESSIVE CLIENT RESULT WITH SPECIFICS]

About the prospect:
- Name: [PROSPECT NAME]
- Title: [THEIR TITLE]
- Company: [THEIR COMPANY]
- Company size: [APPROXIMATE SIZE]
- What their company does: [BRIEF DESCRIPTION]
- Something specific about them: [A DETAIL FROM THEIR WEBSITE, LINKEDIN, RECENT NEWS, PODCAST APPEARANCE, OR SOCIAL MEDIA POST]
- Their likely pain point: [YOUR EDUCATED GUESS ABOUT WHAT THEY STRUGGLE WITH]

Write the cold email:

1. SUBJECT LINE: 5 options. Rules for cold email subjects:
   - No clickbait — they'll hate you forever
   - Lowercase works better than Title Case
   - Reference them or their company, not yourself
   - Under 6 words performs best
   - Example formats: "quick question about [TOPIC]", "[THEIR COMPANY] + [YOUR COMPANY]", "idea for [THEIR SPECIFIC CHALLENGE]"

2. EMAIL BODY (under 125 words — hard limit):
   - Line 1: Personalized opener referencing [SOMETHING SPECIFIC ABOUT THEM]. Not "I hope this email finds you well." Something that proves you actually researched them. One sentence.
   - Line 2-3: The value statement. Connect YOUR capability to THEIR specific situation. "I noticed [THEIR SITUATION/PAIN POINT]. We helped [SIMILAR COMPANY] achieve [SPECIFIC RESULT]."
   - Line 4: The ask. One clear, low-commitment CTA. Not "let's jump on a call." Something easy: "Would it be worth a 15-minute chat to see if this could work for [THEIR COMPANY]?" or "Want me to send over a quick analysis?"
   - Sign-off: First name only. Keep it casual.

3. FORMATTING RULES:
   - No bold, no bullet points, no HTML — plain text only
   - No attachments or images
   - No "sent from my iPhone" fake casual
   - No long signature block — just name, title, one link
   - Write at an 8th-grade reading level
   - Must pass the "would I respond to this?" test

Do NOT write anything that sounds like a mass email. This should read like a one-to-one message from a real person.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The number-one predictor of cold email success is relevance, not cleverness. A simple, direct email that demonstrates you understand the prospect&rsquo;s specific situation will outperform a witty, creative email that could have been sent to anyone. Spend 80% of your time on research and 20% on writing.
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. The Partnership Pitch Email</h3>
        <p>Partnerships &mdash; co-marketing, affiliate deals, joint ventures, integration partnerships &mdash; can 10x your reach overnight. But most partnership pitches fail because they focus on what YOU want instead of what the PARTNER gets. This prompt flips the script.</p>
        <div style={promptBlockStyle}>
{`Write a partnership pitch email.

My business:
- Company name: [YOUR COMPANY]
- What I do: [YOUR PRODUCT/SERVICE]
- My audience size: [YOUR REACH, e.g., "25K email subscribers," "100K monthly site visitors," "50K social media followers"]
- My audience demographics: [WHO MY AUDIENCE IS]

The potential partner:
- Company name: [PARTNER COMPANY]
- What they do: [THEIR PRODUCT/SERVICE]
- Their audience: [WHO THEIR AUDIENCE IS — must overlap with yours]
- Contact name and title: [NAME AND TITLE]
- Why they'd be a good partner: [THE OVERLAP OR SYNERGY, e.g., "their audience needs my product but they don't offer it," "we serve the same audience with complementary products"]

Partnership proposal:
- Type of partnership: [WHAT I'M PROPOSING, e.g., "co-hosted webinar," "cross-promotion to each other's email lists," "affiliate/revenue share," "product integration," "guest content swap," "bundle deal"]
- What I bring to the table: [SPECIFIC VALUE FOR THEM, e.g., "exposure to my 25K subscribers," "20% revenue share on every referral," "content creation for their blog"]
- What I want from them: [SPECIFIC ASK, e.g., "promotion to their list," "product integration," "co-branded campaign"]
- Proof this works: [EXAMPLE OF A SIMILAR PARTNERSHIP THAT SUCCEEDED, or a specific reason why this would benefit them]

Write the email:

1. SUBJECT LINE: 5 options. Partnership subjects work best when they're specific and benefit-focused: "collab idea: [YOUR COMPANY] x [THEIR COMPANY]" or "quick idea to get [THEIR COMPANY] in front of [X] [AUDIENCE TYPE]"

2. EMAIL BODY (under 200 words):
   - Opening: Lead with a genuine compliment about their work (specific, not generic)
   - The overlap: Explain WHY your audiences are complementary in one sentence
   - The proposal: State what you're proposing clearly and concisely
   - What's in it for THEM: Lead with their benefits, not yours. Be specific with numbers: "This would put [THEIR COMPANY] in front of [X] [AUDIENCE TYPE] who already [RELEVANT BEHAVIOR]"
   - Social proof: Mention a similar partnership that worked, or your relevant metrics
   - The ask: Low-commitment next step — "Would you be open to a quick call to explore this?"

3. IMPORTANT: The email should be 80% about THEM and their benefit, 20% about you. Most partnership pitches fail because they're self-centered.`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. The Cold Email Follow-Up Sequence</h3>
        <p>80% of deals require at least 5 follow-ups, but 44% of salespeople give up after one email. The follow-up is where the money is. This prompt creates a 4-email follow-up sequence that stays persistent without being annoying &mdash; each email adds new value instead of just &ldquo;checking in.&rdquo;</p>
        <div style={promptBlockStyle}>
{`Create a 4-email follow-up sequence for a cold email that got no response.

Context:
- The original cold email pitched: [WHAT YOU OFFERED]
- The prospect: [THEIR NAME, TITLE, AND COMPANY]
- Their likely pain point: [PAIN POINT YOU ADDRESSED]
- Your best result: [YOUR MOST IMPRESSIVE RELEVANT RESULT]

Write 4 follow-ups, each adding NEW value (never just "circling back" or "checking in"):

FOLLOW-UP 1 (3 days after original email):
- Subject: Reply to the original thread (no new subject line)
- Strategy: Share a relevant insight, tip, or resource related to their pain point
- Format: "Hi [NAME], thought you might find this useful — [BRIEF INSIGHT OR LINK TO ARTICLE/CASE STUDY]. It's related to [THE THING YOU MENTIONED IN YOUR FIRST EMAIL]. Worth a quick look. — [YOUR NAME]"
- Under 50 words. No ask. Pure value.

FOLLOW-UP 2 (7 days after original email):
- Subject: Reply to same thread
- Strategy: Share a specific, relevant case study or result
- Format: "Hi [NAME], quick update — we just helped [SIMILAR COMPANY IN THEIR INDUSTRY] achieve [SPECIFIC RESULT]. Their situation was similar to what I see at [PROSPECT'S COMPANY]. Happy to share the details if you're curious. — [YOUR NAME]"
- Under 75 words. Soft ask.

FOLLOW-UP 3 (14 days after original email):
- Subject: Reply to same thread
- Strategy: The "new angle" — approach the value proposition from a different direction
- Instead of repeating the original pitch, highlight a DIFFERENT benefit or use case
- Include a question: "Is [PAIN POINT] still a priority for [THEIR COMPANY] this quarter?"
- Under 75 words. Direct question CTA.

FOLLOW-UP 4 (21 days after original email):
- Subject: Reply to same thread
- Strategy: The permission-based close
- Format: "Hi [NAME], I've reached out a few times about [TOPIC]. I don't want to be a pest. If the timing isn't right, no worries at all — just let me know and I'll stop reaching out. But if [PAIN POINT] is still on your radar, I'd love 15 minutes to show you how we've helped companies like [SIMILAR COMPANY] solve it. Either way, all good. — [YOUR NAME]"
- Under 75 words. Gives them an easy out, which paradoxically increases response rates.

Rules for ALL follow-ups:
- Always reply to the original thread (don't start new threads)
- Never use: "just checking in," "circling back," "touching base," "bumping this to the top"
- Each email must add something new (insight, data, case study, question)
- Keep every email under 75 words
- Plain text, no formatting
- Sound like a human, not a sequence`}
        </div>

        {/* PROMPT 16 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>16. The Breakup Email</h3>
        <p>The breakup email is the final email in a cold outreach sequence. Counterintuitively, it often gets the highest reply rate of any email in the sequence because it uses loss aversion: people respond to the idea that they are about to lose access to something. It also gives the prospect an easy, guilt-free way to say &ldquo;not now&rdquo; instead of ignoring you.</p>
        <div style={promptBlockStyle}>
{`Write a "breakup email" — the final email in a cold outreach sequence where I give the prospect an easy out.

Context:
- Prospect: [NAME AND COMPANY]
- What I've been pitching: [YOUR OFFER IN ONE SENTENCE]
- Number of previous emails sent (with no reply): [NUMBER, e.g., "4"]
- The core value I offer: [THE MAIN BENEFIT, e.g., "we help e-commerce brands increase email revenue by 40%+"]

Write the breakup email:

1. SUBJECT LINE: 5 options. Breakup subjects work best when they're short and slightly surprising:
   - "should I close your file?"
   - "not a fit?"
   - "one last thing"
   - "going to stop reaching out"
   - "[NAME], permission to close the loop?"

2. EMAIL BODY (under 100 words):
   Structure:
   - Acknowledge you've reached out several times with no response (no guilt-tripping)
   - Offer two options: (A) "If [PAIN POINT] isn't a priority right now, totally understand — just reply 'pass' and I'll stop emailing" or (B) "If timing is just off, let me know when to check back and I'll set a reminder"
   - One final value statement: "Either way, we've helped [SIMILAR COMPANY] [SPECIFIC RESULT], and the door's always open."
   - Close: "No hard feelings either way. — [FIRST NAME]"

3. WHY THIS WORKS: Include a brief note (2-3 sentences) explaining the psychology behind breakup emails that I can reference when my team asks why we send this.

The tone should be confident, respectful, and genuinely okay with either outcome. Never passive-aggressive. Never guilt-inducing. The prospect should feel respected, not pressured.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Breakup emails consistently get 2&ndash;3x the reply rate of other follow-up emails. The reason is simple: loss aversion. When someone realizes they are about to lose access to you (even if they were ignoring you), a part of their brain re-evaluates. Many prospects reply to breakup emails with &ldquo;sorry for the delay, let&rsquo;s chat next week&rdquo; &mdash; which is exactly what you want.
        </div>

        {/* CTA AFTER COLD OUTREACH SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want the complete email marketing system?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>150+ prompts. Welcome sequences, sales funnels, newsletters, cold outreach, retention campaigns, and A/B testing frameworks. Every prompt built on proven copywriting frameworks. One-time purchase, instant download.</p>
          <a href={EMAIL_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Email Marketing Kit
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: RETENTION & WIN-BACK (17-20)     */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Retention &amp; Win-Back Emails (Prompts 17&ndash;20)</h2>
        <p>Acquiring a new customer costs 5&ndash;7x more than retaining an existing one. Yet most businesses spend 90% of their email marketing effort on acquisition and almost nothing on retention. These prompts help you keep the customers you already have &mdash; and win back the ones you are losing.</p>

        {/* PROMPT 17 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>17. The Re-Engagement Campaign</h3>
        <p>Every email list has a segment of &ldquo;cold&rdquo; subscribers who stopped opening emails. They are dead weight that hurts your deliverability &mdash; or they are untapped revenue waiting to be reactivated. This prompt creates a re-engagement sequence to find out which is which.</p>
        <div style={promptBlockStyle}>
{`Create a 3-email re-engagement sequence for subscribers who have stopped engaging with my emails.

Context:
- My business: [BUSINESS DESCRIPTION]
- What my emails typically contain: [NEWSLETTER CONTENT, PROMOTIONS, EDUCATIONAL CONTENT, ETC.]
- Definition of "inactive" for my list: [CRITERIA, e.g., "hasn't opened an email in 90 days," "hasn't clicked in 60 days"]
- Total inactive subscribers: [APPROXIMATE NUMBER]
- What I want them to do: [GOAL, e.g., "start opening emails again," "click through to my site," "make a purchase"]

Write 3 emails:

EMAIL 1 — THE CHECK-IN (Day 0):
- Subject line options (5): Mix of curiosity, direct, and personal. Examples that work: "still interested in [TOPIC]?", "[FIRST NAME], it's been a while", "should I keep sending these?"
- Tone: Warm, not desperate. Like checking in with a friend you haven't heard from, not begging for attention.
- Acknowledge the gap: "I noticed you haven't opened my emails recently" — be upfront
- Remind them why they subscribed: "You joined because [ORIGINAL VALUE PROPOSITION]"
- Give them a reason to re-engage: share your BEST recent content, resource, or offer in one sentence
- CTA: "Click here to stay on the list" (this click confirms engagement and moves them out of the inactive segment)
- Alternative CTA: "If you'd prefer to unsubscribe, no hard feelings — click here"
- Giving them an unsubscribe option paradoxically increases engagement because it shows confidence

EMAIL 2 — THE VALUE BOMB (Day 3, only if they didn't engage with Email 1):
- Subject line options (5): Lead with pure value. "I made something for you" or "free [RESOURCE] — just for subscribers"
- Give them something genuinely valuable for free: [DESCRIBE THE VALUE, e.g., "exclusive discount," "free resource/template," "early access to new content"]
- Do not ask for anything in return except a click
- Keep it short: under 100 words
- CTA: Download/access the free resource (the click re-engages them)

EMAIL 3 — THE GOODBYE (Day 7, only if they didn't engage with Email 1 or 2):
- Subject line options (3): "goodbye?", "I'm cleaning up my list", "[FIRST NAME], last email from me"
- Be direct: "I'm going to remove you from my list unless you want to stay"
- Remind them ONE more time what they'll miss: your best content, exclusive offers, or community
- Two clear CTAs: "Keep me subscribed" (prominent) and "Unsubscribe" (secondary)
- Set a deadline: "If I don't hear from you in 48 hours, I'll remove you to keep my list healthy"
- Tone: Respectful and matter-of-fact. Not guilt-tripping.

POST-SEQUENCE:
- If they engaged with ANY email: move them back to the active segment
- If they didn't engage with any email: remove them from the list (include a note about why list hygiene matters for deliverability)

For each email: subject lines, preview text, full body, CTA text.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Do not be afraid to remove subscribers who do not engage. A smaller, engaged list will always outperform a large, dead one. Inactive subscribers hurt your sender reputation, which means your emails to ACTIVE subscribers are more likely to land in spam. Clean your list quarterly and your open rates will climb.
        </div>

        {/* PROMPT 18 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>18. The Churn Prevention Email</h3>
        <p>For subscription businesses, the moment a customer shows signs of disengagement is the moment you should act &mdash; not after they cancel. This prompt creates a proactive churn prevention email triggered by usage drop-off or engagement signals, designed to re-activate the customer before they even consider canceling.</p>
        <div style={promptBlockStyle}>
{`Write a churn prevention email for my subscription business.

Business context:
- Product: [YOUR SUBSCRIPTION PRODUCT/SERVICE]
- Monthly price: $[AMOUNT]
- Churn signal that triggers this email: [WHAT INDICATES RISK, e.g., "usage dropped by 50% in the last 30 days," "hasn't logged in for 2 weeks," "didn't use the key feature this month," "submitted a support ticket with a complaint"]
- Average customer lifespan: [X MONTHS]
- What makes customers stay: [TOP 3 REASONS CUSTOMERS GIVE FOR STAYING, e.g., "time savings," "the community," "customer support quality"]
- What makes customers leave: [TOP 3 REASONS CUSTOMERS GIVE FOR CHURNING, e.g., "not using it enough," "too expensive," "found an alternative"]

Write the email:

1. SUBJECT LINE: 5 options. Churn prevention subjects should feel personal, not automated:
   - "Can I help with anything?"
   - "[FIRST NAME], noticed something"
   - "quick question about your account"
   - "are you getting the most out of [PRODUCT]?"
   - "I have an idea for you"

2. EMAIL BODY (under 200 words):
   - Open with acknowledgment (NOT "we noticed you haven't logged in" — that feels surveillance-like). Instead: "I wanted to check in and make sure you're getting the most out of [PRODUCT]."
   - Remind them of a specific feature or use case they may not be using: "A lot of our customers in [THEIR INDUSTRY/ROLE] love [SPECIFIC FEATURE] for [SPECIFIC USE CASE]. Have you tried it?"
   - Share a quick win they can get in under 5 minutes: "Here's one thing you can do right now that most [PRODUCT] users find valuable: [SPECIFIC ACTION + LINK]"
   - Offer help: "If something's not working the way you expected, I'd love to hear about it. Reply to this email or [BOOK A CALL LINK]."
   - Sign from a real person (not "The [COMPANY] Team"). Use a CS manager or founder name.

3. FOLLOW-UP (if no response after 5 days):
   - Shorter email (under 100 words)
   - Offer a tangible incentive to re-engage: [INCENTIVE, e.g., "free month," "1-on-1 onboarding call," "feature upgrade," "extended trial of premium features"]
   - Create soft urgency: "This offer is available for the next 7 days"
   - CTA: Accept the offer or schedule a call

4. IF THEY STILL DON'T ENGAGE: Include a note about when to send a cancellation survey vs. when to let them be.

Tone: Genuinely helpful, never guilt-inducing. This should feel like a friend checking in, not a company trying to keep your credit card on file.`}
        </div>

        {/* PROMPT 19 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>19. The Customer Feedback Request Email</h3>
        <p>Customer feedback emails serve double duty: they provide you with actionable insights to improve your product AND they make customers feel heard, which increases loyalty. The problem is most feedback emails get ignored because they ask for too much. This prompt creates a feedback request that is so easy to respond to that people actually do.</p>
        <div style={promptBlockStyle}>
{`Write a customer feedback request email.

Context:
- My product/service: [PRODUCT/SERVICE NAME AND DESCRIPTION]
- What I want feedback on: [SPECIFIC TOPIC, e.g., "their overall experience," "a recent purchase," "a new feature I launched," "why they cancelled," "what they'd want me to build next"]
- When to send this: [TIMING, e.g., "7 days after purchase," "after they cancel," "quarterly to active customers," "after a support interaction"]
- How I'll use the feedback: [e.g., "improve the product," "create testimonials," "plan my roadmap," "train my team"]
- Incentive (optional): [e.g., "10% off next order," "entry into a gift card drawing," "free bonus resource," "no incentive — relying on goodwill"]

Write the email:

1. SUBJECT LINE: 5 options. Feedback subjects work best when they're short and make the reader feel important:
   - "quick favor? (takes 30 seconds)"
   - "your opinion matters, [FIRST NAME]"
   - "one question for you"
   - "help me make [PRODUCT] better"
   - "I need your honest feedback"

2. EMAIL BODY (under 150 words):
   - Opening: Thank them for being a customer. One genuine sentence, not a paragraph.
   - The ask: Be crystal clear about what you want and how long it takes: "I have [ONE QUESTION / A 2-MINUTE SURVEY / 3 QUICK QUESTIONS]. Your answer helps me [SPECIFIC IMPROVEMENT]."
   - Make it EASY: The absolute lowest friction path to providing feedback:
     - Option A: Reply directly to this email with your answer (best for open-ended)
     - Option B: Click a button (1-5 rating scale embedded in the email)
     - Option C: Link to a short survey (max 3-5 questions)
   - If offering incentive: Mention it after the ask, not before (it should feel like a thank-you, not a bribe)
   - Close: "Even a one-line reply helps. Thank you. — [YOUR NAME]"

3. THE QUESTION(S): Write the actual feedback questions I should ask. Make them specific and actionable:
   - Write 3 versions: a one-question version, a three-question version, and a five-question survey version
   - Each question should give me information I can actually act on (not "how was your experience?" but "what's the ONE thing you'd change about [PRODUCT]?")

4. FOLLOW-UP (for non-responders, 5 days later):
   - Ultra-short (under 50 words)
   - "I know you're busy. One sentence is all I need: [RESTATE THE KEY QUESTION]. Reply to this email. — [YOUR NAME]"

Tone: Genuine and respectful of their time. Nobody owes you feedback — make it feel like a conversation, not a homework assignment.`}
        </div>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> The single highest-ROI feedback question you can ask is: &ldquo;What almost stopped you from buying?&rdquo; The answers to this question tell you exactly what objections to address in your sales copy, your FAQ, and your checkout flow. Ask it 7 days after purchase when the buying decision is still fresh.
        </div>

        {/* PROMPT 20 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>20. The Loyalty Reward and Anniversary Email</h3>
        <p>Loyalty reward emails celebrate your relationship with the customer and give them a reason to buy again. They have some of the highest open rates and click-through rates of any email type because they are positive, personal, and unexpected. This prompt creates a loyalty email that strengthens the relationship AND drives revenue.</p>
        <div style={promptBlockStyle}>
{`Write a loyalty reward / anniversary email for an existing customer.

Context:
- My business: [BUSINESS DESCRIPTION]
- The occasion: [MILESTONE, e.g., "1-year anniversary as a customer," "they've made their 5th purchase," "they've been a subscriber for 6 months," "their birthday," "our company anniversary"]
- The customer segment: [WHO, e.g., "all customers with 1+ year tenure," "top 10% by spend," "customers who referred a friend"]
- The reward I'm offering: [SPECIFIC REWARD, e.g., "exclusive 25% discount," "free product/upgrade," "early access to new collection," "free month of premium," "loyalty points bonus"]
- My product catalog: [BRIEFLY DESCRIBE WHAT I SELL, so the email can reference relevant products]

Write the email:

1. SUBJECT LINE: 5 options. Loyalty/anniversary subjects should feel celebratory and personal:
   - "happy anniversary, [FIRST NAME]! 🎉" (include emoji — it's a celebration)
   - "a thank you gift from us"
   - "[FIRST NAME], 1 year together"
   - "you've been with us for [X] — this is for you"
   - "something special for our best customers"

2. EMAIL BODY (200-300 words):
   - Opening: Celebrate the milestone genuinely. Reference specific data if possible: "You joined [COMPANY] on [DATE]. In the past [TIMEFRAME], you've [SPECIFIC ACCOMPLISHMENT OR USAGE STAT, e.g., 'completed 47 workouts,' 'created 23 projects,' 'ordered 8 times']."
   - Gratitude: Genuine thank-you. Not corporate, not sappy. "We wouldn't be here without customers like you. That's not a platitude — it's literally true."
   - The reward: Present it as a gift, not a promotion. "To say thank you, here's [SPECIFIC REWARD]."
   - How to claim: Crystal clear instructions. One CTA button: "Claim Your [REWARD]"
   - Bonus touch: Ask them to share a memory, review, or story: "Hit reply and tell me your favorite [PRODUCT/MOMENT/FEATURE] from the past year. I read every one."
   - Expiration: Give the reward a reasonable deadline (14-30 days, not 48 hours — this is a gift, not a pressure tactic)

3. PERSONALIZATION TOKENS: List every dynamic variable this email should use:
   - [FIRST NAME]
   - [ANNIVERSARY DATE]
   - [TENURE DURATION]
   - [PURCHASE COUNT OR USAGE STATS]
   - [REWARD CODE / LINK]
   - [EXPIRATION DATE]

4. POST-EMAIL: If they claim the reward, what should the next touchpoint be? (e.g., "send a follow-up thanking them for the order and previewing what's coming next")

Tone: Warm, celebratory, and genuine. This email should make the customer smile.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* HOW TO CUSTOMIZE THESE PROMPTS              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>How to Get the Best Results from These Prompts</h2>

        <p>Every prompt in this guide works out of the box. But if you want to go from &ldquo;good&rdquo; to &ldquo;incredible,&rdquo; here are the techniques that separate average AI email marketers from great ones:</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Always Include Your Brand Voice</h3>
        <p>Add a line like: &ldquo;Write in a [casual/professional/bold/empathetic] tone. Use [contractions/short sentences/humor/data]. Avoid [corporate jargon/emojis/exclamation marks].&rdquo; Better yet, paste a sample of an email you wrote that performed well and say &ldquo;match this voice.&rdquo; The AI will mirror your style.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Feed It Your Data</h3>
        <p>The more specific your inputs, the more specific the outputs. Instead of &ldquo;my audience is marketers,&rdquo; say &ldquo;my audience is B2B SaaS marketing managers at companies with 50&ndash;200 employees who are frustrated with their current email platform&rsquo;s deliverability.&rdquo; Specificity is the single biggest lever for AI output quality.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Iterate, Do Not Settle</h3>
        <p>Your first output is a draft, not a final product. After generating an email, say: &ldquo;Make the opening hook more surprising,&rdquo; or &ldquo;The CTA is weak &mdash; rewrite it with more urgency,&rdquo; or &ldquo;This sounds too formal &mdash; make it sound like a text message from a friend.&rdquo; Two rounds of iteration typically gets you to 90% quality.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Test Everything</h3>
        <p>AI makes A/B testing easy because generating variations is free. For every email, generate 3&ndash;5 subject lines and test them. Generate 2 versions of the body copy with different frameworks (PAS vs. AIDA) and test them. Over time, you will learn which frameworks and styles work best for YOUR specific audience, and you can bake those learnings back into your prompts.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Build a Prompt Library</h3>
        <p>After you find prompts that work, save them with your brand voice, audience details, and product information already filled in. This turns a 10-minute prompting session into a 2-minute one. The <Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>AI Email Marketing Kit</Link> does this for you with 150+ pre-built, framework-backed prompts organized by email type.</p>

        <p>For a deeper dive into writing effective prompts, read our <Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>Complete Prompt Engineering Guide for 2026</Link>.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FREE VS PREMIUM                             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Free Prompts vs. the Full Email Marketing Kit</h2>

        <p>The 20 prompts in this guide are genuinely useful. Use them today. They will make your email marketing faster, more structured, and more effective.</p>

        <p>But if you are serious about building an email marketing system that runs like a machine, the <Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>AI Email Marketing Kit</Link> goes much deeper:</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px', marginBottom: '24px' }}>
          <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px' }}>This Free Guide</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#6B7280' }}>
              <li>20 prompts</li>
              <li>5 categories</li>
              <li>General purpose</li>
              <li>Great starting point</li>
            </ul>
          </div>
          <div style={{ background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px', color: '#3B5FFF' }}>Email Marketing Kit</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#374151' }}>
              <li><strong>150+ prompts</strong></li>
              <li>12 categories with sub-sections</li>
              <li>Industry-specific variations</li>
              <li>A/B testing frameworks built in</li>
              <li>Complete automation sequences</li>
              <li>Subject line swipe file (500+)</li>
              <li>Free updates for life</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a href={EMAIL_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Email Marketing Kit
          </a>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        </div>

        <div style={{ background: '#111827', color: '#fff', borderRadius: '8px', padding: '24px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 8px', color: '#93B4FF' }}>BEST VALUE</p>
          <p style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 8px' }}>All 13 AI Kits &mdash; $97</p>
          <p style={{ fontSize: '14px', color: '#9CA3AF', margin: '0 0 16px' }}>Email Marketing Kit + 12 more specialized kits. $400+ value. Plus every future kit free.</p>
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

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can AI write effective marketing emails?</h3>
        <p>Yes, when you give it the right prompts. The difference between a useless AI email and a high-converting one is the framework you provide. Generic prompts produce generic copy. The prompts in this guide include specific copywriting frameworks &mdash; PAS, AIDA, curiosity gaps, social proof stacking &mdash; that consistently produce emails with above-average open and click-through rates. You still need to provide your brand voice, product details, and audience specifics, but AI handles the structure, psychology, and first-draft copywriting.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What is the best AI tool for email marketing in 2026?</h3>
        <p>ChatGPT (GPT-4o) and Claude are both excellent for writing marketing emails. ChatGPT handles structured sequences and A/B variations well. Claude produces more natural, conversational copy. For email-specific tools, Jasper and Copy.ai have built-in templates, but general-purpose AI with good prompts gives you more control and flexibility. Every prompt in this guide works with any AI tool. Use a paid tier to avoid usage limits during campaign creation sprints.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How do I avoid my AI-written emails sounding robotic?</h3>
        <p>Include your brand voice guidelines directly in the prompt: specify tone, reading level, and whether you use contractions, humor, or emojis. Paste examples of emails you have written that performed well and ask AI to match that style. Always include a &ldquo;write like a real person&rdquo; instruction. Then edit the output &mdash; use AI for the first draft and add your personal touches. Read it aloud. If it sounds like something you would never say, rewrite that section.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How many emails should be in a welcome sequence?</h3>
        <p>A strong welcome sequence is 5&ndash;7 emails sent over 10&ndash;14 days. The structure: deliver the lead magnet (immediate), share your origin story (Day 1&ndash;2), provide a quick win (Day 3&ndash;4), share social proof (Day 5&ndash;7), introduce your product (Day 7&ndash;9), handle objections (Day 10&ndash;12), and make your best offer with urgency (Day 13&ndash;14). Prompt #1 in this guide creates all 7 emails in one session, with each building on the last to move subscribers from awareness to purchase.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What email metrics should I track to measure AI prompt effectiveness?</h3>
        <p>Five metrics matter: (1) Open rate &mdash; 20&ndash;25% benchmark, driven by subject lines. (2) Click-through rate &mdash; 2&ndash;5% benchmark, driven by body copy and CTA placement. (3) Conversion rate &mdash; percentage of clickers who take the desired action. (4) Unsubscribe rate &mdash; keep below 0.5% per send. (5) Revenue per email &mdash; the ultimate metric. When A/B testing AI-generated variations, send to at least 1,000 subscribers per variant for statistically significant results. Test one variable at a time.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If you found these email marketing prompts useful, check out these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>The Complete Prompt Engineering Guide for 2026</Link> &mdash; Master the skill behind every great AI output</li>
          <li><Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: '#3B5FFF' }}>25 ChatGPT Tips and Tricks Most People Don&rsquo;t Know</Link> &mdash; Get more from every ChatGPT session</li>
          <li><Link href="/blog/ai-resume-prompts-chatgpt-2026" style={{ color: '#3B5FFF' }}>15 ChatGPT Prompts to Write a Perfect Resume in 2026</Link> &mdash; AI prompts for job seekers and career growth</li>
          <li><Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>AI Email Marketing Kit</Link> &mdash; The full 150+ prompt system for email marketers</li>
          <li><Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>Free AI Prompt Generator</Link> &mdash; Build custom prompts for any use case</li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FINAL CTA */}
        <div style={{ marginTop: '48px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to transform your email marketing with AI?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>Before you send your next campaign, <Link href="/email-subject-line-tester" style={{ color: '#3B5FFF', fontWeight: 600 }}>test your subject line for free</Link> with our Email Subject Line Tester. Then level up: the <strong>AI Email Marketing Kit</strong> includes 150+ prompts for welcome sequences, sales campaigns, newsletters, cold outreach, retention flows, and A/B testing frameworks. Every prompt uses proven copywriting frameworks tested with real campaigns. One-time purchase.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={EMAIL_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Email Marketing Kit
            </a>
            <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Email Marketing Kit plus 12 more specialized kits &mdash; best value if you want everything.</p>
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
