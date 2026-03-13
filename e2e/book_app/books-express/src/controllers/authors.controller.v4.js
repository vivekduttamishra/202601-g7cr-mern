import appErrors from '../app-errors.js'
import { ValidationError } from '../utils/exceptions.js'
import injector from '../utils/injector.js'

//we get authorService with all its dependencies
const authorService = injector.get("authorService")

export async function getAllAuthors(request, response) {
        let authors = await authorService.getAllAuthors()
        response.send(authors)
}

export async function getAuthorById(request, response) {
        const { id } = request.params
        const author = await authorService.getAuthorById(id)
        response.send(author)
}

export async function addAuthor(request, response) {
        const { body, host, originalUrl } = request
        const result = await authorService.addAuthor(body)

        response
                .status(201)
                .set("location", `${host}${originalUrl}/${result._id}`)
                .send(result)
}

export async function deleteAuthor(request, response) {
        const { id } = request.params
        await authorService.removeAuthor(id)
        response.status(204).send()
}

export async function updateAuthor(request, response) {
        const { id } = request.params
        const { body } = request
        const result = await authorService.updateAuthor(id, body)
        response.status(202).send(result)
}

