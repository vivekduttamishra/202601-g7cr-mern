import injector from '../utils/injector.js'

//we get authorService with all its dependencies
const authorService= injector.get("authorService") 

export async function getAllAuthors(request,response){
        let authors = await authorService.getAllAuthors()
        response.send(authors)
}``