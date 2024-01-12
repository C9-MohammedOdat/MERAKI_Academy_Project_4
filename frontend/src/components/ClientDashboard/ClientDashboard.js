import React ,{useContext,useEffect,useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ClientDashboard.css"
import logo1 from "../images/Furniture Delivery.jpg" 
import logo2 from "../images/Car Transporter.jpg"
import logo3 from "../images/Gas.jpg"

const ClientDashboard = () => {
  const [service, setService] = useState("")
  const renderService=()=>{
    console.log(service);
  axios.get(`http://localhost:5000/users/${service}`).then((result)=>{
    console.log(result);
  }).catch((err)=>{
    console.log(err);
  })
  }
  return (
    <div className='Services'>
      {service || (<><Card style={{ width: '25rem' }} className="text-center">
      <Card.Img style={{height: '14rem' }} variant="top" src={logo1} />
      <Card.Body>
        <Card.Title>Furniture Delivery</Card.Title>
        <Card.Text style={{textAlign:"left"}}>
        With TAWSElA you can book furniture delivery services the same day fromalmost anywhere. 
        </Card.Text>
        <Button variant="primary" onClick={()=>{
          setService("Furniture delivery")
          renderService()
        }}>Book Now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} className="text-center">
      <Card.Img style={{height: '14rem' }} variant="top" src={logo2} />
      <Card.Body>
        <Card.Title>Car Transporter</Card.Title>
        <Card.Text style={{textAlign:"left"}}>
        Did your car break down??
Don't worry! With TAWSElA, you can now order a winch to transport your car.
        </Card.Text>
        <Button variant="primary" onClick={()=>{
          setService("Car transporter")
        }}>Book Now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} className="text-center">
      <Card.Img style={{height: '14rem' }} variant="top" src={logo3} />
      <Card.Body>
        <Card.Title>Gas Cylinders Delivery</Card.Title>
        <Card.Text style={{textAlign:"left"}}>
        Is the gas cylinder empty??
Don't worry! With TAWSElA, you can order a gas cylinder quickly & easily
        </Card.Text>
        <Button variant="primary" onClick={()=>{
          setService("Gas Cylinders Delivery")
        }}>Book Now</Button>
      </Card.Body>
    </Card></>)}
    </div>
  )
}

export default ClientDashboard