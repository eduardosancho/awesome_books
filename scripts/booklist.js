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
        author:  document.getElementById('book-author-input').value
    }
    return bookCard
}


function addBook() {
    const book=getBook()

    books.push(book);
    storeData()
    displayBook()
}


function displayBook()  {
    for (bookCard in books) {    
        const bookCard = document.createElement('div');
        bookCard.innerHTML = `
        <h2 class="book-title">${bookCard.title}</h2>
        <h3 class="book-author">${bookCard.author}</h3>
        <button class="remove-button" type="button">Remove</button>
        `;    
        document.getElementById('book-list').appendChild(bookCard);
    }
    
} 


