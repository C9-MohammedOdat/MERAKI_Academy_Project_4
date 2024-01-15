import "./Login.css"
import React ,{useState,useContext} from 'react'

import axios from 'axios'
import { LoginContext } from "../../App"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate=useNavigate()
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
        navigate("/")
    }).catch((err)=>{
        console.log(err);
        setResFromBack(err.response.data)
    })
    }
  return (
    <div className='Login-Page'>
         <div className='userLogo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></div>
    <div className='Welcome'><h1>Welcome Back !</h1></div>
        <div><input onChange={(e)=>{
            setEmail(e.target.value)
        }} type='email' placeholder='Email'/></div>
        <div><input onChange={(e)=>{
            setPassword(e.target.value)
        }} type='password' placeholder='Password'/></div>

        <div><button className="Login-btn" onClick={sendLogin}>Login</button></div>
        {resFromBack.success||<div className={resFromBack.success?"succ":"err"}>{resFromBack.message}</div>}
        </div>
  )
}

export default Login