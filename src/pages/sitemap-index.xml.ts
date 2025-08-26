// Advanced XML Sitemap Index for AI Phone Agent
// T2.3 Technical SEO Implementation - Semrush Report

export async function GET() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://aiphoneagent.ai/sitemap-pages.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </sitemap>
  <sitemap>
    <loc>https://aiphoneagent.ai/sitemap-blog.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.9</priority>
  </sitemap>
  <sitemap>
    <loc>https://aiphoneagent.ai/sitemap-locations.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </sitemap>
  <sitemap>
    <loc>https://aiphoneagent.ai/sitemap-industries.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </sitemap>
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    }
  });
}