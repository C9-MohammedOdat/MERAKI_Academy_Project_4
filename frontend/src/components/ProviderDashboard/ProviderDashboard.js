import React,{useState,useContext,createContext} from 'react'
import { LoginContext } from '../../App'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./ProviderDashboard.css"
import MyOrders from './MyOrders/MyOrders';

export const ProviderContext=createContext()
const ProviderDashboard = () => {
  const [show, setShow] = useState(false)

  const navigate=useNavigate()
  const{userId,userName}=useContext(LoginContext)
  console.log(userId);
  const logout=()=>{
    localStorage.clear()
    navigate("/login")
  }
  return (<div className='provider-page'>
    <div className='side-bar'>
      
      <div className='provider-pic' ><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></div>
<div className='welcome'>{userName}</div>
<div onClick={logout} className='logout'>Logout</div>
    </div>
    <div className='ProviderDashboard'>
      <div className='tilte-bar'></div>
    <div onClick={()=>{
      setShow(!show)
     if(show){
      navigate("myorders")
      setShow(false)
    }else{
        navigate(-1)
      setShow(true)
      }
       
    }} className='MyOrder'>My Orders</div>
  
   <Routes>
        <Route path='myorders' element={<MyOrders/>}/>
        </Routes></div>
  </div>
  
 
  )
}

export default ProviderDashboard