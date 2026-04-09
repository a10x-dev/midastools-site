import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const RESUME_KIT_URL = 'https://buy.stripe.com/4gM8wO6Sb4aJ4Cw3BEcMM0j';
const BUNDLE_URL = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function AIResumePromptsChatGPT2026() {
  const title = '15 ChatGPT Prompts to Write a Perfect Resume in 2026';
  const description = 'The best ChatGPT resume prompts for 2026. 15 copy-paste AI prompts for resume writing, cover letters, LinkedIn optimization, interview prep, and salary negotiation. Land more interviews and get hired faster.';
  const url = 'https://midastools.co/blog/ai-resume-prompts-chatgpt-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
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
        name: 'Can ChatGPT write a resume for me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ChatGPT can write and optimize your resume. However, the quality depends entirely on your prompt. Generic prompts like "write me a resume" produce generic results. The best approach is to provide ChatGPT with your experience details, the target job description, and specific instructions about formatting, keywords, and achievement-focused language. The prompts in this guide are designed to produce ATS-optimized, recruiter-tested resume content that actually gets interviews.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will an AI-written resume pass ATS screening?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if you prompt it correctly. ATS (Applicant Tracking Systems) scan for keyword matches between your resume and the job description. The key is to extract keywords from the job posting and instruct ChatGPT to naturally incorporate them into your bullet points. The resume prompts in this guide specifically include ATS optimization instructions, including keyword mirroring, proper formatting, and section structure that ATS software can parse correctly.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it ethical to use AI to write my resume?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Using AI to write your resume is no different from using Grammarly, hiring a professional resume writer, or using a resume template. The content is still your real experience, achievements, and skills — AI just helps you present them more effectively. Recruiters care about whether your qualifications match the role, not whether you used a tool to polish your language. That said, never fabricate experience or skills. Use AI to better articulate what you have actually done.'
        }
      },
      {
        '@type': 'Question',
        name: 'What AI tool is best for resume writing in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT (GPT-4o) and Claude are the two best AI tools for resume writing in 2026. ChatGPT is the most popular and handles structured formatting well. Claude excels at nuanced, natural-sounding language that avoids the "AI voice." Both work with the prompts in this guide. For best results, use ChatGPT Plus or Claude Pro — the free tiers work but have usage limits that can interrupt your workflow during a job search sprint.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many versions of my resume should I have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You should have one master resume with all your experience, plus a tailored version for every job you apply to. This sounds like a lot of work, but with AI prompts it takes 5 minutes per application instead of 2 hours. The ATS keyword matching prompt in this guide specifically helps you create targeted versions by extracting keywords from each job description and weaving them into your existing bullet points. Candidates who tailor their resume to each job description are 3x more likely to get an interview.'
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

  return (
    <Layout>
      <Head>
        <title>{title} | Midas Tools</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="ChatGPT resume prompts, AI resume, ChatGPT resume builder, AI resume writer, best resume prompts, AI cover letter, ChatGPT interview prep, AI salary negotiation, LinkedIn optimization AI, resume prompts 2026" />
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
          15 ChatGPT Prompts to Write a Perfect Resume in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 26, 2026 &middot; Rey Midas</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p>Here is the reality of job searching in 2026: <strong>75% of resumes are rejected by ATS software before a human ever reads them</strong>. The average corporate job posting receives 250+ applications. Recruiters spend 6&ndash;7 seconds scanning the resumes that make it through.</p>

        <p>If your resume is not keyword-optimized, achievement-focused, and formatted for both machines and humans, you are invisible. It does not matter how qualified you are.</p>

        <p>The good news? ChatGPT can transform your resume from a generic list of job duties into a targeted, ATS-optimized document that actually gets interviews &mdash; if you know how to prompt it correctly.</p>

        <p>Most people type &ldquo;write me a resume&rdquo; and get garbage. The prompts below are different. They use proven frameworks &mdash; the XYZ formula for achievements, STAR method for behavioral answers, value-based positioning for salary negotiation &mdash; and they are designed to be customized with your real experience.</p>

        <p>Every prompt includes <strong>[brackets]</strong> where you fill in your details. Copy the prompt, replace the brackets, paste into ChatGPT (or <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>our free prompt generator</Link>), and get results in seconds.</p>

        <p>These 15 prompts cover the entire job search pipeline: resume writing, cover letters, LinkedIn, interviews, and salary negotiation.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: WHY AI IS THE NEW RESUME ADVANTAGE */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Why AI Is the New Resume Advantage</h2>

        <p>The job market has fundamentally changed. Here are the numbers that matter:</p>

        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>75% of resumes</strong> are filtered out by ATS before reaching a human recruiter (Jobscan, 2026).</li>
          <li><strong>63% of recruiters</strong> prefer resumes tailored to the specific job description (LinkedIn Talent Solutions).</li>
          <li>The average job seeker spends <strong>11 hours per week</strong> on applications. AI cuts that to under 3.</li>
          <li>Candidates who tailor their resume to each job posting are <strong>3x more likely</strong> to get an interview.</li>
          <li><strong>40% of hiring managers</strong> say a strong LinkedIn profile influenced their decision to interview a candidate.</li>
        </ul>

        <p>The people landing multiple interviews right now are not necessarily more qualified than you. They are using AI to produce more applications, at higher quality, in less time. A tailored resume that took someone 2 hours to write manually can be generated in 5 minutes with the right prompt.</p>

        <p>That is not cheating. That is leverage. The same way a calculator does not make you bad at math, AI prompts do not make you less qualified &mdash; they help you present your real experience in the most compelling way possible.</p>

        <p>Let us get into the prompts.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: RESUME WRITING PROMPTS             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>5 Resume Writing Prompts</h2>
        <p>These prompts transform your experience into achievement-focused, ATS-optimized bullet points that recruiters actually want to read. Each one targets a different part of the resume writing process.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. The ATS Keyword Optimizer</h3>
        <p>This is the single most impactful prompt for getting past ATS filters. It extracts the exact keywords from a job description and weaves them into your existing resume bullets.</p>
        <div style={promptBlockStyle}>
{`I'm applying for [Job Title] at [Company Name]. Here is the job description:

[Paste the full job description]

Here is my current resume:

[Paste your current resume text]

Do the following:
1. Extract the top 20 keywords and phrases from the job description that an ATS would scan for (hard skills, tools, certifications, industry terms).
2. Identify which of these keywords are already in my resume and which are missing.
3. Rewrite my bullet points to naturally incorporate the missing keywords WITHOUT fabricating experience I don't have.
4. For each bullet point, lead with a strong action verb and use the XYZ formula: "Accomplished [X] as measured by [Y] by doing [Z]."
5. Keep each bullet point under 2 lines.
6. Flag any keywords from the job description that I genuinely cannot claim — I'll need to address those in my cover letter instead.`}
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. The Achievement Bullet Point Rewriter</h3>
        <p>Most resumes list job duties instead of achievements. This prompt transforms &ldquo;responsible for managing a team&rdquo; into &ldquo;led a team of 12 engineers that shipped 3 products generating $2.4M ARR.&rdquo;</p>
        <div style={promptBlockStyle}>
{`I need to rewrite my resume bullet points to focus on achievements instead of duties. I work in [Your Industry] as a [Your Current/Recent Job Title].

Here are my current bullet points:
[Paste your existing bullet points]

For each bullet point:
1. Rewrite it using the XYZ achievement formula: "Accomplished [X] as measured by [Y] by doing [Z]."
2. Start each bullet with a powerful action verb (led, built, increased, reduced, launched, negotiated, automated, designed).
3. Add specific metrics. If I didn't provide numbers, suggest realistic placeholders I can fill in (e.g., "increased sales by [X]%" or "managed a team of [X]").
4. Remove all passive language ("responsible for," "helped with," "assisted in").
5. Keep each bullet to one line, maximum two.
6. Prioritize bullets that demonstrate impact on revenue, efficiency, team growth, or cost savings.

Output the rewritten bullets in a clean, copy-paste-ready format.`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. The Professional Summary Generator</h3>
        <p>The summary at the top of your resume is the first thing a recruiter reads (if they read at all). This prompt writes one that hooks them in 3 seconds.</p>
        <div style={promptBlockStyle}>
{`Write a professional resume summary for a [Your Job Title] with [X years] of experience in [Your Industry/Field].

My key strengths:
- [Strength 1, e.g., "full-stack development with React and Node.js"]
- [Strength 2, e.g., "leading cross-functional teams of 5-15 people"]
- [Strength 3, e.g., "driving $1M+ revenue growth through product launches"]

I'm targeting roles in [Target Role/Industry] at companies like [Company Name or Company Type].

Write 3 versions of a 3-4 sentence professional summary:
- Version A: Emphasizes technical skills and tools
- Version B: Emphasizes leadership and business impact
- Version C: Emphasizes industry expertise and domain knowledge

Each version should:
- Open with a strong identity statement (not "Results-driven professional" — that's cliche)
- Include 2-3 quantified achievements
- Name specific tools, technologies, or methodologies relevant to [Target Role]
- End with what I'm looking for (without sounding desperate)
- Be ATS-friendly with natural keyword inclusion`}
        </div>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. The Career Changer Resume Reframe</h3>
        <p>Switching industries? This prompt identifies your transferable skills and reframes your experience so it reads as relevant to your target field.</p>
        <div style={promptBlockStyle}>
{`I'm changing careers from [Current Industry/Role] to [Target Industry/Role].

Here's my current experience:
[Paste your resume or list your experience]

Here's a job description for the role I want:
[Paste the target job description]

Do the following:
1. Identify every transferable skill from my current experience that maps to the target role. Be specific — not just "communication skills" but exactly how my experience demonstrates what they need.
2. Rewrite my bullet points to emphasize the transferable skills using language from the TARGET industry, not my current one.
3. Suggest a professional summary that positions my career change as a strategic move, not a desperate pivot.
4. Identify 2-3 gaps between my experience and the job requirements. For each gap, suggest how I can address it (online course, project, certification) and what to say in my cover letter.
5. Recommend which experiences to lead with and which to de-emphasize or remove entirely.
6. Reorder my resume sections to put the most relevant information first.`}
        </div>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. The Resume Formatting and Structure Audit</h3>
        <p>Before you send your resume anywhere, run it through this prompt. It catches formatting issues, weak language, and structural problems that kill your chances.</p>
        <div style={promptBlockStyle}>
{`Act as a senior recruiter at a Fortune 500 company who reviews 200+ resumes per day. I'm going to show you my resume for a [Target Job Title] position.

Here's my resume:
[Paste your full resume]

Give me brutally honest feedback on:
1. FIRST IMPRESSION: What is your gut reaction in the first 6 seconds? What stands out (good or bad)?
2. ATS COMPATIBILITY: Are there any formatting issues that would cause ATS parsing errors? (tables, columns, headers, special characters, graphics)
3. IMPACT: Which bullet points demonstrate real impact? Which ones are filler that should be cut or rewritten?
4. LANGUAGE: Flag any cliches ("results-driven," "team player," "detail-oriented"), passive voice, or weak verbs.
5. GAPS: What's missing that a recruiter would expect to see for this role?
6. LENGTH: Is it the right length for my experience level? What should be cut?
7. ORDER: Are sections in the right priority order for my target role?

Then rewrite the entire resume incorporating your feedback. Output it in a clean, plain-text format I can paste into a document.`}
        </div>

        {/* CTA AFTER RESUME SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 125+ career prompts with proven frameworks built in?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Resume &amp; Career Kit includes resume builders, cover letter generators, LinkedIn optimizers, interview prep systems, and salary negotiation scripts. Copy, paste, get hired.</p>
          <a href={RESUME_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Resume &amp; Career Kit &mdash; $29
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: COVER LETTER PROMPTS              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>3 Cover Letter Prompts</h2>
        <p>Cover letters still matter &mdash; especially at companies where a hiring manager (not just ATS) reviews applications. These prompts generate personalized cover letters in under 2 minutes.</p>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. The Personalized Cover Letter Generator</h3>
        <p>This prompt creates a cover letter that feels like you researched the company for hours. It connects your specific experience to their specific needs.</p>
        <div style={promptBlockStyle}>
{`Write a cover letter for [Job Title] at [Company Name].

Job description:
[Paste the job description]

My relevant experience:
- [Achievement 1 with metrics, e.g., "Grew organic traffic by 340% in 18 months at a B2B SaaS startup"]
- [Achievement 2 with metrics, e.g., "Led a product launch that generated $800K in first-quarter revenue"]
- [Achievement 3, e.g., "Built and managed a team of 8 content marketers"]

What I know about the company:
- [Something specific, e.g., "They just raised a Series B and are expanding into enterprise"]
- [Their challenge, e.g., "They're trying to move upmarket from SMB to mid-market"]

Write the cover letter in 4 paragraphs:
1. HOOK: Open with something specific about the company (not "I'm excited to apply"). Reference their recent news, product, or mission. Make it clear I've done my research.
2. VALUE: Connect my top 2 achievements directly to their biggest needs from the job description. Use specific numbers.
3. FIT: Explain why this company specifically (not just the role) — what about their mission, product, or stage excites me. One paragraph, genuine, not sycophantic.
4. CLOSE: Clear call to action. Confident but not arrogant.

Tone: Professional but human. No corporate buzzwords. Write like a real person, not a template. Keep it under 350 words.`}
        </div>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. The Cold Email Application (No Job Posting)</h3>
        <p>The best jobs are never posted. This prompt writes a cold outreach email to a hiring manager at a company you want to work for, even when there is no open role.</p>
        <div style={promptBlockStyle}>
{`Write a cold outreach email to a [Hiring Manager Title, e.g., "VP of Marketing"] at [Company Name]. There is no open job posting — I'm reaching out proactively because I want to work there.

About me:
- Current role: [Your Title] at [Current Company]
- Key achievement: [Your most impressive, relevant accomplishment with metrics]
- Why this company: [Specific reason — their product, mission, recent news, growth stage]

About them:
- Industry: [Their industry]
- What they likely need: [Your educated guess about their pain points based on their stage/size/product]

Write an email that:
1. Opens with a genuine compliment about something specific they've done (not generic flattery)
2. Demonstrates I understand their business challenge
3. Shows exactly how I've solved a similar problem before (with numbers)
4. Makes a soft ask — coffee chat or 15-minute call, not "hire me"
5. Keeps it under 150 words — hiring managers don't read long cold emails

Subject line options: Give me 3 subject lines that would get opened. No clickbait, no desperation, just genuine and intriguing.`}
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. The Follow-Up Email After No Response</h3>
        <p>You applied or interviewed and heard nothing. This prompt writes the follow-up that gets a reply without sounding needy.</p>
        <div style={promptBlockStyle}>
{`I applied for [Job Title] at [Company Name] [X days/weeks] ago and haven't heard back. Write a follow-up email.

Context:
- How I applied: [online application / referral / cold email / after interview]
- Last interaction: [e.g., "Had a phone screen with the recruiter 10 days ago" or "Submitted application 2 weeks ago"]
- Something new I can add: [e.g., "I just completed a relevant certification" or "I saw they launched a new product I have ideas about" or "I have a portfolio piece relevant to their work"]

Write the follow-up email that:
1. References the specific role and our last interaction
2. Adds NEW value — not just "checking in" (share an insight, a relevant article, or a new accomplishment)
3. Reaffirms interest without sounding desperate
4. Includes one specific question that invites a response
5. Keeps it under 100 words

Tone: Warm, professional, zero desperation. I am a busy professional who is interested, not a person begging for attention.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: LINKEDIN OPTIMIZATION PROMPTS     */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>3 LinkedIn Optimization Prompts</h2>
        <p>Your LinkedIn profile is a passive job application that works 24/7. Recruiters search LinkedIn using keywords, and a strong profile generates inbound opportunities while you sleep. These prompts turn your profile into a recruiter magnet.</p>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. The LinkedIn Headline and About Section Rewrite</h3>
        <p>Your headline is the most searched field on LinkedIn. Your About section is where recruiters decide whether to message you. This prompt optimizes both.</p>
        <div style={promptBlockStyle}>
{`Rewrite my LinkedIn headline and About section.

Current info:
- Job title: [Your Current Title]
- Years of experience: [X years]
- Industry: [Your Industry]
- Key skills: [Skill 1, Skill 2, Skill 3]
- Top 3 achievements:
  1. [Achievement with metric]
  2. [Achievement with metric]
  3. [Achievement with metric]
- Target role: [What I want to be recruited for]
- Target companies/industries: [Types of companies I want to attract]

HEADLINE (write 5 options):
- Format: [Role/Title] | [Value proposition] | [Key skill/keyword]
- Include searchable keywords that recruiters use to find candidates
- Show what I DO and the RESULT, not just my title
- Example structure: "Senior Product Manager | Launched 3 Products to $5M ARR | B2B SaaS"

ABOUT SECTION (write 2 versions):
Version A — Story-driven (for creative/startup roles):
- Open with a hook that makes someone want to keep reading
- Tell my career story in a compelling narrative
- Include 3-5 measurable accomplishments
- End with what I'm looking for and how to reach me

Version B — Achievement-driven (for corporate/enterprise roles):
- Open with a strong positioning statement
- Bullet-point format with key metrics
- List core competencies with specific tools/technologies
- End with a clear CTA for recruiters

Both versions should be 1,500-2,000 characters and stuffed with searchable keywords.`}
        </div>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. The LinkedIn Experience Section Optimizer</h3>
        <p>Most people copy-paste their resume into LinkedIn. Wrong move. LinkedIn experience sections should be more conversational, keyword-rich, and formatted for scanning.</p>
        <div style={promptBlockStyle}>
{`Rewrite my LinkedIn experience section for my role as [Job Title] at [Company Name] ([Start Date] - [End Date/Present]).

Here's what I currently have:
[Paste your current LinkedIn experience bullets or resume bullets for this role]

Rewrite this for LinkedIn specifically:
1. Write a 2-3 sentence overview paragraph that explains the SCOPE of the role (team size, budget, what I owned) and the BIGGEST result I achieved.
2. Below that, write 4-6 bullet points that highlight achievements with metrics.
3. Use LinkedIn-searchable keywords throughout: [list 5-7 keywords recruiters in your field search for, e.g., "product management, agile, roadmap planning, user research, OKRs"].
4. Make the tone slightly more conversational than a resume — this is a professional social profile, not a formal document.
5. Bold the most impressive metrics (LinkedIn supports basic formatting).
6. End with a line about what the role taught me or how it shaped my approach — this adds personality.

Format it exactly as it should appear on LinkedIn, with the paragraph first and bullets below.`}
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. The LinkedIn Connection Request and Networking Message</h3>
        <p>Cold connection requests with the default &ldquo;I&rsquo;d like to add you to my network&rdquo; message get ignored. This prompt generates personalized networking messages that actually get accepted.</p>
        <div style={promptBlockStyle}>
{`I want to connect with [Person's Name], who is a [Their Title] at [Their Company]. I found them through [LinkedIn search / mutual connection / their post about X / a conference].

My goal: [e.g., "learn about their team's hiring plans" / "ask about their experience transitioning from engineering to product" / "build a relationship for a future opportunity"]

My background: [One sentence about you and what's relevant]

Write 3 versions of a LinkedIn connection request (max 300 characters):
- Version A: Reference something specific from their profile or recent post
- Version B: Reference a shared connection, school, or experience
- Version C: Lead with a genuine question about their work

Then write a follow-up message for AFTER they accept (max 150 words):
- Thank them for connecting
- Add value first (share a resource, insight, or genuine compliment about their work)
- Make a soft ask (15-minute call, not a job request)
- Make it easy to say yes by suggesting specific times

Tone: Genuine, human, zero desperation. I'm building a professional relationship, not asking for a favor.`}
        </div>

        {/* CTA AFTER LINKEDIN SECTION */}
        <div style={ctaBoxStyle}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>These 11 prompts are just the beginning.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The full <Link href="/resume-career-kit" style={{ color: '#3B5FFF' }}>AI Resume &amp; Career Kit</Link> includes 125+ prompts covering resume building, cover letters, LinkedIn, interview prep, job search strategy, and salary negotiation. Every prompt uses proven frameworks and is tested with real recruiters.</p>
          <a href={RESUME_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Full Kit &mdash; $29 One-Time
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: INTERVIEW PREP PROMPTS            */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>2 Interview Prep Prompts</h2>
        <p>The difference between candidates who get offers and candidates who get ghosted usually comes down to interview preparation. These prompts turn you into the most prepared person in the room.</p>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. The Behavioral Interview Answer Generator</h3>
        <p>Behavioral questions (&ldquo;Tell me about a time when...&rdquo;) are the most common interview format in 2026. This prompt generates STAR-method answers using your real experience so you walk in with polished stories ready to go.</p>
        <div style={promptBlockStyle}>
{`I have an interview for [Job Title] at [Company Name] in [Industry].

The role requires: [List 3-5 key requirements from the job description]

My background:
[Paste your resume or describe your key experiences in 5-10 bullet points]

Generate the 8 most likely behavioral interview questions for this role. For each question:

1. Write the question
2. Suggest which of MY experiences best answers it
3. Write a STAR-method answer (Situation, Task, Action, Result) using my actual background
4. Create a 30-SECOND version (for rapid-fire rounds) and a 2-MINUTE version (for deep-dive questions)
5. End each answer with a "bridge" — a sentence that connects the story back to why I'm right for THIS role at THIS company

Make the answers conversational, not robotic. Use contractions. Include moments of self-awareness or humor where appropriate. These should sound like a real person talking, not a script being read.

Also generate 3 "curveball" questions I might not expect and suggest how to handle them gracefully.`}
        </div>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. The Company Research and &ldquo;Questions for Them&rdquo; Prep</h3>
        <p>Interviewers always ask &ldquo;Do you have any questions for us?&rdquo; This is not a formality &mdash; it is one of the most important parts of the interview. Bad questions kill offers. Great questions seal them.</p>
        <div style={promptBlockStyle}>
{`I'm preparing for an interview at [Company Name] for a [Job Title] role.

What I know about the company:
- Industry: [Their industry]
- Stage: [Startup / Growth / Enterprise / Public]
- Recent news: [Anything you know — funding round, product launch, leadership change, earnings report]
- Size: [Approximate number of employees]
- Their product/service: [Brief description]

Generate two things:

PART 1 — Company Research Brief:
Give me a 5-minute briefing on this company as if you're a career coach prepping me. Include:
- What they do and who their customers are
- Their competitive advantages and biggest challenges
- Recent strategic moves and what they signal about the company's direction
- The likely pain points of the team I'd be joining
- The company culture signals I should be aware of

PART 2 — 10 Interview Questions I Should Ask:
Write 10 questions I can ask my interviewers, organized by who I'm talking to:
- 3 questions for the hiring manager (about the team, expectations, success metrics)
- 3 questions for a peer/team member (about day-to-day work, culture, challenges)
- 2 questions for a senior leader/VP (about company direction, growth, strategy)
- 2 "closer" questions that subtly demonstrate I'm already thinking about how to contribute

No generic questions like "What does a typical day look like?" — every question should show I've done my research and am thinking strategically.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 6: SALARY NEGOTIATION PROMPTS        */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>2 Salary Negotiation Prompts</h2>
        <p>This is where AI delivers the highest ROI of your entire job search. The average professional leaves $5,000&ndash;$15,000 per year on the table by not negotiating or negotiating poorly. A single well-crafted counter-offer email can be worth more than a year of raises.</p>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. The Counter-Offer Email Generator</h3>
        <p>You got an offer. Now negotiate it. This prompt generates a data-backed counter-offer that maintains a positive relationship while maximizing your compensation.</p>
        <div style={promptBlockStyle}>
{`I received a job offer and need to negotiate. Here are the details:

- Company: [Company Name]
- Role: [Job Title]
- Offered salary: $[Amount]
- My target salary: $[Amount]
- Location: [City/Remote]
- My years of experience: [X years]
- Industry: [Your Industry]
- Other details: [Signing bonus offered? Equity? Benefits? Other competing offers?]

Do the following:

PART 1 — Market Research:
Based on the role, location, experience level, and industry, provide:
- The typical salary range for this role (low / median / high)
- 3 data points I can reference in my negotiation (cite sources like Glassdoor, Levels.fyi, Payscale, or industry benchmarks)
- Whether the offer is below, at, or above market rate

PART 2 — Counter-Offer Email:
Write a counter-offer email that:
1. Opens with genuine enthusiasm for the role and team (this is critical — never lead with money)
2. Acknowledges the offer respectfully
3. Presents my target salary with 2-3 data-backed reasons (market rate, my specific achievements, the value I'll bring)
4. Mentions 2-3 alternative compensation levers if base salary is firm: signing bonus, equity/RSUs, extra PTO, remote flexibility, professional development budget, earlier review cycle
5. Maintains a collaborative tone throughout — "I want to find a number that works for both of us," not an ultimatum
6. Ends with a clear next step

PART 3 — Negotiation Talking Points:
Give me 5 talking points in case they want to discuss on a call instead of email. Include responses to common pushbacks:
- "This is the max for the band"
- "We don't negotiate for this level"
- "The budget is set"

Tone: Confident, professional, collaborative. Not aggressive, not apologetic.`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. The Raise Request Builder</h3>
        <p>Already employed? This prompt builds the case for a raise by documenting your impact in a format your manager can take to their boss and to HR.</p>
        <div style={promptBlockStyle}>
{`I want to ask for a raise at my current company. Help me build my case.

Current situation:
- My title: [Your Title]
- Company: [Company Name]
- Time in role: [X months/years]
- Current salary: $[Amount]
- Target salary: $[Amount]
- Industry: [Your Industry]
- Location: [City/Remote]
- Last raise: [When and how much, or "never"]

My achievements since my last salary review:
- [Achievement 1 with metrics]
- [Achievement 2 with metrics]
- [Achievement 3 with metrics]
- [Achievement 4 with metrics]
- [Any new responsibilities I've taken on]

Generate:

1. A one-page "Impact Document" I can share with my manager that lists my contributions organized by business impact (revenue generated, costs saved, efficiency improved, team/culture contributions). Format it as a professional document, not a brag sheet.

2. A script for the actual conversation:
   - How to open the meeting (set the right tone)
   - How to present my case (lead with value delivered, not "I need more money")
   - How to state my target number with confidence
   - How to handle "not in the budget right now" (get a timeline and commitment in writing)
   - How to handle "you're already at the top of the band" (discuss title change or promotion path)
   - How to close the conversation regardless of outcome (stay professional, get next steps)

3. A follow-up email template to send after the conversation that documents what was discussed and any commitments made.

Tone: Confident and factual. This is a business discussion, not a personal favor.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 7: CUSTOMIZE FOR YOUR INDUSTRY       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>How to Customize These Prompts for YOUR Industry</h2>

        <p>Every prompt above works across industries, but you will get significantly better results by adding industry-specific context. Here is how to adapt them:</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Tech and Software Engineering</h3>
        <p>Add your tech stack (languages, frameworks, cloud platforms). Mention system scale (&ldquo;served 10M daily active users&rdquo;). Include GitHub contributions, open-source work, or patents. Reference specific methodologies (Agile, Scrum, CI/CD). Quantify in terms of latency reduction, uptime improvement, deployment frequency.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Finance and Accounting</h3>
        <p>Reference AUM (assets under management), portfolio performance, deal sizes, or audit scope. Mention certifications (CPA, CFA, Series 7/63). Include regulatory knowledge (SOX, GAAP, IFRS). Quantify in terms of P&amp;L impact, cost savings, compliance rates, or revenue from deals closed.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Healthcare</h3>
        <p>Include patient volume, clinical outcomes, or satisfaction scores. Mention EMR systems (Epic, Cerner). Reference certifications and licensure. Quantify in terms of patient outcomes improved, wait times reduced, compliance scores, or grant funding secured.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Marketing and Sales</h3>
        <p>Lead with revenue metrics: pipeline generated, deals closed, CAC reduced, LTV increased. Mention platforms (HubSpot, Salesforce, Google Ads). Include campaign results with specific ROAS or conversion rate improvements. Reference customer segments and market sizes.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Education</h3>
        <p>Include student outcomes (test scores, graduation rates, placement rates). Mention curriculum development, grant writing, and technology integration. Reference class sizes and program scope. Quantify in terms of student achievement gains, programs launched, or funding secured.</p>

        <p style={{ marginTop: '24px' }}>The key principle: <strong>replace generic metrics with the metrics your industry actually cares about.</strong> A recruiter in finance does not care about &ldquo;improved team efficiency.&rdquo; They care about &ldquo;managed a $50M fixed income portfolio with 12.4% annualized returns.&rdquo; The more specific your inputs, the more specific (and useful) the AI outputs.</p>

        <p>For a deeper dive into writing effective prompts, read our <Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>Complete Prompt Engineering Guide for 2026</Link>.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 8: FREE VS PREMIUM                   */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Free Prompts vs. the Full Resume &amp; Career Kit</h2>

        <p>The 15 prompts in this guide are genuinely useful. Use them. They will improve your resume, cover letters, and interview prep today.</p>

        <p>But if you are in an active job search and want the complete system, the <Link href="/resume-career-kit" style={{ color: '#3B5FFF' }}>AI Resume &amp; Career Kit</Link> goes much deeper:</p>

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
            <p style={{ fontSize: '14px', fontWeight: '700', marginTop: '0', marginBottom: '12px', color: '#3B5FFF' }}>Resume &amp; Career Kit ($29)</p>
            <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#374151' }}>
              <li><strong>125+ prompts</strong></li>
              <li>6 categories with sub-sections</li>
              <li>Industry-specific variations</li>
              <li>Job search strategy and tracking system</li>
              <li>Networking and outreach scripts</li>
              <li>Free updates for life</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <a href={RESUME_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Resume &amp; Career Kit &mdash; $29
          </a>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>One-time payment &middot; Instant download &middot; 30-day money-back guarantee</p>
        </div>

        <div style={{ background: '#111827', color: '#fff', borderRadius: '8px', padding: '24px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 8px', color: '#93B4FF' }}>BEST VALUE</p>
          <p style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 8px' }}>All 12 AI Kits &mdash; $97</p>
          <p style={{ fontSize: '14px', color: '#9CA3AF', margin: '0 0 16px' }}>Resume &amp; Career Kit + 11 more specialized kits. $429 value. Plus every future kit free.</p>
          <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#fff', color: '#111827', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the Bundle &mdash; $97 &rarr;
          </a>
          <p style={{ margin: '10px 0 0', color: '#6B7280', fontSize: '12px' }}>
            <Link href="/bundle" style={{ color: '#93B4FF' }}>See everything included in the bundle</Link>
          </p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 9: FAQ                               */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can ChatGPT write a resume for me?</h3>
        <p>Yes, but the quality depends entirely on your prompt. &ldquo;Write me a resume&rdquo; produces generic, unusable output. The prompts in this guide use specific frameworks (XYZ achievement formula, ATS keyword extraction, STAR method) that produce professional-quality results. You still need to provide your real experience and achievements &mdash; AI structures and polishes them, it does not invent them.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Will an AI-written resume pass ATS screening?</h3>
        <p>Yes, if prompted correctly. ATS scans for keyword matches between your resume and the job description. Prompt #1 in this guide specifically extracts ATS keywords from job postings and incorporates them into your bullet points. The key is using plain-text formatting (no tables, columns, or graphics), standard section headers, and natural keyword placement &mdash; all of which these prompts handle.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Is it ethical to use AI to write my resume?</h3>
        <p>Absolutely. It is no different from using a resume template, hiring a professional resume writer, or using Grammarly. The content is your real experience and skills &mdash; AI helps you present them more effectively. Recruiters care about whether your qualifications match the role, not whether you used a tool to improve your writing. That said, never fabricate experience or skills.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What AI tool is best for resume writing in 2026?</h3>
        <p>ChatGPT (GPT-4o) and Claude are both excellent. ChatGPT handles structured formatting well. Claude produces more natural, conversational language. Both work with every prompt in this guide. Use whichever you prefer &mdash; or try both and compare outputs. For power users, our <Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>free Prompt Generator</Link> helps you build custom prompts for any AI tool.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How many resume versions should I have?</h3>
        <p>One master resume with everything, plus a tailored version for every job you apply to. With AI prompts, tailoring takes 5 minutes instead of 2 hours. Candidates who customize per job description are 3x more likely to get interviews. Use Prompt #1 to quickly generate targeted versions by extracting keywords from each job posting.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If you found these resume prompts useful, you will get a lot out of these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/prompt-engineering-guide-2026" style={{ color: '#3B5FFF' }}>The Complete Prompt Engineering Guide for 2026</Link> &mdash; Master the skill behind every great AI output</li>
          <li><Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: '#3B5FFF' }}>25 ChatGPT Tips and Tricks Most People Don&rsquo;t Know</Link> &mdash; Get more from every ChatGPT session</li>
          <li><Link href="/resume-career-kit" style={{ color: '#3B5FFF' }}>AI Resume &amp; Career Kit</Link> &mdash; The full 125+ prompt system for job seekers</li>
          <li><Link href="/prompt-generator" style={{ color: '#3B5FFF' }}>Free AI Prompt Generator</Link> &mdash; Build custom prompts for any use case</li>
          <li><Link href="/prompts/chatgpt-resume-cover-letter" style={{ color: '#3B5FFF' }}>10 Free ChatGPT Prompts for Resumes &amp; Cover Letters</Link> &mdash; copy-paste templates ready to use</li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FINAL CTA */}
        <div style={{ marginTop: '48px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to land more interviews and negotiate higher pay?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Resume &amp; Career Kit</strong> includes 125+ prompts for resume building, cover letters, LinkedIn optimization, interview prep, job search strategy, and salary negotiation. Every prompt uses proven frameworks tested with real recruiters. $29 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={RESUME_KIT_URL} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Resume &amp; Career Kit &mdash; $29
            </a>
            <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Resume Kit plus 11 more specialized kits &mdash; best value if you want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* AI JOB RISK CTA */}
        <div style={{ background: '#FEF2F2', border: '2px solid #FECACA', borderRadius: 16, padding: 24, textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Worried AI might replace your job?</p>
          <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 16 }}>Check your career&apos;s AI replacement risk score &mdash; 40+ jobs analyzed with real 2026 data.</p>
          <a href="/ai-job-risk" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #DC2626, #D97706)', color: '#fff', padding: '12px 28px', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Check My Job Risk (Free)</a>
        </div>

        {/* EMAIL CAPTURE */}
        <EmailCapture />

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          <em>Rey Midas builds <a href="https://midastools.co" style={{ color: '#3B5FFF' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#3B5FFF' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}
