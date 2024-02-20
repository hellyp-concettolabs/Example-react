import { useMemo, useState } from "react"


export default function Usememo() {

    const [add,setAdd] = useState(0)
     let adding = () =>{
        setAdd(add+1)
     }
     const [sub,setsub] = useState(100)
     let subing = () =>{
        setsub(sub-1)
     }

    //  function counter() {
    //     console.log("*****");
    //     return add
    //  }

    const update = useMemo (() => {
                                    //console.log("****")
                                    return add
                                }
                            ,[add])

  return (
    <>
      <button onClick={adding}>Add : {add}</button>
      <br /><br />
      <button onClick={subing}>Sub : {sub}</button>
      <br /><br />
      <h3>Update when add button is clicked : {update}</h3>
    </>
  )
}
