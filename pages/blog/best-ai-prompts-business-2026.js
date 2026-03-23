import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BestAIPromptsBusiness2026() {
  const title = '50 AI Prompts That Are Actually Making People Money in 2026';
  const description = 'The best AI prompts for business in 2026. Tested prompts for sales emails, social media, content creation, operations, and productivity that save 15+ hours per week.';
  const url = 'https://www.midastools.co/blog/best-ai-prompts-business-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="best AI prompts 2026, AI prompts for business, ChatGPT prompts, Claude prompts, AI prompts that make money, business AI prompts, prompt engineering" />
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
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#1a1a1a', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          50 AI Prompts That Are Actually Making People Money in 2026
        </h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '40px' }}>Mar 23, 2026 &middot; Rey Midas</p>

        <p>There are two kinds of people using AI right now.</p>
        <p>The first types &ldquo;write me a blog post about marketing&rdquo; and gets something that sounds like it was written by a Wikipedia editor on Ambien. They conclude AI is overhyped and go back to doing everything manually.</p>
        <p>The second types a structured, specific prompt with context, constraints, and a clear output format &mdash; and gets a first draft that is <strong>80% ready to publish</strong> in under 90 seconds.</p>
        <p>The difference is not talent. It is not some magical &ldquo;prompt engineering&rdquo; certification. It is knowing <strong>what to ask for and how to ask for it</strong>.</p>
        <p>Here are 50 prompts across 10 categories that real businesses are using to save time and make money in 2026. Every prompt uses a fill-in-the-bracket format &mdash; just replace the [BRACKETED VARIABLES] with your details.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Sales Emails That Actually Get Replies</h2>

        <p><strong>Prompt #1: Cold outreach email</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a cold email from [YOUR NAME] at [YOUR COMPANY] to [PROSPECT ROLE] at [PROSPECT COMPANY].

Context: They [PAIN POINT YOU'VE OBSERVED]. We help [TYPE OF COMPANY] achieve [SPECIFIC OUTCOME] — for example, [CLIENT NAME] saw [SPECIFIC RESULT] in [TIMEFRAME].

Constraints: Under 120 words. No jargon. One clear CTA. Subject line under 8 words. Tone: confident but not salesy.`}
        </div>

        <p><strong>Prompt #2: Follow-up after no response</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a follow-up email to [PROSPECT NAME] who didn't reply to my initial outreach about [TOPIC]. This is follow-up #[NUMBER], sent [DAYS] days after the last email.

Rules: Don't say "just following up" or "circling back." Add one new piece of value — a relevant stat, case study, or insight. Keep it under 80 words. End with a low-friction CTA (yes/no question, not a calendar link).`}
        </div>

        <p><strong>Prompt #3: Re-engagement email for cold leads</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a re-engagement email to [LEAD NAME] who showed interest in [PRODUCT/SERVICE] [TIMEFRAME] ago but went silent.

Open with something that has changed since we last spoke — a new feature, a relevant industry shift, or a result from a similar client. No guilt-tripping. Tone: helpful, not desperate. Under 100 words. One clear next step.`}
        </div>

        <p><strong>Prompt #4: Post-meeting follow-up</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a follow-up email after a sales call with [PROSPECT NAME] about [TOPIC].

Key points discussed: [MEETING NOTES]. Next steps we agreed on: [ACTION ITEMS]. Send within 1 hour of the call. Tone: professional, energized. Include a bullet-point summary and one clear CTA for the next step.`}
        </div>

        <p><strong>Prompt #5: Testimonial request</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write an email to [CLIENT NAME] requesting a testimonial about [PROJECT/RESULT].

Make it easy: include 3 specific questions they can answer instead of asking for a "testimonial." Questions should prompt them to mention the problem, the solution, and the result. Offer to draft it for them if they prefer. Warm, appreciative tone. Under 120 words.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Social Media Content That Grows Your Audience</h2>

        <p><strong>Prompt #6: LinkedIn post from a lesson learned</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a LinkedIn post about a lesson I learned: [LESSON].

Context: [WHAT HAPPENED]. Format: Hook line (pattern interrupt), 2-3 short paragraphs, takeaway. No hashtags in the body. Add 3 hashtags at the end. Tone: conversational, honest, not preachy. Under 200 words.`}
        </div>

        <p><strong>Prompt #7: Twitter/X thread from one idea</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a 7-tweet thread about [TOPIC].

Tweet 1: Hook — bold claim or surprising stat that makes people stop scrolling. Tweets 2-6: One actionable point per tweet with a specific example. Tweet 7: Summary + CTA to follow/bookmark. Each tweet under 280 characters. No fluff, no "Let's dive in."`}
        </div>

        <p><strong>Prompt #8: Instagram carousel outline</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a 10-slide Instagram carousel about [TOPIC] for [AUDIENCE].

Slide 1: Bold headline that creates curiosity (no more than 8 words). Slides 2-9: One point per slide, max 25 words each. Use numbers, contrasts, or surprising facts. Slide 10: CTA — follow, save, or comment. Include a caption (under 150 words) with 5 relevant hashtags.`}
        </div>

        <p><strong>Prompt #9: Content calendar (30 days)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a 30-day social media content calendar for [BUSINESS TYPE] targeting [AUDIENCE].

Platform: [PLATFORM]. Posting frequency: [X] times per week. Content pillars: [PILLAR 1], [PILLAR 2], [PILLAR 3]. For each post: date, content type, topic, hook line, and CTA. Mix educational (40%), entertaining (30%), and promotional (30%).`}
        </div>

        <p><strong>Prompt #10: Viral hook generator</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Generate 15 scroll-stopping hooks for social media posts about [TOPIC].

Types to include: Contrarian take (3), Surprising stat (3), Personal story opener (3), "Most people" pattern (3), Question hook (3). Each hook should be under 15 words and make someone stop scrolling to read more.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Content Creation That Scales</h2>

        <p><strong>Prompt #11: SEO blog post outline</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a detailed outline for a 2,000-word blog post targeting the keyword "[TARGET KEYWORD]."

Include: H1 title (under 60 chars), meta description (under 155 chars), H2 sections with H3 subsections, word count per section, internal link opportunities, and a FAQ section with 4 questions.`}
        </div>

        <p><strong>Prompt #12: Repurpose blog post into 5 formats</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Take this blog post and repurpose it into 5 formats:

[PASTE BLOG POST]

Create: 1) Twitter thread (7 tweets), 2) LinkedIn post (under 200 words), 3) Email newsletter intro (under 150 words with link CTA), 4) YouTube video script outline (5 min), 5) Instagram carousel (8 slides). Each format should stand alone — adapt the message for each platform's audience.`}
        </div>

        <p><strong>Prompt #13: Newsletter that people actually open</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a weekly newsletter edition about [TOPIC] for [AUDIENCE].

Structure: Subject line (under 50 chars, curiosity-driven), opener (personal anecdote, 2 sentences), main insight (3 paragraphs), one actionable takeaway, resource of the week, CTA. Tone: like a smart friend sharing something they just learned. Under 500 words.`}
        </div>

        <p><strong>Prompt #14: YouTube video script</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a script for a [LENGTH]-minute YouTube video about [TOPIC].

Structure: Hook (first 10 seconds — bold claim or question), intro (establish credibility, 30 seconds), main content ([NUMBER] key points with examples), CTA (subscribe + related video), outro. Include B-roll suggestions in brackets. Write for spoken delivery — short sentences, conversational.`}
        </div>

        <p><strong>Prompt #15: Headline A/B testing</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Generate 10 headline variations for this content: "[CONTENT TOPIC]"

Include: 2 "How to" headlines, 2 numbered list headlines, 2 question headlines, 2 contrarian headlines, 2 benefit-driven headlines. Each under 70 characters. Rank them by predicted click-through rate and explain your reasoning for the top 3.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Copywriting That Converts</h2>

        <p><strong>Prompt #16: Product description</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a product description for [PRODUCT NAME].

Target customer: [AUDIENCE]. Key features: [FEATURE 1], [FEATURE 2], [FEATURE 3]. Primary benefit: [MAIN BENEFIT]. Format: Headline (under 10 words), 2-sentence hook, 3 bullet points (feature → benefit), social proof line, CTA. Under 150 words. No superlatives — show, don't tell.`}
        </div>

        <p><strong>Prompt #17: Landing page hero section</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a landing page hero section for [PRODUCT/SERVICE].

Target audience: [AUDIENCE]. Main pain point: [PAIN POINT]. Key transformation: [BEFORE STATE] → [AFTER STATE]. Include: H1 headline (under 10 words), sub-headline (1 sentence), 3 bullet points, primary CTA text, secondary CTA text.`}
        </div>

        <p><strong>Prompt #18: Email sequence (3-part nurture)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a 3-email nurture sequence for [PRODUCT/SERVICE] targeting [AUDIENCE].

Email 1 (Day 0): Value-first — teach something useful. Soft mention of product. Email 2 (Day 3): Case study/social proof — show real results. Email 3 (Day 7): Direct offer — clear benefits, objection handling, CTA. Each email: subject line + body under 200 words. Tone: helpful, not pushy.`}
        </div>

        <p><strong>Prompt #19: Ad copy (Facebook/Instagram)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write 3 variations of Facebook/Instagram ad copy for [PRODUCT/SERVICE].

Target: [AUDIENCE]. Goal: [CONVERSION ACTION]. Variation 1: Problem-agitate-solve. Variation 2: Social proof led. Variation 3: Direct offer. Each: primary text (under 125 chars), headline (under 40 chars), description (under 30 chars), CTA button text.`}
        </div>

        <p><strong>Prompt #20: Sales page long-form copy</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a long-form sales page for [PRODUCT] at [PRICE].

Audience: [WHO]. Problem: [PAIN POINT]. Structure: Headline, opening story, problem amplification, solution introduction, feature-benefit breakdown (5 items), social proof section, FAQ (4 questions), risk reversal (guarantee), final CTA. Under 1,500 words.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Business Operations Made Simple</h2>

        <p><strong>Prompt #21: Standard operating procedure (SOP)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a standard operating procedure for [PROCESS NAME].

Who performs this: [ROLE]. How often: [FREQUENCY]. Write step-by-step instructions that a new hire could follow on day one. Include: purpose, prerequisites, numbered steps with expected outcomes, common mistakes, and escalation path.`}
        </div>

        <p><strong>Prompt #22: Meeting agenda that respects time</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a [DURATION]-minute meeting agenda for [MEETING PURPOSE].

Attendees: [ROLES]. Decision needed: [DECISION]. Format: time allocation per topic, discussion lead per item, decision/action item slots. Start with the hardest decision. End 5 minutes early for action item recap. No "updates" sections — those belong in async docs.`}
        </div>

        <p><strong>Prompt #23: Job posting that attracts A-players</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a job posting for [ROLE] at [COMPANY].

What the role actually does: [KEY RESPONSIBILITIES]. What success looks like in 90 days: [OUTCOMES]. Must-haves (max 5): [REQUIREMENTS]. Compensation: [RANGE]. Why someone would want this job: [UNIQUE SELLING POINTS]. Tone: direct, authentic, no corporate fluff.`}
        </div>

        <p><strong>Prompt #24: Customer service response templates</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create 5 customer service response templates for [BUSINESS TYPE]:

1. Complaint about [COMMON ISSUE]
2. Request for refund/exchange
3. Shipping delay notification
4. Positive review thank-you
5. Feature request acknowledgment

Each: empathetic opening, clear resolution, next steps, warm close. Include [BRACKET VARIABLES] for personalization. Under 100 words each.`}
        </div>

        <p><strong>Prompt #25: Weekly team update</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a weekly team update email based on these notes:

Completed: [DONE ITEMS]. In progress: [WIP ITEMS]. Blocked: [BLOCKERS]. Next week: [PRIORITIES].

Format: 4 sections with bullet points. Lead with wins. Flag blockers with who needs to act. Under 200 words. Tone: clear, upbeat without being fake, action-oriented.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Freelancer Essentials</h2>

        <p><strong>Prompt #26: Project proposal</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a project proposal for [CLIENT NAME] for [PROJECT TYPE].

Scope: [DELIVERABLES]. Timeline: [DURATION]. Investment: [PRICE]. Structure: Executive summary, problem statement, proposed solution, deliverables list, timeline with milestones, investment breakdown, next steps. Under 400 words. Don't oversell — let the scope speak.`}
        </div>

        <p><strong>Prompt #27: Scope creep response</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a professional response to a client who just requested [NEW REQUEST] that falls outside our agreed scope of [ORIGINAL SCOPE].

Acknowledge positively. Reference the original agreement. Present two options: A) Add to scope with [ADDITIONAL COST] and [TIMELINE IMPACT], B) Defer to Phase 2. Tone: collaborative, not confrontational. Frame it as protecting their timeline and budget.`}
        </div>

        <p><strong>Prompt #28: Rate increase email</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write an email to [CLIENT NAME] announcing a rate increase from [OLD RATE] to [NEW RATE], effective [DATE].

Lead with value delivered — reference specific results: [RESULTS]. Explain briefly (increased expertise, market rates). Give 30 days notice. Offer to discuss. Tone: grateful, professional, firm. Under 150 words.`}
        </div>

        <p><strong>Prompt #29: Client onboarding welcome</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a welcome email for new client [CLIENT NAME] starting [PROJECT TYPE].

Include: Warm welcome, recap of what we're building, timeline overview, communication expectations, what I need from them to get started (max 3 items), link to [TOOL/PORTAL]. Tone: professional, excited, organized. Under 200 words.`}
        </div>

        <p><strong>Prompt #30: Late payment reminder sequence</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a 3-email payment reminder sequence for invoice #[NUMBER] of [AMOUNT] due [DATE]:

Email 1 (due date): Friendly reminder, assume they forgot. Email 2 (7 days late): Firmer, reference terms, offer payment plan. Email 3 (14 days late): Final notice, mention late fee policy. Each: professional, not passive-aggressive. Under 80 words each.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Personal Branding &amp; Career</h2>

        <p><strong>Prompt #31: LinkedIn profile optimization</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Rewrite my LinkedIn headline and About section.

Current role: [ROLE]. I help [AUDIENCE] achieve [OUTCOME]. Key achievements: [TOP 3]. Headline: under 120 characters, include keywords [KEYWORDS]. About: first-person, conversational, 3 paragraphs — what I do, why, what I've achieved. End with CTA. Under 300 words.`}
        </div>

        <p><strong>Prompt #32: Elevator pitch</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a 30-second elevator pitch for [YOUR NAME], a [ROLE] helping [AUDIENCE] with [SERVICE/PRODUCT].

Structure: Hook (surprising fact or question), what I do (one sentence), proof (one result), ask (CTA). Must sound natural when spoken aloud. Write 3 variations: casual networking, formal conference, investor meeting.`}
        </div>

        <p><strong>Prompt #33: Thought leadership article</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a thought leadership article about [TOPIC] in [INDUSTRY].

My contrarian take: [YOUR POSITION]. Evidence: [DATA/EXPERIENCE]. Who disagrees and why: [COUNTERARGUMENT]. Format: Bold opening, context, argument with evidence, counterargument addressed, actionable conclusion. Under 800 words. Tone: authoritative but accessible.`}
        </div>

        <p><strong>Prompt #34: Speaker bio (3 versions)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a speaker bio for [NAME] presenting at [EVENT TYPE].

Role: [TITLE] at [COMPANY]. Topic: [TALK TOPIC]. Key credentials: [TOP 3]. Write 3 versions: 1) Long (150 words) for event website, 2) Medium (75 words) for printed program, 3) Short (25 words) for social media. Third person. No "passionate about" — show expertise through specifics.`}
        </div>

        <p><strong>Prompt #35: Portfolio case study</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a portfolio case study for [PROJECT NAME] done for [CLIENT].

Challenge: [PROBLEM]. Solution: [WHAT I DID]. Results: [METRICS]. Structure: One-sentence summary, the challenge, my approach (3-4 steps), results (specific numbers), key takeaway. Under 400 words. Focus on the transformation, not the process.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Productivity &amp; Decision Making</h2>

        <p><strong>Prompt #36: Decision framework</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Help me decide between [OPTION A] and [OPTION B].

Context: [SITUATION]. My goals: [GOALS]. Constraints: [CONSTRAINTS]. Create a comparison matrix: cost, time to implement, risk level, potential upside, reversibility. Score each 1-5. Give your recommendation with reasoning. Be direct — I need a decision, not "it depends."`}
        </div>

        <p><strong>Prompt #37: Weekly planning session</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Help me plan my week.

Top 3 quarterly goals: [GOALS]. Last week's wins: [WINS]. Unfinished: [CARRYOVER]. Meetings: [MEETINGS]. Available deep work hours: [HOURS].

Prioritize using the Eisenhower matrix. Assign tasks to specific days. Flag anything to delegate or eliminate. Be ruthless — if it doesn't move the top 3 forward, challenge why it's on the list.`}
        </div>

        <p><strong>Prompt #38: Research synthesis</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Analyze and synthesize these sources about [TOPIC]:

[PASTE NOTES/DATA]

Create: 1) Executive summary (3 sentences), 2) Key findings (5 bullet points), 3) Contradictions or gaps, 4) Actionable recommendations (3 items), 5) Questions that still need answering. Prioritize actionable over interesting.`}
        </div>

        <p><strong>Prompt #39: Process audit</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Audit this process for inefficiencies: [DESCRIBE CURRENT PROCESS].

Time it takes: [TIME]. People involved: [ROLES]. Identify: bottlenecks, redundant steps, automation opportunities, handoff problems, single points of failure. Suggest a streamlined version with estimated time savings. Be specific about what to cut, automate, or restructure.`}
        </div>

        <p><strong>Prompt #40: Email inbox zero system</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create an email management system for someone who receives [NUMBER] emails per day.

My role: [ROLE]. Types of emails: [CATEGORIES]. Create: filter rules, template responses for common types, a daily email routine (when to check, how long), and criteria for response vs. archive vs. delegate. Goal: under 30 minutes per day on email.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Real Estate Professionals</h2>

        <p><strong>Prompt #41: Listing description</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a property listing description for [ADDRESS].

Property: [BEDS] bed, [BATHS] bath, [SQFT] sqft. Price: [PRICE]. Key features: [TOP 5 FEATURES]. Neighborhood: [AREA DETAILS]. Target buyer: [BUYER PROFILE]. Open with a compelling hook, not the address. Highlight lifestyle, not just specs. Under 200 words.`}
        </div>

        <p><strong>Prompt #42: Lead response (under 2 minutes)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write an instant response to a lead who inquired about [PROPERTY/SERVICE].

Lead name: [NAME]. Source: [WHERE THEY FOUND YOU]. Their message: [INQUIRY]. Brief, helpful, personal. Answer their question directly. Add one piece of value they didn't ask for. End with a low-friction next step. Under 80 words.`}
        </div>

        <p><strong>Prompt #43: Market analysis summary</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a market analysis summary for [NEIGHBORHOOD] to share with clients.

Data: [PASTE MARKET DATA]. Format: 3-paragraph summary a client can understand, 5 key stats in a table, and a "what this means for you" section for both buyers and sellers. Under 300 words.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Small Business Operations</h2>

        <p><strong>Prompt #44: Social media content batch</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a week of social media content for [BUSINESS NAME], a [BUSINESS TYPE] in [LOCATION].

Post 1x per day. Mix: Monday (tip), Tuesday (behind the scenes), Wednesday (customer spotlight), Thursday (industry news), Friday (weekend CTA). Each post: caption + image suggestion + 3 hashtags. Tone: [BRAND VOICE].`}
        </div>

        <p><strong>Prompt #45: Email marketing campaign</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a 4-email promotional campaign for [PRODUCT/EVENT].

Audience: [SEGMENT]. Goal: [CONVERSION ACTION]. Email 1: Announcement + early access. Email 2: Value + social proof. Email 3: Urgency + objection handling. Email 4: Last chance + bonus. Each: subject line, preview text, body under 150 words, CTA button text.`}
        </div>

        <p><strong>Prompt #46: Customer feedback analysis</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Analyze this customer feedback and extract actionable insights:

[PASTE REVIEWS/FEEDBACK]

Categorize by: product quality, customer service, pricing, delivery. For each: sentiment score, top 3 themes, illustrative quotes, one recommended action. Summarize the single most important thing to fix first and why.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Strategy &amp; Analysis</h2>

        <p><strong>Prompt #47: Competitor analysis</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Analyze my competitor [COMPETITOR NAME] in [INDUSTRY].

Their website: [URL]. What I know: [NOTES]. Analyze: positioning, pricing, target audience, content strategy, strengths, weaknesses. Create a comparison table across [5 CRITERIA]. Identify 3 gaps they're not covering. Be objective — tell me where they're genuinely better too.`}
        </div>

        <p><strong>Prompt #48: Pricing strategy</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Help me price [PRODUCT/SERVICE].

Current price: [PRICE]. Competitors: [RANGE]. My costs: [COSTS]. Value delivered: [OUTCOMES]. Analyze 3 strategies: cost-plus, value-based, competitive. Recommend one with reasoning. Include how to anchor the price and address the #1 pricing objection my audience will have.`}
        </div>

        <p><strong>Prompt #49: Business model canvas</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a lean business model canvas for [BUSINESS IDEA].

Target customer: [AUDIENCE]. Problem: [PAIN POINT]. Solution: [SOLUTION]. Fill in all 9 blocks with 2-3 bullet points each. Then identify the 3 riskiest assumptions and how to test each one in under a week.`}
        </div>

        <p><strong>Prompt #50: Quarterly business review</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a quarterly business review from these numbers:

Revenue: [Q REVENUE] (vs. [LAST Q]). Customers: [COUNT]. Churn: [%]. Top channel: [CHANNEL]. Biggest win: [WIN]. Biggest miss: [MISS].

Format: Executive summary, KPI table, what worked (3), what didn't (3), next quarter priorities (3, ranked by impact). Be honest about misses — I need clarity, not cheerleading.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Why These Prompts Work</h2>
        <p>Every prompt above shares four things:</p>
        <ol>
          <li><strong>Specific context</strong> &mdash; the AI knows who you are, who it is writing for, and why.</li>
          <li><strong>Clear constraints</strong> &mdash; word limits, tone, format. Constraints produce better output than open-ended requests.</li>
          <li><strong>Output structure</strong> &mdash; you tell the AI exactly what format you want. No surprises.</li>
          <li><strong>Quality guardrails</strong> &mdash; rules like &ldquo;no jargon,&rdquo; &ldquo;no superlatives,&rdquo; &ldquo;be direct.&rdquo; These prevent the bland, corporate AI voice.</li>
        </ol>
        <p>The people making real money with AI in 2026 are not prompt engineering geniuses. They are professionals who have <strong>a library of tested prompts</strong> for every task they do repeatedly. They spend 2 minutes customizing a prompt instead of 30 minutes writing from scratch.</p>
        <p>That is the entire game.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <div style={{ marginTop: '48px', padding: '32px', background: '#fffbf0', border: '1px solid #f0d060', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Want all 200+ prompts in one download?</h3>
          <p style={{ margin: '0 0 16px', color: '#555', fontSize: '15px' }}>The <strong>AI Prompt Mega Pack</strong> includes every prompt in this article plus 150 more &mdash; organized by category, ready to customize, works with ChatGPT, Claude, Gemini, and any LLM. $29 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Link href="/ai-prompt-mega-pack" style={{ display: 'inline-block', background: '#b8860b', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Mega Pack &mdash; $29
            </Link>
            <Link href="/bundle" style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Full Bundle &mdash; $97
            </Link>
          </div>
          <p style={{ margin: '12px 0 0', color: '#888', fontSize: '13px' }}>The Bundle includes the Mega Pack plus 5 niche industry kits &mdash; best value for professionals who want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#888', fontSize: '14px' }}>
          <em>Rey Midas builds <a href="https://www.midastools.co" style={{ color: '#b8860b' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#b8860b' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}
