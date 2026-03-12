import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';


export interface LoginInfo{

    email:string,
    password:string,
}

export interface User{
    email:string,
    password:string,
    name:string,
    photo?:string;
    roles:string[]
}

let users:User[] = [
    {name:"Vivek Dutta Mishra",email:"vivek@conceptarchitect.in", password:"P@ssw0rd", roles:["admin","author"] },
    {name:"Sanjay Mall",email:"sanjay@gmail.com", password:"P@ssw0rd", roles:["reader"] },
]

@Injectable()
export class UserService {

    async getAllUsers(){
        return users.map(u=>{
            const {password,...user}=u
            return user;
        })
    }

    async addUser(user:User){
        const existingUser= users.find(u=> u.email===user.email)
        if(existingUser)
            throw new BadRequestException({error:"Duplicate Email", email:user.email})

        users.push(user)
        return user
    }

    async login(loginInfo:LoginInfo){
        
        const {email, password}=loginInfo

        const user = users.find(u=>u.email===email)
        if(!user|| user.password!==password){
            console.log('invalid credential for ',loginInfo)
            throw new HttpException("Invalid Credentials", HttpStatus.UNAUTHORIZED)
        }
        
        const {password:_, ...userWithoutPassword}=user;

        return userWithoutPassword
        
    }


}
