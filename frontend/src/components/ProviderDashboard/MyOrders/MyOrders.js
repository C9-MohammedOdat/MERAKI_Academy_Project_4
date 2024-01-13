import React,{useState,useContext,useEffect} from 'react'
import "./MyOrders.css"
import axios from 'axios'
import { LoginContext } from '../../../App'
const MyOrders = ({state}) =>{
  const {token,userId, setUserId,isLoggedIn,role, setRole}=useContext(LoginContext)
  const [orders, setOrders] = useState([])
const [loader, setLoader] = useState(true)
  useEffect(()=>{
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
  },[])
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
        <div className='PhoneNumber'>+{ele.client.phoneNumber}</div>
      </div>
    )):<p>No Order</p>}</div>}
    </div>
      
    )
    }
export default MyOrders