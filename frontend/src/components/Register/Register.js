import React ,{useState,useContext} from 'react'
import "./Register.css";
import axios from 'axios';
import { LoginContext } from '../../App';
const Register = () => {
    const {resFromBack,setResFromBack}=useContext(LoginContext)
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [phoneNumber, setPhoneNumber] = useState(null)
const [typeOfAccount, setTypeOfAccount] = useState("")
const [role, setRole] = useState("")
const sendRegister=()=>{
    axios.post("http://localhost:5000/users/register",{firstName,
    lastName,
    email,
    password,
    phoneNumber,
    role}).then((result)=>{
        console.log(result);
        setResFromBack(result.data)
    }).catch((err)=>{
        console.log(err);
        setResFromBack(err.response.data)
    })
}
  return (<div className='Register-page'>
    <div><h1>Register</h1></div>
    <div><input onChange={(e)=>{
        setFirstName(e.target.value)
    }} type='text' placeholder='First Name'/></div>
    <div><input onChange={(e)=>{
        setLastName(e.target.value)
    }} type='text' placeholder='Last Name'/></div>
    <div><input onChange={(e)=>{
        setEmail(e.target.value)
    }} type='email' placeholder='Email'/></div>
    <div><input onChange={(e)=>{
        setPassword(e.target.value)
    }} type='password' placeholder='Password'/></div>
    <div><input onChange={(e)=>{
        setPhoneNumber(e.target.value)
    }} type='text' placeholder='Phone Number'/></div>
    <div><select onChange={(e)=>{
        setTypeOfAccount(e.target.value)
        e.target.value==="Client"?setRole("6597008dd807d0385a55bd73"):setRole
        ("6599007dc383021281e8c377")
    }}>
        <option value={"Client"}>Client</option>
        <option value={"Provider"}>Provider</option>
        </select>
        </div>
        <div><button onClick={sendRegister}>Register</button></div>
        {resFromBack&&<div className={resFromBack.success?"succ":"err"}>{resFromBack.message}</div>}
  </div>
  )
}

export default Register