import React,{useState,useContext,useEffect} from 'react'
import "./MyOrders.css"
import axios from 'axios'
const MyOrders = () =>{
    const getAllOrders=(id)=>{
        axios.get(`http://localhost:5000/orders/provider/${id}`)
    }
  return (
    <div>MyOrdersdwdwa</div>
  )
}

export default MyOrders