let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary (title, author, pages){
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    return 0;
}