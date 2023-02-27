import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "../slices/userSlice";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    SignUpPage: SignUpReducer,
    basket: basketReducer,
  },
});
