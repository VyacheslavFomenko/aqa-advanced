const { fetchData } = require('../task1/fetchData.js');

test('should handle error correctly', async () => {
  const result = await fetchData();
  expect(result).toBe('Request failed');
});