import _books from '../data/books.json'
import { isNumber, maxLength, min, required } from './validation';

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

    validate(book){
        required()(book.title,'title',book)
        required()(book.author,'author',book)
        isNumber()(book.price,'price',book)
        min(0)(book.price,'price',book)
        max(5000)(book.price, 'price', book)
        min(1)(book.rating, 'rating',book)
        max(5)(book.rating, 'rating', book)
        required()(book.description, 'description', book )
        minLength(50)(book.description, 'description',book)
        maxLength(50)(book.description, 'description', book)
        
    }

    addBook(book){
        if(!book.id)
            book.id=book.title.toLowerCase().split(' ').join('-')

        book.id=book.id.trim();
        this.validate(book)
        this.books.push(book)
        this.save()
    }

    getBookById(id){
        id=id.trim()
        return this.books.find(b=>b.id.trim()===id)         
    }

    updateBook(book){
        this.validate(book);

        this.books=this.books.map( b=> b.id===book.id?book:b)
        this.save()

    }

    deleteBook(id){
        this.books=this.books.filter(b=>b.id!==id)
        this.save()
    }

}

//return a single copy of service object
//to be used by all components.
export default new BookService();