import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2025 Herbal Vista | All Rights Reserved</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
