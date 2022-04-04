import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Appointment from "./pages/Appointment";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import "./style.css";
const Meda = () => {
  return (
    <div className='meda-body'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a' element={<Patients />} />
          <Route path='/b' element={<Appointment />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Meda;
