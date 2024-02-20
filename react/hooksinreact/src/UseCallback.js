import React, { useCallback, useState } from 'react'
import Callback1 from './Callback1'

export default function UseCallback() {
    const[add,setAdd] = useState(0)
    const adding = useCallback(()=>{
        setAdd(add+1)
    })
  return (
    <div>
        <p>{add}</p>
      <Callback1 adding={adding}/>
    </div>
  )
}
