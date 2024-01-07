import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import React, { createContext, useState } from "react";
export const LoginContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")||false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [resFromBack, setResFromBack] = useState("")
  return (
    <LoginContext.Provider value={{setIsLoggedIn,setToken,token,isLoggedIn,resFromBack,setResFromBack}}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>}/>
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
