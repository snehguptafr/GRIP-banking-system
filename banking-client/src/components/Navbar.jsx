// import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <span className="nav-heading">GRIP Banking System</span>
      <div className="nav-links">
        <span className="nav-pills"><Link to={'/'}>Home</Link></span>
        <span className="nav-pills"><Link to={'/customers'}>All Customers</Link></span>
        <span className="nav-pills"><Link to={'/about'}>About</Link></span>
      </div>
    </nav>
  );
}
