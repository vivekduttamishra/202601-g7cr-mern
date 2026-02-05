function createAuthor(name){
    //create
    let author = new Object();

    //intialize
    author.name=name;
    author.books=[];
    author.addBook=function(book){
        this.books.push(book)
    }

    //return
    return author;
}

function Book(title,price,author){
    //No creation here

    //initilization
    this.title=title;
    this.price=price;
    this.author=author;
    this.author.addBook(this);
    this.reviews=[]
    this.addReview=function(review){
        this.reviews.push(reivew);
    }

    //No return
}

let author = createAuthor('Vivek') //new is called inside

//must use new here
let book = new Book('The Accursed God',399, author)

console.log('author',author);
console.log('book',book);

console.log('book.title',book.title);
console.log('book.author.name',book.author.name);





