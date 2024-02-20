import { useState, useEffect } from "react"

export default function Useeffect() {
  
    let [name,setName] =useState("Helly")
    let [age,setAge] = useState(20)

    useEffect(() => {
        console.log("useeffect run")
    },[name])

    return (
    <>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <button onClick={() => {setName("Helly Patel")}}>Change name</button>
      <button onClick={() => {setAge(age+1)}}>Change age</button>
    </>
  )
}
