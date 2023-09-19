import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Logout from "../components/logout/Logout";
import ProductDetails from "../components/productDetails/ProductDetails";
const RoutesLayout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default RoutesLayout;
