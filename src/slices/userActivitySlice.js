import { createSlice } from "@reduxjs/toolkit";

const initialState = { userActivity: false };

export const userActivitySlice = createSlice({
  name: "UserActivity",
  initialState,
  reducers: {
    changeActivity: (state, action) => {
      state.userActivity = action.payload;
    },
  },
});

export const { changeActivity } = userActivitySlice.actions;
export const activity = (state) => state.UserActivity.userActivity;

export default userActivitySlice.reducer;
