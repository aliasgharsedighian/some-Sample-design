import { createSlice } from "@reduxjs/toolkit";

const initialState = { userAccount: [] };

export const userLoginSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    addUserAccount: (state, action) => {
      state.userAccount = action.payload;
    },
  },
});

export const { addUserAccount } = userLoginSlice.actions;
export const userLogged = (state) => state.userLogged.userAccount;

export default userLoginSlice.reducer;
