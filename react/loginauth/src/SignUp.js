import React,{useState} from 'react'
import './App.css';
import axios from 'axios'
import{Link} from 'react-router-dom'
function SignUp() {
    const [inputValue,setInputValue] = useState({username:"",pwd:""})
    const [data,setData] = useState([])
    const [status,setStatus] = useState(false)

    const handleinput = (e) =>{
        e.preventDefault();
        setInputValue({ ...inputValue, [e.target.name] : e.target.value});
    }

    const createUser = async(e) =>{
        try{
            e.preventDefault();
            if(inputValue.username.trim() !== '' && inputValue.pwd.trim() !== ''){
              const res = await axios.post("https://jsonplaceholder.typicode.com/user",{
                    username: inputValue.username,
                    password: inputValue.pwd
                })
                setData([...data,res.data])
                console.log(res)
                setInputValue({username:"",pwd:""})
                if (res.request.status === 201){
                    setStatus(!status)
                }else{
                  alert("Fail to log in")
                }
                  
            }
        }catch(error){
            console.error(error);
            alert(error)
        }
    }
  return (
    <div className='container'>
      <h1>Sign Up</h1>
      <form>
      <label>
        UserName:
        <input type='text' autoComplete="off" placeholder='Enter UserName' name='username' value={inputValue.username} onChange={handleinput}/>
      </label>
      {/* <label>
        E-mail:
        <input type='text' placeholder='Enter Email' value={inputValue.email} onChange={handleinput}/>
      </label> */}
      <label>
        Password:
        <input type='password' autoComplete="current-password" placeholder='Enter Password' name='pwd' value={inputValue.pwd} onChange={handleinput}/>
      </label>
      <label>
        <button onClick={createUser}>Sign Up</button>
      </label>
      <label>
        Already have account? <Link to='/login'>Login</Link>
      </label>
      </form>
      {
      (status === true && 
        <p style={{color:"red"}}>Successfully Signed Up</p>
        )
     }
    </div>
  )
}

export default SignUp
