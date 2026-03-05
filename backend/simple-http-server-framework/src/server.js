

import httpServer from './http-server.js'
import './books-route.js'



httpServer.addRoute("/",(request,response)=>{
    response.write("Welcome to Books Api Server")
})



httpServer.start();


   