
import React, { useState} from 'react';
import axios from 'axios';

function Axiospost() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [inputData, setData] = useState({fname:"" , lname:""});
    const handleinput = (e) =>{
        setData({...inputData ,[e.target.name]:[e.target.value] })
    }

    const createPost = (e) => {
        e.preventDefault();
        axios.post(url,inputData)
        .then((res) => console.log(res))
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((res) => console.log(res))
    }
    const handleDelete = () =>{
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => console.log(res))
    }

    return (
        <div>
        First Name:<input type='text' name='fname' value={inputData.fname} onChange={handleinput}/>
        Last Name:<input type='text' name='lname' value={inputData.lname}onChange={handleinput}/>
        <button onClick={createPost}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Axiospost;
