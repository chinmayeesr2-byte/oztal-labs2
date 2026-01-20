import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h3>Ozta Labs</h3>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </div>
    </nav>
  );
}
