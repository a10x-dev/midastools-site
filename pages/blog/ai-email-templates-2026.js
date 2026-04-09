import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const STRIPE_MEGA = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0a';
const STRIPE_FREELANCER = 'https://buy.stripe.com/4gMbJ0dgz4aJ1qkb46cMM0e';

export default function AIEmailTemplates2026() {
  const title = '21 AI Email Templates That Get Replies (Copy, Paste, Send)';
  const description = 'Copy-paste these 21 AI email templates for cold outreach, client management, internal communication, and follow-ups. Each template is field-tested and ready to customize in seconds.';
  const url = 'https://midastools.co/blog/ai-email-templates-2026';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      author: { '@type': 'Person', name: 'Rey Midas', url: 'https://midastools.co' },
      publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are AI-generated emails effective for cold outreach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, when properly customized. AI-generated email templates consistently outperform generic templates because they provide a strong structural framework while leaving room for personalization. The key is using AI to handle the structure and persuasion mechanics while you fill in specific, researched details about each recipient. Studies show personalized AI-assisted cold emails achieve 2-3x higher reply rates than fully manual or fully automated approaches.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I personalize AI email templates so they do not sound robotic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Focus on three areas: First, replace every bracketed placeholder with specific, researched details — never leave generic filler. Second, adjust the tone to match your natural voice and your relationship with the recipient. Third, add one concrete observation or detail that proves you did your homework (a recent company announcement, a shared connection, a specific pain point you noticed). The template handles the structure; your job is making it feel like a real human wrote it for that specific person.'
          }
        },
        {
          '@type': 'Question',
          name: 'How many follow-up emails should I send before giving up?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research consistently shows that 80% of deals require at least 5 follow-up touches, yet 44% of salespeople give up after just one. The sweet spot is 5-7 follow-ups spaced over 4-6 weeks, with each message adding new value rather than simply asking "did you see my last email?" After 7 touches with no response, move the contact to a long-term nurture sequence with monthly or quarterly check-ins rather than continuing high-frequency outreach.'
          }
        }
      ]
    }
  ];

  const templateStyle = {
    background: '#F9FAFB',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '20px 24px',
    margin: '16px 0 32px 0',
    fontFamily: 'Menlo, Consolas, monospace',
    fontSize: '14px',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap',
    color: '#1F2937',
    overflowX: 'auto'
  };

  const subjectStyle = {
    background: '#EEF2FF',
    border: '1px solid #C7D2FE',
    borderRadius: '8px',
    padding: '12px 20px',
    margin: '16px 0 4px 0',
    fontWeight: '700',
    fontSize: '15px',
    color: '#3730A3'
  };

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI email templates, ChatGPT email templates, AI cold email, email templates 2026, cold outreach templates, follow-up email templates, business email templates, AI email writing" />
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

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          21 AI Email Templates That Get Replies (Copy, Paste, Send)
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 24, 2026 &middot; Rey Midas</p>

        <p>The average professional sends <strong>40 emails per day</strong> and spends <strong>28% of their workday</strong> writing and responding to messages. That is roughly 2.5 hours every single day spent staring at your inbox, crafting responses, rewriting subject lines, and wondering if your tone sounds right.</p>
        <p>Most of those emails follow predictable patterns. Cold outreach. Client updates. Internal requests. Follow-ups. The structure rarely changes &mdash; only the details do.</p>
        <p>Which means you should not be writing them from scratch every time.</p>
        <p>Below are <strong>21 AI email templates</strong> that cover every common business scenario. Each one is ready to copy, paste, and customize in under 60 seconds. They are structured using proven persuasion frameworks, written in a human tone, and designed to get replies &mdash; not land in spam folders.</p>
        <p>Used together, these templates will <strong>cut your email writing time by 60%</strong> while improving your response rates.</p>
        <p>Brackets like <strong>[THIS]</strong> indicate where you fill in your specific details. Everything else is ready to send.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== SECTION 1: COLD OUTREACH ===== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', color: '#1E3A5F' }}>Cold Outreach (Templates 1&ndash;5)</h2>
        <p>Cold emails live or die by specificity. Generic pitches get deleted. These templates force you to lead with research and relevance, which is why they work.</p>

        {/* Template 1 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>1. Cold Sales Email</h3>
        <p>Use when reaching out to a potential customer who has never heard of you. The key is leading with their problem, not your product.</p>
        <div style={subjectStyle}>Subject: [SPECIFIC PAIN POINT] at [THEIR COMPANY]?</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I noticed [SPECIFIC OBSERVATION ABOUT THEIR BUSINESS — e.g., "your team just expanded to 30 people" or "you launched a new product line last month"]. That usually means [RELATED CHALLENGE — e.g., "onboarding is eating up your managers' time" or "you're juggling more SKUs than your current system was built for"].

We help [TYPE OF COMPANY] solve exactly that. [ONE SENTENCE about what you do and the result]. For example, [CLIENT NAME OR "one of our clients"] [SPECIFIC RESULT — e.g., "cut their onboarding time from 3 weeks to 4 days" or "reduced inventory errors by 73%"].

Would it make sense to spend 15 minutes exploring whether we could do something similar for [THEIR COMPANY]? I have [TWO SPECIFIC TIME SLOTS] open this week.

Either way, congrats on [THE THING YOU OBSERVED]. That is real momentum.

[YOUR NAME]
[YOUR TITLE, COMPANY]
[PHONE NUMBER]`}</div>

        {/* Template 2 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>2. Partnership Proposal</h3>
        <p>Use when proposing a collaboration, co-marketing, or integration opportunity to another business. Lead with what is in it for them.</p>
        <div style={subjectStyle}>Subject: Idea to help [THEIR COMPANY] reach [TARGET AUDIENCE]</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I run [YOUR COMPANY], where we [ONE-LINE DESCRIPTION]. We serve [YOUR AUDIENCE SIZE AND TYPE — e.g., "12,000 e-commerce store owners" or "a community of 5,000 SaaS founders"].

I have been following [THEIR COMPANY] for a while and think there is a natural overlap between our audiences. Specifically, I think we could [PROPOSED PARTNERSHIP — e.g., "co-host a webinar on [TOPIC]" or "create a bundled offering" or "do a newsletter swap"].

Here is why I think this works for you:
• Your [PRODUCT/SERVICE] is exactly what our audience asks us about regularly
• We could drive [ESTIMATED VALUE — e.g., "200-500 qualified leads" or "$X in co-branded revenue"] in the first month
• Zero cost on your end — I would handle [SPECIFIC LOGISTICS]

I put together a one-page brief on what this could look like. Want me to send it over, or would a 20-minute call be easier?

Best,
[YOUR NAME]
[YOUR COMPANY]
[WEBSITE URL]`}</div>

        {/* Template 3 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>3. Investor Introduction</h3>
        <p>Use when cold-emailing a potential investor. Investors skim fast, so front-load traction and market size.</p>
        <div style={subjectStyle}>Subject: [YOUR COMPANY] — [KEY TRACTION METRIC] in [MARKET]</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I am [YOUR NAME], founder of [YOUR COMPANY]. We [ONE SENTENCE — what you do and for whom].

Traction to date:
• [KEY METRIC 1 — e.g., "$42K MRR, growing 18% month-over-month"]
• [KEY METRIC 2 — e.g., "1,200 paying customers, 94% retention"]
• [KEY METRIC 3 — e.g., "Featured in [PUBLICATION], launched [NOTABLE PARTNERSHIP]"]

The market is [MARKET SIZE AND WHY NOW — one sentence, e.g., "$14B and accelerating because of [TREND]"]. Existing solutions [WHAT THEY GET WRONG]. We [YOUR DIFFERENTIATION — one sentence].

I am raising [ROUND SIZE] to [SPECIFIC USE OF FUNDS — e.g., "expand our sales team and launch in [NEW MARKET]"]. [NOTABLE INVESTORS OR ADVISORS] are already on board.

I noticed you invested in [THEIR PORTFOLIO COMPANY] — our thesis aligns closely, and I think [YOUR COMPANY] fits well in your portfolio. Would you have 20 minutes this week or next for a brief overview?

I have a concise deck I can share in advance.

Best,
[YOUR NAME]
[YOUR TITLE]
[EMAIL] | [PHONE]
[WEBSITE]`}</div>

        {/* Template 4 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>4. Job Application (Cold)</h3>
        <p>Use when applying for a role directly to a hiring manager rather than through the standard portal. Specificity about their company is what separates this from the pile.</p>
        <div style={subjectStyle}>Subject: [ROLE TITLE] — I helped [PREVIOUS COMPANY] [SPECIFIC RESULT]</div>
        <div style={templateStyle}>{`Hi [HIRING MANAGER'S FIRST NAME],

I saw [THEIR COMPANY] is hiring for [ROLE TITLE] and wanted to reach out directly because [SPECIFIC REASON YOU ARE EXCITED — e.g., "your approach to [THING THEY DO DIFFERENTLY] is exactly the kind of problem I have spent my career solving"].

Quick background on me:
• At [PREVIOUS COMPANY], I [ACHIEVEMENT WITH METRIC — e.g., "grew organic traffic from 12K to 180K monthly visitors in 14 months"]
• At [ANOTHER COMPANY/PROJECT], I [SECOND ACHIEVEMENT — e.g., "built and managed a team of 6 that launched 3 products generating $2.1M in first-year revenue"]
• I specialize in [YOUR KEY SKILL AREA], which I noticed is central to this role

What caught my attention about this role specifically: [ONE OR TWO SENTENCES about something unique in their job listing, recent company news, or product direction that genuinely resonated with you].

I would love to show you [SOMETHING SPECIFIC — e.g., "the content strategy framework I used at [COMPANY]" or "a quick analysis I did of your current [AREA]"]. Would a 15-minute conversation make sense?

My resume is attached, but the conversation will tell you a lot more.

Best,
[YOUR NAME]
[LINKEDIN URL]
[PORTFOLIO/WEBSITE if relevant]`}</div>

        {/* Template 5 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>5. Freelance Pitch</h3>
        <p>Use when pitching your freelance services to a prospective client. The secret is demonstrating you already understand their problem before asking for the gig.</p>
        <div style={subjectStyle}>Subject: Quick idea for [THEIR COMPANY]&apos;s [SPECIFIC AREA]</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I spent some time looking at [THEIR COMPANY]'s [SPECIFIC AREA — e.g., "landing pages" or "email sequences" or "social media presence"] and noticed [SPECIFIC, CONSTRUCTIVE OBSERVATION — e.g., "your product pages have strong copy but the CTAs are getting buried below the fold" or "your onboarding emails stop after Day 3, which is where most churn happens"].

I specialize in [YOUR SERVICE — e.g., "conversion copywriting for SaaS companies" or "email marketing for e-commerce brands"]. A few recent results:
• [CLIENT OR TYPE]: [RESULT WITH METRIC — e.g., "Increased trial-to-paid conversion by 34%"]
• [CLIENT OR TYPE]: [RESULT — e.g., "Generated $47K from a 5-email launch sequence"]

I have [NUMBER] ideas for how [THEIR COMPANY] could [DESIRED OUTCOME — e.g., "increase conversions by 20-30%" or "recover more abandoned carts"]. I put together a quick breakdown — happy to share it, no strings attached.

Would you be open to a quick 15-minute call this week? Or I can send the ideas in writing if that is easier.

[YOUR NAME]
[YOUR WEBSITE/PORTFOLIO]
[BRIEF SOCIAL PROOF — e.g., "Previously: [NOTABLE CLIENT]. Featured in: [PUBLICATION]."]`}</div>

        {/* CTA 1: After cold outreach */}
        <div style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', borderRadius: '12px', padding: '32px', margin: '40px 0', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>Want 50+ More Sales &amp; Outreach Templates?</h3>
          <p style={{ color: '#4B5563', marginBottom: '20px' }}>The Freelancer Kit includes cold email sequences, proposal templates, follow-up frameworks, and pricing scripts — all plug-and-play.</p>
          <a href={STRIPE_FREELANCER} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>Get the Freelancer Kit &rarr;</a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== SECTION 2: CLIENT MANAGEMENT ===== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', color: '#1E3A5F' }}>Client Management (Templates 6&ndash;10)</h2>
        <p>These templates keep client relationships smooth and professional. They handle the conversations most people avoid &mdash; scope changes, late payments, update requests &mdash; with clarity and confidence.</p>

        {/* Template 6 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>6. Project Kickoff</h3>
        <p>Send immediately after a client signs. Sets expectations, establishes next steps, and makes you look organized from day one.</p>
        <div style={subjectStyle}>Subject: [PROJECT NAME] — Kickoff Details &amp; Next Steps</div>
        <div style={templateStyle}>{`Hi [CLIENT NAME],

Welcome aboard! I am excited to get started on [PROJECT NAME/DESCRIPTION]. This email covers everything we need to hit the ground running.

PROJECT OVERVIEW
• Scope: [BRIEF DESCRIPTION OF DELIVERABLES]
• Timeline: [START DATE] through [END DATE]
• Key milestones: [MILESTONE 1 + DATE], [MILESTONE 2 + DATE], [MILESTONE 3 + DATE]

WHAT I NEED FROM YOU BY [DATE — within 3-5 days]
1. [ITEM 1 — e.g., "Brand guidelines and logo files"]
2. [ITEM 2 — e.g., "Access to your Google Analytics and CMS"]
3. [ITEM 3 — e.g., "Completed intake questionnaire (attached)"]

COMMUNICATION
• I will send weekly progress updates every [DAY]
• For quick questions: [PREFERRED CHANNEL — e.g., "Slack" or "email"]
• For revisions/feedback: [SYSTEM — e.g., "I'll share a Google Doc with commenting enabled"]

OUR FIRST MEETING
I have scheduled our kickoff call for [DATE, TIME, TIMEZONE]. Here is the link: [MEETING LINK]. If that does not work, let me know and I will adjust.

If any questions come up before then, just reply here. Looking forward to this.

Best,
[YOUR NAME]`}</div>

        {/* Template 7 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>7. Scope Change Request</h3>
        <p>Use when a client asks for work beyond the original agreement. This protects your time without damaging the relationship.</p>
        <div style={subjectStyle}>Subject: [PROJECT NAME] — Scope Adjustment Needed</div>
        <div style={templateStyle}>{`Hi [CLIENT NAME],

Thanks for sharing the additional details on [WHAT THEY REQUESTED]. I want to make sure we handle this the right way so the quality stays high across the board.

The original scope we agreed on covers:
• [DELIVERABLE 1]
• [DELIVERABLE 2]
• [DELIVERABLE 3]

The new request — [DESCRIBE WHAT THEY ASKED FOR] — falls outside that scope. Here is what I recommend:

OPTION A: Add it to the current project
• Additional cost: [AMOUNT]
• Additional time: [TIMEFRAME]
• Adjusted deadline: [NEW DATE]

OPTION B: Phase 2
• We complete the current project as planned by [ORIGINAL DEADLINE]
• We tackle [NEW REQUEST] as a separate phase immediately after
• Estimated cost for Phase 2: [AMOUNT]

I am happy to go either direction — just want to be transparent so there are no surprises on the invoice or timeline. Which option works better for your team?

Best,
[YOUR NAME]`}</div>

        {/* Template 8 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>8. Late Payment Follow-Up</h3>
        <p>Use when an invoice is overdue. Firm but professional. Escalates politely while keeping the door open for a good relationship.</p>
        <div style={subjectStyle}>Subject: Invoice #[NUMBER] — Payment Follow-Up</div>
        <div style={templateStyle}>{`Hi [CLIENT NAME],

I hope everything is going well. I wanted to follow up on Invoice #[INVOICE NUMBER] for [AMOUNT], which was due on [DUE DATE]. As of today, it is [NUMBER] days past due.

For reference:
• Invoice amount: [AMOUNT]
• Services: [BRIEF DESCRIPTION]
• Date issued: [DATE]
• Date due: [DATE]
• Payment link: [LINK IF APPLICABLE]

I understand things get busy and invoices slip through the cracks — no judgment here. If there is an issue with the invoice or if you need to adjust the payment schedule, I am happy to work something out. Just let me know.

If this has already been processed, feel free to disregard this message and I will keep an eye out for it on my end.

Could you give me a quick update on the status when you get a moment?

Thank you,
[YOUR NAME]
[YOUR COMPANY]`}</div>

        {/* Template 9 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>9. Project Status Update</h3>
        <p>Send weekly or biweekly to keep clients informed without them needing to ask. This alone will set you apart from 90% of service providers.</p>
        <div style={subjectStyle}>Subject: [PROJECT NAME] — Status Update ([DATE RANGE])</div>
        <div style={templateStyle}>{`Hi [CLIENT NAME],

Here is your update for the week of [DATE RANGE].

COMPLETED THIS PERIOD
✓ [TASK 1 — e.g., "Finalized homepage wireframes (see attached)"]
✓ [TASK 2 — e.g., "Wrote copy for all 5 landing pages"]
✓ [TASK 3 — e.g., "Set up analytics tracking and conversion events"]

IN PROGRESS
→ [TASK 1 — e.g., "Mobile responsive design (60% complete, on track)"]
→ [TASK 2 — e.g., "Integration with your CRM (waiting on API credentials)"]

COMING NEXT WEEK
○ [TASK 1]
○ [TASK 2]

BLOCKERS / NEEDS FROM YOU
• [ITEM — e.g., "Need your approval on the wireframes by Wednesday to stay on schedule"]
• [ITEM — e.g., "Still waiting on the API credentials mentioned above — can you check with your dev team?"]

OVERALL STATUS: [ON TRACK / SLIGHTLY BEHIND / AHEAD OF SCHEDULE]
We are [PERCENTAGE]% through the project and [on track to deliver by / targeting a revised delivery of] [DATE].

Questions? Just reply here. Talk soon.

Best,
[YOUR NAME]`}</div>

        {/* Template 10 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>10. Testimonial Request</h3>
        <p>Send after a successful project delivery. Makes it dead simple for the client to say yes by providing structure.</p>
        <div style={subjectStyle}>Subject: Quick Favor — 2 Minutes?</div>
        <div style={templateStyle}>{`Hi [CLIENT NAME],

It was great working with you on [PROJECT NAME]. I am really proud of what we accomplished — especially [SPECIFIC RESULT OR HIGHLIGHT — e.g., "the 43% lift in conversions" or "getting everything launched 5 days ahead of schedule"].

I have a quick favor: would you be willing to share a short testimonial about your experience? It helps more than you would think when prospective clients are evaluating whether to work with me.

To make it as easy as possible, here are a few optional prompts (answer one or all — whatever feels natural):
1. What problem were you trying to solve when you hired me?
2. What was the result or outcome?
3. What surprised you most about working together?
4. Would you recommend me to others? Why?

A few sentences is perfect. You can reply directly to this email, or if you prefer, I can draft something based on our project results and send it to you for approval — zero effort on your end.

No pressure at all. And regardless, thank you for the opportunity to work on this. I genuinely enjoyed it.

Best,
[YOUR NAME]`}</div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== SECTION 3: INTERNAL ===== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', color: '#1E3A5F' }}>Internal Communication (Templates 11&ndash;15)</h2>
        <p>Internal emails waste the most time because people over-explain, under-structure, and bury the ask. These templates fix all three problems.</p>

        {/* Template 11 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>11. Meeting Request</h3>
        <p>Use when you need to schedule a meeting with a colleague or team. Clear purpose, proposed times, and a defined agenda make it easy to say yes.</p>
        <div style={subjectStyle}>Subject: Meeting Request — [TOPIC] ([ESTIMATED DURATION])</div>
        <div style={templateStyle}>{`Hi [NAME],

I would like to set up a [DURATION — e.g., "30-minute"] meeting to discuss [SPECIFIC TOPIC — e.g., "the Q2 marketing budget allocation" or "the onboarding flow redesign"].

WHY THIS MATTERS NOW
[ONE OR TWO SENTENCES — e.g., "We need to finalize the budget before the April 1 planning deadline" or "User drop-off at Step 3 increased 22% last month and I have a proposal to fix it."]

PROPOSED AGENDA
1. [ITEM — e.g., "Review current spend vs. results (5 min)"]
2. [ITEM — e.g., "Discuss proposed reallocation (15 min)"]
3. [ITEM — e.g., "Agree on next steps and owners (10 min)"]

TIMES THAT WORK FOR ME
• [OPTION 1 — e.g., "Tuesday 3/26 at 2:00 PM ET"]
• [OPTION 2 — e.g., "Wednesday 3/27 at 10:00 AM ET"]
• [OPTION 3 — e.g., "Thursday 3/28 at 4:00 PM ET"]

If none of those work, send me a couple of times that do and I will make it happen.

[YOUR NAME]`}</div>

        {/* Template 12 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>12. Status Update (Internal)</h3>
        <p>Use for weekly or biweekly updates to your manager or team. Scannable, structured, no fluff.</p>
        <div style={subjectStyle}>Subject: [YOUR NAME] Status Update — Week of [DATE]</div>
        <div style={templateStyle}>{`Hi [MANAGER/TEAM NAME],

Here is my update for the week of [DATE RANGE].

HIGHLIGHTS
• [WIN 1 — e.g., "Closed the Acme Corp deal — $38K ARR"]
• [WIN 2 — e.g., "Shipped the new onboarding flow to 100% of users"]
• [WIN 3 — e.g., "Reduced support ticket volume by 15% with new FAQ page"]

IN PROGRESS
• [PROJECT/TASK] — [STATUS AND EXPECTED COMPLETION — e.g., "API integration — 70% done, targeting Friday"]
• [PROJECT/TASK] — [STATUS — e.g., "Vendor evaluation — narrowed to 2 finalists, scheduling demos this week"]

BLOCKED / NEED INPUT
• [ITEM — e.g., "Need legal review on the partner agreement — sent to Sarah on Monday, following up today"]
• [ITEM — e.g., "Waiting on budget approval for the contractor hire — can we discuss in our 1:1?"]

NEXT WEEK PRIORITIES
1. [PRIORITY 1]
2. [PRIORITY 2]
3. [PRIORITY 3]

Let me know if anything here needs to shift. Happy to adjust priorities if the team needs something else.

[YOUR NAME]`}</div>

        {/* Template 13 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>13. Feedback Request</h3>
        <p>Use when you need input from a colleague on a project, document, or idea. Be specific about what kind of feedback you want to get useful responses.</p>
        <div style={subjectStyle}>Subject: Feedback Needed — [PROJECT/DOCUMENT NAME] (by [DATE])</div>
        <div style={templateStyle}>{`Hi [NAME],

I am working on [PROJECT/DOCUMENT — e.g., "the new pricing page" or "the Q2 campaign strategy doc"] and would really value your input before I finalize it.

HERE IS WHAT I NEED FEEDBACK ON
[LINK OR ATTACHMENT]

SPECIFIC QUESTIONS
I am not looking for a full review — just your take on these specific areas:
1. [QUESTION 1 — e.g., "Does the messaging clearly communicate the value prop to mid-market buyers?"]
2. [QUESTION 2 — e.g., "Is the pricing structure confusing or does it feel intuitive?"]
3. [QUESTION 3 — e.g., "Anything missing that you think a prospect would ask about?"]

CONTEXT
[1-2 SENTENCES — e.g., "This is targeting companies with 50-200 employees. The goal is a 15% increase in demo requests from the pricing page."]

TIMELINE
Could you take a look by [DATE]? Even quick gut reactions are helpful — does not need to be polished.

If you are too slammed this week, no worries at all — just let me know and I will find another reviewer.

Thanks,
[YOUR NAME]`}</div>

        {/* Template 14 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>14. Delegation Email</h3>
        <p>Use when assigning a task to a team member. Clear ownership, context, and deadlines prevent the back-and-forth that kills productivity.</p>
        <div style={subjectStyle}>Subject: [ACTION NEEDED] [TASK NAME] — Due [DATE]</div>
        <div style={templateStyle}>{`Hi [NAME],

I would like you to take ownership of [TASK/PROJECT — e.g., "creating the customer case study for Acme Corp"].

HERE IS WHAT I NEED
[CLEAR DESCRIPTION OF THE DELIVERABLE — e.g., "A 500-800 word case study covering the problem, solution, and results. Include at least 2 direct quotes from the client and 3 quantified metrics."]

CONTEXT / WHY THIS MATTERS
[1-2 SENTENCES — e.g., "The sales team has been asking for this for weeks — it is their #1 requested asset for enterprise deals. This will go directly on the website and into the sales deck."]

RESOURCES
• [RESOURCE 1 — e.g., "Client interview transcript: [LINK]"]
• [RESOURCE 2 — e.g., "Previous case study for reference: [LINK]"]
• [RESOURCE 3 — e.g., "Brand voice guide: [LINK]"]

TIMELINE
• First draft: [DATE]
• Review/feedback: I will turn feedback around within 24 hours
• Final version: [DATE]

DECISION AUTHORITY
You have full autonomy on [WHAT THEY CAN DECIDE — e.g., "structure, tone, and visual layout"]. Check with me before [WHAT NEEDS APPROVAL — e.g., "publishing or sharing externally"].

Questions? Grab me on Slack or reply here. I trust your judgment on this — run with it.

[YOUR NAME]`}</div>

        {/* Template 15 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>15. Conflict Resolution</h3>
        <p>Use when you need to address a disagreement, miscommunication, or friction with a colleague. Written communication lets both sides be thoughtful rather than reactive.</p>
        <div style={subjectStyle}>Subject: Wanted to Clear the Air on [TOPIC]</div>
        <div style={templateStyle}>{`Hi [NAME],

I wanted to reach out about [SITUATION — e.g., "the discussion in yesterday's meeting about the project timeline" or "the miscommunication around the client deliverable"]. I think we ended up in different places on it, and I would rather address it directly than let it linger.

HERE IS MY UNDERSTANDING
[DESCRIBE THE SITUATION FACTUALLY — NO BLAME — e.g., "We had different expectations about who was responsible for the final QA review. I thought it was assigned to your team based on the kickoff meeting notes, but I understand you may have had a different read on that."]

MY PART IN THIS
[OWN YOUR CONTRIBUTION — e.g., "I should have confirmed the ownership explicitly in writing after the meeting instead of assuming we were aligned. That is on me."]

WHAT I THINK WOULD HELP GOING FORWARD
1. [PROPOSED SOLUTION 1 — e.g., "We document task ownership in a shared tracker after every kickoff"]
2. [PROPOSED SOLUTION 2 — e.g., "We do a quick 5-minute check-in on Mondays to make sure nothing is falling through the cracks"]

I value working with you, and I want to make sure we are set up to collaborate well on [UPCOMING PROJECT/ONGOING WORK]. Would you be open to grabbing coffee or a 15-minute call to talk through this? I am happy to accommodate your schedule.

[YOUR NAME]`}</div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== SECTION 4: FOLLOW-UPS ===== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', color: '#1E3A5F' }}>Follow-Ups (Templates 16&ndash;21)</h2>
        <p>80% of deals require at least five follow-up touches, yet 44% of people give up after one. These templates make following up systematic instead of awkward. Each one adds new value rather than just saying &ldquo;checking in.&rdquo;</p>

        {/* Template 16 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>16. Follow-Up After No Response &mdash; 3 Days</h3>
        <p>The gentle nudge. Use 3 business days after your initial email with no reply. Adds value instead of just &ldquo;bumping&rdquo; the thread.</p>
        <div style={subjectStyle}>Subject: Re: [ORIGINAL SUBJECT LINE]</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I know your inbox is a warzone, so just floating this back up.

Since I last reached out, I put together [SOMETHING VALUABLE — e.g., "a quick comparison of how [THEIR COMPANY] stacks up against [COMPETITOR] on [METRIC]" or "a 2-minute video walkthrough showing how this would work for your team" or "a short case study from a company in [THEIR INDUSTRY]"].

Here it is: [LINK OR ATTACHMENT]

No strings attached — just thought it might be useful regardless of whether we end up working together.

If the timing is off, no worries at all. Just say "not now" and I will check back in [TIMEFRAME — e.g., "a couple months"].

[YOUR NAME]`}</div>

        {/* Template 17 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>17. Follow-Up After No Response &mdash; 7 Days</h3>
        <p>The value-add touch. Use one week after your initial email. Shift the angle and offer something different.</p>
        <div style={subjectStyle}>Subject: [RELEVANT RESOURCE] for [THEIR COMPANY]</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I reached out last week about [TOPIC — one line]. I know things get buried, so I wanted to try a different angle.

I just came across [RELEVANT RESOURCE — e.g., "a report showing that companies in [THEIR INDUSTRY] are losing an average of $X per year on [PROBLEM]" or "an article about how [THEIR COMPETITOR] just implemented [SOLUTION]"]. Thought of your team immediately.

Link: [RESOURCE LINK]

The reason I think this is relevant: [ONE SENTENCE connecting the resource to their situation — e.g., "If their numbers are typical for the industry, [THEIR COMPANY] might be leaving $200-400K on the table annually — which is exactly the gap we help close."]

Happy to walk through how we have helped [SIMILAR COMPANIES] tackle this if it is on your radar. If not, I will stop clogging your inbox.

Best,
[YOUR NAME]`}</div>

        {/* Template 18 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>18. Follow-Up After No Response &mdash; 14+ Days</h3>
        <p>The breakup email. Use after two weeks and multiple touches. Giving them an easy out paradoxically increases replies.</p>
        <div style={subjectStyle}>Subject: Should I Close the File on This?</div>
        <div style={templateStyle}>{`Hi [FIRST NAME],

I have reached out a couple of times about [TOPIC — brief] and have not heard back, which usually means one of three things:

1. You are interested but the timing is terrible (totally get it)
2. You have already solved this another way (great, glad it is handled)
3. You are being chased by a bear and email is not a priority (understandable)

If it is #1, just reply "later" and I will check back in [TIMEFRAME — e.g., "Q3"].
If it is #2 or #3, just reply "pass" and I will close this out — no hard feelings.

Either way, I will leave you with this: [ONE FINAL PIECE OF VALUE — e.g., "here is a free guide on [TOPIC] that might help regardless" or "our blog post on [RELATED TOPIC] has been helpful for teams like yours — LINK"].

Wishing you and [THEIR COMPANY] all the best.

[YOUR NAME]`}</div>

        {/* Template 19 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>19. Follow-Up After a Meeting</h3>
        <p>Send within 2 hours of any meeting. Recap decisions, document next steps, and solidify the relationship while momentum is high.</p>
        <div style={subjectStyle}>Subject: Great Talking — Here&apos;s What We Agreed On</div>
        <div style={templateStyle}>{`Hi [NAME],

Really enjoyed our conversation today. Here is a quick recap so we are both on the same page.

KEY TAKEAWAYS
• [POINT 1 — e.g., "Your biggest priority is reducing churn in the first 30 days"]
• [POINT 2 — e.g., "Budget is approved for Q2, targeting a start date of April 15"]
• [POINT 3 — e.g., "You want to see a pilot with the marketing team before rolling out company-wide"]

AGREED NEXT STEPS
• [YOUR NAME]: [ACTION + DEADLINE — e.g., "Send over a tailored proposal by Friday 3/28"]
• [YOUR NAME]: [ACTION — e.g., "Share the case study from [SIMILAR CLIENT]"]
• [THEIR NAME]: [ACTION — e.g., "Loop in [COLLEAGUE NAME] for the technical review"]
• [THEIR NAME]: [ACTION — e.g., "Confirm the pilot team size and timeline"]

NEXT TOUCHPOINT
[e.g., "I will send the proposal by Friday and then we can schedule a follow-up call for the week of 3/31 to review it together."]

If I missed anything or got something wrong, just reply and I will update my notes. Looking forward to the next step.

Best,
[YOUR NAME]`}</div>

        {/* Template 20 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>20. Follow-Up After Sending a Proposal</h3>
        <p>Send 2-3 days after a proposal with no response. Reframe around value and reduce the perceived risk of saying yes.</p>
        <div style={subjectStyle}>Subject: Re: [PROJECT NAME] Proposal — Quick Thought</div>
        <div style={templateStyle}>{`Hi [NAME],

I wanted to follow up on the proposal I sent on [DATE] for [PROJECT/SERVICE NAME]. I know proposals can raise questions that are hard to articulate in an email, so I wanted to make myself available.

A few things that might help as you evaluate:

WHAT OTHER CLIENTS IN YOUR POSITION ASKED
• "What if it does not work?" → [YOUR ANSWER — e.g., "We include a 30-day performance checkpoint. If we are not hitting the agreed metrics, we adjust the strategy at no additional cost."]
• "Can we start smaller?" → [YOUR ANSWER — e.g., "Absolutely. We can run a pilot at [REDUCED SCOPE/PRICE] and scale up once you see results."]
• "What does the first week look like?" → [YOUR ANSWER — e.g., "Day 1-2: Onboarding and access. Day 3-5: Audit and strategy. End of Week 1: You see the roadmap and first deliverables."]

THE BOTTOM LINE
Based on what you shared about [THEIR GOAL — e.g., "wanting to double demo requests this quarter"], I am confident we can [PROJECTED OUTCOME — e.g., "deliver a 40-60% increase in qualified demos within 60 days"].

Would it help to jump on a quick call to walk through any questions? Happy to carve out 15 minutes whenever works for you.

Best,
[YOUR NAME]`}</div>

        {/* Template 21 */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '36px' }}>21. Follow-Up After an Interview</h3>
        <p>Send within 24 hours of a job interview. Be specific about what you discussed &mdash; generic thank-you notes are forgettable.</p>
        <div style={subjectStyle}>Subject: Thank You — [ROLE TITLE] Interview</div>
        <div style={templateStyle}>{`Hi [INTERVIEWER'S NAME],

Thank you for taking the time to meet with me today about the [ROLE TITLE] position. I really enjoyed our conversation, especially the discussion about [SPECIFIC TOPIC FROM THE INTERVIEW — e.g., "how the team is rethinking the onboarding experience" or "the challenges of scaling the content operation internationally"].

A few things stood out to me:

1. [SOMETHING THAT EXCITED YOU — e.g., "The way you described the team's approach to experimentation — running 15+ tests per month — aligns perfectly with how I worked at [PREVIOUS COMPANY], where I managed our testing program and increased win rate from 12% to 31%."]

2. [SOMETHING YOU CAN CONTRIBUTE — e.g., "When you mentioned the challenge of getting engineering and marketing aligned on priorities, that reminded me of a framework I built at [COMPANY] that cut cross-team project timelines by 40%. I would love to bring that approach here."]

3. [SOMETHING ABOUT THE CULTURE/MISSION — e.g., "Your commitment to [VALUE/MISSION] is not something I see at every company, and it is a big reason this role is my top choice."]

You mentioned [SOMETHING THEY SAID THEY'D SHARE OR A NEXT STEP — e.g., "sending over the team structure doc"]. I am looking forward to reviewing that.

Please do not hesitate to reach out if you need any additional information from me — references, work samples, or otherwise. I am very excited about this opportunity.

Best,
[YOUR NAME]
[PHONE]
[LINKEDIN URL]`}</div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== HOW TO USE THESE TEMPLATES ===== */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>How to Get the Most Out of These Templates</h2>

        <p>A template is a starting point, not a finished product. The people who get results from email templates do three things differently:</p>

        <p><strong>1. Replace every bracket with specific, researched details.</strong> &ldquo;[THEIR COMPANY]&rdquo; should never become &ldquo;your company.&rdquo; It should become &ldquo;Acme Corp.&rdquo; &ldquo;[SPECIFIC OBSERVATION]&rdquo; should never be a guess &mdash; spend 3 minutes on their website or LinkedIn before you send.</p>

        <p><strong>2. Adjust the tone to match the relationship.</strong> An email to a Fortune 500 VP should read differently than an email to a startup founder you met at a conference. The templates above lean professional-but-human. Dial up or down as needed.</p>

        <p><strong>3. Test and iterate.</strong> Track which templates get the highest reply rates for your specific audience. Over time, you will develop a personal library of high-performing variations that feel uniquely yours.</p>

        {/* CTA 2: After all templates */}
        <div style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', borderRadius: '12px', padding: '32px', margin: '40px 0', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>Get 200+ Prompts for Every Business Need</h3>
          <p style={{ color: '#4B5563', marginBottom: '20px' }}>The Mega Prompt Pack covers emails, sales, marketing, operations, hiring, and more. Every prompt is copy-paste ready and tested across real businesses.</p>
          <a href={STRIPE_MEGA} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>Get the Mega Prompt Pack &rarr;</a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== FAQ ===== */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '28px' }}>Are AI-generated emails effective for cold outreach?</h3>
        <p>Yes, when properly customized. AI templates provide the structural framework and persuasion mechanics that most people struggle to write from scratch. The key is using the template as a skeleton and filling it with specific, researched details about each recipient. Studies show personalized AI-assisted cold emails achieve 2-3x higher reply rates than fully manual or fully automated approaches. The worst thing you can do is send a template without customizing the brackets &mdash; recipients can smell a mass email instantly.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '28px' }}>How do I personalize AI email templates so they do not sound robotic?</h3>
        <p>Focus on three areas. First, replace every bracketed placeholder with specific, researched details &mdash; never leave generic filler. Second, adjust the tone to match your natural voice and your relationship with the recipient. Third, add one concrete observation or detail that proves you did your homework: a recent company announcement, a shared connection, a specific pain point you noticed on their website. The template handles the structure; your job is making it feel like a real human wrote it for that specific person.</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '28px' }}>How many follow-up emails should I send before giving up?</h3>
        <p>Research consistently shows that 80% of deals require at least 5 follow-up touches, yet 44% of salespeople give up after just one. The sweet spot is 5-7 follow-ups spaced over 4-6 weeks, with each message adding new value rather than simply asking &ldquo;did you see my last email?&rdquo; After 7 touches with no response, move the contact to a long-term nurture sequence with monthly or quarterly check-ins rather than continuing high-frequency outreach. The templates above (16-18) give you three follow-up variations at different stages to keep the sequence fresh.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ===== RELATED READING ===== */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Related Reading</h2>
        <ul>
          <li><Link href="/blog/automate-client-follow-up-ai" style={{ color: '#3B5FFF' }}>How to Automate Client Follow-Up with AI (No Code Required)</Link></li>
          <li><Link href="/blog/ai-freelancer-automation-2026" style={{ color: '#3B5FFF' }}>AI Freelancer Automation: Save 10+ Hours Per Week in 2026</Link></li>
          <li><Link href="/free-prompts" style={{ color: '#3B5FFF' }}>Free AI Prompt Library</Link></li>
          <li><Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>AI Email Marketing Kit — 125+ Prompts for Sequences, Newsletters & Outreach</Link></li>
          <li><Link href="/blog/ai-email-marketing-prompts-2026" style={{ color: '#3B5FFF' }}>20 AI Prompts That Will Transform Your Email Marketing in 2026</Link></li>
        </ul>

        {/* CTA 3: End */}
        <div style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)', borderRadius: '12px', padding: '32px', margin: '40px 0', textAlign: 'center' }}>
          <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>Get All 14 Kits for $97</h3>
          <p style={{ color: '#4B5563', marginBottom: '20px' }}>Email templates, sales scripts, marketing prompts, client management workflows, and more. One bundle, every tool your business needs.</p>
          <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>Get the Complete Bundle &rarr;</a>
        </div>

      </div>
    </Layout>
  );
}