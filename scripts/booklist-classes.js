/* eslint max-classes-per-file: ["error", 2] */
class Book {
  constructor() {
    this.title = document.getElementById('book-title-input').value;
    this.author = document.getElementById('book-author-input').value;
  }
}

class Bookshelf {
  constructor() {
    this.books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    this.bookList = document.getElementById('book-list');
  }

  removeBook(index) {
    this.books = this.books.filter((book) => this.books.indexOf(book) !== index);
    this.storeData();
    // eslint-disable-next-line no-use-before-define
    this.displayBooks(this.books);
  }

  displayBooks() {
    this.bookList.innerHTML = '';

    this.books.forEach((book) => {
      const rowHTML = (book) => `
            <span class="book-title">"${book.title}" by ${book.author}</span>
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

  storeData() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook() {
    const book = new Book();
    if (JSON.stringify(this.books[this.books.length - 1]) !== JSON.stringify(book)
        && book.title !== '' && book.author !== '') {
      this.books.push(book);
      this.storeData();
      this.displayBooks(this.books);
    }
  }
}

const bookShelf = new Bookshelf();
const addButton = document.getElementById('add-book-button');
addButton.addEventListener('click', () => { bookShelf.addBook(); });
bookShelf.displayBooks();