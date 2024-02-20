import { useEffect,useState} from "react";


function Test() {
    let [count,setcount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setcount(count+1)
        }
        ,1000);
    },[])
  return (
    <>
     <h1>Render {count} times</h1> 
    </>
  )
}

export default Test
