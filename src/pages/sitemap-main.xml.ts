// Main sitemap for core website pages
import type { APIRoute } from 'astro';
import { generateMainSitemap, generateSitemapXML } from '../utils/generateGeoSitemap';

export const GET: APIRoute = async () => {
  const mainEntries = generateMainSitemap();
  const xmlContent = generateSitemapXML(mainEntries);
  
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};