let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
const bookList = document.getElementById('book-list');

function getBook() {
  const bookCard = {
    title: document.getElementById('book-title-input').value,
    author: document.getElementById('book-author-input').value,
  };
  return bookCard;
}

function storeData() {
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(index) {
  books = books.filter((book) => books.indexOf(book) !== index);
  localStorage.books = JSON.stringify(books);
  // eslint-disable-next-line no-use-before-define
  displayBooks(books);
}

function displayBooks(books) {
  bookList.innerHTML = '';

  books.forEach((book) => {
    const rowHTML = (book) => `
          <h2 class="book-title">${book.title}</h2>
          <h3 class="book-author">${book.author}</h3>
          <button class="remove-button" type="button">Remove</button>
          `;
    const rowTr = document.createElement('tr');
    rowTr.innerHTML = rowHTML(book);
    rowTr.querySelector('.remove-button').addEventListener('click', () => {
      removeBook(books.indexOf(book));
    });
    document.getElementById('book-list').appendChild(rowTr);
  });
}

function addBook() {
  const book = getBook();
  if (JSON.stringify(books[books.length - 1]) !== JSON.stringify(book)
      && book.title !== '' && book.author !== '') {
    books.push(book);
    storeData();
    displayBooks(books);
  }
}

const addButton = document.getElementById('add-book-button');
addButton.addEventListener('click', addBook);

displayBooks(books);
