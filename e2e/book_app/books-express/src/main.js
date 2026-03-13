import dotenv from 'dotenv'
import http from 'http'
import https from 'https'
import fs from 'fs'
dotenv.config()

//MUST IMPORT IT BEFORE IMPORTAING ANY OTHER COMPONENT
import './dependencies.js'
// NOW ALL THESE COMPONENTS CAN USE dependencies.
import { connect } from './repositories/mongoose/connect.js'
import { initDB } from './repositories/sequelize/sync.js'
import app from './app.js'

import os from 'os'
import cluster from 'cluster'

//const httpServer = http.createServer(app)



async function main(){
    
    if(cluster.isPrimary){
        const cpus = os.cpus().length
        //console.log(`launching ${cpus} instances`)
        for(let i=0;i<cpus;i++){
            cluster.fork()
        }

        cluster.on('exit', worker=>{

            console.log('killed ',worker.process.pid)
            cluster.fork() //lets replace with a new process.

        })

    }else{
        console.log('child process created ', process.pid)
        startServer()
    }


}




async function startServer() {

    const httpsOptions = {
        key: fs.readFileSync(process.env.HTTPS_KEY),
        cert: fs.readFileSync(process.env.HTTPS_CERT)
    }

    const serverFactory = {
        'http': (requestHandler) => http.createServer(requestHandler),
        'https': (requestHandler) => https.createServer(httpsOptions, requestHandler)
    }

    const protocol = process.argv[2] ?? process.env.SERVER_PROTOCOL ?? 'http'

    const server = serverFactory[protocol](app)


    let port = process.argv[3] ?? process.env.PORT ?? (protocol === 'http' ? 80 : 443)

    port = Number(port)

    server.on('error', (error) => console.error(`Error sarting server on port ${port}`))

    try {
        if (process.env.SEQUELIZE_INIT == 'true') {
            console.log('intializing sequelize database')
            await initDB();
        }
        await connect()
        server.listen(port, () => console.log(`server started: ${protocol}://localhost:${port}`))

    } catch (error) {
        console.log(`Error Starting Servier: ${error}`)
    }

}

main()

//startServer(); //now start the server
//why no await?
//I don't care how long it takes to start
//I have nothing to do here
