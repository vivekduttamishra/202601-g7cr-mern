import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const port = Number(process.argv[2] ?? process.env.PORT ?? 80)

const app = express()

app.get('/books', (request, response) => {
    response.send([
        { title: 'The Accursed God' },
        { title: 'Manas' },
        { title: 'The Shadows of Kali' },
        { title: 'Ctrl Alt Karma' },
    ])
})

app.post('/books', (request, response) => {
    response
        .status(201)
        .send({
            status: 201,
            message: 'Book Created'
        })
})

app.get('/books/:id', (request, response) => {
    const id = request.params.id
    response.send({ id })
})

app.get('/authors', (request, response) => {
    response.send(`Get a List of all authors`)
})


app.listen(port, (error) => {
    if (error)
        console.log(`error starting server on port  ${port} : ${error.message}`)
    else
        console.log(`server started: http://localhost:${port}`)
})

