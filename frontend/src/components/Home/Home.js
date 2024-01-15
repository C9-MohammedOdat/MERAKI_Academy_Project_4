import React,{useState,useEffect,useContext,createContext} from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../images/Gas.jpg';
import Button from 'react-bootstrap/Button';
import { LoginContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import logo1 from "../images/fur.jpg"
import logo2 from "../images/winsh.jpg"
import logo3 from "../images/gass.jpg"
import "./Home.css"
const Home = () => {
    const {token,userId, setUserId,isLoggedIn,role, setRole,setUserName}=useContext(LoginContext)
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5000/users/check",{headers:{authorization:`Bearer ${token}`,
    }}).then((result)=>{
            console.log(result);
            setUserId(result.data.info.userId)
            setUserName(result.data.info.author)
            localStorage.setItem("userId",result.data.info.userId)
            localStorage.setItem("userName",result.data.info.author)
            setRole(result.data.info.role.role)
            localStorage.setItem("role",result.data.info.role.role)

        }).catch((err)=>{
            console.log(err);
        })
    },[])
  role==="Provider"&&navigate("providerDashboard")
  role==="Client"&&navigate("clientDashboard")
  return (
    <div className='Home-Page'>
        <h1 className='title'>TAWSELA</h1>
        <div className='Carousel'>
        <Carousel fade >
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={logo1}
        />
        <Carousel.Caption>
          <h3>Furniture Delivery</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={logo2}
        />
        <Carousel.Caption>
          <h3>Car Transporter</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={logo3}
        />
        <Carousel.Caption>
          <h3>Gas Cylinders Delivery</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <h3>We are very fast...</h3>
        <h4>what are you waiting for ??</h4>
        <Button onClick={()=>{
            navigate("register")
        }} variant="link" style={{color:"black",fontSize:"1.5em"}} >Register now</Button>

        </div>
  )
}

export default Home