import {getAllUsers, register, login } from '../controllers/user.controller.js'

import express from 'express'

const router = express.Router()

router.
    route("/users")
    .get(getAllUsers)
    .post(register)

router
    .route("/users/login")
    .post(login)

export default router;