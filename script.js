const newBookButton = document.querySelector(".newbook");
const closeButton = document.querySelector(".close");
const addBookButton = document.getElementById("submitbook");
const container = document.getElementById("container");



let myLibrary = [];

function Book(title, author, numberofpages, readstatus) {
    this.title = title
    this.author = author
    this.pages = numberofpages
    this.read = readstatus
}

function addBookToLibrary(ev) {
    ev.preventDefault();
    let newBook = new Book(document.getElementById("title").value, document.getElementById("author").value, 
    document.getElementById("#ofpages").value, document.getElementById("check").checked);
    myLibrary.push(newBook);
    document.forms[0].reset();
    document.querySelector(".newbookform").style.display = "none";
    updateDisplay();
}

function updateDisplay() {
    for (i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        let buttons = document.createElement("div");
        let deleteButton = document.createElement("button");
        let readCheckButton = document.createElement("button");
        book.classList.add("templatediv");
        buttons.classList.add("buttons");
        deleteButton.classList.add("deletebutton");
        readCheckButton.classList.add("readcheckbutton");
        book.innerHTML = myLibrary[i].title + "<br><br><br><br>" + myLibrary[i].author + "<br><br><br><br>" + "Pages: " + myLibrary[i].pages + "<br><br><br><br>" + myLibrary[i].read;
        book.innerHTML = book.innerHTML.replace("false", "Not Read");
        book.innerHTML = book.innerHTML.replace("true", "Read");
        deleteButton.innerHTML = "DELETE";
        if (book.textContent.includes("Not Read")) {
            readCheckButton.innerHTML = "NOT READ";
        } else {
            readCheckButton.innerHTML = "READ";
        }
        buttons.appendChild(deleteButton);
        buttons.appendChild(readCheckButton);
        book.appendChild(buttons);
        container.appendChild(book);
        myLibrary = [];
    }
}

function someListener(event){
    let element = event.target;
    if(element.tagName == 'button' && element.classList.contains("deletebutton")){
        console.log("hi");
    }
}

newBookButton.addEventListener("click", function() {
    document.querySelector(".newbookform").style.display = "flex";
});

closeButton.addEventListener("click", function() {
    document.querySelector(".newbookform").style.display = "none";
}); 

addBookButton.addEventListener("click", addBookToLibrary);

document.querySelector('body').addEventListener('click', function(event) {
    if (!event.target) { 
        return;
    }
    if (event.target.matches('.deletebutton')) {
        event.target.closest('.templatediv').remove();
    }
});

document.querySelector('body').addEventListener('click', function(event) {
    if (!event.target) { 
        return;
    }
    if (event.target.matches('.readcheckbutton')) {
        if (event.target.textContent.includes("NOT READ")) {
            event.target.innerHTML = "READ";
            event.target.closest(".templatediv").innerHTML =  event.target.closest(".templatediv").innerHTML.replace("Not Read", "Read");
        } else if (event.target.textContent.includes("READ")) {
            event.target.innerHTML = "NOT READ";
            event.target.closest(".templatediv").innerHTML = event.target.closest(".templatediv").innerHTML.replace("Read","Not Read");
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".newbookform").style.display = "flex";
})