import { useRef, useState } from "react"

export default function Useref() {
    let [name,setName] = useState("Enter your name")

    
    const refElement = useRef("")

    const focus = () => {
        setName(" ")
        refElement.current.focus()
// issue: have to click Reset button twice to run "refElement.current.value"
//solution: use setTimeout
        setTimeout( () => {
            refElement.current.value="Enter your name"
          },0)
         }

  return (
    
    <>
      <h1>Learning useRef</h1>
      <br />
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <br />
      <button onClick={focus}>Reset</button>
    </>
  )
}
