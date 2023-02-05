import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Search.css";

function Search() {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [activityList, setActivityList] = useState([
    { Activity: "Developing" },
  ]);

  const generateActivity = () => {
    setButtonDisable(true);
    const getActivity = async () => {
      const activity = await axios.get("https://www.boredapi.com/api/activity");
      setActivityList([...activityList, activity.data]);
      setButtonDisable(false);
    };
    getActivity();
  };

  return (
    <div className="search-container">
      <label htmlFor="">Search User</label>
      <input className="input ml-5" type="text" />
      <button
        disabled={buttonDisable}
        onClick={generateActivity}
        className="button mx-5"
      >
        Show User
      </button>
      <div className="border border-slate-800 rounded-lg w-[300px] mx-auto my-10">
        {activityList.map((u) => {
          return (
            <div className="">
              <h2>{u.activity}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
