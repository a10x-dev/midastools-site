import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';

export default function AIPromptScorer2026() {
  const title = 'Free AI Prompt Scorer: Rate & Improve Any ChatGPT Prompt Instantly (2026)';
  const description = 'Score any AI prompt from 1-100 with our free prompt scorer. See exactly why your prompts underperform and how to fix them. Works for ChatGPT, Claude, Gemini, and more.';
  const url = 'https://www.midastools.co/blog/ai-prompt-scorer-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the AI prompt scorer calculate the score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The scorer evaluates your prompt across five criteria: Specificity (how detailed and precise your request is), Context (background information that helps the AI understand your situation), Role Assignment (whether you tell the AI what expert perspective to adopt), Output Format (how clearly you define the desired structure of the response), and Constraints (boundaries like word count, tone, or what to avoid). Each criterion is scored individually, and the weighted total produces your final score from 1 to 100.'
        }
      },
      {
        '@type': 'Question',
        name: 'What score should I aim for on my AI prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompts scoring 80 or above consistently produce excellent AI output. A score of 90+ means your prompt is professional-grade. Most people start around 20-40, which explains why they get generic, mediocre responses. The good news is that most prompts can be improved to 80+ in under 60 seconds by adding specificity, context, and output format instructions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is the prompt scorer free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the prompt scorer is 100% free with no signup required. Paste any prompt, get an instant score with a detailed breakdown of all five criteria, plus specific suggestions for improvement. You can score unlimited prompts. For pre-built prompts that already score 90+, check out our premium prompt kits.'
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
        <meta name="keywords" content="AI prompt scorer, rate my AI prompt, prompt quality checker, how to write better AI prompts 2026, prompt score tool, ChatGPT prompt rating, prompt grader, AI prompt quality, prompt evaluation tool, prompt improvement" />
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
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '32px' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            AI Prompt Scorer
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--text)' }}>
            Free AI Prompt Scorer: Rate & Improve Any Prompt Instantly
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '8px' }}>
            Most people have no idea why their AI prompts produce mediocre output. The answer is measurable: five specific elements separate a 90-score prompt from a 30-score one. Here is exactly what they are and how to fix yours.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '40px' }}>
            Updated March 2026 · 8 min read
          </p>

          {/* Table of Contents */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>In This Guide</p>
            <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: 2, color: 'var(--accent)' }}>
              <li><a href="#why" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Why Most People Write Terrible Prompts</a></li>
              <li><a href="#criteria" style={{ color: 'var(--accent)', textDecoration: 'none' }}>The 5 Scoring Criteria Explained</a></li>
              <li><a href="#examples" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Before & After: 3 Real Prompts Scored</a></li>
              <li><a href="#tips" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Tips to Score 90+ Every Time</a></li>
              <li><a href="#faq" style={{ color: 'var(--accent)', textDecoration: 'none' }}>FAQ</a></li>
            </ol>
          </div>

          {/* Section 1: Why Most People Write Terrible Prompts */}
          <h2 id="why" style={s.h2}>1. Why Most People Write Terrible Prompts</h2>
          <p style={s.p}>
            The average AI prompt scores around 25 out of 100. That is not an insult — it is a measurement. Most people treat ChatGPT like a search engine: they type a short question and hope for the best. The result is vague, generic output that feels like it could have been written by anyone about anything.
          </p>
          <p style={s.p}>
            Here is a typical prompt that scores 22:
          </p>
          <div style={s.prompt}>Write me a marketing email</div>
          <p style={s.p}>
            That prompt has no role assignment, no context about the product or audience, no output format, and no constraints. The AI has to guess everything — so it produces the safest, most generic email possible.
          </p>
          <p style={s.p}>
            The problem is not intelligence or creativity. It is that most people do not know the five elements that AI models actually respond to. Once you understand them, you can take any prompt from a 25 to an 85+ in under a minute. Our <Link href="/prompt-scorer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>free prompt scorer</Link> measures all five automatically and tells you exactly what to fix.
          </p>

          {/* CTA 1 */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Try It Now</p>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Score Any Prompt in 3 Seconds</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Paste your prompt. Get a score from 1-100 with a detailed breakdown. Free, no signup.</p>
            <Link href="/prompt-scorer" style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Open the Free Prompt Scorer →
            </Link>
          </div>

          {/* Section 2: The 5 Scoring Criteria */}
          <h2 id="criteria" style={s.h2}>2. The 5 Scoring Criteria Explained</h2>
          <p style={s.p}>
            Every prompt is scored across five dimensions. Each one independently improves the quality of AI output. Together, they are the difference between a throwaway response and something you would actually use.
          </p>

          <h3 style={s.h3}>Criterion 1: Specificity</h3>
          <p style={s.p}>
            Specificity measures how detailed and precise your request is. Vague prompts get vague answers. The more specific you are about what you want, the better the AI can deliver.
          </p>
          <div style={s.prompt}>Bad: "Write a blog post about marketing"{'\n'}Good: "Write a 1,200-word blog post about email marketing strategies for B2B SaaS companies with under 50 employees"</div>
          <p style={s.p}>
            The good version tells the AI the exact topic, word count, audience type, and company size. There is nothing left to guess.
          </p>

          <h3 style={s.h3}>Criterion 2: Context</h3>
          <p style={s.p}>
            Context is background information that helps the AI understand your situation. Without it, the AI writes for a generic audience in a generic scenario.
          </p>
          <div style={s.prompt}>Bad: "Help me write a sales pitch"{'\n'}Good: "Help me write a sales pitch for my project management tool. Our target customers are marketing agencies with 10-30 people who currently use spreadsheets to track projects. Our main advantage is visual timelines with automatic deadline alerts."</div>

          <h3 style={s.h3}>Criterion 3: Role Assignment</h3>
          <p style={s.p}>
            Role assignment tells the AI what expert perspective to adopt. It fundamentally changes the vocabulary, depth, and approach of the response.
          </p>
          <div style={s.prompt}>Bad: "Give me feedback on my resume"{'\n'}Good: "Act as a senior tech recruiter at a Fortune 500 company who has reviewed 10,000+ resumes. Give me feedback on my resume."</div>
          <p style={s.p}>
            The role changes everything. A "senior tech recruiter" will flag different issues than a generic assistant. They will focus on ATS compatibility, keyword optimization, and what actually catches a hiring manager's eye.
          </p>

          <h3 style={s.h3}>Criterion 4: Output Format</h3>
          <p style={s.p}>
            Output format tells the AI how to structure the response. Without it, you get a wall of paragraphs. With it, you get exactly the format you need.
          </p>
          <div style={s.prompt}>Bad: "Give me ideas for social media posts"{'\n'}Good: "Give me 10 social media post ideas. For each one, provide: 1) The hook (first line), 2) The body (2-3 sentences), 3) A call-to-action, 4) 3 relevant hashtags. Format as a numbered list."</div>

          <h3 style={s.h3}>Criterion 5: Constraints</h3>
          <p style={s.p}>
            Constraints are boundaries that prevent the AI from going off track. They tell the AI what to avoid, what limits to respect, and what tone to maintain.
          </p>
          <div style={s.prompt}>Bad: "Write me an ad"{'\n'}Good: "Write me a Facebook ad. Keep it under 125 characters for the primary text. Use a conversational tone — no corporate jargon, no exclamation marks, no emojis. Do not use the word 'revolutionary.'"</div>

          <div style={s.tip}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>Key insight</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              You do not need all five elements at maximum strength. A prompt with strong specificity and output format but no role assignment can still score 70+. But prompts that nail all five consistently score 90+ and produce dramatically better output. Use our <Link href="/prompt-scorer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>scorer</Link> to see which criteria you tend to miss.
            </p>
          </div>

          {/* Section 3: Before & After Examples */}
          <h2 id="examples" style={s.h2}>3. Before & After: 3 Real Prompts Scored</h2>
          <p style={s.p}>
            Here are three real prompts, scored before and after improvement. Notice how each improvement targets the specific criteria that were missing.
          </p>

          <h3 style={s.h3}>Example 1: Business Email (30 → 85)</h3>
          <p style={{ ...s.p, fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Before — Score: 30</p>
          <div style={s.prompt}>Write a follow-up email to a client</div>
          <p style={{ ...s.p, fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>After — Score: 85</p>
          <div style={s.prompt}>Act as a senior account manager at a B2B consulting firm. Write a follow-up email to a client who attended our product demo last Tuesday but has not responded to our proposal. The proposal was for a $45K annual analytics platform implementation. Tone: professional but warm, not pushy. Include a specific reference to something discussed in the demo (a pain point about manual reporting). End with a soft CTA offering a 15-minute call. Keep the email under 150 words.</div>
          <p style={s.p}>
            The improved version adds role assignment, specific context about the situation, output format (length, CTA), and constraints (tone, word count). Every criterion gets addressed.
          </p>

          <h3 style={s.h3}>Example 2: Coding Prompt (45 → 92)</h3>
          <p style={{ ...s.p, fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Before — Score: 45</p>
          <div style={s.prompt}>Write a function that validates email addresses in Python</div>
          <p style={{ ...s.p, fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>After — Score: 92</p>
          <div style={s.prompt}>Act as a senior Python developer. Write a function called validate_email that takes a string and returns a tuple of (bool, str) — the bool indicates if valid, the str provides the reason if invalid. Requirements: check for valid format using regex, verify the domain has MX records using dnspython, handle edge cases like empty strings and None inputs. Include type hints, a docstring with examples, and 5 unit tests using pytest. Do not use any paid API services. Target Python 3.11+.</div>
          <p style={s.p}>
            The original had decent specificity but lacked role, output format, and constraints. The improved version scores 92 because it specifies the exact function signature, library choices, testing requirements, and technical constraints.
          </p>

          <h3 style={s.h3}>Example 3: Content Creation (25 → 88)</h3>
          <p style={{ ...s.p, fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Before — Score: 25</p>
          <div style={s.prompt}>Write a LinkedIn post about AI</div>
          <p style={{ ...s.p, fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>After — Score: 88</p>
          <div style={s.prompt}>Act as a tech startup founder with 50K LinkedIn followers who writes viral thought leadership posts. Write a LinkedIn post about how small businesses are using AI prompt engineering to replace $5K/month marketing agencies. Structure: open with a contrarian hook (1 line), tell a brief story about a real-seeming example (3-4 lines), share 3 specific tactics as a numbered list, end with a question to drive comments. Keep it under 200 words. Tone: conversational, opinionated, no hashtags, no emojis.</div>
          <p style={s.p}>
            From a vague three-word topic to a fully specified post with role, structure, story arc, constraints, and tone. That is the difference between content that gets scrolled past and content that gets engagement.
          </p>

          {/* Section 4: Tips to Score 90+ */}
          <h2 id="tips" style={s.h2}>4. Tips to Score 90+ Every Time</h2>
          <p style={s.p}>
            These five habits will consistently push your prompts into the 90+ range. They take seconds to apply once you build the muscle memory.
          </p>

          <h3 style={s.h3}>Tip 1: Always start with a role</h3>
          <p style={s.p}>
            Begin every prompt with "Act as a [specific expert]." This single line shifts the AI from generic assistant mode to expert mode. Be specific — "senior React developer with 10 years of experience" beats "programmer." The more precise the role, the more focused the output.
          </p>

          <h3 style={s.h3}>Tip 2: Define the output format before you hit enter</h3>
          <p style={s.p}>
            Tell the AI exactly what shape the answer should take. Numbered list? Table? JSON? Email with subject line? A 3-paragraph structure? Defining the format eliminates the most common problem — getting a rambling wall of text when you needed a concise, structured response.
          </p>

          <h3 style={s.h3}>Tip 3: Add at least one constraint</h3>
          <p style={s.p}>
            Constraints are the most overlooked element. "Keep it under 200 words" alone can transform a bloated response into a tight one. Other powerful constraints: "Do not use jargon," "Avoid cliches," "Write at an 8th-grade reading level," or "Do not include an introduction paragraph."
          </p>

          <h3 style={s.h3}>Tip 4: Include numbers wherever possible</h3>
          <p style={s.p}>
            Specific numbers force specificity. "Give me ideas" is vague. "Give me 7 ideas" is concrete. "Write a blog post" is open-ended. "Write a 1,000-word blog post with 5 subheadings" is precise. Numbers for word count, list items, examples, and sections dramatically improve the quality and usefulness of the output.
          </p>

          <h3 style={s.h3}>Tip 5: Score, fix, rescore</h3>
          <p style={s.p}>
            Use the <Link href="/prompt-scorer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>prompt scorer</Link> as a feedback loop. Paste your prompt, check which criteria scored low, add the missing elements, and score again. Most prompts go from 30 to 80+ in a single round of edits. Two rounds will get you above 90. It takes less than a minute and the improvement in AI output is immediate.
          </p>

          <div style={s.tip}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>Want ready-made 90+ prompts?</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              If you want prompts that already score 90+ without any editing, our <Link href="/kits" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>premium prompt kits</Link> include hundreds of professionally engineered, tested prompts across marketing, business, coding, content, and more. Or build your own with the <Link href="/prompt-generator" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>free prompt generator</Link>.
            </p>
          </div>

          {/* Section 5: FAQ */}
          <h2 id="faq" style={s.h2}>5. Frequently Asked Questions</h2>

          <h3 style={s.h3}>How does the AI prompt scorer calculate the score?</h3>
          <p style={s.p}>
            The scorer evaluates your prompt across five criteria: Specificity, Context, Role Assignment, Output Format, and Constraints. Each criterion is scored individually based on what is present in your prompt. The weighted total produces a final score from 1 to 100, with a detailed breakdown showing exactly where you can improve.
          </p>

          <h3 style={s.h3}>What score should I aim for?</h3>
          <p style={s.p}>
            Prompts scoring 80+ consistently produce excellent AI output. A score of 90+ is professional-grade. Most people start around 20-40, which is why they get generic, mediocre responses. The good news: most prompts can reach 80+ in under 60 seconds by adding specificity, context, and output format instructions.
          </p>

          <h3 style={s.h3}>Is the prompt scorer free?</h3>
          <p style={s.p}>
            Yes, 100% free with no signup required. Paste any prompt, get an instant score with a detailed breakdown of all five criteria plus specific improvement suggestions. Unlimited scoring. For pre-built prompts that already score 90+, check out our <Link href="/kits" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>premium prompt kits</Link>.
          </p>

          {/* Final CTA */}
          <div style={s.cta}>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Stop Guessing</p>
            <p style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Score Your Prompts — Free</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              Paste any prompt. Get a score from 1-100 with actionable feedback. No signup required.
            </p>
            <Link href="/prompt-scorer" style={{ display: 'inline-block', background: '#FFFFFF', color: 'var(--text)', padding: '16px 36px', borderRadius: '100px', textDecoration: 'none', fontWeight: 800, fontSize: '16px' }}>
              Open the Prompt Scorer →
            </Link>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              Want pre-built 90+ prompts? <Link href="/kits" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Prompt Kits</Link> · <a href={STRIPE_BUNDLE} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Full Bundle $97</a>
            </p>
          </div>

          {/* Related */}
          <h2 style={s.h2}>Related Guides</h2>
          <ul style={{ listStyle: 'none', margin: '0 0 48px', padding: 0 }}>
            {[
              { title: 'AI Prompt Roaster — Get Your Bad Prompts Roasted', href: '/prompt-roaster' },
              { title: '10 AI Prompt Mistakes Ruining Your ChatGPT Output', href: '/blog/ai-prompt-mistakes-2026' },
              { title: 'Free AI Prompt Generator — Build Perfect Prompts in Seconds', href: '/prompt-generator' },
              { title: 'Free AI Prompt Scorer — Rate Any Prompt 1-100', href: '/prompt-scorer' },
              { title: 'Premium Prompt Kits — Pre-Built, Expert-Tested Prompts', href: '/kits' },
              { title: 'The Complete AI Tools Bundle — All Kits Included', href: '/bundle' },
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
