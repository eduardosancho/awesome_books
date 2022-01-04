class Book {
  constructor() {
    this.title = document.getElementById('book-title-input').value;
    this.author = document.getElementById('book-author-input').value;  
  }
}

class Bookshelf {
  constructor(){
      this.books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
      this.bookList = document.getElementById('book-list');
  }

  removeBook(index) {
    this.books = this.books.filter((book) => this.books.indexOf(book) !== index);
    localStorage.books = JSON.stringify(this.books);
    // eslint-disable-next-line no-use-before-define
    this.displayBooks(this.books);
  }
  
  displayBooks() {
    this.bookList.innerHTML = '';
  
    this.books.forEach((book) => {
      const rowHTML = (book) => `
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-author">${book.author}</h3>
            <button class="remove-button" type="button">Remove</button>
            `;
      const rowTr = document.createElement('tr');
      rowTr.innerHTML = rowHTML(book);
      rowTr.querySelector('.remove-button').addEventListener('click', () => {
        this.removeBook(this.books.indexOf(book));
      });
      document.getElementById('book-list').appendChild(rowTr);
    });
  }
  
  storeData(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  addBook() {
    const book = new Book();
    if (JSON.stringify(this.books[this.books.length - 1]) !== JSON.stringify(book)
        && book.title !== '' && book.author !== '') {
      this.books.push(book);
      this.storeData(this.books);
      this.displayBooks(this.books);
    }
  }
}

const bookShelf = new Bookshelf();
const addButton = document.getElementById('add-book-button');
addButton.addEventListener('click', () => {bookShelf.addBook()});
bookShelf.displayBooks();