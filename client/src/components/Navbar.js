import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">EcoFinds</Link>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/add-product" className="hover:underline">Add Product</Link>
        <Link to="/my-listings" className="hover:underline">My Listings</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/previous-purchases" className="hover:underline">Purchases</Link>
        <Link to="/" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
