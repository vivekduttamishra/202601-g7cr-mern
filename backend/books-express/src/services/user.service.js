import {AuthenticationError} from '../utils/exceptions.js'

export class UserService{
    constructor(userRepository){
        this.userRepository=userRepository
    }

    async getAllUsers(){
        return (await this
                        .userRepository
                        .getAllUsers())
                        .map(u=>{ 
                             //delete u.password;
                             return u
                        })
    }

    async register(user){
        //user.roles=[]; //use this in production. for now I am letting it

        user = await this.userRepository.addUser(user)
        user=user.toObject();
        //delete user.password
        return user;
    }

    async login(email, password){
        let user = await this.userRepository.getUserByEmail(email)
        if(user.password===password){
            return {login:"success", user}
        } else{
            throw new AuthenticationError();
        }
    }
}