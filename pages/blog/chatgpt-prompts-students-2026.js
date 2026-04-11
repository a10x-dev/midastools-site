import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const BUNDLE_URL = 'https://buy.stripe.com/4gw5mf0Zl1U5aVW5kp';

export default function ChatGPTPromptsStudents2026() {
  const title = '30 ChatGPT Prompts Every Student Needs in 2026 (Study Smarter, Not Harder)';
  const description = 'The best ChatGPT prompts for students in 2026. Copy-paste prompts for essays, studying, note-taking, exam prep, and time management. Free prompts inside.';
  const url = 'https://www.midastools.co/blog/chatgpt-prompts-students-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
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
        name: 'Can students use ChatGPT for school?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, students can use ChatGPT for school as a study aid and learning tool. Most universities now have AI-use policies that allow students to use ChatGPT for brainstorming, understanding concepts, creating study materials, and editing their own work. The key is transparency: always follow your school\'s specific guidelines, disclose AI use when required, and never submit AI-generated text as your own original writing. Think of ChatGPT as a tutor that helps you learn, not a shortcut that replaces learning.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the best ChatGPT prompts for studying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best ChatGPT prompts for studying include: asking it to create flashcards from your notes, generating practice quiz questions on specific topics, explaining difficult concepts using simple analogies (the Feynman technique), building spaced repetition schedules for exam prep, and summarizing long readings into one-page study guides. The most effective prompts give ChatGPT context about your course, your current understanding level, and the specific format you want the output in.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is using ChatGPT cheating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Using ChatGPT is not inherently cheating, but it depends on how you use it and your school\'s policy. Using ChatGPT to understand a concept, check your reasoning, generate practice problems, or improve your study process is no different from using a tutor or a textbook. Submitting AI-generated essays or homework answers as your own work is academic dishonesty at most institutions. The line is clear: use AI to learn better, not to avoid learning. Always check your school\'s academic integrity policy for specific rules about AI tools.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can ChatGPT help with essay writing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT can help with essay writing in several ethical ways: brainstorming topic ideas and angles, generating thesis statement options, creating detailed outlines, suggesting counterarguments to strengthen your argument, checking your logic and flow, helping with citation formatting, and providing feedback on drafts you have already written. The key is to use ChatGPT as a writing coach, not a ghostwriter. Write the essay yourself, then use ChatGPT to improve your own work through feedback and suggestions.'
        }
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="ChatGPT prompts for students, AI study tools 2026, ChatGPT for studying, ChatGPT for essays, AI for students, ChatGPT study prompts, AI exam prep, ChatGPT note taking" />
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
          30 ChatGPT Prompts Every Student Needs in 2026 (Study Smarter, Not Harder)
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 25, 2026 &middot; Midas Tools Team &middot; 10 min read</p>

        {/* ============================================ */}
        {/* INTRO                                        */}
        {/* ============================================ */}

        <p>AI is not the future of education. It is the present. And the students who figure out how to use it well right now will have an unfair advantage for the rest of their academic careers.</p>
        <p>This is not about getting ChatGPT to write your essays for you. That is a fast track to learning nothing and getting flagged by your professor. This is about using AI as a <strong>personal tutor, study partner, and productivity system</strong> that helps you actually understand the material &mdash; in a fraction of the time.</p>
        <p>Below are 30 prompts you can copy, paste, and start using today. They cover essays, studying, note-taking, research, time management, and a few creative ones that make learning genuinely more interesting. Each prompt is designed to be customized with your own course material.</p>
        <p>These prompts will save you hours every week. Not by doing the work for you, but by making the work you do far more effective.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: ESSAY & WRITING PROMPTS           */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Essay &amp; Writing Prompts (1&ndash;6)</h2>
        <p>Writing is where most students struggle the hardest &mdash; not because they cannot write, but because they get stuck before they start. These prompts break through writer&rsquo;s block and strengthen every stage of the writing process.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #1: Brainstorm Essay Topics</h3>
        <p>Use this when you have a broad assignment and no idea where to start. It generates specific, arguable angles instead of generic topics.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I have an essay assignment for my [COURSE NAME] class. The broad topic is "[TOPIC]" and it needs to be [WORD COUNT] words.

Give me 8 specific essay topic ideas that:
- Are arguable (not just descriptive)
- Are narrow enough to cover thoroughly in [WORD COUNT] words
- Would impress a professor who has read hundreds of generic essays on this subject
- Include a surprising angle or fresh perspective

For each topic, give me: the topic, a one-sentence thesis, and why this angle is interesting.`}
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #2: Build a Detailed Essay Outline</h3>
        <p>A good outline is half the battle. This prompt creates a structure you can fill in paragraph by paragraph, so you never stare at a blank page.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a detailed essay outline for this thesis: "[YOUR THESIS STATEMENT]"

The essay is for a [COURSE LEVEL — e.g., college freshman, graduate] [SUBJECT] class and should be approximately [WORD COUNT] words.

Include:
- Introduction with hook strategy and thesis placement
- [NUMBER] body paragraphs, each with: topic sentence, key evidence/examples to include, analysis approach, and transition to next paragraph
- Counterargument paragraph with rebuttal strategy
- Conclusion that goes beyond restating the thesis

For each section, suggest an approximate word count so I can pace my writing.`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #3: Generate Strong Thesis Statements</h3>
        <p>A weak thesis sinks the whole essay. This prompt gives you multiple options so you can pick the strongest one.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I'm writing an essay about [TOPIC] for my [COURSE] class. My general argument is that [YOUR ROUGH IDEA].

Generate 5 thesis statements, each taking a slightly different angle:
1. A straightforward argumentative thesis
2. A thesis that acknowledges a counterargument (concession thesis)
3. A thesis with a "so what?" — explaining why this matters
4. A bold, contrarian thesis that challenges conventional thinking
5. A thesis that connects this topic to a broader issue

For each one, rate its strength (weak/medium/strong) and explain what makes it effective or what could improve it.`}
        </div>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #4: Edit and Strengthen Your Draft</h3>
        <p>This is the ethical sweet spot: you write the essay, then use AI as an editor. Your ideas, better execution.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I wrote this essay for my [COURSE] class. Please review it as a tough but fair writing tutor. Do NOT rewrite it — I want to improve it myself.

[PASTE YOUR ESSAY]

Give me feedback on:
1. Thesis clarity — Is my argument clear and specific?
2. Paragraph structure — Does each paragraph have a clear point and evidence?
3. Logic and flow — Are there gaps in my reasoning or awkward transitions?
4. Evidence quality — Am I using enough evidence? Is it well-integrated?
5. Introduction and conclusion — Do they work hard enough?
6. Sentence-level issues — Flag any repetitive phrasing, passive voice overuse, or unclear sentences (give line-specific examples)

End with the 3 most impactful changes I could make to raise this essay by one letter grade.`}
        </div>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #5: Format Citations Correctly</h3>
        <p>Citation formatting eats up more time than it should. Let AI handle the formatting while you focus on the argument.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need to format these sources in [APA 7th / MLA 9th / Chicago / Harvard] style. For each source, provide:
1. The full bibliography/works cited entry
2. An example in-text citation showing how to reference it in a sentence
3. A parenthetical citation

Here are my sources:
- [Title, Author, Year, Publisher, URL, etc.]
- [Title, Author, Year, Publisher, URL, etc.]
- [Title, Author, Year, Publisher, URL, etc.]

Also: are there any common formatting mistakes students make with [CITATION STYLE] that I should watch out for?`}
        </div>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #6: Generate Counterarguments</h3>
        <p>The best essays anticipate objections. This prompt helps you find the strongest arguments against your thesis so you can address them head-on.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`My essay argues that: "[YOUR THESIS]"

Act as a professor who disagrees with my argument. Give me:
1. The 3 strongest counterarguments someone could make against my thesis
2. For each counterargument: the evidence or logic they would use, and a suggested rebuttal I could include in my essay
3. Any blind spots in my argument — things I might be assuming without evidence
4. One counterargument that is so strong I might need to modify my thesis to account for it

Be rigorous. A good essay addresses its weaknesses instead of ignoring them.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: STUDY & EXAM PREP PROMPTS         */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Study &amp; Exam Prep Prompts (7&ndash;12)</h2>
        <p>Studying is not about how many hours you put in &mdash; it is about how effectively you process and retain information. These prompts turn passive reading into active learning.</p>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #7: Create Flashcards from Your Notes</h3>
        <p>Flashcards work, but making them takes forever. This prompt generates them from your own material in seconds.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create 20 flashcards from these lecture notes/textbook notes for my [COURSE] class:

[PASTE YOUR NOTES]

For each flashcard:
- Front: A specific question (not just "Define X" — ask questions that test understanding, application, and connections between concepts)
- Back: A concise but complete answer

Mix the question types:
- 5 definition/recall questions
- 5 "explain why" questions
- 5 application questions (how would this concept apply to a real scenario?)
- 5 comparison questions (how does X differ from Y?)

Format them numbered so I can easily copy them into Anki or Quizlet.`}
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #8: Generate Practice Quiz Questions</h3>
        <p>Testing yourself is the single most effective study method according to research. This prompt creates a realistic practice exam.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Act as a [COURSE] professor writing a midterm exam. The exam covers these topics: [LIST TOPICS OR PASTE STUDY GUIDE].

Create a practice exam with:
- 10 multiple choice questions (4 options each, with the correct answer marked and a brief explanation of why it's correct)
- 5 short answer questions (provide a model answer for each, 2-3 sentences)
- 2 essay questions (provide a bullet-point outline of what a strong answer would include)

Make the questions progressively harder — start with recall, move to application, end with analysis. Match the difficulty level of a real [COURSE LEVEL] exam. Include a few tricky questions with plausible-sounding wrong answers.`}
        </div>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #9: Explain It Like I&rsquo;m Five</h3>
        <p>If you cannot explain something simply, you do not understand it well enough. Use this prompt to break down confusing concepts.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I'm studying [CONCEPT] in my [COURSE] class and I'm struggling to understand it.

Explain this concept to me in 3 levels:
1. Like I'm 5 years old — use a simple analogy from everyday life, no jargon at all
2. Like I'm a high school student — more precise, introduce the proper terminology, but keep it accessible
3. Like I'm explaining it on an exam — the technically accurate version my professor would want to see, with proper terms and nuance

Then give me one real-world example that makes this concept click. Finally, tell me the #1 thing students get wrong about this concept so I can avoid that mistake.`}
        </div>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #10: Use the Feynman Technique</h3>
        <p>The Feynman Technique is one of the most effective learning methods ever developed. This prompt walks you through it step by step.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I want to use the Feynman Technique to make sure I truly understand [CONCEPT] from my [COURSE] class. Here is my attempt to explain it in simple terms:

"[YOUR EXPLANATION IN YOUR OWN WORDS]"

Now:
1. Identify every part of my explanation that is vague, incorrect, or incomplete
2. Point out any jargon I used without actually explaining it
3. Highlight the gaps — what important aspects did I leave out?
4. Give me a revised simple explanation that fills those gaps
5. Suggest 3 questions I should be able to answer if I truly understand this concept

Be honest about what I got wrong. The whole point of this exercise is to find my knowledge gaps.`}
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #11: Build a Spaced Repetition Schedule</h3>
        <p>Cramming the night before does not work. Spaced repetition does. This prompt creates a science-backed review schedule for your exam.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`My exam is on [DATE] and today is [TODAY'S DATE]. I need to study these topics:

[LIST ALL TOPICS/CHAPTERS]

Create a spaced repetition study schedule that:
- Distributes review sessions so I see each topic multiple times before the exam
- Spaces reviews at increasing intervals (1 day, 3 days, 7 days) based on the science of memory retention
- Puts the hardest/most important topics earlier so they get more review cycles
- Includes specific study activities for each session (not just "review Chapter 3" — tell me what to DO: make flashcards, do practice problems, explain from memory, etc.)
- Leaves the day before the exam for light review only, not cramming

Format as a day-by-day calendar I can follow.`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #12: Generate Mock Exam Questions from Past Material</h3>
        <p>Your professor&rsquo;s old exams are the best study resource, but sometimes you do not have them. This prompt creates realistic exam questions from your course material.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Based on these lecture notes and textbook sections, generate exam questions that a [COURSE] professor would likely ask:

[PASTE NOTES/KEY CONTENT]

Create:
- 5 questions that test recall of key facts and definitions
- 5 questions that test understanding of relationships between concepts
- 3 questions that require applying these concepts to a new scenario
- 2 questions that ask students to evaluate or critique an argument

For each question, provide the answer AND explain the reasoning so I learn from the practice, not just memorize answers. Flag any topics that are "exam favorites" — the kind of thing professors love to test.`}
        </div>

        {/* MID-ARTICLE CTA */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 200+ prompts ready to copy-paste?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Prompt Mega Pack has prompts for studying, writing, research, productivity, and more &mdash; organized by use case and ready to go. Works with ChatGPT, Claude, Gemini, and any LLM.</p>
          <Link href="/ai-prompt-mega-pack" style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the AI Prompt Mega Pack &mdash; $29
          </Link>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>Not ready to buy? <Link href="/free-prompts" style={{ color: '#3B5FFF' }}>Grab 5 free prompts &rarr;</Link></p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: NOTE-TAKING & SUMMARIZATION       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Note-Taking &amp; Summarization Prompts (13&ndash;17)</h2>
        <p>Taking notes is easy. Taking <em>useful</em> notes is hard. These prompts transform raw lecture notes and readings into study materials you will actually use.</p>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #13: Summarize Lecture Notes</h3>
        <p>Turn a messy page of lecture notes into a clean, structured summary that captures everything important.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Here are my raw lecture notes from [COURSE] on [DATE]:

[PASTE YOUR NOTES — even messy, shorthand notes are fine]

Turn these into a clean, structured summary that includes:
1. Main topic and key takeaway (1 sentence)
2. Key concepts covered (bullet points with brief explanations)
3. Important definitions (term: definition format)
4. Examples or case studies mentioned
5. Connections to previous lectures or readings
6. Questions the professor emphasized or hinted might be on the exam
7. 3 things I should review further based on gaps in my notes

Keep the summary under 1 page. Make it something I can quickly review before the next class.`}
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #14: Create a One-Page Study Guide</h3>
        <p>When you have a full chapter or unit to review, condense it into one page of the most essential information.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need a one-page study guide for [CHAPTER/UNIT/TOPIC] in my [COURSE] class. Here is the material:

[PASTE NOTES, TEXTBOOK SECTIONS, OR KEY TOPICS]

Create a dense, well-organized one-page study guide that includes:
- The 5 most important concepts (with 1-2 sentence explanations)
- Key formulas, dates, or facts that must be memorized
- A simple diagram or visual framework if applicable (describe it in text)
- Connections between concepts (how do they relate?)
- Common exam questions on this material and their short answers

Format it to be scannable — use headers, bold text, and bullet points. This is my last-resort review sheet before walking into the exam.`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #15: Extract Key Terms and Definitions</h3>
        <p>Quickly pull out every important term from a reading or chapter so you can build a glossary for the course.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Extract all the key terms and concepts from this text:

[PASTE READING/CHAPTER/NOTES]

For each term, provide:
- Term: [word or phrase]
- Definition: [clear, concise definition in your own words — not copied from the text]
- Why it matters: [one sentence on why this concept is important in the context of [COURSE]]
- Example: [a concrete example that illustrates the term]

Sort them in the order they should be learned (foundational concepts first, advanced concepts later). Flag any terms that are commonly confused with each other.`}
        </div>

        {/* PROMPT 16 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #16: Compare and Contrast Theories</h3>
        <p>When your course covers multiple theories, frameworks, or schools of thought, this prompt creates a clear comparison.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need to compare and contrast [THEORY/FRAMEWORK A] and [THEORY/FRAMEWORK B] for my [COURSE] class.

Create a comparison that includes:
1. A summary of each theory (3-4 sentences each)
2. Key similarities (at least 3)
3. Key differences (at least 5, organized in a table format)
4. Strengths and weaknesses of each
5. What situations or problems each theory explains best
6. Which scholars/thinkers are associated with each
7. A one-sentence explanation I could use on an exam to show I understand both

If these theories are often confused on exams, explain exactly how to tell them apart.`}
        </div>

        {/* PROMPT 17 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #17: Create a Timeline</h3>
        <p>For history, political science, literature, or any course with a chronological component, a timeline brings order to chaos.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a detailed timeline for [TOPIC/PERIOD/SUBJECT] covering [START DATE] to [END DATE].

Based on my course material:
[PASTE NOTES OR LIST KEY EVENTS/DEVELOPMENTS]

For each entry include:
- Date or period
- What happened (1-2 sentences)
- Why it matters (significance/consequences)
- Connection to other events on the timeline

Group events into phases or themes if it helps show patterns. At the end, identify the 3 most important turning points and explain why a professor would likely emphasize them.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: RESEARCH & CRITICAL THINKING      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Research &amp; Critical Thinking Prompts (18&ndash;22)</h2>
        <p>Research is where students waste the most time going in circles. These prompts give you direction, structure, and the critical thinking frameworks your professors are looking for.</p>

        {/* PROMPT 18 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #18: Find Research Angles</h3>
        <p>When you have a research paper but no clear direction, this prompt helps you find an angle that is both interesting and feasible.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need to write a research paper for my [COURSE] class on the broad topic of [TOPIC]. The paper needs to be [LENGTH] and use [NUMBER] scholarly sources.

Suggest 6 specific research angles I could take. For each one:
- A focused research question
- Why this angle is interesting and contributes to the existing conversation
- 2-3 types of sources I should look for (specific journals, databases, or search terms)
- Potential challenges with this angle and how to address them
- Whether this is feasible for a [COURSE LEVEL] student in [TIMEFRAME]

Prioritize angles that have enough existing research to build on but still allow me to say something original.`}
        </div>

        {/* PROMPT 19 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #19: Evaluate Sources Critically</h3>
        <p>Not all sources are created equal. This prompt helps you assess whether a source is credible and useful before you build your argument on it.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Help me evaluate this source for my research paper:

Title: [TITLE]
Author: [AUTHOR]
Published: [DATE] in [JOURNAL/PUBLICATION]
Summary of main argument: [BRIEF SUMMARY]

Evaluate it on:
1. Credibility — Is the author qualified? Is the publication reputable?
2. Currency — Is the information still relevant or has it been superseded?
3. Bias — Does the author have a clear agenda? What perspective is missing?
4. Methodology — Is the research method sound? Are the conclusions supported by the evidence?
5. Relevance — How well does this source support or challenge my thesis: "[YOUR THESIS]"?

Rate it as: Essential / Useful / Marginal / Skip. Then suggest what kind of source would complement or challenge this one.`}
        </div>

        {/* PROMPT 20 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #20: Create a Literature Review Outline</h3>
        <p>Literature reviews are one of the most challenging academic writing tasks. This prompt gives you a framework to organize your sources.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I'm writing a literature review on [TOPIC] for my [COURSE] class. Here are the sources I have so far:

[LIST SOURCES WITH BRIEF SUMMARIES OF EACH]

Help me organize these into a literature review outline:
1. Identify 3-4 themes or categories that group these sources logically
2. For each theme: which sources go together and what they collectively say
3. Where do the sources agree? Where do they disagree?
4. What gaps exist in the current research?
5. How does my research question fit into these gaps?
6. Suggest a logical order for presenting these themes (chronological, thematic, or methodological)

End with a paragraph-by-paragraph outline I can follow when writing.`}
        </div>

        {/* PROMPT 21 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #21: Debate Both Sides of an Issue</h3>
        <p>Understanding both sides of an argument is essential for strong academic writing. This prompt forces you to engage with perspectives you might not have considered.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`The debate topic is: "[TOPIC/QUESTION]" from my [COURSE] class.

Present both sides of this debate as if you were two expert debaters:

FOR the position:
- 4 strongest arguments with evidence
- The most compelling data point or example
- The emotional appeal that makes this side persuasive

AGAINST the position:
- 4 strongest arguments with evidence
- The most compelling data point or example
- The emotional appeal that makes this side persuasive

Then step back as a neutral analyst:
- Which side has stronger evidence?
- Which side relies more on assumptions?
- What would change your mind if you held each position?
- What nuanced middle ground exists that most people miss?`}
        </div>

        {/* PROMPT 22 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #22: Critique a Methodology</h3>
        <p>If your course involves reading studies, being able to critique methodology is a skill that impresses every professor.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need to critique the methodology of this study for my [COURSE] class:

Study title: [TITLE]
Research question: [QUESTION]
Method: [DESCRIBE THE METHOD — sample size, data collection, analysis approach]
Main findings: [KEY RESULTS]

Evaluate the methodology:
1. Sample — Is it large enough? Is it representative? What populations are excluded?
2. Design — Is the research design appropriate for the question? What alternative designs could work?
3. Variables — Are there confounding variables the authors didn't control for?
4. Bias — What types of bias might affect the results (selection bias, confirmation bias, response bias)?
5. Generalizability — Can these findings be applied beyond this specific study?
6. Replication — Could another researcher replicate this study?

Frame the critique constructively — identify weaknesses but also acknowledge strengths. Suggest one specific improvement that would have strengthened the study.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: TIME MANAGEMENT & PRODUCTIVITY    */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Time Management &amp; Productivity Prompts (23&ndash;26)</h2>
        <p>Being a good student is not just about studying harder. It is about managing your time so you can study <em>and</em> sleep <em>and</em> have a life. These prompts help you stay organized without burning out.</p>

        {/* PROMPT 23 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #23: Create a Weekly Study Schedule</h3>
        <p>A realistic study schedule that accounts for your actual life is worth more than any productivity hack.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a weekly study schedule for me. Here's my situation:

Classes:
[LIST YOUR CLASSES WITH DAYS/TIMES]

Commitments:
[WORK, CLUBS, SPORTS, ETC. WITH DAYS/TIMES]

My constraints:
- I'm a [MORNING/EVENING] person
- I can realistically study [X] hours per day before I lose focus
- I need [SUBJECT] the most help — weight it heavier
- I want to keep [DAY] mostly free for rest

Create a Monday-Sunday schedule that:
- Assigns specific subjects to specific time blocks (not just "study")
- Uses 25-50 minute focused blocks with breaks
- Front-loads harder subjects when my energy is highest
- Includes buffer time for unexpected assignments
- Builds in review sessions, not just new material sessions
- Leaves time for exercise, meals, and downtime

Be realistic. An overly ambitious schedule I won't follow is worse than no schedule at all.`}
        </div>

        {/* PROMPT 24 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #24: Build an Assignment Tracker</h3>
        <p>When assignments pile up across multiple classes, things slip through the cracks. This prompt creates a master tracker.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need to organize all my upcoming assignments. Here's everything I have due:

[LIST ALL ASSIGNMENTS WITH DUE DATES AND COURSES]

Create an assignment tracker that:
1. Sorts everything by due date
2. Estimates how many hours each assignment will take (based on type and length)
3. Flags which ones I should start NOW vs. which can wait
4. Identifies any "crunch weeks" where multiple big assignments overlap
5. Suggests a daily task list for the next 2 weeks so nothing is last-minute
6. Marks which assignments are worth the most toward my grade (if I tell you the weighting)

Format it as a clean table. Then give me my top 3 priorities for this week with specific daily action items.`}
        </div>

        {/* PROMPT 25 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #25: Break Down a Big Project</h3>
        <p>A 15-page research paper due in 4 weeks feels impossible. Broken into daily tasks, it becomes manageable.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I have a big project due on [DATE]:

Assignment: [DESCRIBE THE PROJECT — paper, presentation, group project, etc.]
Requirements: [LENGTH, FORMAT, SOURCES NEEDED, ETC.]
My other commitments: [BRIEFLY DESCRIBE HOW BUSY YOUR SCHEDULE IS]

Break this project into small daily tasks from today until the due date. Each task should:
- Take no more than 60-90 minutes
- Have a clear, specific deliverable (not "work on paper" but "write the introduction paragraph")
- Build on the previous day's task
- Include 2-3 buffer days for revision and unexpected delays

Include milestones so I can check my progress:
- By [DATE]: Research complete
- By [DATE]: Outline done
- By [DATE]: First draft finished
- By [DATE]: Revision complete
- [DUE DATE]: Final submission

Make it feel doable. The goal is to never feel overwhelmed.`}
        </div>

        {/* PROMPT 26 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #26: Plan Pomodoro Study Sessions</h3>
        <p>The Pomodoro Technique works because it turns studying into short sprints instead of a marathon. This prompt plans your entire session.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I have [X] hours to study today and I want to use the Pomodoro Technique. Here's what I need to cover:

[LIST SUBJECTS/TASKS WITH PRIORITY LEVEL]

Plan my Pomodoro sessions:
- 25-minute focused blocks with 5-minute breaks
- A longer 15-minute break every 4 pomodoros
- Assign a specific, concrete task to each pomodoro (not just "study biology" but "review Chapter 5 cell division diagrams and create 10 flashcards")
- Order the subjects strategically — hardest when I'm freshest
- Include what to do during breaks (stretch, walk, snack — not phone scrolling)

For each pomodoro, tell me:
- Block #: [Subject] — [Specific task] — [What "done" looks like]

End with a summary of what I will have accomplished if I complete all the blocks.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 6: CREATIVE & FUN PROMPTS            */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Creative &amp; Fun Prompts (27&ndash;30)</h2>
        <p>Learning does not have to feel like a chore. These prompts make studying more engaging by approaching material from unexpected angles. They are especially useful when traditional methods are not sticking.</p>

        {/* PROMPT 27 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #27: Create Mnemonics</h3>
        <p>When you need to memorize a list, sequence, or set of concepts, a good mnemonic makes it effortless.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`I need to memorize this list/sequence for my [COURSE] class:

[LIST THE ITEMS YOU NEED TO MEMORIZE]

Create 3 different mnemonics:
1. An acronym or acrostic (first letter of each word forms a memorable word or phrase)
2. A vivid story that links all the items together in order (make it funny or absurd — those stick better)
3. A visual/spatial mnemonic (describe a mental "memory palace" walk-through where each item is placed in a specific location)

For each mnemonic, explain how to use it to recall the items during an exam. Which one do you think will work best for this particular list and why?`}
        </div>

        {/* PROMPT 28 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #28: Explain a Topic as a Story</h3>
        <p>Our brains are wired for stories, not facts. Turn a dry topic into a narrative and it becomes almost impossible to forget.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Turn this academic topic into an engaging story I won't forget:

Topic: [CONCEPT/THEORY/HISTORICAL EVENT] from my [COURSE] class
Key facts that must be included: [LIST THE IMPORTANT DETAILS]

Write it as a short story (under 500 words) that:
- Has characters, conflict, and resolution
- Weaves in ALL the key facts naturally — they should be part of the plot, not footnotes
- Is entertaining enough that I would actually want to re-read it
- Uses modern analogies or settings if it helps make the concepts relatable
- Ends with a "moral" that captures the main takeaway

After the story, give me a quick "cheat sheet" mapping each story element back to the actual academic concept so I can decode it during an exam.`}
        </div>

        {/* PROMPT 29 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #29: Design a Podcast Episode Outline</h3>
        <p>Explaining something well enough to teach it on a podcast means you truly understand it. Even if you never record it, the outline is a brilliant study tool.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Design a 20-minute podcast episode outline where I explain [TOPIC] from my [COURSE] class to a curious friend who knows nothing about the subject.

Include:
- An attention-grabbing opening hook (why should anyone care about this topic?)
- 3-4 main segments, each covering a key concept
- Transition sentences between segments
- 2-3 real-world examples or analogies to make abstract ideas concrete
- Anticipated listener questions with answers
- A memorable closing that summarizes the "one big idea"

Write it in a conversational tone — not like a lecture, like a smart friend explaining something over coffee. Include [bracketed stage directions] for when to pause, emphasize, or tell an anecdote.`}
        </div>

        {/* PROMPT 30 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Prompt #30: Build a Mind Map</h3>
        <p>Mind maps show how concepts connect to each other. This prompt creates a text-based mind map you can visualize or draw out.</p>
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: '8px', padding: '16px', fontSize: '14px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', marginBottom: '24px' }}>
{`Create a detailed mind map for [TOPIC/CHAPTER] from my [COURSE] class.

Source material:
[PASTE NOTES OR LIST KEY CONCEPTS]

Structure the mind map with:
- Central concept in the middle
- 4-6 main branches (major subtopics)
- 2-4 sub-branches for each main branch (supporting details, examples, key terms)
- Connections between branches — draw lines between concepts that relate to each other across different branches and explain the relationship

Format it as an indented text outline that I can easily redraw on paper. Use arrows (→) to show cause-and-effect relationships and (↔) for bidirectional relationships.

After the mind map, suggest the 3 connections between branches that are most likely to appear on an exam as "compare and contrast" or "explain the relationship" questions.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 7: PRO TIPS                          */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>5 Pro Tips for Students Using AI</h2>
        <p>The prompts above are powerful, but how you use them matters just as much as which ones you pick. Here are five principles that will keep you on the right side of the line between smart studying and academic trouble.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. Always Verify the Facts</h3>
        <p>ChatGPT can generate plausible-sounding information that is completely wrong. It can invent citations, misstate historical dates, and confidently present incorrect formulas. <strong>Never trust a fact from ChatGPT without verifying it against a reliable source.</strong> Use AI to understand concepts and structure your thinking, but always cross-check specific facts, quotes, and data against your textbook, lecture slides, or scholarly databases.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. Use AI as a Tutor, Not a Writer</h3>
        <p>The purpose of your assignments is for <em>you</em> to learn. If ChatGPT writes your essay, you have learned nothing and your professor will almost certainly notice. The best way to use AI is as a tutor: have it explain things you do not understand, give feedback on work you have already written, and challenge your thinking. Your ideas, your words, your learning &mdash; AI just helps you get there faster.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. Customize Prompts with Your Course Material</h3>
        <p>Generic prompts give generic results. The prompts in this guide are templates &mdash; they get dramatically better when you paste in your actual lecture notes, syllabus, textbook excerpts, or assignment rubrics. The more specific context you give ChatGPT about your course, the more useful and relevant its responses will be. Always include the course name, the professor&rsquo;s expectations, and the specific material you are working with.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. Iterate on Responses</h3>
        <p>The first response from ChatGPT is rarely the best one. Treat it as a first draft. Ask follow-up questions: &ldquo;Go deeper on point 3.&rdquo; &ldquo;That explanation was too complicated &mdash; simplify it.&rdquo; &ldquo;Give me a different example.&rdquo; &ldquo;How would you explain this differently if I told you I still do not get it?&rdquo; The students who get the most value from AI are the ones who have a conversation, not the ones who copy-paste the first answer.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. Combine AI with Traditional Study Methods</h3>
        <p>AI is a powerful addition to your study toolkit, not a replacement for everything else. The research is clear: handwriting notes improves retention. Studying with classmates builds understanding through discussion. Office hours with your professor build relationships and clarify nuances that AI cannot capture. Use ChatGPT to enhance these methods &mdash; generate flashcards to review with friends, prepare questions for office hours, create study guides to handwrite before exams. The combination is stronger than any single approach.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If you found these prompts useful, check out these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: '#3B5FFF' }}>25 ChatGPT Tips and Tricks Most People Don&rsquo;t Know in 2026</Link></li>
          <li><Link href="/blog/best-free-ai-tools-2026" style={{ color: '#3B5FFF' }}>Best Free AI Tools in 2026</Link></li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FAQ                                          */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can students use ChatGPT for school?</h3>
        <p>Yes. Most universities now have AI-use policies that allow students to use ChatGPT for brainstorming, understanding concepts, creating study materials, and editing their own work. The key is transparency: always follow your school&rsquo;s specific guidelines, disclose AI use when required, and never submit AI-generated text as your own original writing. Think of ChatGPT as a tutor that helps you learn, not a shortcut that replaces learning.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What are the best ChatGPT prompts for studying?</h3>
        <p>The most effective study prompts include: creating flashcards from your notes, generating practice quiz questions, explaining difficult concepts using simple analogies (the Feynman technique), building spaced repetition schedules for exam prep, and summarizing long readings into one-page study guides. The key is giving ChatGPT context about your course, your current understanding level, and the specific format you want.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Is using ChatGPT cheating?</h3>
        <p>Using ChatGPT is not inherently cheating, but it depends on how you use it and your school&rsquo;s policy. Using ChatGPT to understand a concept, check your reasoning, generate practice problems, or improve your study process is no different from using a tutor or a textbook. Submitting AI-generated essays or homework answers as your own work is academic dishonesty at most institutions. The line is clear: use AI to learn better, not to avoid learning.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How can ChatGPT help with essay writing?</h3>
        <p>ChatGPT can help with essay writing in several ethical ways: brainstorming topic ideas and angles, generating thesis statement options, creating detailed outlines, suggesting counterarguments to strengthen your argument, checking your logic and flow, helping with citation formatting, and providing feedback on drafts you have already written. The key is to use ChatGPT as a writing coach, not a ghostwriter. Write the essay yourself, then use ChatGPT to improve your own work.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FINAL CTA                                    */}
        {/* ============================================ */}

        <div style={{ marginTop: '48px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready for 200+ prompts you can use right now?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Prompt Mega Pack</strong> includes prompts for studying, writing, research, productivity, career prep, and more &mdash; all organized by use case with fill-in-the-blank templates. Works with ChatGPT, Claude, Gemini, and any LLM. $29 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Link href="/ai-prompt-mega-pack" style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Mega Pack &mdash; $29
            </Link>
            <a href={BUNDLE_URL} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Full Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Mega Pack plus 7 niche industry kits &mdash; best value if you want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          <em>The Midas Tools Team builds <a href="https://www.midastools.co" style={{ color: '#3B5FFF' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and students. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#3B5FFF' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}
