import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (location.pathname === "/home" && section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/home#${sectionId}`; // Redirect if not on HomePage
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Herbal Vista</h1>
      <ul className="nav-links">
        <li><Link to="/home" className={`nav-item ${location.pathname === "/home" ? "home-active" : ""}`}>Home</Link></li>
        <li><a href="#about" className="nav-item" onClick={(e) => handleScrollToSection(e, "about")}>About</a></li>
        <li><Link to="/app" className="nav-item">Plants</Link></li>
        <li><a href="#contact" className="nav-item" onClick={(e) => handleScrollToSection(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
