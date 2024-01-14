import React,{useState,useContext,createContext} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { LoginContext } from '../../App'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./ProviderDashboard.css"
import MyOrders from './MyOrders/MyOrders';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Home from '../Home/Home';
export const ProviderContext=createContext()
const ProviderDashboard = () => {
  // const [show, setShow] = useState(false)
  const [state, setState] = useState("pending")
  const [activeTab, setActiveTab] = useState('pending');
  const navigate=useNavigate()
  const{userId,userName}=useContext(LoginContext)

  return (<div className='provider-page'>
         


  
  <Tabs
  onSelect={(key)=>{
    setActiveTab(key);
    setState(key)
      }}
      activeKey={activeTab}
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab  style={{margin:"15px"}} eventKey="pending" title="Pending Orders">
       <MyOrders
       state={state}/>
      </Tab>
      <Tab style={{margin:"15px"}} eventKey="processing" title="Processing Orders">
      <MyOrders
       state={state}/>
      </Tab>
      <Tab style={{margin:"15px"}} eventKey="completed" title="Completed Orders">
      <MyOrders
       state={state}/>
      </Tab>
     
    </Tabs>
      </div>
  )
}

export default ProviderDashboard 






{/* <div className='ProviderDashboard'>
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
        </Routes></div> */}