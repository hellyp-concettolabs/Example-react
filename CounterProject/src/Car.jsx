import { useState } from "react"

function Car() {
 let [car,setCar] = useState({
    model : "ABC",
    branch : "XYZ ",
    color : "White",
    number : "1234"
 })

 let change = () => {
    setCar(previousState => {return{...previousState,color : "black"}})
 }
 
    return(
    <>
    <h3>Car is {car.model} of {car.branch} branch in {car.color} color and {car.number} is number.  </h3>

    <button onClick={change}> Change</button>
    </>
 )
}

export default Car