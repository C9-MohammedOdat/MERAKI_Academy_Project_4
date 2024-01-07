import "./Login.css"
import React ,{useState,useContext} from 'react'
import axios from 'axios'
import { LoginContext } from "../../App"
const Login = () => {
    const{setIsLoggedIn,setToken,token,isLoggedIn,resFromBack,setResFromBack}=useContext(LoginContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const sendLogin=()=>{
    axios.post("http://localhost:5000/users/login",{email,password}).then((result)=>{
        console.log(result);
        setResFromBack(result.data)
        setIsLoggedIn(true)
        setToken(result.data.token)
        localStorage.setItem("token",result.data.token)
        localStorage.setItem("isLoggedIn",true)
    }).catch((err)=>{
        console.log(err);
        setResFromBack(err.response.data)
    })
    }
    
  return (
    <div className='Login-Page'>
        <div><h1>Login</h1></div>
        <div><input onChange={(e)=>{
            setEmail(e.target.value)
        }} type='email' placeholder='Email'/></div>
        <div><input onChange={(e)=>{
            setPassword(e.target.value)
        }} type='password' placeholder='Password'/></div>
        <div><button onClick={sendLogin}>Login</button></div>
        {resFromBack&&<div className={resFromBack.success?"succ":"err"}>{resFromBack.message}</div>}
        </div>
  )
}

export default Login