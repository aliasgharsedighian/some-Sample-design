import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="info">
        <h3>INFO</h3>
        <a href="#">Formats</a>
        <a href="#">Compression</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <a href="#">Status</a>
      </div>
      <div className="resources">
        <h3>RESOURCES</h3>
        <a href="#">Developer API</a>
        <a href="#">Tools</a>
        <a href="#">Blog</a>
      </div>
      <div className="company">
        <h3>COMPANY</h3>
        <a href="#">About Us</a>
        <a href="#">Sustainabillity</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy</a>
      </div>
      <div className="sub-social">
        <div className="subscribe">
          <p>Subscribe to our email newsletter</p>
          <div className="sub-input">
            <input placeholder="Your email" type="text" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="social">
          <p>Follow us</p>
          <div className="social-img">
            <img src="images/social/facebook.PNG" alt="" />
            <img src="images/social/twitter.PNG" alt="" />
            <img src="images/social/instagram.PNG" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
