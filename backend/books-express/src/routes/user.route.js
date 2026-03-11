import {getAllUsers, register, login, currentUser } from '../controllers/user.controller.js'

import express from 'express'

const router = express.Router()

router.
    route("/users")
    .get(getAllUsers)
    .post(register)

router
    .route("/users/login")
    .post(login)

router
    .route("/users/current-user")
    .get(currentUser)

export default router;