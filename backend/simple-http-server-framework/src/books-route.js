import httpServer from "./http-server.js";
import fs from 'fs'


let books =JSON.parse( fs.readFileSync('./data/books.json'))
//let books=[]




httpServer.addRoute("/books", (request,response)=>{
    response.write(JSON.stringify(books))    
})