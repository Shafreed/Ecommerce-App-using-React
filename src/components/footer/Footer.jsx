import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; Shafs Store {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
