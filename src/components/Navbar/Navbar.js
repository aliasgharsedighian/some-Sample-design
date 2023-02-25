import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activity, changeActivity } from "../../slices/userActivitySlice";
import { userLogged } from "../../slices/userLogin";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { selectItems } from "../../slices/basketSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userActivity = useSelector(activity);
  const userAccount = useSelector(userLogged);
  const items = useSelector(selectItems);

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="logo-area">
          <img src="images/Navbar/Logo.PNG" alt="" />
        </div>
        <div className="navbar-link-area">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        {/* <DarkModeButton /> */}

        <div className="login-area">
          <div
            onClick={() => navigate("/checkout")}
            className="relative link flex items-center mr-5"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-[35px]" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
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
