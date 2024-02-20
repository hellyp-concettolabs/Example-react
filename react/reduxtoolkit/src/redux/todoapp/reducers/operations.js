import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions";
import {DELETE_ALL} from "../actions";
const initialState = [
    {id: 1, todo: 'Redux', completed: false},
    {id: 2, todo: 'Redux Toolkit', completed: false},
    {id: 3, todo: 'React', completed: true},
];

export const operationsReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return[...state,action.payload];
        case DELETE_ALL:
            return[];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updateArray = [];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updateArray.push(item);
            })
            return updateArray;
            case UPDATE_CHECKBOX:
                let todoArray=[];
                state.map((item)=>{
                    if(item.id===action.payload){
                        item.completed = !item.completed;
                    }
                    todoArray.push(item);
                })
                return todoArray;
        default : return state;
    }
}