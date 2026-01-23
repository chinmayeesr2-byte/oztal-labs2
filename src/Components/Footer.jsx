import "../Style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>Ozta Labs</div>
        <div className="footer-links">
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
          <Link to="/company-details">Company details</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </div>
      <p>©2026 Ozta Labs. All rights reserved.</p>
    </footer>
  );
}









