export interface Todo {
    id:number;
    todo:string;
    completed:boolean;
    timeStamp:Date
}
interface State {
    todos :Todo[],
}
export type Actions =  {type:'add',id:number,todo:string,timeStamp:Date} 
                | {type:'remove',id:number} 
                | {type:'update',id:number}
                | {type:'clear'}
enum TodoType {
    ADD = "add",
    REMOVE = "remove",
    UPDATE = "update",
    CLEAR = "clear",
}
const todoReducer = (state:State,action:Actions) => {
    switch (action.type) {
        case TodoType.ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id:action.id,todo:action.todo,completed:false,timeStamp:action.timeStamp}
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
                todos: state.todos.map((todo) =>  todo.id === action.id ? {...todo,completed : !todo.completed} : todo    
                )
            }
        case TodoType.CLEAR:
            return {
                ...state,
                todos: []
            }
        default:
            return state
            
    }
}

export default todoReducer