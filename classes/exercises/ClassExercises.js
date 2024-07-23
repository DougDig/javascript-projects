// Define your Book class here:
class Book {
    constructor (title,author,copyrightDate,isbn,pages,checkOuts,discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pages = pages;
        this.checkOuts = checkOuts;
        this.discarded = discarded;
    }
}
class Manual extends Book {
    constructor (title,author,copyrightDate,isbn,pages,checkOuts,discarded) {
        super (title,author,copyrightDate,isbn,pages,checkOuts,discarded);
    }
    dispose (currentYear) {
        if (currentYear-this.copyrightDate >5) {
            this.discarded = 'Yes';
        }
    }
}
class Novel extends Book {
    constructor (title,author,copyrightDate,isbn,pages,checkOuts,discarded) {
        super (title,author,copyrightDate,isbn,pages,checkOuts,discarded);
    }
    dispose () {
        if (this.checkOuts > 100) {
            this.discarded = 'Yes';
        }
    }
}
class Magazine extends Book {
    constructor (title,author){
        super (title,author)
    }
}
// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:
let classicNovel = new Novel ('Pride and Prejudice','Jane Austin',1813, '1111111111111' ,432,32,'No');
let shipManual = new Manual ('Top Secret Shuttle Building Manual','Redacted',2013, '0000000000000' ,1147,1,'No');
let poopularMechanics = new Magazine ('Poop man jones', 'William cobblebutt');
// Code exercises 4 & 5 here:
console.log(classicNovel,shipManual);
shipManual.dispose(2024);
console.log(shipManual);
console.log(poopularMechanics);