import React ,{useState,useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import "./CreateOrder.css"
import {LoginContext} from "../../../../App"
const CreateOrder = (props) => {
    const{userId,token,resFromBack,setResFromBack}=useContext(LoginContext)
    const [client, setClient] = useState(userId)
    const [units, setUnits] = useState(0)
    const [notes, setNotes] = useState("")
    const [provider, setProvider] = useState(props.providerId)
    const newOrder=()=>{
        axios.post("http://localhost:5000/orders",{provider,client,notes,units,state:"pending"},{headers:{authorization:`Bearer ${token}`,
      }}).then((result)=>{
            console.log(result);
            setResFromBack(result.data)
        }).catch((err)=>{
            console.log(err);
            setResFromBack(err.response.data)
        })
    }
    return (
      <>
       
       <Modal
        {...props}
      
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Order From {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Please Set Your Location</h6>
<iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
   style={{borderRadius:"7px" ,width:"100%"}} ></iframe>
   <br/>
   <br/>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h6>Notes</h6></Form.Label>
        <Form.Control as="textarea" rows={3} />
       </Form.Group>
   {props.service==="Gas Cylinders Delivery" &&<>   <div className='gas-info'>
        <div> <Form.Label><h6 style={{display:"flex"}}>{resFromBack==="Please Select Number Of Cylinders"&&<div style={{color:"red"}}>*</div>} Number Of Cylinders:</h6></Form.Label>
      <Form.Control
      style={{width:"5rem"}}
            type="number"
           onChange={(e)=>{
setUnits(e.target.value)
           }}
          /></div>
          <div><p>Price/Cylinder:</p>
          <p>7 JD</p>
          </div>
      </div>
<div><p>Total Price Of Cylinders (Without Deleviry Price):</p>
<p>{units*7} JD</p>
     </div></>}
         
    </Form>


        </Modal.Body>
        <Modal.Footer style={{display:"flex" ,justifyContent:"space-between"}}>
          {resFromBack==="Please Select Number Of Cylinders"&&<div style={{color:"red"}}>{resFromBack}</div>}
          {resFromBack.success?<div style={{color:"green"}}>Order Successful (Waiting a Response From {props.name})</div>:!resFromBack.success?<div>{resFromBack.message}</div>:<div style={{color:"red"}}>{resFromBack}</div>}
          
          <Button onClick={()=>{
            if(units!==0){
              newOrder()
            }else{
              setResFromBack("Please Select Number Of Cylinders")
            }
         
          }} >Order</Button>
        </Modal.Footer>
      </Modal>
        
      </>
    );
}

export default CreateOrder