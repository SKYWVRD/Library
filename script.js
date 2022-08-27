let table = document.getElementById("books")
let addButton = document.getElementById("add-book")
let myLibrary = [];


class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }

    readStatus() {
        this.read = this.read === false ? true : false;
    }
}


Book.prototype.readStatus = function () {
    if(this.read === false)
        this.read = true;
    else
        this.read = false;
}

function addBookToLibrary (title, author, pages){
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    updateTable();
    return 0;
}

function updateTable(){
    clearTable();

    for (book in myLibrary) {

        let rowIndex = Number(book)+1;
        let newRow = table.insertRow(rowIndex);
        let titleCell = newRow.insertCell(0);
        let authorCell = newRow.insertCell(1);
        let pagesCell = newRow.insertCell(2);
        let readCell = newRow.insertCell(3);
        let settingsCell = newRow.insertCell(4);
        titleCell.innerHTML = myLibrary[book].title;
        authorCell.innerHTML = myLibrary[book].author;
        pagesCell.innerHTML = myLibrary[book].pages;
        readCell.innerHTML = myLibrary[book].read;
        
        let deleteButton = document.createElement("button");
        let readButton = document.createElement("button");

        //deleteButton.setAttribute('book-index', book);
        deleteButton.innerHTML = "x";
        readButton.innerHTML = "read / unread"
        
        deleteButton.addEventListener('click', function() {
            //table.deleteRow(deleteButton.dataset.index);
            deleteBook(Number(book))
            updateTable();
        });

        readButton.addEventListener('click', function () {
            switchReadStatus(Number(book));
            updateTable()
        });

        settingsCell.appendChild(deleteButton);
        settingsCell.appendChild(readButton);


    }

}

function deleteBook(bookIndex){
    if(bookIndex === 0){
        myLibrary.shift();
    } else {
        let firstHalf = myLibrary.slice(0, bookIndex-1);
        let secondHalf = myLibrary.slice(bookIndex);
        myLibrary = firstHalf.concat(secondHalf);
        console.log(firstHalf);
        console.log(secondHalf);
    }
}

function switchReadStatus(bookIndex){
    myLibrary[bookIndex].readStatus();
}

function clearTable(){
    let tableLength = Number(table.rows.length);
    if(tableLength == 1) return;

    for(let i = 1; i < tableLength; i++){
        table.deleteRow(1);
    }
}

addButton.addEventListener('click', function() {
    let title = prompt("Enter Book Name");
    let author = prompt("Enter Author Name");
    let pages = prompt("Enter number of pages");

    addBookToLibrary(title, author, pages);

})

