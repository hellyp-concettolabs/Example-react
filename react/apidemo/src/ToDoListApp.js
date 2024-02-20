import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ToDoListApp() {

    const [inputTask,setInputTask] = useState("")
    const [tasks,setTasks] = useState([])
    const handleChange = (e) =>{
        setInputTask(e.target.value)
    }

    const fetchTasks = async() =>{
        try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setTasks(res.data.slice(0,10))
    }catch(error){
        console.error(error)
    }}
    useEffect(()=>{
        fetchTasks();
    },[])

    const addTask = async() =>{
        try{
        if(inputTask.toString().trim() !== ''){
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos",
            {title:inputTask, completed:false})
        setTasks([...tasks, res.data])
        setInputTask("")
        }}catch(error){
            console.error(error)
        }
    }

    const deleteTask = async(taskId) =>{
        try{
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
        setTasks(tasks.filter(task => task.id !== taskId))
        }
        catch(error){
            console.error(error)
        }
    }
    const updateTask = async(taskId) =>{
        try{
        await axios.patch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
        setTasks(tasks.filter(task => task.id !== taskId)) //Remove selected task from list 
        setInputTask(tasks.filter(task => task.id === taskId) //add selected task in input field
        .map(task => task.title)) 
        }catch(error){
            console.error(error)
        }
    }

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input type='text' placeholder='Enter Task' value={inputTask} onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <ul>
            {
                tasks.map(task =>
                    { 
                    return(
                        <>
                        <li key={task.id}>{task.title}</li>
                        <button onClick={()=>{updateTask(task.id)}}>Update</button>
                        <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
                        </>
                    )})
            }
        </ul>
      </div>
    </div>
  )
}

export default ToDoListApp

//---------------------------- extra--------------------------------------------//
 // const updateTask = async (taskId) => {
    //     try {
    //       const selectedTask = tasks.find((task) => task.id === taskId);
    //       const updatedTitle = prompt('Enter updated task title:', selectedTask.title);
      
    //       if (updatedTitle !== null) {
    //         await axios.patch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    //           title: updatedTitle,
    //           completed: selectedTask.completed,
    //         });
      
    //         const updatedTasks = tasks.map((task) =>
    //           task.id === taskId ? { ...task, title: updatedTitle } : task
    //         );
    //         setTasks(updatedTasks);
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };