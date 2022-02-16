interface Todo {
  id:number;
  todo:string;
  completed:boolean;
  timeStamp:Date
}
interface State {
  todos :Todo[],
}
type Actions =  {type:'add',id:number,todo:string,timeStamp:Date} 
                | {type:'remove',id:number} 
                | {type:'update',id:number}
                | {type:'clear'}
                | {type:'edit',id:number,todo:string}
export type { Todo,State,Actions}