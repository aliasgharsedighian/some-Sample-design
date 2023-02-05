import "./UserList.css";
import { Link } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { addedUser } from "../../slices/signUpslice";
import { useState } from "react";

function UserList() {
  const users = useSelector(addedUser);
  const [searchTerm, setSearchTerm] = useState("");

  // const LOCAL_STORAGE_LIST_KEY = "users.list";
  // users.JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || users;
  return (
    <section className="userList-section">
      <div className="usersList-container">
        <div className="usersList-header">
          <div className="header-text">
            <h3>Users</h3>
            <div className="sign-up">
              <Link to="/sign-up">
                Sign Up <UserPlusIcon className="user-plus-icon" />{" "}
              </Link>
            </div>
          </div>
          <div className="search-link">
            <div className="search-area">
              <img src="images/search-icon.png" alt="" />
              <input
                type="text"
                placeholder="Search Users"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="link-area">
              <a href="#">Reputation</a>
              <a href="#">New users</a>
              <a href="#">Voters</a>
              <a href="#">Editors</a>
              <a href="#">Moderators</a>
            </div>
          </div>
        </div>
        <div className="usersList-area">
          {users
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.firstname.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.lastname.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.city.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((user) => {
              return (
                <div key={user.id} className="user-area">
                  <div className="user-img">
                    <img src={user.img} alt="" />
                  </div>
                  <div className="user-detail">
                    <div className="user-name">
                      <h6>
                        {user.firstname} {user.lastname}
                      </h6>
                      <p>
                        {user.city}, {user.country}
                      </p>
                    </div>
                    <div className="user-fav">
                      <span>clothes</span>
                      <span>stem</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default UserList;
