import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      state = action.payload;
    }
  }
})

const { actions,reducer } = usersSlice;

export const { setUsers } = actions;
export const selectUsers = (state) => state.users 

export default reducer;