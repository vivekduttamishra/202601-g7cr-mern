import {Author,Book} from "./sequelize/index.js"




export async function addAuthor(name,bio, photo) {
  // data should contain { id (slug), name, bio, photo }
  let id= name.toLowerCase().split(' ').join('-')
  const data={id,name,bio,photo:photo?? id+'.jpg'}
  return await Author.create(data);
}

export async function getAllAuthors() {
  let authors = await Author.findAll()
  return authors.map(a=>a.dataValues)
}

export async function getAuthorById(id) {
  let author =await Author.findByPk(id);
  if(author)
    return author.get({plain:true})
  else
    throw new Error(`Invalid Author Id ${id}`)
}

export async function getAuthorWithBooks(id) {
  // Returns author info plus a list of all books they have written
  let author= await Author.findByPk(id, { 
    include: [{model:Book, attributes:["id", "title","price","cover"]}] 
  });

  return author.get({plain:true})
}

export async function deleteAuthor(id) {
  // Note: Depending on your DB constraints, you may need to delete their books first
  return await Author.destroy({ where: { id: id } });
}
