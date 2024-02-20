import { useCallback, useState } from "react";
import Callback1 from "./Callback1";


export default function Usecallback() {

    let[add,setAdd] = useState(0)
    let adding = () =>{
        setAdd(add+1)
    }
    let [count,setCount] = useState(0)
    let counting = () => {
        setCount(add)
    }
    let text = useCallback(() => {

    },[])

  return (
    <>
      <Callback1 text={text} count={count}/>
      <h1>useCallback Example:</h1>
      <button onClick={adding}>Add : {add}</button>
      <button onClick={counting}>Count </button>
    </>
  )
}
