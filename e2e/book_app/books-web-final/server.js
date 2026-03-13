import express from 'express'
import fs from 'fs'
import path from 'path'

const app=express()

//serves static resource.
//works for main react requests
const appRoot=process.argv[3]?? "dist"
app.use(express.static(appRoot))


//but when some directly tries access React's router link
//previous middleware will not serve that request
//by default express will return 404
//unless we define one more middleware

app.use((request,response)=>{
    //send index.html for every other requests
    fs
        .createReadStream(path.join(appRoot,"index.html"))
        .pipe(response)

})

const port = process.argv[2] || 3000

app.on('error',error=>console.log(`error starting server: ${error.message}`))
app.listen(port, ()=> console.log(`Server started on port http://localhost:${port}`))