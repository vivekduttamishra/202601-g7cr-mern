import { InvalidIdError } from '../../utils/exceptions.js'
import {Author} from './author.model.js'

export class MongooseAuthorRepository{
    
    async getAll(){
        return await Author.find()
    }

    async getById(id){
        let author= await Author.findById(id)
        if(!author)
            throw new InvalidIdError(id)
        return author
    }

    async add(author){
        let result =await  Author.create(author)
        return result
    }

    async remove(id){
        await Author.deleteOne({_id:id})
    }

    async update(id, author){
        await Author.updateOne({_id:id}, {
            $set:{
                ...author
            }
        })
    }

    
}