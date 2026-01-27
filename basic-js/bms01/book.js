

function Book(id,title, author, price) {
    this.id=id;
    this.title = title;
    this.author = author;
    this.price = price;
}

function BookManager(store) {

    this.store = store;
    this._lastId = 0;

    this.validate=function (book){
        if (!book.title)
            return "Missing Book Title";
        if (!book.author)
            return "Missing Book Author";
        if (isNaN(book.price) || book.price < 0 || book.price > 5000)
            return "Invalid Book Price";

    }

    this.addBook = function (book) {
        
        let error = this.validate(book)
        if(error)
            return error;
        this._lastId++;
        book.id = this._lastId;
        this.store.add(book);
    }



    this.getAllBooks = function () {
        return this.store.getAll();
    }

    this.deleteBook = function (id) {
        this.store.deleteBook(id);
    }
}

BookManager.prototype.getBookById = function (id) {
    for (let book of this.getAllBooks())
        if (book.id === id)
            return book;

    //return undefined
}

BookManager.prototype.updateBook=function(book){
    let error=this.validate(book)
    if(error)
        return error;
    if(!book.id)
        return "Missing Book Id";
    this.store.updateBook(book);
}

BookManager.prototype.search=function(criteria, text){
    let result=[]

    for(let book of this.store.getAll()){
        if(criteria==='title' && book.title.toLowerCase().includes(text.toLowerCase())){
            result.push(book)
        } else if(criteria==='author' && book.author.toLowerCase().includes(text.toLowerCase())){
            result.push(book)
        } else if (criteria==='price'){
            let range= text.split('-') // 200-300
            let min = Number(range[0].trim())
            let max= Number(range[1].trim())
            if(!isNaN(min) && !isNaN(max) && book.price>=min && book.price<max){
                result.push(book)
            }
        } else if(criteria==='all')
            result.push(book)
    }

    return result
}



function addSampleBooks(bookManager) {
    bookManager.addBook(new Book(null,'Rashmirathi', 'Ramdhari Singh Dinkar', 149));
    bookManager.addBook(new Book(null,'The Shadows of Kali', 'Vivek Dutta Mishra', 249));
    bookManager.addBook(new Book(null,'Kurukshetra', 'Ramdhari Singh Dinkar', 99));
    bookManager.addBook(new Book(null,'Kane and Abel', 'Jeffrey Archer', 449));
}