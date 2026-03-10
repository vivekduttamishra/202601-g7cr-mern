import express from 'express'

import authorRoute from './routes/authors.route.js'
import appErrors from './app-errors.js'

const app = express()

app.use(express.static('www'))
app.use(express.json())
//configure other middlwares here


//configure your routes here
app.use("/api", authorRoute)


//add your error handler at the very end
//add it before all your routes
// app.use(async (error, request,response,next)=>{

//     let {status,body} = appErrors.execute(error,request)
//     response.status(status).send(body)
// })


export default app