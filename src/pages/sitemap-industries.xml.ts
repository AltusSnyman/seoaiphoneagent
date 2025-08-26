// Dynamic XML sitemap for industry + location combinations
import type { APIRoute } from 'astro';
import { generateIndustryLocationSitemap, generateSitemapXML } from '../utils/generateGeoSitemap';

export const GET: APIRoute = async () => {
  const industryEntries = generateIndustryLocationSitemap();
  const xmlContent = generateSitemapXML(industryEntries);
  
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};