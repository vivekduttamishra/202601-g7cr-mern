
import { addAuthor, getAllAuthors, getAuthorById, getBooksByAuthor } from './author-service.js';
import { addBook, getAllBooks,getBookById } from './books-service.js';
import Cli, { CsvArray, Float, Int, Text } from './cli.js'
import { connect } from './connect.js';




const cli=new Cli();

cli.addCommand({
    commandFunction: getAllBooks,    
})

cli.addCommand({
    commandFunction:getBookById,  
})

cli.addCommand({
    commandFunction:addBook, 
    argCount:5,
    argTypes:[Text,Text,Int,Float,CsvArray] 
})

cli.addCommand({
    commandFunction: getAllAuthors
})
cli.addCommand({
    commandFunction: getAuthorById
})
cli.addCommand({
    commandFunction: getBooksByAuthor
})
cli.addCommand({
    commandFunction: addAuthor,
    argCount:4,
    argTypes:[Text, Text, Text, CsvArray]
})

//connect().then(_=>cli.execute());

//cli.exectue();

async function start(){
    await connect();
    cli.exectue();
}

start();