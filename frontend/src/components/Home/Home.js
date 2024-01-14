import React,{useState,useEffect,useContext,createContext} from 'react'
import axios from 'axios'
import { LoginContext } from '../../App'
import { useNavigate } from 'react-router-dom'
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
}

export default Home