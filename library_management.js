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
set _isAvailable(availability) {
    if(typeof availability === true) {
        this.#_isAvailable = availability;
    }
    else{
        this.#_isAvailable = false
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
        let bookStatus = book._isAvailable ? true : false;
        return (`${book.title},${bookStatus}`)
        
    });
}
//Calculates the total books available as required in Task 5
calculateTotalBooksAvailable() {
    return this.name.filter(book => book._isAvailable).length
}}
//Task 3: Create a Patron Class
class Patron {
    constructor (name) {
        this.name = name;
        this.borrowedBooks = [];
    }
borrowBook() {
    this.books.forEach (book => { 
        bookStatus === true
        return book._isAvailable === false
    })}
returnBook(book) {
    return book._isAvailable ===true
}
}
// Task 4: Create a VIP Patron Class that inherits from Patron
class VIPPatron extends Patron {
    #_priority
    constructor (_priority,name) {
        super(name);
        this.#_priority = false;
    }
    get priority() {
        return this.#_priority;
    }
    set priority(status) {
        if(typeof status === true) {
            this.#_priority = status
            return this.borrowBook()
        }
        else 
        return "Customer is not priority"
    }}
// Task 5: Handle Books Borrowing and Returning 
// This has been added in Task 2 Class Section as required       
            
