function storeData() {
    const bookData = {
        title: document.getElementById('book-title').value,
        author: document.getElementById('book-author').value
    }
    
    localStorage.setItem('book-info', JSON.stringify(bookData));
}

document.getElementById('add-book').onchange = () => { storeData() };

const localObject = localStorage.getItem('book-info');

if (localObject) {
    const localBookTitle = JSON.parse(localObject).title;
    const localBookAuthor = JSON.parse(localObject).author;
    if (localBookTitle) {
        document.getElementById('book-title').value = localBookTitle;
    }
    if (localBookAuthor) {
        document.getElementById('book-author').value = localBookAuthor;
    }

}

// const books = [];