import _books from '../data/books.json'
import { isNumber, maxLength, min, max, minLength, required, throwOnError, validate } from './validation';

const key='booksdb'


const _knownAuthorList=["Mahatma Gandhi", "John Grisham", "Alexandre Dumas", "Vivek Dutta Mishra"]

const isKnownAuthor =()=> (value,key,book)=> throwOnError(
    !_knownAuthorList.find(a=>a.toLowerCase()===value.toLowerCase()),
    `Unknown Author`, key, book    
)


export const bookModel={
   // id: {type:'string'},
    title: {validators:[required()]},
    author: {validators:[required(), isKnownAuthor()]},
    price: {validators: [required(), isNumber(), min(0)]},
    rating: {validators: [required(), isNumber(), min(1), max(5)]},
    cover : {validators: [required()]},
    description:{ validators:[required(), minLength(50), maxLength(2500)]}

}



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

    // validate(book){
    //     required()(book.title,'title',book)
    //     required()(book.author,'author',book)
    //     isNumber()(book.price,'price',book)
    //     min(0)(book.price,'price',book)
    //     max(5000)(book.price, 'price', book)
    //     min(1)(book.rating, 'rating',book)
    //     max(5)(book.rating, 'rating', book)
    //     required()(book.description, 'description', book )
    //     minLength(50)(book.description, 'description',book)
    //     maxLength(2500)(book.description, 'description', book)
        
    // }

    addBook(book){
        if(!book.id)
            book.id=book.title.toLowerCase().split(' ').join('-')

        book.id=book.id.trim();

        //this.validate(book)
        validate(book, bookModel)
        
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