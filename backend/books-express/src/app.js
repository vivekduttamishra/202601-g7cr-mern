import express from 'express'

import authorRoute from './routes/authors.route.js'
import userRoute from './routes/user.route.js'
import appErrors from './app-errors.js'

const app = express()

app.use(express.static('www'))
app.use(express.json())
//configure other middlwares here

app.use((request,response,next)=>{
    response.set("Access-Control-Allow-Origin", "*")
    response.set("Access-Control-Allow-Methods", "*")
    next(); //ok. i am done. more to main request.
})


//configure your routes here
app.use("/api", authorRoute)
app.use("/api", userRoute)

//add your error handler at the very end
//add it before all your routes
// app.use(async (error, request,response,next)=>{

//     let {status,body} = appErrors.execute(error,request)
//     response.status(status).send(body)
// })


export default app