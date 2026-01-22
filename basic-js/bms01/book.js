

function Book(title,author,price){
    this.title = title;
    this.author = author;
    this.price = price;
}

function BookManager(store){

    this.store=store;
    this._lastId=0;
    this.addBook=function(book){
        if(!book.title)
            return "Missing Book Title";
        if(!book.author)
            return "Missing Book Author";
        if(isNaN(book.price) ||book.price<0 || book.price>5000)
            return "Invalid Book Price";
        
        this._lastId++;
        book.id=this._lastId;
        this.store.add(book);
    }

    this.getAllBooks=function(){
        return this.store.getAll();
    }

    this.deleteBook=function(id){
        this.store.deleteBook(id);
    }
}
