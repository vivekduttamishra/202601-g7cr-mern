import express from 'express'
//import {Author} from '../repositories/mongoose/author.model.js'
//import authorsService from '../services/authors.service.js'

import { getAllAuthors } from '../controllers/authors.controller.js'

const router = express.Router()

router
    .route("/authors")
    .get(getAllAuthors)

router
    .route("/author-list")
    .get(async(request,response)=>{
        let authors = await authorService.getAllAuthors()
        response.send(authors)        
    })

export default router

