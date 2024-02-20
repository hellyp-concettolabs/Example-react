import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const[add,setAdd] = useState(0);
    const[sub,setSub] = useState(100);
    const update = useMemo(() => {return add},[add])
  return (
    <div>
      <button onClick={()=>{setAdd(add+1) }}>{add}</button>
      <button onClick={()=>{setSub(sub-1)}}>{sub}</button>
      <p>Update:{update}</p>
    </div>
  )
}
