//Use class Syntax to Define a Constructor Function

/* It should be noted that the class syntax is just syntax, and not a full-fledged class-based 
implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.s */

//Use getters and setters to Control Access to an Object

class Book {
    constructor(author) {
            this._author = author;
        }
        // getter
    get writer() {
            return this._author;
        }
        // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);