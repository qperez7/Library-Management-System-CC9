// Task 1: Create a Book Class
class Book {
    #_isAvailable;
    constructor(title,author,ISBN,_isAvailable) {
    this.title = title;
    this.author =author;
    this.ISBN = ISBN;
    this.#_isAvailable = _isAvailable;
    }
// Getter for isAvailable
get _isAvailable() {
    if(_isAvailable === available) {
        return true;
    } else {
        return false;
    }
}
// Setter for isAvailable
set _isAvailable(available) {
    if(available === true) {
        this.#_isAvailable = available
    }
    else{
        this.#_isAvailable = borrowed
    }}
}
getDetails()
console.log(this.title,this.author,this.ISBN)