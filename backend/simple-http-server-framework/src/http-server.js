import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT??80

const routes={}


const server = http.createServer((request,response)=>{

    const path = request.url
    
    if(routes[path])
        routes[path](request,response)
    else{
        response.statusCode=404
        response.write(JSON.stringify({status:404, message:"Not Found", path}))
    }
    response.end();
})

server.on('error',(error)=>console.error(error.message))

const start=(port)=>{
    if(!port)
        port=PORT
    server.listen(port,()=> console.log(`server started : http://localhost:${port}`))
}


const addRoute = (path, handler)=> routes[path]=handler


export default {
    start,
    addRoute
}




