/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
