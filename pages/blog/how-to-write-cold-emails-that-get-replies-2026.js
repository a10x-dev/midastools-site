import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const TOOL = 'https://www.midastools.co/outreach-machine?utm_source=blog&utm_medium=post&utm_campaign=cold-email-guide';

export default function HowToWriteColdEmailsThatGetReplies2026() {
  const title = 'How to Write Cold Emails That Get Replies in 2026 (7 Templates + a Free AI Tool)';
  const description = 'A practical guide to writing cold emails that actually get replies in 2026: the 4-part structure top reps use, 7 copy-paste templates, the mistakes that kill your reply rate, and a free AI tool that writes the whole thing for you.';
  const url = 'https://www.midastools.co/blog/how-to-write-cold-emails-that-get-replies-2026';

  const faqData = [
    {
      question: 'What makes a cold email get a reply?',
      answer: "Three things, in order: relevance, brevity, and a low-friction ask. The opening line has to prove you are writing to them specifically — not blasting a list. The body has to be short enough to read on a phone in under 15 seconds. And the call to action has to be easy to say yes to ('worth a look?') instead of a big commitment ('book a 30-minute call'). Cold emails that respect all three regularly hit 5–15% reply rates."
    },
    {
      question: 'How long should a cold email be?',
      answer: 'Under 120 words, ideally 4–6 sentences. Decision-makers skim on mobile. Every sentence past the sixth lowers your reply rate. If you cannot make your point in six sentences, you do not understand the point well enough yet.'
    },
    {
      question: 'What is the biggest cold email mistake?',
      answer: "Opening with yourself. 'Hi, my name is X and I work at Y' tells the reader this is about you, not them. The highest-replying cold emails open with a specific observation about the recipient's company, role, or recent activity — proof you did 30 seconds of homework before hitting send."
    },
    {
      question: 'Is there a free tool that writes cold emails for me?',
      answer: 'Yes. The Outreach Machine is a free AI tool that takes what you sell and who you are targeting, then writes a personalized cold email, a LinkedIn DM version, and a 3-touch follow-up sequence engineered to get replies. No signup required to try it.'
    },
    {
      question: 'How many follow-ups should I send?',
      answer: 'Three to four, spaced 3–4 days apart. Most replies come on the second and third touch, not the first. The follow-up is not a nag — each one should add a new angle, a new proof point, or a softer ask. Reps who follow up 3+ times book roughly 2x the meetings of reps who send one email and give up.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-05-31',
    dateModified: '2026-05-31',
    author: { '@type': 'Organization', name: 'Midas Tools Team', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  const ctaBox = (label) => (
    <div style={{ background: '#3B5FFF', borderRadius: '12px', padding: '28px 24px', margin: '32px 0', textAlign: 'center' }}>
      <p style={{ color: '#FFF', fontSize: '20px', fontWeight: '700', margin: '0 0 8px' }}>Don&rsquo;t want to write it yourself?</p>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 18px' }}>
        Paste what you sell + who you&rsquo;re targeting. The Outreach Machine writes a personalized cold email, a LinkedIn DM, and a 3-touch follow-up sequence in about 10 seconds. Real AI, free, no signup.
      </p>
      <a href={TOOL} style={{ display: 'inline-block', background: '#FFF', color: '#3B5FFF', fontWeight: '700', fontSize: '16px', padding: '14px 36px', borderRadius: '100px', textDecoration: 'none' }}>
        {label} &rarr;
      </a>
    </div>
  );

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="cold email templates, how to write a cold email, cold emails that get replies, free cold email generator, AI cold email, cold outreach 2026, cold email examples, cold DM template, sales outreach templates" />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          How to Write Cold Emails That Get Replies in 2026 (7 Templates + a Free AI Tool)
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>May 31, 2026 &middot; Midas Tools Team &middot; 9 min read</p>

        <p>Most cold emails fail for the same boring reason: they&rsquo;re about the sender. &ldquo;Hi, my name is&hellip;&rdquo;, &ldquo;I&rsquo;m reaching out because&hellip;&rdquo;, &ldquo;We help companies like yours&hellip;&rdquo;. The reader can smell the mail-merge in the first five words, and they archive it before sentence two.</p>

        <p>A cold email that gets replies does the opposite. It proves &mdash; in the first line &mdash; that you wrote it for <em>this</em> person. It&rsquo;s short enough to read on a phone. And it ends with an ask so small it feels rude to ignore.</p>

        <p>Do that consistently and a cold email reply rate of <strong>5&ndash;15%</strong> is completely normal, even from a cold list. This guide gives you the exact structure, 7 copy-paste templates, the mistakes that quietly kill your numbers, and &mdash; if you&rsquo;d rather not write them by hand &mdash; a free tool that does it for you.</p>

        {ctaBox('Write my cold email free')}

        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>The 4-part structure behind every reply-getting cold email</h2>

        <p>Forget &ldquo;frameworks&rdquo; with ten steps. Every cold email that works has the same four parts, in this order:</p>

        <p><strong>1. The pattern-interrupt opener.</strong> One sentence that proves you did 30 seconds of homework. Reference something specific: a recent hire, a product launch, a line from their about page, a number they posted. The goal is for the reader to think &ldquo;wait, this isn&rsquo;t a blast.&rdquo;</p>

        <p><strong>2. The relevance bridge.</strong> One sentence connecting that observation to a problem they probably have. Not your product &mdash; their problem. &ldquo;Teams scaling outbound that fast usually hit X.&rdquo;</p>

        <p><strong>3. The proof, compressed.</strong> One sentence of evidence you can help &mdash; a result, a name, a number. No paragraphs, no case-study links. Just enough to be credible.</p>

        <p><strong>4. The micro-commitment ask.</strong> One sentence ending in a question that&rsquo;s almost free to answer. Not &ldquo;do you have 30 minutes Thursday?&rdquo; &mdash; that&rsquo;s expensive. Try &ldquo;Worth a look, or off base?&rdquo; The easier the yes, the higher the reply rate.</p>

        <p>Four sentences. That&rsquo;s the whole thing. Add a fifth only if it earns its place.</p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>7 cold email templates that get replies</h2>

        <p>Steal these. The bracketed parts are where you do the personalization &mdash; that part is non-negotiable. A template with no personalization is just spam with better grammar.</p>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>1. The &ldquo;I noticed&rdquo; opener (best all-rounder)</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          Subject: [specific thing they did]<br /><br />
          Noticed [COMPANY] just [SPECIFIC EVENT &mdash; hire, launch, milestone]. Usually when teams do that, [RELEVANT PROBLEM] becomes the bottleneck fast.<br /><br />
          We help [SIMILAR COMPANIES] fix exactly that &mdash; [ONE-LINE RESULT].<br /><br />
          Worth a quick look, or totally off base?
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>2. The number-led opener</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          Subject: [number] for [COMPANY]<br /><br />
          [SPECIFIC NUMBER OR STAT relevant to them]. That&rsquo;s the gap most [THEIR ROLE]s don&rsquo;t see until it&rsquo;s expensive.<br /><br />
          We closed that gap for [NAME/COMPANY] in [TIMEFRAME].<br /><br />
          Want the 2-line version of how?
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>3. The contrarian take</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          Subject: unpopular opinion about [THEIR INDUSTRY]<br /><br />
          Most [THEIR ROLE]s are told to [COMMON ADVICE]. In my experience that&rsquo;s exactly what stalls [OUTCOME THEY WANT].<br /><br />
          We did the opposite for [COMPANY] &mdash; [RESULT].<br /><br />
          Happy to send the 1-pager if it&rsquo;s useful?
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>4. The warm-referral angle</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          Subject: [MUTUAL CONNECTION / SHARED GROUP]<br /><br />
          Saw we&rsquo;re both [SHARED CONTEXT &mdash; group, event, connection]. You came up because [REASON].<br /><br />
          We help [PEOPLE LIKE THEM] with [OUTCOME] &mdash; [PROOF].<br /><br />
          Open to a quick intro, or not the right time?
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>5. The short LinkedIn DM</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          [FIRST NAME] &mdash; [SPECIFIC OBSERVATION ABOUT THEM]. We help [SIMILAR PEOPLE] [OUTCOME] without [COMMON PAIN]. Worth a look?
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>6. Follow-up #1 (the bump)</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          [FIRST NAME] &mdash; floating this back up. Different angle: [NEW PROOF POINT OR ONE-LINE INSIGHT].<br /><br />
          Still worth a look?
        </div>

        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '32px', marginBottom: '8px' }}>7. Follow-up #3 (the breakup)</h3>
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '20px', margin: '12px 0', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.7' }}>
          [FIRST NAME] &mdash; I&rsquo;ll stop here so I&rsquo;m not cluttering your inbox. If [OUTCOME] is on your radar this quarter, just reply &ldquo;send it&rdquo; and I&rsquo;ll send the 1-pager. If not, no worries at all.
        </div>

        {ctaBox('Generate all of these for my offer')}

        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>5 mistakes that quietly kill your reply rate</h2>

        <p><strong>Opening with yourself.</strong> &ldquo;My name is&hellip;&rdquo; tells the reader the email is about you. Open with them.</p>
        <p><strong>Writing for desktop.</strong> Most cold emails are read on a phone. If it&rsquo;s more than a thumb-scroll, it&rsquo;s too long.</p>
        <p><strong>Asking for a 30-minute call in email one.</strong> That&rsquo;s a marriage proposal on a first date. Ask for a yes/no, not a calendar slot.</p>
        <p><strong>Fake personalization.</strong> &ldquo;I love what you&rsquo;re doing at [COMPANY]&rdquo; is worse than no personalization &mdash; it signals a template. Reference something only someone who looked would know.</p>
        <p><strong>Giving up after one send.</strong> Most replies come on touch 2 and 3. One-and-done is leaving the majority of your meetings on the table.</p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>The fastest way: let AI write the first draft</h2>

        <p>The templates above work, but personalizing seven of them for every prospect is slow. That&rsquo;s the part the <Link href="/outreach-machine" style={{ color: '#3B5FFF' }}>Outreach Machine</Link> handles for you.</p>

        <p>You paste two things: what you sell, and who you&rsquo;re reaching out to (a name, a company, a line from their site). It writes a personalized cold email, a native LinkedIn DM version, and a 3-touch follow-up sequence &mdash; using the exact structure in this guide. It&rsquo;s real AI, it&rsquo;s free to use, and there&rsquo;s no signup to try it. You edit the one or two details only you know, and send.</p>

        <p>Think of the templates here as the theory and the tool as the typing. Use both.</p>

        {ctaBox('Try the Outreach Machine free')}

        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '48px', marginBottom: '16px' }}>Frequently asked questions</h2>
        {faqData.map((faq, i) => (
          <div key={i} style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '6px' }}>{faq.question}</h3>
            <p style={{ margin: 0 }}>{faq.answer}</p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '40px 0 24px' }} />
        <p style={{ fontSize: '14px', color: '#6B7280' }}>
          Related: <Link href="/outreach-machine" style={{ color: '#3B5FFF' }}>The Outreach Machine (free tool)</Link> &middot;{' '}
          <Link href="/blog/how-to-make-money-with-ai-2026" style={{ color: '#3B5FFF' }}>How to Make Money with AI in 2026</Link> &middot;{' '}
          <Link href="/freelancer-kit" style={{ color: '#3B5FFF' }}>Freelancer AI Kit</Link>
        </p>
      </div>
    </Layout>
  );
}
