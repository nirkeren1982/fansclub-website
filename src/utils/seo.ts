// SEO utility functions

// Use environment variable for production URL, fallback to hardcoded value
// In production, use VITE_SITE_URL if set, otherwise default to fanclubonly.com
// In development, use VITE_SITE_URL if set, otherwise default to localhost
export const SITE_URL = import.meta.env.VITE_SITE_URL || 
  (import.meta.env.PROD ? 'https://fanclubonly.com' : 'http://localhost:8081');
export const SITE_NAME = 'FansClubOnly';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
}

export function generateTitle(pageTitle: string, includesSiteName = true): string {
  if (includesSiteName) {
    return `${pageTitle} | ${SITE_NAME}`;
  }
  return pageTitle;
}

export function truncateDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export function generateCanonicalUrl(path: string): string {
  // Remove trailing slash and ensure it starts with /
  const cleanPath = path.replace(/\/$/, '');
  return `${SITE_URL}${cleanPath}`;
}

// Category slug helpers
export const CATEGORIES = [
  'shemale',
  '18-years-old',
  'ahegao',
  'alt',
  'amateur',
  'anal',
  'arab',
  'asian',
  'asmr',
  'bbw',
  'bdsm',
  'big-ass',
  'big-dick',
  'big-tits',
  'bikini-barista',
  'bimbo',
  'bisexual',
  'black',
  'blonde',
  'blowjob',
  'braces',
  'brunette',
  'celebrity',
  'cheap',
  'cheerleader',
  'college-girl',
  'cosplay',
  'cougar',
  'country-girl',
  'couple',
  'crossdresser',
  'cuckold',
  'curly-hair',
  'dick-rating',
  'e-girls',
  'exhibitionist',
  'fbb',
  'femboy',
  'femdom',
  'fetish',
  'fitness',
  'flight-attendant',
  'gamer-girl',
  'gay',
  'goth',
  'granny',
  'gymnast',
  'hairy',
  'hentai',
  'hijab',
  'hmong',
  'incest',
  'joi',
  'korea',
  'ladyboy',
  'latex',
  'latina',
  'lesbian',
  'lingerie',
  'massage',
  'midget',
  'milf',
  'military',
  'mom-daughter',
  'muslim',
  'no-ppv',
  'pegging',
  'persian',
  'petite',
  'piercing',
  'pornstar',
  'pregnant',
  'qos',
  'redhead',
  'small-tits',
  'squirting',
  'streamer',
  'swinger',
  'tattooed',
  'teacher',
  'teen',
  'thick',
  'tiktoker',
  'trans',
  'twins',
  'ufc',
  'waifu',
  'yoga',
  'youtuber',
] as const;

export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  'shemale': 'Shemale',
  '18-years-old': '18+ Years Old',
  'ahegao': 'Ahegao',
  'alt': 'Alt',
  'amateur': 'Amateur',
  'anal': 'Anal',
  'arab': 'Arab',
  'asian': 'Asian',
  'asmr': 'ASMR',
  'bbw': 'BBW (Chubby & Fat)',
  'bdsm': 'BDSM (Bondage)',
  'big-ass': 'Big Ass',
  'big-dick': 'Big Dick',
  'big-tits': 'Big Tits (Busty Boobs)',
  'bikini-barista': 'Bikini Barista',
  'bimbo': 'Bimbo',
  'bisexual': 'Bisexual',
  'black': 'Black (Ebony)',
  'blonde': 'Blonde',
  'blowjob': 'Blowjob',
  'braces': 'Braces',
  'brunette': 'Brunette',
  'celebrity': 'Celebrity',
  'cheap': 'Cheap',
  'cheerleader': 'Cheerleader',
  'college-girl': 'College Girl (Student)',
  'cosplay': 'Cosplay',
  'cougar': 'Cougar',
  'country-girl': 'Country Girl',
  'couple': 'Couple',
  'crossdresser': 'Crossdresser (Sissy)',
  'cuckold': 'Cuckold & Hotwife',
  'curly-hair': 'Curly Hair',
  'dick-rating': 'Dick Rating (Cock Rating)',
  'e-girls': 'E-girls',
  'exhibitionist': 'Exhibitionist',
  'fbb': 'FBB',
  'femboy': 'Femboy',
  'femdom': 'Femdom & Mistress',
  'fetish': 'Fetish & Foot Fetish',
  'fitness': 'Fitness (Gym Girl)',
  'flight-attendant': 'Flight Attendant (Air Hostess)',
  'gamer-girl': 'Gamer Girl',
  'gay': 'Gay',
  'goth': 'Goth',
  'granny': 'Granny',
  'gymnast': 'Gymnast',
  'hairy': 'Hairy',
  'hentai': 'Hentai',
  'hijab': 'Hijab',
  'hmong': 'Hmong',
  'incest': 'Incest',
  'joi': 'JOI',
  'korea': 'Korea',
  'ladyboy': 'Ladyboy',
  'latex': 'Latex',
  'latina': 'Latina',
  'lesbian': 'Lesbian',
  'lingerie': 'Lingerie',
  'massage': 'Massage',
  'midget': 'Midget',
  'milf': 'MILF (Mom)',
  'military': 'Military',
  'mom-daughter': 'Mom Daughter',
  'muslim': 'Muslim',
  'no-ppv': 'No PPV',
  'pegging': 'Pegging',
  'persian': 'Persian',
  'petite': 'Petite Skinny',
  'piercing': 'Piercing (Pierced Nipples)',
  'pornstar': 'Pornstar',
  'pregnant': 'Pregnant',
  'qos': 'QOS',
  'redhead': 'Redhead (Gingers)',
  'small-tits': 'Small Tits',
  'squirting': 'Squirting',
  'streamer': 'Streamer',
  'swinger': 'Swinger',
  'tattooed': 'Tattooed Girl',
  'teacher': 'Teacher',
  'teen': 'Teen (Young)',
  'thick': 'Thick',
  'tiktoker': 'Tiktoker',
  'trans': 'Trans',
  'twins': 'Twins',
  'ufc': 'UFC',
  'waifu': 'Waifu',
  'yoga': 'Yoga',
  'youtuber': 'Youtuber',
};

export function getCategoryDisplayName(slug: string): string {
  return CATEGORY_DISPLAY_NAMES[slug] || slug;
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/[()&]/g, '');
}

