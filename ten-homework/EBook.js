const Book = require('./Book.js');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI', 'TXT'];
        if (typeof value !== 'string' || !validFormats.includes(value.toUpperCase())) {
            throw new Error('Формат файлу має бути одним із: PDF, EPUB, MOBI, TXT');
        }
        this._fileFormat = value.toUpperCase();
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
        console.log('-'.repeat(20));
    }

    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error('Перший аргумент має бути екземпляром класу Book');
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

try {
    // Створення екземплярів Book і EBook
    const book1 = new Book("Пригоди Тома Сойєра", "Марк Твен", 1876);
    const book2 = new Book("1984", "Джордж Орвелл", 1949);
    const ebook1 = new EBook("Цифрова фортеця", "Ден Браун", 1998, "PDF");
    const ebook2 = new EBook("Снігопад", "Ніл Стівенсон", 1992, "EPUB");

    const booksArray = [book1, book2, ebook1, ebook2];

    const oldestBook = Book.findOldestBook(booksArray);
    console.log("Найдавніша книга:");
    oldestBook.printInfo();

} catch (error) {
    console.error('Помилка:', error.message);
}
