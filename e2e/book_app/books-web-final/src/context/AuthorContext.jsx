import { AuthorService } from "../services/AuthorService";
import {createContext, useContext, useReducer} from 'react'
import { createDispatcher, createReducer } from "../utils/reducer";


const context = createContext()

export const useAuthorContext =()=>useContext(context)

const initStore={
    authors:[],
    selectedAuthor:null

}


const [authorReducer, initialAuthorState]= createReducer(
    initStore,{
    selectAuthors(state,action){
        return {
            ...state,
            authors:action.payload
        }
    },
    selectAuthor(state,action){
        return {
            ...state,
            selectedAuthor:action.payload
        }
    },
    addAuthor(state, action){
        return {
            ...state,
            selectedAuthor:action.payload,
            authors: state.authors.concat(action.payload)
        }
    },
    deleteAuthor(state,action){
        let result={
            ...state,
            authors: state.authors.filter(a=>a.id!==action.payload),            
        }
        if(result.author.id===action.payload)
            result.selectedAuthor=null;
        return result;

    },
    updateAuthor(state,action){
        return {
            ...state,
            authors: state.authors.map(a=> a.id===action.payload.id?action.payload:a)
        }
    }
})

console.log('initialAuthorState',initialAuthorState);



export const AuthorContext = ({children})=>{

    const [state, dispatch] = useReducer(authorReducer,initialAuthorState)

    const authorService = new AuthorService()
    const dispatcher = createDispatcher(dispatch,[{delay:2000}]);
    
    const data={
        ...state,
        getAllAuthors: dispatcher("selectAuthors", ()=>authorService.getAllAuthors()),
        getAuthorById: dispatcher("selectAuthor", (id)=>authorService.getAuthorById(id) ),
        addAuthor: dispatcher('addAuthor', authorService.addAuthor),
    }

   

    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )

}