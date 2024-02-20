import React, { memo} from 'react'

function Callback1({adding}) {
    
  return (
    <div>
      <button onClick={adding}>add</button>
    </div>
  )
}

export default memo(Callback1)
