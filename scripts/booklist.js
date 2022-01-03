const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

function storeData() {
    localStorage.setItem('books', JSON.stringify(books));
}

document.getElementById('add-book').onchange = () => { storeData() };

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

function addBook() {
    const bookCard = document.createElement('div');
    bookCard.innerHTML = `
<h2 class="book-title"></h2>
<h3 class="book-author"></h3>
<button class="remove-button" type="button">Remove</button>
`;
    bookCard.querySelector('.book-title').textContent = document.getElementById('book-title-input').value;
    bookCard.querySelector('.book-author').textContent = document.getElementById('book-author-input').value;

    books.push(bookCard);

    document.getElementById('book-list').appendChild(books[books.length-1]);

    /* const currentBookCard =
    document */
    console.log(books.length);
    document.getElementById
}

