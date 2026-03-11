import { InvalidIdError } from '../../utils/exceptions.js'
import {Author} from './author.model.js'

export class MongooseAuthorRepository{
    
    async getAll(){
        return (await Author.find()).map(a=>this.normalizeId(a))
    }

    normalizeId(author ){
        author = author.toObject(); //covert to plain JSON
        author.id=author._id
        delete author._id 
       
        return author
    }

    async getById(id){
        let author= await Author.findById(id)
        if(!author)
            throw new InvalidIdError(id)
        return this.normalizeId(author)
    }

    async add(author){
        author._id=author.id
        delete author.id
        let result =await  Author.create(author)
        return result
    }

    async remove(id){
        console.log('removing ', id)
       let result =  await Author.findByIdAndDelete(id)
       console.log('remove result',result)
    }

    async update(id, author){
        author._id=author.id
        delete author.id;

        await Author.updateOne({_id:id}, {
            $set:{
                name: author.name
            }
        })
    }

    
}