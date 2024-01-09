import React,{useState,useContext,createContext} from 'react'
import { LoginContext } from '../../App'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./ProviderDashboard.css"
import MyOrders from './MyOrders/MyOrders';

export const ProviderContext=createContext()
const ProviderDashboard = () => {
  const [show, setShow] = useState(false)

  const navigate=useNavigate()
  const{userId}=useContext(LoginContext)
  console.log(userId);
  return (<>
    <div className='ProviderDashboard'>
    <div onClick={()=>{
     if(show){
      navigate("myorders")
      setShow(false)
    }else{
        navigate("providerDashboard")
      setShow(true)
      }
       
    }} className='MyOrder'>My Orders</div>
  </div>
   <Routes>
        <Route path='myorders' element={<MyOrders/>}/>
        </Routes>
  </>
  
 
  )
}

export default ProviderDashboard