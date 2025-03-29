class DataFetcher {
    constructor() {
        this.todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
        this.userUrl = 'https://jsonplaceholder.typicode.com/users/1';
    }

    async fetchResource(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch resource from ${url}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    async getTodo() {
        return this.fetchResource(this.todoUrl);
    }

    // Метод для отримання user
    async getUser() {
        return this.fetchResource(this.userUrl);
    }

    async fetchAllData() {
        try {
            const [todo, user] = await Promise.all([
                this.getTodo(),
                this.getUser()
            ]);
            return { todo, user };
        } catch (error) {
            console.error('Error fetching all data:', error);
            throw error;
        }
    }
}

class DataProcessor {
    constructor(fetcher) {
        this.fetcher = fetcher; // Інстанс DataFetcher
    }

    async processAll() {
        try {
            const results = await Promise.all([this.fetcher.fetchAllData()]);
            const [data] = results;
            console.log('Promise.all results:');
            console.log('Todo:', data.todo);
            console.log('User:', data.user);
            return data;
        } catch (error) {
            console.error('Promise.all processing failed:', error);
            throw error;
        }
    }

    async processRace() {
        try {
            const result = await Promise.race([this.fetcher.fetchAllData()]);
            console.log('Promise.race result:');
            console.log('Todo:', result.todo);
            console.log('User:', result.user);
            return result;
        } catch (error) {
            console.error('Promise.race processing failed:', error);
            throw error;
        }
    }

    async processData() {
        try {
            const [allResults, raceResult] = await Promise.all([
                this.processAll(),
                this.processRace()
            ]);
            console.log('Final results:');
            console.log('All results:', allResults);
            console.log('Race result:', raceResult);
            return { allResults, raceResult };
        } catch (error) {
            console.error('Error in processData:', error);
            throw error;
        }
    }
}

async function main() {
    const fetcher = new DataFetcher();
    const processor = new DataProcessor(fetcher);

    try {
        const result = await processor.processData();
        console.log('Processing completed:', result);
    } catch (error) {
        console.error('Main error:', error);
    }
}

main();