import { useState } from "react";
import { useSelector } from "react-redux";
import { addedUser } from "../../slices/signUpslice";
import "./LoginPage2.css";

function LoginPage2() {
  const users = useSelector(addedUser);

  const [username, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");
  const [accounts, setAccounts] = useState(users);

  const userExist = (user, pass) => {
    for (const account of accounts) {
      if (account.email == user && account.password == pass) {
        return true;
      }
    }
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userExist(username, passWord)) {
      alert(`Welcome ${username}, You Logged in successfully!`);
    } else {
      alert("username or password must be wrong");
    }
    setPassWord("");
    setUsername("");
  };

  return (
    <section className="login-page-section">
      <div className="login-page-container shadow-2xl">
        <h2>Log in</h2>
        <form onSubmit={onSubmit} className="form-login-page">
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
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
          <a href="#">
            <p>can't log in? Already have an account?</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LoginPage2;
