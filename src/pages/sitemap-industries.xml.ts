// Industry Pages Sitemap - Sector-Specific SEO
// T2.3 Technical SEO Implementation - Semrush Report

export async function GET() {
  const industries = [
    {
      url: 'https://aiphoneagent.ai/industries/',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/healthcare/',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/dentists/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/medical-clinics/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/legal-offices/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/law-firms/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/accounting-firms/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/real-estate/',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/property-management/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/financial-services/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/insurance/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/consulting/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/technology/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/startups/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/e-commerce/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/retail/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/restaurants/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/hospitality/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/home-services/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/construction/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/manufacturing/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/automotive/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/education/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/non-profit/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/industries/government/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${industries.map(industry => `  <url>
    <loc>${industry.url}</loc>
    <lastmod>${industry.lastmod}</lastmod>
    <changefreq>${industry.changefreq}</changefreq>
    <priority>${industry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=7200, s-maxage=7200',
    }
  });
}