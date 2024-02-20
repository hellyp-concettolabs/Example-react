//import React from 'react'
import Card from "./Components/Card"
function Props(){
    let myarr = [1,2,3,4,5,6,7]
    return(
    <>
        <Card username="Jenny" btnText="Click me"/>
        <Card username="Jenny" text={myarr}/>
    </>
    )
}
export default Props