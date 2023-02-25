import "./UserList.css";
import { Link, useNavigate } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { addedUser } from "../../slices/signUpslice";
import { useEffect, useState } from "react";
import { userCategories } from "../../constants";

function UserList() {
  const users = useSelector(addedUser);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  const isActive = (path) => {
    return pathname?.split("/").pop() === path;
  };

  useEffect(() => {
    console.log(users);
  }, []);

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
              {userCategories.map((category) => {
                return (
                  <Link
                    className={`user-link ${isActive(category) && "underline"}`}
                    to={`/users/${category}`}
                  >
                    {category}
                  </Link>
                );
              })}
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
                <div
                  key={user.id}
                  onClick={() => navigate(`/user-list/${user.id}`)}
                  className="user-area"
                >
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
                      {user.fav?.map((favorite) => (
                        <span>{favorite}</span>
                      ))}
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
