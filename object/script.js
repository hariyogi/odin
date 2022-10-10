'use strict';

function Book(title = "", author = "", page = 0, isRead = false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}. ${this.page} is read ${this.isRead}`;
}

Book.prototype.setTitle = function (title = "") {
    this.title = title;
}

const susu = new Book("Susu mbok darmin", "bimbim", 100, true);
const lolo = new Book("lono", "lono", 20, true);
console.log(`${susu.info()}, ${lolo.info()}`);
susu.setTitle("Ini Berubah");
console.log(`${susu.info()}, ${lolo.info()}`);