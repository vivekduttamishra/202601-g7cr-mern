import { ValidationError } from '../utils/exceptions.js'
import injector from '../utils/injector.js'

//we get authorService with all its dependencies
const authorService= injector.get("authorService") 

export async function getAllAuthors(request,response){
        let authors = await authorService.getAllAuthors()
        response.send(authors)
}

export async function getAuthorById(request,response){
        const {id} = request.params
        try{
                const author = await authorService.getAuthorById(id)
                response.send(author)
        }catch(error){
                response.status(404).send({message:'No Such Author', id})
        }
}

export async function addAuthor(request,response){
        const {body,host,originalUrl} = request
        try{
                const result = await authorService.addAuthor(body)

                response
                        .status(201)
                        .set("location",`${host}${originalUrl}/${result._id}`)
                        .send(result)
        }catch(ex){
                if(ex instanceof ValidationError){
                        response
                                .status(400)
                                .send({
                                        message: ex.message,
                                        errors:ex.errors
                                })
                } 
                //else if (ex instanceof AuthenticationError){
                //  response.status(401).send({message:"Not Authenticated"})
                //}
                
                //else if (ex instanceof AuthroizationError){
                //  response.status(401).send({message:"Not Authorized", requiredRoles: ex.roles})
                //}

                else {
                        
                        throw ex //let it be error 500
                }
        }
}

export async function deleteAuthor(request,response){
        const {id} = request.params
        await authorService.removeAuthor(id)
        response.status(204).send()
}

export async function updateAuthor(request,response){
        const {id}=request.params
        const {body}=request
        const result = await authorService.updateAuthor(id,body)
        response.status(202).send(result)
}

