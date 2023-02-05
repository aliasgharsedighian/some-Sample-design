import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="banner">
      <section className="banner-section">
        <img className="banner-img" src="images/banner-img1.jpg" alt="" />
        <div className="banner-text">
          <h1>Hair Studio</h1>
          <p>Style your hair is style your life</p>
          <div className="banner-btn">
            <a href="#">Find Out</a>
            <a href="#">Read More</a>
          </div>
        </div>
      </section>
      {menuOpen && (
        <div className="banner-menu trasition-all duration-200 ease-in-out">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
                <a href="#">Feature</a>
                <a href="#">Services</a>
                <a href="#">Testimonials</a>
                <a href="#">Meet us</a>
                <a href="/login">Log In</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="menu-btn" onClick={menuChange}>
        <img src="icons/menu-icon.png" alt="" />
      </div>
    </div>
  );
}

export default Menu;
