// Setup verification script
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking FansClubOnly Setup...\n');

let allGood = true;

// Check 1: Environment Variables
console.log('1️⃣  Checking Environment Variables...');
const hasSupabaseUrl = !!process.env.VITE_SUPABASE_URL;
const hasSupabaseKey = !!process.env.VITE_SUPABASE_ANON_KEY;

if (hasSupabaseUrl && hasSupabaseKey) {
  console.log('   ✅ Environment variables configured');
  console.log(`   📍 Supabase URL: ${process.env.VITE_SUPABASE_URL?.substring(0, 30)}...`);
} else {
  console.log('   ❌ Missing environment variables');
  if (!hasSupabaseUrl) console.log('      Missing: VITE_SUPABASE_URL');
  if (!hasSupabaseKey) console.log('      Missing: VITE_SUPABASE_ANON_KEY');
  allGood = false;
}

// Check 2: OG Image
console.log('\n2️⃣  Checking Default OG Image...');
const ogImagePath = path.join(__dirname, '../public/og-default.jpg');
if (fs.existsSync(ogImagePath)) {
  const stats = fs.statSync(ogImagePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  console.log('   ✅ og-default.jpg exists');
  console.log(`   📏 Size: ${sizeKB} KB`);
  if (stats.size > 1024 * 1024) {
    console.log('   ⚠️  Warning: Image is larger than 1MB');
  }
} else {
  console.log('   ❌ og-default.jpg not found');
  console.log('   📝 Create it at: /public/og-default.jpg');
  console.log('   📖 See: /public/OG_IMAGE_README.md for instructions');
  allGood = false;
}

// Check 3: Sitemap
console.log('\n3️⃣  Checking Sitemap...');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const stats = fs.statSync(sitemapPath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (content.match(/<url>/g) || []).length;
  console.log('   ✅ sitemap.xml exists');
  console.log(`   📏 Size: ${sizeKB} KB`);
  console.log(`   🔗 URLs: ${urlCount}`);
  if (urlCount < 100) {
    console.log('   ⚠️  Warning: Very few URLs in sitemap');
  }
} else {
  console.log('   ❌ sitemap.xml not found');
  console.log('   📝 Generate it with: npm run generate-sitemap');
  allGood = false;
}

// Check 4: robots.txt
console.log('\n4️⃣  Checking robots.txt...');
const robotsPath = path.join(__dirname, '../public/robots.txt');
if (fs.existsSync(robotsPath)) {
  console.log('   ✅ robots.txt exists');
} else {
  console.log('   ❌ robots.txt not found');
  allGood = false;
}

// Check 5: Key directories
console.log('\n5️⃣  Checking Key Directories...');
const dirs = [
  '../src/components/SEO',
  '../src/utils',
  '../src/pages',
  '../public'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✅ ${dir} exists`);
  } else {
    console.log(`   ❌ ${dir} missing`);
    allGood = false;
  }
});

// Final Summary
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ All checks passed! Your setup is complete.');
  console.log('\n🚀 Ready to deploy!');
  console.log('\nNext steps:');
  console.log('  1. npm run build');
  console.log('  2. Deploy to your hosting platform');
  console.log('  3. Submit sitemap to Google Search Console');
} else {
  console.log('⚠️  Some issues need attention.');
  console.log('\n📖 See SETUP_GUIDE.md for detailed instructions.');
}
console.log('='.repeat(50) + '\n');

process.exit(allGood ? 0 : 1);

