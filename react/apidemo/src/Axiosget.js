import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosget() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [data,setData] = useState([])
    const fetchapi = () => {
        axios.get(url)
        .then((res) => setData(res.data))
    }
    useEffect(() => {
        fetchapi();
    },[])
    console.log(data);
  return (
    <div>
      
        {
        data.map((item) =>{
            return(
             <> 
             <div key={item.id}>
            <h5>Name:{item.name}</h5>
            <ul>
              <li>Username:{item.username}</li>
              <li>Email:{item.email}</li>
            </ul>
            </div>
            </>
        )})
        }
    </div>
  )
}

export default Axiosget