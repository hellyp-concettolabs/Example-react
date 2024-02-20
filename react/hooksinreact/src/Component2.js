import React, { useContext } from 'react'
import { data } from './App'

function Component2() {
    const text = useContext(data);
  return (
    <div>
      <h3>{text}</h3>
    </div>
  )
}

export default Component2
