
import dotenv from 'dotenv'
dotenv.config()
import app from './app.js'
import './books.js'  //we just want this code to execute



const port = Number(process.argv[2] ?? process.env.PORT ?? 80)


app.listen(port, (error) => {
    if (error)
        console.log(`error starting server on port  ${port} : ${error.message}`)
    else
        console.log(`server started: http://localhost:${port}`)
})

