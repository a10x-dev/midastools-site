/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure the private (non-public) kit ZIPs are bundled with the /api/download
  // serverless function on Vercel. Files outside public/ are tree-shaken from
  // the deployment unless explicitly traced — without this, downloads 500.
  experimental: {
    outputFileTracingIncludes: {
      '/api/download': ['./private-kits/**'],
    },
  },
  async redirects() {
    // Retired 2026-07-17: legacy free-tool pages whose backing APIs were disabled
    // (prompt-pack/art era, delinked from nav, zero strategic value). Permanent
    // 308 redirect to the live homepage so stray/bookmarked/leaked traffic lands
    // on the current product instead of a broken tool. To re-enable: remove the entry.
    const RETIRED_PAGES = [
      '/outreach-machine',
      '/listing-machine',
      '/ai-art-generator',
      '/buyer-radar',
      '/coloring-book-machine',
      '/match',
    ];
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'midastools.co' }],
        destination: 'https://www.midastools.co/:path*',
        permanent: true,
      },
      ...RETIRED_PAGES.map((source) => ({ source, destination: '/', permanent: true })),
      { source: '/champion/:token*', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
