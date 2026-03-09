import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const port= Number(process.argv[2]  ?? process.env.PORT ?? 80)

const app = express()

const server=http.createServer(app)

server.on('error',(error)=>{
    console.error(`Error starting server: ${error.message}`)
})


server.listen(port, ()=>{
     console.log(`server started: http://localhost:${port}`)
})

