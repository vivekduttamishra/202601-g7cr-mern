import {getAllUsers, register, login, currentUser } from '../controllers/user.controller.js'

import express from 'express'
import { authenticate, authorize } from '../utils/jwt.js'

const router = express.Router()

router.
    route("/users")
    .get( authorize("admin"),getAllUsers)
    .post(register)

router
    .route("/users/login")
    .post(login)

router
    .route("/users/current-user")
    .get(authenticate, currentUser)

export default router;