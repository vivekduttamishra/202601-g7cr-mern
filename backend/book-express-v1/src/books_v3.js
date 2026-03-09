
export function booksRouteBuilder(app) {

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
}