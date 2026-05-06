import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStripeAttribution } from '../lib/stripe-attribution';
import { trackEvent } from '../lib/track';

const GTM_ID = 'GTM-TN8BDBCP';

export default function App({ Component, pageProps }) {
  useStripeAttribution();
  const router = useRouter();
  useEffect(() => {
    // Fire page_view on initial load + every client-side route change.
    trackEvent('page_view', { path: router.asPath });
    const onRoute = (url) => trackEvent('page_view', { path: url });
    router.events.on('routeChangeComplete', onRoute);
    return () => router.events.off('routeChangeComplete', onRoute);
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" type="application/rss+xml" title="Midas Tools Blog" href="https://www.midastools.co/api/rss" />
      </Head>

      {/* Global Organization + WebSite Schema — helps search engines understand our brand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.midastools.co/#organization",
                "name": "Midas Tools",
                "url": "https://www.midastools.co",
                "logo": "https://www.midastools.co/favicon.png",
                "description": "AI prompt kits that help you make money. 2,000+ copy-paste prompts for ChatGPT, Claude, and any LLM.",
                "sameAs": ["https://github.com/manduks/free-ai-prompts"]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.midastools.co/#website",
                "url": "https://www.midastools.co",
                "name": "Midas Tools",
                "publisher": { "@id": "https://www.midastools.co/#organization" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.midastools.co/blog?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })
        }}
      />

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
