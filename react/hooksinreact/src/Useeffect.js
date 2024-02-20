import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    // let [name,setName] =useState("Helly")
    // let [age,setAge] = useState(20)

    // useEffect(() => {
    //     console.log("useeffect run")
    // },[age])

    // return (
    // <>
    //   <h1>{name}</h1>
    //   <h3>{age}</h3>
    //   <button onClick={() => {setName("Helly Patel")}}>Change name</button>
    //   <button onClick={() => {setAge(age+1)}}>Change age</button>
    // </>
    // )


    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
     useEffect(() => {
       setCalculation(() => count * 2);
     }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
}
