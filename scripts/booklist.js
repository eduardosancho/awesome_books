const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

function storeData() {
    localStorage.setItem('books', JSON.stringify(books));
}

const addButton = document.getElementById("add-book-button");
addButton.addEventListener('click', addBook);

function getBook() {
    const bookCard = {
        title: document.getElementById('book-title-input').value,
        author: document.getElementById('book-author-input').value
    }
    return bookCard
}

const bookList = document.getElementById('book-list');

function addBook() {
    const book = getBook();
    books.push(book);
    storeData();
    displayBooks(books);
}

function displayBooks(books) {
    bookList.innerHTML = '';
    
    books.forEach((book) => {

        const rowHTML = (book) => `
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">${book.author}</h3>
        <button class="remove-button" type="button">Remove</button>
        `
        const rowTr = document.createElement('tr');
        rowTr.innerHTML = rowHTML(book);
        document.getElementById('book-list').appendChild(rowTr);
    });
        
}

displayBooks(books);



