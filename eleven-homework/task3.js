async function fetchData() {
  try {
    const todoResponse = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    if (!todoResponse.ok) {
      throw new Error('Failed to fetch todo');
    }
    const todo = await todoResponse.json();

    const userResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    if (!userResponse.ok) {
      throw new Error('Failed to fetch user');
    }
    const user = await userResponse.json();

    return [todo, user];
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
}

async function processData() {
  const promisesArray = [fetchData()];

  const allResultsPromise = Promise.all(promisesArray)
    .then((results) => {
      const [data] = results;
      const [todo, user] = data;
      console.log('Promise.all results:');
      console.log('Todo:', todo);
      console.log('User:', user);
      return data;
    })
    .catch((error) => {
      console.error('Promise.all failed:', error);
    });

  const raceResultPromise = Promise.race(promisesArray)
    .then((result) => {
      const [todo, user] = result;
      console.log('Promise.race result:');
      console.log('Todo:', todo);
      console.log('User:', user);
      return result;
    })
    .catch((error) => {
      console.error('Promise.race failed:', error);
    });

  const [allResults, raceResult] = await Promise.all([
    allResultsPromise,
    raceResultPromise,
  ]);

  console.log('Final results:');
  console.log('All results:', allResults);
  console.log('Race result:', raceResult);
}

processData().catch((error) => console.error('Error in processData:', error));
