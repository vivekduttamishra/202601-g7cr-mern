import axios from 'axios'


const http = axios.create({
    baseURL:"http://localhost:4000/api"
})

//add interceptor to add token to all requests
http.interceptors.request.use((config)=>{
    let token=localStorage.getItem("token") 
    if(token){
        config.headers["Authorization"]= `BEARER ${token}`
    }
    return config;
}
, (error)=>{
    return Promise.reject(error)
})








export default http