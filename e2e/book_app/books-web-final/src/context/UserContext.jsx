import { useContext,createContext,useReducer, Children, useEffect } from "react";
import { UserService } from "../services/UserService";
import {createReducer,  createDispatcher} from '../utils/reducer'


const context= createContext()

export const useUserContext=()=> useContext(context)

const [reducer,initState] = createReducer({
    user:null,
    users:[]
},{
    setUser(state, action){
        return {...state, user:action.payload}
    },
    setUsers(state, action){
        return {...state, users:action.payload}
    }
    // removeUser(){
    //     return null;
    // }
})

export const UserContext=({children})=>{

    const [store, dispatch] = useReducer(reducer, initState)
    const userService = new UserService()
    const dispatchable = createDispatcher(dispatch,
                    [{delay:2000}]
                )

    const value={
        ...store,
        getAllUsers: dispatchable("setUsers", userService.getAllUsers),
        login: dispatchable("setUser", userService.login),
        logout: dispatchable("setUser", userService.logout),
        getCurrentUser: dispatchable("setUser", userService.getCurrentUser),
        register: dispatchable("noAction", userService.register)  // it doesn't update any state
    }

    useEffect(()=>{
        //value.getCurrentUser()
         userService
            .getCurrentUser()
            .then(user=> dispatch({type:"setUser", payload:user}))
       
    },[])

    //in the begining let's find out the current user
    //value.getCurrentUser()

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )


}