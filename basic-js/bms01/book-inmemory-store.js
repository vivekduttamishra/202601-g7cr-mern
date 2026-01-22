function bookInMemoryStore() {
    const books = [];

    this.add=function(book) {
        books.push(book);
    }   
    this.getAll=function() {
        return books;
    }

    this.deleteBook=function(id) {
        books=books.filter(b=>b.id!==id);
    }
}