import React,{useState,useEffect,useCallback} from 'react'

function UseCallback() {
    const [inputValue,setInputValue] = useState("")
    const [tasks,setTasks] = useState([])
    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    const addTask = useCallback(() =>{
        if(inputValue.trim() !== ""){
        setTasks([...tasks, {title:inputValue}])
        setInputValue("")
        }
        //console.log("!!");
    },[inputValue,tasks])

    useEffect(() => {
      addTask();
    }, [])
    
  return (
    <div>
        <h3>ToDo List</h3>
        <div>
            <input type='text' placeholder='Add tasks' value={inputValue} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add</button>
        <div>
            <ul>
                {
                tasks.map((task,index) =>
                    <li key={index}>{task.title}</li>
                )
                }
            </ul>
        </div>
      
    </div>
  )
}
export default UseCallback
