import React, { useRef, useState } from 'react'

export default function UseRef() {
    let [name,setName] = useState("Enter your name")
    const refElement = useRef("");
    const reset = () =>{
        //setName("")
        refElement.current.focus()
        refElement.current.value = "Enter your name"
    }
  return (
    <div>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}
