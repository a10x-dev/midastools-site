import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const BUILDER = '/chatbot-builder?utm_source=blog&utm_medium=cta&utm_campaign=ai-chatbot-dental';
const DEMO_ID = 'cb_deee490923b5'; // real dental demo bot (Independence Family Dentistry) — verified live + grounded

export default function AIChatbotForDentalPractices2026() {
  const title = 'AI Chatbot for Dental Practices: Book More Patients While Your Office Is Closed (2026)';
  const description = 'A no-code AI chatbot for dental practices that answers services, insurance, hours, and new-patient questions 24/7 and captures leads while the front desk is off. Try a real one built from a real dental practice website (embedded live on the page), then build your own free in about a minute — $39/mo to keep it live.';
  const url = 'https://www.midastools.co/blog/ai-chatbot-for-dental-practices-2026';

  const faqData = [
    {
      question: 'What does an AI chatbot do for a dental practice?',
      answer: 'It answers the questions patients ask after 5pm when the front desk is gone: are you taking new patients, what are your hours, do you do Invisalign / implants / same-day crowns, do you handle emergencies, and how do I book. It captures the visitor’s name and number directly, so an after-hours question becomes a booked new patient instead of a click that bounced to the practice across town.'
    },
    {
      question: 'Does it need coding or a developer to set up?',
      answer: 'No. You paste the practice’s website URL, the builder reads the site and turns it into a knowledge base, and you get a working bot plus a one-line embed snippet in about a minute. Drop the snippet on the site (or the web person does it in five minutes) and it’s live. No code, no monthly agency retainer, no 48-hour setup.'
    },
    {
      question: 'Will the chatbot make up insurance details or prices?',
      answer: 'A well-built dental bot answers only from the practice’s own website — it will not invent prices, promise insurance coverage, or fabricate services. When a patient asks something case-specific (exact cost for their treatment, whether a plan is accepted), it says the front desk will confirm and captures their contact info instead of guessing. For a healthcare business, that honesty is the whole point.'
    },
    {
      question: 'How much does an AI chatbot for a dental practice cost?',
      answer: 'Building it is free. Keeping a live, branded, lead-capturing bot on the site is $39/mo — a fraction of the $200–$500/mo agencies charge for a managed chatbot, and a rounding error against the lifetime value of a single new patient. There’s no setup fee and no contract.'
    },
    {
      question: 'Can I sell AI chatbots to dentists as a service?',
      answer: 'Yes — dental is one of the best niches for a chatbot side business. A single new patient is worth hundreds up front and thousands over their lifetime, so practices happily pay $300/mo for a 24/7 assistant that protects new-patient bookings. You build a free demo from their website, send them a live link they can chat with, and charge $300/mo while paying $39/mo to keep it live — roughly $260/mo margin per client. The demo is the pitch.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-07-05',
    dateModified: '2026-07-05',
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

  const h2 = { fontSize: '1.4rem', fontWeight: 700, marginTop: 40 };
  const ctaBox = {
    background: '#F0F4FF', border: '1px solid #C7D2FE', borderRadius: 14,
    padding: '22px 24px', margin: '28px 0'
  };
  const ctaBtn = {
    display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '13px 30px',
    borderRadius: 100, textDecoration: 'none', fontWeight: 700, fontSize: 15
  };

  return (
    <Layout>
      <Head>
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI chatbot for dental practices, AI chatbot for dentists, dental website chatbot, 24/7 dental booking assistant, dental office lead capture, AI receptionist dental, chatbot for dental clinic, sell AI chatbots to dentists" />
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

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: 1.7 }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: 14 }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginTop: 24, marginBottom: 8, lineHeight: 1.2 }}>
          AI Chatbot for Dental Practices: Book More Patients While Your Office Is Closed
        </h1>
        <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 32 }}>July 5, 2026 &middot; Midas Tools Team &middot; 8 min read</p>

        <p>Most new-patient searches don&rsquo;t happen during office hours. Someone with a chipped tooth or a &ldquo;dentist near me who takes my insurance&rdquo; question lands on your site at 9pm, wonders <em>&ldquo;are they even taking new patients, and do they do implants?&rdquo;</em> &mdash; and if there&rsquo;s no one to ask, they close the tab and call the practice with the chat bubble. That&rsquo;s a new patient worth thousands over their lifetime, gone.</p>
        <p>An <strong>AI chatbot for your dental practice</strong> answers those questions 24/7, straight from your own website, and captures the visitor&rsquo;s contact info so an after-hours question becomes a lead for your front desk. No code. No agency retainer. Live in about a minute.</p>

        <h2 style={h2}>Try a real dental chatbot right now</h2>
        <p>This isn&rsquo;t a mockup. The assistant below was built in about 60 seconds from a real dental practice&rsquo;s website. Ask it about Invisalign, same-day crowns, emergencies, hours, or whether they take new patients &mdash; it answers only from the practice&rsquo;s real information, and it won&rsquo;t make anything up.</p>
        <div style={{ margin: '20px 0', borderRadius: 16, overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
          <iframe
            src={`/chat/${DEMO_ID}`}
            title="Live AI chatbot demo built from a real dental practice website"
            loading="lazy"
            style={{ width: '100%', height: 560, border: 'none', display: 'block' }}
          />
        </div>
        <p style={{ fontSize: 14, color: '#6B7280' }}>
          Widget not loading? <a href={`/chat/${DEMO_ID}`} target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Open the live demo in a new tab &rarr;</a>
        </p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>That took 60 seconds. Now build one for your practice &mdash; free.</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Paste your website, get a working bot and a one-line embed snippet. Keep it live for $39/mo. No setup fee, no contract.</p>
          <a href={BUILDER} style={ctaBtn}>Build my dental chatbot free &rarr;</a>
        </div>

        <h2 style={h2}>What a dental chatbot actually answers</h2>
        <p>Because it&rsquo;s built from your own site, it handles the exact questions your front desk fields all day &mdash; without tying anyone up:</p>
        <ul>
          <li><strong>New patients</strong> &mdash; &ldquo;Are you accepting new patients, and what does the first visit look like?&rdquo;</li>
          <li><strong>Services</strong> &mdash; &ldquo;Do you do Invisalign / implants / same-day crowns / whitening / dentures?&rdquo;</li>
          <li><strong>Insurance &amp; payment</strong> &mdash; which plans you take, financing options, and &ldquo;the front desk will confirm your specific plan.&rdquo;</li>
          <li><strong>Hours, location &amp; emergencies</strong> &mdash; when you&rsquo;re open, where you are, and what to do for an after-hours emergency.</li>
          <li><strong>Booking</strong> &mdash; how to schedule, and it captures the patient&rsquo;s name + contact so the office can follow up first thing.</li>
        </ul>
        <p>When it doesn&rsquo;t know something &mdash; an exact price for a specific case, whether a particular plan is accepted &mdash; it doesn&rsquo;t guess. It says the front desk will confirm and grabs the contact info. For a healthcare business, that honesty is the whole point.</p>

        <h2 style={h2}>Why $39/mo instead of a $299/mo agency</h2>
        <p>Managed-chatbot agencies charge $200&ndash;$500/mo and take 48 hours plus a setup fee to launch. You&rsquo;re paying for their time, not better technology. The builder does the same core job &mdash; scrape the site, distill a knowledge base, generate a branded bot &mdash; in about a minute, and keeps it live and lead-capturing for <strong>$39/mo</strong>. One recovered new patient covers years of it.</p>

        <h2 style={h2}>Run a service business? Dental is a top chatbot niche</h2>
        <p>If you build and manage chatbots for clients, dental practices are one of the best niches to target. A single new patient is worth hundreds up front and thousands over their lifetime, so owners happily pay <strong>$300/mo</strong> for a 24/7 assistant that protects new-patient bookings. The play is simple:</p>
        <ol>
          <li>Build a free demo bot from a practice&rsquo;s actual website (~1 min).</li>
          <li>Send the owner the live demo link: <em>&ldquo;I built your office a 24/7 AI assistant from your own site &mdash; try it here.&rdquo;</em></li>
          <li>Close on value: charge $300/mo, pay $39/mo to keep it live, keep ~$260/mo per client.</li>
        </ol>
        <p>The demo is the pitch &mdash; owners chat with their own assistant before you ever ask for money. Ten practices in one metro is a real recurring business. <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>Here&rsquo;s the full playbook for selling chatbots to local businesses &rarr;</Link></p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>Build your first dental chatbot &mdash; free</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Whether it&rsquo;s for your own practice or your first client, the fastest way to see how good it is: build one. Paste a URL, get a live demo link in a minute.</p>
          <a href={BUILDER} style={ctaBtn}>Build a chatbot free &rarr;</a>
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        {faqData.map((f, i) => (
          <div key={i} style={{ marginTop: 22 }}>
            <p style={{ fontWeight: 700, marginBottom: 4 }}>{f.question}</p>
            <p style={{ margin: 0, color: '#374151' }}>{f.answer}</p>
          </div>
        ))}

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />
        <p style={{ fontSize: 14, color: '#6B7280' }}>
          Related: <Link href="/blog/ai-chatbot-for-real-estate-agents-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Real Estate Agents</Link> &middot;{' '}
          <Link href="/blog/ai-chatbot-for-law-firms-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Law Firms</Link> &middot;{' '}
          <Link href="/blog/ai-chatbot-for-med-spas-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Med Spas</Link> &middot;{' '}
          <Link href="/blog/ai-chatbot-for-home-services-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Home Services</Link> &middot;{' '}
          <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Chatbots to Local Businesses ($300/mo)</Link> &middot;{' '}
          <Link href="/chatbot-builder" style={{ color: '#3B5FFF' }}>Build a free AI chatbot &rarr;</Link>
        </p>
      </div>
    </Layout>
  );
}
