import express from 'express'

const app = express()

app.use(express.static('www'))
app.use(express.json())
//configure other middlwares here


//configure your routes here



export default app