// Location Pages Sitemap - Local SEO Priority
// T2.3 Technical SEO Implementation - Semrush Report

export async function GET() {
  const locations = [
    {
      url: 'https://aiphoneagent.ai/locations/',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/usa/',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/australia/',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/new-zealand/',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    // Major US Cities
    {
      url: 'https://aiphoneagent.ai/locations/new-york/',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/los-angeles/',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/chicago/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/houston/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/phoenix/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/philadelphia/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/san-antonio/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/san-diego/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/dallas/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/austin/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/san-francisco/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/seattle/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/denver/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/boston/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/atlanta/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/miami/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    // Major Australian Cities
    {
      url: 'https://aiphoneagent.ai/locations/sydney/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/melbourne/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/brisbane/',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/perth/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/adelaide/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    // Major NZ Cities
    {
      url: 'https://aiphoneagent.ai/locations/auckland/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/wellington/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    {
      url: 'https://aiphoneagent.ai/locations/christchurch/',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:geo="http://www.google.com/schemas/sitemap-geo/1.0">
${locations.map(location => `  <url>
    <loc>${location.url}</loc>
    <lastmod>${location.lastmod}</lastmod>
    <changefreq>${location.changefreq}</changefreq>
    <priority>${location.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=7200, s-maxage=7200', // Longer cache for location pages
    }
  });
}