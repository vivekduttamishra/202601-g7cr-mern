import { MongooseAuthorRepository } from "../repositories/mongoose/mongoose-author.repository.js"
import { SequelizeAuthorRepository } from "../repositories/sequelize/sequelize-author.repository.js"
import { AuthorService } from "../services/authors.service.js"

const authorService=new AuthorService(new MongooseAuthorRepository())
//const authorService = new AuthorService(new SequelizeAuthorRepository())

export async function getAllAuthors(request,response){
        let authors = await authorService.getAllAuthors()
        response.send(authors)
}``