import dotenv from 'dotenv'
import http from 'http'
import {initDB} from './repositories/sequelize/sync.js'
dotenv.config()

import {connect} from './repositories/mongoose/connect.js'

import app from './app.js'

const server = http.createServer(app)

let port = process.argv[2] ?? process.env.PORT ?? 80

port = Number(port)

server.on('error',(error)=>console.error(`Error sarting server on port {$port}`))

   
async function startServer(){
    try{
        if(process.env.SEQUELIZE_INIT){
            console.log('intializing sequelize database')
            await initDB();
        }
        await connect() 
        server.listen(port,()=>console.log(`server started: http://localhost:${port}`))

    }catch(error){
        console.log(`Error Starting Servier: ${error}`)
    }
 
}

startServer(); //now start the server
//why no await?
//I don't care how long it takes to start
//I have nothing to do here
