import React from "react"
import {TodoReducer,State,Actions} from '../reducer'

interface ContextProps {
    children:React.ReactChild
}

interface ContextType {
    state:State,
    dispatch:React.Dispatch<Actions>
}

// export const TodoContext = React.createContext({} as ContextType)

export const CustomContext = <T extends {} | null>(defaultValue:ContextType | null) =>{
    const Context = React.createContext({} as ContextType)
    function useCtx(){
        const c = React.useContext(Context)
        if(c === undefined){
            throw Error("Make sure provider wraped")
        }
        return c
    }
    return [useCtx,Context.Provider] as const
}

export const [useCtx,CtxProvider] = CustomContext(null)

const ContextProvider:React.FC<ContextProps> = ({children}): JSX.Element => {
    const [state,dispatch] = React.useReducer(TodoReducer,{
        todos:[
            {
                id:0,
                todo:"hello world",
                completed:false,
                timeStamp: new Date()
            },
            {
                id:1,
                todo:"hi new day",
                completed:false,
                timeStamp: new Date()
            },
            {
                id:2,
                todo:"Hi Mom!",
                completed:false,
                timeStamp: new Date()
            }
        ]
    })
    const props = {
        state,dispatch
    }
    return(
        <CtxProvider value={props}>
            {children}
        </CtxProvider>
        )
}

export default ContextProvider


