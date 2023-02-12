import { createSlice } from "@reduxjs/toolkit";
// import SignUpPage from "../components/SignUpPage/SignUpPage";
import { UserListData } from "../components/UserList/UserListData";

let initialState = {
  users: UserListData,
};

export const singUpSlice = createSlice({
  name: "SignUpPage",
  initialState,
  reducers: {
    addToUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { addToUser } = singUpSlice.actions;
export const addedUser = (state) => state.SignUpPage.users;

export default singUpSlice.reducer;
