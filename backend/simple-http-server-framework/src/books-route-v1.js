import server from "./http-server.js";
import fs from 'fs'


let books = JSON.parse(fs.readFileSync('./data/books.json'))
//let books=[]




server.addRoute("GET /books", (request, response) => {
    response.end(JSON.stringify(books))
})

server.addRoute("GET /books/the-accursed-god", (request, response) => {
    response.end(JSON.stringify(books.find(b => b._id === 'the-accursed-god')))
})

server.addRoute("POST /books", (request, response)=> {

    response.end(JSON.stringify({ status: 201, message: 'book added' }))

})