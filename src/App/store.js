import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "../slices/signUpslice";
import UserActivityReducer from "../slices/userActivitySlice";

export const store = configureStore({
  reducer: {
    SignUpPage: SignUpReducer,
    UserActivity: UserActivityReducer,
  },
});
