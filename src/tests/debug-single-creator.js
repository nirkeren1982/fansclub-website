import axios from 'axios';

async function debugSingleCreator() {
  try {
    console.log('Testing: https://onlyfans-api.vercel.app/api/creators/skylarmaexo\n');
    
    const response = await axios.get('https://onlyfans-api.vercel.app/api/creators/skylarmaexo');
    
    console.log('✅ Response received!');
    console.log('Status:', response.status);
    console.log('\nResponse structure:', JSON.stringify(response.data, null, 2));
    
  } catch (error) {
    console.error('❌ Error!');
    console.error('Message:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

debugSingleCreator();
