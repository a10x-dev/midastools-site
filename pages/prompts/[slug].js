import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
const { promptTemplates, STRIPE_BUNDLE, STRIPE_MEGA_PACK } = require('../../lib/prompt-templates');

export async function getStaticPaths() {
  return {
    paths: promptTemplates.map(t => ({ params: { slug: t.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const template = promptTemplates.find(t => t.slug === params.slug);
  return { props: { template, slug: params.slug } };
}

export default function PromptPage({ template, slug }) {
  const canonicalUrl = `https://midastools.co/prompts/${slug}`;

  return (
    <Layout>
      <Head>
        <title>{template.title} — Midas Tools</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={template.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={template.title} />
        <meta name="twitter:description" content={template.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={template.title} />
        <meta property="og:description" content={template.description} />
        <meta property="og:image" content="https://midastools.co/og-image.png" />
        <meta property="og:site_name" content="Midas Tools" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: template.h1,
              description: template.description,
              url: canonicalUrl,
              author: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
              publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://midastools.co' },
              mainEntityOfPage: canonicalUrl,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: template.prompts.slice(0, 5).map(p => ({
                '@type': 'Question',
                name: `How do I write a ${p.title.toLowerCase()}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Use this prompt: "${p.prompt.substring(0, 200)}..." — ${p.tip}`,
                },
              })),
            }),
          }}
        />
      </Head>
      <style>{`
        .prompt-page{max-width:780px;margin:0 auto;padding:80px 40px 60px}
        .prompt-page h1{font-size:clamp(28px,4vw,42px);font-weight:900;letter-spacing:-1px;line-height:1.1;margin-bottom:16px;color:var(--text)}
        .prompt-page .subtitle{font-size:17px;color:var(--text-secondary);line-height:1.7;margin-bottom:40px}
        .prompt-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:32px;margin-bottom:24px;transition:box-shadow 0.2s}
        .prompt-card:hover{box-shadow:0 4px 24px rgba(0,0,0,0.06)}
        .prompt-card h2{font-size:20px;font-weight:800;margin-bottom:12px;color:var(--text);display:flex;align-items:center;gap:10px}
        .prompt-card .number{background:var(--accent);color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0}
        .prompt-box{background:#fff;border:1px solid var(--border);border-radius:10px;padding:20px;margin:16px 0;font-family:'Courier New',monospace;font-size:14px;line-height:1.7;color:var(--text);white-space:pre-wrap;word-break:break-word;position:relative}
        .copy-btn{position:absolute;top:10px;right:10px;background:var(--accent);color:#fff;border:none;border-radius:6px;padding:6px 14px;font-size:12px;font-weight:700;cursor:pointer;transition:opacity 0.2s}
        .copy-btn:hover{opacity:0.85}
        .tip-box{background:rgba(59,95,255,0.06);border-left:3px solid var(--accent);padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;color:var(--text-secondary);line-height:1.6}
        .tip-box strong{color:var(--accent)}
        .cta-section{background:linear-gradient(135deg,rgba(59,95,255,0.06),rgba(59,95,255,0.12));border:1px solid rgba(59,95,255,0.2);border-radius:20px;padding:48px 40px;text-align:center;margin:48px 0}
        .cta-section h2{font-size:28px;font-weight:900;margin-bottom:12px;color:var(--text)}
        .cta-section p{font-size:16px;color:var(--text-secondary);margin-bottom:24px;max-width:500px;margin-left:auto;margin-right:auto}
        .cta-btn{display:inline-block;background:var(--accent);color:#fff;padding:16px 36px;border-radius:100px;font-weight:800;font-size:16px;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s}
        .cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(59,95,255,0.3)}
        .cta-alt{display:block;margin-top:12px;font-size:14px;color:var(--text-secondary)}
        .cta-alt a{color:var(--accent);text-decoration:none;font-weight:600}
        .related-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:40px 0}
        .related-link{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 20px;text-decoration:none;color:var(--text);font-weight:600;font-size:14px;transition:border-color 0.2s}
        .related-link:hover{border-color:var(--accent)}
        .breadcrumb{font-size:13px;color:var(--text-secondary);margin-bottom:24px}
        .breadcrumb a{color:var(--accent);text-decoration:none}
        @media(max-width:600px){.prompt-page{padding:48px 20px}.prompt-card{padding:24px}.cta-section{padding:32px 24px}.prompt-box{font-size:13px;padding:16px}}
      `}</style>

      <div className="prompt-page">
        <div className="breadcrumb">
          <Link href="/">Home</Link> &rsaquo; <Link href="/prompts">Prompts</Link> &rsaquo; {template.title.split(' for ')[1] || template.title}
        </div>

        <h1>{template.h1}</h1>
        <p className="subtitle">{template.description} Each prompt is tested, ready to copy-paste, and works with ChatGPT, Claude, Gemini, or any AI.</p>

        {template.prompts.map((p, i) => (
          <div className="prompt-card" key={i}>
            <h2><span className="number">{i + 1}</span> {p.title}</h2>
            <div className="prompt-box">
              <button
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText(p.prompt);
                  const btn = document.querySelectorAll('.copy-btn')[i];
                  btn.textContent = 'Copied!';
                  setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
                }}
              >
                Copy
              </button>
              {p.prompt}
            </div>
            <div className="tip-box"><strong>Pro tip:</strong> {p.tip}</div>
          </div>
        ))}

        {/* Mid-page CTA */}
        <div className="cta-section">
          <h2>Want {template.prompts.length * 10}+ More Prompts Like These?</h2>
          <p>The {template.relatedKit.name} has everything you need — tested prompts, templates, and workflows.</p>
          <a href={template.relatedKit.stripe} className="cta-btn">
            Get the {template.relatedKit.name} — {template.relatedKit.price} &rarr;
          </a>
          <span className="cta-alt">
            Or get <a href={STRIPE_BUNDLE}>all 15 kits for $97 (save 81%)</a>
          </span>
        </div>

        {/* Related prompt pages */}
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, marginTop: 48 }}>More Free Prompt Templates</h2>
        <div className="related-links">
          {promptTemplates
            .filter(t => t.slug !== slug)
            .slice(0, 6)
            .map(t => (
              <Link href={`/prompts/${t.slug}`} className="related-link" key={t.slug}>
                {t.title.replace('ChatGPT Prompt for ', '').replace('Midjourney Prompts for ', '')} &rarr;
              </Link>
            ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', margin: '48px 0 0' }}>
          <Link href="/tools" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>
            Try our free AI tools &rarr;
          </Link>
        </div>
      </div>
    </Layout>
  );
}
