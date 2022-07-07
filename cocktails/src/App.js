import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";

function App() {
  return (
    
    <Routes>
    
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  
    
  );
}

export default App;
