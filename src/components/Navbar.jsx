import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/portfolio" className="mx-2">Projects</Link>
          <Link to="/contact" className="mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;