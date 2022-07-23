import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import userIdReducer from "../features/userIdSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currUser : userIdReducer,
  },
});
