import React from 'react'
import {useState,useMemo} from 'react'

function UseMemo() {
    const[number,setNumber] = useState("")
    const[trigger,settrigger] = useState(0)
    const handleChange =(e) =>{
        setNumber(e.target.value);
        
    }
    const factorial = useMemo(()=>{
        const num = parseInt(number)
        let result = 1;
        if(isNaN(num) || num<0){
            return 'Invalid';
        }
        if(num === 0 || num === 1){
            return result;
        }
        for(let i=2; i<= num; i++){
            result *= i;
        }
        settrigger(trigger+1)
        console.log("!!!");
        return result;
        
    },[number])
  return (
    <div>
      <h3>Factorial Calculator</h3>
      <input type='number' placeholder='Enter Number' value={number} onChange={handleChange}/>
      <div>Factorial of {number}: {factorial}</div>
      <div>{trigger}</div>
    </div>
  )
}

export default UseMemo
