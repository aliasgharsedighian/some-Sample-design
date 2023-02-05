import { createSlice } from "@reduxjs/toolkit";
// import SignUpPage from "../components/SignUpPage/SignUpPage";
import { UserListData } from "../components/UserList/UserListData";

const LOCAL_STORAGE_LIST_KEY = "name.lists";

let initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || {
  users: UserListData,
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(initialState));
};

export const singUpSlice = createSlice({
  name: "SignUpPage",
  initialState,
  reducers: {
    addToUser: (state, action) => {
      state.users = [...state.users, action.payload];
      save();
    },
  },
});

export const { addToUser } = singUpSlice.actions;
export const addedUser = (state) => state.SignUpPage.users;

export default singUpSlice.reducer;
