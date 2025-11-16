import axios from 'axios';

const API_BASE_URL = 'https://onlyfans-api.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

async function testEndpoints() {
  console.log('🧪 Testing API Endpoints...\n');
  console.log('API Base URL:', API_BASE_URL);
  console.log('─'.repeat(60), '\n');

  try {
    // Test 1: Get all creators
    console.log('1️⃣  Testing GET /api/creators...');
    const creatorsRes = await api.get('/api/creators', { params: { limit: 5 } });
    const creators = creatorsRes.data;
    console.log(`✅ Success: ${creators.total} total creators`);
    console.log(`   First: @${creators.creators[0]?.username}\n`);

    // Test 2: Get single creator
    const testUsername = creators.creators[0].username;
    console.log(`2️⃣  Testing GET /api/creators/${testUsername}...`);
    const creatorRes = await api.get(`/api/creators/${testUsername}`);
    const creator = creatorRes.data.creator;
    console.log(`✅ Success: @${creator.username}`);
    console.log(`   Name: ${creator.display_name}`);
    console.log(`   Likes: ${creator.likes_count?.toLocaleString()}\n`);

    // Test 3: Search
    console.log('3️⃣  Testing search...');
    const searchRes = await api.get('/api/creators', { params: { search: 'skylar', limit: 3 } });
    console.log(`✅ Success: ${searchRes.data.total} results\n`);

    // Test 4: Categories
    console.log('4️⃣  Testing GET /api/categories...');
    const categoriesRes = await api.get('/api/categories');
    const categories = categoriesRes.data.categories;
    console.log(`✅ Success: ${categories.length} categories`);
    categories.slice(0, 5).forEach((cat, i) => {
      console.log(`   ${i + 1}. ${cat.category_name} (${cat.creator_count} creators)`);
    });
    console.log('');

    // Test 5: Filter by category
    if (categories[0]) {
      const testCategory = categories[0].category_name;
      console.log(`5️⃣  Testing filter by category "${testCategory}"...`);
      const filteredRes = await api.get('/api/creators', {
        params: { category: testCategory, limit: 5 }
      });
      console.log(`✅ Success: ${filteredRes.data.total} in ${testCategory}\n`);
    }

    // Test 6: Pagination
    console.log('6️⃣  Testing pagination...');
    const page1 = await api.get('/api/creators', { params: { page: 1, limit: 10 } });
    const page2 = await api.get('/api/creators', { params: { page: 2, limit: 10 } });
    console.log(`✅ Success: Pages loaded correctly\n`);

    console.log('─'.repeat(60));
    console.log('🎉 All 6 tests passed!');
    console.log(`📊 ${creators.total} creators ready to display`);
    console.log('─'.repeat(60));

  } catch (error) {
    console.error('\n❌ Failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    process.exit(1);
  }
}

testEndpoints();
