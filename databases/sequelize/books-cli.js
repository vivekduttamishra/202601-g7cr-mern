
import { addAuthor, getAllAuthors, getAuthorById, getAuthorWithBooks } from './author-service.js';
import { addBook, addReview, getAllBooks,getBookById } from './books-service.js';
import Cli, { CsvArray, Float, Int, Text } from './cli.js'
//import { connect } from './connect.js';

import {Author,Book,Review} from './sequelize/index.js';
import { initDB } from './sequelize/sync.js';






const cli=new Cli();

cli.addCommand({
    commandFunction: getAllBooks,    
})

cli.addCommand({
    commandFunction:getBookById,  
})

cli.addCommand({
    commandFunction:addBook, 
    argCount:4,
    argTypes:[Text, Text, Int, Text] 
})

cli.addCommand({
    commandFunction: addReview,
    argCount:5,
    argTypes:[Text,Text,Text,Text,Int]
})



cli.addCommand({
    commandFunction: getAllAuthors
})
cli.addCommand({
    commandFunction: getAuthorById
})

cli.addCommand({
    commandFunction: addAuthor    
})

cli.addCommand(initDB)

cli.addCommand(getAuthorWithBooks)

//connect().then(_=>cli.execute());

//cli.exectue();

async function start(){
    //await connect();
    cli.exectue();
}

start();