import express from 'express'
import dotenv from 'dotenv'
import { booksRouteBuilder } from './books_v3.js'
import { authorRouteBuilder } from './authors_v3.js'


const app = express()
booksRouteBuilder(app)
authorRouteBuilder(app)






dotenv.config()
const port = Number(process.argv[2] ?? process.env.PORT ?? 80)

app.listen(port, (error) => {
    if (error)
        console.log(`error starting server on port  ${port} : ${error.message}`)
    else
        console.log(`server started: http://localhost:${port}`)
})

