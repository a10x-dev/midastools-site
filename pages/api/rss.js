export default function handler(req, res) {
  const baseUrl = 'https://midastools.co';

  const posts = [
    { slug: 'felix-craft-story', title: 'How to Make Money with AI Agents: $200K Revenue Case Study (2026)', date: '2026-02-20', desc: 'Real case study: an AI agent made $200K+ autonomously — building products, launching marketplaces, running businesses. Step-by-step breakdown of how to make money with AI agents.' },
    { slug: 'openclaw-entrepreneur-setup-guide', title: 'OpenClaw Setup Guide: Deploy Your AI Entrepreneur in Under an Hour', date: '2026-02-23', desc: 'Step-by-step guide to setting up an OpenClaw autonomous agent with SOUL.md, heartbeat system, cron jobs, and tool integrations.' },
    { slug: 'validate-startup-idea-24-hours', title: 'How to Validate a Startup Idea in 24 Hours Using AI', date: '2026-02-23', desc: 'The 24-hour validation framework tests your idea before you build — using AI to compress everything except the conversations.' },
    { slug: 'ai-entrepreneur-stack', title: 'The AI Entrepreneur Tech Stack: Every Tool You Need in 2026', date: '2026-02-23', desc: 'The complete technology stack for running an AI-powered business in 2026.' },
    { slug: 'deploy-openclaw-ai-entrepreneur', title: 'Deploy OpenClaw as Your AI Entrepreneur: Complete Guide', date: '2026-02-23', desc: 'How to deploy OpenClaw as a full autonomous entrepreneur agent.' },
    { slug: 'chatgpt-image-prompts', title: '50 ChatGPT Image Prompts That Actually Look Amazing (2026)', date: '2026-03-20', desc: 'The best ChatGPT image generation prompts for stunning AI art.' },
    { slug: 'best-midjourney-prompts', title: '40 Best Midjourney Prompts for Stunning AI Art (2026)', date: '2026-03-20', desc: 'Curated Midjourney prompts that produce gallery-quality AI images.' },
    { slug: 'chatgpt-action-figure', title: 'How to Make AI Action Figures with ChatGPT (Viral Trend 2026)', date: '2026-03-21', desc: 'Step-by-step guide to creating viral AI action figures using ChatGPT image generation.' },
    { slug: 'how-to-make-money-selling-ai-art', title: 'How to Make Money Selling AI Art in 2026: Complete Guide', date: '2026-03-21', desc: 'Proven strategies for monetizing AI-generated art on multiple platforms.' },
    { slug: 'best-ai-prompts-business', title: 'The 50 Best AI Prompts for Business in 2026', date: '2026-03-22', desc: 'Copy-paste prompts that save hours across sales, marketing, operations, and strategy.' },
    { slug: 'chatgpt-ghibli-prompts', title: '25 Best ChatGPT Ghibli-Style Prompts (2026)', date: '2026-03-27', desc: 'Create stunning Studio Ghibli-inspired images with ChatGPT.' },
    { slug: 'write-better-ai-prompts', title: 'How to Write Better AI Prompts: The CRAFT Framework (2026)', date: '2026-03-28', desc: 'Master prompt engineering with the CRAFT framework and 10 before-and-after examples.' },
    { slug: 'ai-prompt-mistakes', title: '10 AI Prompt Mistakes That Are Ruining Your ChatGPT Output (2026)', date: '2026-03-28', desc: 'The most common prompt engineering mistakes and how to fix them instantly.' },
    { slug: 'real-estate-ai-prompts', title: '20 AI Prompts Every Real Estate Agent Needs in 2026', date: '2026-03-27', desc: 'AI prompts that automate listings, follow-ups, market analysis, and client communication for real estate professionals.' },
    { slug: 'notion-templates-business', title: '12 Notion Templates Every Business Needs in 2026', date: '2026-03-27', desc: 'Essential Notion templates for project management, CRM, content planning, and team operations.' },
    { slug: 'ai-content-creator-tools', title: '10 AI Tools Content Creators Are Using to 10x Their Output', date: '2026-03-27', desc: 'The AI tools top creators use to produce more content in less time.' },
  ];

  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${baseUrl}/blog/${p.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.desc}]]></description>
    </item>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Midas Tools — AI Prompt Kits &amp; Tools</title>
    <link>${baseUrl}</link>
    <description>AI prompt kits, templates, and free tools for entrepreneurs, creators, and businesses. Ship faster with AI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(xml);
}
