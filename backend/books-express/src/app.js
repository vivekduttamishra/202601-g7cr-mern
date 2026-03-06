import express from 'express'

import authorRouter from './authors.js'

const app = express()

app.get('/test',(request,response)=>{
    response.send("test handler 1")
})

app.get('/test',(request,response)=>{
    response.send("test handler 2")
})

app.use((request,response,next)=>{
    console.log(`request for: ${request.method} ${request.url}`)
    next()
})

// app.use((request,response,next)=>{
//     const {url:path, method}=request;
//     response.send({method,path})

//     //next()  //next not called
//     //no request moves down.
// })


app.use((request,response,next)=>{
    const{accept,referer} = request.headers;
    console.log('accept',accept);
    console.log('referer',referer);
    if(accept.includes('image') 
        && !(accept.includes("text/") || accept.includes('application/')) 
        && ! referer){
        return response.status(403).send({
            message:'Denied',
            reason:'No referer found'
        })
    } else
        next(); //I have nothing to do with this request
})

app.use(express.static("www"))

app.use(express.json()) 

app.use("/api", authorRouter)

export default app