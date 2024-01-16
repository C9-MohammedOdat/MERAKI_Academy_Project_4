import React,{useContext,useState} from 'react'
import { ClientContext } from '../ClientDashboard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CreateOrder from './CreateOrder/CreateOrder';
import logo from "../../images/user.png"
const ServicesForEachCategory = () => {
    const {users}=useContext(ClientContext)
    const [name, setName] = useState("")
    const [providerId, setProviderId] = useState("")
    const [modalShow, setModalShow] = React.useState(false);
    console.log(users);
    return (
  
     users.length?(users.map((ele,i)=>
    <div > <Card style={{ width: '13rem', height:`24rem` }} className="text-center">
    <Card.Img style={{height: '7rem' }} variant="top" src={ele.image?ele.image:logo}  />
    <Card.Body style={{height: '18rem' }}>
      <Card.Title>{ele.firstName}</Card.Title>
      <Card.Text style={{textAlign:"left"}}>
     {ele.phoneNumber}
      </Card.Text>
      <Button variant="primary" onClick={() => {
        setName(ele.firstName)
        // setProviderId(ele._id)
        setModalShow(ele._id)}}>
          Order Now
        </Button>
        <CreateOrder
        service={ele.serviceType}
        name={name}
        // providerId={providerId}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </Card.Body>
  </Card></div>
  )):"NO Content"
  
  )

}

export default ServicesForEachCategory