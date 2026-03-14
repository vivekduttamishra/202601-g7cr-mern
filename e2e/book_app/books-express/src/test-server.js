import dotenv from 'dotenv'
import http from 'http'
dotenv.config()

//MUST IMPORT IT BEFORE IMPORTAING ANY OTHER COMPONENT
import './test-dependencies.js'
// NOW ALL THESE COMPONENTS CAN USE dependencies.
import app from './app.js'







async function startServer() {
    const server = http.createServer(app)
    const port = 5001
    server.on('error', (error) => console.error(`Error sarting server on port ${port}`))
    server.listen(port, () => console.log(`server started: http://localhost:${port}`))
}

startServer()