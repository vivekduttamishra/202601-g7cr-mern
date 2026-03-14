import express from 'express'
import { parseJwtToken } from './utils/jwt.js'

import authorRoute from './routes/authors.route.js'
import userRoute from './routes/user.route.js'
import appErrors from './app-errors.js'
import cors from 'cors'
import { asyncHandler, spa } from './utils/http.js'

const app = express()

app.use(express.static('www'))
app.use(express.json())
//configure other middlwares here

// app.use((request,response,next)=>{
//     response.set("Access-Control-Allow-Origin", "*")
//     response.set("Access-Control-Allow-Methods", "*")
//     next(); //ok. i am done. more to main request.
// })

app.use(cors())




app.use((request,response,next)=>{

    // console.log('request.method',request.method);
    // console.log('request.originalUrl',request.originalUrl)
    // console.log('request.body',request.body);
    next()
      
    
})

app.use(parseJwtToken)

app.get("/pid",asyncHandler(()=>({pid:process.pid})))
app.get('/kill',asyncHandler(()=>{
    let pid = process.pid
    process.exit(1)
}))

//configure your routes here 
app.use("/api", authorRoute)

app.use("/api", userRoute)

//add your error handler at the very end
//add it before all your routes
// app.use(async (error, request,response,next)=>{

//     let {status,body} = appErrors.execute(error,request)
//     response.status(status).send(body)
// })


//Add this route at the end
app.use(spa())



export default app