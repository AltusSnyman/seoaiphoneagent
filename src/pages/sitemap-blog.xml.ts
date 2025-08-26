// Blog Content Sitemap - Fresh Content Priority
// T2.3 Technical SEO Implementation - Semrush Report

export async function GET() {
  const blogPosts = [
    {
      url: 'https://aiphoneagent.ai/blog/ai-receptionist-roi-calculation-guide/',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: '2025-01-15T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/industry-specific-ai-phone-implementation-case-studies/',
      priority: '0.8',
      changefreq: 'weekly', 
      lastmod: '2025-01-15T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/hipaa-compliance-ai-phone-systems-healthcare/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: '2025-01-15T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/cost-benefit-analysis-ai-phone-systems-business-size/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: '2025-01-16T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/ai-phone-agents-small-business-guide/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: '2025-01-10T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/enterprise-ai-phone-systems/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: '2025-01-10T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/ai-receptionist-vs-human/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: '2025-01-08T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/emergency-call-handling-ai/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: '2025-01-05T00:00:00Z'
    },
    {
      url: 'https://aiphoneagent.ai/blog/business-phone-automation-guide/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: '2025-01-05T00:00:00Z'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${blogPosts.map(post => `  <url>
    <loc>${post.url}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800', // Shorter cache for fresh content
    }
  });
}