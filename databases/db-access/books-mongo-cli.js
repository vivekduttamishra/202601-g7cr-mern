import Cli from './cli.js'
import { addBook, getAllBooks, getBookByAuthor, getBookTitles } from './books-mongo-service.js';






const cli=new Cli();
cli.addCommand(getAllBooks,'get-all-books',"Gets a list of all books")
cli.addCommand(getBookTitles,'get-titles')
cli.addCommand(getBookByAuthor, 'get-by-author',)
cli.addCommand(addBook, "add-book"
    
)
cli.exectue();