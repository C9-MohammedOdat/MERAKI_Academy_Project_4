import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import React, { createContext, useState } from "react";
export const LoginContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")||false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <LoginContext.Provider value={{setIsLoggedIn,setToken,token,isLoggedIn}}>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
