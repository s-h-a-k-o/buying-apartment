import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: true };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = false;
    },
    logout(state) {
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
