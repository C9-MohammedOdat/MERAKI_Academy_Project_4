import React,{useState,useContext,useEffect} from 'react'
import "./MyOrders.css"
import Button from 'react-bootstrap/Button';

import axios from 'axios'
import { LoginContext } from '../../../App'
const MyOrders = ({state}) =>{
  const {token,userId, setUserId,isLoggedIn,role, setRole}=useContext(LoginContext)
  const [orders, setOrders] = useState([])
const [loader, setLoader] = useState(true)
const getAllOrders=()=>{
  setLoader(true)
  axios.get(`http://localhost:5000/orders/provider/${userId}`,{headers:{
    authorization:`Bearer ${token}`
  }}).then((result)=>{
    if(result.data.success){
      setOrders(result.data.services)
    setLoader(false)
    }else{
      setOrders([])
      setLoader(false)
    }
    
  }).catch((err)=>{
    console.log(err);
    setLoader(false)
  })
}
  useEffect(()=>{
   getAllOrders()
  },[])
  const rejectOrder=(id)=>{
    const newOrders=orders.filter((ele,i)=>{
      return ele._id!=id
    })
    setOrders(newOrders)
    axios.delete(`http://localhost:5000/orders/${id}`)
  }
const filteredOrders=orders.filter((ele,i)=>{
  return ele.state===state
})
    return(<div className='Orders-Page'>
    {loader?<div className='loader'></div>:<div className='Orders'>{filteredOrders.length!=0?(filteredOrders.map((ele,i)=>
      <div className='order'>
        <div className='Name-State'>
          <p>Client: {ele.client.firstName}</p>
          <p>{ele.state}</p>
        </div>
        <div className='phone-res'>
        <div className='PhoneNumber'>+{ele.client.phoneNumber}</div>
       {state==="pending"&& <div>
        <Button variant="success">Accept</Button>
        <Button onClick={()=>{
          rejectOrder(ele._id)
        }} variant="danger">Reject</Button>
        </div>}
        </div>
       <div style={{display:"flex", flexDirection:"column", gap:"10px"}}> {ele.units&&<div>Number Of Cylinder : {ele.units} cyl</div>}
        {ele.notes&&<div>Notes:<p  style={{border:"1px solid",borderRadius:"7px", padding:"5px"}}>{ele.notes}</p></div>}</div>
      </div>
    )):<p>No Order</p>}</div>}
    </div>
      
    )
    }
export default MyOrders