jest.mock('axios');

const axios = require('axios');
const fetchData = require('../task3/axiosMock.js');
const test = require('node:test');

test('should successfully work with mocked axios', async () => {
  const mockData = { id: 1, title: 'Test Post' };
  axios.get.mockResolvedValueOnce({ data: mockData });

  const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  console.log(result);

  expect(result).toEqual(mockData);
});

test('should fail to work with mocked axios', async () => {
  axios.get.mockRejectedValueOnce(new Error('Network Error'));

  const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');

  expect(result).toBe('Error');
});