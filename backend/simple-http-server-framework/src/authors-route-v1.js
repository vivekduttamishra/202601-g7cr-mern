import server from "./http-server.js";
import fs from 'fs'


let authors = JSON.parse(fs.readFileSync('./data/authors.json'))

server.addRoute("GET /authors", (request, response) => {
    response.end(JSON.stringify(authors))
})

server.addRoute("GET /authors/vivek-dutta-mishra", (request, response) => {
    response.end(JSON.stringify(authors.find(b => b._id === 'vivek-dutta-mishra')))
})

server.addRoute("POST /authors", (request, response)=> {

    response.end(JSON.stringify({ status: 201, message: 'book added' }))

})