const axios = require('axios');


async function axiosHeadersParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'CustomHeaderValue'
    },
    params: {
      userId: 1
    }
  });
  return response.config;
}

module.exports = axiosHeadersParams;
