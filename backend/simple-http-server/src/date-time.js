const routes = require('./routes.js')

routes['/date']= (request, response) => response.write(`Today is ${new Date().toLocaleDateString()}`)

routes['/time']= (request, response) => response.write(`Time now is ${new Date().toLocaleTimeString()}`)
