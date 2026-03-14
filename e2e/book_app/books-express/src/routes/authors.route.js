import express from 'express'
//import {Author} from '../repositories/mongoose/author.model.js'
//import authorsService from '../services/authors.service.js'

import { addAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../controllers/authors.controller.js'
import { authenticate, authorize } from '../utils/jwt.js'
import { asyncHandler } from '../utils/http.js';

console.log('authenticate.name',authenticate.name);


const router = express.Router()

router
    .route("/authors")
    .get(asyncHandler(getAllAuthors))    //anyone can get
    .post(authenticate, asyncHandler(addAuthor)) //only loggedin users can add

router
    .route("/authors/:id")
    .get(asyncHandler(getAuthorById))
    .put(authenticate, asyncHandler(updateAuthor))   //only logged in user can update
    .delete(authorize("admin","librarian"), asyncHandler(deleteAuthor)) //only admin or librarian can delete
    

export default router

