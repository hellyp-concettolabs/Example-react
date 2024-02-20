import React,{ createContext, useRef, useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import{Link, useNavigate} from 'react-router-dom'
import { useUser } from './UserContext';


const info = createContext()
function Login() {
    const [inputValue,setInputValue] = useState({username:"",pwd:""})
    const [data,setData] = useState([])
    const refDiv = useRef(null)
    const [status,setstatus] = useState(false)
    const {updateUser} = useUser();
    

    const handleinput = (e) =>{
        e.preventDefault();
        setInputValue({ ...inputValue, [e.target.name] : e.target.value});
    }

    const navigate = useNavigate();

    const createUser = async(e,retryCount=0) =>{
        try{
            e.preventDefault();
            if(inputValue.username.trim() !== '' && inputValue.pwd.trim() !== ''){
              const res = await axios.post("https://dummyjson.com/auth/login",{
                    username: inputValue.username,  //"kminchelle" //0lelplR
                    password: '0lelplR',
                })
                setData([...data,res.data])
                console.log(res.data)
                updateUser(res.data)
                setInputValue({username:"",pwd:""})
                 if (res.request.status === 200){ 
                    //alert("Signed up")
                    (refDiv.current.style.display="none")
                    setstatus(!status)
                    // setTimeout(()=>{
                    //     //navigate("/main")
                    //     },2000)
                 }else{
                  console.log("invalid")
                  refDiv.current.style.display="block"
                 }
            }
        }catch(error){
            console.error(error);
            //console.log("invalid")
           refDiv.current.style.display="block"
         if (error.response && error.response.status === 429 && retryCount < 3) {   //to solve 429 error
          // Implement exponential backoff with retry
          const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
          setTimeout(() => createUser(e, retryCount + 1), delay);
        } else {
          console.log("Request failed after retries");
        }
        }
    }
    useEffect( ()=>{
      if(status === true){
      navigate("/main")}
    },[navigate,status])
  return (
    <div className='container'>
      <h1>Login</h1>
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
        <input type='password' autoComplete="current-password" placeholder='Enter Password' name='pwd' value={inputValue.pwd="0lelplR"} onChange={handleinput}/>
      </label>
      <label>
        <button onClick={createUser}>Login</button>
      </label>
      <label>
        Don't have account? <Link to='/signup'>Sign Up</Link>
      </label>
      </form>
      
        <p ref={refDiv} style={{color:"red", display:"none"}}>Invalid User</p> 
      {/* {token  && 
        <info.Provider value={token}>
          <Main/>
        </info.Provider> 
      } */}
    </div>
  )
}

export default Login;
export {info};
