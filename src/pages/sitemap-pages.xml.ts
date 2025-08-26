// Main Pages Sitemap - High Priority Content
// T2.3 Technical SEO Implementation - Semrush Report

export async function GET() {
  const pages = [
    {
      url: 'https://aiphoneagent.ai/',
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/about/',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/features/',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/pricing/',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/ai-phone-agents/',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/demo/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/contact/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/booking/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    }
  });
}