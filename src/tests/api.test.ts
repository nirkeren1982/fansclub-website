import { creatorsApi, categoriesApi } from '../lib/api';

async function testEndpoints() {
  console.log('🧪 Testing API Endpoints...\n');
  console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL || 'https://onlyfans-api.vercel.app');
  console.log('─'.repeat(60), '\n');

  try {
    // Test 1: Get all creators
    console.log('1️⃣  Testing GET /api/creators...');
    const creators = await creatorsApi.getAll({ limit: 5 });
    console.log(`✅ Success: ${creators.total} total creators, showing ${creators.data.length}`);
    console.log(`   First creator: @${creators.data[0]?.username}`);
    console.log(`   Display name: ${creators.data[0]?.display_name || 'N/A'}`);
    console.log(`   Price: $${creators.data[0]?.subscription_price || 0}\n`);

    // Test 2: Get single creator
    if (creators.data[0]) {
      const testUsername = creators.data[0].username;
      console.log(`2️⃣  Testing GET /api/creators/${testUsername}...`);
      const creator = await creatorsApi.getByUsername(testUsername);
      console.log(`✅ Success: Found @${creator.username}`);
      console.log(`   Display name: ${creator.display_name || 'N/A'}`);
      console.log(`   Categories: ${creator.categories.join(', ') || 'None'}`);
      console.log(`   Likes: ${creator.likes_count?.toLocaleString() || 0}`);
      console.log(`   Photos: ${creator.photos_count || 0}`);
      console.log(`   Videos: ${creator.videos_count || 0}\n`);
    }

    // Test 3: Search creators
    console.log('3️⃣  Testing search functionality...');
    const searchResults = await creatorsApi.search('ana', { limit: 5 });
    console.log(`✅ Success: Found ${searchResults.total} results for "ana"`);
    console.log(`   Top result: @${searchResults.data[0]?.username}\n`);

    // Test 4: Get categories
    console.log('4️⃣  Testing GET /api/categories...');
    const categories = await categoriesApi.getAll();
    console.log(`✅ Success: ${categories.length} categories available`);
    console.log(`   Top 5 categories:`);
    categories.slice(0, 5).forEach((cat, i) => {
      console.log(`   ${i + 1}. ${cat.category_name} (${cat.creator_count} creators)`);
    });
    console.log('');

    // Test 5: Filter by category
    if (categories[0]) {
      const testCategory = categories[0].category_name;
      console.log(`5️⃣  Testing filter by category "${testCategory}"...`);
      const filtered = await creatorsApi.getAll({ 
        category: testCategory, 
        limit: 5 
      });
      console.log(`✅ Success: Found ${filtered.total} creators in ${testCategory}`);
      console.log(`   Sample: @${filtered.data[0]?.username}\n`);
    }

    // Test 6: Pagination
    console.log('6️⃣  Testing pagination...');
    const page1 = await creatorsApi.getAll({ page: 1, limit: 10 });
    const page2 = await creatorsApi.getAll({ page: 2, limit: 10 });
    console.log(`✅ Success: Page 1 has ${page1.data.length} items`);
    console.log(`   Page 2 has ${page2.data.length} items`);
    console.log(`   Different results: ${page1.data[0]?.username !== page2.data[0]?.username}\n`);

    // Test 7: Sorting
    console.log('7️⃣  Testing sort by likes...');
    const sorted = await creatorsApi.getAll({ 
      sortBy: 'likes', 
      limit: 3 
    });
    console.log(`✅ Success: Top 3 by likes:`);
    sorted.data.forEach((c, i) => {
      console.log(`   ${i + 1}. @${c.username} - ${c.likes_count?.toLocaleString() || 0} likes`);
    });
    console.log('');

    console.log('─'.repeat(60));
    console.log('🎉 All tests passed successfully!');
    console.log('─'.repeat(60));

  } catch (error: any) {
    console.error('\n❌ Test failed!');
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    process.exit(1);
  }
}

testEndpoints();
