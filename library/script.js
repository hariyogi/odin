"use strict";

const books = [];
const listPlaceholderEll = document.querySelector("#list-placeholder");
const addingButton = document.querySelector(".list-header button");
const addModal = document.querySelector(".add-modal");
const cancelBtn = document.querySelector("#cancel-add");
const addForm = document.querySelector("#add-book-form");

// Book Object

function Book(title = "", author = "", page = 0, isFinish = false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isFinish = isFinish;
}

Book.prototype.setReadStatus = function (isRead = false) {
    this.isRead = isRead;
}

// End of Book object

// Listener 

addForm.addEventListener("submit", (evn) => {
    evn.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("page").value;

    addNewBook(title, author, page, false);
    addModal.classList.toggle("hide");
});

addingButton.addEventListener("click", () => {
    addModal.classList.toggle("hide");
    addForm.reset();
});

cancelBtn.addEventListener("click", () => {
    addModal.classList.toggle("hide");
});

// End of Listener

function addNewBook(title = "", author = "", page = 0, isRead = false) {
    let book = new Book(title, author, page, isRead);
    let index = books.push(book);
    let bookEll = buildBookEll(book, index);
    listPlaceholderEll.appendChild(bookEll);
}

function createBookDom(book) {
    if (!book instanceof Book) {
        throw "Arguments is not a book";
    }
}

function getLabelEll(label = "") {
    let labelEll = document.createElement("p");
    labelEll.textContent = label;
    labelEll.classList.add("title");
    return labelEll;
}

function getValueEll(value = "") {
    let valueEll = document.createElement("p");
    valueEll.textContent = value;
    valueEll.classList.add("val")
    return valueEll;
}

function getBookDescEll(label = "", value = "") {
    let liEll = document.createElement("li");
    let labelEll = getLabelEll(label);
    let valueEll = getValueEll(value);

    liEll.appendChild(labelEll);
    liEll.appendChild(valueEll);
    return liEll;
}

function getButtonEll(book, index = 0) {
    const liEll = document.createElement("li");
    const buttonEll = document.createElement("button");
    buttonEll.classList.add("finish-btn");

    if(book.isFinish) {
        buttonEll.classList.add("finish");
    }

    buttonEll.id = index;

    buttonEll.textContent = book.isFinish
        ? "Mark As Not Finish"
        : "Mark As Finish";

    buttonEll.addEventListener("click", () => {
        if (book.isFinish) {
            book.isFinish = false;
            buttonEll.classList.remove("finish");
        } else {
            book.isFinish = true;
            buttonEll.classList.add("finish");
        }

        buttonEll.textContent = book.isFinish
            ? "Mark As Not Finish"
            : "Mark As Finish";
    });

    liEll.appendChild(buttonEll);
    return liEll;
}

function buildBookEll(book, index = 0) {
    const titleEll = getBookDescEll("Title", book.title);
    const valueEll = getBookDescEll("Author", book.author);
    const halamanEll = getBookDescEll("Page", book.page);
    const buttonEll = getButtonEll(book, index);
    const ul = document.createElement("ul");

    ul.appendChild(titleEll);
    ul.appendChild(valueEll);
    ul.appendChild(halamanEll);
    ul.appendChild(buttonEll);

    const itemEll = document.createElement("div");
    itemEll.classList.add("item");
    itemEll.appendChild(ul);

    return itemEll;

}