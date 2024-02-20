import React,{createContext,useContext} from 'react'

const data = createContext()
function UseContext() {
   
    const text = "UseContext component"
  return (
    <div>
        <div>Parent:UseContext</div>
        <data.Provider value={text}>
            <Child1/>
        </data.Provider>
    </div>
  )
}

function Child1(){
    return(
        <>
        <div>Child1(child component of UseContext )</div>
        <Child2/>
        </>
    )
}
function Child2(){
    const text = useContext(data)
    return(
        <>
            <div>Child2(child component of Child1) :</div>
            <div>context created and provided from : {text}</div>
        </>
    )
}

export default UseContext
