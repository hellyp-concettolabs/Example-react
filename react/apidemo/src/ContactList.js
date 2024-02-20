import axios from 'axios'
import React, { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/users"
function ContactList() {

    const [inputName,setInputName] = useState("")
    const [inputNumber,setInputNumber] = useState("")
    const [names,setName] = useState([])
    
    const handleinput = (e) =>{
        setInputName(e.target.value)
    }
    const handleinputnum = (e) =>{
        setInputNumber(e.target.value)
    }

    const fetchContact = async() =>{
        try{
        const res = await axios.get(url)
        setName(res.data)
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchContact()
    },[])

    const addContact = async() =>{
        try{
        if(inputName.toString().trim() !== '' && inputNumber.trim() !== ''){
        const res = await axios.post(url,{
            name :inputName,
            phone :inputNumber
        })
        setName([...names,res.data])
        setInputName("")
        setInputNumber("")
        }}catch(error){
            console.error(error);
        }
    }

    const deleteContact = async(nameId) =>{
        try{
            await axios.delete(`${url}/${nameId}`)
            setName(names.filter(name => nameId !== name.id))
        }catch(error){
            console.error(error);
        }}

    const updateContact = async(nameId) =>{
        try{
            await axios.patch(`${url}/${nameId}`)
            setName(names.filter(name => nameId !== name.id))
            setInputName(names.filter(name => nameId === name.id).map(name =>name.name))
            setInputNumber(names.filter(name => nameId === name.id).map(name =>name.phone))
        }catch(error){
            console.error(error);
        }
    }
  return (
    <div>
      <div>
        <h1>Contact List</h1>
        <label>Name :</label>
        <input type='text' placeholder="Enter Text" name='mainname' value={inputName} onChange={handleinput}/>
        <input type='number' placeholder="Enter Number" name='number' value={inputNumber} onChange={handleinputnum}/>
        <button onClick={addContact}>Add Contact</button>
      </div>
      <div>
        
        {
         names.map(name =>{
            return(
            <>
            <ul key={name.id}>
            <li>{name.name}:{name.phone}</li>
            <button onClick={()=>updateContact(name.id)}>Update</button>
            <button onClick={()=>deleteContact(name.id)}>Delete</button>
            </ul> 
            </>
        )})   
        }
        
      </div>
    </div>
  )
}

export default ContactList
