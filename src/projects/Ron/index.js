import React from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./style.css";
const Ron = () => {
  return (
    <div className='ron-body'>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Ron;
