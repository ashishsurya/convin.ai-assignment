import { createSlice } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
  name: "currUser",
  initialState: null,
  reducers: {
    setUserId(state,action) {
      state = action.payload
      return state;
    }
  }
})

export const { setUserId } = userIdSlice.actions;

export const selectUserId = (state) => state.currUser

export default userIdSlice.reducer;