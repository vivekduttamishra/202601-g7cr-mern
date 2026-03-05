import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ?? 80

const routes = []

const chainHandler = (request, response) => {

    let resolved=false;
    for(let route of routes){
        let next = route(request,response)
        if(!next){
            resolved=true
            break;
        }
 
    }

    if(!resolved){

        response.statusCode = 404
        response.end(JSON.stringify({ status: 404, message: "Not Found", path:request.url }))
        
    }
}



const server = http.createServer(chainHandler)

server.on('error', (error) => console.error(error.message))

const start = (port) => {
    if (!port)
        port = PORT
    server.listen(port, () => console.log(`server started : http://localhost:${port}`))
}


const addRoute = (handler) => routes.push(handler)


export default {
    start,
    addRoute
}




