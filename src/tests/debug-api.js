import axios from 'axios';

async function debugAPI() {
  try {
    console.log('Testing API: https://onlyfans-api.vercel.app/api/creators\n');
    
    const response = await axios.get('https://onlyfans-api.vercel.app/api/creators', {
      params: { limit: 5 },
      timeout: 10000
    });
    
    console.log('✅ API Response received!');
    console.log('Status:', response.status);
    console.log('Response data structure:', JSON.stringify(response.data, null, 2));
    
  } catch (error) {
    console.error('❌ API Error!');
    console.error('Message:', error.message);
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received from server');
    } else {
      console.error('Error setting up request:', error.message);
    }
  }
}

debugAPI();
