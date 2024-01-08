import React,{useState,useContext,createContext} from 'react'
import { LoginContext } from '../../App'
import { Routes, Route, Link } from "react-router-dom";
import "./ProviderDashboard.css"
import MyOrders from './MyOrders/MyOrders';

export const ProviderContext=createContext()
const ProviderDashboard = () => {
  return (<ProviderContext.Provider> 
    <div className='ProviderDashboard'>
    <div className='MyOrder'>My Orders</div>
    <Routes>
    <Route path='myorders' element={<MyOrders/>}/>
    </Routes>
  </div></ProviderContext.Provider>
 
  )
}

export default ProviderDashboard