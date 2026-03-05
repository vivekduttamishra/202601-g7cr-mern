const routes = require('./routes.js')

routes['/'] = (request,response) =>response.write(`Hello NodeJS World`)
