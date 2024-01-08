import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { LoginContext } from '../../App'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const {token,userId, setUserId,isLoggedIn,role, setRole}=useContext(LoginContext)
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5000/users/check",{headers:{authorization:`Bearer ${token}`,
    }}).then((result)=>{
            console.log(result);
            setUserId(result.data.info.userId)
            setRole(result.data.info.role)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  role.role==="Provider"&&navigate("providerDashboard")
}

export default Home