import appErrors from '../app-errors.js'
import { ValidationError } from '../utils/exceptions.js'
import injector from '../utils/injector.js'
import { asyncHandler, ResponseContent } from '../utils/http.js'

//we get authorService with all its dependencies
//const authorService = injector.get("authorService")

const authorService= injector.factory("authorService")



export const getAllAuthors = async({host}) =>{

        let authors=await   authorService().getAllAuthors()

        authors=authors.map(a=>({
                ...a,
                photo: a.photo?.startsWith('http')?a.photo: `http://${host}/authors/${a.photo}`        
        }))
       // console.log('authors',authors);
        return authors
        
}

export const getAuthorById = async({ id,host }) => {
       const author=await authorService().getAuthorById(id)
       author.photo=author.photo?.startsWith('http')?author.photo: `http://${host}/authors/${author.photo}`
       return author;
}

export const addAuthor = async ({ body, url }) => {
        console.log('body',body);
        console.log('url',url);
        
        let author = await authorService().addAuthor(body)
        
        return new ResponseContent(author, {
                location: `${url}/${author.id}`
        })

}

export const deleteAuthor=({id})=> authorService().removeAuthor(id)

export const updateAuthor=({id,body})=> authorService().updateAuthor(id,body)



