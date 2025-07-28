import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/userSlice";

// Step 1: Load user from localStorage
const persistedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// Step 2: Use it in preloadedState
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: {
    user: persistedUser,
  },
});

export default appStore;
