import http from './http'


export class UserService{

    getAllUsers=async()=>{

        let response = await http.get('/users')
        return response.data;
    }

    register=async(user)=>{
        let response = await http.post('/users',user)
        return response.data
    }

    login=async(loginInfo)=>{
        try{

            let response = await http.post('/users/login', loginInfo)
            //{user:{}, token}
            //let's save for future
            let {user,token} = response.data;
            localStorage.setItem("user",JSON.stringify(user))
            localStorage.setItem("token", token)
            return user;
        }catch(error){
            console.log('login error',error)
            throw error;
        }

    }

    getCurrentUser = async()=>{
        let userJson = localStorage.getItem("user")
        if(!userJson)
            return null;
        try{
            return JSON.parse(userJson)
        }catch(err){
            return null
        }
    }

    logout(){
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        return null; 
    }


}