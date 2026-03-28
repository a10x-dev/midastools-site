// Vercel Deploy Hook - Auto-submit new URLs to IndexNow after each deploy
// Call POST /api/deploy-hook after deployment to submit all URLs to search engines

const INDEXNOW_KEY = '2935cf832fa6443d608bd993ec83dad9';
const HOST = 'www.midastools.co';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  // Fetch our own sitemap to get all URLs
  try {
    const sitemapRes = await fetch(`https://${HOST}/sitemap.xml`);
    const sitemapXml = await sitemapRes.text();

    // Extract all URLs from sitemap
    const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
    const urls = urlMatches
      .map(match => match.replace(/<\/?loc>/g, ''))
      .filter(url => !url.includes('/thank-you')); // Skip thank-you page

    // Submit to IndexNow
    const indexNowRes = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    return res.status(200).json({
      success: true,
      indexnow_status: indexNowRes.status,
      urls_submitted: urls.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
