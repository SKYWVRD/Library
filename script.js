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
    clearTable();

    for (book in myLibrary) {

        let rowIndex = Number(book)+1;
        let newRow = table.insertRow(rowIndex);
        let titleCell = newRow.insertCell(0);
        let authorCell = newRow.insertCell(1);
        let pagesCell = newRow.insertCell(2);
        let deleteCell = newRow.insertCell(3);
        titleCell.innerHTML = myLibrary[book].title;
        authorCell.innerHTML = myLibrary[book].author;
        pagesCell.innerHTML = myLibrary[book].pages;
        
        let deleteButton = document.createElement("button");
        //deleteButton.setAttribute('book-index', book);
        deleteButton.innerHTML = "x";
        
        deleteButton.addEventListener('click', function() {
            //table.deleteRow(deleteButton.dataset.index);
            deleteBook(Number(book))
            updateTable();
        });

        deleteCell.appendChild(deleteButton);


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

