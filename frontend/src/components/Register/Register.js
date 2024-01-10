import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import axios from "axios";
import { LoginContext } from "../../App";
const Register = () => {
  const { resFromBack, setResFromBack } = useContext(LoginContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [typeOfAccount, setTypeOfAccount] = useState("");
  const [role, setRole] = useState("");
  const [serviceType, setServiceType] = useState("");
  const sendRegister = () => {
    if (
      firstName !== "" ||
      typeOfAccount !== "Type Of Account" ||
      serviceType !== "Select Your Service"
    ) {
      axios
        .post("http://localhost:5000/users/register", {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          serviceType,
          role,
        })
        .then((result) => {
          console.log(result);
          setResFromBack(result.data);
        })
        .catch((err) => {
          console.log(err);
          setResFromBack(err.response.data);
        });
    }
  };
  return (
    <div className="Register-page">
      <div>
        <h1>Register</h1>
      </div>
      <Form>
        <Form.Group className="inputs" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          {/* <Form.Label>Last Name</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <Form.Label>Phone Number</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="+962..."
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setTypeOfAccount(e.target.value);
              e.target.value === "Client"
                ? setRole("6597008dd807d0385a55bd73")
                : setRole("6599007dc383021281e8c377");
            }}
          >
            <option>Type Of Account</option>
            <option value="Client">Client</option>
            <option value="Provider">Provider</option>
          </Form.Select>

          {typeOfAccount === "Provider" && (
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setServiceType(e.target.value);
              }}
            >
              <option>Select Your Service</option>
              <option value="Furniture delivery">Furniture delivery</option>
              <option value="Car transporter">Car transporter</option>
              <option value="Taxi">Taxi</option>
            </Form.Select>
          )}
          <Button variant="primary" size="lg" onClick={sendRegister}>
            Register
          </Button>
          {resFromBack && (
            <div className={resFromBack.success ? "succ" : "err"}>
              {resFromBack.message}
            </div>
          )}
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
{
  /* <Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>First Name</Form.Label>
  <Form.Control type="text" placeholder="First Name"  onChange={(e)=>{
  setFirstName(e.target.value)
}}/>
   <Form.Label>Last Name</Form.Label>
  <Form.Control type="email" placeholder="Last Name" onChange={(e)=>{
  setLastName(e.target.value)
}} />
   <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{
  setEmail(e.target.value)
}} />
   <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" onChange={(e)=>{
  setPassword(e.target.value)
}}  />
   <Form.Label>Phone Number</Form.Label>
  <Form.Control type="text" placeholder="+962..." onChange={(e)=>{
  setPhoneNumber(e.target.value)
}}/>
  <Form.Select aria-label="Default select example" onChange={(e)=>{
  setTypeOfAccount(e.target.value)
  e.target.value==="Client"?setRole("6597008dd807d0385a55bd73"):setRole
  ("6599007dc383021281e8c377")
}}>
<option>Type Of Account</option>
<option value="Client">Client</option>
<option value="Provider">Provider</option>
</Form.Select>
<Button variant="primary" size="lg">
  Block level button
</Button>
</Form.Group>
</Form> */
}
{
  /* <Form.Select aria-label="Default select example" onChange={(e)=>{
            setServiceType(e.target.value)
        }}>
      <option>Select Your Service</option>
      <option value="Furniture delivery">Furniture delivery</option>
      <option value="Car transporter">Car transporter</option>
      <option value="Taxi">Taxi</option>
    </Form.Select> */
}

// <div><input onChange={(e)=>{
//     setFirstName(e.target.value)
// }} type='text' placeholder='First Name'/></div>
// <div><input onChange={(e)=>{
//     setLastName(e.target.value)
// }} type='text' placeholder='Last Name'/></div>
// <div><input onChange={(e)=>{
//     setEmail(e.target.value)
// }} type='email' placeholder='Email'/></div>
// <div><input onChange={(e)=>{
//     setPassword(e.target.value)
// }} type='password' placeholder='Password'/></div>
// <div><input onChange={(e)=>{
//     setPhoneNumber(e.target.value)
// }} type='text' placeholder='Phone Number'/></div>
// <div><select onChange={(e)=>{
//     setTypeOfAccount(e.target.value)
//     e.target.value==="Client"?setRole("6597008dd807d0385a55bd73"):setRole
//     ("6599007dc383021281e8c377")
// }}>
//     <option value={"Client"}>Client</option>
//     <option value={"Provider"}>Provider</option>
//     </select>
//     </div>

// <div>
// <label>What Is Your Service?</label><br/><br/>
// <select onChange={(e)=>{
//     setServiceType(e.target.value)
// }}>
//     <option value={"Furniture delivery"}>Furniture delivery</option>
//     <option value={"Car transporter"}>Car transporter</option>
//     <option value={"Taxi"}>Taxi</option>
//     </select></div>

// <div><button onClick={sendRegister}>Register</button></div>
