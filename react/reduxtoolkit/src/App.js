import Form  from './components/Form';
import Todos from './components/Todos'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer)
  const [editVisibility,setEditVisibility] = useState(false)
  const [editTodo,setEditTodo] = useState('')
  const handleEditClick=(todo)=>{
    setEditVisibility(true)
    setEditTodo(todo)
  }
  const cancleUpadeate=()=>{
    setEditVisibility(false)
  }
  return (
    
    <div>
      <h1>Todo App</h1>
      <Form editVisibility={editVisibility} editTodo={editTodo} cancleUpadeate={cancleUpadeate}/>
      <Todos editVisibility={editVisibility} handleEditClick={handleEditClick}/>
      {todos.length>0 && (
        <button onClick={()=>dispatch(deleteAll())}>Delete All</button>
      )}
    </div>
  );
}

export default App;
