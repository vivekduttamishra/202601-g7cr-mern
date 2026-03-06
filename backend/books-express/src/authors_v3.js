

export function authorRouteBuilder(app) {

    app.get('/authors', (request, response) => {
        response.send(`Get a List of all authors`)
    })
}