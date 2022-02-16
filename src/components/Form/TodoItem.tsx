import React from 'react'
import { Todo } from '../../reducer'
interface TodoItemProps {
    todo:Todo,
    idx:number,
    handleDeleteTodo:(id:number) => void,
    handleUpdateTodo:(id:number) => void,
    handleEditTodo:(id:number,newText:string) => void,
}
const TodoItem:React.FC<TodoItemProps> = ({
    todo,
    idx,
    handleDeleteTodo,
    handleUpdateTodo,
    handleEditTodo
}) => {
    const [editTodo,setEditTodo] = React.useState<boolean>(false)
    const [newValue,setNewValue] = React.useState<string>(todo.todo)
    const d = todo.timeStamp
    const formatTime = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
    const setNewTodo = () => {
        handleEditTodo(todo.id,newValue)
        setEditTodo(false)
    }
    return (
        <div key={todo.id} 
            className={`todo-${todo.completed ? 'complete' : ""}`} 
            id={`todo-${idx}`}
            >
                {
                    editTodo ? (
                        <>
                        <input type="text" value={newValue} onChange={(e)=> setNewValue(e.target.value)} />
                        <button onClick={() => setNewTodo()}>Done</button>
                        </>
                    ) : (
                        <>
                        <span onClick={() => handleUpdateTodo(todo.id)}>
                            {todo.todo} = {formatTime}
                        </span>
                        <button onClick={() => setEditTodo(!editTodo)}>Edit</button>
                        </>
                    )
                }
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            
        </div>
  )
}

export default TodoItem