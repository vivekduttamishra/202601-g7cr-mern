import appErrors from '../app-errors.js'
import { ValidationError } from '../utils/exceptions.js'
import injector from '../utils/injector.js'
import { asyncHandler, ResponseContent } from '../utils/http.js'

//we get authorService with all its dependencies
const authorService = injector.get("authorService")



export const getAllAuthors = asyncHandler(async({host}) =>{

        let authors=await   authorService.getAllAuthors()

        authors=authors.map(a=>({
                ...a,
                photo: a.photo?.startsWith('http')?a.photo: `http://${host}/authors/${a.photo}`        
        }))
       // console.log('authors',authors);
        return authors
        
})

export const getAuthorById = asyncHandler(async({ id,host }) => {
       const author= authorService.getAuthorById(id)
       author.photo=author.photo?.startsWith('http')?author.photo: `http://${host}/authors/${author.photo}`
       return author;
})

export const addAuthor = asyncHandler(async ({ body, url }) => {

        let author = await authorService.addAuthor(body)

        return new ResponseContent(author, {
                location: `${url}/${author.id}`
        })

})

export const deleteAuthor=asyncHandler(({id})=> authorService.removeAuthor(id))

export const updateAuthor=asyncHandler(({id,body})=> authorService.updateAuthor(id,body))



