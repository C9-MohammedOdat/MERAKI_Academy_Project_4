import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { LoginContext } from '../../App'
const Home = () => {
    const {token}=useContext(LoginContext)
    useEffect(()=>{
        axios.get("http://localhost:5000/users/check",{headers:{token:token}}).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>Home</div>
  )
}

export default Home