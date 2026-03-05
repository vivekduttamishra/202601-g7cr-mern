//step #1 get module
const http = require('http');

const routes = {
    '/date': (request, response) => response.write(`Today is ${new Date().toLocaleDateString()}`),
    '/time': (request, response) => response.write(`Time now is ${new Date().toLocaleTimeString()}`),
    '/': (request,response) =>response.write(`Hello NodeJS World`)
}

//step #2 create server
const server = http.createServer(
    function (request, response) {

        let path = request.url;
        if(routes[path])
            routes[path](request,response)
        else
            response.write(`NOT FOUND: ${path}`)

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