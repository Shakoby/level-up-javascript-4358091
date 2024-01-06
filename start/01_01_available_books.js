// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    if(this.numCopies === 0) {
      console.log('out of stock');
    } else if (this.numCopies < 10) {
      console.log('low stock');
    } else {
      console.log('in stock', this.numCopies);
    };
  };

  sell(qty = 1) {
    if (qty === 0) {
      console.log('invalid');
    } else if (qty > this.numCopies) {
      console.log('Not Enough Stocks');
    } else {
      this.numCopies -= qty;
      console.log('sold', qty, 'remaining', this.numCopies);
    };
  };

  restock(addedCopies) {
    console.log('instock', this.numCopies);
    this.numCopies += addedCopies
    console.log('added', addedCopies, 'totalCopies: ', this.numCopies);
  }

};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5", 10);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4", 8);
const book3 = new Book("1984", "George Orwell", "978-0-452-28423-4", 50);


// book1.availability;
// book2.availability;
// book3.availability;
// book1.sell(0);
// book2.sell(1);
// book3.sell(100);

// book2.sell(1);
// book2.sell(1);
// console.log(book2.numCopies);

book2.restock(5);

