import _books from '../data/books.json'

const key='booksdb'

export class BookService{
    constructor(){
        this.loadBooks();
    }

    loadBooks(){
        let books=null;
        try{
            let bookStr= localStorage.getItem(key)
            if(bookStr)
                books= JSON.parse(bookStr)
        }catch(err){
            //something went wrong.
        }
        
        this.books=books ?? _books;
        if(this.books.length===0)
            this.books=_books;
        this.save();
    }

    save(){

        //lets store the books to local stroage
        //we must covert it to string
        localStorage.setItem(key, JSON.stringify(this.books))

    }

    getAllBooks(){return this.books;}

    addBook(book){
        this.validate(book)
        this.books.push(book)
        this.save()
    }

    getBookById(isbn){
        return this.books.find(b=>b.isbn===isbn);
    }

    updateBook(book){
        this.validate(book);

        this.books=this.books.map( b=> b.isbn===book.isbn?book:b)
        this.save()

    }

    deleteBook(isbn){
        this.books=this.books.filter(b=>b.isbn!==isbn)
        this.save()
    }

}

//return a single copy of service object
//to be used by all components.
export default new BookService();