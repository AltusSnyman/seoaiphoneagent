// GEO SEO Sitemap Generator
// Generates comprehensive XML sitemaps for geographic location pages

import { geoLocations, type GeoLocation } from '../data/geoLocations';

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  geo?: {
    latitude: string;
    longitude: string;
  };
  images?: Array<{
    url: string;
    caption: string;
    geoLocation?: string;
  }>;
}

export interface GeoSitemap {
  locations: SitemapEntry[];
  industries: SitemapEntry[];
  services: SitemapEntry[];
  main: SitemapEntry[];
}

// Generate URL slug from location hierarchy
export const generateLocationURL = (location: GeoLocation): string => {
  const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  // Build hierarchical URL path
  const hierarchy: string[] = [];
  
  // Add parent chain
  if (location.parent) {
    const parentLoc = geoLocations.find(loc => loc.id === location.parent);
    if (parentLoc && parentLoc.type !== 'country') {
      hierarchy.push(slugify(parentLoc.name));
    }
  }
  
  // Add current location
  hierarchy.push(location.slug || slugify(location.name));
  
  return hierarchy.join('/');
};

// Determine priority based on location type and market data
const getLocationPriority = (location: GeoLocation): number => {
  const basePriority = location.priority / 10; // Convert 1-10 scale to 0.1-1.0
  
  // Boost priority based on type hierarchy
  const typeMultipliers = {
    'country': 0.9,
    'state': 0.8, 
    'region': 0.8,
    'metro': 0.7,
    'city': 0.6,
    'suburb': 0.5
  };
  
  const typeBonus = typeMultipliers[location.type] || 0.5;
  const marketBonus = location.marketOpportunity / 100; // Add market opportunity boost
  
  return Math.min(basePriority + typeBonus + marketBonus, 1.0);
};

// Determine change frequency based on business density and market dynamics
const getChangeFrequency = (location: GeoLocation): SitemapEntry['changefreq'] => {
  if (location.businessDensity === 'high' && location.marketOpportunity >= 8) {
    return 'weekly'; // High-activity markets change frequently
  } else if (location.businessDensity === 'medium' || location.marketOpportunity >= 6) {
    return 'monthly';
  }
  return 'yearly';
};

// Generate comprehensive location sitemap entries
export const generateLocationSitemap = (): SitemapEntry[] => {
  const baseURL = 'https://aiphoneagent.ai';
  const lastmod = new Date().toISOString().split('T')[0];
  
  return geoLocations.map(location => {
    const locationPath = generateLocationURL(location);
    
    return {
      url: `${baseURL}/locations/${locationPath}`,
      lastmod,
      changefreq: getChangeFrequency(location),
      priority: getLocationPriority(location),
      geo: {
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude
      },
      images: [
        {
          url: `${baseURL}/images/locations/${location.slug}-hero.webp`,
          caption: `AI Phone Agent services in ${location.name}`,
          geoLocation: `${location.coordinates.latitude}, ${location.coordinates.longitude}`
        },
        {
          url: `${baseURL}/images/locations/${location.slug}-business.webp`,
          caption: `Professional virtual receptionist solutions for ${location.name} businesses`,
          geoLocation: `${location.coordinates.latitude}, ${location.coordinates.longitude}`
        }
      ]
    };
  });
};

// Generate industry-specific location combinations
export const generateIndustryLocationSitemap = (): SitemapEntry[] => {
  const baseURL = 'https://aiphoneagent.ai';
  const lastmod = new Date().toISOString().split('T')[0];
  const entries: SitemapEntry[] = [];
  
  // Primary industries for targeted combinations
  const targetIndustries = [
    'healthcare', 'legal', 'realestate', 'financial', 'technology', 
    'professional', 'entertainment', 'tourism', 'education'
  ];
  
  // Generate industry + major city combinations
  const majorCities = geoLocations.filter(loc => 
    loc.type === 'city' && 
    loc.priority >= 8 && 
    loc.marketOpportunity >= 8
  );
  
  targetIndustries.forEach(industry => {
    majorCities.forEach(city => {
      if (city.keyIndustries.includes(industry)) {
        const locationPath = generateLocationURL(city);
        entries.push({
          url: `${baseURL}/industries/${industry}/${locationPath}`,
          lastmod,
          changefreq: 'monthly',
          priority: 0.7,
          geo: {
            latitude: city.coordinates.latitude,
            longitude: city.coordinates.longitude
          }
        });
      }
    });
  });
  
  return entries;
};

// Generate service-specific location combinations
export const generateServiceLocationSitemap = (): SitemapEntry[] => {
  const baseURL = 'https://aiphoneagent.ai';
  const lastmod = new Date().toISOString().split('T')[0];
  const entries: SitemapEntry[] = [];
  
  // Core services for geographic targeting
  const coreServices = [
    'virtual-receptionist',
    'ai-phone-agent', 
    'appointment-scheduling',
    'customer-service-ai',
    'call-routing',
    'emergency-answering'
  ];
  
  // Generate service + location combinations for high-priority areas
  const priorityLocations = geoLocations.filter(loc => 
    (loc.type === 'city' || loc.type === 'metro') && 
    loc.priority >= 7
  );
  
  coreServices.forEach(service => {
    priorityLocations.forEach(location => {
      const locationPath = generateLocationURL(location);
      entries.push({
        url: `${baseURL}/services/${service}/${locationPath}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.6,
        geo: {
          latitude: location.coordinates.latitude,
          longitude: location.coordinates.longitude
        }
      });
    });
  });
  
  return entries;
};

// Generate main site pages
export const generateMainSitemap = (): SitemapEntry[] => {
  const baseURL = 'https://aiphoneagent.ai';
  const lastmod = new Date().toISOString().split('T')[0];
  
  return [
    {
      url: `${baseURL}/`,
      lastmod,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseURL}/locations/`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseURL}/industries/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseURL}/services/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseURL}/pricing/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseURL}/about/`,
      lastmod,
      changefreq: 'yearly',
      priority: 0.5
    },
    {
      url: `${baseURL}/contact/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.6
    }
  ];
};

// Generate complete GEO sitemap structure
export const generateComprehensiveGeoSitemap = (): GeoSitemap => {
  return {
    locations: generateLocationSitemap(),
    industries: generateIndustryLocationSitemap(),
    services: generateServiceLocationSitemap(),
    main: generateMainSitemap()
  };
};

// Generate XML sitemap content
export const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:geo="http://www.google.com/schemas/sitemap-geo/1.0">`;
  
  const xmlFooter = '</urlset>';
  
  const urlEntries = entries.map(entry => {
    let xml = `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>`;
    
    // Add geo information if available
    if (entry.geo) {
      xml += `
    <geo:geo>
      <geo:format>kml</geo:format>
    </geo:geo>`;
    }
    
    // Add image information if available
    if (entry.images && entry.images.length > 0) {
      entry.images.forEach(image => {
        xml += `
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:caption>${image.caption}</image:caption>`;
        if (image.geoLocation) {
          xml += `
      <image:geo_location>${image.geoLocation}</image:geo_location>`;
        }
        xml += `
    </image:image>`;
      });
    }
    
    xml += `
  </url>`;
    
    return xml;
  }).join('\n');
  
  return `${xmlHeader}\n${urlEntries}\n${xmlFooter}`;
};

// Generate sitemap index file
export const generateSitemapIndex = (sitemaps: Array<{ name: string; url: string; lastmod: string }>): string => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  const xmlFooter = '</sitemapindex>';
  
  const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n');
  
  return `${xmlHeader}\n${sitemapEntries}\n${xmlFooter}`;
};