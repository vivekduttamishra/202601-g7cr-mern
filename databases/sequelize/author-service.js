import {Author} from "./author-model.js"






export async function getAllAuthors(){
    return await Author.find();
}

export async function addAuthor(name,bio,image,tags){
    let newAuthor= {  name,bio,image,tags}
    let author = await Author.create(newAuthor)
    return author;
}

export async function getAuthorById(id){
    let author= await Author.findOne({id})

    
    if(author)
        return author
    else 
        throw new Error(`Invalid Author Id: ${id}`)
}

export async function getBooksByAuthor(authorId){
    return []
}

