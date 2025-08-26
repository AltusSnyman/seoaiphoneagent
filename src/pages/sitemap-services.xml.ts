// Dynamic XML sitemap for service + location combinations
import type { APIRoute } from 'astro';
import { generateServiceLocationSitemap, generateSitemapXML } from '../utils/generateGeoSitemap';

export const GET: APIRoute = async () => {
  const serviceEntries = generateServiceLocationSitemap();
  const xmlContent = generateSitemapXML(serviceEntries);
  
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};