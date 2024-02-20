import { useState } from "react"

function Color(){
    //let color = "red";
    let [color,setColor] = useState("Red")
   
    let select = (newcolor) =>{
        setColor(newcolor)
    }

    return(
    <>
    <h1>My fav. color is : {color}</h1>

    <button onClick={() => select("Blue")}>Blue</button>
    <button onClick={() => select("Purple")}>Purple</button>

    </>
    )
  }

  export default Color