const Book = require('./Book.js');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
        console.log('-'.repeat(20));
    }
}

const ebook1 = new EBook(
    "Цифрова фортеця",
    "Ден Браун",
    1998,
    "PDF"
);

ebook1.printInfo();