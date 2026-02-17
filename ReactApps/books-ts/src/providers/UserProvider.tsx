import React, {useContext,createContext,useReducer} from 'react'
import userService,{type User} from '../services/UserService'
import { createReducer, createStore, createAsyncAction} from '../services/context-utils';
const userContext = createContext<any>(null)



const userReducer={

    login(store:any,action:any){
        store.model=action.payload
    },
    logout(store:any, action:any){
        store.model=null
    },
  
    
}


interface UserProviderProps{
    children: React.JSX.Element
}


export const UserProvider = ({children}:UserProviderProps)=>{

    const reducer = createReducer(userReducer);
    const initStore = createStore(null);
    const [store, dispatch] = useReducer(reducer,initStore);

    const actionCreators={
        login: createAsyncAction("login", dispatch, userService.login),
        logout: createAsyncAction("logout", dispatch, userService.logout)
    }
   
    let info={
        user:store.model,
        ...store,
        ...actionCreators
    }

    return <userContext.Provider value={info}>
        {children}
    </userContext.Provider>
}

export const useUserProvider=()=>{
    return useContext(userContext);
}