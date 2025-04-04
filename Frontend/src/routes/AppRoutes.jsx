import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>} />  
        </Routes>
      </Router>
    );
}