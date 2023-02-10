import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FRONTEND_SITE } from "../vars/endpoints.js";

export const getSiteData = createAsyncThunk("page/index", async () => {
  const response = await axios.get(
    FRONTEND_SITE
  );
  return response.data;
});

export const frontendSlice = createSlice({
  name: "siteData",
  initialState: {
    siteData: null,
    siteDataArr: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getSiteData.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getSiteData.fulfilled]: (state, action) => {
      state.pending = false;
      state.siteDataArr = [action.payload];
      state.error = false;
    },
    [getSiteData.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default frontendSlice.reducer;
