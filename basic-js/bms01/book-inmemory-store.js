function BookInMemoryStore() {
    this.books = [];

    this.add=function(book) {
        this.books.push(book);
    }   
    this.getAll=function() {
        return this.books;
    }

    this.deleteBook=function(id) {
        this.books=books.filter(b=>b.id!==id);
    }
}

BookInMemoryStore.prototype.updateBook=function(book){
    for(var i=0;i<this.books.length;i++){
        if(this.books[i].id===book.id){
            this.books[i]=book;
            return;
        }
    }
}