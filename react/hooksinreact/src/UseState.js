import React, { useState } from 'react'

export default function UseState() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        <p>A state variable is only necessary to keep information between re-renders of a component. </p>
      <button onClick={()=>{setCounter(counter+1);
                            alert(`Change counter value ${counter} to ${counter+1} on next render`)
                        }}>{counter}</button>
    </div>
  )
}
