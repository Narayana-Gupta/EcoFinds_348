// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import AddProduct from "./components/AddProduct";
import MyListings from "./components/MyListings";
import ProductDetail from "./components/ProductDetail";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import PreviousPurchases from "./components/PreviousPurchases";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/previous-purchases" element={<PreviousPurchases />} />
         <Navbar />
           <Routes>
           {/* your routes */}
      </Routes>
      </Routes>
    </Router>
  );
}

export default App;
import { Link } from 'react-router-dom';
<Link to="/signup">Sign up</Link>
