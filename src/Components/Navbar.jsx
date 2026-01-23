import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";
<li>
  <Link to="/" className={location.pathname === "/" ? "active" : ""}>
    About us
  </Link>
</li>


export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">Ozta Labs</div>
      <ul className="nav-links">
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About us</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
        <li><Link to="/careers" className={location.pathname === "/careers" ? "active" : ""}>Careers</Link></li>
      </ul>
    </nav>
  );
}








