import { createContext, useEffect, useState } from 'react';
import './App.css'
import Props from './Props';


const data = createContext();

function App() {

//let counter = 5;
let [counter,setCounter] = useState(0)
let [count,setCount] = useState(0)

useEffect(() => {
  setTimeout(() => {
    setCount((count) => count+1);}
    ,1000);
},[])

const addValue = () =>{
  counter = counter+1
  //console.log(counter);
  setCounter(counter)
} 
const subValue = () => {
  counter = counter-1
  setCounter(counter)
}

const text1 = "this is displayed from app.jsx using useConext hook"
  return (
    <>
      <h1>React with Vite</h1>
      <h3>Counter Value = {counter}</h3>

      <button onClick={addValue}> Add value</button>
      <br />
      <button onClick={subValue}>Sub value</button>

      <h1>Render {count} times</h1>

      <h1 className=' text-white bg-purple-500'> Tailwind </h1>
    <data.Provider value={text1}>
      <Props/>
    </data.Provider> 
    </>
  )
}

export default App
export {data}
