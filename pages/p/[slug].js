import Head from 'next/head';
import Layout, { DESIGN } from '../../components/Layout';
import {
  PERSONAL_PAGES,
  getPersonalPage,
  getAllPersonalPageSlugs,
} from '../../lib/personal-pages';

const ALL_KITS_BUNDLE_STRIPE = 'https://buy.stripe.com/8x25kCccv4aJ3ys0pscMM0q';

export default function PersonalPage({ page }) {
  const stripeUrl = `${ALL_KITS_BUNDLE_STRIPE}?utm_source=personal-page&utm_campaign=${page.slug}&utm_medium=cold-email`;
  const title = `${page.firstName}, here are 5 prompts I picked for you — MidasTools`;
  const description = `A custom 5-prompt preview of the MidasTools All Kits Bundle, hand-picked for ${page.firstName} (${page.role} at ${page.company}).`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://www.midastools.co/p/${page.slug}`} />
        <meta property="og:type" content="website" />
      </Head>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px', color: DESIGN.black }}>
        <div style={{ fontSize: 12, color: DESIGN.gray400, marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          A page made for one person
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
          Hi {page.firstName} —
          <br />
          here are 5 prompts I picked for you.
        </h1>
        <p style={{ fontSize: 18, color: DESIGN.gray400, lineHeight: 1.6, marginBottom: 12 }}>
          I'm Armando. I run MidasTools. I built this page for you specifically — every prompt below is hand-picked from our All Kits Bundle and tuned to your role.
        </p>
        <div style={{ background: '#F9FAFB', borderLeft: `3px solid ${DESIGN.accent}`, padding: '16px 20px', borderRadius: 6, marginBottom: 40, fontSize: 15, lineHeight: 1.6 }}>
          <strong>Why I built this for you:</strong><br />{page.whyThisFits}
        </div>

        {page.pickedPrompts.map((p, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '24px 28px',
              marginBottom: 20,
              background: '#FFFFFF',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12, gap: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: DESIGN.black }}>
                {i + 1}. {p.title}
              </h2>
              <span style={{ fontSize: 11, color: DESIGN.accent, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                {p.kit}
              </span>
            </div>
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 14,
                lineHeight: 1.6,
                color: '#374151',
                background: '#F9FAFB',
                padding: '14px 16px',
                borderRadius: 8,
                margin: 0,
              }}
            >
              {p.body}
            </pre>
          </div>
        ))}

        <div style={{ marginTop: 56, padding: '32px', background: DESIGN.black, color: DESIGN.white, borderRadius: 16 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: DESIGN.white }}>
            That's 5 of 200+ prompts in the bundle.
          </h2>
          <p style={{ fontSize: 16, color: '#9CA3AF', marginBottom: 24, lineHeight: 1.6 }}>
            14 niche kits — Cold Outreach, Operations, Email & Marketing, SaaS Founder, Resume & Career, Image Generation, and more. One Stripe-Link click, $97, 30-day no-questions refund.
          </p>
          <a
            href={stripeUrl}
            style={{
              display: 'inline-block',
              background: DESIGN.accent,
              color: '#FFFFFF',
              padding: '14px 28px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
            }}
          >
            Get the All Kits Bundle — $97
          </a>
          <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 16, marginBottom: 0 }}>
            Or reply to my email. I read every one — and if you tell me which workflow eats the most time at {page.company}, I'll send you a 6th prompt for free.
          </p>
        </div>

        <p style={{ fontSize: 13, color: DESIGN.gray400, marginTop: 32, textAlign: 'center', lineHeight: 1.6 }}>
          This page was built just for {page.firstName}. If that's not you, the public version of the bundle lives at{' '}
          <a href="/ai-prompt-mega-pack" style={{ color: DESIGN.accent }}>midastools.co/ai-prompt-mega-pack</a>.
        </p>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPersonalPageSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = getPersonalPage(params.slug);
  if (!page) return { notFound: true };
  return { props: { page } };
}
