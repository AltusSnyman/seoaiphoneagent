// Comprehensive Geographic Location Database for GEO SEO
// Hierarchical structure: Country > State/Region > Metro > City > Suburb

export interface GeoLocation {
  id: string;
  type: 'country' | 'state' | 'region' | 'metro' | 'city' | 'suburb';
  name: string;
  slug: string;
  parent?: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  population?: number;
  postalCodes?: string[];
  keyIndustries: string[];
  businessDensity: 'high' | 'medium' | 'low';
  economicFactors: string[];
  localInsights: string[];
  competitorDensity: 'high' | 'medium' | 'low';
  marketOpportunity: number; // 1-10 scale
  priority: number; // 1-10 implementation priority
}

export const geoLocations: GeoLocation[] = [
  // UNITED STATES - Country Level
  {
    id: 'us',
    type: 'country',
    name: 'United States',
    slug: 'usa',
    coordinates: { latitude: '39.8283', longitude: '-98.5795' },
    keyIndustries: ['healthcare', 'legal', 'realestate', 'financial', 'technology', 'professional'],
    businessDensity: 'high',
    economicFactors: [
      'Largest global economy',
      'High technology adoption rates',
      'Strong service sector',
      'Regulatory complexity varies by state'
    ],
    localInsights: [
      'Americans expect 24/7 availability for business services',
      'High smartphone penetration drives mobile-first expectations',
      'Strong preference for personalized customer experiences',
      'Privacy regulations vary significantly by state'
    ],
    competitorDensity: 'high',
    marketOpportunity: 9,
    priority: 10
  },

  // US STATES - Top Priority States
  {
    id: 'us-ca',
    type: 'state',
    name: 'California',
    slug: 'california',
    parent: 'us',
    coordinates: { latitude: '36.7783', longitude: '-119.4179' },
    population: 39538223,
    keyIndustries: ['technology', 'entertainment', 'agriculture', 'aerospace', 'biotechnology'],
    businessDensity: 'high',
    economicFactors: [
      'Largest state economy ($3.6T GDP)',
      'Innovation hub with Silicon Valley',
      'High cost of labor drives automation adoption',
      'Strict privacy regulations (CCPA)'
    ],
    localInsights: [
      'Tech-savvy businesses early adopters of AI solutions',
      'High labor costs make automation ROI compelling',
      'Multilingual needs due to diverse population',
      'Environmental consciousness affects business decisions'
    ],
    competitorDensity: 'high',
    marketOpportunity: 10,
    priority: 10
  },

  {
    id: 'us-ny',
    type: 'state',
    name: 'New York',
    slug: 'new-york',
    parent: 'us',
    coordinates: { latitude: '42.1657', longitude: '-74.9481' },
    population: 20201249,
    keyIndustries: ['financial', 'realestate', 'media', 'technology', 'healthcare'],
    businessDensity: 'high',
    economicFactors: [
      'Financial capital of the world',
      'High real estate costs drive efficiency needs',
      'Fast-paced business environment',
      'Diverse economy with global connections'
    ],
    localInsights: [
      'New Yorkers value efficiency and speed',
      'High tolerance for premium services',
      'Competitive business environment drives innovation',
      'Strong professional services sector'
    ],
    competitorDensity: 'high',
    marketOpportunity: 9,
    priority: 9
  },

  {
    id: 'us-tx',
    type: 'state',
    name: 'Texas',
    slug: 'texas',
    parent: 'us',
    coordinates: { latitude: '31.9686', longitude: '-99.9018' },
    population: 30029572,
    keyIndustries: ['energy', 'technology', 'agriculture', 'aerospace', 'healthcare'],
    businessDensity: 'high',
    economicFactors: [
      'Second largest state economy',
      'Business-friendly regulations',
      'No state income tax attracts businesses',
      'Strong job growth and business formation'
    ],
    localInsights: [
      'Entrepreneurial culture embraces new technology',
      'Large geographic spread increases phone service needs',
      'Hispanic market segment requires bilingual solutions',
      'Energy sector has unique communication needs'
    ],
    competitorDensity: 'medium',
    marketOpportunity: 9,
    priority: 8
  },

  // US METRO AREAS - Top 10 Priority
  {
    id: 'us-ny-nyc-metro',
    type: 'metro',
    name: 'New York-Newark-Jersey City Metro',
    slug: 'new-york-metro',
    parent: 'us-ny',
    coordinates: { latitude: '40.7128', longitude: '-74.0060' },
    population: 20140470,
    keyIndustries: ['financial', 'realestate', 'media', 'technology', 'legal'],
    businessDensity: 'high',
    economicFactors: [
      'Largest US metropolitan economy ($2T GDP)',
      'Global financial center',
      'Highest concentration of Fortune 500 companies',
      'Premium pricing tolerance'
    ],
    localInsights: [
      'Extremely fast-paced business culture',
      'High real estate costs drive virtual solutions',
      'Diverse multilingual business needs',
      'Sophisticated buyers expect advanced features'
    ],
    competitorDensity: 'high',
    marketOpportunity: 10,
    priority: 10
  },

  {
    id: 'us-ca-la-metro',
    type: 'metro',
    name: 'Los Angeles-Long Beach-Anaheim Metro',
    slug: 'los-angeles-metro',
    parent: 'us-ca',
    coordinates: { latitude: '34.0522', longitude: '-118.2437' },
    population: 13214799,
    keyIndustries: ['entertainment', 'technology', 'international-trade', 'tourism', 'aerospace'],
    businessDensity: 'high',
    economicFactors: [
      'Second largest US metro economy',
      'Entertainment industry hub',
      'Major international trade gateway',
      'Innovation in technology and media'
    ],
    localInsights: [
      'Entertainment industry has unique scheduling needs',
      'Hispanic population drives bilingual requirements',
      'Traffic congestion makes remote solutions valuable',
      'Image-conscious market appreciates premium brands'
    ],
    competitorDensity: 'high',
    marketOpportunity: 9,
    priority: 9
  },

  // US CITIES - Enhanced existing + new priority cities
  {
    id: 'us-ny-nyc',
    type: 'city',
    name: 'New York City',
    slug: 'new-york-city',
    parent: 'us-ny-nyc-metro',
    coordinates: { latitude: '40.7128', longitude: '-74.0060' },
    population: 8336817,
    postalCodes: ['10001-10282', '10301-10314', '10451-10475', '11201-11256', '11301-11697'],
    keyIndustries: ['financial', 'realestate', 'legal', 'media', 'technology'],
    businessDensity: 'high',
    economicFactors: [
      'Global financial capital',
      'Highest commercial real estate costs in US',
      'Major corporate headquarters concentration',
      'Sophisticated professional services market'
    ],
    localInsights: [
      'Wall Street culture demands immediate responses',
      'Real estate sector extremely active year-round',
      'Law firms concentrate in Midtown and FiDi',
      'Multilingual needs in Queens and Brooklyn businesses'
    ],
    competitorDensity: 'high',
    marketOpportunity: 10,
    priority: 10
  },

  {
    id: 'us-ca-la',
    type: 'city',
    name: 'Los Angeles',
    slug: 'los-angeles',
    parent: 'us-ca-la-metro',
    coordinates: { latitude: '34.0522', longitude: '-118.2437' },
    population: 3898747,
    postalCodes: ['90001-90084', '90086-90089', '90091', '90093-90097', '90099'],
    keyIndustries: ['entertainment', 'technology', 'international-trade', 'aerospace', 'fashion'],
    businessDensity: 'high',
    economicFactors: [
      'Entertainment industry capital',
      'Major Pacific Rim trade hub',
      'High cost of living drives efficiency needs',
      'Growing tech sector (Silicon Beach)'
    ],
    localInsights: [
      'Entertainment industry has irregular hours and seasonal peaks',
      'Hispanic business community (40%+) needs bilingual services',
      'Traffic issues make phone-first customer service crucial',
      'Image-conscious market values professional presentation'
    ],
    competitorDensity: 'high',
    marketOpportunity: 9,
    priority: 9
  },

  // US SUBURBS - High-opportunity suburban markets
  {
    id: 'us-ny-manhattan-ues',
    type: 'suburb',
    name: 'Upper East Side',
    slug: 'upper-east-side',
    parent: 'us-ny-nyc',
    coordinates: { latitude: '40.7736', longitude: '-73.9566' },
    population: 220000,
    postalCodes: ['10021', '10028', '10075', '10128'],
    keyIndustries: ['finance', 'realestate', 'healthcare', 'legal', 'luxury-retail'],
    businessDensity: 'high',
    economicFactors: [
      'Highest income neighborhood in Manhattan',
      'Concentration of medical practices',
      'Luxury retail and services',
      'Private wealth management firms'
    ],
    localInsights: [
      'Medical practices need HIPAA-compliant solutions',
      'Luxury service expectations demand premium quality',
      'Older demographic may prefer traditional phone interaction',
      'High-value transactions require sophisticated call handling'
    ],
    competitorDensity: 'medium',
    marketOpportunity: 8,
    priority: 7
  },

  // AUSTRALIA - Country Level
  {
    id: 'au',
    type: 'country',
    name: 'Australia',
    slug: 'australia',
    coordinates: { latitude: '-25.2744', longitude: '133.7751' },
    keyIndustries: ['mining', 'agriculture', 'tourism', 'education', 'healthcare', 'finance'],
    businessDensity: 'medium',
    economicFactors: [
      'Service-based economy (70% of GDP)',
      'Strong mining and commodity exports',
      'Growing technology sector',
      'Aging population drives healthcare demand'
    ],
    localInsights: [
      'Australians appreciate friendly, relaxed communication style',
      'Strong preference for local businesses and support',
      'Business hours vary significantly across time zones',
      'Regulatory requirements for consumer protection'
    ],
    competitorDensity: 'medium',
    marketOpportunity: 8,
    priority: 8
  },

  // AUSTRALIA STATES
  {
    id: 'au-nsw',
    type: 'state',
    name: 'New South Wales',
    slug: 'new-south-wales',
    parent: 'au',
    coordinates: { latitude: '-31.2532', longitude: '146.9211' },
    population: 8166369,
    keyIndustries: ['finance', 'technology', 'tourism', 'agriculture', 'mining'],
    businessDensity: 'high',
    economicFactors: [
      'Largest state economy (32% of national GDP)',
      'Financial services hub',
      'Major tourism destination',
      'Strong business services sector'
    ],
    localInsights: [
      'Sydney dominates business activity',
      'Multicultural market requires diverse language support',
      'Strong professional services sector',
      'Growing startup ecosystem in Sydney'
    ],
    competitorDensity: 'medium',
    marketOpportunity: 8,
    priority: 8
  },

  {
    id: 'au-nsw-sydney',
    type: 'city',
    name: 'Sydney',
    slug: 'sydney',
    parent: 'au-nsw',
    coordinates: { latitude: '-33.8688', longitude: '151.2093' },
    population: 5312163,
    postalCodes: ['2000-2234', '2250-2263', '2555-2574', '2745-2786'],
    keyIndustries: ['finance', 'technology', 'tourism', 'realestate', 'professional-services'],
    businessDensity: 'high',
    economicFactors: [
      'Financial capital of Australia',
      'Major Asia-Pacific business hub',
      'High real estate costs drive efficiency needs',
      'Growing fintech and startup scene'
    ],
    localInsights: [
      'Business culture values efficiency and professionalism',
      'Multicultural population (40% born overseas)',
      'Strong real estate market drives property services',
      'Tourist industry has seasonal communication peaks'
    ],
    competitorDensity: 'medium',
    marketOpportunity: 8,
    priority: 8
  },

  // NEW ZEALAND - Country Level
  {
    id: 'nz',
    type: 'country',
    name: 'New Zealand',
    slug: 'new-zealand',
    coordinates: { latitude: '-40.9006', longitude: '174.8860' },
    keyIndustries: ['agriculture', 'tourism', 'technology', 'education', 'healthcare'],
    businessDensity: 'medium',
    economicFactors: [
      'Small but highly developed economy',
      'Strong agricultural exports',
      'Growing technology sector',
      'High GDP per capita'
    ],
    localInsights: [
      'Kiwis value personal relationships in business',
      'Strong preference for supporting local businesses',
      'Environmental consciousness affects business decisions',
      'Geographic isolation drives digital solutions adoption'
    ],
    competitorDensity: 'low',
    marketOpportunity: 7,
    priority: 7
  },

  {
    id: 'nz-auckland',
    type: 'city',
    name: 'Auckland',
    slug: 'auckland',
    parent: 'nz',
    coordinates: { latitude: '-36.8485', longitude: '174.7633' },
    population: 1695200,
    postalCodes: ['0600-0692', '1010-1092', '1140-1149', '1311-1446', '2010-2155'],
    keyIndustries: ['finance', 'technology', 'tourism', 'agriculture', 'education'],
    businessDensity: 'high',
    economicFactors: [
      'Largest city (1/3 of national population)',
      'Economic hub of New Zealand',
      'Major tourism gateway',
      'Growing technology sector'
    ],
    localInsights: [
      'Business culture blends Māori and European values',
      'Strong tourism industry with seasonal patterns',
      'Tech sector growing rapidly',
      'Personal relationships important in business dealings'
    ],
    competitorDensity: 'low',
    marketOpportunity: 7,
    priority: 7
  }
];

// Helper functions for geographic data operations
export const getLocationById = (id: string): GeoLocation | undefined => {
  return geoLocations.find(loc => loc.id === id);
};

export const getLocationsByType = (type: GeoLocation['type']): GeoLocation[] => {
  return geoLocations.filter(loc => loc.type === type);
};

export const getLocationsByParent = (parentId: string): GeoLocation[] => {
  return geoLocations.filter(loc => loc.parent === parentId);
};

export const getLocationHierarchy = (locationId: string): GeoLocation[] => {
  const hierarchy: GeoLocation[] = [];
  let currentLoc = getLocationById(locationId);
  
  while (currentLoc) {
    hierarchy.unshift(currentLoc);
    currentLoc = currentLoc.parent ? getLocationById(currentLoc.parent) : undefined;
  }
  
  return hierarchy;
};

export const getTopPriorityLocations = (limit: number = 20): GeoLocation[] => {
  return geoLocations
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
};

export const getLocationsByMarketOpportunity = (minOpportunity: number = 7): GeoLocation[] => {
  return geoLocations
    .filter(loc => loc.marketOpportunity >= minOpportunity)
    .sort((a, b) => b.marketOpportunity - a.marketOpportunity);
};

export const generateLocationURL = (location: GeoLocation): string => {
  const hierarchy = getLocationHierarchy(location.id);
  return hierarchy
    .filter(loc => loc.type !== 'country') // Skip country in URL for cleaner paths
    .map(loc => loc.slug)
    .join('/');
};