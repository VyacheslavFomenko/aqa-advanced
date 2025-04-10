const axios = require('axios');
const axiosHeadersParams = require('../task2/axiosHeadersParams.js');

test('should return response with params', async () => {
  const config = await axiosHeadersParams();

  console.log(config);
  expect(config.headers['X-Custom-Header']).toBe('CustomHeaderValue');
  expect(config.params.userId).toBe(1);
});
