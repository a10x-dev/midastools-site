import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const BUILDER = '/chatbot-builder?utm_source=blog&utm_medium=cta&utm_campaign=ai-chatbot-law-firms';
const DEMO_ID = 'cb_177e95dd089e'; // real personal-injury demo bot (Mullen & Mullen Law Firm, Dallas) — verified live, grounded, refuses to guarantee outcomes

export default function AIChatbotForLawFirms2026() {
  const title = 'AI Chatbot for Law Firms: Turn After-Hours Website Visits Into Signed Intakes (2026)';
  const description = 'A no-code AI chatbot for personal injury, family, and immigration law firms that answers practice-area, fee, and free-consultation questions 24/7 — and captures the intake while your office is closed. Try a real one built from an actual law firm’s website (embedded live), then build your own free in about a minute — $39/mo to keep it live.';
  const url = 'https://www.midastools.co/blog/ai-chatbot-for-law-firms-2026';

  const faqData = [
    {
      question: 'What does an AI chatbot do for a law firm?',
      answer: 'It answers the questions a prospective client asks the moment something goes wrong — often at night or on a weekend when your office is closed. It tells them which case types you handle, how your fees work (contingency / no win no fee), whether the consultation is free, what area you serve, and how to reach you, then captures their name and number so a 10pm search for “car accident lawyer near me” becomes a signed intake instead of a call to the firm ranked below you.'
    },
    {
      question: 'Does it need coding or a developer to set up?',
      answer: 'No. You paste your firm’s website URL, the builder reads the site and turns it into a knowledge base, and you get a working intake bot plus a one-line embed snippet in about a minute. Drop the snippet on your site (or your web person does it in five minutes) and it’s live — no code, no monthly marketing-agency retainer, no waiting weeks for a build.'
    },
    {
      question: 'Will the chatbot give legal advice or guarantee an outcome?',
      answer: 'No — and that restraint is the point. A well-built law-firm bot answers only from your own website: practice areas, fees, consultation details, contact info. It will not give case-specific legal advice, quote what a claim is “worth,” or promise you’ll win — outcome guarantees are an ethics problem for attorneys, not just a bad idea. When a visitor asks something case-specific, it says an attorney will evaluate it during the free consultation and captures their contact instead of inventing an answer. For a firm, not guessing is a compliance feature, not a limitation.'
    },
    {
      question: 'How much does an AI chatbot for a law firm cost?',
      answer: 'Building it is free. Keeping a live, branded, lead-capturing intake bot on your site is $39/mo — a fraction of the $200–$500/mo agencies charge for a managed chatbot, and a rounding error against a single signed case. There’s no setup fee and no contract.'
    },
    {
      question: 'Can I sell AI chatbots to law firms as a service?',
      answer: 'Yes — law is one of the highest-value niches for a chatbot side business. A single personal-injury case can be worth five figures or more in contingency fees, so a missed after-hours intake is expensive, and firms happily pay $300–$500/mo for a 24/7 assistant that captures it. You build a free demo from the firm’s own website, send the managing attorney a live link they can chat with, and charge $300+/mo while paying $39/mo to keep it live. The demo is the pitch.'
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
        <meta name="keywords" content="AI chatbot for law firms, AI chatbot for lawyers, AI intake chatbot, personal injury lawyer chatbot, law firm lead capture, 24/7 legal intake assistant, AI receptionist for lawyers, after-hours intake, sell AI chatbots to law firms, immigration lawyer chatbot, family law chatbot" />
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
          AI Chatbot for Law Firms: Turn After-Hours Website Visits Into Signed Intakes
        </h1>
        <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 32 }}>July 5, 2026 &middot; Midas Tools Team &middot; 8 min read</p>

        <p>People don&rsquo;t go looking for a lawyer at a convenient time. A car wreck on a Friday night, an arrest, a deportation notice, a spouse who just moved out &mdash; they grab their phone, search &ldquo;<em>car accident lawyer near me</em>,&rdquo; land on your firm&rsquo;s site, and wonder <em>&ldquo;do they even take my kind of case, do I have to pay upfront, and can I talk to someone right now?&rdquo;</em> Your office is closed. If there&rsquo;s no one to ask, they don&rsquo;t wait &mdash; they call the firm ranked below you. In personal injury, that missed intake was worth five figures in contingency fees.</p>
        <p>An <strong>AI chatbot for your law firm</strong> answers those questions 24/7, straight from your own website, and captures the prospective client&rsquo;s contact info so an after-hours crisis becomes an intake in your queue Monday morning. No code. No agency retainer. Live in about a minute. It works for personal injury, family, immigration, criminal defense, estate &mdash; any practice where the first firm to answer usually signs the client.</p>

        <h2 style={h2}>Try a real law-firm chatbot right now</h2>
        <p>This isn&rsquo;t a mockup. The assistant below was built in about 60 seconds from a real personal-injury firm&rsquo;s website. Ask it whether they handle motorcycle or truck accidents, how their fees work, whether the consultation is free, or what area they serve &mdash; it answers only from the firm&rsquo;s real information. Ask it something it shouldn&rsquo;t answer &mdash; &ldquo;guarantee I&rsquo;ll win&rdquo; or &ldquo;handle my divorce&rdquo; &mdash; and watch it decline honestly instead of making something up.</p>
        <div style={{ margin: '20px 0', borderRadius: 16, overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
          <iframe
            src={`/chat/${DEMO_ID}`}
            title="Live AI chatbot demo built from a real law firm website"
            loading="lazy"
            style={{ width: '100%', height: 560, border: 'none', display: 'block' }}
          />
        </div>
        <p style={{ fontSize: 14, color: '#6B7280' }}>
          Widget not loading? <a href={`/chat/${DEMO_ID}`} target="_blank" rel="noopener noreferrer" style={{ color: '#3B5FFF' }}>Open the live demo in a new tab &rarr;</a>
        </p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>That took 60 seconds. Now build one for your firm &mdash; free.</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Paste your firm&rsquo;s website, get a working intake bot and a one-line embed snippet. Keep it live for $39/mo. No setup fee, no contract.</p>
          <a href={BUILDER} style={ctaBtn}>Build my law-firm chatbot free &rarr;</a>
        </div>

        <h2 style={h2}>What a law-firm chatbot actually answers</h2>
        <p>Because it&rsquo;s built from your own site, it handles the exact questions your intake staff field all day &mdash; without tying up a paralegal or sending prospects to voicemail:</p>
        <ul>
          <li><strong>Practice areas</strong> &mdash; &ldquo;Do you handle truck accidents / green cards / custody / DUIs?&rdquo; answered straight from your listed case types.</li>
          <li><strong>Fees</strong> &mdash; &ldquo;Do I have to pay upfront?&rdquo; It explains your structure (contingency / no win no fee / flat fee) exactly as your site states it.</li>
          <li><strong>Free consultation</strong> &mdash; whether it&rsquo;s free, how to book it, and what to expect.</li>
          <li><strong>Service area &amp; contact</strong> &mdash; where you practice, your phone number, and how to reach the firm fast.</li>
          <li><strong>Getting started</strong> &mdash; it captures the prospect&rsquo;s name + number so your intake team can call first thing, before a competitor does.</li>
        </ul>
        <p>When a visitor asks for legal advice, what their case is &ldquo;worth,&rdquo; or whether they&rsquo;ll win, it doesn&rsquo;t guess &mdash; it says an attorney will evaluate that during the free consultation and grabs their contact. For a firm, not giving advice and not guaranteeing outcomes isn&rsquo;t a weakness. It&rsquo;s the only compliant way to run 24/7 intake.</p>

        <h2 style={h2}>Why $39/mo instead of a $299/mo agency</h2>
        <p>Managed-chatbot agencies charge $200&ndash;$500/mo and take days plus a setup fee to launch. You&rsquo;re paying for their time, not better technology. The builder does the same core job &mdash; read the site, distill a knowledge base, generate a branded intake bot &mdash; in about a minute, and keeps it live and lead-capturing for <strong>$39/mo</strong>. One signed case covers a lifetime of it.</p>

        <h2 style={h2}>Run an agency or side hustle? Law firms are a top chatbot niche</h2>
        <p>If you build and manage chatbots for clients, law firms are one of the best niches to target. A single personal-injury or immigration client is worth thousands to tens of thousands, and a missed after-hours intake goes straight to a competitor &mdash; so managing partners feel the pain instantly and happily pay <strong>$300&ndash;$500/mo</strong> for a 24/7 intake assistant that stops the leak. The play is simple:</p>
        <ol>
          <li>Build a free demo bot from a firm&rsquo;s actual website (~1 min).</li>
          <li>Send the managing attorney the live demo link: <em>&ldquo;I built your firm a 24/7 intake assistant from your own site &mdash; try it here.&rdquo;</em></li>
          <li>Close on value: charge $300+/mo, pay $39/mo to keep it live, keep the margin.</li>
        </ol>
        <p>The demo is the pitch &mdash; the attorney chats with their own intake bot before you ever ask for money. A handful of firms in one metro is a real recurring business. <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>Here&rsquo;s the full playbook for selling chatbots to local businesses &rarr;</Link></p>

        <div style={ctaBox}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 16 }}>Build your first law-firm chatbot &mdash; free</p>
          <p style={{ margin: '0 0 16px', fontSize: 15, color: '#374151', fontFamily: 'system-ui, sans-serif' }}>Whether it&rsquo;s for your own firm or your first client, the fastest way to see how good it is: build one. Paste a URL, get a live demo link in a minute.</p>
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
          Related: <Link href="/blog/ai-chatbot-for-home-services-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Home Service Businesses</Link> &middot;{' '}
          <Link href="/blog/ai-chatbot-for-dental-practices-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Dental Practices</Link> &middot;{' '}
          <Link href="/blog/ai-chatbot-for-med-spas-2026" style={{ color: '#3B5FFF' }}>AI Chatbot for Med Spas</Link> &middot;{' '}
          <Link href="/blog/sell-ai-chatbots-local-business-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Chatbots to Local Businesses ($300/mo)</Link> &middot;{' '}
          <Link href="/chatbot-builder" style={{ color: '#3B5FFF' }}>Build a free AI chatbot &rarr;</Link>
        </p>
      </div>
    </Layout>
  );
}
