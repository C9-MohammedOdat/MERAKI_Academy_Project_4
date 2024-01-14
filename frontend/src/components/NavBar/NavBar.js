import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState ,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavBar.css"
import { LoginContext } from '../../App';
import axios from 'axios';
const NavBar = () => {
  const {isLoggedIn,role,notification,token}=useContext(LoginContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  const navigate=useNavigate()
    let filteredNotification=notification.filter((ele,i)=>ele.state==="pending"&&ele.price)
    console.log(filteredNotification);
    const logout=()=>{
      setShow(false)
      localStorage.clear()
      navigate("/login")
    }
    const rejectOrder=(id)=>{
      const newNotification=filteredNotification.filter((ele,i)=>{
        return ele._id!=id
      })
      filteredNotification=newNotification
      axios.delete(`http://localhost:5000/orders/${id}`).then((result)=>{
        console.log(result)
      }).catch((err)=>{
        console.log(err);
      })
    }
    const updateOrder=(id)=>{
      const newNotification=filteredNotification.map((ele,i)=>{
       if (ele._id!=id){
        ele.state="processing"
        return ele
       }
      })
      filteredNotification=newNotification

      axios.put(`http://localhost:5000/orders/${id}`,{state:"processing"},{headers:{authorization:`Bearer ${token}`,
    }}).then((result)=>{
        console.log(result)
      }).catch((err)=>{
        console.log(err);
      })
    }
  return (
    <Navbar style={{paddingLeft:"5px",paddingRight:"10px"}} bg="dark" data-bs-theme="dark">
        {isLoggedIn&&<div className='list'>
       <svg  onClick={handleShow}
      
      xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:"flex", flexDirection:"column"}}>
        <svg style={{alignSelf:"center"}} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
<p style={{ cursor:"pointer"}} onClick={logout}>Logout</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>}
    <Container>
      <Navbar.Brand href="/">TAWSELA</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
       {isLoggedIn||<><Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="register">Register</Nav.Link></>} 
      </Nav>
    </Container>
{isLoggedIn&&<div className='notification'>
  {filteredNotification.length!==0?<svg 
 onClick={handleShow1}
xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-bell" viewBox="0 0 16 16" className='notification'>
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>:<svg 
 onClick={handleShow1}
xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-bell" viewBox="0 0 16 16" className='notification'>
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>}


      <Offcanvas show={show1} onHide={handleClose1} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notification</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:"flex", flexDirection:"column"}}>
          {filteredNotification.length!==0&&filteredNotification.map((ele,i)=>
            <div style={{border:"1px solid gray",padding:"5px",borderRadius:"7px", display:"flex",flexDirection:"column",gap:"10px"}}>
          <div><h6>{ele.provider.firstName}</h6></div>
         {ele.units&&<div>Number Of Cylenders : {ele.units} Cyl</div>} 
          <div>Total Price :{ele.price} JD</div>
          <div style={{display:"flex",justifyContent:"flex-end",gap:"5px"}}>
            <Button  variant='primary' onClick={()=>{
              updateOrder(ele._id)
            }} >Accept</Button>
            <Button variant='danger' onClick={()=>{
              rejectOrder(ele._id)
            }} >reject</Button>
          </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>}
  </Navbar>
  )
}

export default NavBar



