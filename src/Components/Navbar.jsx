import { Link } from "react-router-dom";
import "../Styles/global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h3 className="logo">Ozta Labs</h3>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </div>
    </nav>
  );
}


