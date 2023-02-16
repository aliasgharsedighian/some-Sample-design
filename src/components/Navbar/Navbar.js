import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activity, changeActivity } from "../../slices/userActivitySlice";
import { userLogged } from "../../slices/userLogin";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userActivity = useSelector(activity);
  const userAccount = useSelector(userLogged);

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
          <button
            className={userActivity ? "logout-button" : "login-button"}
            onClick={() => {
              if (userActivity == false) {
                navigate("/login-page");
              } else {
                dispatch(changeActivity(false));
              }
            }}
          >
            {userActivity ? "log out" : "log in"}
          </button>
          {userActivity ? (
            <span>{`Hello, ${userAccount.firstname}`}</span>
          ) : (
            <button className="free-button">Start free trial</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
