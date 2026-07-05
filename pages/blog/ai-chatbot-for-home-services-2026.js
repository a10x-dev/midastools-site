import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const BUILDER = '/chatbot-builder?utm_source=blog&utm_medium=cta&utm_campaign=ai-chatbot-home-services';
const DEMO_ID = 'cb_ec9bf4bac357'; // real plumbing demo bot (Independent Plumbing Solutions) — verified live + grounded

export default function AIChatbotForHomeServices2026() {
  const title = 'AI Chatbot for Home Service Businesses: Capture After-Hours Emergencies (2026)';
  const description = 'A no-code AI chatbot for plumbers, HVAC, electricians, and home service contractors that answers services, service-area, and emergency questions 24/7 and captures the lead while you’re on a job or asleep. Try a real one built from a real plumbing company’s website (embedded live on the page), then build your own free in about a minute — $39/mo to keep it live.';
  const url = 'https://www.midastools.co/blog/ai-chatbot-for-home-services-2026';

  const faqData = [
    {
      question: 'What does an AI chatbot do for a plumbing, HVAC, or home service business?',
      answer: 'It answers the questions homeowners ask at the worst possible time — a burst pipe at 11pm, a dead furnace on a Sunday, a panel that keeps tripping. It tells them whether you handle emergencies, what areas you serve, what services you offer, and how to reach you, then captures their name and number so a 2am panic becomes a booked job instead of a call to the next contractor on the list.'
    },
    {
      question: 'Does it need coding or a developer to set up?',
      answer: 'No. You paste your website URL, the builder reads the site and turns it into a knowledge base, and you get a working bot plus a one-line embed snippet in about a minute. Drop the snippet on the site (or your web person does it in five minutes) and it’s live. No code, no monthly agency retainer, no waiting on a marketing company.'
    },
    {
      question: 'Will the chatbot make up prices or promise a same-day visit?',
      answer: 'A well-built home service bot answers only from your own website — it will not invent flat-rate prices, promise a technician within the hour, or guarantee financing you don’t offer. When a homeowner asks something job-specific (exact cost to replace a water heater, whether you can come today), it says the office will confirm and captures their contact info instead of guessing. For a trade where trust closes the job, that honesty matters.'
    },
    {
      question: 'How much does an AI chatbot for a home service business cost?',
      answer: 'Building it is free. Keeping a live, branded, lead-capturing bot on the site is $39/mo — a fraction of the $200–$500/mo agencies charge for a managed chatbot, and a rounding error against a single recovered emergency call. There’s no setup fee and no contract.'
    },
    {
      question: 'Can I sell AI chatbots to contractors as a service?',
      answer: 'Yes — home services is one of the best niches for a chatbot side business. An emergency plumbing or HVAC job is worth hundreds to thousands, and a missed after-hours call goes straight to a competitor, so owners happily pay $300/mo for a 24/7 assistant that stops that leak. You build a free demo from their website, send them a live link they can chat with, and charge $300/mo while paying $39/mo to keep it live — roughly $260/mo margin per client. The demo is the pitch.'
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
        <meta name="keywords" content="AI chatbot for home services, AI chatbot for plumbers, AI chatbot for HVAC, AI chatbot for contractors, 24/7 emergency booking assistant, home service lead capture, AI receptionist for plumbers, after-hours call capture, sell AI chatbots to contractors" />
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
          AI Chatbot for Home Service Businesses: Capture After-Hours Emergencies
        </h1>
        <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 32 }}>July 5, 2026 &middot; Midas Tools Team &middot; 8 min read</p>

        <p>The most valuable calls come at the worst time. A burst pipe at 11pm, a furnace that dies on a Sunday, a breaker that keeps tripping &mdash; the homeowner grabs their phone, searches &ldquo;<em>emergency plumber near me</em>,&rdquo; lands on your site, and wonders <em>&ldquo;do they even do emergencies, and do they cover my town?&rdquo;</em> If there&rsquo;s no one to ask, they don&rsquo;t wait. They call the next contractor on the list. That&rsquo;s a job worth hundreds to thousands, gone to a competitor because nobody answered.</p>
        <p>An <strong>AI chatbot for your home service business</strong> answers those questions 24/7, straight from your own website, and captures the homeowner&rsquo;s contact info so an after-hours panic becomes a lead in your inbox. No code. No agency retainer. Live in about a minute. It works the same for plumbers, HVAC, electricians, roofers, and any trade where the phone is the front door.</p>

        <h2 style={h2}>Try a real home service chatbot right now</h2>
        <p>This isn&rsquo;t a mockup. The assistant below was built in about 60 seconds from a real plumbing company&rsquo;s website. Ask it about emergency service, what areas they cover, water heaters, or how to get a quote &mdash; it answers only from the company&rsquo;s real information, and it won&rsquo;t make anything up.</p>
        <div style={{ margin: '20px 0', borderRadius: 16, overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
          <iframe
            src={`/chat/${DEMO_ID}`}
            title="Live AI chatbot demo built from a real plumbing company website"
            loading="lazy"
            style={{ width: '100%', height: 560, border: 'none', display: 'block' }}
          />
        </div>
        <p style={{ fontSize: 14, color: '#6B7280' }}>
          Widget not loading? <a href={`/chat/${DEMO_ID}`} target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Open the live demo in a new tab &rarr;</a>
        </p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>That took 60 seconds. Now build one for your business &mdash; free.</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Paste your website, get a working bot and a one-line embed snippet. Keep it live for $39/mo. No setup fee, no contract.</p>
          <a href={BUILDER} style={ctaBtn}>Build my home service chatbot free &rarr;</a>
        </div>

        <h2 style={h2}>What a home service chatbot actually answers</h2>
        <p>Because it&rsquo;s built from your own site, it handles the exact questions your office fields all day &mdash; without tying up a dispatcher or sending calls to voicemail:</p>
        <ul>
          <li><strong>Emergencies</strong> &mdash; &ldquo;Do you handle 24/7 emergencies, and can someone come tonight?&rdquo;</li>
          <li><strong>Service area</strong> &mdash; &ldquo;Do you cover my town?&rdquo; answered straight from your listed service area.</li>
          <li><strong>Services</strong> &mdash; &ldquo;Do you do water heaters / AC repair / panel upgrades / drain cleaning?&rdquo;</li>
          <li><strong>Hours &amp; contact</strong> &mdash; when you&rsquo;re open, your phone number, and how to reach you fast.</li>
          <li><strong>Getting a quote</strong> &mdash; how to request one, and it captures the homeowner&rsquo;s name + number so the office can call first thing.</li>
        </ul>
        <p>When it doesn&rsquo;t know something &mdash; an exact flat-rate price, whether a tech is free tonight &mdash; it doesn&rsquo;t guess. It says the office will confirm and grabs the contact info. In a trade where trust closes the job, not guessing is a feature.</p>

        <h2 style={h2}>Why $39/mo instead of a $299/mo agency</h2>
        <p>Managed-chatbot agencies charge $200&ndash;$500/mo and take days plus a setup fee to launch. You&rsquo;re paying for their time, not better technology. The builder does the same core job &mdash; scrape the site, distill a knowledge base, generate a branded bot &mdash; in about a minute, and keeps it live and lead-capturing for <strong>$39/mo</strong>. One recovered emergency call covers years of it.</p>

        <h2 style={h2}>Run an agency or side hustle? Home services is a top chatbot niche</h2>
        <p>If you build and manage chatbots for clients, home service contractors are one of the best niches to target. A missed emergency call goes straight to a competitor, so owners feel the pain instantly and happily pay <strong>$300/mo</strong> for a 24/7 assistant that stops the leak. The play is simple:</p>
        <ol>
          <li>Build a free demo bot from a contractor&rsquo;s actual website (~1 min).</li>
          <li>Send the owner the live demo link: <em>&ldquo;I built your shop a 24/7 assistant from your own site &mdash; try it here.&rdquo;</em></li>
          <li>Close on value: charge $300/mo, pay $39/mo to keep it live, keep ~$260/mo per client.</li>
        </ol>
        <p>The demo is the pitch &mdash; owners chat with their own assistant before you ever ask for money. Ten contractors in one metro is a real recurring business. <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>Here&rsquo;s the full playbook for selling chatbots to local businesses &rarr;</Link></p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>Build your first home service chatbot &mdash; free</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Whether it&rsquo;s for your own shop or your first client, the fastest way to see how good it is: build one. Paste a URL, get a live demo link in a minute.</p>
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
          <Link href="/blog/ai-chatbot-for-med-spas-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Med Spas</Link> &middot;{' '}
          <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Chatbots to Local Businesses ($300/mo)</Link> &middot;{' '}
          <Link href="/chatbot-builder" style={{ color: '#3B5FFF' }}>Build a free AI chatbot &rarr;</Link>
        </p>
      </div>
    </Layout>
  );
}
