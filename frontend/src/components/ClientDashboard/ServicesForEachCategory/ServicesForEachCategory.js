import React,{useContext,useState} from 'react'
import { ClientContext } from '../ClientDashboard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CreateOrder from './CreateOrder/CreateOrder';
const ServicesForEachCategory = () => {
    const {users}=useContext(ClientContext)
    const [name, setName] = useState("")
    const [modalShow, setModalShow] = React.useState(false);
    console.log(users);
    return (
  
     users.length?(users.map((ele,i)=>
    <div> <Card style={{ width: '13rem', height:`14rem` }} className="text-center">
    <Card.Img style={{height: '7rem' }} variant="top"  />
    <Card.Body>
      <Card.Title>{ele.firstName}</Card.Title>
      <Card.Text style={{textAlign:"left"}}>
     {ele.phoneNumber}
      </Card.Text>
      <Button variant="primary" onClick={() => {
        setName(ele.firstName)
        setModalShow(true)}}>
          Order Now
        </Button>
        <CreateOrder
        service={ele.serviceType}
        name={name}
        providerId={ele._id}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </Card.Body>
  </Card></div>
  )):"NO Content"
  
  )

}

export default ServicesForEachCategory