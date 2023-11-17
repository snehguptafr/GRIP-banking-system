import { Link, useLocation } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer>
      <div className="footer-links">
        <span className="foot-head">Links</span>
        <ul>
          <li>
            <Link
              className={`footer-link ${pathname === "/" && "active-link"}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`footer-link ${
                pathname === "/customers" && "active-link"
              }`}
              to="/customers"
            >
              All Customers
            </Link>
          </li>
          <li>
            <Link
              className={`footer-link ${
                pathname === "/about" && "active-link"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="personal">
        <span className="foot-head">Connect</span>
        <span>
          <a className="footer-link" href="https://www.github.com/snehguptafr">
            GitHub
          </a>
        </span>
        <span>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/sneh-gupta"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
