// Main sitemap index for comprehensive GEO SEO
import type { APIRoute } from 'astro';
import { generateSitemapIndex } from '../utils/generateGeoSitemap';

export const GET: APIRoute = async () => {
  const baseURL = 'https://aiphoneagent.ai';
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemaps = [
    {
      name: 'main',
      url: `${baseURL}/sitemap-main.xml`,
      lastmod
    },
    {
      name: 'locations',
      url: `${baseURL}/sitemap-locations.xml`,
      lastmod
    },
    {
      name: 'industries',
      url: `${baseURL}/sitemap-industries.xml`,
      lastmod
    },
    {
      name: 'services',
      url: `${baseURL}/sitemap-services.xml`,
      lastmod
    }
  ];
  
  const xmlContent = generateSitemapIndex(sitemaps);
  
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};