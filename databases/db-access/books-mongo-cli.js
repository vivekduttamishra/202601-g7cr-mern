import Cli, { CsvArray, Float, Int,Text } from './cli.js'
import { addBook, getAllBooks, getBookByAuthor, getBookTitles } from './books-mongo-service.js';






const cli=new Cli();
cli.addCommand(getAllBooks,'get-all-books',"Gets a list of all books")
cli.addCommand(getBookTitles,'get-titles')
cli.addCommand(getBookByAuthor, 'get-by-author',)
cli.addCommand({
    
   commandFunction: addBook, 
   commandName:"book-add",
   aliases: ['add-book','create-book'],
   help:'Adds a new book',
   argCount: 5,
   argTypes:[Text, Text, Int, Float, CsvArray]

})
cli.exectue();