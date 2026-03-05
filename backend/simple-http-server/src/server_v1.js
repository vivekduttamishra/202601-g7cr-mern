//step #1 get module
const http = require('http');


//step #2 create server
const server = http.createServer(
    function (request, response) {
        
        let path = request.url;
        if(path==='/date')
            response.write(`Today is ${new Date().toLocaleDateString()}`)
        else if(path==='/time')
            response.write(`Time now is ${new Date().toLocaleTimeString()}`)
        else if(path==='/')
            response.write(`Hello NodeJS World`)
        else{
            response.statusCode=404
            response.write(`Not Found: ${path}`)
        }

        response.end();
        
    }

)

//step #3 start server and make it listen to a particular port
const port = 4000;

server.on('error', (error) => console.log(`Error launchging server on port :${port}`))

server.listen(port, (error) => {
    //server started to run
    console.log(`server started: http://localhost:${port}`)
})