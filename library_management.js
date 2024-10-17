// Task 1: Create a Book Class
class Book {
    #_isAvailable;
    constructor(title,author,ISBN,_isAvailable) {
    this.title = title;
    this.author =author;
    this.ISBN = ISBN;
    this.#_isAvailable = true;
    }
// Getter for isAvailable
get _isAvailable() {
    return this.#_isAvailable;
}
// Setter for isAvailable
set _isAvailable(status) {
    if(typeof status === 'boolean') {
        this.#_isAvailable = status;
    }
    else{
        this.#_isAvailable = borrowed;
    }}

getDetails() {
return (`${this.title},${this.author},${this.ISBN}`)
}
}
// Task 2: Create a Section Class
class Section {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
addBook(book) {
    return (this.books.push(book));
}
getAvailableBooks() {
    return this.books.some(book => book._isAvailable).length;
}
listBooks() {
    this.books.forEach(book => {
        let bookStatus = book._isAvailable ? "true" : "false";
        return (`${book.title},${bookStatus}`)
        
    });
}}