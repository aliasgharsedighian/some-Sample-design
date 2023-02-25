import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "../slices/signUpslice";
import UserActivityReducer from "../slices/userActivitySlice";
import UserAccountReducer from "../slices/userLogin";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    SignUpPage: SignUpReducer,
    UserActivity: UserActivityReducer,
    userLogged: UserAccountReducer,
    basket: basketReducer,
  },
});
