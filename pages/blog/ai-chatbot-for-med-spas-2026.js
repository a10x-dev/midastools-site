import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const BUILDER = '/chatbot-builder?utm_source=blog&utm_medium=cta&utm_campaign=ai-chatbot-med-spa';
const DEMO_ID = 'cb_d72e5ca7c217'; // real med-spa demo bot (Cosmetiq Medicine) — verified live

export default function AIChatbotForMedSpas2026() {
  const title = 'AI Chatbot for Med Spas: Turn Your Website Into a 24/7 Booking Assistant (2026)';
  const description = 'A no-code AI chatbot for med spas and aesthetic clinics that answers treatment, pricing, and location questions 24/7 and captures leads while you sleep. Try a real one built from a real med spa website, then build your own free in about a minute — $39/mo to keep live.';
  const url = 'https://www.midastools.co/blog/ai-chatbot-for-med-spas-2026';

  const faqData = [
    {
      question: 'What does an AI chatbot do for a med spa?',
      answer: 'It answers the questions prospective patients ask at 9pm when your front desk is closed: which treatments you offer (Botox, fillers, laser, facials), rough pricing, whether you handle a specific concern, your locations and hours, and how to book a consultation. It captures the visitor’s name and contact info directly, so an after-hours inquiry becomes a lead in your inbox instead of a lost booking that went to the clinic down the street.'
    },
    {
      question: 'Does it need coding or a developer to set up?',
      answer: 'No. You paste your med spa’s website URL, the builder reads your site and turns it into a knowledge base, and you get a working bot plus a one-line embed snippet in about a minute. Drop the snippet on your site (or your web person does it in five minutes) and it’s live. No code, no monthly agency retainer, no 48-hour setup.'
    },
    {
      question: 'Will the chatbot make up prices or treatments?',
      answer: 'A well-built med spa bot answers only from your own website — it will not invent prices, promise results, or fabricate services. When a patient asks something it doesn’t know (exact pricing for their case, medical eligibility), it says a team member will follow up and captures their contact info, instead of guessing. That’s exactly what you want for a medical-adjacent business.'
    },
    {
      question: 'How much does an AI chatbot for a med spa cost?',
      answer: 'Building it is free. Keeping a live, branded, lead-capturing bot on your site is $39/mo — a fraction of the $200–$500/mo agencies charge for a managed chatbot, and a rounding error against the value of a single recovered booking. There’s no setup fee and no contract.'
    },
    {
      question: 'Can I sell AI chatbots to med spas as a service?',
      answer: 'Yes — med spas are one of the best niches for a chatbot side business. Each recovered consult is worth hundreds to thousands, so owners happily pay $300/mo for a managed 24/7 assistant. You build a free demo from their website, send them a live link they can chat with, and charge $300/mo while paying $39/mo to keep it live — roughly $260/mo margin per client. Build the demo first; the demo is the pitch.'
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
        <meta name="keywords" content="AI chatbot for med spas, AI chatbot for aesthetic clinics, med spa website chatbot, 24/7 booking assistant med spa, med spa lead capture, AI receptionist med spa, chatbot for botox clinic, sell AI chatbots to med spas" />
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
          AI Chatbot for Med Spas: Turn Your Website Into a 24/7 Booking Assistant
        </h1>
        <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 32 }}>July 5, 2026 &middot; Midas Tools Team &middot; 8 min read</p>

        <p>Most med spa leads don&rsquo;t come in during business hours. Someone sees your Botox before-and-after on Instagram at 10pm, lands on your site, wonders <em>&ldquo;do they do lip filler, and how much is it?&rdquo;</em> &mdash; and if there&rsquo;s no one to ask, they close the tab. That&rsquo;s a booking that quietly went to the clinic down the street.</p>
        <p>An <strong>AI chatbot for your med spa</strong> answers those questions 24/7, straight from your own website, and captures the visitor&rsquo;s contact info so an after-hours question becomes a lead in your inbox. No code. No agency retainer. Live in about a minute.</p>

        <h2 style={h2}>Try a real med spa chatbot right now</h2>
        <p>This isn&rsquo;t a mockup. The assistant below was built in about 60 seconds from a real aesthetic clinic&rsquo;s website. Ask it about lip filler, treatments, pricing, or where they&rsquo;re located &mdash; it answers only from the clinic&rsquo;s real information, and it won&rsquo;t make anything up.</p>
        <div style={{ margin: '20px 0', borderRadius: 16, overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
          <iframe
            src={`/chat/${DEMO_ID}`}
            title="Live AI chatbot demo built from a real med spa website"
            loading="lazy"
            style={{ width: '100%', height: 560, border: 'none', display: 'block' }}
          />
        </div>
        <p style={{ fontSize: 14, color: '#6B7280' }}>
          Widget not loading? <a href={`/chat/${DEMO_ID}`} target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Open the live demo in a new tab &rarr;</a>
        </p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>That took 60 seconds. Now build one for your med spa &mdash; free.</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Paste your website, get a working bot and a one-line embed snippet. Keep it live for $39/mo. No setup fee, no contract.</p>
          <a href={BUILDER} style={ctaBtn}>Build my med spa chatbot free &rarr;</a>
        </div>

        <h2 style={h2}>What a med spa chatbot actually answers</h2>
        <p>Because it&rsquo;s built from your own site, it handles the exact questions your front desk fields all day &mdash; without tying anyone up:</p>
        <ul>
          <li><strong>Treatments</strong> &mdash; &ldquo;Do you do Botox / fillers / laser hair removal / microneedling / facials?&rdquo;</li>
          <li><strong>Pricing direction</strong> &mdash; ranges and &ldquo;book a consult for an exact quote&rdquo; where pricing is case-by-case.</li>
          <li><strong>Locations &amp; hours</strong> &mdash; which location is closest, parking, when you&rsquo;re open.</li>
          <li><strong>Booking</strong> &mdash; how to schedule a consultation, and it captures the lead&rsquo;s name + contact so you can follow up.</li>
          <li><strong>Aftercare &amp; FAQs</strong> &mdash; downtime, what to expect, prep instructions pulled from your site.</li>
        </ul>
        <p>When it doesn&rsquo;t know something &mdash; medical eligibility, an exact price for a specific case &mdash; it doesn&rsquo;t guess. It says a team member will follow up and grabs the contact info. For a medical-adjacent business, that honesty is the whole point.</p>

        <h2 style={h2}>Why $39/mo instead of a $299/mo agency</h2>
        <p>Managed-chatbot agencies charge $200&ndash;$500/mo and take 48 hours plus a setup fee to launch. You&rsquo;re paying for their time, not better technology. The builder does the same core job &mdash; scrape the site, distill a knowledge base, generate a branded bot &mdash; in about a minute, and keeps it live and lead-capturing for <strong>$39/mo</strong>. One recovered consultation usually covers a year of it.</p>

        <h2 style={h2}>Running a service business? Med spas are a top chatbot niche</h2>
        <p>If you build and manage chatbots for clients, aesthetic clinics are one of the best niches to target. A single recovered consult is worth hundreds to thousands, so owners happily pay <strong>$300/mo</strong> for a 24/7 assistant that protects bookings. The play is simple:</p>
        <ol>
          <li>Build a free demo bot from a med spa&rsquo;s actual website (~1 min).</li>
          <li>Send the owner the live demo link: <em>&ldquo;I built your clinic a 24/7 AI assistant from your own site &mdash; try it here.&rdquo;</em></li>
          <li>Close on value: charge $300/mo, pay $39/mo to keep it live, keep ~$260/mo per client.</li>
        </ol>
        <p>The demo is the pitch &mdash; owners chat with their own assistant before you ever ask for money. Ten med spas in one city is a real recurring business. <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>Here&rsquo;s the full playbook for selling chatbots to local businesses &rarr;</Link></p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>Build your first med spa chatbot &mdash; free</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Whether it&rsquo;s for your own clinic or your first client, the fastest way to see how good it is: build one. Paste a URL, get a live demo link in a minute.</p>
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
          Related: <Link href="/blog/ai-chatbot-for-dental-practices-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Dental Practices</Link> &middot;{' '}
          <Link href="/blog/ai-chatbot-for-home-services-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Home Services</Link> &middot;{' '}
          <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Chatbots to Local Businesses ($300/mo)</Link> &middot;{' '}
          <Link href="/chatbot-builder" style={{ color: '#3B5FFF' }}>Build a free AI chatbot &rarr;</Link>
        </p>
      </div>
    </Layout>
  );
}
