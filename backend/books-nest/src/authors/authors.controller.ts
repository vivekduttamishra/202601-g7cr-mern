import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from "@nestjs/common";
import { AuthorService } from "./author.service";
import {type Author } from "./author";
import { ApiGuardGuard } from "src/api-guard/api-guard.guard";



@Controller("/api/authors")
@UseGuards(ApiGuardGuard)
export class AuthorsController{

    //dependnecy injection
    //will be handled automatically
    constructor(private authorService:AuthorService){}

    @Get()
    async getAllAuthors(){
        return await this.authorService.getAllAuthors()
    }

    @Get(':id')
    async getAuthorById(@Param("id") id:string){
        let author= await this.authorService.getAuthorById(id)
        if(author)
            return author;
        else
            throw new NotFoundException({
                message:"Author Not  Found",
                reason:"Invalid Id",
                id
            })
    }

    @Post()
    async addAuthor(@Body() author:Author){
        const result = await this.authorService.addAuthor(author)
        return result;       
    }
 
}

