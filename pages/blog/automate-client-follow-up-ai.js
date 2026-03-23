import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function AutomateClientFollowUpAI() {
  const title = 'How to Automate Client Follow-Up with AI (No Code Required)';
  const description = 'Learn how to automate client follow-up with AI using no-code tools and proven prompt templates. Respond faster, close more deals, and stop losing leads to slow follow-up.';
  const url = 'https://www.midastools.co/blog/automate-client-follow-up-ai';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="automate client follow-up AI, AI follow-up emails, automated lead response, AI sales follow-up, no-code automation, client follow-up templates, AI email automation, speed to lead" />
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
          How to Automate Client Follow-Up with AI (No Code Required)
        </h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '40px' }}>Mar 22, 2026 &middot; Rey Midas</p>

        <p>A lead fills out your contact form. They are interested. They are ready to talk. They might even have their credit card within arm&rsquo;s reach.</p>
        <p>You respond 47 hours later.</p>
        <p>They&rsquo;ve already hired someone else.</p>
        <p>This is not a hypothetical. This is the <strong>average reality</strong> for most businesses. According to research from Lead Response Management, the average B2B company takes <strong>42 hours</strong> to respond to a new lead. Meanwhile, the data is brutally clear: responding within <strong>5 minutes</strong> makes you <strong>21x more likely</strong> to qualify that lead than if you wait just 30 minutes.</p>
        <p>Twenty-one times. Not 21 percent. Twenty-one <em>times</em>.</p>
        <p>Every slow follow-up is a lost sale. Every &ldquo;I&rsquo;ll get to it tomorrow&rdquo; is money walking out the door. And you cannot fix this by &ldquo;trying harder&rdquo; or hiring another assistant. You fix it by automating the entire follow-up process with AI &mdash; no code, no developers, no complex integrations required.</p>
        <p>Here is exactly how to do it.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>The Problem: Manual Follow-Up Does Not Scale</h2>

        <p>Let&rsquo;s do the math on what slow follow-up actually costs.</p>
        <p>Say you get <strong>50 new leads per month</strong>. Your average deal is worth <strong>$2,000</strong>. With manual follow-up (checking email when you remember, drafting responses from scratch, forgetting to send the second touch), you convert about <strong>5%</strong>. That is 2.5 deals, or <strong>$5,000/month</strong>.</p>
        <p>Now imagine you respond to every lead in under 5 minutes with a personalized, helpful message. You send a check-in at 24 hours. A nurture email at one week. A re-engagement at 30 days. The research shows this kind of structured follow-up lifts conversion rates to <strong>15-20%</strong>.</p>
        <p>At 15%, that is 7.5 deals. <strong>$15,000/month.</strong></p>
        <p>That is $10,000/month you are leaving on the table because you &ldquo;got busy&rdquo; and forgot to reply.</p>
        <p>The problem is not laziness. The problem is that manual follow-up requires you to:</p>
        <ul>
          <li>Remember to check for new leads (you won&rsquo;t)</li>
          <li>Draft a personalized reply from scratch every time (takes 10-15 minutes)</li>
          <li>Track who needs a second touch and when (you&rsquo;ll lose track by Wednesday)</li>
          <li>Write re-engagement emails for cold leads (this never happens)</li>
          <li>Do all of this while also doing the actual work that pays you</li>
        </ul>
        <p>AI solves every single one of these. Not with some enterprise platform that costs $500/month. With prompts, templates, and simple automations you can set up this afternoon.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Step 1: Set Up AI Email Templates for Every Stage</h2>

        <p>The first step is building your follow-up library. You need three core templates: the instant response, the 24-hour check-in, and the one-week nurture. Here are the exact prompts to generate them.</p>

        <p><strong>Template 1: Instant Response (send within 5 minutes)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write an instant response email to a new lead.

Lead name: [LEAD NAME]
They inquired about: [SERVICE/PRODUCT]
How they found us: [SOURCE — website form, referral, social media, etc.]
Their specific question or request: [THEIR MESSAGE]

Rules:
- Answer their question directly in the first sentence
- Add one piece of unexpected value (a relevant tip, stat, or resource)
- Include a low-friction next step (reply to this email, pick a time, yes/no question)
- Under 80 words
- Tone: helpful, knowledgeable, human — not salesy
- Do NOT use "I'd love to chat" or "Let's hop on a call"`}
        </div>

        <p><strong>Template 2: 24-Hour Check-In</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a 24-hour follow-up email to [LEAD NAME] who inquired about [SERVICE/PRODUCT] yesterday but hasn't replied.

Context from their original inquiry: [KEY DETAIL FROM THEIR MESSAGE]

Rules:
- Do NOT say "just following up" or "circling back"
- Lead with a new piece of value: a relevant case study result, useful resource, or answer to a common question about [SERVICE/PRODUCT]
- Reference something specific from their original message to show you paid attention
- End with a simple yes/no question
- Under 60 words
- Tone: casual, helpful, zero pressure`}
        </div>

        <p><strong>Template 3: One-Week Nurture</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a one-week nurture email to [LEAD NAME] who asked about [SERVICE/PRODUCT] a week ago.

What we know about them: [ANY DETAILS — industry, company size, specific pain point]

Rules:
- Open with something genuinely useful — a tip, framework, or insight related to their situation
- Naturally connect it to how [YOUR COMPANY] helps with exactly that
- Include a specific result: "[CLIENT TYPE] used this approach and [SPECIFIC OUTCOME] in [TIMEFRAME]"
- CTA: Would it help if I sent you [SPECIFIC RESOURCE]?
- Under 100 words
- No guilt, no "I noticed you haven't replied"`}
        </div>

        <p>Run each prompt once, customize the output for your business, and save them. You now have a three-touch follow-up sequence that took 15 minutes to build and will work for every lead that comes in.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Step 2: Automate the Trigger</h2>

        <p>Templates are useless if you still have to remember to send them. The power of AI follow-up is that <strong>you don&rsquo;t think about it at all</strong>.</p>
        <p>Here is how to set up automatic triggers with zero code:</p>
        <p><strong>For the instant response:</strong> Most form builders (Typeform, Jotform, even Google Forms) integrate with email tools through Zapier or Make. The flow is simple: New form submission triggers an AI step that personalizes your template, then sends the email. Total setup time: 20 minutes.</p>
        <p><strong>For the 24-hour and one-week follow-ups:</strong> Use a delay step in your automation. The same tools let you add a &ldquo;wait 24 hours&rdquo; step before sending the next email. Add a condition: only send if the lead hasn&rsquo;t replied yet.</p>
        <p>Here is the prompt to help you design your automation logic:</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Design an automated follow-up sequence for my [BUSINESS TYPE].

Lead source: [WHERE LEADS COME FROM — website form, DMs, email, etc.]
Tools I already use: [EMAIL TOOL, CRM, FORM BUILDER]
Average deal value: [AMOUNT]
Current response time: [HOURS/DAYS]

Create a step-by-step automation blueprint:
1. Trigger event
2. Immediate action (with email template)
3. 24-hour follow-up (with conditions)
4. 1-week follow-up (with conditions)
5. 30-day re-engagement (with conditions)

For each step: what tool handles it, what the email says (summary), and what condition determines if it fires. Keep it simple — I want to set this up in one afternoon with no coding.`}
        </div>

        <p>The key insight: you are not replacing human connection. You are ensuring <strong>every lead gets a fast, thoughtful first response</strong> while you are doing the work that actually requires your brain. The AI handles the speed. You handle the relationship once they reply.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <div style={{ marginTop: '48px', padding: '32px', background: '#fffbf0', border: '1px solid #f0d060', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Stop building templates from scratch</h3>
          <p style={{ margin: '0 0 16px', color: '#555', fontSize: '15px' }}>The <strong>Freelancer Automation Kit</strong> includes 100+ pre-built AI prompts for client follow-up, proposals, invoicing, onboarding, and every repetitive task that eats your day. Works with ChatGPT, Claude, and any LLM. $39 one-time.</p>
          <a href="https://buy.stripe.com/14k4gycmvePreZ26oqcMM0e" style={{ display: 'inline-block', background: '#b8860b', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Freelancer Kit &mdash; $39
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Step 3: Personalize at Scale</h2>

        <p>Generic follow-ups get ignored. &ldquo;Hi [FIRST NAME], just checking in!&rdquo; is the email equivalent of a cold call from an unknown number. People delete it without reading.</p>
        <p>AI lets you personalize every message based on what you actually know about the lead &mdash; without spending 10 minutes researching each one. The trick is feeding the AI the right variables.</p>

        <p><strong>Personalized follow-up prompt:</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a personalized follow-up email using these lead details:

Name: [LEAD NAME]
Company: [COMPANY NAME]
Industry: [INDUSTRY]
Company size: [EMPLOYEE COUNT or REVENUE RANGE]
Their specific inquiry: [WHAT THEY ASKED ABOUT]
Pain point mentioned: [PROBLEM THEY DESCRIBED]
How they found us: [REFERRAL, GOOGLE, SOCIAL, etc.]

Rules:
- Reference their specific industry and pain point in the first sentence
- Include one insight specific to [INDUSTRY] companies of their size
- Mention a result from a similar client: "[SIMILAR CLIENT TYPE] reduced [METRIC] by [PERCENTAGE] in [TIMEFRAME]"
- If referred, mention the referrer by name
- CTA tailored to their stage: if just browsing → resource, if comparing options → case study, if ready to buy → direct booking link
- Under 100 words
- Sound like a human who actually read their message`}
        </div>

        <p>The variable data comes from whatever your form collects. Even basic fields like industry, company name, and &ldquo;how did you hear about us&rdquo; give the AI enough to write something that feels personal. The lead does not know it took you 30 seconds instead of 15 minutes. They just know you clearly paid attention to what they said.</p>
        <p>That is the difference between a reply rate of 8% and a reply rate of 35%.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Step 4: The Re-Engagement Sequence for Cold Leads</h2>

        <p>Here is the painful truth: most businesses have a graveyard of leads who showed interest weeks or months ago and never got a second look. These are not dead leads. They are <strong>neglected</strong> leads. And re-engaging them is some of the highest-ROI work you can do, because the acquisition cost is already paid.</p>
        <p>The re-engagement sequence is a 3-touch campaign designed to revive cold leads without sounding desperate. Here are the prompts:</p>

        <p><strong>Touch 1: The Value Bomb (Day 1)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a re-engagement email to [LEAD NAME] who inquired about [SERVICE/PRODUCT] [TIMEFRAME] ago and went silent.

Rules:
- Do NOT reference the silence or say "it's been a while"
- Open with something new: a recent result, industry trend, or updated offering
- Make the email 100% valuable even if they never reply — share a genuinely useful tip or resource
- End with: "Thought of you when I saw this. Want me to send more details?"
- Under 80 words
- Tone: confident, helpful, not needy`}
        </div>

        <p><strong>Touch 2: The Social Proof Play (Day 5)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a second re-engagement email to [LEAD NAME], a [THEIR ROLE] at [THEIR COMPANY] in [INDUSTRY].

They originally asked about [SERVICE/PRODUCT]. This is touch #2 — they did not reply to the first re-engagement email.

Rules:
- Lead with a mini case study: "[SIMILAR COMPANY TYPE] was dealing with [SIMILAR PROBLEM]. We helped them [SPECIFIC RESULT] in [TIMEFRAME]."
- Connect it to their situation naturally
- No pressure — frame it as sharing something relevant
- End with a binary question: "Is [PROBLEM] still on your radar, or have you solved it?"
- Under 80 words`}
        </div>

        <p><strong>Touch 3: The Clean Break (Day 12)</strong></p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Write a final re-engagement email to [LEAD NAME] who has not responded to two previous emails.

Rules:
- Keep it extremely short (under 40 words)
- Acknowledge directly: "I don't want to clutter your inbox"
- Give them two options: "Reply YES if you'd like me to keep you in the loop on [TOPIC], or I'll assume the timing isn't right and stop reaching out"
- No hard feelings tone
- This email's job is to get a binary response, not to sell`}
        </div>

        <p>That third email is the secret weapon. The &ldquo;clean break&rdquo; email consistently gets the highest reply rate of any follow-up type &mdash; often 15-25%. People who have been ignoring you will suddenly reply &ldquo;YES actually, let&rsquo;s talk&rdquo; because you gave them a guilt-free way back in.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Real Numbers: Manual vs. AI Follow-Up</h2>

        <p>Here is what this looks like in practice. Same business, same leads, same offer &mdash; the only change is how follow-up gets handled.</p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1a1a1a' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px' }}>Metric</th>
                <th style={{ textAlign: 'center', padding: '12px 16px' }}>Manual Follow-Up</th>
                <th style={{ textAlign: 'center', padding: '12px 16px' }}>AI-Automated</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Average response time</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>42 hours</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>Under 5 minutes</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Leads that get any follow-up</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>40-60%</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>100%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Leads that get 3+ touches</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>Less than 10%</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>100%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Time spent per lead on follow-up</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>15-20 min</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>Under 2 min</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Reply rate on first email</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>8-12%</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>25-35%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Lead-to-customer conversion</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>5-8%</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>15-25%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>Cold leads re-engaged per month</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>0</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>10-20%</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px', fontWeight: '700' }}>Monthly revenue (50 leads, $2K deal)</td>
                <td style={{ textAlign: 'center', padding: '12px 16px' }}>$5,000</td>
                <td style={{ textAlign: 'center', padding: '12px 16px', fontWeight: '700', color: '#2a7d2a' }}>$15,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The numbers do not lie. The businesses that respond fast and follow up consistently are not working harder. They are just not leaking revenue through the cracks of their inbox.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>The Biggest Objection (And Why It Is Wrong)</h2>

        <p>&ldquo;But my clients will know it&rsquo;s AI.&rdquo;</p>
        <p>No, they will not. Not if you do it right. The prompts above produce emails that sound like a thoughtful human who happens to be really fast at replying. The personalization variables ensure every message references specific details from the lead&rsquo;s inquiry. No one reads an 80-word email that directly answers their question and thinks &ldquo;this must be a robot.&rdquo;</p>
        <p>You know what clients <em>do</em> notice? Silence. A 3-day wait. A generic &ldquo;Thanks for your interest, we&rsquo;ll be in touch.&rdquo; That is what kills deals &mdash; not fast, relevant replies.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>How to Start Today</h2>

        <p>You do not need to build the entire system at once. Here is the 30-minute version:</p>
        <ol>
          <li><strong>Grab the prompts above</strong> and generate your three core templates (instant response, 24-hour, one-week). Takes 10 minutes.</li>
          <li><strong>Save them</strong> as canned responses in your email client (Gmail has &ldquo;templates,&rdquo; Outlook has &ldquo;Quick Parts&rdquo;). Takes 5 minutes.</li>
          <li><strong>Set a phone alarm</strong> to check for new leads 3x per day (9am, 1pm, 5pm). Use the AI to personalize and send within 2 minutes. Takes 15 minutes per day total.</li>
        </ol>
        <p>That is the manual version. It alone will double your reply rates. When you are ready, automate the triggers with Zapier or Make and take yourself out of the loop entirely.</p>
        <p>The difference between businesses that grow and businesses that stall is rarely the product, the market, or the talent. It is the follow-up. The leads are already coming in. <strong>Stop letting them die in your inbox.</strong></p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <div style={{ marginTop: '48px', padding: '32px', background: '#fffbf0', border: '1px solid #f0d060', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Get all follow-up templates pre-built</h3>
          <p style={{ margin: '0 0 16px', color: '#555', fontSize: '15px' }}>Stop writing prompts from scratch. The <strong>Freelancer Automation Kit</strong> and <strong>Small Business AI Kit</strong> include every follow-up template in this article plus hundreds more &mdash; proposals, onboarding, invoicing, re-engagement, client management. Ready to customize, works with any AI tool.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href="https://buy.stripe.com/14k4gycmvePreZ26oqcMM0e" style={{ display: 'inline-block', background: '#b8860b', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Freelancer Kit &mdash; $39
            </a>
            <a href="https://buy.stripe.com/3cIaEW6SbcHfed6egicMM0c" style={{ display: 'inline-block', background: '#b8860b', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Small Business Kit &mdash; $39
            </a>
            <a href="https://buy.stripe.com/aEUbJ01xR0YxgligkocMM0g" style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#888', fontSize: '13px' }}>The Bundle includes every kit we sell &mdash; best value if you want the complete AI toolkit for your business.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#888', fontSize: '14px' }}>
          <em>Rey Midas builds <a href="https://www.midastools.co" style={{ color: '#b8860b' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#b8860b' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}
