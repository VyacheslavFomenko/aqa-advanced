class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Назва має бути непорожнім рядком');
        }
        this._title = value.trim();
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Автор має бути непорожнім рядком');
        }
        this._author = value.trim();
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const yearNum = Number(value);
        if (isNaN(yearNum) || yearNum < 0 || yearNum > new Date().getFullYear()) {
            throw new Error(`Рік має бути числом від 0 до ${new Date().getFullYear()}`);
        }
        this._year = yearNum;
    }

    printInfo() {
        console.log(`Назва: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Рік видання: ${this.year}`);
        console.log('-'.repeat(20));
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('Потрібен непорожній масив книг');
        }
        return books.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }
}

module.exports = Book