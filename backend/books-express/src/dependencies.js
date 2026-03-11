import injector from './utils/injector.js'
import { AuthorService } from './services/authors.service.js'
import {MongooseAuthorRepository} from './repositories/mongoose/mongoose-author.repository.js'
import {SequelizeAuthorRepository} from './repositories/sequelize/sequelize-author.repository.js'
import { MongooseUserRepository } from './repositories/mongoose/mongoose-user.repository.js'
import { UserService } from './services/user.service.js'


injector
    .add("authorService", AuthorService)

injector
    .add("authorRepository", MongooseAuthorRepository)

injector
    .add("userRepository", MongooseUserRepository)

injector
    .add("userService", UserService)


//add more components that you may need anywhere in your application