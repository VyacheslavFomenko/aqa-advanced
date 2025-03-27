function fetchToDoData() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching todo:', error);
            throw error; // Перекидаємо помилку далі для обробки в коді, що викликає функцію
        });
}


function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error;
        });
}

const promisesArray = [fetchToDoData(), fetchUserData()];


const allResultsPromise = Promise.all(promisesArray)
    .then(results => {
        const [todo, user] = results;
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
        return results;
    })
    .catch(error => {
        console.error('Promise.all failed:', error);
    });

const raceResultPromise = Promise.race(promisesArray)
    .then(result => {
        console.log('Promise.race winner:', result);
        return result;
    })
    .catch(error => {
        console.error('Promise.race failed:', error);
    });

Promise.all([allResultsPromise, raceResultPromise])
    .then(([allResults, raceResult]) => {
        console.log('Final results:');
        console.log('All results:', allResults);
        console.log('Race result:', raceResult);
    });