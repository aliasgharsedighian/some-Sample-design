import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-header-text">
          <h1>Enter Your Password</h1>
        </div>
        <div className="login-user-detail">
          <img src="images/Ellipse1.PNG" alt="" />
          <div className="text-detail">
            <h6>Sarah Bills</h6>
            <p>Business Account</p>
          </div>
        </div>
        <div className="user-login">
          <div className="password-login">
            <label htmlFor="">Password</label>
            <div className="password-container">
              <img className="lock-password" src="images/Lock.PNG" alt="" />
              <input className="input" type="password" />
              <img src="images/Frame.PNG" alt="" />
            </div>
          </div>
        </div>
        <div className="toggle-button">
          <div className="flex flex-grow">
            <input type="checkbox" />
            <p>stay Sign in</p>
          </div>
          <div>
            <button>Continue</button>
          </div>
        </div>
        <div className="reset-password">
          <a href="">Reset Password</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
