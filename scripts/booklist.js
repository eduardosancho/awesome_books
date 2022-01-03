const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

function storeData() {
    localStorage.setItem('books', JSON.stringify(books));
}

// document.getElementById('add-book').onchange = () => { storeData() };

const localObject = localStorage.getItem('book-data');

if (localObject) {
    const localBookTitle = JSON.parse(localObject).title;
    const localBookAuthor = JSON.parse(localObject).author;
    if (localBookTitle) {
        document.getElementById('book-title-input').value = localBookTitle;
    }
    if (localBookAuthor) {
        document.getElementById('book-author-input').value = localBookAuthor;
    }

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


function addBook() {
    const book = getBook();
    if ()

    books.push(book);
    storeData();
    displayBooks(books);
}


function displayBook() {

    console.log(books.length);
    if (books.length > 0) {
        for (let i = 0; i < books.length; i++) {
            document.getElementById('book-list').removeChild(document.querySelector('tr'));
        }
    }
}

function displayBooks(arr) {
    const bookList = document.getElementById('book-list');
    arr.forEach((b) => {
        const rowHTML = (b) => `
        <h2 class="book-title">${b.title}</h2>
        <h3 class="book-author">${b.author}</h3>
        <button class="remove-button" type="button">Remove</button>
        `
        const rowTr = document.createElement('tr');
        rowTr.innerHTML = rowHTML(b);
        document.getElementById('book-list').appendChild(rowTr);
    })
}



