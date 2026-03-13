import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
import injector from '../utils/injector.js'
import {asyncHandler} from '../utils/http.js'
import { AuthenticationError } from '../utils/exceptions.js'

const userService = injector.get("userService")

const secret = process.env.JWT_SECRET

export const getAllUsers= asyncHandler(async ({request})=>{
    
    let tokenString = request.headers.authorization
    if(!tokenString)
        throw new AuthenticationError("Token Not found")

    tokenString=tokenString.replace('BEARER ','')
    let data;
    try{
        data = await jwt.verify(tokenString,secret)

    }catch(error){
        throw new AuthenticationError("Not Authenticated", null, error)
    }
    
    if(!data.roles.includes("admin"))
        throw new AuthenticationError("UnAuthorized", ["admin"])


    //only admin should get this
    return await userService.getAllUsers()
})

export const login=asyncHandler(async ({body,host})=>{
    let {email,password}=body
    
    let {user} = await userService.login(email,password)

    const data={
        subject: user.email,
        name:user.name,
        roles:user.roles,
        audience: host,  //who is this token issued to
        issuer: 'http://localhost:4000',        
    }

    const token = await jwt.sign(data,secret,{expiresIn:60*2}) //token expires in 2 min.

    const u={
        name:user.name, 
        photo:user.photo, 
        roles:user.roles
    }
    // console.log('user',user);
    // console.log('u',u);
    
    

    return {
       // user:u, 
        token}
    
})


export const currentUser = asyncHandler(async({request})=>{

    let tokenString = request.headers.authorization
    if(!tokenString)
        throw new AuthenticationError('Token Not found')

    tokenString=tokenString.replace('BEARER ','')

    try{
        let data = await jwt.verify(tokenString,secret)
        return {data}
    }catch(error){
       // console.log('error',error);
        
        throw new AuthenticationError('Not Authenticated', null, error)
    }


    return {tokenString}
    

})


export const register = asyncHandler(async ({body})=>await userService.register(body))

