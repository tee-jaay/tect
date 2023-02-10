import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AUTH_LOGIN, AUTH_LOGOUT, USERS_ALL } from "../vars/endpoints.js";

export const userSignIn = createAsyncThunk("auth/signIn", async (loginData) => {
  const response = await axios.post(
    AUTH_LOGIN,
    loginData
  );
  localStorage.setItem("auth_token", response.data.accessToken);
  return response.data;
});

export const userSignOut = createAsyncThunk(
  AUTH_LOGOUT,
  (async) => {
    console.log("userSignOut");
    localStorage.setItem("token", "");
    localStorage.removeItem("token");
    return "sign out";
  }
);

export const allUsers = createAsyncThunk("users/all", async () => {
  const response = await axios.get(USERS_ALL);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [userSignIn.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [userSignIn.fulfilled]: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [userSignIn.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [userSignOut.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [userSignOut.fulfilled]: (state) => {
      state.pending = false;
      state.currentUser = null;
      state.error = false;
    },
    [userSignOut.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [allUsers.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [allUsers.fulfilled]: (state, action) => {
      state.pending = false;
      state.users = action.payload;
      state.error = false;
    },
    [allUsers.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
