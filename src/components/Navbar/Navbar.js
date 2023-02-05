import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="logo-area">
          <img src="images/Navbar/Logo.PNG" alt="" />
        </div>
        <div className="navbar-link-area">
          <Link to="/">Home</Link>
          <a href="#">Articles</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="login-area">
          <button className="login-button">Login</button>
          <button className="free-button">Start free trial</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
