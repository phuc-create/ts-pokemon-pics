import React from "react"
import Input from "./Input"
import List from "./List"
import todoReducer from '../redux/reducer'
export interface TodoInput {
    id:number;
    text:string;
    completed:boolean;
    timeStamp: Date
}
const Form = () => {
    const [todo,setTodo] = React.useState<TodoInput>({
        id:0,
        text:"",
        completed:false,
        timeStamp: new Date()
    })
    const [state,dispatch] = React.useReducer(todoReducer,{
        todos:[]
    })
    const handleSubmitTodo = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if(todo.text === ""){
            alert('null ?')
            return
        }
        if(state.todos.find(t => t.todo === todo.text)){
            alert('already exist !')
            return
        } 
        const randomId = Math.random()
        dispatch({type:"add",id:randomId,todo:todo.text,timeStamp:todo.timeStamp})
        setTodo({
            id:0,
            text:"",
            completed:false,
            timeStamp: new Date()
        })
    }

    const handleDeleteTodo = (idTodo:number) => {
        console.log("as")
        dispatch({type:"remove",id:idTodo})
    }

    const handleUpdateTodo = (idTodo:number) =>{
        dispatch({type:"update",id:idTodo})
    }

    const clear = () => {
        dispatch({type:"clear"})
    }

    return (
        <div>
            <button onClick={()=> clear()}>CLEAR TODOS</button>
            <Input 
            setTodo={setTodo} 
            todo={todo} 
            dispatch={dispatch} 
            handleSubmitTodo={handleSubmitTodo} />
            <List 
            todos={state.todos} 
            handleDeleteTodo={handleDeleteTodo} 
            handleUpdateTodo={handleUpdateTodo}/>
        </div>
    )
}

export default Form
