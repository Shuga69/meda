import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Appointment from "./pages/Appointment";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Settings from "./pages/Settings";
import Survey from "./pages/Survey";
import "./style.css";
const Meda = () => {
  return (
    <div className='meda-body'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a' element={<Patients />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/newAppointment' element={<Appointment />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/survey' element={<Survey />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Meda;
