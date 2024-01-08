import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import React, { createContext, useState } from "react";
import ProviderDashboard from "./components/ProviderDashboard/ProviderDashboard";
import Home from "./components/Home/Home";
export const LoginContext = createContext();
function App() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "")
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")||false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [resFromBack, setResFromBack] = useState("")
  return (
    <LoginContext.Provider value={{setIsLoggedIn,setToken,token,isLoggedIn,resFromBack,setResFromBack,userId, setUserId}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>}/>
        <Route path="providerDashboard/*" element={<ProviderDashboard/>}/>
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
