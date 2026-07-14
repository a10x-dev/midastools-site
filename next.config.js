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
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'midastools.co' }],
        destination: 'https://www.midastools.co/:path*',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
