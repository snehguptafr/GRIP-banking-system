// import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar({ active, setActive }) {
  console.log(active)
  return (
    <nav>
      <span className="nav-heading">GRIP Banking System</span>
      <div className="nav-links">
        <span className={`nav-pills ${active === 'home' && 'active'}`} onClick={() => setActive('home')}><Link to={'/'}>Home</Link></span>
        <span className={`nav-pills ${active === 'customers' && 'active'}`} onClick={() => setActive('customers')} ><Link to={'/customers'}>All Customers</Link></span>
        <span className={`nav-pills ${active === 'about' && 'active'}`} onClick={() => setActive('about')} ><Link to={'/about'}>About</Link></span>
      </div>
    </nav>
  );
}
