let table = document.getElementById("books")
let addButton = document.getElementById("add-book")

let myLibrary = [];


function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary (title, author, pages){
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    updateTable();
    return 0;
}

function updateTable(){

    let libraryLength = myLibrary.length;
    let currentIndex = libraryLength-1;

    for (book in myLibrary) {
        console.log(`Author: ${myLibrary[book].author}\n`+
        `Title: ${myLibrary[book].title}\n` +
        `Pages: ${myLibrary[book].pages}`);
    }
    let row = table.insertRow(libraryLength);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = myLibrary[currentIndex].title;
    cell2.innerHTML = myLibrary[currentIndex].author;
    cell3.innerHTML = myLibrary[currentIndex].pages;
}

addButton.addEventListener('click', function() {
    let title = prompt("Enter Book Name");
    let author = prompt("Enter Author Name");
    let pages = prompt("Enter number of pages");

    addBookToLibrary(title, author, pages);

})

