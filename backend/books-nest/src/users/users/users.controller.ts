import { Body, Controller, Get, Post } from '@nestjs/common';
import { type LoginInfo, type User, UserService } from '../user/user.service';

@Controller('/api/users')
export class UsersController {

    constructor(private userService:UserService){}

    @Get()
    async getAllUsers(){
        return await this.userService.getAllUsers()
    }

    @Post()
    async register(@Body()user:User){
        return await this.userService.addUser(user)
    }

    @Post("login")
    async login(@Body()loginInfo:LoginInfo){
        return await this.userService.login(loginInfo)
    }



}
