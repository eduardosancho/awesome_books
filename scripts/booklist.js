let books = [];

const temporal = document.querySelector('.book-card');
const bookList = document.querySelector('#book-list');
let idBook = books.length; //

function Book(title, author) {
  this.id = idBook;
  this.title = title;
  this.author = author;
  idBook += 1;
}

function refreshBookList() {
  books = JSON.parse(localStorage.books);
  bookList.innerHTML = '';
  bookList.appendChild(temporal);
  books.forEach((book) => {
    // eslint-disable-next-line no-use-before-define
    displayBook(book);
  });
}

function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  localStorage.books = JSON.stringify(books);
  refreshBookList();
}

function displayBook(book) {
  const clone = temporal.content.cloneNode(true);
  clone.querySelector('h2').innerHTML = book.title;
  clone.querySelector('h3').innerHTML = book.author;
  clone.querySelector('button').addEventListener('click', () => {
    removeBook(book.id);
  });

  bookList.appendChild(clone);
}

function storeData(title, author) {
  const book = new Book(title, author);
  books.push(book);
  localStorage.books = JSON.stringify(books);
  refreshBookList();
}

function addBook() {
  const formAddBook = document.getElementById('add-book');
  const bookData = new FormData(formAddBook);
  const bookTitle = bookData.get('title');
  const bookAuthor = bookData.get('author');
  formAddBook.reset();
  storeData(bookTitle, bookAuthor);
}

const addButton = document.querySelector('#add-book-button');
addButton.addEventListener('click', addBook);

refreshBookList();
