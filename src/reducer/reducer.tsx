import  {State,Actions} from './constants'
enum TodoType {
    ADD = "add",
    REMOVE = "remove",
    UPDATE = "update",
    CLEAR = "clear",
    EDIT = "edit"
}
const TodoReducer = (state:State,action:Actions) => {
    switch (action.type) {
        case TodoType.ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id:action.id,
                        todo:action.todo,
                        completed:false,
                        timeStamp:action.timeStamp
                    }
                ]
            }
        case TodoType.REMOVE:
            return {
                ...state,
                todos: state.todos.filter(v => v.id !== action.id)
            }
        case TodoType.UPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) =>  
                todo.id === action.id ?
                    Object.assign({},todo,{completed : !todo.completed}) : todo    
                )
            }
        case TodoType.CLEAR:
            return {
                ...state,
                todos: []
            }
        case TodoType.EDIT:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.id ? Object.assign({},todo,{todo:action.todo}) : todo
                )
            }
        default:
            return state
            
    }
}

export default TodoReducer