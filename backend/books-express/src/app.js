import express from 'express'
import authorRoute from './routes/authors.route.js'

const app = express()

app.use(express.static('www'))
app.use(express.json())
//configure other middlwares here


//configure your routes here
app.use("/api", authorRoute)



export default app