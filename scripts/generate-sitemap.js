// Sitemap generation script for FansClubOnly
// Run this with: node scripts/generate-sitemap.js

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase configuration (use environment variables)
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Use environment variable for production URL, fallback to hardcoded value
const SITE_URL = process.env.VITE_SITE_URL || 'https://fanclubonly.com';

// Categories list
const CATEGORIES = [
  'shemale', '18-years-old', 'ahegao', 'alt', 'amateur', 'anal', 'arab', 'asian', 
  'asmr', 'bbw', 'bdsm', 'big-ass', 'big-dick', 'big-tits', 'bikini-barista', 'bimbo',
  'bisexual', 'black', 'blonde', 'blowjob', 'braces', 'brunette', 'celebrity', 'cheap',
  'cheerleader', 'college-girl', 'cosplay', 'cougar', 'country-girl', 'couple',
  'crossdresser', 'cuckold', 'curly-hair', 'dick-rating', 'e-girls', 'exhibitionist',
  'fbb', 'femboy', 'femdom', 'fetish', 'fitness', 'flight-attendant', 'gamer-girl',
  'gay', 'goth', 'granny', 'gymnast', 'hairy', 'hentai', 'hijab', 'hmong', 'incest',
  'joi', 'korea', 'ladyboy', 'latex', 'latina', 'lesbian', 'lingerie', 'massage',
  'midget', 'milf', 'military', 'mom-daughter', 'muslim', 'no-ppv', 'pegging',
  'persian', 'petite', 'piercing', 'pornstar', 'pregnant', 'qos', 'redhead',
  'small-tits', 'squirting', 'streamer', 'swinger', 'tattooed', 'teacher', 'teen',
  'thick', 'tiktoker', 'trans', 'twins', 'ufc', 'waifu', 'yoga', 'youtuber'
];

// Generate XML sitemap entry
function generateUrlEntry(loc, lastmod = null, changefreq = 'weekly', priority = '0.5') {
  const lastmodStr = lastmod ? `<lastmod>${lastmod}</lastmod>` : '';
  return `  <url>
    <loc>${loc}</loc>
    ${lastmodStr}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  console.log('Starting sitemap generation...');
  
  let urls = [];

  // Add static pages
  console.log('Adding static pages...');
  urls.push(generateUrlEntry(`${SITE_URL}/`, new Date().toISOString().split('T')[0], 'daily', '1.0'));
  urls.push(generateUrlEntry(`${SITE_URL}/explore`, new Date().toISOString().split('T')[0], 'daily', '0.9'));
  urls.push(generateUrlEntry(`${SITE_URL}/promote`, new Date().toISOString().split('T')[0], 'monthly', '0.6'));
  urls.push(generateUrlEntry(`${SITE_URL}/about`, new Date().toISOString().split('T')[0], 'monthly', '0.5'));
  urls.push(generateUrlEntry(`${SITE_URL}/blog`, new Date().toISOString().split('T')[0], 'weekly', '0.7'));
  urls.push(generateUrlEntry(`${SITE_URL}/privacy`, new Date().toISOString().split('T')[0], 'monthly', '0.3'));
  urls.push(generateUrlEntry(`${SITE_URL}/terms`, new Date().toISOString().split('T')[0], 'monthly', '0.3'));
  urls.push(generateUrlEntry(`${SITE_URL}/cookies`, new Date().toISOString().split('T')[0], 'monthly', '0.3'));
  urls.push(generateUrlEntry(`${SITE_URL}/contact`, new Date().toISOString().split('T')[0], 'monthly', '0.5'));

  // Add category pages
  console.log('Adding category pages...');
  CATEGORIES.forEach(category => {
    urls.push(generateUrlEntry(`${SITE_URL}/category/${category}`, new Date().toISOString().split('T')[0], 'daily', '0.8'));
  });

  // Fetch creators from database
  console.log('Fetching creators from database...');
  try {
    const { data: creators, error } = await supabase
      .from('v_creators')
      .select('username, last_updated')
      .order('last_updated', { ascending: false });

    if (error) {
      console.error('Error fetching creators:', error);
    } else {
      console.log(`Adding ${creators.length} creator profiles...`);
      creators.forEach(creator => {
        const lastmod = creator.last_updated ? new Date(creator.last_updated).toISOString().split('T')[0] : null;
        urls.push(generateUrlEntry(`${SITE_URL}/creator/${creator.username}`, lastmod, 'weekly', '0.7'));
      });
    }
  } catch (err) {
    console.error('Failed to fetch creators:', err);
  }

  // Generate XML
  console.log('Generating XML...');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  // Write to file
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`   Total URLs: ${urls.length}`);
  console.log(`   Output: ${outputPath}`);
}

// Run the script
generateSitemap()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  });

