import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "../slices/signUpslice";

export const store = configureStore({
  reducer: {
    SignUpPage: SignUpReducer,
  },
});
