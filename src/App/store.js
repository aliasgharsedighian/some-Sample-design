import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "../slices/signUpslice";
import UserActivityReducer from "../slices/userActivitySlice";
import UserAccountReducer from "../slices/userLogin";

export const store = configureStore({
  reducer: {
    SignUpPage: SignUpReducer,
    UserActivity: UserActivityReducer,
    userLogged: UserAccountReducer,
  },
});
