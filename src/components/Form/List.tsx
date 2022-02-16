import React from 'react'
import { Todo } from '../../reducer'
import TodoItem from './TodoItem'
interface TodoListProps {
    todos:Todo[],
    handleDeleteTodo:(id:number) => void,
    handleUpdateTodo:(id:number) => void,
    handleEditTodo:(id:number,newText:string) => void,
}
const List:React.FC<TodoListProps> = ({todos,handleDeleteTodo,handleUpdateTodo,handleEditTodo}) => {
    return (
        <ul>
            {todos.map((todo,idx)=>{
                return(
                    <TodoItem todo={todo} idx={idx} key={idx} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} handleEditTodo={handleEditTodo}/>
                )
            })}
        </ul>
    )
}

export default List