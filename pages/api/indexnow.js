// IndexNow API - Submit URLs to Bing/Yandex/search engines for instant indexing
// POST /api/indexnow - submits all sitemap URLs
// GET /api/indexnow - returns status of last submission

const INDEXNOW_KEY = '2935cf832fa6443d608bd993ec83dad9';
const HOST = 'www.midastools.co';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// All important URLs to submit
const URLS = [
  // Homepage & key pages
  '/',
  '/bundle',
  '/kits',
  '/tools',
  '/blog',
  '/free-prompts',
  '/chatgpt-prompts',
  // Products
  '/ai-prompt-mega-pack',
  '/ai-image-prompt-pack',
  '/ai-video-prompt-pack',
  '/real-estate-kit',
  '/content-creator-kit',
  '/freelancer-kit',
  '/small-business-kit',
  '/ecommerce-kit',
  '/saas-founder-kit',
  '/notion-templates-kit',
  '/resume-career-kit',
  '/social-media-kit',
  '/email-marketing-kit',
  '/presentation-kit',
  // Free tools
  '/prompt-generator',
  '/business-name-generator',
  '/email-subject-line-tester',
  '/hashtag-generator',
  '/prompt-scorer',
  // High-value blog posts
  '/blog/chatgpt-image-prompts-2026',
  '/blog/best-midjourney-prompts-2026',
  '/blog/chatgpt-action-figure-prompt-2026',
  '/blog/how-to-make-money-with-ai-2026',
  '/blog/how-to-make-money-selling-ai-art-2026',
  '/blog/best-ai-prompts-business-2026',
  '/blog/chatgpt-side-hustle-2026',
  '/blog/best-free-ai-tools-2026',
  '/blog/chatgpt-tips-tricks-2026',
  '/blog/ai-email-templates-2026',
  '/blog/ai-resume-prompts-chatgpt-2026',
  '/blog/cold-email-templates-2026',
  '/blog/best-instagram-hashtags-2026',
  '/blog/ai-social-media-prompts-2026',
  '/blog/ai-productivity-tools-2026',
  '/blog/ai-marketing-tools-2026',
  '/blog/prompt-engineering-guide-2026',
  '/blog/chatgpt-prompts-students-2026',
  '/blog/ai-tools-small-business-owners-2026',
  '/blog/ai-small-business-automation-2026',
  '/blog/ai-freelancer-automation-2026',
  '/blog/ai-content-repurposing-2026',
  '/blog/ai-tools-real-estate-agents-2026',
  '/blog/ai-saas-founder-tools-2026',
  '/blog/ai-ecommerce-product-descriptions-2026',
  '/blog/ai-video-prompts-sora-runway-2026',
  '/blog/free-ai-prompt-generator-2026',
  '/blog/best-ai-prompt-packs-2026',
  '/blog/ai-email-marketing-prompts-2026',
  '/blog/ai-presentation-prompts-2026',
  '/blog/ai-tools-content-creators-2026',
  '/blog/notion-templates-business-2026',
  '/blog/ai-prompts-real-estate-agents-2026',
  '/blog/ai-tools-students-2026',
  '/blog/ai-tools-nonprofit-leaders-2026',
  '/blog/ai-tools-teachers-2026',
  '/blog/ai-second-income-2026',
  '/blog/ai-tools-vs-hiring-2026',
  '/blog/ai-tools-by-profession-2026',
  '/blog/ai-tools-healthcare-2026',
  '/blog/ai-tools-lawyers-2026',
  '/blog/ai-tools-accountants-2026',
  '/blog/ai-tools-project-managers-2026',
  '/blog/ai-tools-hr-recruiting-2026',
  '/blog/automate-client-follow-up-ai',
  '/blog/how-to-price-freelance-services-ai-2026',
  '/blog/ai-agent-10k-day',
  '/blog/openclaw-vs-chatgpt-autonomous-agent',
  '/blog/felix-craft-story',
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const fullUrls = URLS.map(path => `https://${HOST}${path}`);

    // Submit to IndexNow (Bing endpoint — propagates to all participating engines)
    try {
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: KEY_LOCATION,
          urlList: fullUrls,
        }),
      });

      const status = response.status;
      const statusText = response.statusText;

      // Also ping Google sitemap
      const googlePing = await fetch(
        `https://www.google.com/ping?sitemap=https://${HOST}/sitemap.xml`
      );

      return res.status(200).json({
        success: status >= 200 && status < 300,
        indexnow: { status, statusText },
        googlePing: { status: googlePing.status },
        urlsSubmitted: fullUrls.length,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // GET - show info
  return res.status(200).json({
    endpoint: '/api/indexnow',
    method: 'POST to submit all URLs',
    urlCount: URLS.length,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
  });
}
