import React from 'react'
import{Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{textAlign:"center", margin:"10%"}}>
        <h2>Welcome to Website</h2>
        <Link to='/signup'>
        <button>Sign Up</button>
        </Link>
    </div>
  )
}

export default Home
