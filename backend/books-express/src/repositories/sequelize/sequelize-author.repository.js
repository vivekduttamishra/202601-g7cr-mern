import { InvalidIdError } from "../../utils/exceptions.js"
import { Author, Book } from "./index.js"

export class SequelizeAuthorRepository { 

  async getAll() {
    let authors = await Author.findAll()
    return authors.map(a => a.dataValues)
  }

  async getById(id) {
    let author = await Author.findByPk(id);
    if (author)
      return author.get({ plain: true })
    else
      throw new InvalidIdError(id)
  }

   async add(author) { //my author will have _id
    
    author.id=author._id
    delete author._id

    return await Author
                .create(data)
                .get({plain:true})
  }


  async remove(id) {
    // Note: Depending on your DB constraints, you may need to delete their books first
    return await Author.destroy({ where: { id: id } });
  }

  async update(id,author){
    let result= Author.update(author)
    return result;
  }

}