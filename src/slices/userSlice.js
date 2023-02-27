import { createSlice } from "@reduxjs/toolkit";
// import SignUpPage from "../components/SignUpPage/SignUpPage";
import { UserListData } from "../components/UserList/UserListData";

const users =
  localStorage.getItem("userItems") !== null
    ? JSON.parse(localStorage.getItem("userItems"))
    : UserListData;

const userActivity =
  localStorage.getItem("userActivity") !== null
    ? JSON.parse(localStorage.getItem("userActivity"))
    : false;

const userAccount =
  localStorage.getItem("userAccountLogged") !== null
    ? JSON.parse(localStorage.getItem("userAccountLogged"))
    : [];

const setItemFunc = (user) => {
  localStorage.setItem("userItems", JSON.stringify(user));
};

let initialState = {
  users: users,
  userActivity: userActivity,
  userLogged: userAccount,
};

export const singUpSlice = createSlice({
  name: "SignUpPage",
  initialState,
  reducers: {
    addToUser: (state, action) => {
      state.users = [...state.users, action.payload];
      setItemFunc(state.users.map((item) => item));
    },
    changeActivity: (state, action) => {
      state.userActivity = action.payload;
      localStorage.setItem("userActivity", JSON.stringify(state.userActivity));
    },
    addUserLogged: (state, action) => {
      state.userLogged = action.payload;
      localStorage.setItem(
        "userAccountLogged",
        JSON.stringify(state.userLogged)
      );
    },
  },
});

export const { addToUser, changeActivity, addUserLogged } = singUpSlice.actions;
export const addedUser = (state) => state.SignUpPage.users;
export const activity = (state) => state.SignUpPage.userActivity;
export const userAccountLogged = (state) => state.SignUpPage.userLogged;

export default singUpSlice.reducer;
