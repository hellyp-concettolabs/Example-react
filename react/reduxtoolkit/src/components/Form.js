import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo , handleEditSubmit} from '../redux/todoapp/actions';

function Form({editVisibility,editTodo,cancleUpadeate}) {

    const [text,settext] = useState('')

    const [editValue,setEditValue]=useState('')
    useEffect(()=>{
        setEditValue(editTodo.todo)
    },[editTodo])

    const dispatch = useDispatch();

    const handleSubmit=(e) =>{
        e.preventDefault();
        let todoObj = {
            id:nanoid(),
            todo: text,
            completed:false
        }
        settext('')
        dispatch(addTodo(todoObj))
    }

    const editSubmit=(e)=>{
        e.preventDefault();
        let editObj = {
            id:editTodo.id,
            todo:editValue,
            completed:false
        }
        dispatch(handleEditSubmit(editObj))
    }
    
  return (
    <>
        {editVisibility === false ? (
            <div>
            <form  onSubmit={handleSubmit}>
              <label>Add your tasks</label>
              <div>
                  <input type='text' required value={text} onChange={(e)=>{
                      settext(e.target.value)
                  }}/>
                  <button type='submit'>Add</button>
              </div>
            </form>
          </div>
        ):(
            <div>
      <form  onSubmit={editSubmit}>
        <label>Update your tasks</label>
        <div>
            <input type='text' required value={editValue || ""} onChange={(e)=>{
                setEditValue(e.target.value)
            }}/>
            <button type='submit'>Update</button>
        </div>
        <button onClick={cancleUpadeate}>Back</button>
      </form>
    </div>
        )}
    </>
    
  )
}

export default Form
