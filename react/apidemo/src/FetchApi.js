import React, { useEffect, useState } from 'react'

function FetchApi() {
    const [data,setData] = useState([])
    const fetchapi = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((d) => setData(d))
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
            <h5 key={item.id}>Name:{item.name}</h5>
            <ul>
              <li>Username:{item.username}</li>
              <li>Email:{item.email}</li>
            </ul>
            </>
        )})
        }
    </div>
  )
}

export default FetchApi