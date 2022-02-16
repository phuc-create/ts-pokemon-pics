import React from 'react'
import { Actions } from '../../reducer'
import { TodoInput } from './Form'
interface TodoProps {
  setTodo:React.Dispatch<React.SetStateAction<TodoInput>>;
  todo: {
    id:number;
    text:string;
    completed:boolean;
    timeStamp:Date;
  },
  dispatch: React.Dispatch<Actions>,
  handleSubmitTodo:(e: { preventDefault: () => void }) => void
}
const Input:React.FC<TodoProps> = ({setTodo,todo,handleSubmitTodo}) => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setTodo({...todo,text:e.target.value})
    }
  return (
    <form onSubmit={handleSubmitTodo}>
    <input type="text" value={todo.text} onChange={(e) => handleChangeInput(e)}/>
    <button type='submit'>Submit</button>
    </form>
  )
}

export default Input
