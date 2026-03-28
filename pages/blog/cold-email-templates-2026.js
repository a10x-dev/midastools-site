import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const EMAIL_KIT_URL = 'https://buy.stripe.com/6oUcN40tN0Yxgle0pscMM0l';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function ColdEmailTemplates2026() {
  const title = '25 Cold Email Templates That Actually Get Replies in 2026 (Copy & Paste)';
  const description = 'The best cold email templates for 2026. 25 copy-paste templates for B2B sales, freelancer outreach, SaaS partnerships, job seekers, and follow-ups. Real subject lines, real personalization tokens, and proven reply-rate data.';
  const url = 'https://www.midastools.co/blog/cold-email-templates-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
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
        name: 'What is a good reply rate for cold emails in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good cold email reply rate in 2026 is 5-15% for B2B sales outreach and 10-25% for targeted freelancer or agency outreach. The average across all industries is about 3-5%, but highly personalized emails using the templates and principles in this guide regularly achieve 15-30% reply rates. The key factors are: personalization beyond just the first name, relevance to a specific pain point, brevity (under 120 words for the first touch), and a low-friction call to action like asking a question rather than requesting a meeting.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many follow-up emails should I send after a cold email?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You should send 4-5 follow-up emails after your initial cold email, spaced at Day 3, Day 7, Day 14, Day 21, and Day 30. Research from Woodpecker and Lemlist shows that 55-60% of all cold email replies come from follow-ups, not the first email. The second and third follow-ups generate the most replies. After the fifth follow-up, response rates drop significantly and you risk harming your sender reputation. Each follow-up should add new value rather than just repeating "checking in" or "bumping this up."'
        }
      },
      {
        '@type': 'Question',
        name: 'How long should a cold email be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ideal cold email length is 50-125 words for the first touch. Emails in this range have the highest reply rates according to data from Lavender, Gong, and Woodpecker. Emails under 50 words often lack enough context to be compelling. Emails over 150 words see a sharp drop in reply rates because busy professionals skim or skip long messages. Your first cold email should be scannable in under 10 seconds. Use short paragraphs (1-2 sentences each), no walls of text, and get to the point in the first line. Save longer explanations for follow-ups after they have shown interest.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best time to send cold emails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to send cold emails in 2026 is Tuesday through Thursday between 8:00-10:00 AM in the recipient\'s local time zone. Tuesday at 9 AM consistently ranks as the single best send time across multiple studies. Avoid Mondays (inbox overload from the weekend) and Fridays (people mentally checking out). Never send on weekends for B2B outreach. Send in the recipient\'s time zone, not yours. If you are emailing someone in New York from California, schedule for 8 AM ET, not 8 AM PT. Most cold email tools like Lemlist, Instantly, and Smartlead support time-zone-aware sending.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do cold emails still work with AI spam filters in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, cold emails still work in 2026, but spam filters (especially Google\'s and Microsoft\'s AI-powered filters) have become much stricter. To land in the inbox: (1) Warm up your domain for 2-3 weeks before sending campaigns. (2) Keep daily volume under 50 emails per inbox. (3) Use a separate domain for cold outreach (e.g., yourbrand.co instead of yourbrand.com). (4) Authenticate with SPF, DKIM, and DMARC records. (5) Avoid spam trigger words like "free," "guaranteed," "act now." (6) Write emails that sound like a human wrote them to one person, not a mass blast. (7) Include an unsubscribe link or opt-out line. The templates in this guide are designed to pass modern spam filters by sounding genuinely personal and conversational.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I use AI to write cold emails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI is an excellent tool for drafting cold emails, but you need to customize the output. Use AI for: generating first drafts, writing follow-up variations, creating subject line options, and scaling personalization. Do not use AI for: sending emails without reviewing them, generating generic "I hope this email finds you well" copy, or blasting the same AI-written template to thousands of people without customization. The best approach is to use AI to create a template framework (like the ones in this guide), then manually personalize the first 1-2 sentences for each prospect with specific details about their company, recent news, or a genuine observation. This hybrid approach gets you the speed of AI with the authenticity of human personalization.'
        }
      }
    ]
  };

  const templateStyle = {
    background: '#F9FAFB',
    borderLeft: '4px solid #3B5FFF',
    borderRadius: '8px',
    padding: '20px 24px',
    marginBottom: '16px',
    marginTop: '16px'
  };

  const templateLabelStyle = {
    fontWeight: '700',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#3B5FFF',
    marginBottom: '4px'
  };

  const templateBodyStyle = {
    fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace",
    fontSize: '13.5px',
    lineHeight: '1.65',
    whiteSpace: 'pre-wrap',
    color: '#1F2937'
  };

  const ctaBoxStyle = {
    marginTop: '40px',
    marginBottom: '40px',
    padding: '32px 28px',
    background: 'linear-gradient(135deg, #3B5FFF 0%, #2847CC 100%)',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#FFFFFF'
  };

  const ctaButtonStyle = {
    display: 'inline-block',
    marginTop: '16px',
    padding: '14px 36px',
    background: '#FFFFFF',
    color: '#3B5FFF',
    fontWeight: '700',
    fontSize: '16px',
    borderRadius: '100px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer'
  };

  const hrStyle = { margin: '48px 0', border: 'none', borderTop: '1px solid #eee' };

  const h2Style = { fontSize: '1.4rem', fontWeight: '700', marginTop: '48px', marginBottom: '12px', lineHeight: '1.25' };

  const h3Style = { fontSize: '1.15rem', fontWeight: '700', marginTop: '36px', marginBottom: '8px' };

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
        <meta name="keywords" content="cold email templates, cold email examples, cold outreach templates 2026, cold email templates for sales, cold email for freelancers, cold email follow-up, cold email subject lines, B2B cold email, cold email that gets replies, how to write cold emails, best cold emails 2026, cold email scripts, cold outreach examples" />
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
          25 Cold Email Templates That Actually Get Replies in 2026 (Copy &amp; Paste)
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 27, 2026 &middot; 22 min read &middot; Midas Tools Team</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p>Cold email is not dead. In 2026, it is still the single most effective way to start a conversation with someone who has never heard of you.</p>

        <p>The numbers tell the story: the average cold email reply rate sits around <strong>3&ndash;5%</strong> across all industries. But top performers &mdash; the ones using the right templates, the right personalization, and the right follow-up sequences &mdash; consistently hit <strong>15&ndash;30% reply rates</strong>. That is 6x the average. On a 500-person campaign, that is the difference between 15 replies and 150.</p>

        <p>What changed in 2026? Three things:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>AI spam filters got smarter.</strong> Google and Microsoft now use machine learning to detect mass-sent emails that &ldquo;feel&rdquo; like templates. Generic, bro-marketing copy gets filtered before it ever reaches an inbox.</li>
          <li><strong>Personalization expectations skyrocketed.</strong> Prospects can tell in 2 seconds whether you actually researched them or just mail-merged their first name. Surface-level personalization ({'"Hey [FIRST_NAME], I saw your LinkedIn..."'}) no longer works.</li>
          <li><strong>Follow-up sequences became non-negotiable.</strong> 55&ndash;60% of replies come from follow-ups, not the first email. If you send one email and give up, you are leaving the majority of your replies on the table.</li>
        </ul>

        <p>This guide gives you <strong>25 cold email templates</strong> organized into five categories: B2B sales, freelancer outreach, SaaS and startup, job seekers, and follow-ups. Every template includes the subject line, full email body, and an explanation of why it works. Personalization tokens are in <strong>[BRACKETS]</strong> &mdash; replace them with your specifics, and you have a ready-to-send email.</p>

        <p>These templates are designed to pass modern spam filters by sounding like one human writing to another human. No hype. No walls of text. No {'"I hope this email finds you well."'}</p>

        <p>Let us get into it.</p>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 1: FUNDAMENTALS                      */}
        {/* ============================================ */}

        <h2 style={h2Style} id="fundamentals">Cold Email Fundamentals in 2026</h2>

        <p>Before you copy a single template, you need to understand the rules of the game. Cold email in 2026 operates under stricter technical and psychological constraints than even two years ago. Get the fundamentals wrong and the best template in the world will not save you.</p>

        <h3 style={h3Style}>Deliverability Rules</h3>

        <p>Your email has to reach the inbox before it can get a reply. Here is the technical checklist:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>Use a separate domain for outreach.</strong> If your main site is yourbrand.com, send cold emails from yourbrand.co or getyourbrand.com. This protects your primary domain reputation.</li>
          <li><strong>Authenticate everything.</strong> Set up SPF, DKIM, and DMARC records. Without all three, your emails are likely going to spam.</li>
          <li><strong>Warm up your inbox.</strong> Use a service like Instantly, Warmbox, or Mailreach for 2&ndash;3 weeks before sending any campaigns. Start with 5 emails per day and ramp to 30&ndash;50.</li>
          <li><strong>Keep volume low.</strong> 30&ndash;50 emails per inbox per day, maximum. If you need more volume, add more inboxes. Never blast 500 emails from one inbox.</li>
          <li><strong>Include an opt-out.</strong> {'"If this isn\'t relevant, just let me know and I\'ll remove you from my list"'} at the bottom of your email. This satisfies CAN-SPAM requirements and reduces spam complaints.</li>
        </ul>

        <h3 style={h3Style}>Spam Filter Changes in 2026</h3>

        <p>Google and Microsoft rolled out AI-powered spam detection that analyzes <strong>behavioral signals</strong>, not just content. The filters look at:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Whether recipients open, reply to, or delete your emails (engagement scoring)</li>
          <li>Whether the email &ldquo;pattern matches&rdquo; mass-sent templates (linguistic fingerprinting)</li>
          <li>How many emails you send per day from the same domain (velocity scoring)</li>
          <li>Whether your email contains tracking pixels from known cold email tools</li>
        </ul>

        <p>The fix: write emails that sound like you wrote them to one person. Short paragraphs. Conversational tone. No heavy HTML formatting. No images in the first email. No more than one link.</p>

        <h3 style={h3Style}>Personalization That Actually Works</h3>

        <p>There are three tiers of cold email personalization:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>Tier 1 (table stakes):</strong> First name, company name, job title. Everyone does this. It is not enough.</li>
          <li><strong>Tier 2 (competitive edge):</strong> Reference a specific blog post they wrote, a recent company announcement, or a mutual connection. This takes 2&ndash;3 minutes per prospect.</li>
          <li><strong>Tier 3 (nearly impossible to ignore):</strong> A specific observation about their business with a concrete suggestion. {'"I noticed your pricing page doesn\'t have a FAQ section — companies in your space that added one saw 12% higher conversion."'} This takes 5&ndash;10 minutes per prospect but gets 30%+ reply rates.</li>
        </ul>

        <p>The templates below use Tier 2 and Tier 3 personalization. You will need to do the research, but the template structure saves you from starting with a blank page.</p>

        <h3 style={h3Style}>Subject Line Best Practices</h3>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Keep it under 6 words when possible. Shorter subject lines outperform longer ones by 10&ndash;15% in open rates.</li>
          <li>Lowercase is fine. {'"quick question about [COMPANY]"'} outperforms {'"Quick Question About [Company]"'} in most tests.</li>
          <li>Never use exclamation marks, ALL CAPS, or emojis in cold email subject lines.</li>
          <li>The best-performing pattern: <strong>[THEIR THING] + [YOUR ANGLE]</strong>. Example: {'"[COMPANY]\'s onboarding flow"'} or {'"idea for [PODCAST NAME]."'}</li>
        </ul>

        <h3 style={h3Style}>Optimal Length</h3>

        <p>The data from Lavender (analyzing 300M+ sales emails) is clear: <strong>50&ndash;125 words</strong> is the sweet spot for cold emails. Under 50 feels too sparse. Over 150 and reply rates drop sharply. Every template in this guide stays within this range for the initial touch.</p>

        <h3 style={h3Style}>Best Sending Times</h3>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>Best days:</strong> Tuesday, Wednesday, Thursday</li>
          <li><strong>Best times:</strong> 8:00&ndash;10:00 AM in the recipient&rsquo;s local time zone</li>
          <li><strong>Worst:</strong> Friday afternoon, weekends, Monday morning</li>
          <li>Always send in THEIR time zone, not yours</li>
        </ul>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Use <Link href="/email-subject-line-tester" style={{ color: '#3B5FFF' }}>our free Email Subject Line Tester</Link> to check your subject lines for spam triggers and optimize open rates before sending any campaign.
        </div>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 2: B2B SALES TEMPLATES               */}
        {/* ============================================ */}

        <h2 style={h2Style} id="b2b-sales">B2B Sales Cold Email Templates</h2>

        <p>These five templates cover the most common B2B sales scenarios. Each one is built on a proven framework and has been tested across thousands of campaigns. Replace the [BRACKETS] with your specifics.</p>

        {/* Template 1 */}
        <h3 style={h3Style}>1. The Mutual Connection Email</h3>
        <p>Best for: warm-ish outreach when you share a connection, community, or event with the prospect. Reply rates: 18&ndash;25%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[MUTUAL CONNECTION] suggested I reach out`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

[MUTUAL CONNECTION] mentioned you're [SPECIFIC THING — e.g., "scaling your sales team from 5 to 15 reps this quarter" or "looking for a better way to handle inbound leads"].

We helped [SIMILAR COMPANY] [SPECIFIC RESULT — e.g., "cut their lead response time from 4 hours to 8 minutes, which increased their close rate by 22%"].

Would it make sense to compare notes? Happy to share exactly what we did for [SIMILAR COMPANY] — no pitch, just the playbook.

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> The mutual connection in the subject line gets the open (people always open emails that name-drop someone they know). The body leads with THEIR situation, not your product. The CTA is low-friction: {'"compare notes"'} feels like a peer conversation, not a sales call.</p>

        {/* Template 2 */}
        <h3 style={h3Style}>2. The Case Study Email</h3>
        <p>Best for: prospects at companies similar to a client you have delivered results for. Reply rates: 12&ndash;18%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`how [SIMILAR COMPANY] [ACHIEVED RESULT]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

[SIMILAR COMPANY in their industry] was dealing with [PROBLEM YOUR PROSPECT LIKELY HAS — e.g., "low trial-to-paid conversion" or "reps spending 3 hours/day on manual data entry"].

We [WHAT YOU DID — e.g., "rebuilt their onboarding sequence" or "automated their CRM workflows"]. In 90 days:

- [METRIC 1 — e.g., "Trial-to-paid went from 8% to 19%"]
- [METRIC 2 — e.g., "Reps saved 12 hours/week"]
- [METRIC 3 — e.g., "Pipeline increased by $340K/quarter"]

[COMPANY NAME] looks like you might be in a similar spot. Worth a 15-minute call to see if the same approach applies?

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Social proof with specific numbers is the most persuasive element in cold email. Leading with the case study (not your product features) makes the prospect think {'"could I get those results too?"'} The bullet-point format makes the results scannable in 3 seconds.</p>

        {/* Template 3 */}
        <h3 style={h3Style}>3. The Straight to Business Email</h3>
        <p>Best for: busy executives (VP and above) who respect directness. Reply rates: 10&ndash;15%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[COMPANY NAME] + [YOUR COMPANY NAME]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`[FIRST NAME],

I'll keep this short.

We help [TYPE OF COMPANY — e.g., "B2B SaaS companies doing $2M-$10M ARR"] [CORE VALUE PROP — e.g., "reduce churn by 20-35% using automated health scoring"].

[ONE LINE OF PERSONALIZATION — e.g., "I noticed you just raised a Series A — growth-stage churn is usually the #1 thing investors ask about next."]

Worth a quick call this week?

[YOUR NAME]
[YOUR TITLE], [YOUR COMPANY]`}</div>
        </div>

        <p><strong>Why it works:</strong> Executives get 100+ emails per day. They respect brevity. This template is under 60 words, makes the value prop clear in one sentence, and includes a single line of personalization that shows you did your homework. The subject line pattern of {'"[Their Company] + [Your Company]"'} signals a business conversation, not a sales pitch.</p>

        {/* Template 4 */}
        <h3 style={h3Style}>4. The Value-First Email</h3>
        <p>Best for: prospects you have researched deeply and can offer a specific, actionable insight. Reply rates: 20&ndash;30%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`idea for [COMPANY NAME]'s [SPECIFIC THING]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I was looking at [SPECIFIC PAGE/FEATURE/CAMPAIGN — e.g., "your pricing page" or "your latest product launch on LinkedIn"] and noticed [SPECIFIC OBSERVATION — e.g., "you don't have a comparison table against competitors" or "the CTA is below the fold on mobile"].

Companies in [THEIR SPACE] that [SPECIFIC FIX — e.g., "added a side-by-side comparison chart"] typically see [SPECIFIC RESULT — e.g., "15-20% more demo requests"].

I put together a quick [DELIVERABLE — e.g., "mockup" or "2-minute Loom video" or "one-page audit"] showing what this could look like for [COMPANY NAME]. Want me to send it over?

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> This is the highest-converting cold email template because it gives before it asks. The prospect gets a genuinely useful observation about their business, a data point to back it up, and an offer to receive more value. The CTA ({'"Want me to send it over?"'}) is a micro-commitment that almost always gets a yes.</p>

        {/* Template 5 */}
        <h3 style={h3Style}>5. The Breakup Email</h3>
        <p>Best for: the final email in a sequence when previous emails got no response. Reply rates: 8&ndash;14% (higher than most follow-ups because of the psychological trigger).</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`closing the loop`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I've reached out a few times about [TOPIC — e.g., "helping [COMPANY NAME] reduce customer churn"]. I haven't heard back, which usually means one of three things:

1. You're not the right person (if so, who should I talk to?)
2. The timing isn't right (happy to reconnect in [TIMEFRAME])
3. You're not interested (totally fine — I'll stop emailing)

Which one is it? Either way, I'll respect your time.

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> The numbered options make it extremely easy to respond (many people just reply with {'"2"'} or {'"3"'}). The tone is respectful and non-pushy. And paradoxically, telling someone you will stop emailing them often triggers a reply because it creates a sense of finality and removes the perceived pressure. This template consistently rescues 8&ndash;14% of otherwise dead leads.</p>

        {/* CTA: Email Marketing Kit */}
        <div style={ctaBoxStyle}>
          <div style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px' }}>Want 100+ More Email Templates?</div>
          <p style={{ fontSize: '15px', opacity: 0.92, marginBottom: '0', lineHeight: '1.5' }}>
            The <strong>Email Marketing Kit</strong> includes 100+ plug-and-play email templates for sales, onboarding, follow-ups, newsletters, and cold outreach &mdash; plus subject line formulas, sending schedules, and A/B test frameworks.
          </p>
          <a href={EMAIL_KIT_URL} style={ctaButtonStyle}>Get the Email Marketing Kit &mdash; $29</a>
        </div>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 3: FREELANCER & AGENCY TEMPLATES      */}
        {/* ============================================ */}

        <h2 style={h2Style} id="freelancer-outreach">Freelancer &amp; Agency Outreach Templates</h2>

        <p>Freelancers and agencies live or die by their ability to generate new clients. These five templates cover the most effective outreach angles. If you are a freelancer, also check out the <Link href="/freelancer-kit" style={{ color: '#3B5FFF' }}>Freelancer Prompt Kit</Link> for 50+ AI prompts built specifically for proposals, pricing, and client communication.</p>

        {/* Template 6 */}
        <h3 style={h3Style}>6. The Portfolio Showcase Email</h3>
        <p>Best for: design, development, writing, or video freelancers with strong portfolio pieces. Reply rates: 10&ndash;18%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`loved [SPECIFIC THING ABOUT THEIR BRAND] — quick idea`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I've been following [COMPANY/BRAND NAME] for a while — [GENUINE COMPLIMENT about something specific, e.g., "your rebrand last quarter was sharp, especially the way you handled the typography on the landing pages"].

I'm a [YOUR ROLE — e.g., "freelance brand designer"] and I recently did a project for [CLIENT NAME] that has a similar vibe to what you're building. Here's the case study: [LINK TO ONE PORTFOLIO PIECE]

If you ever need extra [YOUR SKILL] bandwidth — whether it's a one-off project or ongoing — I'd love to be in the mix.

No rush. Just wanted to put this on your radar.

[YOUR NAME]
[PORTFOLIO URL]`}</div>
        </div>

        <p><strong>Why it works:</strong> The genuine compliment shows you actually know their brand (not a mass blast). Linking to ONE relevant portfolio piece (not your entire portfolio) respects their time. The low-pressure CTA ({'"just wanted to put this on your radar"'}) works because many hiring decisions happen weeks or months later, and this email stays in their inbox.</p>

        {/* Template 7 */}
        <h3 style={h3Style}>7. The Specific Problem Solver Email</h3>
        <p>Best for: consultants and specialists who can identify a specific gap in the prospect&rsquo;s business. Reply rates: 15&ndash;25%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[SPECIFIC PROBLEM] on [THEIR WEBSITE/PRODUCT]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I was checking out [COMPANY NAME]'s [SPECIFIC AREA — e.g., "checkout flow" or "blog SEO" or "email sequences"] and noticed [SPECIFIC ISSUE — e.g., "your checkout page has 7 form fields, which typically causes 30-40% cart abandonment above the baseline"].

I specialize in [YOUR SPECIALTY] and I've fixed this exact issue for [NUMBER] clients in [THEIR INDUSTRY]. Average result: [SPECIFIC METRIC — e.g., "18% reduction in cart abandonment within 30 days"].

Would a free 10-minute audit of [SPECIFIC AREA] be useful? I'll record a Loom walkthrough with specific fixes — yours to keep whether we work together or not.

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> This is the freelancer version of the Value-First template. Identifying a real, specific problem in their business is the strongest possible hook because it demonstrates expertise before you have even been hired. The free audit CTA gets high response rates because the prospect gets value regardless of whether they hire you.</p>

        {/* Template 8 */}
        <h3 style={h3Style}>8. The Before/After Pitch Email</h3>
        <p>Best for: anyone who can show a visual or quantitative before/after transformation. Reply rates: 12&ndash;20%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`what we did for [SIMILAR COMPANY] (before/after)`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

We recently [WHAT YOU DID — e.g., "redesigned the landing page" or "rewrote the ad copy" or "optimized the email sequence"] for [CLIENT NAME] in [THEIR INDUSTRY].

Before: [METRIC — e.g., "2.1% conversion rate, $42 CAC"]
After: [METRIC — e.g., "5.8% conversion rate, $18 CAC"]

I took a look at [COMPANY NAME]'s [RELEVANT AREA] and I think we could get a similar lift.

Want to see the full case study? I can also put together a quick [DELIVERABLE] specific to [COMPANY NAME].

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Before/after is one of the most psychologically compelling formats because it makes the prospect imagine their own transformation. The specific numbers make it concrete. Offering to send the full case study creates a natural next step without asking for a meeting.</p>

        {/* Template 9 */}
        <h3 style={h3Style}>9. The Niche Expert Intro Email</h3>
        <p>Best for: freelancers who specialize in a specific industry or technology. Reply rates: 12&ndash;18%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[THEIR INDUSTRY] [YOUR SPECIALTY] — quick intro`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I only work with [NICHE — e.g., "DTC skincare brands" or "Series A fintech companies" or "e-commerce stores doing $1M-$5M/year"]. It's all I do, which means I've seen what works and what doesn't for companies exactly like [COMPANY NAME].

A few things I've learned:
- [INSIGHT 1 — e.g., "Skincare brands that use UGC in email headers see 35% higher click rates than studio photography"]
- [INSIGHT 2 — e.g., "The highest-converting product page layout for skincare has the reviews ABOVE the product description"]
- [INSIGHT 3 — e.g., "SMS abandoned cart + email combo recovers 2.3x more revenue than email alone"]

These are patterns across [NUMBER] clients I've worked with in the last [TIMEFRAME].

If [COMPANY NAME] could use a [YOUR ROLE] who already knows your space inside and out, I'd love to chat.

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Niche expertise is the most valuable thing a freelancer can signal. The three insights prove you actually know their industry and are not a generalist fishing for any client. Each insight is designed to make them think {'"wait, are we doing that?"'} &mdash; which creates curiosity and a reason to reply.</p>

        {/* Template 10 */}
        <h3 style={h3Style}>10. The Referral Request Email</h3>
        <p>Best for: leveraging happy clients to get warm introductions to new prospects. Reply rates: 25&ndash;40% (the highest of any cold-ish email because it is semi-warm).</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`quick favor (30 seconds)`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [CLIENT FIRST NAME],

Thank you again for [SPECIFIC THING — e.g., "the kind words about the rebrand" or "renewing for another quarter"]. Working with [THEIR COMPANY] has been one of my favorite projects this year.

Quick question: do you know 1-2 other [THEIR ROLE/INDUSTRY — e.g., "marketing directors at DTC brands" or "startup founders in the health tech space"] who might need [YOUR SERVICE]?

No pressure at all — and I'd never reach out without your okay first. Just thought I'd ask since you've seen the work firsthand.

Thanks,
[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Asking for {'"1-2"'} people (not {'"anyone you know"'}) makes it specific and answerable. Promising not to reach out without their permission removes the fear that they are throwing a friend into a sales pitch. And happy clients genuinely want to help &mdash; they just need to be asked.</p>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 4: SAAS & STARTUP TEMPLATES          */}
        {/* ============================================ */}

        <h2 style={h2Style} id="saas-startup">SaaS &amp; Startup Cold Email Templates</h2>

        <p>Whether you are launching a product, finding your first 100 users, or raising money, cold email is one of the most efficient channels for startups. The <Link href="/saas-founder-kit" style={{ color: '#3B5FFF' }}>SaaS Founder Kit</Link> has 50+ prompts for everything from pitch decks to customer interviews, but these five templates cover the most critical outreach scenarios.</p>

        {/* Template 11 */}
        <h3 style={h3Style}>11. The Product Launch Outreach Email</h3>
        <p>Best for: getting early press, newsletter mentions, or influencer coverage for a new product. Reply rates: 8&ndash;15%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[YOUR PRODUCT] — built for [THEIR AUDIENCE]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I've been reading [THEIR NEWSLETTER/BLOG/PODCAST] for [TIMEFRAME] — especially loved [SPECIFIC PIECE OF CONTENT].

We just launched [YOUR PRODUCT], which [ONE SENTENCE VALUE PROP — e.g., "helps freelancers create professional invoices in 30 seconds using AI"]. I think it'd be a great fit for your [AUDIENCE/READERS/LISTENERS] because [REASON TIED TO THEIR CONTENT — e.g., "you write a lot about freelancer productivity tools, and this solves the invoicing pain point you mentioned in your March issue"].

Happy to give you [OFFER — e.g., "a free lifetime account" or "early access for your audience" or "an exclusive discount code for your readers"].

Would you be open to checking it out?

[YOUR NAME]
[PRODUCT URL]`}</div>
        </div>

        <p><strong>Why it works:</strong> Content creators and journalists get dozens of {'"please feature my product"'} emails. This template stands out because it references specific content they created, explains why the product fits their audience (not just why it is good in general), and offers something tangible for them or their audience.</p>

        {/* Template 12 */}
        <h3 style={h3Style}>12. The Partnership Proposal Email</h3>
        <p>Best for: proposing integrations, co-marketing, or affiliate relationships with complementary products. Reply rates: 10&ndash;18%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[YOUR PRODUCT] x [THEIR PRODUCT] — partnership idea`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I'm the [YOUR ROLE] at [YOUR COMPANY]. We build [ONE LINE ABOUT YOUR PRODUCT].

I noticed that [THEIR PRODUCT] and [YOUR PRODUCT] serve [OVERLAPPING AUDIENCE — e.g., "the same e-commerce store owners"] but solve different problems. A lot of our [NUMBER] users have been asking for [THING THEIR PRODUCT DOES — e.g., "better inventory management"] and I imagine some of your users need [THING YOUR PRODUCT DOES — e.g., "automated email sequences"].

I had a few ideas for how we could work together:
- [IDEA 1 — e.g., "Native integration between our platforms"]
- [IDEA 2 — e.g., "Co-authored guide for our combined audiences"]
- [IDEA 3 — e.g., "Affiliate/referral arrangement"]

Worth a 20-minute call to explore?

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Partnership emails fail when they are one-sided ({'"promote our product to your audience"'}). This template frames it as mutually beneficial from the first sentence. Listing three specific ideas shows you have thought about it and gives them something concrete to react to.</p>

        {/* Template 13 */}
        <h3 style={h3Style}>13. The Investor Cold Email</h3>
        <p>Best for: founders reaching out to VCs or angel investors who have not been introduced through a warm connection. Reply rates: 5&ndash;12% (higher for angels, lower for top-tier VCs).</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[YOUR COMPANY] — [ONE LINE TRACTION METRIC]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

[YOUR COMPANY] [ONE SENTENCE DESCRIPTION — e.g., "is an AI-powered invoicing tool for freelancers"].

We're at [TRACTION — e.g., "$18K MRR, growing 25% month-over-month, 1,200 paying users"]. [NOTABLE PROOF POINT — e.g., "We were #2 on Product Hunt last week" or "We're backed by [NOTABLE ANGEL]" or "Our NPS is 72"].

I've followed your investments in [RELEVANT PORTFOLIO COMPANIES — e.g., "FreshBooks and Wave"] and think [YOUR COMPANY] fits your thesis on [THEIR STATED INVESTMENT THESIS — e.g., "vertical SaaS for SMBs"].

Would you have 15 minutes this week for a quick intro?

I've attached a one-pager with the key metrics.

[YOUR NAME]
[YOUR TITLE], [YOUR COMPANY]`}</div>
        </div>

        <p><strong>Why it works:</strong> Investors filter on traction first. Leading with a specific metric in both the subject line and the first sentence gets their attention. Referencing their portfolio companies and thesis shows you did research and are not mass-emailing every VC on a Crunchbase list. Keep the email under 100 words &mdash; investors are the busiest people you will cold email.</p>

        {/* Template 14 */}
        <h3 style={h3Style}>14. The Beta Invite Email</h3>
        <p>Best for: recruiting early users for a product in beta. Reply rates: 15&ndash;25%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`beta invite — [YOUR PRODUCT] (built for [THEIR USE CASE])`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I'm building [YOUR PRODUCT] — [ONE SENTENCE — e.g., "an AI tool that writes cold email sequences in 60 seconds based on your ICP and value prop"].

I saw [PERSONALIZATION — e.g., "your tweet about spending 2 hours per week writing cold emails" or "your post about cold outreach being the #1 bottleneck for your agency"]. That's literally the problem we're solving.

We're in private beta with [NUMBER] users and I'd love to give you early access. It's free during beta, and I'll personally onboard you.

The only ask: honest feedback on what works and what doesn't.

Interested?

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Beta invites appeal to the prospect&rsquo;s desire to be an early adopter and get exclusive access. The personalization line shows you specifically picked THEM (not random people). Offering personal onboarding makes it feel VIP. And the ask for honest feedback positions them as a collaborator, not just a user.</p>

        {/* Template 15 */}
        <h3 style={h3Style}>15. The Customer Development Interview Email</h3>
        <p>Best for: pre-launch founders who need to validate their idea by talking to potential users. Reply rates: 15&ndash;30%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`quick question about [THEIR WORKFLOW/ROLE]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I'm researching how [THEIR ROLE — e.g., "marketing managers at mid-size SaaS companies"] handle [SPECIFIC WORKFLOW — e.g., "content repurposing across channels"].

I'm building something in this space and want to make sure I'm solving a real problem — not just what I think the problem is.

Would you have 15 minutes for a quick call? I'm not selling anything — genuinely just looking to learn from people who do this every day.

As a thank-you, I'm happy to [OFFER — e.g., "share the research findings when we're done" or "buy you a coffee via Venmo" or "give you free lifetime access when we launch"].

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> People love giving advice and sharing their expertise. The explicit {'"I\'m not selling anything"'} removes resistance. The thank-you offer makes it reciprocal. And the framing ({'"people who do this every day"'}) flatters their expertise. Customer development emails have some of the highest reply rates in cold email because the ask is genuinely low-stakes.</p>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 5: JOB SEEKER TEMPLATES              */}
        {/* ============================================ */}

        <h2 style={h2Style} id="job-seekers">Job Seeker Cold Email Templates</h2>

        <p>80% of jobs are filled through networking and direct outreach, not job boards. These templates help you tap the hidden job market and start conversations with hiring managers before a role is even posted.</p>

        {/* Template 16 */}
        <h3 style={h3Style}>16. The Hidden Job Market Email</h3>
        <p>Best for: reaching out to companies you want to work at, even if they do not have a posted opening. Reply rates: 10&ndash;20%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[YOUR SPECIALTY] who loves what [COMPANY NAME] is building`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I've been following [COMPANY NAME] since [SPECIFIC TIME OR EVENT — e.g., "your Series B announcement" or "you launched the redesigned dashboard"]. [SPECIFIC COMPLIMENT — e.g., "The way you handled the migration for existing users was really smart — most companies botch that."]

I'm a [YOUR ROLE] with [YEARS] years of experience in [RELEVANT AREA]. Most recently I [BIGGEST ACCOMPLISHMENT — e.g., "led the rebrand at [PREVIOUS COMPANY], which increased signups by 34%"].

I know you may not have an open role right now, but if [DEPARTMENT — e.g., "the design team"] ever needs extra horsepower, I'd love to be on your radar.

My portfolio: [LINK]

Thanks for reading,
[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> This email gets replies because it is not asking for a job &mdash; it is asking to be remembered. Hiring managers always have a mental list of people they would reach out to when a role opens. This email puts you on that list. The specific compliment about the company shows genuine interest, not a mass application.</p>

        {/* Template 17 */}
        <h3 style={h3Style}>17. The Informational Interview Email</h3>
        <p>Best for: learning about a role, company, or industry from someone who works there. Reply rates: 20&ndash;35%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`would love to learn from your experience at [COMPANY]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I came across your [WHERE YOU FOUND THEM — e.g., "talk at [CONFERENCE]" or "article about [TOPIC]" or "LinkedIn post about [SUBJECT]"] and it really resonated with me, especially [SPECIFIC POINT THEY MADE].

I'm a [YOUR CURRENT ROLE/SITUATION — e.g., "product designer transitioning into UX research" or "marketing manager exploring the move to a startup"]. I'd love to hear how you [SPECIFIC QUESTION — e.g., "made the transition from agency to in-house" or "built the research practice at [COMPANY] from scratch"].

Would you have 15-20 minutes for a virtual coffee sometime in the next couple weeks? I'd really appreciate the perspective.

Thanks,
[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Referencing specific content they created shows you are not blindly reaching out. The specific question gives them a clear idea of what you want to discuss (vague requests like {'"I\'d love to pick your brain"'} get ignored). And {'"virtual coffee"'} is less commitment than {'"meeting"'} or {'"call."'}</p>

        {/* Template 18 */}
        <h3 style={h3Style}>18. The Career Switcher Email</h3>
        <p>Best for: people changing industries or roles who need to address the {'"why should I talk to someone without direct experience"'} objection. Reply rates: 12&ndash;18%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[PREVIOUS INDUSTRY] → [NEW INDUSTRY] — a different perspective`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I'm a [CURRENT/PREVIOUS ROLE] making a deliberate move into [NEW FIELD/ROLE]. I know that probably raises the question: "why?"

Short answer: [REASON — e.g., "I spent 6 years building data dashboards for Fortune 500 retail, and I realized the most interesting data problems are in climate tech. That's what I want to work on."]

What I bring from [PREVIOUS FIELD]: [1-2 TRANSFERABLE SKILLS — e.g., "I've built real-time data pipelines at scale and managed cross-functional teams of 8. Both apply directly to what [COMPANY NAME] is building."]

I'm not looking for a favor — I've done my homework and I believe my [SPECIFIC SKILL] background would be genuinely useful to [THEIR TEAM/DEPARTMENT].

Would 15 minutes be possible? I'd love your honest take on how someone with my background could add value.

[YOUR NAME]
[LINKEDIN URL]`}</div>
        </div>

        <p><strong>Why it works:</strong> Career switchers usually fail by being apologetic or vague about why they are switching. This template addresses the skepticism head-on ({'"I know that raises the question"'}), gives a compelling reason, and connects the dots between past experience and future value. Asking for their {'"honest take"'} appeals to their desire to mentor and advise.</p>

        {/* Template 19 */}
        <h3 style={h3Style}>19. The Post-Networking Follow-Up Email</h3>
        <p>Best for: following up with someone you briefly met at a conference, event, or online community. Reply rates: 30&ndash;50% (high because it is semi-warm).</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`great meeting you at [EVENT NAME]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

It was great meeting you at [EVENT NAME] [WHEN — e.g., "yesterday" or "last Thursday"]. I really enjoyed our conversation about [SPECIFIC TOPIC YOU DISCUSSED — e.g., "the challenges of scaling a sales team past 10 reps"].

You mentioned [SPECIFIC THING THEY SAID — e.g., "that finding good SDRs has been your biggest bottleneck this quarter"]. That stuck with me because [RELEVANT CONNECTION — e.g., "I actually wrote a guide on that exact topic" or "we just solved that for a client in your space"].

[SPECIFIC FOLLOW-UP — e.g., "Here's the guide I mentioned: [LINK]" or "I'd love to continue the conversation over coffee" or "I connected you with [PERSON] on LinkedIn — I think you two would hit it off"].

Looking forward to staying in touch.

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Speed matters here &mdash; send within 24 hours while the event is still fresh. Referencing a specific detail from your conversation proves you were actually paying attention (most people send generic {'"nice to meet you"'} follow-ups). The specific follow-up action makes you memorable and valuable.</p>

        {/* Template 20 */}
        <h3 style={h3Style}>20. The Recruiter Outreach Email</h3>
        <p>Best for: proactively reaching out to recruiters at companies where you want to work. Reply rates: 15&ndash;25%.</p>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[YOUR ROLE] — [KEY DIFFERENTIATOR]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I saw that [COMPANY NAME] is hiring for [ROLE/DEPARTMENT — if a specific posting exists, reference it; if not, reference the team]. I wanted to reach out directly because I think my background is an unusually strong fit.

Quick highlights:
- [ACCOMPLISHMENT 1 — e.g., "Built and scaled the content team at [COMPANY] from 0 to $2M ARR attributed to content"]
- [ACCOMPLISHMENT 2 — e.g., "Increased organic traffic 340% in 12 months at [COMPANY]"]
- [ACCOMPLISHMENT 3 — e.g., "Previously at [NOTABLE COMPANY], managed $500K/month in paid spend"]

I'm most excited about [SPECIFIC THING ABOUT THE COMPANY — e.g., "the opportunity to build [COMPANY NAME]'s content engine from scratch during this growth phase"].

My resume is attached. Happy to chat whenever it's convenient.

[YOUR NAME]
[LINKEDIN URL]`}</div>
        </div>

        <p><strong>Why it works:</strong> Recruiters scan hundreds of applications. The bullet-point format makes your key accomplishments scannable in 5 seconds. Leading with {'"unusually strong fit"'} is a bold claim that makes them curious to verify. And expressing specific excitement about the company (not just the role) signals genuine interest.</p>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 6: FOLLOW-UP TEMPLATES               */}
        {/* ============================================ */}

        <h2 style={h2Style} id="follow-ups">Follow-Up Email Templates</h2>

        <p>Here is the number that should change how you think about follow-ups: <strong>55&ndash;60% of all cold email replies come from follow-up emails, not the first touch</strong>. If you send one email and stop, you are walking away from the majority of your potential replies. This five-email follow-up sequence covers Day 3 through the final breakup. Each one adds new value rather than just {'"bumping this up."'}</p>

        {/* Template 21 */}
        <h3 style={h3Style}>21. Follow-Up #1 &mdash; Day 3 (The Quick Bump)</h3>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`re: [ORIGINAL SUBJECT LINE]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

Just wanted to make sure this didn't get buried — I know [DAY YOU SENT IT — e.g., "Tuesdays"] can be hectic.

[ONE NEW SENTENCE OF VALUE — e.g., "I also came across this article about [RELEVANT TOPIC] that I thought you'd find useful: [LINK]"]

Worth a quick chat?

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Short, empathetic ({'"didn&rsquo;t get buried"'} acknowledges they are busy), and adds a small piece of new value. Three days is enough time that you are not being annoying but not so long that they have forgotten the first email.</p>

        {/* Template 22 */}
        <h3 style={h3Style}>22. Follow-Up #2 &mdash; Day 7 (The New Angle)</h3>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[DIFFERENT ANGLE] for [COMPANY NAME]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I reached out last week about [ORIGINAL TOPIC]. Different angle:

[NEW VALUE — e.g., "I just published a benchmark report on [RELEVANT METRIC] across 200 companies in [THEIR INDUSTRY]. [COMPANY NAME] would probably find the [SPECIFIC SECTION] section useful."

Or: "I noticed [RECENT COMPANY NEWS — e.g., "you just launched a new product line"]. That changes the math on [TOPIC FROM ORIGINAL EMAIL] — here's how: [1-2 SENTENCES]."]

[LOW-FRICTION CTA — e.g., "Want me to send the report?" or "Would a 10-minute walkthrough be helpful?"]

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> The {'"different angle"'} approach is critical for Day 7. If they did not reply to the first email, repeating the same pitch will not work. This template introduces new information (a report, a piece of news, a different benefit) that gives them a fresh reason to engage.</p>

        {/* Template 23 */}
        <h3 style={h3Style}>23. Follow-Up #3 &mdash; Day 14 (The Social Proof)</h3>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`[SIMILAR COMPANY] just [RESULT]`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

Quick update — [SIMILAR COMPANY in their space] just [SPECIFIC RESULT — e.g., "hit $100K/month in pipeline using the exact approach I mentioned in my first email" or "reduced their onboarding time by 60%"].

They're in [SAME INDUSTRY/SIZE/STAGE as prospect] and started in a very similar spot to where [COMPANY NAME] is now.

I put together a short summary of what they did. Want me to send it over?

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> Social proof from a similar company is the strongest follow-up weapon. It introduces a new success story that did not exist in the first email, creates fear of missing out ({'"they are like you and they got results"'}), and offers a low-commitment CTA (sending a summary, not booking a call).</p>

        {/* Template 24 */}
        <h3 style={h3Style}>24. Follow-Up #4 &mdash; Day 21 (The Direct Question)</h3>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`quick question`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

Honest question: is [TOPIC — e.g., "reducing churn" or "finding new clients" or "improving your cold outreach"] a priority for [COMPANY NAME] right now?

If yes, I have some ideas I think you'd find valuable.
If no, totally understand — just let me know and I'll stop reaching out.

[YOUR NAME]`}</div>
        </div>

        <p><strong>Why it works:</strong> By Day 21, you have earned the right to be direct. The yes/no question format makes it extremely easy to respond. Many people who have been meaning to reply but kept putting it off will finally respond to a simple binary question. The {'"I\'ll stop reaching out"'} line reduces pressure.</p>

        {/* Template 25 */}
        <h3 style={h3Style}>25. Follow-Up #5 &mdash; Day 30 (The Final Breakup)</h3>

        <div style={templateStyle}>
          <div style={templateLabelStyle}>Subject</div>
          <div style={templateBodyStyle}>{`closing your file`}</div>
        </div>
        <div style={templateStyle}>
          <div style={templateLabelStyle}>Body</div>
          <div style={templateBodyStyle}>{`Hi [FIRST NAME],

I've reached out a few times about [TOPIC] and haven't heard back. I'm going to assume the timing isn't right and close your file on my end.

If things change down the road, my inbox is always open: [YOUR EMAIL].

Wishing you and the [COMPANY NAME] team all the best.

[YOUR NAME]

P.S. In case it's useful later — [ONE FINAL RESOURCE — e.g., "here's a free guide on [RELEVANT TOPIC]: [LINK]"]. No strings attached.`}</div>
        </div>

        <p><strong>Why it works:</strong> The {'"closing your file"'} subject line triggers loss aversion &mdash; the psychological principle that people dislike losing access to something more than they enjoy gaining it. The gracious, no-pressure tone makes you look professional and mature. And the P.S. with a free resource leaves a positive final impression. Many breakup emails get replies weeks or months later when the timing finally becomes right.</p>

        {/* CTA: Email Subject Line Tester */}
        <div style={ctaBoxStyle}>
          <div style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px' }}>Test Your Subject Lines Before You Hit Send</div>
          <p style={{ fontSize: '15px', opacity: 0.92, marginBottom: '0', lineHeight: '1.5' }}>
            Your subject line determines whether your cold email gets opened or ignored. Use our <strong>free Email Subject Line Tester</strong> to check for spam triggers, optimize for open rates, and get AI-powered improvement suggestions.
          </p>
          <Link href="/email-subject-line-tester" style={ctaButtonStyle}>Try the Free Subject Line Tester</Link>
        </div>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 7: SUBJECT LINES                     */}
        {/* ============================================ */}

        <h2 style={h2Style} id="subject-lines">Cold Email Subject Lines That Get Opened</h2>

        <p>Your subject line is responsible for roughly 35&ndash;50% of whether someone opens your email. Here are 20+ proven subject lines organized by strategy, with an explanation of why each one works.</p>

        <h3 style={h3Style}>Personalized Subject Lines (Highest Open Rates: 55&ndash;70%)</h3>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>{`"[MUTUAL CONNECTION] suggested I reach out"`}</strong> &mdash; Name-dropping a mutual connection is the #1 open rate booster</li>
          <li><strong>{`"idea for [COMPANY NAME]'s [SPECIFIC THING]"`}</strong> &mdash; Specific to their business, impossible to ignore</li>
          <li><strong>{`"loved your [PODCAST/TALK/POST] on [TOPIC]"`}</strong> &mdash; Flattery that references something real they created</li>
          <li><strong>{`"[THEIR COMPANY] + [YOUR COMPANY]"`}</strong> &mdash; Signals a business conversation, not a pitch</li>
          <li><strong>{`"quick question about [THEIR PRODUCT/WORKFLOW]"`}</strong> &mdash; Curiosity + relevance = opens</li>
        </ul>

        <h3 style={h3Style}>Curiosity-Driven Subject Lines (Open Rates: 45&ndash;60%)</h3>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>{`"can I be honest?"`}</strong> &mdash; Creates an itch to know what comes next</li>
          <li><strong>{`"this might be a bad idea"`}</strong> &mdash; Pattern interrupt; does not look like a sales email</li>
          <li><strong>{`"you're probably not interested, but..."`}</strong> &mdash; Reverse psychology triggers {'"actually, let me see"'}</li>
          <li><strong>{`"I found something weird about [COMPANY]"`}</strong> &mdash; Curiosity gap specific to their business</li>
          <li><strong>{`"two options for [COMPANY NAME]"`}</strong> &mdash; Implies a decision, which requires opening to evaluate</li>
        </ul>

        <h3 style={h3Style}>Value-First Subject Lines (Open Rates: 40&ndash;55%)</h3>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>{`"how [SIMILAR COMPANY] [ACHIEVED RESULT]"`}</strong> &mdash; Case study in subject line form</li>
          <li><strong>{`"free [DELIVERABLE] for [COMPANY NAME]"`}</strong> &mdash; Works if the deliverable is genuinely useful (audit, mockup, report)</li>
          <li><strong>{`"[METRIC] improvement in [TIMEFRAME]"`}</strong> &mdash; Specific number + specific timeline = credibility</li>
          <li><strong>{`"[NUMBER] [THEIR INDUSTRY] companies are doing this"`}</strong> &mdash; Social proof + fear of missing out</li>
          <li><strong>{`"the [SPECIFIC THING] that's costing [COMPANY] [MONEY/TIME]"`}</strong> &mdash; Pain-point-first</li>
        </ul>

        <h3 style={h3Style}>Breakup and Follow-Up Subject Lines (Open Rates: 40&ndash;50%)</h3>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>{`"closing the loop"`}</strong> &mdash; Clean, professional, triggers loss aversion</li>
          <li><strong>{`"should I close your file?"`}</strong> &mdash; Implies finality, makes them want to keep the door open</li>
          <li><strong>{`"permission to close?"`}</strong> &mdash; Shorter variation, same psychology</li>
          <li><strong>{`"one last thing"`}</strong> &mdash; Columbo technique; curiosity about what the last thing could be</li>
          <li><strong>{`"re: [ORIGINAL SUBJECT]"`}</strong> &mdash; For early follow-ups, the reply-thread format boosts open rates by 20%+</li>
        </ul>

        <div style={proTipStyle}>
          <strong>Pro Tip:</strong> Never guess which subject line to use. Test them with our <Link href="/email-subject-line-tester" style={{ color: '#3B5FFF' }}>free Email Subject Line Tester</Link> or use the A/B testing framework in the <Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>Email Marketing Kit</Link>.
        </div>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 8: COMMON MISTAKES                   */}
        {/* ============================================ */}

        <h2 style={h2Style} id="mistakes">Common Mistakes That Kill Reply Rates</h2>

        <p>Even with perfect templates, these mistakes will tank your results. Here are the ten most common cold email killers and how to fix each one.</p>

        <h3 style={h3Style}>1. Writing About Yourself Instead of Them</h3>
        <p><strong>The mistake:</strong> {'"Hi, I\'m John, and I\'m the founder of XYZ. We offer a platform that helps businesses automate their workflows..."'} &mdash; three sentences about you before mentioning the prospect.</p>
        <p><strong>The fix:</strong> Lead with THEIR problem, THEIR company, or THEIR situation. Move your credentials to the signature or a brief parenthetical. The first two sentences must be about them.</p>

        <h3 style={h3Style}>2. Using {'"I Hope This Email Finds You Well"'}</h3>
        <p><strong>The mistake:</strong> This phrase is the universal signal that a mass email follows. Spam filters are trained on it. Recipients are conditioned to stop reading after it.</p>
        <p><strong>The fix:</strong> Delete it entirely. Start with a personalized observation or get straight to the point. Your first line should make the reader think {'"this person actually knows who I am."'}</p>

        <h3 style={h3Style}>3. Too Many Links and Images</h3>
        <p><strong>The mistake:</strong> Including your logo, company banner, three links, a calendar booking widget, and social media icons in a cold email.</p>
        <p><strong>The fix:</strong> One link maximum in your first email. No images. No HTML formatting. Plain text emails have higher deliverability and feel more like a personal message. Save the formatted emails for after they reply.</p>

        <h3 style={h3Style}>4. No Clear Call to Action</h3>
        <p><strong>The mistake:</strong> Ending with {'"Let me know if you\'re interested"'} or {'"Looking forward to hearing from you."'} These are passive and give the reader no specific action to take.</p>
        <p><strong>The fix:</strong> End with a specific, low-friction question. {'"Would a 10-minute call this week work?"'} or {'"Want me to send the case study?"'} or {'"Which option sounds closer to what you need?"'} Give them something concrete to respond to.</p>

        <h3 style={h3Style}>5. Sending the Same Email to Everyone</h3>
        <p><strong>The mistake:</strong> Writing one template and mail-merging it to 5,000 people with only the first name and company name swapped.</p>
        <p><strong>The fix:</strong> Personalize at least the first 1&ndash;2 sentences for every prospect. Reference something specific about their company, their content, or their role. Yes, this takes more time. But 50 highly personalized emails will generate more replies than 500 generic ones.</p>

        <h3 style={h3Style}>6. Following Up with {'"Just Checking In"'}</h3>
        <p><strong>The mistake:</strong> {'"Hi, just checking in on my email below."'} This adds zero value and makes you look like you have nothing new to say.</p>
        <p><strong>The fix:</strong> Every follow-up should add new information: a case study, a relevant resource, a new angle, or a recent piece of news about their company. See the follow-up templates in Section 6 above for exactly how to do this.</p>

        <h3 style={h3Style}>7. Writing Emails That Are Too Long</h3>
        <p><strong>The mistake:</strong> 300+ word cold emails that explain your entire value proposition, company history, and product features in a single message.</p>
        <p><strong>The fix:</strong> Your first cold email should be 50&ndash;125 words. That is it. Think of the first email as an opening line in a conversation, not a pitch deck. Your only goal is to get a reply, not to close the deal.</p>

        <h3 style={h3Style}>8. Not Warming Up Your Domain</h3>
        <p><strong>The mistake:</strong> Buying a new domain, connecting it to a cold email tool, and immediately blasting 200 emails. Your emails go straight to spam.</p>
        <p><strong>The fix:</strong> Warm up every new domain for 2&ndash;3 weeks using a warming service (Instantly, Warmbox, Mailreach). Start with 5 emails per day and ramp to 30&ndash;50. Send from Google Workspace or Microsoft 365, not a custom mail server.</p>

        <h3 style={h3Style}>9. Ignoring Send Time Optimization</h3>
        <p><strong>The mistake:</strong> Sending cold emails whenever you happen to write them &mdash; Friday at 4 PM, Saturday morning, or midnight.</p>
        <p><strong>The fix:</strong> Schedule all cold emails for Tuesday&ndash;Thursday, 8&ndash;10 AM in the recipient&rsquo;s local time zone. Most cold email tools support time-zone-aware scheduling. This alone can improve open rates by 15&ndash;20%.</p>

        <h3 style={h3Style}>10. Giving Up After One Email</h3>
        <p><strong>The mistake:</strong> Sending one email, not getting a reply, and moving on. You just left 55&ndash;60% of your potential replies on the table.</p>
        <p><strong>The fix:</strong> Build a 5-email sequence with follow-ups at Day 3, 7, 14, 21, and 30. Use the follow-up templates in Section 6. Persistence (done respectfully) is the single biggest lever in cold email performance.</p>

        {/* CTA: All Kits Bundle */}
        <div style={ctaBoxStyle}>
          <div style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px' }}>Get Every Template, Prompt, and Tool We Make</div>
          <p style={{ fontSize: '15px', opacity: 0.92, marginBottom: '0', lineHeight: '1.5' }}>
            The <strong>All Kits Bundle</strong> includes the Email Marketing Kit, Freelancer Kit, SaaS Founder Kit, Creator Kit, and every future kit we release &mdash; all for one price. 500+ templates, prompts, and frameworks.
          </p>
          <a href={BUNDLE_URL} style={ctaButtonStyle}>Get the All Kits Bundle &mdash; $97</a>
        </div>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* SECTION 9: FAQ                               */}
        {/* ============================================ */}

        <h2 style={h2Style} id="faq">Frequently Asked Questions</h2>

        <h3 style={h3Style}>What is a good reply rate for cold emails in 2026?</h3>
        <p>A good cold email reply rate in 2026 is <strong>5&ndash;15%</strong> for B2B sales outreach and <strong>10&ndash;25%</strong> for targeted freelancer or agency outreach. The industry average is 3&ndash;5%, but the templates in this guide are designed to hit the higher end. The biggest factors are personalization quality, subject line, email length (50&ndash;125 words), and follow-up persistence. Campaigns with 4&ndash;5 follow-ups typically get 2&ndash;3x more total replies than single-email campaigns.</p>

        <h3 style={h3Style}>How many follow-up emails should I send?</h3>
        <p>Send <strong>4&ndash;5 follow-ups</strong> after your initial cold email, spaced at Day 3, Day 7, Day 14, Day 21, and Day 30. Data from Woodpecker and Lemlist shows that 55&ndash;60% of all cold email replies come from follow-ups, not the first email. Each follow-up should add new value (a case study, resource, or new angle) rather than just saying {'"checking in."'} See the <a href="#follow-ups" style={{ color: '#3B5FFF' }}>follow-up templates section</a> for exact copy.</p>

        <h3 style={h3Style}>How long should a cold email be?</h3>
        <p>The sweet spot is <strong>50&ndash;125 words</strong>. Data from Lavender (analyzing 300M+ sales emails) shows this range has the highest reply rates. Under 50 words feels too sparse to be compelling. Over 150 words and reply rates drop sharply. Your first cold email should be scannable in under 10 seconds &mdash; short paragraphs, no walls of text, and get to the point in the first line.</p>

        <h3 style={h3Style}>What is the best time to send cold emails?</h3>
        <p><strong>Tuesday through Thursday, 8:00&ndash;10:00 AM</strong> in the recipient&rsquo;s local time zone. Tuesday at 9 AM consistently ranks as the single best send time. Avoid Mondays (inbox overload) and Fridays (people checking out). Never send B2B cold emails on weekends. Always send in THEIR time zone, not yours &mdash; most cold email tools support time-zone-aware scheduling.</p>

        <h3 style={h3Style}>Do cold emails still work with AI spam filters in 2026?</h3>
        <p>Yes, but the rules are stricter. Google and Microsoft use AI-powered filters that detect mass-sent templates. To land in the inbox: warm up your domain for 2&ndash;3 weeks, keep volume under 50 emails per inbox per day, authenticate with SPF/DKIM/DMARC, use a separate domain for outreach, avoid spam trigger words, and write emails that sound like a human writing to one person. The templates in this guide are designed to pass modern spam filters.</p>

        <h3 style={h3Style}>Should I use AI to write cold emails?</h3>
        <p>AI is great for <strong>drafting templates and generating variations</strong>, but you should always customize the output. Use AI for first drafts, follow-up variations, subject line brainstorming, and scaling personalization. Do not use AI to send completely unreviewed emails or blast the same AI-generated message to thousands of people. The best approach: use AI to create a framework (like these templates), then manually personalize the first 1&ndash;2 sentences for each prospect. Try our <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>free AI Prompt Generator</Link> to create custom email prompts for your specific use case.</p>

        <hr style={hrStyle} />

        {/* ============================================ */}
        {/* FINAL CTA                                    */}
        {/* ============================================ */}

        <h2 style={h2Style}>Start Sending Cold Emails That Get Replies</h2>

        <p>You now have 25 templates, 20+ subject lines, a complete follow-up sequence, and the fundamentals of cold email deliverability in 2026. The difference between these templates and the ones that get ignored is <strong>personalization</strong> and <strong>persistence</strong>. Take the templates, fill in the brackets with real research on real prospects, and commit to the full follow-up sequence.</p>

        <p>Here are two resources to help you execute:</p>

        <div style={ctaBoxStyle}>
          <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Free: Email Subject Line Tester</div>
          <p style={{ fontSize: '15px', opacity: 0.92, marginBottom: '0', lineHeight: '1.5' }}>
            Check your subject lines for spam triggers, get open rate predictions, and AI-powered improvement suggestions.
          </p>
          <Link href="/email-subject-line-tester" style={ctaButtonStyle}>Test Your Subject Lines Free</Link>
        </div>

        <div style={{ ...ctaBoxStyle, marginTop: '16px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Email Marketing Kit &mdash; $29</div>
          <p style={{ fontSize: '15px', opacity: 0.92, marginBottom: '0', lineHeight: '1.5' }}>
            100+ plug-and-play email templates, subject line formulas, sending schedules, and A/B test frameworks for sales, outreach, newsletters, and automation.
          </p>
          <a href={EMAIL_KIT_URL} style={ctaButtonStyle}>Get the Email Marketing Kit</a>
        </div>

        <p style={{ marginTop: '32px' }}>More resources:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '32px' }}>
          <li><Link href="/blog/ai-email-marketing-prompts-2026" style={{ color: '#3B5FFF' }}>20 AI Prompts for Email Marketing in 2026</Link></li>
          <li><Link href="/email-marketing-kit" style={{ color: '#3B5FFF' }}>Email Marketing Kit (full details)</Link></li>
          <li><Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>Free AI Prompt Generator</Link></li>
          <li><Link href="/tools" style={{ color: '#3B5FFF' }}>All Free Tools</Link></li>
          <li><Link href="/prompts/chatgpt-cold-email" style={{ color: '#3B5FFF' }}>10 Free ChatGPT Prompts for Cold Email</Link> &mdash; copy-paste templates ready to use</li>
        </ul>

        <EmailCapture />
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          h1 {
            font-size: 1.5rem !important;
          }
          h2 {
            font-size: 1.2rem !important;
          }
          h3 {
            font-size: 1.05rem !important;
          }
          div[style*="maxWidth: '720px'"] {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </Layout>
  );
}
