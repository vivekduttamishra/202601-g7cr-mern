import { AuthenticationError } from '../utils/exceptions.js'
import bcrypt from 'bcrypt'

export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async getAllUsers() {
        return (await this
            .userRepository
            .getAllUsers())
            .map(u => {
                //delete u.password;
                return u
            })
    }

    async register(user) {
        //user.roles=[]; //use this in production. for now I am letting it

        user.password = await bcrypt.hash(user.password, 10)
        user = await this.userRepository.addUser(user)
        user = user.toObject();
        //delete user.password
        return user;
    }

    async login(email, password) {
        try {
            let user = await this.userRepository.getUserByEmail(email)
            const match = await bcrypt.compare(password, user.password)

            if (match) {
                return { login: "success", user }
            } else {
                throw new AuthenticationError();
            }

        } catch (error) {
            throw new AuthenticationError("Invalid Credentials")
        }

    }
}