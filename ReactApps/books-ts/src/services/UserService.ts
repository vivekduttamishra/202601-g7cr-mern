import api from './api'
import { delay } from './delay';

let uri="users"

export interface User{
    name:string,
    role:[string],
    email:string
}


class UserService { 
    async login(email:string, password:string){

        await delay(2000);
        //get matching email and password combination from json-server
        let url=`${uri}?email=${email}`
        let response = await api.get(url)
        //console.log('login response',response)
        let [user]=response.data;
       
        
        if(user.password===password){
            delete user.password;
            return user;
        }else{
            throw new Error('Invalid Credentials')
        }
        
    }

    async logout(){
        
    }
}


export default new UserService();

