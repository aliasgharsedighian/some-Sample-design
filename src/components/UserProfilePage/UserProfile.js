import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { activity, userAccountLogged } from "../../slices/userSlice";
import "./UserProfile.css";

function UserProfile() {
  const user = useSelector(userAccountLogged);
  const userActivity = useSelector(activity);
  return (
    <>
      {userActivity ? (
        <section className="profile-page-container">
          <div className="profile-settings">
            <p>Public profile</p>
            <p>Account settings</p>
            <p>Notfication</p>
            <p>Pro Account</p>
          </div>
          <div className="profile-info">
            <h2>Public profile</h2>
            <div className="profile-picture">
              <img className="shadow-lg" src={user.img} alt="" />
              <div className="profile-picture-btn">
                <button className="profile-change-pic">change picture</button>
                <button className="profile-delete-pic">delete picture</button>
              </div>
            </div>
            <div className="profile-personal-info">
              <div className="profile-fir-las">
                <div className="profile-fir">
                  <label htmlFor="">First name</label>
                  <input type="text" value={user.firstname} />
                </div>
                <div className="profile-las">
                  <label htmlFor="">Last name</label>
                  <input type="text" value={user.lastname} />
                </div>
              </div>
              <div className="profile-other-info">
                <div className="profile--info">
                  <label htmlFor="">Location</label>
                  <input type="text" value={`${user.country} ${user.city}`} />
                </div>
                <div className="profile--info">
                  <label htmlFor="">Profession</label>
                  <input type="text" value={"Front-end Developer"} />
                </div>
                <div className="profile-bio-info">
                  <label htmlFor="">Bio</label>
                  <input type="text" value={"open source designer"} />
                </div>
                <h3>Online presence</h3>

                <div className="profile---info">
                  <img src="/images/social/dribbble.png" alt="" />
                  <input type="text" value={"https://. . ."} />
                </div>
                <div className="profile---info">
                  <img src="/images/social/instagram.jpg" alt="" />
                  <input type="text" value={"https://. . ."} />
                </div>
                <a href="#">+ Add other</a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="profile-not-login">
          <p>
            you aren't login yet. please <b>Sign up</b> or <b>Sign in</b> first
          </p>
          <Link to="/login-page">
            <button>Sign in</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign up</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default UserProfile;
