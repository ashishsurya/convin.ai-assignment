import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    count: 0,
    users : []
  },
  reducers: {
    setUsers(state, action) {
      state = action.payload;
      return state;
    }
  }
})

const { actions,reducer } = usersSlice;

export const { setUsers } = actions;
export const selectUsers = (state) => state.users

export default reducer;