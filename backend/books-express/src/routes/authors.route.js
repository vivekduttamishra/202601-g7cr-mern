import express from 'express'
//import {Author} from '../repositories/mongoose/author.model.js'
//import authorsService from '../services/authors.service.js'

import { addAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../controllers/authors.controller.js'

const router = express.Router()

router
    .route("/authors")
    .get(getAllAuthors)
    .post(addAuthor)

router
    .route("/authors/:id")
    .get(getAuthorById)
    .put(updateAuthor)
    .delete(deleteAuthor)
    

export default router

