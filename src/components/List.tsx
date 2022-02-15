import React from 'react'
import { Todo } from '../redux/reducer'
interface TodoListProps {
    todos:Todo[],
    handleDeleteTodo:(id:number) => void,
    handleUpdateTodo:(id:number) => void
}
const List:React.FC<TodoListProps> = ({todos,handleDeleteTodo,handleUpdateTodo}) => {
    return (
        <ul>
            {todos.map((todo,idx)=>{
                const d = todo.timeStamp
                const formatTime = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
                return(
                    <div key={todo.id} 
                        className={`todo-${todo.completed ? 'complete' : ""}`} 
                        id={`todo-${idx}`}
                        onClick={() => handleUpdateTodo(todo.id)}>
                        {todo.todo} = {formatTime}
                    
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                )
            })}
        </ul>
    )
}

export default List