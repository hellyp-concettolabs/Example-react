import React,{useState,useRef} from 'react'

function UseRef() {
    const[isVisible,setIsVisible] = useState(false)
    const refDiv = useRef(null)
    const toggle = () =>{
        setIsVisible(isVisible =>!isVisible)
        refDiv.current.style.display = isVisible ? 'none' : 'block';
    }
    console.log(isVisible);
  return (
    <div>
      <h4>Toggle visibility</h4>
      <button onClick={toggle}>Toggle</button>
      <div ref={refDiv} style={{display:'none'}}>This is hidden text</div>
    </div>
  )
}

export default UseRef
