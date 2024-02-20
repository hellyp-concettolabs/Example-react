import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

function Todos({handleEditClick,editVisibility}) {
    const todos = useSelector((state)=>state.operationsReducer);
    //console.log(todos);
    const dispatch = useDispatch();
    return todos.map((todo)=>(
        <div key={todo.id} className='todo-box' style={{display:"flex" , justifyContent:"center"}}>
            <div className='content' style={{display:"flex"}}>
                {editVisibility===false &&(<input type="checkbox" checked={todo.completed}  onChange={()=>dispatch(handleCheckbox(todo.id))}></input>)}
                <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                    {todo.todo}
                </p>
            </div>
            <div className='actions-box' style={{display:"flex"}}>
                {editVisibility === false &&(
                    <>
                        <div onClick={()=>handleEditClick(todo)} style={{margin:"12px", padding:"5px", backgroundColor:"wheat"}}>Edit</div>
                        <div onClick={()=>dispatch(removeTodo(todo.id))} style={{margin:"12px", padding:"5px", backgroundColor:"wheat"}}>Delete</div>
                    </>
                )}
            </div>
        </div>
      ))
}

export default Todos
