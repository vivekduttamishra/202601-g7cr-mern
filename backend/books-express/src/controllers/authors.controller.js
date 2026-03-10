import appErrors from '../app-errors.js'
import { ValidationError } from '../utils/exceptions.js'
import injector from '../utils/injector.js'
import { asyncHandler, ResponseContent } from '../utils/http.js'

//we get authorService with all its dependencies
const authorService = injector.get("authorService")



export const getAllAuthors = asyncHandler(() => authorService.getAllAuthors())

export const getAuthorById = asyncHandler(({ id }) => authorService.getAuthorById(id))

export const addAuthor = asyncHandler(async ({ body, url }) => {

        let author = await authorService.addAuthor(body)

        return new ResponseContent(author, {
                location: `${url}/${author.id}`
        })

})

export const deleteAuthor=asyncHandler(({id})=> authorService.removeAuthor(id))

export const updateAuthor=asyncHandler(({id,body})=> authorService.updateAuthor(id,body))



