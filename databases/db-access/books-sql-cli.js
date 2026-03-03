import Cli from './cli.js'
import { getAllBooks, getBookById, addBook, deleteBook } from './books-sql-service.js';






//---- cli configuration here---

const cli=new Cli();
cli.addCommand(getAllBooks,"get-all-books","Get a list of all Books")
cli.addCommand(getBookById,"get-book-by-id")
cli.addCommand(addBook,'add-book')
cli.addCommand(deleteBook,'delete-book')
cli.exectue();