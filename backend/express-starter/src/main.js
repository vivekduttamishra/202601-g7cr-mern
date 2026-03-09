import dotenv from 'dotenv'
import http from 'http'
dotenv.config()

import app from './app.js'

const server = http.createServer(app)

let port = process.argv[2] ?? process.env.PORT ?? 80

port = Number(port)

server.on('error',(error)=>console.error(`Error sarting server on port {$port}`))

server.listen(port,()=>console.log(`server started: http://localhost:${port}`))