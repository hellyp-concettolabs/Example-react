import React from 'react'
import { useUser } from './UserContext'


function Main() {
    const{ userData }  = useUser()
    if (!userData || !userData.id) {
      return <div>Loading...</div>; 
    }
  return (
    <div>
      <h1>Main Page of Website</h1>
      <h2>Profile</h2>
                <h3>ID: {userData.id}</h3>
                <h3>Firstname: {userData.firstName}</h3>
                <h3>Email: {userData.email}</h3>
    </div>
  )
}

export default Main
