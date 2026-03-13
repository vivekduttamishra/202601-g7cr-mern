import express from 'express'
//import {Author} from '../repositories/mongoose/author.model.js'
//import authorsService from '../services/authors.service.js'

import { addAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../controllers/authors.controller.js'
import { authenticate, authorize } from '../utils/jwt.js'

const router = express.Router()

router
    .route("/authors")
    .get(getAllAuthors)    //anyone can get
    .post(authenticate, addAuthor) //only loggedin users can add

router
    .route("/authors/:id")
    .get(getAuthorById)
    .put(authenticate, updateAuthor)   //only logged in user can update
    .delete(authorize("admin","librarian"), deleteAuthor) //only admin or librarian can delete
    

export default router

