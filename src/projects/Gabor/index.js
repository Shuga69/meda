import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Backdrop from "./components/Header/Backdrop";
import SideDrawer from "./components/Header/SideDrawer";
import Header from "./components/Header";
import "./style.css";
import CollectionItems from "./pages/CollectionItems";
import ProductPage from "./pages/ProductPage";
const Gabor = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop onClick={backdropClickHandler} />;
  }
  return (
    <div className='gabor-body'>
      <Router>
        <Header
          drawerClickHandler={drawerToggleClickHandler}
          toggle={sideDrawerOpen}
        />
        <SideDrawer onClick={backdropClickHandler} show={sideDrawerOpen} />
        {backdrop}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<CollectionItems />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Gabor;
