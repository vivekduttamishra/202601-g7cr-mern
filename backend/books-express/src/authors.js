import app from './app.js'

app.get('/authors', (request, response) => {
    response.send(`Get a List of all authors`)
})