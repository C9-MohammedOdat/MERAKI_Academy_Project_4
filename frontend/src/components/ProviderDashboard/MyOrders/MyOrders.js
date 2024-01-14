import React,{useState,useContext,useEffect} from 'react'
import "./MyOrders.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { LoginContext } from '../../../App'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Set Your Price
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Price Of Units:</h6>
        <p>
          {props.units*7} JD
        </p>
        <h6>Your Dilevry Price:</h6>
        <input style={{paddingLeft:"3px"}} type='number' placeholder='JD'/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
}
const MyOrders = ({state}) =>{
  const {token,userId, setUserId,isLoggedIn,role, setRole}=useContext(LoginContext)
  const [orders, setOrders] = useState([])
const [loader, setLoader] = useState(true)
const [modalShow, setModalShow] = React.useState(false);
const [units, setUnits] = useState(0)
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
        <Button onClick={() =>{
          setUnits(ele.units)
          setModalShow(true)}} variant="success">Accept</Button>
        <Button onClick={()=>{
          rejectOrder(ele._id)
        }} variant="danger">Reject</Button>
        </div>}
        </div>
       <div style={{display:"flex", flexDirection:"column", gap:"10px"}}> {ele.units&&<div>Number Of Cylinder : {ele.units} cyl</div>}
        {ele.notes&&<div>Notes:<p  style={{border:"1px solid",borderRadius:"7px", padding:"5px"}}>{ele.notes}</p></div>}</div>
      </div>
    )):<p>No Order</p>}</div>}

<MyVerticallyCenteredModal
units={units}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
      
    )
    }
export default MyOrders