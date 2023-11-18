import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav>
      <span className="nav-heading">GRIP Banking System</span>
      <div className="nav-links">
      <Link to={'/'}><span className={`nav-pills ${pathname === '/' && 'active'}`}>Home</span></Link>
      <Link to={'/customers'}><span className={`nav-pills ${pathname === '/customers' && 'active'}`}  >All Customers</span></Link>
      <Link to={'/about'}><span className={`nav-pills ${pathname === '/about' && 'active'}`}  >About</span></Link>
      </div>
    </nav>
  );
}
