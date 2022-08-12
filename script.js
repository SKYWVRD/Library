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

    let newRow = table.insertRow(libraryLength);
    let titleCell = newRow.insertCell(0);
    let authorCell = newRow.insertCell(1);
    let pagesCell = newRow.insertCell(2);

    titleCell.innerHTML = myLibrary[currentIndex].title;
    authorCell.innerHTML = myLibrary[currentIndex].author;
    pagesCell.innerHTML = myLibrary[currentIndex].pages;
}

addButton.addEventListener('click', function() {
    let title = prompt("Enter Book Name");
    let author = prompt("Enter Author Name");
    let pages = prompt("Enter number of pages");

    addBookToLibrary(title, author, pages);

})

