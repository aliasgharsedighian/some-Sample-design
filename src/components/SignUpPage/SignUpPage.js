import "./SignUpPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToUser,
  changeActivity,
  addUserLogged,
  addedUser,
} from "../../slices/userSlice";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const users = useSelector(addedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const cityInput = useRef();
  const countryInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const imgInput = useRef();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const user = {
    id: Date.now().toString(),
    firstname: capitalizeFirstLetter(firstname),
    lastname: capitalizeFirstLetter(lastname),
    city: capitalizeFirstLetter(city),
    country: country.toUpperCase(),
    email,
    password,
    img,
  };

  const userExist = (user) => {
    for (const account of users) {
      if (user === account.email) {
        return false;
      }
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    signUpCondition();
  };

  function ValidateEmail() {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    }
    return false;
  }

  function signUpCondition() {
    if (firstname === "") {
      firstnameInput.current.focus();
    } else if (lastname === "") {
      lastnameInput.current.focus();
    } else if (city === "") {
      cityInput.current.focus();
    } else if (country === "") {
      countryInput.current.focus();
    } else if (email === "") {
      emailInput.current.focus();
    } else if (password === "") {
      passwordInput.current.focus();
    } else if (img === "") {
      setImg("http://localhost:3000/images/userList/no-img.png");
    } else if (ValidateEmail() === false) {
      alert("Invalid email address!");
    } else if (password.length < 6) {
      alert("password must be 6 or more");
      passwordInput.current.focus();
    } else if (userExist(email) === false) {
      alert("this email is taken");
    } else {
      dispatch(addToUser(user));
      dispatch(addUserLogged(user));
      dispatch(changeActivity(true));
      navigate("/user-list");
    }
  }

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
                  ref={firstnameInput}
                  type="text"
                  value={firstname}
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  ref={lastnameInput}
                  type="text"
                  value={lastname}
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="sign-up-city-country">
                <input
                  ref={cityInput}
                  type="text"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  ref={countryInput}
                  type="text"
                  value={country}
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="sign-up-pass-btn">
                <input
                  ref={emailInput}
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  ref={passwordInput}
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  ref={imgInput}
                  type="file"
                  onChange={(e) => {
                    setImg("http://localhost:3000/images/userList/userAdd.jpg");
                    console.log(e.target.files);
                  }}
                />
                <button
                  className="disabled:bg-gray-600"
                  disabled={
                    !firstname ||
                    !lastname ||
                    !city ||
                    !country ||
                    !email ||
                    !password
                  }
                  onClick={addUser}
                >
                  Create New Account
                </button>
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
