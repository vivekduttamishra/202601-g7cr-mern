import _books from '../data/books.json'
import { isNumber, maxLength, min, max, minLength, required, throwOnError, validate } from './validation';
import { delay } from './delay'
import axios from 'axios'

//const key='booksdb'
const baseUrl = 'http://localhost:4000/books'


const _knownAuthorList = ["Mahatma Gandhi", "John Grisham", "Alexandre Dumas", "Vivek Dutta Mishra"]

const isKnownAuthor = () => (value, key, book) => throwOnError(
    !_knownAuthorList.find(a => a.toLowerCase() === value.toLowerCase()),
    `Unknown Author`, key, book
)


export const bookModel = {
    // id: {type:'string'},
    title: { validators: [required()] },
    author: { validators: [required(), isKnownAuthor()] },
    price: { validators: [required(), isNumber(), min(0)] },
    rating: { validators: [required(), isNumber(), min(1), max(5)] },
    cover: { validators: [required()] },
    description: { validators: [required(), minLength(50), maxLength(2500)] }

}



export class BookService {

    async getAllBooks() {

        let response = await axios.get(baseUrl)

        return response.data;
    }



    async addBook(book) {
       

        if (!book.id)
            book.id = book.title.toLowerCase().split(' ').join('-')

        book.id = book.id.trim();

        //this.validate(book)
        validate(book, bookModel)

        let response = await axios.post(baseUrl, book)

        console.log('response',response);
        

        
    }

    async getBookById(id) {

        let response = await axios.get(`${baseUrl}/${id}`)
        console.log('response', response);

        return response.data;

    }

    updateBook(book) {
        this.validate(book);

        this.books = this.books.map(b => b.id === book.id ? book : b)
        this.save()

    }

    deleteBook(id) {
        this.books = this.books.filter(b => b.id !== id)
        this.save()
    }

}

//return a single copy of service object
//to be used by all components.
export default new BookService();