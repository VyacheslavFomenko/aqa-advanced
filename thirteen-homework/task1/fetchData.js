const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://invalidurl.example.com/wrong-endpoint');
    return response.data;
  } catch (err) {
    return 'Request failed';
  }
}

module.exports = { fetchData };