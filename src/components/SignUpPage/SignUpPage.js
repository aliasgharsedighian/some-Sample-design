import "./SignUpPage.css";
import { useDispatch } from "react-redux";
import { addToUser } from "../../slices/signUpslice";
import { useState } from "react";
import UserList from "../UserList/UserList";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    const user = {
      firstname,
      lastname,
      city,
      country,
      email,
      password,
      img,
    };
    dispatch(addToUser(user));
    navigate("/user-list");
  };

  return (
    <section className="sign-up-section">
      <div className="sign-up-effect">
        <div className="sign-up-container">
          <div className="sign-up-info">
            <h2>Join the community</h2>
            <p>
              Take your art to the next level. get it seen by millions of people
            </p>
            <button onClick={() => navigate("/")}>join with Facebook</button>
            <span>Or</span>
          </div>
          <div className="sign-up-form">
            <form action="">
              <div className="sign-up-name">
                <input
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="sign-up-city-country">
                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="sign-up-pass-btn">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="file"
                  onChange={(e) => {
                    setImg("http://localhost:3000/images/userList/userAdd.jpg");
                    console.log(e.target.files);
                  }}
                />
                <button onClick={addUser}>Create New Account</button>
              </div>
            </form>
          </div>
          <div className="sign-up-warn">
            <span>
              By joining,you agree to our Terms Of Service and Privacy Policy.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
