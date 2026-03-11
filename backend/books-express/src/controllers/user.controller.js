import injector from '../utils/injector.js'
import {asyncHandler} from '../utils/http.js'

const userService = injector.get("userService")

export const getAllUsers= asyncHandler(async ()=>await userService.getAllUsers())

export const login=asyncHandler(async ({body})=>{
    let {email,password}=body
    
    let result = await userService.login(email,password)

    return result
    
})


export const register = asyncHandler(async ({body})=>await userService.register(body))

