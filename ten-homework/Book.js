class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

  printInfo(){
      console.log(`Назва: ${this.title}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Рік видання: ${this.year}`);
      console.log('-'.repeat(20));
  }
}

const book1 = new Book("Гаррі Поттер і філософський камінь", "Дж. К. Ролінґ", 1997);
const book2 = new Book("1984", "Джордж Орвелл", 1949);
const book3 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);

// Виклик методу printInfo для кожного екземпляру
book1.printInfo();
book2.printInfo();
book3.printInfo();

module.exports = Book