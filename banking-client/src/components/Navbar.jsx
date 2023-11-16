// import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav>
      <span className="nav-heading">GRIP Banking System</span>
      <div className="nav-links">
        <span className={`nav-pills ${pathname === '/' && 'active'}`}><Link to={'/'}>Home</Link></span>
        <span className={`nav-pills ${pathname === '/customers' && 'active'}`}  ><Link to={'/customers'}>All Customers</Link></span>
        <span className={`nav-pills ${pathname === '/about' && 'active'}`}  ><Link to={'/about'}>About</Link></span>
      </div>
    </nav>
  );
}
