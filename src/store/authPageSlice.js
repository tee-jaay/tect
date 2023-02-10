import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTHPAGE } from "../vars/endpoints.js";

export const getAuthPages = createAsyncThunk(
  "page/authpage/index",
  async () => {
    const response = await axios.get(
      AUTHPAGE
    );
    return response.data;
  }
);

export const uploadImage = createAsyncThunk(
  "page/authpage/image",
  async (sendData) => {
    const response = await axios.post(
      AUTHPAGE,
      sendData
    );
    return response.data;
  }
);

export const authPageSlice = createSlice({
  name: "authPage",
  initialState: {
    authPage: null,
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [uploadImage.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [uploadImage.fulfilled]: (state, action) => {
      state.pending = false;
      state.authPage = [action.payload];
      state.error = false;
    },
    [uploadImage.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getAuthPages.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAuthPages.fulfilled]: (state, action) => {
      state.pending = false;
      state.authPage = [action.payload];
      state.error = false;
    },
    [getAuthPages.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default authPageSlice.reducer;
