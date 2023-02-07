import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addedUser } from "../../slices/signUpslice";
import "./LoginPage2.css";
import { Link } from "react-router-dom";
import { changeActivity } from "../../slices/userActivitySlice";

function LoginPage2() {
  const users = useSelector(addedUser);
  const dispatch = useDispatch();
  const emailInput = useRef();
  const passInput = useRef();

  const [username, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");
  const [accounts] = useState(users);

  const userExist = (user, pass) => {
    for (const account of accounts) {
      if (account.email == user && account.password == pass) {
        return true;
      }
    }
    return false;
  };

  const changeUserActivity = (val) => {
    dispatch(changeActivity(val));
  };

  const clearLoginInput = () => {
    emailInput.current.value = null;
    passInput.current.value = null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      emailInput.current.focus();
    } else if (passWord === "") {
      passInput.current.focus();
    } else if (userExist(username, passWord)) {
      alert(`Welcome ${username}, You Logged in successfully!`);
      changeUserActivity(true);
    } else {
      alert("username or password must be wrong");
    }
    clearLoginInput();
  };

  return (
    <section className="login-page-section">
      <div className="login-page-container shadow-2xl">
        <h2>Log in</h2>
        <form onSubmit={onSubmit} className="form-login-page">
          <input
            ref={emailInput}
            type="text"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            ref={passInput}
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassWord(e.target.value)}
          />
          <button onClick={onSubmit}>Log in</button>
        </form>
        <span>OR</span>
        <div className="login-btn-link">
          <div className="social-login-btn">
            <img src="images/social/google-logo.png" alt="" />
            <p>Continue with Google</p>
          </div>
          <div className="social-login-btn">
            <img src="images/social/microsoft-logo.png" alt="" />
            <p>Continue with Microsoft</p>
          </div>
          <div className="social-login-btn">
            <img src="images/social/apple-logo.png" alt="" />
            <p>Continue with Apple</p>
          </div>
        </div>
        <div className="info-login-page">
          <Link to="/sign-up">
            <p>can't log in? Already have an account?</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPage2;
