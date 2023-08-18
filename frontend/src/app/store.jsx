import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trailerReducer from "../features/trailers/trailerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trailers: trailerReducer,
  },
});
