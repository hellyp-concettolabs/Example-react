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
            <h3 key={item.id}>Name:{item.name}</h3>
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
