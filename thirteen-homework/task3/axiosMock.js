const axios = require('axios');

async function fetchData(url){
  try {
    const response = await axios.get(url);
    return response.data;
  }catch(err){
    return 'Error';
  }
}

module.exports = fetchData;