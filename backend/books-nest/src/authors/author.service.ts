import { BadRequestException } from '@nestjs/common';
import authors from '../../data/authors.json'
import { Author } from './author'

export class AuthorService{

    async getAllAuthors(){
        return authors;
    }

    

    _validate(author:Author){
        let errors:Record<string,string>={}
        if(!author.name)
            errors["name"]="Required"
        if(!author.biography)
            errors["biography"]="Required"
        else if(author["biography"].length<20)
            errors["biography"]="Should be at least 20 chars"
        else if(author["biography"].length>2000)
            errors["biography"]="Should be at most 2000 chars"
        
        if(author.tags?.length>5)
            errors["tags"]="Max 5 tags allowed. Found: "+author.tags.length

        return errors;
    }

    async addAuthor(author:Author){
        let errors= this._validate(author)
        if(Object.keys(errors).length>0)
            throw new BadRequestException(errors)
        author.__v=1
        authors.push(author)
        return author;
    }

    async getAuthorById(id:string){
        const author= authors.find(a=>a._id===id)
        return author;
    }
}

